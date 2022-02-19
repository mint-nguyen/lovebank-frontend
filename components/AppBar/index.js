import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";

export default function IconTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      textColor="secondary"
      variant="fullWidth"
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example"
      sx={{
        backgroundColor: "primary.light",
        bottom: 0,
        marginTop: 10,
        position: "fixed",
        width: "100%",
        maxWidth: "900px",
      }}
    >
      <Link href="/home">
        <Tab icon={<HomeIcon />} label="HOME" sx={{ width: "33%" }} />
      </Link>
      <Link href="/invest">
        <Tab icon={<AttachMoneyIcon />} label="INVEST" sx={{ width: "33%" }} />
      </Link>
      <Link href="/profile">
        <Tab
          icon={<AccountCircleIcon />}
          label="PROFILE"
          sx={{ width: "33%" }}
        />
      </Link>
    </Tabs>
  );
}
