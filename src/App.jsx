import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import RouteConstants from './app/routes/RouteConstants';
import LoginPage from './app/page/LoginPage';
import LogoutPage from './app/page/LogoutPage';
import UnauthenticatedRoute from './app/routes/UnauthenticatedRoute';
import Error from './app/page/Error';
import AuthorizedRoute from './app/routes/AuthorizedRoute';
import { ROLE } from './app/util/Constant';
import { theme } from './app/theme/theme';
import Dashboard from './app/page/Dashboard';
import ManagerManagement from './app/page/ManagerManagement';
import BookingManagement from './app/page/BookingManagement';
import ShowroomManagement from './app/page/ShowroomManagement';
import PackageManagement from './app/page/PackageManagement';
import PromotionManagement from './app/page/PromotionManagement';
import StyleManagement from './app/page/StyleManagement';
import Profile from './app/page/Profile';
import Setting from './app/page/Setting';
import ManagerDetails from './app/page/ManagerDetails';
import ConsultantManagement from './app/page/ConsultantManagement';
import ConsultantDetails from './app/page/ConsultantDetails';
import ActiveAccount from './app/page/ActiveAccount';


function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <UnauthenticatedRoute exact path={RouteConstants.login} component={LoginPage} />
            <UnauthenticatedRoute exact path={RouteConstants.active} component={ActiveAccount} />
            <AuthorizedRoute role={ROLE.ADMIN} exact path={RouteConstants.managers} component={ManagerManagement} />
            <AuthorizedRoute role={ROLE.ADMIN} exact path={RouteConstants.manager} component={ManagerDetails} />
            <AuthorizedRoute exact path={RouteConstants.dashBoard} component={Dashboard} />
            <AuthorizedRoute exact path={RouteConstants.root} component={Dashboard} />
            <AuthorizedRoute exact path={RouteConstants.consultants} component={ConsultantManagement} />
            <AuthorizedRoute exact path={RouteConstants.consultant} component={ConsultantDetails} />
            <AuthorizedRoute exact path={RouteConstants.showrooms} component={ShowroomManagement} />
            <AuthorizedRoute exact path={RouteConstants.bookings} component={BookingManagement}/>
            <AuthorizedRoute exact path={RouteConstants.packages} component={PackageManagement}/>
            <AuthorizedRoute exact path={RouteConstants.promotions} component={PromotionManagement}/>
            <AuthorizedRoute exact path={RouteConstants.styles} component={StyleManagement}/>
            <AuthorizedRoute exact path={RouteConstants.profile} component={Profile}/>
            <AuthorizedRoute exact path={RouteConstants.setting} component={Setting}/>
            <Route exact path={RouteConstants.logout} component={LogoutPage} />
            <Route component={Error} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
