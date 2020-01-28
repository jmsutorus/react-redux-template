import ProductReducer from '../ProductReducer';
import * as types from '../../constants/ProductTypes';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(ProductReducer(undefined, {})).toEqual([
      {
        upc: '',
        name: '',
        description: '',
        quantity: 0,
        price: 0.0,
      },
    ]);
  });
  it('should handle ADD_PRODUCT', () => {
    expect(
      ProductReducer([], {
        type: types.ADD_PRODUCT,
        product: {
          upc: '123',
          name: 'name',
          description: 'desc',
          quantity: 1,
          price: 1.0,
        },
      }),
    ).toEqual([
      {
        upc: '123',
        name: 'name',
        description: 'desc',
        quantity: 1,
        price: 1.0,
      },
    ]);
    expect(
      ProductReducer([], {
        type: types.ADD_PRODUCT,
        product: {
          upc: '456',
          name: 'name2',
          description: 'desc2',
          quantity: 2,
          price: 2.0,
        },
      }),
    ).toEqual([
      {
        upc: '456',
        name: 'name2',
        description: 'desc2',
        quantity: 2,
        price: 2.0,
      },
    ]);
  });
});
