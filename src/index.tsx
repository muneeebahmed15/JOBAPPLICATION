import React from "react";
import ReactDOM from "react-dom/client";

import "./i18n";

import App from "./App";

import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import {Toaster} from 'react-hot-toast'

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider store={configureStore({})}>
    <React.Fragment>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Toaster />
        <App />
      </BrowserRouter>
    </React.Fragment>
  </Provider>
);
