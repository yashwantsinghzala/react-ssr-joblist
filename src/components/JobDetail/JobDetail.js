import React, { Fragment } from "react";
import { find } from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { jobTypes } from "../../utils/constants";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 500
  }
}));

const CardDetail = props => {
  const classes = useStyles();
  const jobId = props.match.params.jobId;
  const jobData = find(props.jobs, job => {
    return job.id === jobId;
  });

  return (
    <Card className={classes.card}>
      <CardHeader
        title={jobData.title}
        subheader={
          <Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              Job Type:
            </Typography>
            {jobTypes[jobData.employmentType]}
          </Fragment>
        }
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {jobData.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardDetail;
