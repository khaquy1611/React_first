import PropTypes from 'prop-types';

const ResultComponent = (props) => {
  return (
    <>
      <h4>{props.result}</h4>
    </>
  )
}
ResultComponent.propTypes = {
  result: PropTypes.string
}
export default ResultComponent;