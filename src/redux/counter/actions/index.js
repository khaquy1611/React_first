// noi dinh nghia action
import * as types from './type';

export const incrementNumber = (val) => {
  return {
    type: types.INCREMENT,
    payload: { val }
  }
}

export const decrementNumber = (val) => ({
  type: types.DECREMENT,
  payload: { val }
})