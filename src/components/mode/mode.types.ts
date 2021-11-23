import React from "react";

export interface ModeProps {
  children: React.ReactNode;
  value: ModeValue;
}

export type ModeValue = "original" | "custom1" | "custom2";
