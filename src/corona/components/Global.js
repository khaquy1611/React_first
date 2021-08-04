import React from 'react';
import { Card, Col, Row, Skeleton } from 'antd';
import CoronaContext from '../context/MyContext';

class Global extends React.PureComponent {
  render() {
    return(
      <>
        <CoronaContext.Consumer>
          {context => {
            //console.log(context);
            if(context.loading || context.virus.length === 0){
              return <Skeleton active />
            }
            return (
              <div className="site-card-wrapper">
                <Row gutter={16}>
                  <Col span={8}>
                    <Card title="Confirmed" bordered={true}>
                      <p>NewConfirmed: {context.virus.Global.NewConfirmed}</p>
                      <p>TotalConfirmed: {context.virus.Global.TotalConfirmed}</p>
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
            )}}
        </CoronaContext.Consumer>
        
      </>
    )
  }
}
export default Global;
