import React, {PureComponent} from 'react';
import ErrorAlert from '../ErrorAlert';
import Loading from '../Loading';

class CityInfo extends PureComponent {
  componentDidMount() {
    this.props.fetchCityInfo()
  }

  render() {
    const {country, city, loading, error} = this.props;

    if (loading) {
      return <Loading/>
    }

    if (error) {
      return <ErrorAlert/>
    }

    return (
      <article>
        <p>Country: {country}</p>
        <p>City: {city}</p>
      </article>);
  }
}

export default CityInfo;
