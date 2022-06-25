import styled from "styled-components";
import Colors from "../../../Constants/colors";

export default styled.div`
  width: 100%;
  height: 135px;
  background: ${Colors.rhino};
  text-align: center;
  display: flex;
  justify-content: center;
  column-gap: 20px;

  a {
    align-self: center;
    text-decoration: none;
    color: white;
    font-size: 18px;
  }

  .navlink-active {
    border-bottom: 1px solid white;
  }

  .logout--div {
    cursor: pointer;
    position: absolute;
    right: 10px;
    transform: translateY(55px);
    background: none;
    color: white;
    font-size: 18px;
    border: none;
  }

  .change--language--div{
    cursor: pointer;
    position: absolute;
    left: 10px;
    transform: translateY(40px);
    background: none;
    color: white;
    font-size: 18px;
    border: none;
  }

  .change--language--div > div{
    color: white;
    // border: none;
  }

  .MuiOutlinedInput-notchedOutline{
    border: none;
  }

  svg{
    color: white;
  }

  .menu--on--left {
    width: 33%;
    display: flex;
    justify-content: flex-end;
  }

  .menu--on--middle {
    width: 15%;
  } 

  .menu--on--right {
    display: flex;
    width: 33%;
    column-gap: 10px;
    text-align: left;
  }
`;
