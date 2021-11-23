import styled, { css } from "styled-components";

import { ModeValue } from "../mode";
import { SettingState } from "../setting";

type CommonProps = {
    $mode: ModeValue;
    $settingState: SettingState;
};

type RootProps = CommonProps & {
    // ...
};

type ToggleProps = CommonProps & {
    // ...
};

type LabelProps = CommonProps & {
    $active: boolean;
};

const WIDTH = 240;
const HEIGHT = 30;

const transition = (types: string[], speed = 100) => {
    return `${types.join(" ")} ${speed}ms linear`;
};

export const Root = styled.div<RootProps>(({ theme, $mode, $settingState }) => css`
    display: flex;
    position: relative;
    width: ${WIDTH}px;
    height: ${HEIGHT}px;
    border: 2px solid ${theme.palette.primary};
    text-transform: uppercase;

    ${$settingState.hover && css`
        background: ${theme.palette.secondary};
        border-color: ${theme.palette.secondary};
    `}

    ${$mode === "custom1" && $settingState.hover && css`
        background: ${theme.palette.blackAlpha(0.5)};
        border-color: transparent;
    `}

    ${$mode === "custom2" && $settingState.hover && css`
        background: ${theme.palette.blackAlpha(0.5)};
        border-color: ${theme.palette.primary};
    `}
`);

export const Toggle = styled.div<ToggleProps>(({ theme, $mode, $settingState }) => css`
    position: absolute;
    top: 0; bottom: 0; left: 0;
    width: 50%;
    background: ${theme.palette.primary};
    transition: ${transition(["transform"])};

    ${$mode === "custom1" && css`
        top: 2px; bottom: 2px; left: 2px;
        width: calc(50% - 2px);

      ${$settingState.hover && css`
            top: 0; bottom: 0; left: 0;
            width: 50%;
        `}
    `}

    ${$mode === "custom2" && css`
        top: 2px; bottom: 2px; left: 2px;
        width: calc(50% - 2px);
    `}
`);

export const Label = styled.div<LabelProps>(({ theme, $mode, $settingState, $active }) => css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    color: ${theme.palette.primary};
    font-weight: 600;
    font-size: 24px;
    transition: ${transition(["color", "opacity"])};

    ${$active && css`
        color: ${theme.palette.secondary};
    `}

    ${$mode === "custom1" && css`
        font-size: 20px;

        ${!$active && css`
            opacity: 0.75;
        `}
    `}

    ${$mode === "custom2" && css`
        font-size: 20px;
        
        ${!$active && css`
            opacity: 0.75;
        `}
    `}
`);
