import React from "react";

import { SettingStateContext } from "../components";

export const useSettingState = () => React.useContext(SettingStateContext);
