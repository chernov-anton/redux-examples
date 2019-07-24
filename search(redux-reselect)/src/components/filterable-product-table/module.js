const INPUT_CHANGED = 'filterable-product-table/INPUT_CHANGED';

export function changeInput(value){
  return {
    type: INPUT_CHANGED,
    value
  }
}

const initialState = {
  value: ''
};

export default function reducer(state = initialState, action){
  switch (action.type){
    case INPUT_CHANGED:
      return {
        value: action.value
      };
    default:
      return state;
  }
}