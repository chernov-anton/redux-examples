import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import FilterableProductTable, {reducer} from './components/filterable-product-table';

const store = createStore(reducer);

const App = () =>
  <Provider store={store}>
    <FilterableProductTable/>
  </Provider>;

export default App;
