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
`;
