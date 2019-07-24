import CityInfoService from './CityInfoService';

const CITY_INFO_REQUEST = 'city_info/CITY_INFO_REQUEST';
const CITY_INFO_SUCCESS = 'city_info/CITY_INFO_SUCCESS';
const CITY_INFO_ERROR = 'city_info/CITY_INFO_ERROR';

export const getCityInfo = () => {
  return {
    type: CITY_INFO_REQUEST
  };
};

export const receiveCityInfo = (cityInfo) => {
  return {
    type: CITY_INFO_SUCCESS,
    payload: cityInfo
  };
};

export const receiveCityInfoError = () => {
  return {
    type: CITY_INFO_ERROR,
  };
};

export const fetchCityInfo = () => {
  return async (dispatch) => {
    dispatch(getCityInfo());

    try {
      const cityInfo = await CityInfoService.get();

      dispatch(receiveCityInfo(cityInfo));
    } catch (e) {
      dispatch(receiveCityInfoError());
    }
  };
};


const initialState = {
  data: {
    country: '',
    city: ''
  },
  error: false,
  loading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CITY_INFO_REQUEST:
      return {
        ...state,
        loading: true
      };
    case CITY_INFO_SUCCESS:
      return {
        ...state,
        data: {
          country: action.payload.country_name,
          city: action.payload.city
        },
        loading: false
      };
    case CITY_INFO_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
}