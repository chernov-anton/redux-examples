import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'
import './index.css';


const PRODUCTS = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    name: 'Football'
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    name: 'Baseball'
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    name: 'Basketball'
  },
  {
    category: 'Electronics',
    price: '$99.99',
    name: 'iPod Touch'
  },
  {
    category: 'Electronics',
    price: '$399.99',
    name: 'iPhone 5'
  },
  {
    category: 'Electronics',
    price: '$199.99',
    name: 'Nexus 7'
  }
];

ReactDOM.render(
  <App products={PRODUCTS}/>,
  document.getElementById('root')
);

