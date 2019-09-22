import React from "react";
import { Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import JobList from "./components/JobList";
import JobDetail from "./components/JobDetail";

const useStyles = makeStyles(theme => ({
  container: {
    boxShadow:
      "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)",
    paddingTop: "20px",
    paddingBottom: "20px"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="sm">
      <Switch>
        <Route exact path="/" component={JobList} />
        <Route path="/:jobId" component={JobDetail} />
      </Switch>
    </Container>
  );
}

export default App;
