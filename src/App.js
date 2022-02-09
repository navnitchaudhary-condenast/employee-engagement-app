import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";

import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import MyOrganisation from "./components/myOrganisation/MyOrganisation";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LogIn from "./components/login/LogIn";
import SignUp from "./components/signup/SignUp";
import Analytics from "./components/analytics/Analytics";
import TodaysEngagementActivity from "./components/todaysEngagementActivity/todaysEngagementActivity";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import EditProfile from "./components/profile/EditProfile";
import ActivityList from "./components/activityList/ActivityList";
import AddActivity from "./components/addActivity/AddActivtiy";
import EngagementDetails from "./components/engagementDetails/EngagementDetails";

const theme = createTheme();

const App = () => {
  const pathname = window.location.pathname;

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <main>
            <Container sx={{ py: 8, mt: 4 }} maxWidth="lg">
              <BrowserRouter>
                {pathname !== "/" && pathname !== "/signup" && <Header></Header>}
                <Switch>
                  <Route path="/signup" component={SignUp} />
                  <Route path="/my-organisation" component={MyOrganisation} />
                  <Route path="/analytics" component={Analytics} />
                  <Route path="/profile/edit" component={EditProfile} />
                  <Route path="/activity-list" component={ActivityList} />
                  <Route path="/add-activity" component={AddActivity} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route
                    path="/todays-engagement-activity"
                    component={TodaysEngagementActivity}
                  />
                  <Route
                  path="/engagement-details"
                  component={EngagementDetails}
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
