import React from "react";

import { ModeContext } from "./mode.context";
import { ModeProps } from "./mode.types";

export const Mode = ({
    children,
    value,
}: ModeProps) => {
    return (
        <ModeContext.Provider value={value}>
            {children}
        </ModeContext.Provider>
    );
};
