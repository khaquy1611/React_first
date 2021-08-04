import { useState } from 'react';
import TimeClock from './components/time';

const ClockApp = () => {
  const [showTime, setShowTime] = useState(true);

  const showHideTime = () => {
    setShowTime(false);
  }
  return(
    <>
      { showTime && <TimeClock/> }
      <button onClick={()=> showHideTime()}> remove Clock </button>
    </>
  )
}
export default ClockApp;