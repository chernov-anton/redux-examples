import {connect} from 'react-redux';
import FilterableProductTable from './FilterableProductTable';
import products from '../../data/products';
import {createSelector} from 'reselect';

import {
  changeInput
} from './module';

const getValueSelector = state => state.value;

const getProductSelector = createSelector(
  getValueSelector,
  value => products.filter(product => product.name.includes(value))
);

const mapStateToProps = (state) => {
  return {
    value: getValueSelector(state),
    products: getProductSelector(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => dispatch(changeInput(e.target.value)),
  }; // here we're mapping actions to props
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterableProductTable);