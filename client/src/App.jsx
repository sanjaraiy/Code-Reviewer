import { useState, useEffect } from 'react'
import './App.css'
import "prismjs/themes/prism-tomorrow.css"
// import "prismjs/components/prism-jsx"
import Prism from 'prismjs'
import Editor from 'react-simple-code-editor'
function App() {
  const [code, setCode] = useState('')
  
  useEffect(() => {
       Prism.highlightAll()
  }, [])

  return (
    <>
      <main>
         <div className="left">
           <div className="code">
            <Editor
             value={code}
             onValueChange={code => setCode(code)}
             highlight={code => Prism.highlight(code, Prism.languages.javascript, 'javascript')}
             padding={10}
             style={
              {
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
               
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }
             }
            ></Editor>
           </div>
           <div className="review">Review</div>
         </div>
         <div className="right"></div>
      </main>
    </>
  )
}

export default App
