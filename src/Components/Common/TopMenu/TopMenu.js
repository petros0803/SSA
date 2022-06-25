import React, { useState } from "react";
import StyledTopMenu from "./StyledTopMenu";
import SIGLAUSV from "../../../Assets/Images/siglaUSV.png";
import { NavLink } from "react-router-dom";
import { notifySuccess } from "../ToastNotification/ToastNotification";
import { connect } from "react-redux";
import { logout } from "../../../Redux/actions";
import { withTranslate } from 'react-redux-multilingual'
import { IntlActions } from 'react-redux-multilingual';
import { store } from "../../../index";
import {
  MenuItem,
  Select,
} from "@mui/material";
const TopMenu = ({ ...props }) => {
  const [language, setLanguage] = useState(store.getState().Intl.locale === "ro" ? 2 : 1)

  const logout = () => {
    localStorage.clear();
    notifySuccess("Logout successfully!")
    props.logout();
  }

  const changeLanguage = (lang) => {
    var languageToSet;
    if (lang === 1) {
      languageToSet = 'en';
    } else {
      languageToSet = "ro";
    }

    store.dispatch(IntlActions.setLocale(languageToSet));
    setLanguage(languageToSet);
    localStorage.setItem("language", languageToSet);
  };

  return (
    <StyledTopMenu>
      <div className="change--language--div">
        <Select
          labelId="demo-simple-select-label"
          name="language-select"
          id=

          "demo-simple-select"

          value={language}
          onChange={(e) =>
            changeLanguage(e.target.value)
          }
        >
          <MenuItem value={1}>{props.translate("english")}</MenuItem>
          <MenuItem value={2}>{props.translate("romanian")}</MenuItem>
        </Select>
      </div>
      <div className="menu--on--left">
        <NavLink
          to="/students"
          className={(isActive) => (isActive.isActive ? "navlink-active" : "")}
        >
          {props.translate('students')}
        </NavLink>
      </div>
      <div className="menu--on--middle">
        <img src={SIGLAUSV} alt="Sigla USV" />
      </div>
      <div className="menu--on--right">
        <NavLink
          to="/secretaries"
          className={(isActive) => (isActive.isActive ? "navlink-active" : "")}
        >
          {props.translate('secretaries')}
        </NavLink>
        <NavLink
          to="/certificates"
          className={(isActive) => (isActive.isActive ? "navlink-active" : "")}
        >
          {props.translate('certificates')}
        </NavLink>
      </div>

      {props.isLoggedIn && <div className="logout--div" onClick={() => logout()}>{props.translate("logout")}</div>}
    </StyledTopMenu >
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
    logout: () => dispatch(logout()),
  };
};

export default withTranslate(connect(mapStateToProps, mapDispatchToProps)(TopMenu));
