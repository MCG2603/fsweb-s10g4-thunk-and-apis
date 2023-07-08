import axios from "axios";
import loading from "./App"

export const GET_FAVS_FROM_LS = "GET_FAVS_FROM_LS";
export const FAV_ADD = "FAV_ADD";
export const FAV_REMOVE = "FAV_REMOVE";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_ERROR = "FETCH_ERROR";
const API='https://catfact.ninja/fact';
export const getFavsFromLocalStorage = () => {
  return { type: GET_FAVS_FROM_LS }
}

export const addFav = (info) => {
  return { type: FAV_ADD, payload: info }
}

export const removeFav = (id) => {
  
  return { type: FAV_REMOVE, payload: id }
}
export const fetchLoading = (id) => {
  
  return { type: FETCH_LOADING }
}

export const fetchAnother = () => dispatch => {
  setTimeout(() => {
    axios.get(API).then(res => 
      dispatch({ 
      type: GET_FAVS_FROM_LS, 
      payload: res.data.fact
    }));
  }, "300");
 
};