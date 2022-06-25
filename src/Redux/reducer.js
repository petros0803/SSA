import { LOGIN_FAIL, LOGIN_QUERY, LOGIN_SUCCESS, LOGOUT } from "./types";

const initialState = {
  isLoggedIn: !!localStorage.getItem("isLoggedIn") ?? false,
  isLoading: false,
  user: undefined,
};

const reducer = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case LOGIN_QUERY:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("isLoggedIn", true);
      return {
        ...state,
        isLoading: false,
        user: action.user,
        isLoggedIn: true,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
      };

      case LOGOUT:
        return {
          ...state, 
          user: undefined,
          isLoggedIn: false
        }
    default:
      return state;
  }
};

export default reducer;
