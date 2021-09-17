import "./App.css";

import { Search } from "./Search";
import Biodata from "./Biodata";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <header>
        <p>Tugas Kelompok 40 Modul 4</p>
      <nav>
        <Link className='digi' to="/">Digital library</Link>
        <Link className='bio' to="/biodata">Biodata</Link>
      </nav>
      </header>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/biodata" exact component={Biodata} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
