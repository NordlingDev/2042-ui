import React from "react";

import * as $ from "./section.styles";
import { SectionProps } from "./section.types";

export const Section = ({
    className,
    style,
    children,
    title,
}: SectionProps) => {
    return (
        <$.Root className={className} style={style}>
            <$.Title>{title}</$.Title>
            <$.Content>{children}</$.Content>
        </$.Root>
    );
};
