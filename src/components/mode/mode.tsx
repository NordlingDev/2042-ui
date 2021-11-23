import { ModeContext } from "./mode.context";

export const Mode = ({ children, value }) => {
  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
};
