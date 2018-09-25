#!/usr/bin/env node
process.env.BABEL_ENV = 'test'
process.env.NODE_ENV = 'test'
process.env.LOG_LEVEL = 'silent'

const path = require('path')
const test = require('jest')
const config = require('./jest.config')

const argv = process.argv.slice(2)

argv.push(
  '--config',
  JSON.stringify(config),
  '--no-cache'
)

test.run(argv)
