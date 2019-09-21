import { connect } from "react-redux";
import JobList from "./JobList";

export default connect(({ jobs }) => ({
  jobs
}))(JobList);
