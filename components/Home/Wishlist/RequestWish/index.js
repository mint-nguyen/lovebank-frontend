import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography, Button } from "@mui/material";
import { Favorite, Send } from "@mui/icons-material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Wishes } from "./Wishes";
import Dialog from "../../../Dialog";

export default function RequestWish() {
  const [openInfo, setOpenInfo] = React.useState(false);

  const handleClickOpenInfo = () => {
    setOpenInfo(true);
  };

  const handleCloseInfo = (value) => {
    setOpenInfo(false);
  };

  return (
    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "100%", backgroundColor: "primary.light" }}>
              <Typography variant="h6" color="primary.dark">
                Wishlist Categories
              </Typography>
            </TableCell>
            <TableCell
              sx={{
                width: "100%",
                backgroundColor: "primary.light",
                textAlign: "right",
              }}
            >
              <Button>
                <ErrorOutlineIcon
                  color="secondary"
                  onClick={handleClickOpenInfo}
                />
              </Button>
              <Dialog
                open={openInfo}
                onClose={handleCloseInfo}
                content={
                  <Typography variant="body1">
                    <ErrorOutlineIcon />
                    <br />
                    This is a joint activity list. Once a wish is approved by
                    your partner, the cost will be halved.
                  </Typography>
                }
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle2" color="primary.dark" align="left">
                Wish
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" color="primary.dark" align="left">
                Cost
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Wishes.map((Wish) => (
            <TableRow
              key={Wish.wish}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Typography variant="caption" color="primary.dark" align="left">
                  {Wish.wish}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="caption"
                  color="primary.dark"
                  align="left"
                  sx={{ display: "flex" }}
                >
                  {Wish.cost}{" "}
                  <Favorite sx={{ marginLeft: 1 }} fontSize="small" />
                  <Button sx={{ padding: 0, color: "primary.dark" }}>
                    <Send
                      sx={{ position: "relative", left: 3 }}
                      fontSize="small"
                    />
                  </Button>
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
