# CLAUDE.md - Repository Guidelines

## Build & Development Commands
- `npm start` - Start local development server
- `npm run build` - Build for production

## Code Style Guidelines

### JavaScript
- Use camelCase for variable and function names
- Include semicolons at the end of statements
- Use descriptive function names (e.g., `showCollapsedMenu`, not `show`)
- Prefer vanilla JavaScript for DOM manipulation

### HTML/CSS
- Use descriptive class/id names with kebab-case for multi-word CSS class names
- Maintain consistent indentation (2 spaces)
- Group related CSS properties
- Follow mobile-first responsive design patterns
- Use semantic HTML elements whenever possible

### Project Structure
- Keep all JavaScript in `src/app.js`
- All styles in `src/styles.css`
- Store images in `src/images/`

### Error Handling
- Use descriptive error messages
- Add validation for user inputs
- Check for element existence before DOM manipulation