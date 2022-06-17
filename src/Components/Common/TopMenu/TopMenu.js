import React from "react";
import StyledTopMenu from "./StyledTopMenu";
import SIGLAUSV from "../../../Assets/Images/siglaUSV.png";
import { NavLink } from "react-router-dom";

const TopMenu = () => {
  return (
    <StyledTopMenu>
      <NavLink
        to="/students"
        className={(isActive) => (isActive.isActive ? "navlink-active" : "")}
      >
        Students
      </NavLink>
      <div>
        <img src={SIGLAUSV} alt="Sigla USV" />
      </div>
      <NavLink
        to="/secretaries"
        className={(isActive) => (isActive.isActive ? "navlink-active" : "")}
      >
        Secretaries
      </NavLink>
      <NavLink
        to="/certificates"
        className={(isActive) => (isActive.isActive ? "navlink-active" : "")}
      >
        Certificates
      </NavLink>
    </StyledTopMenu>
  );
};

export default TopMenu;
