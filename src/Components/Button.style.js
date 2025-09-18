import styled from "styled-components";

export const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.bgcolor};
  margin: 0 12px;

  &:hover {
    scale: 1.1;
    cursor: pointer;

    & label {
      color: green;
    }
  }

  &:active {
    background-color: orange;
    color: white;
  }
`;


export const ButtonLabel = styled.label`
  font-size: 24px;
  color: #fafafa;
`

