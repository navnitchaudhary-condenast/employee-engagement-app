import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useHistory } from "react-router-dom";

import { userSelector } from "../../slices/user";

import appLogo from "../../JIFFY-1.png";
import classes from "./Header.module.css";
import { Fragment, useState } from "react";

const Header = () => {
  const history = useHistory();
  const { isAuthenticated, user } = useSelector(userSelector);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <img className={classes.AppLogo} src={appLogo} style={{marginRight: "10px"}} onClick={() => history.push("/dashboard")} />
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, textAlign: "left" }}
          onClick={() => history.push("/dashboard")}
        >
          Jiffy
        </Typography>
        {isAuthenticated && (
          <Fragment>
            <nav>
              {user.role === 'user' && 
                <Link
                  underline="none"
                  variant="button"
                  color="#fff"
                  href="/todays-engagement-activity"
                  sx={{ my: 1, mx: 1.5 }}
                >
                  Today's Engagement Activity
                </Link>}
              {
                user.role === 'admin' && 
                <Link
                  underline="none"
                  variant="button"
                  color="#fff"
                  href="/activity-list"
                  sx={{ my: 1, mx: 1.5 }}
                >
                  Activity List
                </Link>
              }
              <Link
                variant="button"
                color="#fff"
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                {user.name}
              </Link>
            </nav>
            <div>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={() => {history.push("/profile/edit"); handleClose()}}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          </Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
