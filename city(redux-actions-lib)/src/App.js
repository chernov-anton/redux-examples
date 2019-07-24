import React from 'react';
import {Provider} from 'react-redux';
import CityInfo from './components/city-info';
import store from './store';

const App = () =>
  <Provider store={store}>
    <CityInfo/>
  </Provider>;

export default App;
