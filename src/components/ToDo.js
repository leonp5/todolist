import React from "react";
import styled from "@emotion/styled";

const Item = styled.div`
  width: 90%;
  padding: 10px;
  margin: 4px;
  border-radius: 5px;
  color: ${prop => prop.theme.secondary};
  background: ${prop => prop.theme.tertiary};
`;

function ToDo({ todo, index }) {
  return <Item>{todo.text}</Item>;
}

export default ToDo;
