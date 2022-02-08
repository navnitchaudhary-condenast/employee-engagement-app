import * as React from "react";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  Legend,
  AreaSeries,
} from "@devexpress/dx-react-chart-material-ui";
import { ArgumentScale, ValueScale } from "@devexpress/dx-react-chart";
import { scaleTime } from "d3-scale";

export default function DailyEngagementRate({ data }) {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Typography
        component="h2"
        variant="h5"
        align="left"
        color="text.primary"
        gutterBottom
      >
        Daily active users
      </Typography>
      <Chart data={data}>
        <Legend />

        <ValueScale name="total_num_users" />
        <ValueScale name="num_participants" />

        <ArgumentScale factory={scaleTime} />
        <ArgumentAxis />
        <ValueAxis scaleName="total_num_users" />
        <AreaSeries
          name="Total users"
          valueField="total_num_users"
          argumentField="date"
        />
        <ValueAxis scaleName="num_participants" position="right" />
        <AreaSeries
          name="Participants"
          valueField="num_participants"
          argumentField="date"
        />
      </Chart>
    </Container>
  );
}
