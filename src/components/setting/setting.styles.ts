import styled, { css } from "styled-components";

import { ModeValue } from "../mode";

import { SettingState } from "./setting.types";

type CommonProps = {
  $mode: ModeValue;
  $state: SettingState;
};

type RootProps = CommonProps & {
  // ...
};

export const Root = styled.div<RootProps>(
  ({ theme, $mode, $state }) => css`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    margin-top: 1px;
    padding: ${theme.spacing(1.5)}px ${theme.spacing(2)}px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: -1px;
      left: 0;
      border-bottom: 1px solid ${theme.palette.whiteAlpha(0.5)};
    }

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      &::before {
        border-bottom: 0;
      }
    }

    ${
      $mode === "original" &&
      $state.hover &&
      `
      background: ${theme.palette.primary};
      color: ${theme.palette.black};
    `
    }

    ${
      $mode === "custom1" &&
      $state.hover &&
      `
      background: ${theme.palette.primaryAlpha(0.25)};
      border-color: ${theme.palette.primaryAlpha(0.75)};
    `
    }

    ${
      $mode === "custom2" &&
      $state.hover &&
      `
      background: ${theme.palette.primaryAlpha(0.25)};
      border-color: ${theme.palette.primaryAlpha(0.75)};
    `
    }
  `
);

export const Info = styled.div(
  ({ theme }) => css`
    width: 100%;
    padding-top: ${theme.spacing(0.75)}px;
    margin-bottom: auto;
  `
);

export const Label = styled.div`
  width: 100%;
`;

export const Description = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  flex: 0 0 auto;
  margin-left: auto;
`;
