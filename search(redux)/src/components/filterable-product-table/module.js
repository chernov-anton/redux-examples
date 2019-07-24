import products from '../../data/products';

const INPUT_CHANGED = 'filterable-product-table/INPUT_CHANGED';

export function changeInput(value){
  return {
    type: INPUT_CHANGED,
    value
  }
}

const initialState = {
  value: '',
  products
};

export default function reducer(state = initialState, action){
  switch (action.type){
    case INPUT_CHANGED:
      return {
        ...state,
        value: action.value,
        products: products.filter(product => product.name.includes(action.value))
      };
    default:
      return state;
  }
}