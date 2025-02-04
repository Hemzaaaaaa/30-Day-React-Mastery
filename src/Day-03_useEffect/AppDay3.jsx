import React, {useState} from 'react'
import Timer from './Timer'

const AppDay3 = () => {

    const [showTimer, setShowTimer] = useState(true)

  return (
    <div>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>
      {showTimer && <Timer />}
    </div>
  )
}

export default AppDay3
