import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Red Hat Display",
      fontSize: "96px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "144px",
      letterSpacing: "-1.5px",
      textAlign: "center",
    },
    h2: {
      fontFamily: "Red Hat Display",
      fontSize: "60px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "90px",
      letterSpacing: "-0.5px",
      textAlign: "center",
    },
    h3: {
      fontFamily: "Red Hat Display",
      fontSize: "48px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "72px",
      letterSpacing: "0px",
      textAlign: "center",
    },
    h4: {
      fontFamily: "Red Hat Display",
      fontSize: "60px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "90px",
      letterSpacing: "-0.5px",
      textAlign: "center",
    },
    h5: {
      fontFamily: "Red Hat Display",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "36px",
      letterSpacing: "0px",
      textAlign: "center",
    },
    h6: {
      fontFamily: "Red Hat Display",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "30px",
      letterSpacing: "0.15px",
      textAlign: "center",
    },
    subtitle1: {
      fontFamily: "Red Hat Display",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "24px",
      letterSpacing: "0.15px",
      textAlign: "center",
    },
    subtitle2: {
      fontFamily: "Red Hat Display",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "21px",
      letterSpacing: "0.1px",
      textAlign: "center",
    },
    body1: {
      fontFamily: "Red Hat Display",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "24px",
      letterSpacing: "0.5px",
      textAlign: "center",
    },
    body2: {
      fontFamily: "Red Hat Display",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "21px",
      letterSpacing: "0.25px",
      textAlign: "center",
    },
    button: {
      fontFamily: "Red Hat Display",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "16px",
      letterSpacing: "1.25px",
      textAlign: "center",
    },
    caption: {
      fontFamily: "Red Hat Display",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "15px",
      letterSpacing: "0.4px",
      textAlign: "center",
    },
    overline: {
      fontFamily: "Red Hat Display",
      fontSize: "10px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "12px",
      letterSpacing: "1.5px",
      textAlign: "center",
    },
  },
  palette: {
    primary: {
      light: "#FFE5EC",
      main: "#FFB3C6",
      dark: "#fb6f92",
    },
    secondary: {
      main: "#fb6f92",
      light: "#FFFFFF",
      dark: "#000000",
    },
    error: {
      main: "#d32f2f",
      light: "#ef5350",
      dark: "#c62828",
    },
    warning: {
      main: "#ED6C02",
      light: "#ff9800",
      dark: "#e65100",
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
    },
    info: {
      main: "#0288d1",
      light: "#03a9f4",
      dark: "#01579b",
    },
    background: "#ffe5ec",
  },
});
export default theme;
