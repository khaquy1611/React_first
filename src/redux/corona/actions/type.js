
export const REQUEST_SERVER = Symbol('REQUEST_SERVER');
// action se dc di qua middleware cua redux saga

// dinh nghia cac action ma redux saga no se xu ly
export const START_GET_DATA = Symbol('START_GET_DATA');
export const END_GET_DATA = Symbol('END_GET_DATA');
export const GET_DATA_SUCCESS = Symbol('GET_DATA_SUCCESS');
export const GET_DATA_FAIL = Symbol('GET_DATA_FAIL');