# AGENTS.md - Coding Guidelines for ...Steffen T-Fox Techero-Quiz

## Build/Lint/Test Commands
- **Development**: `npm run dev` (starts Vite dev server on port 8080)
- **Build**: `npm run build` (creates production build in dist/)
- **Preview**: `npm run preview` (serves production build locally)
- **No lint/test scripts configured** - run manual testing after changes

## Code Style Guidelines
- **Language**: ES6+ JavaScript with modules (type: "module" in package.json)
- **Imports**: Use ES6 import/export syntax with relative paths
- **Formatting**: 2-space indentation, single quotes for strings, semicolons required
- **Naming**: camelCase for variables/functions, PascalCase for classes, UPPER_CASE for constants
- **Comments**: JSDoc for all functions, German comments preferred
- **Error Handling**: Use try-catch blocks with console.error for logging
- **Architecture**: Modular design with separate classes (QuestionLoader, QuizState, FoxController, QuizRenderer)

## Development Workflow
- Test changes manually in browser after `npm run dev`
- Verify build succeeds with `npm run build`
- Follow conventional commits format for any commits
- No automated testing framework - manual testing required</content>
<parameter name="filePath">/home/ladmin/Desktop/GIT/heldenquiz/AGENTS.md