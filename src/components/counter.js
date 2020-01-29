import React, { useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="counter">
      <h4>likes {count}</h4>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  )
}
