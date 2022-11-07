import React, { Fragment } from 'react'
import Editor from 'react-simple-code-editor'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import { Pre, Wrapper } from './styles'

const exampleCode = `
// Basic
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`.trim()

const styles = {
  root: {
    marginTop: '10px',
    boxSizing: 'border-box',
    fontFamily: '"Dank Mono", "Fira Code", monospace',
    ...theme.plain,
  },
}

const Basic = () =>{
    const highlight = (code) => (
        <Highlight {...defaultProps} theme={theme} code={exampleCode} language="jsx">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </Pre>
    )}
  </Highlight>  
    )
    return (
<Editor
      value={exampleCode}
   //   onValueChange={onValueChange}
      highlight={highlight}
      padding={10}
      style={styles.root}
    />
)}

export default Basic
