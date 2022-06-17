import styled from "styled-components";
import Colors from "../../../Constants/colors";

export default styled.div`
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 15px;

    tbody td {
      border-bottom: 1px solid ${Colors.rhino};
    }

    tr {
      font-size: 16px;
      height: 25px;
    }

    thead tr:first-child td {
      border-bottom: 2px solid ${Colors.rhino};
    }

    td:last-child {
      padding-right: 1rem;
      width: 125px;
    }

    thead td:last-child {
      text-align: center;
    }

    tbody td:last-child {
      text-align: center;

      img {
        width: 24px;
        height: 24px;
        cursor: pointer;
      }

      img:first-child {
        margin-right: 10px;
      }

      img:last-child {
        margin-left: 10px;
      }
    }

    td:first-child {
      padding-left: 1rem;
      width: 33px;
    }
  }
`;
