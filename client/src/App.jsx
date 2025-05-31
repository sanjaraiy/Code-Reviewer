import { useState, useEffect } from 'react'
import './App.css'
import "prismjs/themes/prism-tomorrow.css"
// import "prismjs/components/prism-jsx"
import Prism from 'prismjs'

function App() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
       Prism.highlightAll()
  }, [])

  return (
    <>
      <main>
         <div className="left">
           <div className="code">
            
           </div>
           <div className="review">Review</div>
         </div>
         <div className="right"></div>
      </main>
    </>
  )
}

export default App
