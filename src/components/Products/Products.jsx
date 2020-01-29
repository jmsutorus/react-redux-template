import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../Product';

function Products() {
  const products = useSelector(state => state.ProductReducer.productResults);
  return (
    <div>
      {products && products.map(product => <Product key={product.upc} product={product} />)}
    </div>
  );
}

export default Products;
