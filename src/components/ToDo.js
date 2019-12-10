import React from "react";
import styled from "@emotion/styled";

const Item = styled.div``;

function ToDo({ todo, index }) {
  return <Item>{todo.text}</Item>;
}

export default ToDo;
