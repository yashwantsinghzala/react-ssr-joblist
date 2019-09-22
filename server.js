import "babel-polyfill";
import express from "express";
import React from "react";
import ReactDomServer from "react-dom/server";
import { ServerStyleSheets, ThemeProvider } from "@material-ui/styles";
import bodyParser from "body-parser";
import { StaticRouter } from "react-router";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./src/AppContainer";
import theme from "./src/theme";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(express.static("build/public"));

app.get("*", (req, res) => {
  const context = {};
  const sheets = new ServerStyleSheets();
  const content = ReactDomServer.renderToString(
    sheets.collect(
      <ThemeProvider theme={theme}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </ThemeProvider>
    )
  );
  const css = sheets.toString();
  const html = `<html>
  <head>
    <title>SSR Jobs</title>
    <style id="jss-server-side">${css}</style>
    </head>
    <body>
    <div id='root'>${content}</div>
  </body>`;
  res.send(html);
});
app.listen(PORT, () => console.log("Server started!"));
