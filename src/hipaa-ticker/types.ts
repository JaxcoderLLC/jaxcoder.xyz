/**
 * Type definitions for HIPAA violation data
 */

export interface RawViolation {
  'Name of Covered Entity': string;
  'City': string;
  'State': string;
  'Individuals Affected': string;
  'Breach Submission Date': string;
  'Type of Breach': string;
}

export interface ProcessedViolation {
  name: string;
  city: string;
  state: string;
  individualsAffected: number;
  breachDate: string;
  typeOfBreach: string;
}

export interface TickerViolation {
  text: string;
  date: string;
  affected: number;
  state: string;
}

export interface TickerData {
  lastUpdated: string;
  violations: TickerViolation[];
}

export type SoutheastState = 'FL' | 'GA' | 'SC' | 'TN' | 'AL' | 'LA';

export const SOUTHEAST_STATES: SoutheastState[] = ['FL', 'GA', 'SC', 'TN', 'AL', 'LA'];
