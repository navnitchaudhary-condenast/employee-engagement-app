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
    <Container sx={{ mt: 8 }} maxWidth="md">
      <Typography
        component="h2"
        variant="h5"
        align="center"
        color="text.primary"
        mb={3}
      >
        Engagement by category
      </Typography>
      <Chart data={categories}>
        <PieSeries
          valueField="pct"
          argumentField="category"
          innerRadius={0.6}
        />
        <Legend />
      </Chart>
    </Container>
  );
}
