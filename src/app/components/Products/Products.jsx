import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../Product';
import { getProducts } from '../../store/actions/ProductActions';

function Products() {
  const dispatch = useDispatch();
  dispatch(getProducts());
  const products = useSelector(state => state.ProductReducer.productResults);
  return (
    <div title="products">
      {products && products.map(product => <Product key={product.upc} product={product} />)}
    </div>
  );
}

export default Products;
