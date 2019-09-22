import React from "react";
import { Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import JobList from "./components/JobList";
import JobDetail from "./components/JobDetail";

function App() {
  return (
    <Container maxWidth="sm">
      <Switch>
        <Route exact path="/" component={JobList} />
        <Route path="/:jobId" component={JobDetail} />
      </Switch>
    </Container>
  );
}

export default App;
