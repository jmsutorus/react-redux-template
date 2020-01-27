import * as types from '../constants/ActionTypes';

export function addTodo(text) {
  return {
    type: types.ADD_TODO,
    text,
  };
}

export function removeTodo(text) {
  return {
    type: types.REMOVE_TODO,
    text,
  };
}

export default {
  addTodo,
  removeTodo,
};
