import { createStore, combineReducers } from "redux";

const intialState = {
  data: {
    name: "Gustavo Ferri",
    social: {
      linkedin: "",
      facebook: "https://www.facebook.com/gustavoferri.alixandre",
      github: "",
      contact: "",
      instagram: "",
    },
  },
};

function reducer(state = intialState, action) {
  switch (action.type) {
    case "changeName":
      state = { ...state, name: action.name };
      break;

    case "changeName":
      state = { ...state, name: action.name };
      break;

    case "changeName":
      state = { ...state, name: action.name };
      break;

    default:
      break;
  }
  return state;
}
const store = createStore(
  combineReducers({
    reducer,
  })
);

export default store;
