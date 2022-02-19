import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import Search from "./Search";

const style = {
  width: "100%",
  border: 1,
  marginTop: 5,
  borderRadius: 5,
  borderColor: "primary.dark",
};

export default function Transactions() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem>
        <ListItemText>
          <Typography variant="h6" color="primary.dark">
            Transactions
          </Typography>
        </ListItemText>
      </ListItem>
      <Divider />
      <ListItem>
        <Search />
      </ListItem>
    </List>
  );
}
