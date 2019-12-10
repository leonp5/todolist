import React from "react";
import { ThemeProvider } from "emotion-theming";

import ToDoList from "./components/ToDoList";
import GlobalStyles from "./components/GlobalStyles";
import { theme } from "./utils/themes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToDoList />
    </ThemeProvider>
  );
}

export default App;
