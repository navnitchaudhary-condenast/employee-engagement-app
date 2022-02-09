  import { Link } from "react-router-dom";
  import SportsScoreIcon from "@mui/icons-material/SportsScore";

  import classes from "./EngagementScore.module.css";

  export default function EngagementScore() {
    return (
      <Link to="/engagement-details">
        <div className={classes.FlipCard}>
          <div className={classes.FlipCardInner}>
            <div className={classes.FlipCardFront}>
              <div className={classes.EngagementScore}>
                <div className={classes.Box}>
                  <div className={classes.Inner}>
                    <h3 className={classes.Score}>53</h3>
                    <p>Engagement Score</p>
                  </div>
                  <div>
                    <SportsScoreIcon className={classes.Icon} />
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.FlipCardBack}>
              <div className={classes.EngagementDetails}>
                <div>
                  <span>Activity Name:</span>
                  <span className={classes.ActivityName}>Test</span>
                </div>
                <div>
                  <span>Activity Score:</span>
                  <span className={classes.ActivityName}>1212</span>
                </div>

                <hr />
                <div>
                  <span>Activity Name:</span>
                  <span className={classes.ActivityName}>Test</span>
                </div>
                <div>
                  <span>Activity Score:</span>
                  <span className={classes.ActivityName}>1212</span>
                </div>
                <hr />
                <div>
                  <span>Activity Name:</span>
                  <span className={classes.ActivityName}>Test</span>
                </div>
                <div>
                  <span>Activity Score:</span>
                  <span className={classes.ActivityName}>1212</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
