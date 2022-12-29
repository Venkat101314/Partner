import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Box, Avatar, Button } from "@mui/material";
import swiggylogo from "../Images/Swiggy.png";
import zomatologo from "../Images/zomato.png";
import dunzologo from "../Images/Dunzo.png";
import bbasketlogo from "../Images/bigbasket.png";
import mygrozo from "../Images/Mygrozo.png";
import grobux from "../Images/grobux.png";
import Header from "./header/Header";
import { makeStyles, ThemeProvider } from "@mui/styles";
import "../styles.css";
import FileUpload from "react-material-file-upload";

const useStyles = makeStyles((theme) => ({
  appRoot: {
    "&.MuiAppBar-root": {
      backgroundColor: "inherit",
    },
  },
  root: {
    flexGrow: 1,
    backgroundColor: "background.paper",
  },
  tabs: {
    "&.MuiButtonBase-root.MuiTab-root": {
      fontSize: "20px",
    },
    "&.MuiTabs-indicator": {
      backgroundColor: "orange",
    },
    "&.Mui-selected": {
      border: "1px solid",
    },
  },
  myGrozo: {
    "&.MuiButtonBase-root.MuiTab-root": {
      color: "black",
      fontWeight: "bold",
      fontWeight: "bold",
    },
  },
  groBux: {
    "&.MuiButtonBase-root.MuiTab-root": {
      backgroundColor: "#4f1812",
      color: "white",
      fontWeight: "bold",
    },
  },
  dunzo: {
    "&.MuiButtonBase-root.MuiTab-root": {
      backgroundColor: "blue",
      color: "#00ffa4",
      fontWeight: "bold",
    },
  },
  swiggy: {
    "&.MuiButtonBase-root.MuiTab-root": {
      backgroundColor: "white",
      color: "white",
      fontWeight: "bold",
    },
  },
  zomato: {
    "&.MuiButtonBase-root.MuiTab-root": {
      backgroundColor: "#ef4f5f",
      color: "white",
      fontWeight: "bold",
    },
  },
  bbasket: {
    "&.MuiButtonBase-root.MuiTab-root": {
      backgroundColor: "#84c225",
      color: "black",
      fontWeight: "bold",
    },
  },
  tabPanel: {
    backgroundColor: "rgba(1,1,1,0.1)",
    paddingTop: 12,
  },
}));

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

export default function ProductUpload() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="panel">
      <div className="header">
        <Header />
      </div>
      <div className="dashboard">
        <ThemeProvider>
          <Box
            className={classes.root}
            sx={{ bgcolor: "background.paper", width: "100%", height: "100%" }}
          >
            <AppBar position="static">
              <Tabs
                value={value}
                className={classes.tabs}
                onChange={handleChange}
                indicatorColor="inherit"
                textColor="inherit"
                variant="fullWidth"
                aria-label="Tabs where selection follows focus"
                // aria-label="full width tabs example"
              >
                <Tab
                  className={classes.myGrozo}
                  {...a11yProps(0)}
                  icon={<img src={mygrozo} style={{ objectFit: "fill" }}></img>}
                />
                <Tab
                  className={classes.groBux}
                  {...a11yProps(1)}
                  icon={<img src={grobux}></img>}
                ></Tab>
                <Tab
                  className={classes.swiggy}
                  icon={<img src={swiggylogo}></img>}
                  {...a11yProps(2)}
                />
                <Tab
                  className={classes.dunzo}
                  icon={<img src={dunzologo}></img>}
                  {...a11yProps(3)}
                />
                <Tab
                  className={classes.zomato}
                  icon={<img src={zomatologo}></img>}
                  {...a11yProps(4)}
                />
                <Tab
                  className={classes.bbasket}
                  icon={<img src={bbasketlogo}></img>}
                  {...a11yProps(5)}
                />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
      
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
       
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
      
              </TabPanel>
              <TabPanel value={value} index={3} dir={theme.direction}>

              </TabPanel>
              <TabPanel value={value} index={4} dir={theme.direction}>
      
              </TabPanel>
              <TabPanel value={value} index={5} dir={theme.direction}>
            
              </TabPanel>
            </SwipeableViews>
          </Box>
        </ThemeProvider>
      </div>
    </div>
  );
}
