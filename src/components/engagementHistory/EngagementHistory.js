import * as React from "react";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import axios from "../../axios";

export default function EngagementHistory() {
  const [engagements, setEngagements] = useState({});

  useEffect(() => {
    const fetchdata = async () => {
      const resp = await axios.get("/v1/engagements/getScoreAndAllActivities");
      setEngagements(resp.data);
    };

    fetchdata();
  }, []);

  const columns = [
    {
      field: "engagementActivityName",
      headerName: "Activity Name",
      flex: 2,
    },
    {
      field: "engagementActivityType",
      headerName: "Activity Category",
      flex: 2,
    },
    {
      field: "date",
      headerName: "Activity Date",
      flex: 1,
    }
  ];

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Typography
        component="h2"
        variant="h5"
        align="left"
        color="text.primary"
        gutterBottom
      >
        Engagement History
      </Typography>
      <DataGrid
        getRowId={(row) => row._id}
        autoHeight
        rows={engagements.recentEngagements ?? []}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </Container>
  );
}
