import * as actions from '../TodoActions';
import * as types from '../../constants/ActionTypes';

describe('actions', () => {
  it('should create an action to add a product', () => {
    const text = 'Finish docs';
    const expectedAction = {
      type: types.ADD_TODO,
      text,
    };
    expect(actions.addTodo(text)).toEqual(expectedAction);
  });
  it('should remove an action to from the products', () => {
    const index = 0;
    const expectedAction = {
      type: types.REMOVE_TODO,
      index,
    };
    expect(actions.removeTodo(0)).toEqual(expectedAction);
  });
});
