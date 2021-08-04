import React from 'react';
import { Card, Col, Row } from 'antd';

const Global = () => {

  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Confirmed" bordered={true}>
            <p>NewConfirmed: 121223 </p>
            <p>TotalConfirmed: 121323</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Deaths" bordered={true}>
            <p>NewDeaths: 12233</p>
            <p>TotalDeaths: 12233</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Recovered" bordered={true}>
            <p>NewRecovered: 12233</p>
            <p>TotalRecovered: 12233</p>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
export default React.memo(Global);
