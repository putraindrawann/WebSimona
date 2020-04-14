import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from "./components/login"

ReactDOM.render(
      <App />,
    document.getElementById('root')
);

serviceWorker.unregister();