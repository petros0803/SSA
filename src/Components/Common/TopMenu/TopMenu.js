import React from "react";
import StyledTopMenu from "./StyledTopMenu";
import SIGLAUSV from "../../../Assets/Images/siglaUSV.png";

const TopMenu = () => {
  return (
    <StyledTopMenu>
      <img src={SIGLAUSV} alt="Sigla USV" />
    </StyledTopMenu>
  );
};

export default TopMenu;
