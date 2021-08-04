import React from 'react';
import { ButtonCounter } from '../components/counter/ButtonCouter';
import ResultCounter from '../components/counter/Result';
import './counter.css';

class AppCounter extends React.PureComponent {
  constructor(props) {
    super(props);
    // tao ra 1 state
    this.state = {
      count : 0
    }
    //this.increment = this.incrementNumber.bind(this);
    //this.decrement = this.decrementNumber.bind(this);
  }

  incrementNumber = () => {
    // cap nhat thay doi sate tang len
    this.setState({
      count: this.state.count + 1
    })
    // this.setState((state, props) => {
    //   //console.log(state);
    //   //console.log(props);
    //   return {
    //     count: state.count + 1
    //   }
    // })
  }
  decrementNumber = () => {
    // cap nhat thay doi sate giam xuong
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <>
        {/* su dung component */}
        <section className="container">
          <ResultCounter count={this.state.count} />
          <ButtonCounter
            type="button"
            click={this.incrementNumber}
          > + </ButtonCounter>
          <ButtonCounter
            type="button"
            click={this.decrementNumber}
          > - </ButtonCounter>
        </section>   
      </>
    )

  }
}
export default AppCounter;