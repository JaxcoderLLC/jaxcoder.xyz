/**
 * HIPAA Ticker React Component
 * Clean React wrapper for the HIPAA violations ticker
 */

'use client';

import React, { useState, useEffect } from 'react';
import styles from './HIPAATicker.module.css';

interface TickerViolation {
  text: string;
  date: string;
  affected: number;
  state: string;
}

interface TickerData {
  lastUpdated: string;
  violations: TickerViolation[];
}

interface HIPAATickerProps {
  /** API endpoint to fetch violation data */
  dataUrl?: string;
  /** Refresh interval in minutes */
  refreshInterval?: number;
  /** Custom CSS class */
  className?: string;
  /** Show loading state */
  showLoading?: boolean;
}

export const HIPAATicker: React.FC<HIPAATickerProps> = ({
  dataUrl = '/api/hipaa-violations',
  refreshInterval = 30,
  className = '',
  showLoading = true
}) => {
  const [violations, setViolations] = useState<TickerViolation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchViolations = async () => {
    try {
      const response = await fetch(dataUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: TickerData = await response.json();
      console.log(data);
      setViolations(data.violations || []);
      setError(null);
    } catch (err) {
      console.error('Error fetching HIPAA violations:', err);
      setError(err instanceof Error ? err.message : 'Failed to load violations');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchViolations();

    // Set up auto-refresh
    if (refreshInterval > 0) {
      const interval = setInterval(fetchViolations, refreshInterval * 60 * 1000);
      return () => clearInterval(interval);
    }
  }, [dataUrl, refreshInterval]);

  const renderContent = () => {
    if (isLoading && showLoading) {
      return <span className={styles.loading}>Loading violations data...</span>;
    }

    if (error) {
      return <span className={styles.error}>Error loading violation data</span>;
    }

    if (!violations.length) {
      return <span className={styles.loading}>No recent violations found</span>;
    }

    // Duplicate violations for seamless scrolling
    const duplicatedViolations = [...violations, ...violations];
    
    return duplicatedViolations.map((violation, index) => (
      <span key={index} className={styles.violationItem}>
        {violation.text}
      </span>
    ));
  };

  return (
    <div className={`${styles.ticker} ${className}`}>
      <span className={styles.label}>HIPAA Violations</span>
      <div className={styles.content}>
        {renderContent()}
        {/* Duplicate content for seamless loop */}
        {!isLoading && !error && violations.length > 0 && renderContent()}
      </div>
    </div>
  );
};

export default HIPAATicker;
