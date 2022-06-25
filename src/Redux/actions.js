import { LOGIN_FAIL, LOGIN_QUERY, LOGIN_SUCCESS, LOGOUT } from "./types";

export const login = () => {
return { type: LOGIN_QUERY };
};
export const loginSuccess = (user) => {
  return { type: LOGIN_SUCCESS, user };
};
export const loginFail = () => {
    return { type: LOGIN_FAIL };
};

export const logout = () => {
  return { type: LOGOUT };
}