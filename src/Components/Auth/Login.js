import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import StyledLogin from "./StyledLogin";
import "react-toastify/dist/ReactToastify.css";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { APIVariables } from "../../Shared/api";
import { connect } from "react-redux";
import { login, loginFail, loginSuccess } from "../../Redux/actions";
import {
  notifyError,
  notifySuccess,
} from "../Common/ToastNotification/ToastNotification";
import { withTranslate } from 'react-redux-multilingual'

const Login = ({ ...props }) => {
  let navigate = useNavigate();

  const handleCallbackResponse = (response) => {
    console.log("response", response);
    props.login();
    if (response) {
      const jwtDecode = jwt_decode(response.credential);
      axios
        .get(
          `${APIVariables.LOGIN}?email=${jwtDecode.email.replace("@", "%40")}`
        )
        .then((resp) => {
          console.log("resp", resp);
          if (resp.status === 200) {
            console.log("valeu");
            props.loginSuccess(resp.data);
          } else {
            props.loginFail();
            notifyError(props.translate("login_failed"));
          }
          // axios
          //   .get(`${APIVariables.GET_CURENT_USER}`)
          //   .then((r) => console.log("r", r));
        })
        .then(() => {
          notifySuccess(props.translate("login_success"));
          navigate("/students");
        })
        .catch((error) => {
          console.log("error", error);
          props.loginFail();
          notifyError(props.translate("login_failed"));
        });
    }
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "146163271764-hditui6vnple47irv82gdi8v0qn9j6bf.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("btn-login"), {
      // theme: "outline",
      // size: "large",
      size: "medium",
      type: "standard",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledLogin>
      <div id="btn-login" className="google--button--center"></div>
    </StyledLogin>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.reducer,
    ...state.translate
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(login()),
    loginSuccess: (message, user) => dispatch(loginSuccess(message, user)),
    loginFail: (message) => dispatch(loginFail(message)),
  };
};

export default withTranslate(connect(mapStateToProps, mapDispatchToProps)(Login));
