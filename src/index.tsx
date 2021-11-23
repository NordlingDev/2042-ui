import { render } from "react-dom";

import "./bootstrap";
import { App } from "./app";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
