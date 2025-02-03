// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'

const Counter = () => {

    // Step1: Initial State with useState
    const [count, setCount] = useState(0);

    // Step2: Update State
    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);
    const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h2>Counter: {count}</h2>
      <button style={styles.button} onClick={increase}>Increment</button>
      <button style={styles.button} onClick={decrease}>Decrease</button>
      <button style={styles.button} onClick={reset}>Reset</button>
    </div>
  )
}

// Simple CSS
const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px'
    },
    button: {
        margin: '5px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer'
    }
}

export default Counter
