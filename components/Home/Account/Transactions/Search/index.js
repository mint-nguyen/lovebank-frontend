import * as React from "react";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import { Input, InputAdornment } from "@mui/material";

export default function Search() {
  return (
    <Stack spacing={1} sx={{ width: "100%", backgroundColor: "primary.light" }}>
      <Input
        autoFocus
        fullWidth
        placeholder="Search Transactions"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        sx={{ padding: 1 }}
      />
    </Stack>
  );
}
