import React from "react";

import { Mode } from "../components";

import * as $ from "./sections.styles";
import { SectionsProps } from "./sections.types";

export const Original = ({
    className,
    style,
}: SectionsProps) => {
    const [typeA, setTypeA] = React.useState(false);

    return (
        <Mode value="original">
            <$.Section className={className} style={style} title="Original">

                <$.Setting label="Type A">
                    <$.SettingSwitch
                        value={typeA}
                        onChange={setTypeA}
                    />
                </$.Setting>
                
            </$.Section>
        </Mode>
    );
};

export const Custom1 = ({
    className,
    style,
}: SectionsProps) => {
    const [typeA, setTypeA] = React.useState(false);
    const [typeB, setTypeB] = React.useState(false);

    return (
        <Mode value="custom1">
            <$.Section className={className} style={style} title="Custom 1">

                <$.Setting label="Type A (non-strict)">
                    <$.SettingSwitch
                        value={typeA}
                        onChange={setTypeA}
                    />
                </$.Setting>

                <$.Setting label="Type B (strict)">
                    <$.SettingSwitch
                        value={typeB}
                        strict
                        onChange={setTypeB}
                    />
                </$.Setting>
                
            </$.Section>
        </Mode>
    );
};

export const Custom2 = ({
    className,
    style,
}: SectionsProps) => {
    const [typeA, setTypeA] = React.useState(false);
    const [typeB, setTypeB] = React.useState(false);

    return (
        <Mode value="custom2">
            <$.Section className={className} style={style} title="Custom 2">

                <$.Setting label="Type A (non-strict)">
                    <$.SettingSwitch
                        value={typeA}
                        onChange={setTypeA}
                    />
                </$.Setting>

                <$.Setting label="Type B (strict)">
                    <$.SettingSwitch
                        value={typeB}
                        strict
                        onChange={setTypeB}
                    />
                </$.Setting>
                
            </$.Section>
        </Mode>
    );
};
