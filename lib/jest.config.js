const path = require('path')

const client = {
  displayName: 'client',
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/test/client/**/*.js',
    '<rootDir>/test/shared/**/*.js',
  ]
}

const server = {
  displayName: 'server',
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/test/server/**/*.js',
    '<rootDir>/test/shared/**/*.js',
  ]
}

const projects = [
  client,
  server,
]

module.exports = {
  collectCoverageFrom: [
    'src/**/*.js'
  ],
  coverageReporters: [
    'lcov',
    'html',
  ],
  projects
}
