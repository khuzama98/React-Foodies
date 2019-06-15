import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import routes from "./routes";

class App extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <>
        <Router>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
        </Router>
      </>
    );
  }
}

export default App;
