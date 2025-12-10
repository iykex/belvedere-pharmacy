# AGENTS.md - Development Guidelines

## Build & Commands
- `pnpm dev` - Start development server (http://localhost:3000)
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint (uses eslint-config-next core-web-vitals + typescript)

## Architecture
**Next.js 16 app router** with TypeScript 5. Structure:
- `app/` - Next.js pages (route segments: about-us, services, cookie-policy, privacy-policy, terms-conditions, contact-us, pharmacy-first)
- `components/` - React components organized by feature (about, contact, general, pharmacy-first, services, shared, ui, wrappers) + providers
- `lib/` - Utilities: constants, fonts, image-cdn, metadata, schema, types, utils
- `styles/` - Tailwind CSS (v4) globals
- Uses Shadcn UI components + Radix UI primitives + Tabler icons + Lucide icons
- Forms: react-hook-form + zod validation
- State/Theme: next-themes for dark mode support

## Code Style
- **Imports**: Use `@/*` path alias (tsconfig), destructure specific exports, group imports (deps → lib → components)
- **TypeScript**: Strict mode enabled; use `type` for JSX props (e.g., `type ReactNode`)
- **Naming**: PascalCase for components, camelCase for functions/utilities
- **Components**: Functional, export default or named exports; prop types via TypeScript
- **Styling**: Tailwind CSS with `cn()` utility (clsx + tailwind-merge); avoid inline styles
- **Formatting**: ESLint flat config; Prettier via ESLint (inherited from eslint-config-next)
- **No database/backend yet** - frontend-only architecture
