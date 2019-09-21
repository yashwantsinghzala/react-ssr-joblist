import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import JobList from "./components/JobList";
import JobDetail from "./components/JobDetail";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={JobList} />
      <Route path="/:jobId" component={JobDetail} />
    </Switch>
  );
}

export default App;
