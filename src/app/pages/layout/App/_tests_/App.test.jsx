import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import initialize from '../../../../../initialize';
import store from '../../../../store/create';

test('renders header and footer', () => {
  initialize({ store });
  const { getByTitle } = render(<App store={store} />);
  const headerElement = getByTitle(/header/i);
  const footerElement = getByTitle(/footer/i);
  const productsElement = getByTitle(/products/i);
  expect(headerElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
  expect(productsElement).toBeInTheDocument();
});
