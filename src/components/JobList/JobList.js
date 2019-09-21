import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import { jobTypes } from "../../utils/constants";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#e2e2e2"
  },
  block: {
    display: "block"
  }
}));

const JobList = ({ jobs }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List>
        {jobs.map((job, index) => (
          <Fragment key={index}>
            <ListItem button component={Link} to={`/${job.id}`}>
              <ListItemText
                primary={job.title}
                secondary={
                  <Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Job Type:
                    </Typography>
                    {jobTypes[job.employmentType]}
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.block}
                      color="textSecondary"
                    >
                      {job.description}
                    </Typography>
                  </Fragment>
                }
              />
            </ListItem>
            <Divider />
          </Fragment>
        ))}
      </List>
    </div>
  );
};

export default JobList;
