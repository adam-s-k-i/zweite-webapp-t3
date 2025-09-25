# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a T3 Stack application built with Next.js 15, TypeScript, Prisma, NextAuth.js, and Tailwind CSS. The project follows the T3 Stack conventions with a focus on type safety and developer experience. ReactBits is used as the primary UI component library for building animated and interactive user interfaces.

## Development Commands

### Core Development
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run preview` - Build and preview production build

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run typecheck` - TypeScript type checking
- `npm run check` - Combined lint and typecheck
- `npm run format:check` - Check Prettier formatting
- `npm run format:write` - Format code with Prettier

### Database Operations
- `npm run db:generate` - Generate Prisma client and run migrations
- `npm run db:migrate` - Deploy migrations to production
- `npm run db:push` - Push schema changes to database
- `npm run db:studio` - Open Prisma Studio
- `npm run postinstall` - Generate Prisma client after install

## Architecture

### File Structure
- `src/` - Source code with path alias `~/`
- `src/app/` - Next.js 13+ App Router pages and API routes
- `src/server/` - Server-side code (auth, database)
- `src/styles/` - Global CSS and Tailwind styles
- `prisma/` - Database schema and migrations

### Key Technologies
- **Next.js 15** - React framework with App Router
- **TypeScript** - Strict type checking enabled
- **Prisma** - Database ORM with PostgreSQL
- **NextAuth.js** - Authentication with Discord provider
- **Tailwind CSS** - Utility-first CSS framework
- **ReactBits** - Animated and interactive UI component library
- **T3 Env** - Type-safe environment variable management

### Database Schema
- **User** - Authentication users with Discord OAuth
- **Account** - OAuth account connections
- **Session** - User sessions
- **Post** - Example content model with user relations
- **VerificationToken** - Email verification tokens

### Authentication
- Discord OAuth provider configured
- Prisma adapter for session management
- Type-safe session augmentation
- Cached auth function for performance

### Environment Variables
- Uses `@t3-oss/env-nextjs` for type-safe env validation
- Server variables: `AUTH_SECRET`, `AUTH_DISCORD_ID`, `AUTH_DISCORD_SECRET`, `DATABASE_URL`
- Validation skipped with `SKIP_ENV_VALIDATION` flag

### ReactBits UI Components
- **Primary UI Framework** - ReactBits is used for all interactive and animated components
- **Component Philosophy** - Focus on high-quality, animated, interactive, and fully customizable components
- **Integration** - Components work seamlessly with Tailwind CSS for styling customization
- **Usage Pattern** - Import ReactBits components as needed for specific UI requirements

## Specialized SubAgents

This project has access to specialized agents for different aspects of development. Use these agents for complex, domain-specific tasks:

### Available Agents

- **architecture-agent** - Central architecture coordinator for T3 Stack with ReactBits
  - Use for: Overall project structure, coordination between frontend and backend, complex architectural decisions
  - Tools: Task, Read, Edit, Write, Glob, Grep, Bash, TodoWrite

- **frontend-agent** - ReactBits UI component specialist for T3 Stack frontend
  - Use for: UI component development, ReactBits integration, frontend animations and interactions
  - Tools: Read, Edit, Write, Glob, Grep

- **backend-agent** - Backend specialist for API routes, database operations, and server logic
  - Use for: API development, Prisma database operations, server-side logic
  - Tools: Read, Edit, Write, Glob, Grep, Bash

- **auth-agent** - Authentication and security specialist for NextAuth.js implementation
  - Use for: Authentication flows, security implementation, NextAuth.js configuration
  - Tools: Read, Edit, Write, Glob, Grep

- **testing-agent** - Quality assurance and testing specialist for T3 Stack applications
  - Use for: Test development, quality assurance, testing strategies
  - Tools: Read, Edit, Write, Glob, Grep, Bash, TodoWrite

### Usage Guidelines

- Launch agents concurrently when working on multiple aspects simultaneously
- Provide detailed task descriptions as agents are stateless
- Use general-purpose agent for open-ended searches and complex research
- Agents should be used proactively for their specialized domains

## Development Notes

- Path aliases use `~/` prefix for `src/` directory
- TypeScript strict mode enabled with additional safety checks
- ESLint configured with TypeScript support and Next.js rules
- Prettier with Tailwind CSS plugin for class sorting
- Database connection uses global singleton pattern for development
- ReactBits components should be used for complex UI interactions and animations
- Combine ReactBits with Tailwind CSS for consistent styling and customization