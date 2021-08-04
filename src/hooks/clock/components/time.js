import { useState, useEffect } from 'react';

const TimeComponents = () => {
  const [timeString, setTimeString] = useState(null);

  // chay giong nhu componentDidMount
  useEffect(() => {
    let intervalTime = setInterval(() => {
      const now = new Date();
      const hours = `0${now.getHours()}`.slice(-2);
      const minutes = `0${now.getMinutes()}`.slice(-2);
      const seconds = `0${now.getSeconds()}`.slice(-2);
      const currentTimeString = `${hours}:${minutes}:${seconds}`;
      setTimeString(currentTimeString);
    },1000);

    // componentWillUnMount
    return () => {
      clearInterval(intervalTime);
    }
  }, [])

  return(
    <h1>current time : {timeString}</h1>
  )
  
}
export default TimeComponents;