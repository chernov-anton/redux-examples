import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import {reducer} from './components/city-info'

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
  )
);

export default store;