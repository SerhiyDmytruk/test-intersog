# Playwright Test Project - AI Agent Instructions

## Project Overview
This is a Playwright-based test automation project using TypeScript. The project follows the Page Object Model pattern for test organization and maintenance.

## Key Architecture Components

### Test Structure
- Tests are located in `/tests` directory
- Page Objects are in `/tests/page`
- Reusable components are in `/tests/components`
- Configuration is managed through `configs.ts` and `playwright.config.ts`

### Design Patterns
1. **Page Object Pattern**
   - Each page has its own class (e.g., `general.page.ts`)
   - Page objects encapsulate page-specific methods and selectors
   - Example: `General` class in `tests/page/general.page.ts` handles basic page operations

2. **Component Pattern**
   - Reusable UI components are abstracted in `/tests/components`
   - Components: header.ts, footer.ts, form-login.ts

## Key Workflows

### Running Tests
Available npm scripts:
```bash
npm test                  # Run tests normally
npm run testWithUI        # Run tests with Playwright UI
npm run testwithReport    # Run tests with HTML reporting
npm run testWithReportAndUI # Run tests with both UI and HTML report
npm run testWithList      # Run tests with list reporter
```

### Configuration
- Base URL and other configurations are defined in `configs.ts`
- Browser configurations and test settings in `playwright.config.ts`
- Tests run in parallel by default (configurable via `fullyParallel` option)
- Supports Chrome and Firefox browsers

### Test Reports
- HTML reports are generated in `/playwright-report`
- Trace viewer available for failed tests
- Report includes screenshots and detailed test execution data

## Best Practices
1. Use the `General` page class for common page operations
2. Always include `test.beforeEach()` for page setup
3. Leverage component abstractions for reusable UI elements
4. Use TypeScript types for better code reliability

## Integration Points
- Environment variables via `dotenv`
- Playwright Test Runner integration
- HTML Reporter integration
- Trace Viewer for debugging failed tests

## Common Tasks
When creating new tests:
1. Create page object if needed in `/tests/page`
2. Add reusable components in `/tests/components` if applicable
3. Write test file in `/tests` directory
4. Follow existing patterns for page setup using `test.beforeEach()`