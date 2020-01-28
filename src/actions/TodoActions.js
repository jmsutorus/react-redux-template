import * as types from '../constants/ActionTypes';

export function addTodo(text) {
  return {
    type: types.ADD_TODO,
    text,
  };
}

export function removeTodo(index) {
  return {
    type: types.REMOVE_TODO,
    index,
  };
}

export default {
  addTodo,
  removeTodo,
};
