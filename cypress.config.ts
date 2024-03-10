import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.{spec,test}.{js,jsx}',
    viewportWidth: 1440,
    viewportHeight: 900,
    defaultCommandTimeout: 4000,
    retries: { runMode: 1, openMode: 1 },
    scrollBehavior: 'center',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
