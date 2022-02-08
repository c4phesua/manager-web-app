import MAuth from "../model/MAuth";
import RouteConstants from "../routes/RouteConstants";
import PageRouter from "../routes/PageRouter";

const LogoutPage = () => {

  MAuth.logout();
  PageRouter.redirect(RouteConstants.login);
  return null;
}

export default LogoutPage;