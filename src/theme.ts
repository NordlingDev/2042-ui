export const getDefaultTheme = () => ({
  spacing: (value: number) => value * 8,
  palette: {
    primary: "#27ffdf",
    primaryAlpha: (alpha: number) => `rgba(39, 255, 223, ${alpha})`,

    secondary: "#000000",
    secondaryAlpha: (alpha: number) => `rgba(0, 0, 0, ${alpha})`,

    black: "#000000",
    blackAlpha: (alpha: number) => `rgba(0, 0, 0, ${alpha})`,

    white: "#ffffff",
    whiteAlpha: (alpha: number) => `rgba(255, 255, 255, ${alpha})`
  }
});

export type Theme = ReturnType<typeof getDefaultTheme>;
