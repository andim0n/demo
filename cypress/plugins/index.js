/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
// const db = require('../../server/src/db')
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('task', {
    // deconstruct the individual properties
    hello({ greeting, name }) {
      console.log('%s, %s', greeting, name)

      return null
    },

    pause(ms) {
      return new Promise(resolve => {
        // tasks should not resolve with undefined
        setTimeout(() => resolve(null), ms)
      })
    },

    seedDatabase() {
      //  db.seed('defaults')
      return null
    },

    resetDatabase() {
      // db.reset()
      return null
    },
  })
}
