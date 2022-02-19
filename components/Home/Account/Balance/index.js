import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const style = {
  width: "100%",
  bgcolor: "primary.light",
  borderRadius: 5,
};

export default function Balance() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem>
        <ListItemText>
          <Typography color="primary.dark" variant="h6">
            My balance is
          </Typography>
          <Typography color="primary.dark" variant="h6">
            10,000 <FavoriteIcon />
          </Typography>
        </ListItemText>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText>
          <Typography color="primary.dark" variant="body1" align="left">
            Deposit
          </Typography>
          <Typography color="primary.dark" variant="body2" align="left">
            15,000 <FavoriteIcon fontSize="small" />
          </Typography>
        </ListItemText>
      </ListItem>
      <Divider variant="middle" />
      <ListItem>
        <ListItemText>
          <Typography color="primary.dark" variant="body1" align="left">
            Withdrawal
          </Typography>
          <Typography color="primary.dark" variant="body2" align="left">
            5,000 <FavoriteIcon fontSize="small" />
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
  );
}
