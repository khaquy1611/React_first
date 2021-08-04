import React from 'react';
import { connect } from 'react-redux';
// import { useSelector } from 'react-redux';

const Result = (props) => {
  // lay state tu store ra dung hook useSelector
  // const count = useSelector(state => state.counter.count);
  return (
    <>
      <h1> {props.count} </h1>
    </>
  )
}
const mapStateToProps = state => ({
  count: state.counter.count
});
const ConnectResult = connect(mapStateToProps,null)(Result);
export default React.memo(ConnectResult);