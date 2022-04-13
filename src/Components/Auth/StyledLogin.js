import styled from "styled-components";
import Colors from "../../Constants/colors";

export default styled.div`
  height: calc(100vh - 135px);

  a{
    text-decoration: none;
  }

  .btn-login{
      width 300px;
      height: 50px;
      border-radius: 10px;
      border: none;
      background-color: ${Colors.rhino};
      font-size: 22px;
      color: white;
      display: flex;
      justify-content: center;
      margin: 0 auto;
      position: relative;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      gap: 10px;
      transition: 0.3s;
      cursor: pointer;

      img{ 
          width:28px;
      }

      img, span{
        align-self: center;
      }
    }

    .btn-login:hover{
            background-color: ${Colors.bigStone};
    }
`;
