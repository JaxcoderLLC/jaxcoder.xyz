/**
 * HIPAA Violation Data Fetcher
 * Fetches breach data from HHS database and filters for Southeast states
 */

import axios from 'axios';
import * as fs from 'fs/promises';
import * as path from 'path';
import { 
  RawViolation, 
  ProcessedViolation, 
  TickerViolation, 
  TickerData, 
  SOUTHEAST_STATES,
  SoutheastState 
} from './types';

const HHS_BREACH_URL = 'https://ocrportal.hhs.gov/ocr/breach/breach_report.csv';

export class HIPAAViolationFetcher {
  
  /**
   * Fetch and parse the HHS breach database CSV
   */
  async fetchBreachData(): Promise<ProcessedViolation[]> {
    console.log('Fetching HHS breach database...');
    
    try {
      const response = await axios.get(HHS_BREACH_URL, {
        timeout: 30000,
        responseType: 'text'
      });
      
      const violations = this.parseCSV(response.data);
      console.log(`Found ${violations.length} violations in Southeast states`);
      
      return violations;
      
    } catch (error) {
      console.error('Error fetching data:', error);
      throw new Error(`Failed to fetch violation data: ${error}`);
    }
  }
  
  /**
   * Parse CSV data and filter for Southeast states
   */
  private parseCSV(csvData: string): ProcessedViolation[] {
    const lines = csvData.split('\n');
    if (lines.length < 2) {
      throw new Error('Invalid CSV data received');
    }
    
    // Parse header
    const headers = lines[0].split(',').map(h => h.replace(/"/g, '').trim());
    const violations: ProcessedViolation[] = [];
    
    // Parse data rows
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      const values = this.parseCSVLine(line);
      if (values.length < headers.length) continue;
      
      const row: Record<string, string> = {};
      headers.forEach((header, index) => {
        row[header] = values[index] || '';
      });
      
      // Filter for Southeast states
      const state = row['State']?.trim().toUpperCase() as SoutheastState;
      if (SOUTHEAST_STATES.includes(state)) {
        violations.push({
          name: row['Name of Covered Entity']?.trim() || '',
          city: row['City']?.trim() || '',
          state,
          individualsAffected: this.parseNumber(row['Individuals Affected']),
          breachDate: row['Breach Submission Date']?.trim() || '',
          typeOfBreach: row['Type of Breach']?.trim() || ''
        });
      }
    }
    
    return violations;
  }
  
  /**
   * Parse a CSV line handling quoted values
   */
  private parseCSVLine(line: string): string[] {
    const values: string[] = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    
    values.push(current.trim());
    return values;
  }
  
  /**
   * Parse number from string, handling commas
   */
  private parseNumber(value: string): number {
    if (!value) return 0;
    const cleaned = value.replace(/[^0-9]/g, '');
    return parseInt(cleaned) || 0;
  }
  
  /**
   * Format violation data for ticker display
   */
  formatForTicker(violations: ProcessedViolation[]): TickerViolation[] {
    const formatted = violations.map(violation => {
      // Format date
      let formattedDate = violation.breachDate;
      try {
        const date = new Date(violation.breachDate);
        formattedDate = date.toLocaleDateString('en-US', { 
          month: 'short', 
          year: 'numeric' 
        });
      } catch {
        // Keep original if parsing fails
      }
      
      // Create ticker text
      const tickerText = `${violation.name} - ${violation.city}, ${violation.state} - ${formattedDate} - ${violation.individualsAffected.toLocaleString()} affected`;
      
      return {
        text: tickerText,
        date: violation.breachDate,
        affected: violation.individualsAffected,
        state: violation.state
      };
    });
    
    // Sort by date (most recent first) and take last 20
    formatted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return formatted.slice(0, 20);
  }
  
  /**
   * Save formatted data as JSON for the ticker
   */
  async saveTickerData(data: TickerViolation[], outputPath?: string): Promise<void> {
    const output: TickerData = {
      lastUpdated: new Date().toISOString(),
      violations: data
    };
    
    const filePath = outputPath || path.join(process.cwd(), 'violations.json');
    await fs.writeFile(filePath, JSON.stringify(output, null, 2));
    
    console.log(`Saved ${data.length} violations to ${filePath}`);
  }
  
  /**
   * Main execution method
   */
  async run(outputPath?: string): Promise<void> {
    console.log('Starting HIPAA violation data fetch...');
    
    try {
      // Fetch raw data
      const violations = await this.fetchBreachData();
      
      if (violations.length === 0) {
        console.log('No violations found for Southeast states');
        return;
      }
      
      // Format for ticker
      const tickerData = this.formatForTicker(violations);
      
      // Save to JSON
      await this.saveTickerData(tickerData, outputPath);
      
      console.log('Data fetch complete!');
      
    } catch (error) {
      console.error('Error in data fetch:', error);
      throw error;
    }
  }
}

// CLI execution
if (require.main === module) {
  const fetcher = new HIPAAViolationFetcher();
  fetcher.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}
