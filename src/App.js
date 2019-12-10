import React from "react";
import styled from "@emotion/styled";
import ToDoList from "./components/ToDoList";

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <Container>
      <ToDoList />
    </Container>
  );
}

export default App;
