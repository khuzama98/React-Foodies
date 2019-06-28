import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './config/store';
import routes from "./routes";
import './assets/css/list.css'
import Loading from './components/common/Loading'

class App extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <PersistGate loading={<Loading />} persistor={persistor}>
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
          </PersistGate>
        </Provider>
      </>
    );
  }
}

export default App;
