import * as actions from '../ProductActions';
import * as types from '../../constants/ProductTypes';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const product = {
      upc: '123',
      name: 'name',
      description: 'desc',
      quantity: 1,
      price: 1.0,
    };
    const expectedAction = {
      type: types.ADD_PRODUCT,
      product,
    };
    expect(actions.addProduct(product)).toEqual(expectedAction);
  });
  it('should remove an action to from the todos', () => {
    const index = '123';
    const expectedAction = {
      type: types.REMOVE_PRODUCT,
      index,
    };
    expect(actions.removeProduct(index)).toEqual(expectedAction);
  });
});
