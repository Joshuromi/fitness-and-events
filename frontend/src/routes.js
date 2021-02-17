import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/login/Login.page";
import DashboardPage from "./pages/dashboard/Dashboard.page";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/dashboard" component={DashboardPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
