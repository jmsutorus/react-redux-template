import {
  ADD_PRODUCT,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS
} from '../store/constants/ProductTypes';

export const initialState = {
  loadingProductResults: false,
  productResults: null,
  productResultsError: null
};

function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        productResults: action.product,
        productResultsError: null
      };
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loadingProductResults: true,
        productResults: null,
        productResultsError: null
      };
    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loadingProductResults: false,
        productResultsError:
          (action.payload ? action.payload.message || action.payload.title : '') ||
          'An unknown error occured.'
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loadingProductResults: false,
        productResults: action.payload
      };
    default:
      return state;
  }
}

export default ProductReducer;
