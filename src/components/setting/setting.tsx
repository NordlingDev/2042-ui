import React from "react";

import { useMode } from "../../hooks";

import { SettingStateContext } from "./setting.context";
import * as $ from "./setting.styles";
import { SettingProps, SettingState } from "./setting.types";

export const Setting = ({
  className,
  style,
  children,
  label,
  description
}: SettingProps) => {
  const mode = useMode();
  const [hover, setHover] = React.useState(false);
  const state = React.useMemo<SettingState>(() => ({ hover }), [hover]);

  return (
    <$.Root
      className={className}
      style={style}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      $mode={mode}
      $state={state}
    >
      <$.Info>
        {label && <$.Label>{label}</$.Label>}
        {description && <$.Description>{description}</$.Description>}
      </$.Info>
      <$.Content>
        <SettingStateContext.Provider value={state}>
          {children}
        </SettingStateContext.Provider>
      </$.Content>
    </$.Root>
  );
};
