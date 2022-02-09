import { Fragment } from "react";
import Grid from "@mui/material/Grid";

import GuessThePicture from "../guessThePicture/GuessThePicture";

const TodaysEngagementActivity = () => {
  const data = [
    {
      image:
        "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png",
      activityName: "Guess who ?",
      options: ["Akshat", "Navnit", "Ankit", "Joe"],
    },
    {
      image:
        "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png",
      activityName: "Guess who ?",
      options: ["Akshat", "Navnit", "Ankit", "Joe"],
    },
    {
      image:
        "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png",
      activityName: "Guess who ?",
      options: ["Akshat", "Navnit", "Ankit", "Joe"],
    },
  ];

  return (
    <Fragment>
      <Grid container spacing={4}>
        {data.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <GuessThePicture activity={item} />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default TodaysEngagementActivity;
