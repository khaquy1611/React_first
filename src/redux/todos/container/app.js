import React from 'react';
import InputAdd from '../components/input-add';
import ListWorks from '../components/list-works';
import { Row, Col } from 'antd';

const AppTodo = () => {
  return (
    <Row>
      <Col span={24}>
        <InputAdd/>
        <ListWorks/>
      </Col>
    </Row>
  )
}
export default React.memo(AppTodo);