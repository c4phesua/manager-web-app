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
import CommonAuthenticatedRoute from './app/routes/CommonAuthenticatedRoute';
import Error from './app/page/Error';


function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <Router>
          <Switch>
            <CommonAuthenticatedRoute exact path={'/'} component={HelloWorld} />
            <UnauthenticatedRoute exact path={RouteConstants.login} component={LoginPage} />
            <CommonAuthenticatedRoute exact path={RouteConstants.logout} component={LogoutPage} />
            <Route component={Error} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
