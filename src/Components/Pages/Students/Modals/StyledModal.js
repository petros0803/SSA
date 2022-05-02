import styled from "styled-components";
import Colors from "../../../../Constants/colors";

export default styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  row-gap: 15px;
  margin: 0 auto;

  .MuiButton-root,
  .MuiButton-root:hover {
    border: 1px solid ${Colors.rhino};
    color: ${Colors.rhino};
  }
`;
