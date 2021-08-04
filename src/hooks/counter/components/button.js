import PropTypes from 'prop-types';

const ButtonComponent = (props) => {
  // props la tat ca cac props duoc truyen vao component khi su dung 
  return (
    <>
      <button
        type={props.type}
        onClick={() => props.click()}
      >{props.children}</button>
    </>
  )
}
ButtonComponent.propTypes = {
  type: PropTypes.string,
  click: PropTypes.func.isRequired,
  children: PropTypes.node
}
export default ButtonComponent;