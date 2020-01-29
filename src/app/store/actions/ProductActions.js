import { CALL_API } from '../../middleware/api';
import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS
} from '../constants/ProductTypes';

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    product
  };
}

export function removeProduct(index) {
  return {
    type: REMOVE_PRODUCT,
    index
  };
}

export function getProducts() {
  return {
    [CALL_API]: {
      method: 'GET',
      endpoint: 'http://172.19.26.124:8089/labelPOC/product/all',
      types: [GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE],
      data: {}
    }
  };
}

export default {
  addProduct,
  removeProduct,
  getProducts
};
