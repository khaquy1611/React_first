import { Provider } from 'react-redux';
import AppCorona from './pages/app';
import configureStore from './store';

const { store } = configureStore();

const Corona = () => {
  return (
    <Provider store={store}>
      <AppCorona/>
    </Provider>
    
  )
}
export default Corona;