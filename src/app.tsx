import React from "react";
import { ThemeProvider } from "styled-components";

import { Mode, ModeValue, SwitchProps } from "./components";
import { getDefaultTheme } from "./theme";

import * as $ from "./app.styles";

export const App = () => {
  const theme = React.useMemo(() => getDefaultTheme(), []);

  const [values, setValues] = React.useState<Record<ModeValue, boolean>>({
    original: false,
    custom1: false,
    custom2: false
  });
  const getValueChangeHandler = (key: string) => {
    return (newValue: boolean) =>
      setValues((prev) => ({
        ...prev,
        [key]: newValue
      }));
  };
  const renderSwitch = (
    mode: ModeValue,
    props?: Omit<Partial<SwitchProps>, "value" | "onChange">
  ) => (
    <$.SettingSwitch
      {...props}
      value={values[mode]}
      onChange={getValueChangeHandler(mode)}
    />
  );

  return (
    <ThemeProvider theme={theme}>
      <$.GlobalStyle />
      <$.Root>
        <$.Content>
          <$.SettingsContainer>
            <Mode value="original">
              <$.Setting label="Original">{renderSwitch("original")}</$.Setting>
            </Mode>
            <Mode value="custom1">
              <$.Setting label="Custom 1">{renderSwitch("custom1")}</$.Setting>
            </Mode>
            <Mode value="custom2">
              <$.Setting label="Custom 2">{renderSwitch("custom2")}</$.Setting>
            </Mode>
          </$.SettingsContainer>
        </$.Content>
      </$.Root>
    </ThemeProvider>
  );
};
