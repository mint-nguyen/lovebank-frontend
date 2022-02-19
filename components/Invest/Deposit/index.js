import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Typography, Button } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import RequestDeposit from "./RequestDeposit";
import ApproveDeposit from "./ApproveDeposit";

const style = {
  width: "100%",
  border: 1,
  marginTop: 5,
  marginBottom: 5,
  borderRadius: 5,
  borderColor: "primary.dark",
};

export default function Deposit() {
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
                Request a Deposit
              </Typography>
            </Button>
            <Typography variant="body2" color="primary" align="left">
              Send a request for a deposit from your partner for contributing to
              your relationship. Ex: Cook a nice meal for him/her.
            </Typography>
            {openRequest ? <RequestDeposit /> : null}
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
                Deposit Waiting for Approval
              </Typography>
            </Button>
            <Typography variant="body2" color="primary" align="left">
              Approve or reject a deposit sent from your partner.
            </Typography>
            {openApprove ? <ApproveDeposit /> : null}
          </ListItemText>
        </ListItem>
      </ClickAwayListener>
    </List>
  );
}
