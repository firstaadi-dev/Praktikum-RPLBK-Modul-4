import "./App.css";

import { Search } from "./Search";
import Biodata from "./Biodata";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <header>Tugas Kelompok 40 Modul 4</header>
      <nav>
        <Link to="/">Digital library</Link>
        <Link to="/biodata">Biodata</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/biodata" exact component={Biodata} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
