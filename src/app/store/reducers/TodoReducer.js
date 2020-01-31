import * as types from '../constants/ActionTypes';

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
];

function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ];
    case types.REMOVE_TODO:
      return state.filter(item => {
        if (item.id === action.id) {
          return false;
        }
        return true;
      });
    case types.COMPLETE_TODO:
      return state.map(item => {
        if (item.id === action.id) {
          return { ...item, completed: true };
        }
        return item;
      });
    default:
      return state;
  }
}

export default TodoReducer;
