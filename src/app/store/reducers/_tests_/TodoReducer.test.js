import RootReducer from '../TodoReducer';
import * as types from '../../constants/ActionTypes';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(RootReducer(undefined, {})).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ]);
  });
  it('should handle ADD_TODO', () => {
    expect(
      RootReducer([], {
        type: types.ADD_TODO,
        text: 'Run the tests'
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ]);
    expect(
      RootReducer(
        [
          {
            text: 'Use Redux',
            completed: false,
            id: 0
          }
        ],
        {
          type: types.ADD_TODO,
          text: 'Run the tests'
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 1
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ]);
  });
});
