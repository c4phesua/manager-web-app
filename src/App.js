import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HelloWorld from './app/page/HelloWorld';
import { ThemeProvider } from '@material-ui/styles';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Router>
          <Switch>
            <Route exact path={'/'} component={HelloWorld} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
