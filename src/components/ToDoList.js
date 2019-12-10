import React from "react";
import styled from "@emotion/styled";

import ToDo from "./ToDo";
import New from "./New";

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
  width: 70vw;
  border-radius: 10px;
  background: ${props => props.theme.primary};
  box-shadow: 2px 0px 5px 1px;
`;

function ToDoList() {
  const [todos, setTodos] = React.useState([
    { text: "Learn react hooks", isCompleted: false },
    { text: "Learn italian", isCompleted: false },
    { text: "Read a book", isCompleted: false }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <List>
      {todos.map((todo, index) => (
        <ToDo key={index} index={index} todo={todo} />
      ))}
      <New addTodo={addTodo} />
    </List>
  );
}

export default ToDoList;
