import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import axios from "../../../axios";

export default function EngagementActivities() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await axios.get("/v1/engagements");
      console.log(data);

      setResults(data.map((result) => ({ ...result, id: result._id })));
    };

    fetchdata();
  }, []);

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 2,
    },
    {
      field: "type",
      headerName: "Category",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date published",
      flex: 1,
    },
    {
      field: "time",
      headerName: "Time published",
      flex: 1,
    },
  ];

  return (
    <Container sx={{ mt: 8 }} maxWidth="md">
      <Typography
        component="h2"
        variant="h5"
        align="center"
        color="text.primary"
        mb={3}
      >
        Engagement activities
      </Typography>
      <DataGrid
        autoHeight
        rows={results}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </Container>
  );
}
