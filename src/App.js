import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import DashBoard from "./components/dashboard/DashBoard";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LogIn from "./components/login/LogIn";
import SignUp from "./components/signup/SignUp";

const App = () => {
  const pathname = window.location.pathname;

  return (
    <div className="App">
      <BrowserRouter>
        {pathname !== "/" && pathname !== "/signup" && <Header></Header>}
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={DashBoard} />
          <Route path="/" component={LogIn} />
        </Switch>
        {pathname !== "/" && pathname !== "/signup" && <Footer></Footer>}
      </BrowserRouter>
    </div>
  );
};

export default App;
