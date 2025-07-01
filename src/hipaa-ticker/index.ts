/**
 * HIPAA Ticker - TypeScript Module
 * Easy integration for TypeScript applications
 */

export { HIPAAViolationFetcher } from './fetch-violations';
export * from './types';

// Re-export for convenience
import { HIPAAViolationFetcher } from './fetch-violations';
export default HIPAAViolationFetcher;
