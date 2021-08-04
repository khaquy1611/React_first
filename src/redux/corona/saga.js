import { call, all } from 'redux-saga/effects';
import { watchGetDataCorona } from './sagas/corona-saga';

export default function* rootSaga() {
  yield all(call[
    watchGetDataCorona
  ])
} 