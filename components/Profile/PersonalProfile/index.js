import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Box, Typography } from "@mui/material";
import Button from "../../Button";
import { Edit } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function PersonalProfile() {
  return (
    <Box>
      <Button sx={{ left: 0 }}>
        <Edit sx={{ marginRight: 1 }} /> Edit
      </Button>
      <Avatar
        alt="Logo"
        src="/logo.png"
        sx={{
          width: 160,
          height: 160,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <Typography variant="h6" color="primary.dark">
        Mint
      </Typography>
      <Typography variant="body2" color="primary">
        Lumochi
      </Typography>
      <Button>
        <DeleteIcon sx={{ marginRight: 1 }} /> Logout
      </Button>
      <br />
      <br />
    </Box>
  );
}
