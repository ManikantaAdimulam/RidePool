const SET_USER = "GET_USER";

const GET_RIDES = "GET_RIDES";

const setUserData = data => {
  return {
    type: SET_USER,
    data
  };
};

const getRides = data => {
  return {
    type: GET_RIDES,
    data
  };
};

export { SET_USER, GET_RIDES, setUserData, getRides };
