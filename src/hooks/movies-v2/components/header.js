import React, {useContext} from 'react';
import { Row, Col, Image, Avatar } from 'antd';
import MovieContext from '../context/index';

const HeaderMovie = () => {
  const info = useContext(MovieContext);

  return (
    <>
      <Row>
        <Col span={20}></Col>
        <Col span={4}>
          <span style={{ marginRight: '10px' }}>Hi : {info.email}</span>
          <Avatar
            src={<Image src={info.avatar} />}
          />
        </Col>
      </Row>
    </>
  )
}
export default React.memo(HeaderMovie);