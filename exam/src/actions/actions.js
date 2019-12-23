import {
	GET_WEATHER_SUCCESS, ADD_WEATHER_SUCCESS, GET_WEATHER_FAILURE, GET_WEATHER_REQUEST,
} from '../ActionTypes';


const URL = 'https://api.openweathermap.org/data/2.5/weather';
const weatherURL = 'https://api.openweathermap.org/data/2.5/group';
const UNITS = 'metric';
const APP = 'e0a2eb8e2ec9bfd072f642e4535b8591';
const getWeatherSuccess = (data) => ({
	type: GET_WEATHER_SUCCESS,
	payload: data.list,
});

const addWeatherSuccess = (data) => ({
	type: ADD_WEATHER_SUCCESS,
	payload: data,
});

const getWeatherRequest = () => ({
	type: GET_WEATHER_REQUEST,
});

const getWeatherFailure = (error) => ({
	type: GET_WEATHER_FAILURE,
	payload: error,
});

export function GPSWeather() {
	return (dispatch, getState) => {
		dispatch(getWeatherRequest());

		const geoOptions = {
			enableHighAccuracy: true,
			maximumAge: 30000,
			timeout: 27000,
		};

		navigator.geolocation.getCurrentPosition(
			(data) => {
				const lat = data.coords.latitude;
				const lon = data.coords.longitude;

				const mydata = `\${URL}\?lat=${lat}\&lon=${lon}\&appid=${APP}`;

				fetch(mydata, {
					method: 'GET'
				})
					.then(res => res.json())
					.catch(err => {
						dispatch(getWeatherFailure(err));
					})
			},
			console.error,
			geoOptions,
		);
	};
}

export function getWeather() {
	return (dispatch, getState) => {
		dispatch(getWeatherRequest());


		let data = `${weatherURL}?id=`;

		data = `${data}&units=${UNITS}&appid=${APP}`;

		fetch(data, {
			method: 'GET',
		})
			.then(res => res.json())
			.then(res => {
				dispatch(getWeatherSuccess(res));
			})
			.catch(err => {
				console.error(err);
				dispatch(getWeatherFailure(err));
			});
	};
}
