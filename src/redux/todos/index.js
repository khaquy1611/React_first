import AppTodo from './container/app';
import { Provider } from 'react-redux';
import store from './store';

const Todo = () => {
  return (
    <Provider store={store}>
      <AppTodo/>
    </Provider>
    
  )
}
export default Todo;