import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `Contador: ${count}`
  }, [count]);

  return (
    <>
      <div className="count">
        {count}
      </div>
      
      <div className="buttons">
        <button className="boton plus" onClick={() => setCount((count) => count + 1)}> + 
        </button>
        <button className="boton minus" onClick={() => setCount((count) => count - 1)}> - 
        </button>
      </div>
    </>
  )
}

export default App
