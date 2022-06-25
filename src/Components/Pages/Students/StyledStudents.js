import styled from "styled-components";
import Colors from "../../../Constants/colors";

export default styled.div`
  width: 95%;
  margin: 0 auto;

  .search--filters--div{
    display: flex;
    justify-content: space-between;

    .button--div{
      display: flex;
      align-items: center;
      column-gap: 5px;

      .MuiSelect-select{
        width: 100px;
      }

      .MuiInputLabel-outlined{
        margin-top: -7px;
      }

      .MuiInputLabel-shrink{
        margin-top: 0px !important;
      }
    }
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
  }
`;
