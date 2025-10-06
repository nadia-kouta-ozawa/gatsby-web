# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

- **Type**: Gatsby static site generator project
- **Purpose**: Personal portfolio website (gatsby 静的ジェネレーター)
- **Stack**: Gatsby + React + TypeScript (planned)
- **Package Manager**: pnpm

## Current State

This repository is in early development phase. Basic Node.js project structure exists with pnpm as package manager. The Gatsby project needs to be properly initialized with required dependencies and configuration.

## Setup Commands

### Initialize Gatsby Project
```bash
# Install Gatsby CLI globally (if not already installed)
npm install -g gatsby-cli

# Initialize new Gatsby site using starter template
gatsby new . https://github.com/gatsbyjs/gatsby-starter-default

# Or manually add Gatsby dependencies
pnpm add gatsby react react-dom
pnpm add -D @types/react @types/react-dom typescript
```

### Development Commands
```bash
# Start development server
pnpm develop
# or
pnpm start

# Build for production
pnpm build

# Serve production build locally
pnpm serve

# Clean Gatsby cache and public directories
pnpm clean
```

## Knowledge Management System

This project implements a structured knowledge management approach as documented in README.md:

### Daily Workflow
1. **Session Start**: Use `/init` command to reset and sync context
2. **During Development**: Record issues and solutions as they occur
3. **Feature Completion**: Update knowledge files with new patterns and learnings
4. **Monthly Review**: Organize and archive information

### Knowledge Categories
- **Technical Patterns**: GraphQL queries, component patterns, build optimizations
- **Debug Records**: Common issues and their solutions with file references
- **Improvements**: Feature additions and their impact
- **Common Commands**: Frequently used development patterns

### Example GraphQL Pattern
```graphql
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          date
        }
      }
    }
  }
}
```

## Development Practices

### Performance Priority
- Static site generation for optimal performance
- Modern browser support only (no IE11)
- Image optimization and lazy loading
- Bundle size monitoring

### File Organization
- Use relative imports for local components
- Follow Gatsby's file-based routing conventions
- Organize GraphQL queries in page components
- Separate utility functions into dedicated modules

## Current Project Status

**Warning**: This project is in pre-initialization phase. Before starting development:
1. Run Gatsby initialization commands from the Setup section above
2. Verify `package.json` has proper Gatsby dependencies (currently only has Claude Code)
3. Create basic Gatsby project structure (`src/`, `static/`, etc.)

## Technical Constraints

- Modern browsers only (no IE11)
- Static site generation for performance
- Performance optimization is priority
- Japanese content support required

## Important Reminders

- Always use `pnpm` as the package manager (not npm or yarn)
- Follow the knowledge management system documented in README.md
- Use `/init` command at session start to sync context
- Record issues in debug logs with file references (e.g., `src/pages/blog.tsx:25`)
- Update knowledge files after completing features
