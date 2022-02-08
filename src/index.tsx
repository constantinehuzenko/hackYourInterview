import { App } from "App";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "serviceWorker";
import { setupStore } from "store/store";
import { GlobalStyle } from "styles/globalStyles";
import { BrowserRouter } from "react-router-dom";

const store = setupStore();

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// (<h1[\s\S]*?<\/h1>)[\s\S]*?(<pre>[\s\S]*?<\/pre>)
// [\s\S]*?<ul>([\s\S]*?)<\/ul>
// [\s\S]*?<p>[\s\S]*Ответ:.(\w)\n\n([\s\S]*)\n\n<\/p>
