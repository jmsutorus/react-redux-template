import React, { StrictMode } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import './App.scss';
import AppProvider from '../../../contexts/AppProvider';
import Products from '../../../components/Products';
import NotFound from '../NotFound';
import Home from '../Home';

const propTypes = {
  store: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired
  }).isRequired
};

const defaultProps = {};

function App({ store }) {
  return (
    <AppProvider store={store}>
      <StrictMode>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/home" component={Home} />
            <Route path="/products" component={Products} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </StrictMode>
    </AppProvider>
  );
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
