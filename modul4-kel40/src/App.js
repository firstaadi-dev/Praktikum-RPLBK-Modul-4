import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Usestate from "./Usestate/State";
import Useeffect from "./Useeffect/Effect";
import Usecontext from "./Usecontext/Context";

function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="title">
          <p>Kelompok 40</p>
        </div>
        <nav>
          <Link className="text" to="/">
            useState
          </Link>
          <Link className="text navtext2" to="/effect">
            useEffect
          </Link>
          <Link className="text" to="/context">
            useContext
          </Link>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact component={Usestate} />
        <Route path="/effect" exact component={Useeffect} />
        <Route path="/context" exact component={Usecontext} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
