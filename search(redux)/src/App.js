import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import FilterableProductTable from './components/filterable-product-table'

const store = createStore(() => {})

const App = () =>
  <Provider store={store}>
    <FilterableProductTable/>
  </Provider>

export default App
