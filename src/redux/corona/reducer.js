import { combineReducers} from 'redux';
import { coronaReducer } from './reducers/corona-reducer';

const rootReducer = combineReducers({
  corona: coronaReducer
});
export default rootReducer;
