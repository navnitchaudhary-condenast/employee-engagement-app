import { useSelector } from "react-redux";

import { userSelector } from "../../slices/user";

import EngagementScore from "../engagementScore/EngagementScore";
import Analytics from "../analytics/Analytics";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import HistoryIcon from "@mui/icons-material/History";

import classes from "./dashboard.module.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useSelector(userSelector);

  return user.role === "user" ? (
    <div className={classes.BoxWrapper}>
      <div className={classes.Box}>
        <EngagementScore />
      </div>
      <div className={classes.Box}>
        <Link
          to="/todays-engagement-activity"
          style={{ textDecoration: "none" }}
        >
          <div className={classes.Container}>
            Today's Engagement Activity <br />
            <LocalActivityIcon className={classes.Icon} />
          </div>
        </Link>
      </div>
      <div className={classes.Box}>
        <Link
          to="/engagement-history"
          style={{ textDecoration: "none" }}
        >
          <div className={classes.Container2}>
            Engagement History <br /> <HistoryIcon className={classes.Icon} />
          </div>
        </Link>
      </div>
    </div>
  ) : (
    <Analytics />
  );
};

export default Dashboard;
