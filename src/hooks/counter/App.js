import { useState } from 'react';
import ButtonComponent from './components/button';
import ResultComponent from './components/result';

function AppHookCounter() {
  // khai bao state va phuong thuc cap nhat sate
  const [count, setCount] = useState(0);
  /*
    this.state = { count: 0}
    setCount ~~ this.setState
  */
  
  const incrementCount = () => {
    setCount(count+1);
    // this.setState({count: this.sate.count+1})
  }
  const decrementCount = () => {
    setCount(count-1);
    // this.setState({count: this.sate.count-1})
  }
  return (
    <>
      <ResultComponent count={count}/>
      <ButtonComponent
        type="button"
        click={incrementCount}
      > + </ButtonComponent>
      <ButtonComponent
        type="button"
        click={decrementCount}
      > - </ButtonComponent>
    </>
  )
}
export default AppHookCounter;