import React, { useState } from "react";
import styled from "@emotion/styled";
import ToDo from "./ToDo";

const List = styled.div``;

function ToDoList() {
  const [todos, setTodos] = useState([
    { text: "Learn react hooks", isCompleted: false },
    { text: "Learn italian", isCompleted: false },
    { text: "Read a book", isCompleted: false }
  ]);
  return (
    <List>
      {todos.map((todo, index) => (
        <ToDo key={index} index={index} todo={todo} />
      ))}
    </List>
  );
}

export default ToDoList;
