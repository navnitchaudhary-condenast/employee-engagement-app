import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LogIn from "./components/login/LogIn";
import SignUp from "./components/signup/SignUp";
import DashBoard from "./components/dashboard/DashBoard";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={DashBoard} />
          <Route path="/" component={LogIn} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
