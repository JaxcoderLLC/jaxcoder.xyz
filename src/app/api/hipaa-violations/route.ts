/**
 * Next.js App Router API Route: /api/hipaa-violations
 * Handles HIPAA violation data fetching and serving
 */

import { NextRequest, NextResponse } from 'next/server';

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

// Mock data for development - replace with real data source
const mockViolations: TickerViolation[] = [
  {
    text: "Jacksonville Practice - 5,000 patient records exposed - $400K fine",
    date: "2024-03-15",
    affected: 5000,
    state: "FL"
  },
  {
    text: "Miami Healthcare System - 15,000 records compromised - $1.2M penalty",
    date: "2024-02-28",
    affected: 15000,
    state: "FL"
  },
  {
    text: "Tampa Clinic Network - Unsecured database - $850K fine",
    date: "2024-01-10",
    affected: 8500,
    state: "FL"
  },
  {
    text: "Orlando Medical Group - PHI breach affecting 3,200 patients - $275K penalty",
    date: "2024-04-02",
    affected: 3200,
    state: "FL"
  }
];

export async function GET() {
  try {
    const data: TickerData = {
      lastUpdated: new Date().toISOString(),
      violations: mockViolations
    };

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error serving violation data:', error);
    return NextResponse.json(
      { error: 'Failed to load violation data' },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    // Force refresh data (same as GET for now, but could fetch fresh data)
    const data: TickerData = {
      lastUpdated: new Date().toISOString(),
      violations: mockViolations
    };

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error refreshing violation data:', error);
    return NextResponse.json(
      { error: 'Failed to refresh violation data' },
      { status: 500 }
    );
  }
}