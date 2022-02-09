import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SportsScoreIcon from "@mui/icons-material/SportsScore";

import axios from "../../axios";
import classes from "./EngagementScore.module.css";

export default function EngagementScore() {
  const [engagements, setEngagements] = useState({});

  useEffect(() => {
    const fetchdata = async () => {
      const resp = await axios.get(
        "/v1/engagements/getScoreAndRecentActivities"
      );
      setEngagements(resp.data);
    };

    fetchdata();
  }, []);

  return (
    <Link to="/engagement-details">
      <div className={classes.FlipCard}>
        <div className={classes.FlipCardInner}>
          <div className={classes.FlipCardFront}>
            <div className={classes.EngagementScore}>
              <div className={classes.Box}>
                <div className={classes.Inner}>
                  <h3 className={classes.Score}>{engagements.score}</h3>
                  <p>Engagement Score</p>
                </div>
                <div>
                  <SportsScoreIcon className={classes.Icon} />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.FlipCardBack}>
            {engagements.recentEngagements &&
              engagements.recentEngagements.map((engagement, index) => (
                <Fragment key={index}>
                  <div>
                    <span>Activity Name:</span>
                    <span className={classes.ActivityName}>
                      {engagement.engagementActivityName}
                    </span>
                  </div>
                  <div>
                    <span>Activity Score:</span>
                    <span className={classes.ActivityName}>
                      {engagement.score}
                    </span>
                  </div>

                  {index !== engagements.recentEngagements.length - 1 && <hr />}
                </Fragment>
              ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
