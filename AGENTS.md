# AGENTS.md - Developer Guidelines

## Project Overview

This is a React + TypeScript + Vite project with MUI (Material-UI) for building landing pages. The application allows users to create landing pages through a step-by-step wizard.

## Build & Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Preview production build
npm run preview
```

### Type Checking
- TypeScript compilation is included in the build command: `npm run build`
- For isolated type checking: `tsc -b`

### Running a Single Lint Check
```bash
# Lint specific file
npx eslint src/App.tsx

# Lint with auto-fix
npx eslint src/ --fix
```

---

## Code Style Guidelines

### General Principles

1. **Keep responses concise** - Answer with 1-3 sentences unless detail is requested
2. **Avoid unnecessary preamble/postamble** - Just provide the answer or code
3. **Be proactive only when asked** - Don't take unexpected actions

### Imports

- Use absolute imports from `@/` path when available
- Group imports in this order: React > External (MUI, icons) > Internal
- Use type-only imports when `verbatimModuleSyntax` is enabled:
  ```typescript
  import { useState } from 'react';
  import type { FC } from 'react';
  import { Box, Typography } from '@mui/material';
  import { useLandingBuilder } from './LandingBuilderContext';
  import type { LandingConfig } from './types';
  ```

### TypeScript

- **Always define types** for props, state, and function parameters
- Use interfaces for object shapes, types for unions/primitives
- Avoid `any` - use `unknown` if type is truly unknown
- Use `type` keyword for imports when possible
- Example:
  ```typescript
  interface LandingConfig {
    tipoNegocio: TipoNegocio | null;
    corPrimaria: CorPrimaria;
    imagens: ImagemUpload[];
  }

  type TipoNegocio = 'ecommerce' | 'servico' | 'portfolio';
  ```

### Naming Conventions

- **Components**: PascalCase (e.g., `LandingBuilder`, `StepTipoNegocio`)
- **Hooks**: camelCase starting with `use` (e.g., `useLandingBuilder`)
- **Types/Interfaces**: PascalCase (e.g., `LandingConfig`, `ImagemUpload`)
- **Constants**: UPPER_SNAKE_CASE for values, PascalCase for object keys
- **Files**: kebab-case (e.g., `landing-builder.tsx`, `step-tipo-negocio.tsx`)

### Component Structure

```typescript
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useLandingBuilder } from '../LandingBuilderContext';
import { TIPOS_NEGOCIO } from '../types';
import type { TipoNegocio } from '../types';

interface StepTipoNegocioProps {
  // Define props if any
}

const StepTipoNegocio: React.FC<StepTipoNegocioProps> = () => {
  const { config, setTipoNegocio, darkMode } = useLandingBuilder();

  return (
    <Box>
      {/* Component JSX */}
    </Box>
  );
};

export default StepTipoNegocio;
```

### MUI & Styling

- Use MUI components from `@mui/material`
- Use MUI icons from `@mui/icons-material`
- Prefer `sx` prop for one-off styles
- Use `styled()` or `makeStyles` for reusable styles
- Access theme values via `sx` or `useTheme()`:
  ```typescript
  <Box sx={{ 
    bgcolor: darkMode ? '#121212' : 'white',
    color: darkMode ? 'white' : 'inherit',
  }}>
  ```

### Context Usage

- Always check context is available with custom hook:
  ```typescript
  export const useLandingBuilder = () => {
    const context = useContext(LandingBuilderContext);
    if (!context) throw new Error('useLandingBuilder must be used within LandingBuilderProvider');
    return context;
  };
  ```

### Error Handling

- Use TypeScript for type safety instead of runtime checks when possible
- Provide meaningful error messages
- Handle null/undefined states explicitly

### React Best Practices

- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks
- Memoize expensive computations with `useMemo`/`useCallback`
- Use `key` prop correctly in lists

### CSS & Styling Guidelines

- Avoid plain CSS files - use MUI's `sx` prop or styled components
- Keep responsive styles in `sx` using MUI breakpoints:
  ```typescript
  sx={{ 
    fontSize: { xs: '1rem', md: '1.5rem' },
    display: { xs: 'block', md: 'flex' }
  }}
  ```

### State Management

- Use React Context for global state (like theme, user config)
- Use local `useState` for component-specific state
- Consider `useReducer` for complex state logic

---

## Project Structure

```
src/
├── components/
│   └── LandingBuilder/
│       ├── steps/              # Step wizard components
│       │   ├── StepTipoNegocio.tsx
│       │   ├── StepEstiloVisual.tsx
│       │   ├── StepLayout.tsx
│       │   └── StepImagens.tsx
│       ├── LandingBuilder.tsx   # Main wizard component
│       ├── LandingBuilderContext.tsx
│       ├── LandingPreview.tsx   # Preview component
│       ├── LandingDemo.tsx      # Demo/home page
│       └── types.ts             # Type definitions
├── App.tsx
├── main.tsx
└── index.css
```

---

## Common Tasks

### Adding a New Step
1. Create component in `src/components/LandingBuilder/steps/`
2. Import `useLandingBuilder` to access context
3. Add step to the `steps` array in `LandingBuilder.tsx`
4. Use `darkMode` from context for theming

### Adding New Type
1. Add type to `src/components/LandingBuilder/types.ts`
2. Export the type
3. Import where needed using `import type`

### Modifying Theme
- Theme colors are defined in `types.ts` as `CORES_PRIMARIAS`
- Dark mode state is in `LandingBuilderContext.tsx`

---

## Lint Rules

The project uses ESLint with TypeScript support. Key rules:
- `react-hooks/exhaustive-deps` - Ensures effect dependencies are complete
- `react-refresh/only-export-components` - Warns about non-component exports
- No console.log in production code (avoid)
- Prefer const over let

Run `npm run lint` before committing to catch issues.
