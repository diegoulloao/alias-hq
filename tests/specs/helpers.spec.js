const aliases = require('../../src')
const { root, config } = require('./globals')

// ---------------------------------------------------------------------------------------------------------------------
// tests
// ---------------------------------------------------------------------------------------------------------------------

describe('helpers', function () {

  describe('paths', function () {
    it('should load return the raw paths data', function () {
      const received = aliases.load('jsconfig.json').paths()
      const expected = config.js
      expect(received).toEqual(expected)
    })
  })

  describe('root', function () {
    it('should return the current folder root', function () {
      const received = aliases.load().root()
      const expected = root
      expect(received).toEqual(expected)
    })
  })

  describe('plugins', function () {
    it('should return plugin names', function () {
      aliases.plugin('xyz', function () {})
      const received = aliases.plugins()
      const expected = ['jest', 'rollup', 'webpack', 'xyz']
      expect(received).toEqual(expected)
    })
  })
})
