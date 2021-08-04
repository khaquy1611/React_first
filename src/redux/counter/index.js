import { Provider } from 'react-redux';
import configureStore from './store/config-store';
import AppCounter from './container/app';

const { store } = configureStore();

const Counter = () => {
  return (
    <Provider store={store}>
      <AppCounter/>
    </Provider>
    
  )
}
export default Counter;