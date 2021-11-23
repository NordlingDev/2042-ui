import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    body {
      line-height: 1.4;
      background: url("./assets/bf2042_wallpaper.png") ${theme.palette.black};
      background-size: cover;
      color: ${theme.palette.white};
      font-family: "Rajdhani", sans-serif;
      font-size: 20px;
      font-weight: 500;
      cursor: default;
      user-select: none;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
  `
);
