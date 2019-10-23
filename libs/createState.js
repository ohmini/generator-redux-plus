const _ = require('lodash')
const templatePath = require('./templatePath')

module.exports = function(generator, stateName) {

    if (generator.meta.states[stateName]) {
      this.log(`State [${stateName}] already been created. Aborted.`)
      return
    }

    _.set(generator.meta, `states.${stateName}`, {
      name: stateName,
      actions: {},
      channels: {},
      effects: {},
      reducers: {},
    })
    generator.updateMeta()

    const state = generator.getState(stateName)

    generator.fs.copyTpl(
      templatePath('actions/index.ejs'),
      generator.destinationPath(`src/state/${stateName}/actions/index.js`),
      {
        state,
        actions: {},
      }
    )

    generator.fs.copyTpl(
      templatePath('channels/index.ejs'),
      generator.destinationPath(`src/state/${stateName}/channels/index.js`),
      {
        state,
        channels: {},
      }
    )

    generator.fs.copyTpl(
      templatePath('effects/index.ejs'),
      generator.destinationPath(`src/state/${stateName}/effects/index.js`),
      {
        state,
        effects: {},
      }
    )

    generator.fs.copyTpl(
      templatePath('reducers/initialState.ejs'),
      generator.destinationPath(`src/state/${stateName}/reducers/initialState.js`),
      {
        state,
      }
    )

    generator.fs.copyTpl(
      templatePath('reducers/index.ejs'),
      generator.destinationPath(`src/state/${stateName}/reducers/index.js`),
      {
        state,
        actions: [],
      }
    )

    generator.fs.copyTpl(
      templatePath('store.ejs'),
      generator.destinationPath('src/state/store.js'),
      generator.meta
    )
}
