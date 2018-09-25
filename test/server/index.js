describe('server', () => {
  test('runs in node env', () => {
    expect(() => {
      const os = require('os')
    }).not.toThrow()
  })
})
