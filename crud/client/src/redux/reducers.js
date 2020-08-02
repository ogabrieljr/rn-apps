const { combineReducers } = require("redux");

const initialState = {
  form: {
    name: "",
    status: "",
  },
  users: {
    isFetching: false,
    users: [],
  },
};

const formReducer = (state = initialState.form, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.name };
    case "CHANGE_STATUS":
      return { ...state, status: action.status };
    case "INITIALIZE_FORM":
      return initialState.form;
    default:
      return state;
  }
};

const usersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case "REQUEST_DATA":
      return { ...state, isFetching: true };
    case "RECEIVE_DATA_SUCCESS":
      return { ...state, isFetching: false, users: action.users };
    case "RECEIVE_DATA_FAILED":
      return { ...state, isFetching: false };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  formReducer,
  usersReducer,
});

export default rootReducer;
