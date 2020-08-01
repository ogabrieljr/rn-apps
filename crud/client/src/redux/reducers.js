const { combineReducers } = require("redux");

const initialState = {
  form: {
    name: "",
    status: "",
  },
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.name };
    case "CHANGE_STATUS":
      return { ...state, status: action.status };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  formReducer,
});

export default rootReducer;
