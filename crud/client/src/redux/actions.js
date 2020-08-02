export const changeName = name => ({
  type: "CHANGE_NAME",
  name,
});

export const changeStatus = status => ({
  type: "CHANGE_STATUS",
  status,
});

export const initializeForm = () => ({
  type: "INITIALIZE_FORM",
});

export const receiveDataSuccess = users => ({
  type: "RECEIVE_DATA_SUCCESS",
  users,
});

export const receiveDataFailed = () => ({
  type: "RECEIVE_DATA_FAILED",
});

export const requestData = () => ({
  type: "REQUEST_DATA",
});
