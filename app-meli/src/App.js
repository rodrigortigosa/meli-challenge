import { Navbar } from './components/common/Navbar';
import { Home } from './components/views/Home';
import { Resultados } from './components/views/Resultados';
import { NoMatch } from './components/views/NoMatch';
import { HOME, RESULTADOS } from './config/router/paths';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path={RESULTADOS} component={Resultados} />
          <Route path={HOME} component={Home} exact />
          <Route component={NoMatch} />
        </Switch>
      </Router>
  </div>
  );
}
