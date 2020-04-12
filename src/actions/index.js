import socketIOClient from "socket.io-client";

export const SET_THEME = "SET_THEME";
export const setTheme = payload => ({ type: SET_THEME, payload }); //action creator

export const SET_COVID_DATA = "SET_COVID_DATA";
const setCovidData = payload => ({ type: SET_COVID_DATA, payload });
const endpoint = "http://127.0.0.1:4000";

export const setSelectedTheme = payload => {
  return dispatch => {
    const themeAPI = payload;

    //activar en el estado un indicador de búsqueda
    dispatch(setTheme(payload));
    const socket = socketIOClient(endpoint);
    return socket.on("FromAPI", data => {
      // const CovidData = transformCovidData(data)

      //modificar el estado como resultado del fetch
      dispatch(setCovidData({ theme: payload, data }));
    });
  };
};
