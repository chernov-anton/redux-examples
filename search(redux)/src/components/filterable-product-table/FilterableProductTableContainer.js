import { connect } from 'react-redux';
import FilterableProductTable from './FilterableProductTable'

import {
  changeInput
} from './module';

const mapStateToProps = (state) => {
  return {
    value: state.value, // gives our component access to state through props.productTable
    products: state.products // gives our component access to state through props.productTable
  }
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