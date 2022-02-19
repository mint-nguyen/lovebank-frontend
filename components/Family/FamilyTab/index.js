import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { StyledTab } from "../../../styles/styledTab";
import CreateFamily from "../CreateFamily";
import JoinFamily from "../JoinFamily";

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

export default function FamilyTab() {
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
          TabIndicatorProps={{ style: { background: "#fb6f92" } }}
          textColor="inherit"
        >
          <Tab
            className={styles.tabs}
            label="CREATE A FAMILY"
            {...a11yProps(0)}
          />
          <Tab
            className={styles.tabs}
            label="JOIN A FAMILY"
            {...a11yProps(0)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0}>
          <CreateFamily />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <JoinFamily />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
