import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

export default function Footer() {
  return (
    <footer style={{ width: "900px", padding: "20px" }}>
      <Typography variant="subtitle2" color="secondary">
        <Divider sx={{ backgroundColor: "#e53935", margin: "20px" }} />
        Made with love from Mint
      </Typography>
    </footer>
  );
}
