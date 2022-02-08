import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";

import "./App.css";
import DashBoard from "./components/dashboard/DashBoard";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LogIn from "./components/login/LogIn";
import SignUp from "./components/signup/SignUp";
import Analytics from "./components/analytics/Analytics";
import TodaysEngagementActivity from "./components/todaysEngagementActivity/todaysEngagementActivity";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import EditProfile from "./components/profile/EditProfile";

const theme = createTheme();

const App = () => {
  const pathname = window.location.pathname;

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <main>
            <Container sx={{ py: 8, mt: 4 }} maxWidth="md">
              <BrowserRouter>
                {pathname !== "/" && pathname !== "/signup" && <Header></Header>}
                <Switch>
                  <Route path="/signup" component={SignUp} />
                  <Route path="/dashboard" component={DashBoard} />
                  <Route path="/analytics" component={Analytics} />
                  <Route path="/profile/edit" component={EditProfile} />
                  <Route
                    path="/todays-engagement-activity"
                    component={TodaysEngagementActivity}
                  />
                  <Route path="/" component={LogIn} />
                </Switch>
                {pathname !== "/" && pathname !== "/signup" && <Footer></Footer>}
              </BrowserRouter>
            </Container>
          </main>
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
