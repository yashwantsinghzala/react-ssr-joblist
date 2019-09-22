import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import { jobTypes } from "../../utils/constants";

const useStyles = makeStyles({
  heading: {
    padding: "15px",
    textTransform: "uppercase"
  },
  description: {
    display: "block",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  },
  noPadding: {
    padding: 0
  }
});

const JobList = ({ jobs }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography variant="h4" component="h2" className={classes.heading}>
        Current Jobs
      </Typography>
      <List className={classes.noPadding}>
        <Divider />
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
                      color="textPrimary"
                    >
                      Job Type:
                    </Typography>
                    {jobTypes[job.employmentType]}
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.description}
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
    </Fragment>
  );
};

export default JobList;
