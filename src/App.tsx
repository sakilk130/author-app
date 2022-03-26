import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";

const Home = React.lazy(() => import("./pages/Home"));
const Author = React.lazy(() => import("./pages/Author"));
const FavtAuthor = React.lazy(() => import("./pages/FavtAuthor"));

const App: FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <React.Suspense
        fallback={<div className="spinner-border m-5" role="status"></div>}
      >
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/favorite-author" exact component={FavtAuthor} />
            <Route path="/authors" exact component={Author} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </React.Suspense>
    </div>
  );
};

export default App;
