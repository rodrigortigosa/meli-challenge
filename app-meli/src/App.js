import { Navbar } from './components/views/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HOME, RESULTADOS, DETALLE } from './config/router/paths';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
       <Switch>
         <Route path={HOME} exact></Route>
         <Route path={RESULTADOS}></Route>
         <Route path={DETALLE}></Route>
       </Switch>
      </Router>
          
          
    </div>
  );
}

export default App;
