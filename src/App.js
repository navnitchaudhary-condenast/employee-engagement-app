import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";

import "./App.css";
import MyOrganisation from "./components/myOrganisation/MyOrganisation";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LogIn from "./components/login/LogIn";
import SignUp from "./components/signup/SignUp";
import TodaysEngagementActivity from "./components/todaysEngagementActivity/todaysEngagementActivity";

const theme = createTheme();

const App = () => {
  const pathname = window.location.pathname;

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <main>
          <Container sx={{ py: 8, mt: 4 }} maxWidth="md">
            <BrowserRouter>
              {pathname !== "/" && pathname !== "/signup" && <Header></Header>}
              <Switch>
                <Route path="/signup" component={SignUp} />
                <Route path="/my-organisation" component={MyOrganisation} />
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
      </ThemeProvider>
    </div>
  );
};

export default App;
