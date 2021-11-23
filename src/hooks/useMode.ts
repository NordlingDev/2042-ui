import React from "react";

import { ModeContext } from "../components";

export const useMode = () => React.useContext(ModeContext);
