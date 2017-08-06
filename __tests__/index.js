const include = require('../src')

describe('include', () => {
  it("returns empty string when the prop doesn't exist", () => {
    expect(include('background-color').if('bg')({})).toBe('')
  })

  it("returns empty string when a nested prop doesn't exist", () => {
    expect(include('background-color').if('theme.bg')({})).toBe('')
  })

  it('returns the css when the prop does exist', () => {
    const bg = 'red'
    expect(include('background-color').if('bg')({ bg })).toBe(
      `background-color: ${bg};`
    )
  })

  it('returns the css for a nested prop', () => {
    const bg = 'red'
    expect(include('background-color').if('theme.bg')({ theme: { bg } })).toBe(
      `background-color: ${bg};`
    )
  })
})
