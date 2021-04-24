import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DETALLE, HOME, RESULTADOS } from './config/router/paths';
import { Navbar } from './components/common/Navbar';
import { Resultados } from './components/views/Resultados';
import { Detalle } from './components/views/Detalle';
import { Home } from './components/views/Home';
import { NotFoundPage } from './components/views/NotFoundPage';

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path={RESULTADOS} component={Resultados} />
          <Route path={DETALLE} component={Detalle} />
          <Route path={HOME} component={Home} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
  </div>
  );
}
