import "./App.css";

import { Search } from "./Search";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <header>Tugas Kelompok 40 Modul 4</header>
      <nav>
        <Link to="/">Digital library</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={Search} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
