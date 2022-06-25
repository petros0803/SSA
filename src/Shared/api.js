const API_URL = process.env.REACT_APP_API;

export const APIVariables = {
  STUDENTS: `${API_URL}/students`,
  SPECIALIZATIONS: `${API_URL}/specializations`,
  SECRETARIES: `${API_URL}/secretaries`,
  CERTIFICATES: `${API_URL}/certificates`,
  LOGIN: `https://localhost:5001/account/token`,
  GET_CURENT_USER: `https://localhost:44335/get-current-user`,
};
