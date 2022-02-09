import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import appLogo from "../../logo.svg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <img className={classes.AppLogo} src={appLogo} />
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, textAlign: "left" }}
        >
          Application Name
        </Typography>
        <nav>
          <Link
            underline="none"
            variant="button"
            color="#fff"
            href="/todays-engagement-activity"
            sx={{ my: 1, mx: 1.5 }}
          >
            Today's Engagement Activity
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
