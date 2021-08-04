import { useContext } from 'react';
import { Card } from 'antd';
import WeatherContext from '../context/weather-context';

const MainWeather = () => {
  const context = useContext(WeatherContext);
  const info = context.dataWeather.main;

  return (
    <>
      <Card title="Du bao thoi tiet" bordered={true}>
        <p> - Nhiet do: {info.temp_min} - {info.temp_max} </p>
        <p> - Ap suat: {info.pressure}</p>
        <p> - Do am: {info.humidity}</p>
      </Card>
    </>
  )
}
export default MainWeather;