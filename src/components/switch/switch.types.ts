import React from "react";

export interface SwitchProps {
  className?: string;
  style?: React.CSSProperties;
  value: boolean;
  labelOn?: string;
  labelOff?: string;
  onChange?: (value: boolean) => void;
}
