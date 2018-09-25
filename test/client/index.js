import React from 'react'

describe('client', () => {
  test('runs in jsdom env', () => {
    expect(document).toBeDefined()
  })

  test('handles JSX', () => {
    expect(<div />).toBeTruthy()
  })
})
