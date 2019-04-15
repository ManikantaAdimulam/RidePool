import { GET_USER } from "./ActionCreators";

const initialState = {
  email: "",
  refreshToken: "",
  uid: ""
};

export function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        email: action.data.user.email,
        refreshToken: action.data.user.refreshToken,
        uid: action.data.user.uid
      };
    default:
      return state;
  }
}
