import React from 'react';
import PropTypes from 'prop-types';

const ButtonComponent = (props) => {
  console.log('ButtonComponent da duoc render');
  return(
    <>
      <button onClick={() => props.click()} type={props.type}>Giai PT</button>
    </>
  )
}
ButtonComponent.propTypes = {
  type: PropTypes.string,
  click: PropTypes.func.isRequired
}
export default React.memo(ButtonComponent);