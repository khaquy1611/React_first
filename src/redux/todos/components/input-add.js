import React from 'react';
import { Row, Col, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { addWork } from '../actions/index';

const { Search } = Input;

const InputAdd = () => {
  const id = useSelector(state => state.todo.idTodo);
  const dispatch = useDispatch();

  const add = (name) => {
    if(name.length > 0){
      dispatch(addWork(name, id));
    }
  }
  return (
    <Row style={{ margin: '30px 0px' }}>
      <Col span={12} offset={6}>
        <Search
          placeholder="name of work ... "
          enterButton="Add"
          size="large"
          onSearch={val => add(val)}
          allowClear={true}
        />
      </Col>
    </Row>
  )
}
export default React.memo(InputAdd);