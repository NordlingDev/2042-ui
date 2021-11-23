import React from "react";

import { SettingState } from "./setting.types";

export const SettingStateContext = React.createContext<SettingState>({
  hover: false
});
