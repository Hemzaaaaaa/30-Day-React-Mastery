// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react'

const Timer = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() =>{
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
            clearInterval(interval)
            console.log("Timer unmounted")
        };
    },[])

  return (
    <h1>
      Current Time: {time}
    </h1>
  )
}

export default Timer
