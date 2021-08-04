import React from 'react';
import {Row, Col} from 'antd';
import GlobalComponent from './components/Global';
import CountriesComponent from './components/Countries';
import CoronaProvider from './context/CoronaProvider';

class AppCorona extends React.PureComponent {

  render() {
    return(
      <>
        <Row>
          <Col span={20} offset={2}>
            <CoronaProvider>
              <GlobalComponent/>
              <CountriesComponent/>
            </CoronaProvider>
          </Col>
        </Row>
      </>
    )
  }
}
export default AppCorona;