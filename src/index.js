import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { StyledEngineProvider } from "@mui/material/styles";

// Redux
import { Provider } from "react-redux";
import store from "./store";

// Router
import { BrowserRouter } from "react-router-dom";

// The Provider component makes the Redux Store available to any nested components that need to access the Redux Store.
// The BrowserRouter component sets a common basename for the nested Routes.
ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StyledEngineProvider>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
