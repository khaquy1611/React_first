import PropTypes from 'prop-types';
import { Input, Row, Col } from 'antd';

const { Search } = Input;

const InputSearchMovie = (props) => {
  return (
    <>
      <Row style={{ marginTop: '5px'}}>
        <Col span={12} offset={6}>
          <Search
            placeholder=" name's movie... " enterButton="Search"
            size="large"
            loading={props.loading}
            onSearch={val => props.search(val)}
          />
        </Col>
      </Row>
    </>
  )
}
InputSearchMovie.propTypes = {
  search: PropTypes.func.isRequired
}
export default InputSearchMovie;