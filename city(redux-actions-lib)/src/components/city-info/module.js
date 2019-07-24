import { createAction, handleActions } from 'redux-actions';
import CityInfoService from './CityInfoService';

const CITY_INFO_REQUEST = 'city_info/CITY_INFO_REQUEST';
const CITY_INFO_SUCCESS = 'city_info/CITY_INFO_SUCCESS';
const CITY_INFO_ERROR = 'city_info/CITY_INFO_ERROR';

export const getCityInfo = createAction(CITY_INFO_REQUEST);

export const receiveCityInfo = createAction(CITY_INFO_SUCCESS, cityInfo => cityInfo);

export const receiveCityInfoError = createAction(CITY_INFO_ERROR);

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

const handleCityInfoRequest = (state) => ({
  ...state,
  loading: true
});

const handleCityInfoSuccess = (state, action) => ({
  ...state,
  data: {
    country: action.payload.country_name,
    city: action.payload.city
  },
  loading: false
});

const handleCityInfoError = (state) => ({
  ...state,
  loading: false,
  error: true
});

export default handleActions(
  {
    [CITY_INFO_REQUEST]: handleCityInfoRequest,
    [CITY_INFO_SUCCESS]: handleCityInfoSuccess,
    [CITY_INFO_ERROR]: handleCityInfoError
  },
  initialState
);