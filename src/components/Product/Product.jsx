import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    upc: PropTypes.string,
    description: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
};

const defaultProps = {};

function Product({ product }) {
  return (
    <div>
      { product.name }
      { product.description }
    </div>
  );
}

Product.propTypes = propTypes;
Product.defaultProps = defaultProps;

export default Product;
