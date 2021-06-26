import { renderHook } from "@testing-library/react-hooks";
import { render, screen } from "@testing-library/react";
import { useTheme, ThemeProvider, ThemeProps, baseTheme } from "theme";
import isEqual from "lodash/isEqual";
import { mergeTheme } from "./theme";

const newTheme: ThemeProps = {
  color: {
    light: "black",
    dark: "white",
  },
  fontSize: {
    small: "8px",
    standard: "12px",
    medium: "18px",
    big: "22px",
  },
  fontWeight: {
    light: 100,
    standard: 300,
    medium: 400,
    bold: 800,
  },
  primaryColor: "#ffff00",
};

const partialTheme = {
  color: {
    dark: "black",
  },
  fontSize: {
    small: "16px",
  },
  fontWeight: {
    medium: 600,
  },
  primaryColor: "#ff0000",
} as ThemeProps;

const TestThemeComponent = () => {
  const theme = useTheme();
  if (isEqual(theme, newTheme)) {
    return <div>Uses newTheme</div>;
  } else if (isEqual(theme, mergeTheme(partialTheme))) {
    return <div>Uses partialTheme</div>;
  } else {
    return null;
  }
};

describe("theme", () => {
  it("Returns baseTheme with no provider", () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current).toStrictEqual(baseTheme);
  });

  it("Uses provided theme", () => {
    renderTestComponent(newTheme);
    expect(screen.getByText("Uses newTheme")).toBeInTheDocument();
  });

  it("Merges provided theme with baseTheme", () => {
    renderTestComponent(partialTheme);
    expect(screen.getByText("Uses partialTheme")).toBeInTheDocument();
  });
});

const renderTestComponent = (theme: ThemeProps) => {
  return render(
    <ThemeProvider theme={theme}>
      <TestThemeComponent />
    </ThemeProvider>
  );
};
