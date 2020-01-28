import React, { StrictMode } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import './App.scss';
import { getProducts } from '../../../actions/ProductActions';
import AppProvider from '../../../contexts/AppProvider';
import Products from '../../../components/Products';

const propTypes = {
  store: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
};

const defaultProps = {};

function App({ store }) {
  store.dispatch(getProducts());
  return (
    <AppProvider store={store}>
      <StrictMode>
        <Header />
        <main>
          <Products />
        </main>
        <Footer />
      </StrictMode>
    </AppProvider>
  );
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
