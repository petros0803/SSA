import styled from "styled-components";
import Colors from "../../../Constants/colors";

export default styled.div`
  width: 95%;
  margin: 0 auto;

  .page--title--add {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      font-size: 24px;
      color: ${Colors.rhino};
    }

    .btn-add {
      width: 300px;
      height: 40px;
      background-color: rgba(39, 47, 84, 1);
      border: none;
      border-radius: 10px;
      font-size: 18px;
      color: white;
      cursor: pointer;
      transition: 0.3s;
    }

    .btn-add:hover {
      background-color: rgba(39, 47, 84, 0.85);
    }
  }
`;
