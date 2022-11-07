import React, { useState, Fragment, Component } from 'react'

import Editor from 'react-simple-code-editor'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`

const styles = {
  root: {
    marginTop: '10px',
    boxSizing: 'border-box',
    fontFamily: '"Dank Mono", "Fira Code", monospace',
    ...theme.plain,
  },
}

const EditorExample = () => {
  const [code, setCode] = useState(exampleCode)

  const onValueChange = (code) => {
    setCode({ code })
  }

  const highlight = (code) => (
    <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Fragment>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Fragment>
      )}
    </Highlight>
  )

  return (
    <Editor
      value={code}
      onValueChange={onValueChange}
      highlight={highlight}
      padding={10}
      style={styles.root}
    />
  )
}

export default EditorExample
