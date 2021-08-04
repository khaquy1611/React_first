// day se la noi gop cac reducer
import { combineReducers } from 'redux';
import { counterReducer } from './counter-reducer';

const rootReducer = combineReducers({
  counter: counterReducer
})
export default rootReducer;