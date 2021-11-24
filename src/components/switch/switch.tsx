import React from "react";

import { useMode, useSettingState } from "../../hooks";

import * as $ from "./switch.styles";
import { SwitchProps } from "./switch.types";

export const Switch = ({
    className,
    style,
    value,
    labelOn = "On",
    labelOff = "Off",
    strict = false,
    onChange,
}: SwitchProps) => {
    const mode = useMode();
    const settingState = useSettingState();

    return (
        <$.Root
            className={className}
            style={style}
            role={!strict ? "button" : undefined}
            onClick={!strict ? onChange?.bind(null, !value) : undefined}
            $mode={mode}
            $settingState={settingState}
        >
            <$.Toggle
                style={{ transform: value ? `translate3d(100%, 0, 0)` : undefined }}
                $mode={mode}
                $settingState={settingState}
            />
            <$.Label
                $mode={mode}
                $settingState={settingState}
                $active={!value}
                role={strict ? "button" : undefined}
                onClick={strict ? onChange?.bind(null, false) : undefined}
            >
                {labelOff}
            </$.Label>
            <$.Label
                $mode={mode}
                $settingState={settingState}
                $active={value}
                role={strict ? "button" : undefined}
                onClick={strict ? onChange?.bind(null, true) : undefined}
            >
                {labelOn}
            </$.Label>
        </$.Root>
    );
};
