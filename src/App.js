import React, { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)

  const onIncrement = () => setCount((count) => count + 1)
  const onDecrement = () => setCount((count) => count - 1)
  return (
    <div>
      <span>{count}</span>
      <button onClick={onIncrement}>+1</button>
      <button onClick={onDecrement}>-1</button>
    </div>
  )
}

export default App
