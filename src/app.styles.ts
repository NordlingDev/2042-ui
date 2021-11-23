import styled, { createGlobalStyle, css } from "styled-components";

import * as components from "./components";

export const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    body {
      line-height: 1;
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

export const Root = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div(
  ({ theme }) => css`
    width: 40%;
    min-width: 640px;
    height: 100%;
    padding: ${theme.spacing(4)}px;
    backdrop-filter: blur(30px);
  `
);

export const SettingsContainer = styled.div`
  width: 100%;
`;

export const Setting = styled(components.Setting)``;

export const SettingSwitch = styled(components.Switch)(
  ({ theme }) => css`
    margin-bottom: ${theme.spacing(1)}px;

    &:last-child {
      margin-bottom: 0;
    }
  `
);
