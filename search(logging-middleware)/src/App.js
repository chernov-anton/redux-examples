import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import FilterableProductTable from './components/filterable-product-table';

const App = () =>
  <Provider store={store}>
    <FilterableProductTable/>
  </Provider>;

export default App;
