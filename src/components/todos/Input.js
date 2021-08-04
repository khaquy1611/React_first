import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  width: 200px;
  height: 30px;
  border: 1px solid #ccc;
  padding: 0px 3px;
`;

class InputTodo extends React.Component {
  render() {
    return(
      <>
        <Input value={this.props.val} onChange={this.props.change} />
        <p>{this.props.test}</p>
      </>
    )
  }
}
InputTodo.propTypes = {
  val: PropTypes.string,
  test: PropTypes.string.isRequired,
}

InputTodo.defaultProps ={
  val: 'test todo',
  test: 'AAAAA'
}

export default InputTodo;