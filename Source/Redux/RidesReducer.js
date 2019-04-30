import { GET_RIDES } from "./ActionCreators";

const initialState = {
  rides: [
    {
      contact: "",
      date: "",
      from: "",
      name: "",
      seats: "",
      to: "",
      userId: "",
      time: ""
    }
  ]
};

export function RideReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RIDES:
      return {
        ...state,
        rides: Object.values(action.data).map(item => {
          return {
            contact: item.contact,
            date: item.date,
            from: item.from,
            name: item.name,
            seats: item.seats,
            to: item.to,
            userId: item.userId,
            time: item.time
          };
        })
      };
    default:
      return state;
  }
}
