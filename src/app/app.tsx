import React from "react";
import { ThemeProvider } from "styled-components";

import { Mode, ModeValue, SwitchProps } from "../components";
import { getDefaultTheme } from "../theme";
import * as sections from "../sections";

import * as $ from "./app.styles";

export const App = () => {
    const theme = React.useMemo(() => getDefaultTheme(), []);
    const [values, setValues] = React.useState<Record<ModeValue, boolean>>({
        original: false,
        custom1: false,
        custom2: false
    });
    const getValueChangeHandler = (key: string) => {
        return (newValue: boolean) => setValues((prev) => ({
            ...prev,
            [key]: newValue
        }));
    };
    const renderSwitch = (
        mode: ModeValue,
        props?: Omit<Partial<SwitchProps>, "value" | "onChange">,
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
                    <sections.Original />
                    <sections.Custom1 />
                    <sections.Custom2 />
                </$.Content>
            </$.Root>
        </ThemeProvider>
    );
};
