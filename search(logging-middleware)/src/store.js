import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {reducer} from './components/filterable-product-table';

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

export default store;