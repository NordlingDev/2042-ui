import React from "react";

export interface SwitchProps {
  className?: string;
  style?: React.CSSProperties;
  value: boolean;
  labelOn?: string;
  labelOff?: string;
  strict?: boolean;
  onChange?: (value: boolean) => void;
}
