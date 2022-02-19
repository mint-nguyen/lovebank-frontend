import { Button as Btn } from "@mui/material";
import { StyledButton } from "../../styles/styledButton";

export default function Button({ children }) {
  const styles = StyledButton();
  return (
    <Btn className={styles.btn} variant="outlined">
      {children}
    </Btn>
  );
}
