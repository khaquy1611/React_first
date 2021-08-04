import { Card } from 'antd';
import { useContext } from 'react';
import WeatherContext from '../context/weather-context';

const InfoWeather = () => {
  const context = useContext(WeatherContext);
  const info = context.dataWeather.weather[0];
  console.log(info);
  return (
    <>
      <Card title="Du bao thoi tiet" bordered={true}>
        <p> - Thoi tiet: </p>
        <p> - Chi tiet: </p>
        <p> - </p>
      </Card>
    </>
  )
}
export default InfoWeather;