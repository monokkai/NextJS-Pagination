import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #4b0082;
  color: white;
  width: 80%;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-int-out;
  margin-bottom: 10px;

  &:hover {
    background-color: #6a1b9a;
    scale: 1.05;
  }
`;

const Button: React.FC = (): ReactNode => {
  return <StyledButton>Click Me!</StyledButton>;
};

export default Button;
