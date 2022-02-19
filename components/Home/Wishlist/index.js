import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Typography, Button } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import ApproveWish from "./ApproveWish";
import RequestWish from "./RequestWish";

const style = {
  width: "100%",
  border: 1,
  marginTop: 5,
  marginBottom: 5,
  borderRadius: 5,
  borderColor: "primary.dark",
};

export default function Wishlist() {
  const [openRequest, setOpenRequest] = React.useState(false);

  const handleClickRequest = () => {
    setOpenRequest((prev) => !prev);
  };

  const handleClickAwayRequest = () => {
    setOpenRequest(false);
  };

  const [openApprove, setOpenApprove] = React.useState(false);

  const handleClickApprove = () => {
    setOpenApprove((prev) => !prev);
  };

  const handleClickAwayApprove = () => {
    setOpenApprove(false);
  };

  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ClickAwayListener onClickAway={handleClickAwayRequest}>
        <ListItem>
          <ListItemText>
            <Button>
              <Typography
                variant="h6"
                color="primary.dark"
                onClick={handleClickRequest}
              >
                Request a Wishlist
              </Typography>
            </Button>
            <Typography variant="body2" color="primary" align="left">
              Send a request for a wish to your partner. Ex: Travel to Japan
              together.
            </Typography>
            {openRequest ? <RequestWish /> : null}
          </ListItemText>
        </ListItem>
      </ClickAwayListener>
      <Divider />
      <ClickAwayListener onClickAway={handleClickAwayApprove}>
        <ListItem>
          <ListItemText>
            <Button>
              <Typography
                variant="h6"
                color="primary.dark"
                onClick={handleClickApprove}
              >
                Wishlist Waiting for Approval
              </Typography>
            </Button>
            <Typography variant="body2" color="primary" align="left">
              Approve or reject a wish sent from your partner.
            </Typography>
            {openApprove ? <ApproveWish /> : null}
          </ListItemText>
        </ListItem>
      </ClickAwayListener>
    </List>
  );
}
