import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Typography, Button } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import CurrentInvestment from "./CurrentInvestment";
import InvestmentCategories from "./InvestmentCategories";
import { Favorite } from "@mui/icons-material";

const style = {
  width: "100%",
  border: 1,
  marginTop: 5,
  marginBottom: 5,
  borderRadius: 5,
  borderColor: "primary.dark",
};

export default function LoveInvestment() {
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
                Make an Investment
              </Typography>
            </Button>
            <Typography variant="body2" color="primary" align="left">
              Make an investment to your love bank by doing a joint activities
              together. Ex: Watching movies, Reading books,... Investment must
              be confirmed by your partner. After an investment is approved,
              both of you will receive the same amount of <Favorite />.
            </Typography>
            {openRequest ? <CurrentInvestment /> : null}
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
                Investment Categories
              </Typography>
            </Button>
            <Typography variant="body2" color="primary" align="left">
              Make a list of investment and decide how important it is on the
              level of 1 to 5 <Favorite />
            </Typography>
            {openApprove ? <InvestmentCategories /> : null}
          </ListItemText>
        </ListItem>
      </ClickAwayListener>
    </List>
  );
}
