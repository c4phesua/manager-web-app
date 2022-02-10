import './App.scss';
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
import { theme } from './app/theme/theme';


function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
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
