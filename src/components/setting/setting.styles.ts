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

type LabelProps = CommonProps & {
    // ...
};

export const Root = styled.div<RootProps>(({ theme, $mode, $state }) => css`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    margin-top: 1px;
    padding: ${theme.spacing(2)}px;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: -1px;
        left: 0;
        border-bottom: 1px solid ${theme.palette.whiteAlpha(0.25)};
    }

    &:first-child {
        margin-top: 0;
    }

    &:last-child {
        &::before {
            border-bottom: 0;
        }
    }

    ${$mode === "original" && css`
        ${$state.hover && css`
            background: ${theme.palette.primary};
            color: ${theme.palette.black};
        `}
    `}

    ${$mode === "custom1" && css`
        ${$state.hover && css`
            background: ${theme.palette.primaryAlpha(0.25)};
        `}
    `}

    ${$mode === "custom2" && css`
        ${$state.hover && css`
            background: ${theme.palette.primaryAlpha(0.25)};
        `}
    `}
`);

export const Info = styled.div`
    width: 100%;
`;

export const Label = styled.div<LabelProps>(({ theme, $mode }) => css`
    width: 100%;

    ${$mode === "original" && css`
        font-size: 24px;
    `}
`);

export const Description = styled.div`
    width: 100%;
`;

export const Content = styled.div`
    flex: 0 0 auto;
    margin-left: auto;
`;
