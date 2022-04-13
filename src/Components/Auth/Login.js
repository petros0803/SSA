import React from "react";
import StyledLogin from "./StyledLogin";
import GOOGLE_LOGO from "../../Assets/Icons/googleLogo.png";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <StyledLogin>
      <NavLink to="/">
        <button className="btn-login">
          <img src={GOOGLE_LOGO} alt="Login" /> <span>Sign in with google</span>
        </button>
      </NavLink>
    </StyledLogin>
  );
};

export default Login;
