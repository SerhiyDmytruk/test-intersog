import js from '@eslint/js'
import playwright from 'eslint-plugin-playwright'

export default [
  js.configs.recommended,
  {
    ...playwright.configs['flat/recommended'],
    files: ['tests/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    rules: {
      ...playwright.configs['flat/recommended'].rules,
    },
  },
]
