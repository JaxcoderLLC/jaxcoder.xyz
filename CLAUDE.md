# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 tech consulting website for Jaxcoder LLC built with TypeScript, React 18, and Tailwind CSS. The site features interactive 3D elements, lead capture functionality, and modern web animations.

## Development Commands

```bash
# Install dependencies (using Bun)
bun install

# Run development server
bun dev

# Build for production
bun build

# Start production server
bun start
```

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15.1.3 with App Router
- **Language**: TypeScript 5.7.2 with strict mode
- **Styling**: Tailwind CSS 3.3.0 with custom animations and dark mode support
- **UI Components**: shadcn/ui components (new-york style)
- **Authentication**: Stack Auth (@stackframe/stack)
- **3D Graphics**: Three.js and Spline for interactive elements
- **Analytics**: Google Analytics + Vercel Analytics

### Key Integrations
- **Airtable**: Lead management and CRM (requires `AIRTABLE_API_KEY` and `AIRTABLE_BASE_ID` environment variables)
- **Stack Auth**: Authentication system integrated at `/app/handler/[...stack]/`

### Project Structure
- `/src/app/` - Next.js App Router pages and API routes
- `/src/components/` - React components including UI primitives and feature components
- `/src/lib/` - Utilities and external service integrations
- Client-side environment variables should use `NEXT_PUBLIC_` prefix

### Important Notes
- No testing framework is currently configured
- No linting or formatting tools are set up
- Git workflow: main branch for production, feature branches for development
- The project uses Server Components by default - mark client components with "use client"
- Tailwind configuration includes custom color schemes and animations in `tailwind.config.ts`