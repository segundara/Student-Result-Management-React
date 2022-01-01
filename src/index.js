import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "./Assets/css/styles.css";
import "./Assets/css/grid.css";

import Layout from "./Components/Layouts/Layout";
//import App from "./App";

document.title = "Dashboard Design";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Layout />
  </StrictMode>,
  rootElement
);
