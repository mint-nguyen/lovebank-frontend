import { makeStyles } from "@mui/styles";

export const StyledButton = makeStyles({
  btn: {
    color: "#fb6f92",
    fontFamily: '"Red Hat Display", sans-serif',
    fontSize: "14px",
    fontWeight: 800,
    border: "1px solid #fb6f92",
    marginBottom: "10px",
    margin: "10px",
    "&:hover": {
      border: "1px solid #fb6f92",
      backgroundColor: "#ffb3c6",
    },
  },
});
