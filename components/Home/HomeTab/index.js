import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { StyledTab } from "../../../styles/styledTab";
import Account from "../Account";
import Wishlist from "../Wishlist";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function HomeTab() {
  const styles = StyledTab();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box className={styles.box}>
      <AppBar className={styles.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          TabIndicatorProps={{ style: { background: "primary.dark" } }}
          textColor="inherit"
        >
          <Tab className={styles.tabs} label="ACCOUNT" {...a11yProps(0)} />
          <Tab className={styles.tabs} label="WISHLIST" {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0}>
          <Account />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Wishlist />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
