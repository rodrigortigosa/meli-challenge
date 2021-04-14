import { Navbar } from './components/common/Navbar';
import { Home } from './components/views/Home';
import { Resultados } from './components/views/Resultados';
import { NoMatch } from './components/views/NoMatch';
import { HOME, RESULTADOS } from './config/router/paths';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path={RESULTADOS} component={Resultados}>
            <Resultados />
          </Route>
          <Route path={HOME} exact>
            <Home />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
  </div>
  );
}

export default App;
