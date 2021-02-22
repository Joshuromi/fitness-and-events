import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/login/login.page";
import SignUpPage from "./pages/signup/signup.page";
import DashboardPage from "./pages/dashboard/dashboard.page";
import EventsPage from "./pages/events/events.page";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignUpPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/events" component={EventsPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
