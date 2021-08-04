import React from 'react';
import { Row, Col, List, Checkbox } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteOutlined } from '@ant-design/icons';
import { deleteWork, doneWork } from '../actions/index';

const ListWorks = () => {
  const data = useSelector(state => state.todo.listWorks);
  const dispatch = useDispatch();

  const deleted = (id) => {
    dispatch(deleteWork(id));
  }

  const finish = (id) => {
    dispatch(doneWork(id));
  }
  const styleFinish = {
    textDecoration: 'line-through',
    color: 'red',
    fontWeight: 'bold'
  };
  //console.log(data);
  return (
    <Row style={{ margin: '20px 0px' }}>
      <Col span={12} offset={6}>
        <List
          itemLayout="horizontal"
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Checkbox onClick={()=>finish(item.id)} />}
                title={item.name}
                style={item.done ? styleFinish : null}
              />
              <div>
                <DeleteOutlined
                  onClick={()=> deleted(item.id)}
                />
              </div>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  )
}
export default React.memo(ListWorks);