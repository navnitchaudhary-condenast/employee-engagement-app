import { Fragment, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

import axios from "../../axios";

import GuessThePicture from "../guessThePicture/GuessThePicture";

const TodaysEngagementActivity = () => {
  const [engagements, setEngagements] = useState([]);

  useEffect(() => {
    console.log(engagements);
  }, [engagements]);

  useEffect(() => {
    const fetchdata = async () => {
      const resp = await axios.get("/v1/engagements/todaysengagement");
      setEngagements(resp.data);
    }

    fetchdata();
    
  }, []);

  return (
    <Fragment>
      <Grid container spacing={4}>
        {engagements.map((activity) => {
          return activity.questionanswers.map((person, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <GuessThePicture activity={person} engagementId={activity._id} />
            </Grid>
          ));
        })}
      </Grid>
    </Fragment>
  );
};

export default TodaysEngagementActivity;
