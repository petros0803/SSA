import styled from "styled-components";
import Colors from "../../../Constants/colors";

export default styled.div`
  width: 95%;
  margin: 0 auto;

  .certificate--cards--container{
    display: flex;
    justify-content: space-evenly;
  }

  .certificate--image{
    width: 252px;
  }

  .certificate--image--selected{
    width: 250px;
    border: 1px solid ${Colors.rhino}
  }

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

    .btn--container {
      width: 200px;
    }

    .next-btn,
    .previous-btn {
      background: transparent;
      border: 1px solid #272f54;
      color: #272f54;
      border-radius: 5px;
      display: flex;
      align-items: center;
      font-size: 16px;
      float: right;
      width: 130px;
      height: 35px;
      justify-content: space-around;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
    }

    .previous-btn {
      float: left;
    }

    .next-btn:hover,
    .previous-btn:hover {
      transform: scale(1.02);
    }

    .next-btn-disabled {
      border: 1px solid #c4c4c4;
      color: #c4c4c4;
      cursor: unset;
    }
  }
`;
