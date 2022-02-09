import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HelloWorld from './app/page/HelloWorld';
import { ThemeProvider } from '@material-ui/styles';
import RouteConstants from './app/routes/RouteConstants';
import LoginPage from './app/page/LoginPage';
import LogoutPage from './app/page/LogoutPage';
import UnauthenticatedRoute from './app/routes/UnauthenticatedRoute';
import Error from './app/page/Error';
import AdminPageTest from './app/page/AdminPageTest';
import ManagerPageTest from './app/page/ManagerPageTest';
import AuthorizedRoute from './app/routes/AuthorizedRoute';
import { ROLE } from './app/util/Constant';


function App() {
  console.log('parsed', JSON.parse(localStorage.getItem("User")));
  console.log('un parsed', localStorage.getItem("User"));

  return (
    <div className="App">
      <ThemeProvider>
        <Router>
          <Switch>
            <AuthorizedRoute exact path={RouteConstants.root} component={HelloWorld} />
            <UnauthenticatedRoute exact path={RouteConstants.login} component={LoginPage} />
            <Route exact path={RouteConstants.logout} component={LogoutPage} />
            <AuthorizedRoute role={ROLE.ADMIN} exact path={RouteConstants.adminTest} component={AdminPageTest} />
            <AuthorizedRoute role={ROLE.MANAGER} exact path={RouteConstants.managerTest} component={ManagerPageTest} />
            <Route component={Error} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
