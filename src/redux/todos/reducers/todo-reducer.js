import * as types from '../actions/type';

const initialState = {
  idTodo: 1,
  listWorks: []
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_WORK:
      return {
        ...state,
        ...{
          idTodo: action.payload.id + 1,
          listWorks: [...state.listWorks, {
            id: state.idTodo,
            name: action.payload.name,
            done: false
          }]
        }
      }
    case types.DELETE_WORK:
      const id = action.payload.id;
      const newListWork = state.listWorks.filter(item => item.id !== id);
      return {
        ...state,
        ...{
          listWorks: newListWork
        }
      }
    case types.DONE_WORK: 
      const idDone = action.payload.id;
      const newWorks = state.listWorks.map(item => {
        return item.id === idDone ? {...item, done: !item.done} : item;
      });
      return {
        ...state,
        ...{ listWorks: newWorks }
      }
    default:
      return state;
  }
}