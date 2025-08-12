# Overview

This is a music artist website for "König vom Burgenland" by Artist Andrelele, built as a full-stack web application. The site features a royal-themed design with green and purple colors, showcasing the artist's music track with streaming platform links, achievement cards highlighting the artist's legendary skills, and an interactive music player. The application uses a modern React frontend with a Node.js/Express backend and PostgreSQL database for future extensibility.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture
- **Static Web-Page**: Rendered as a simple Web-Page that doesn't need a backend server

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development and build tooling
- **Styling**: Tailwind CSS with custom royal theme colors (green, purple, gold) and shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Components**: Radix UI primitives with custom styling for consistent design system
- **Design System**: Component-based architecture using shadcn/ui with custom royal theme

## Component Architecture
- **UI Components**: Modular component system with reusable elements (buttons, cards, dialogs, etc.)
- **Custom Components**: Specialized components like MusicPlayer and AchievementCard for domain-specific functionality
- **Layout System**: Responsive design with mobile-first approach and custom breakpoints
- **Theme System**: CSS custom properties for consistent theming across components

# External Dependencies

## UI & Styling Libraries
- **Radix UI**: Accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets for social media and platform icons

## Development Tools
- **Vite**: Fast build tool with HMR and TypeScript support
- **Replit Integration**: Development environment integration with cartographer and runtime error overlay
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

## Frontend Libraries
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **Wouter**: Lightweight routing solution
- **Class Variance Authority**: Utility for creating variant-based component APIs
- **Date-fns**: Date manipulation and formatting utilities
