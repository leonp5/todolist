import React from "react";
import styled from "@emotion/styled";

const Container = styled.div``;

const Input = styled.input``;

function New({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        type="text"
        value={value}
        placeholder="Add new ToDo"
        onChange={e => setValue(e.target.value)}
      />
    </Container>
  );
}

export default New;
