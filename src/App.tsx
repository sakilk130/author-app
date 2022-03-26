import { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Author from "./pages/Author";
import FavtAuthor from "./pages/FavtAuthor";
import Home from "./pages/Home";

const App: FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/favorite-author" exact component={FavtAuthor} />
          <Route path="/authors" exact component={Author} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
