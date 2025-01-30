const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false, // Disable automatic re-running of tests when files change 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
