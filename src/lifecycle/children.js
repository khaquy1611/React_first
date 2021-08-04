import React from 'react';

class ChildrenLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      c: 0
    }
    console.log('constructor ChildrenLifeCycle mouting da chay ');
  }

  static getDerivedStateFromProps(props, state) {
    console.log(state, props);
    console.log('getDerivedStateFromProps cua ChildrenLifeCycle cua phan mouting da chay');
    return null;
  }
  componentDidMount() {
    console.log('componentDidMount cua ChildrenLifeCycle da chay');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    console.log(nextState);
    // return false ko render lai UI va nguoc lai
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate props',prevProps);
    console.log('getSnapshotBeforeUpdate state',prevState);
    return 10;
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('gia tri cua getSnapshotBeforeUpdate',snapshot);
    document.getElementById('text').style.color = 'yellow';
  }

  componentWillUnmount(){
    console.log('component vua bi xoa');
  }

  incrementCount = () => {
    this.setState({
      c: this.state.c + 1
    })
  }

  render() {
    console.log('render ChildrenLifeCycle da chay');
    return(
      <>
        <h3>gia tri nhan tu props: {this.props.count}</h3>
        <h2 id="text">gia tri state cua component: {this.state.c}</h2>
        <button
          type="button"
          onClick={() => this.incrementCount()}
        > +1 </button>
      </>
    )
  }
}
export default ChildrenLifeCycle;