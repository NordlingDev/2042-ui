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
  onChange
}: SwitchProps) => {
  const mode = useMode();
  const settingState = useSettingState();

  return (
    <$.Root
      className={className}
      style={style}
      role="button"
      onClick={onChange?.bind(null, !value)}
      $mode={mode}
      $settingState={settingState}
    >
      <$.Toggle
        style={{ transform: value ? `translate3d(100%, 0, 0)` : undefined }}
        $mode={mode}
        $settingState={settingState}
      />
      <$.Label $mode={mode} $settingState={settingState} $active={!value}>
        {labelOff}
      </$.Label>
      <$.Label $mode={mode} $settingState={settingState} $active={value}>
        {labelOn}
      </$.Label>
    </$.Root>
  );
};
