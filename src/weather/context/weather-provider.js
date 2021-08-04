import { useState } from 'react';
import SearchWeather from '../components/search';
import { apiWeather } from '../services/api';
import { Row, Col } from 'antd';
import WeatherContext from './weather-context';
import { helpers } from '../helpers/common';

const WeatherProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [dataWeather, setDataWeather] = useState({});

  const getDataFromApi = async (city = '') => {
    setLoading(true);
    const data = await apiWeather.getDataWeatherCity(city);
    if(!helpers.isEmptyObject(data)){
      if(data.cod === 200){
        setDataWeather(data);
      }
    }
    setLoading(false);
  }

  return (
    <>
      <Row style={{ marginTop: '20px' }}>
        <Col span={16} offset={4}>
          <SearchWeather
            search={getDataFromApi}
            loading={loading}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: '20px' }}>
        <Col span={20} offset={2}>
          <WeatherContext.Provider value={{loading, dataWeather}}>
            {props.children}
          </WeatherContext.Provider>
        </Col>
      </Row>
    </>
  )
}
export default WeatherProvider;