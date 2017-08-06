// @flow
type ChainedInclude = {
  if: (path: string) => PropsToCSS
}
type PropsToCSS = (prop: Object) => string

module.exports = (attribute: string): ChainedInclude => ({
  if: (path: string): PropsToCSS => props => {
    const propNames = path.split('.')

    let propValue = props
    for (const propName of propNames) {
      propValue = propValue[propName]
      if (!propValue) return ''
    }

    return propValue ? `${attribute}: ${propValue.toString()};` : ''
  }
})
