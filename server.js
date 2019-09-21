import "babel-polyfill";
import express from "express";
import React from "react";
import ReactDomServer from "react-dom/server";
import bodyParser from "body-parser";
import { StaticRouter } from "react-router";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./src/AppContainer";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(express.static("build/public"));

app.get("*", (req, res) => {
  const context = {};
  const content = ReactDomServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  const html = `<html>
  <head></head>
  <body>
  <div id='root'>${content}</div>
     </body>`;
  res.send(html);
});
app.listen(PORT, () => console.log("dfjosdjflfdsj"));
