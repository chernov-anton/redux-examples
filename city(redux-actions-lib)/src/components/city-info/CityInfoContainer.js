import { connect } from 'react-redux';
import CityInfo from './CityInfo';

import {
  fetchCityInfo
} from './module';

const mapStateToProps = (state) => {
  return {
    country: state.data.country,
    city: state.data.city,
    loading: state.loading,
    error: state.error
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCityInfo: () => dispatch(fetchCityInfo()),
  }; // here we're mapping actions to props
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityInfo);
