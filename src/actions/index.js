import axios from 'axios';
const API_KEY="ba2b50581d781f9cfaa1a011f6bff9aa";
const ROOT_URL = "http://api.openweathermap.org/data/2.5/forecast?";
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const REMOVE_ITEM = 'REMOVE_ITEM';


export function fetchWeather(city) {

const url = ROOT_URL + "q=" + city + ",us&appid=" + API_KEY

const request =  axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

export function removeWeather() {
  console.log('fired');
  return {
    type: REMOVE_ITEM
  }
}
