import React from "react";
import { Global, css } from "@emotion/core";
import { useTheme } from "emotion-theming";

export default function GlobalStyles() {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        body {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          background: ${theme.background};
        }
      `}
    />
  );
}
