import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Divider, Typography } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { WaitingWishes } from "./WaitingWishes";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "../../../Dialog";

export default function ApproveWish() {
  const [openConfirm, setOpenConfirm] = React.useState(false);

  const handleClickOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = (value) => {
    setOpenConfirm(false);
  };

  return (
    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ width: "100%", backgroundColor: "primary.light" }}
              colSpan={3}
            >
              <Typography variant="h6" color="primary.dark">
                Wishlist Waiting for Approval
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            [`& .${tableCellClasses.root}`]: {
              borderBottom: "none",
            },
          }}
        >
          {WaitingWishes.map((WaitingWish) => (
            <>
              <TableRow>
                <TableCell>
                  <Typography variant="caption" color="primary" align="left">
                    {WaitingWish.date}
                  </Typography>
                  <Divider />
                </TableCell>
              </TableRow>
              <TableRow
                key={WaitingWish.wish}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                    width: "100%",
                  },
                }}
              >
                <TableCell>
                  <Typography variant="body2" color="primary.dark" align="left">
                    {WaitingWish.wish}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body2"
                    color="primary.dark"
                    sx={{ display: "flex" }}
                  >
                    {WaitingWish.cost}{" "}
                    <Favorite sx={{ marginLeft: 1 }} fontSize="small" />
                    <Button
                      sx={{
                        padding: 0,
                        color: "primary.dark",
                      }}
                      onClick={handleClickOpenConfirm}
                    >
                      <DoneIcon fontSize="small" />
                    </Button>
                    <Dialog
                      open={openConfirm}
                      onClose={handleCloseConfirm}
                      content={
                        <Typography variant="h6">
                          Confirm Approval? <br />
                          <br />
                          <DoneIcon />
                          <CloseIcon sx={{ marginLeft: 5 }} />
                        </Typography>
                      }
                    />
                    <Button
                      sx={{
                        padding: 0,
                        color: "primary.dark",
                      }}
                    >
                      <CloseIcon fontSize="small" />
                    </Button>
                  </Typography>
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
