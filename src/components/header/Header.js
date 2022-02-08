import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import appLogo from "../../logo.svg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <img className={classes.AppLogo} src={appLogo} />
        <Typography variant="h6" color="inherit" noWrap>
          Application Name
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
