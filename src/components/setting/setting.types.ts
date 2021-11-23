import React from "react";

export interface SettingProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  label?: string;
  description?: React.ReactNode;
}

export interface SettingState {
  hover: boolean;
}
