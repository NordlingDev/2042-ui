import React from "react";

export interface SectionProps {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
    title: string;
}
