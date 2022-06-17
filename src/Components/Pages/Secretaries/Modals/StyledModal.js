import styled from "styled-components";
import Colors from "../../../../Constants/colors";

export default styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  row-gap: 15px;
  margin: 0 auto;

  .delete--student--name {
    color: ${Colors.sapphire};
  }

  .btn {
    width: 300px;
    font-size: 16px;
  }

  .btn--blue {
    font-size: 16px;
    width: 300px;
    border: 1px solid rgba(39, 47, 84, 0.5);
    color: ${Colors.rhino};
  }

  .btn--blue:hover {
    border: 1px solid ${Colors.rhino};
  }

  form {
    display: contents;

    img {
      position: absolute;
      margin-left: -30px;
      margin-top: 15px;
    }

    .MuiTextField-root {
      width: 100%;
    }

    .MuiInputBase-formControl {
      width: 100%;
    }

    .select-error-img {
      margin-left: -60px;
    }
  }
`;
