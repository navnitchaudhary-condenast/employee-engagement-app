import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function EngagementActivities({ activities }) {
  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 2,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 2,
      valueGetter: ({ value }) => value.name,
    },
    {
      field: "date_published",
      headerName: "Date published",
      flex: 1,
    },
    {
      field: "num_users",
      headerName: "Num. users",
      flex: 1,
    },
    {
      field: "num_participants",
      headerName: "Num. participants",
      flex: 1,
    },
    {
      field: "participation_rate",
      headerName: "Participation rate (%)",
      flex: 1,
    },
  ];

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Typography
        component="h2"
        variant="h5"
        align="left"
        color="text.primary"
        gutterBottom
      >
        Engagement activities
      </Typography>
      <DataGrid
        autoHeight
        rows={activities}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </Container>
  );
}
