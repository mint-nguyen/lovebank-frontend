import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { InvestmentList } from "../InvestmentList";

export default function InvestmentCategories() {
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
                Investment Categories
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography variant="body1" color="primary.dark" align="left">
                Task
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1" color="primary.dark">
                Importance Level
              </Typography>
            </TableCell>
          </TableRow>
          {InvestmentList.map((investment) => (
            <>
              <TableRow
                key={investment.name}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                    width: "100%",
                  },
                }}
              >
                <TableCell>
                  <Typography variant="body2" color="primary" align="left">
                    {investment.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body2"
                    color="primary"
                    sx={{ display: "flex" }}
                  >
                    {[...Array(investment.level)].map((index) => (
                      <Favorite />
                    ))}
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
