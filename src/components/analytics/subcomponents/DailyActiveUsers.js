import * as React from "react";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from "@devexpress/dx-react-chart-material-ui";
import { ArgumentScale } from "@devexpress/dx-react-chart";
import { scaleTime } from "d3-scale";

export default function DailyActiveUsers({ data }) {
  return (
    <Container sx={{ mt: 8 }} maxWidth="md">
      <Typography
        component="h2"
        variant="h5"
        align="center"
        color="text.primary"
        mb={3}
      >
        Daily active users
      </Typography>
      <Chart data={data}>
        <ArgumentScale factory={scaleTime} />
        <ArgumentAxis />
        <ValueAxis />
        <LineSeries valueField="active_users" argumentField="date" />
      </Chart>
    </Container>
  );
}
