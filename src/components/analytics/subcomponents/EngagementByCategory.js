import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import {
  Legend,
  Chart,
  PieSeries,
} from "@devexpress/dx-react-chart-material-ui";

export default function EngagementByCategory({ categories }) {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Typography
        component="h2"
        variant="h5"
        align="left"
        color="text.primary"
        gutterBottom
      >
        Engagement by category
      </Typography>
      <Chart data={categories}>
        <PieSeries valueField="pct" argumentField="category" />
        <Legend />
      </Chart>
    </Container>
  );
}
