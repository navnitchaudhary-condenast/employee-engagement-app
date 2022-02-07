import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import CssBaseline from "@mui/material/CssBaseline";
import { DataGrid } from "@mui/x-data-grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const columns = [
  {
    field: "profilePicture",
    headerName: "Picture",
    width: 80,
    renderCell: ({ value, row: { firstName, lastName } }) => (
      <img src={value} alt={`${firstName} ${lastName}`} />
    ),
  },
  { field: "email", headerName: "Email", width: 250 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "engagementScore",
    headerName: "Engagement Score",
    type: "number",
    width: 110,
  },
  {
    field: "isCurrentUser",
    renderCell: ({ value, row: { id } }) =>
      value ? (
        <button onClick={() => alert(`Edit user with ID: ${id}`)}>Edit</button>
      ) : (
        <></>
      ),
  },
];
const rows = [
  {
    id: 1,
    profilePicture: "https://source.unsplash.com/random",
    email: "joe.bourne@condenast.com",
    firstName: "Joe",
    lastName: "Bourne",
    engagementScore: 14,
    isCurrentUser: true,
  },
  {
    id: 2,
    profilePicture: "https://source.unsplash.com/random",
    email: "sue.perkins@condenast.com",
    firstName: "Sue",
    lastName: "Perkins",
    engagementScore: 95,
    isCurrentUser: false,
  },
  {
    id: 3,
    profilePicture: "https://source.unsplash.com/random",
    email: "greg.wallace@condenast.com",
    firstName: "Greg",
    lastName: "Wallace",
    engagementScore: 45,
    isCurrentUser: false,
  },
  {
    id: 4,
    profilePicture: "https://source.unsplash.com/random",
    email: "matt.lucas@condenast.com",
    firstName: "Matt",
    lastName: "Lucas",
    engagementScore: 87,
    isCurrentUser: false,
  },
];

const theme = createTheme();

const DashBoard = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <DataGrid
            autoHeight
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
};

export default DashBoard;
