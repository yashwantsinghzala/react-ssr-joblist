import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import JobDetail from "./JobDetail";

export default withRouter(
  connect(({ jobs }) => ({
    jobs
  }))(JobDetail)
);
