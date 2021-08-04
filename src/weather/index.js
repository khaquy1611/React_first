import WeatherProvider from './context/weather-provider';
import MainWeather from './components/main-weather';
import InfoWeather from './components/info-weather';
import OtherWeather from './components/other-weather';
import WeatherContext from './context/weather-context';
import { helpers } from './helpers/common';

const AppWeather = () => {
  return(
    <WeatherProvider>
      <WeatherContext.Consumer>
        {context => {
          //console.log(context);
          if(!helpers.isEmptyObject(context.dataWeather)) {
            return (
              <>
                <MainWeather/>
                <InfoWeather/>
                <OtherWeather/>
              </>
            )
          }
        }}
      </WeatherContext.Consumer>
    </WeatherProvider>
  )
}
export default AppWeather