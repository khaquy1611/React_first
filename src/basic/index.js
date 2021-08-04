import React from 'react';
import HeaderComponent from '../components/basic/header';

class AppBasic extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      color: 'black',
      count: 0 
    }
  }

  changeColor = (event) => {
    let nameBtn = event.target.name;
    if(nameBtn !== ''){
      //this.setState((state) => ({color: nameBtn, count: this.state.count + 1}));
      this.setState({color: nameBtn}, () => {
        this.setState({count: this.state.count + 1});
      });
      
    }
  }

  changeCount = () => {
    //this.setState({count: this.state.count + 1});
    this.setState((state) => ({count: state.count + 1}));
  }
  viewCount = () => {
    this.changeCount();
    this.changeCount();
  }

  render() {
    return(
      <>
        <HeaderComponent/>
        <h3 style={{ color: this.state.color }}> This is color ....!</h3>
        <h3>{this.state.count}</h3>
        <button
          name="red"
          type="button"
          onClick={(e)=>this.changeColor(e)}
        > red </button>
        <button
          name="blue"
          type="button"
          onClick={(e)=>this.changeColor(e)}
        > blue </button>
        <button type="button" onClick={()=>this.viewCount()}> + </button>
      </>
    )
  }
}
export default AppBasic;