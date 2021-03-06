import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { jobTypes } from "../../utils/constants";
import { useStyles } from "./style";

const JobList = ({ jobs }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography variant="h4" component="h2" className={classes.heading}>
        Current Jobs
      </Typography>
      <List className={classes.noPadding} data-test={"job-list"}>
        <Divider />
        {jobs.map((job, index) => (
          <Fragment key={index}>
            <ListItem
              data-test={"job-item"}
              button
              component={Link}
              to={`/${job && job.id}`}
            >
              <ListItemText
                primary={job && job.title}
                secondary={
                  <Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      Job Type:
                    </Typography>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textSecondary"
                    >
                      {jobTypes[job && job.employmentType]}
                    </Typography>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.description}
                      color="textSecondary"
                    >
                      {job && job.description}
                    </Typography>
                  </Fragment>
                }
              />
            </ListItem>
            <Divider />
          </Fragment>
        ))}
      </List>
    </Fragment>
  );
};

JobList.propTypes = {
  jobs: PropTypes.array
};

JobList.defaultProps = {
  jobs: []
};

export default JobList;
