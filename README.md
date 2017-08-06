# styled-conditional-include

A small utility function for including a CSS attribute only when a given prop exists.

```js
// This...
${props => props.color && `color: ${props.color};`}

// can be written as...
${include('color').if('color')}

// you can also access deeper props using dot notation
${include('background-color').if('theme.bg.color')}

// WARNING: when the desired prop does not exist, the include-if function WILL return the empty string
// an exception will NOT be thrown, even though none of the props in the path exist
const props = {}
include('background-color').if('theme.bg.color')(props)
```

## Install
```bash
$ npm install --save styled-conditional-include
```

## Usage
```js
import styled from 'styled'
import include from 'styled-conditional-include'

const Text = styled.p`
  ${include('color').if('color')}
  font-size: 16px;
  line-height: 24px;
`

/* css
 * color: palevioletred;
 * font-size: 16px;
 * line-height: 24px;
 */
<Text color='palevioletred'>Hello</Text>

/* css
 * font-size: 16px;
 * line-height: 24px;
 */
<Text>Hello</Text>
```
