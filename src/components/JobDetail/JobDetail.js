import React, { Fragment } from "react";
import { find } from "lodash";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";
import { useStyles, rootStyles } from "./style";
import { jobTypes } from "../../utils/constants";

const JobDetail = props => {
  const classes = useStyles();
  const headerClass = rootStyles();
  const jobId = props.match.params.jobId;
  const jobData = find(props.jobs, job => {
    return job.id === jobId;
  });

  return (
    <Fragment>
      <Link to="/" className={classes.homeButton}>
        <SvgIcon className={classes.svgHome}>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
        <span className={classes.homeText}>Home</span>
      </Link>
      <Card className={classes.noBoxShadow}>
        <CardHeader
          classes={headerClass}
          title={jobData && jobData.title}
          subheader={
            <Fragment>
              <Typography component="span" variant="body2" color="textPrimary">
                Job Type:
              </Typography>
              <Typography
                component="span"
                variant="body2"
                color="textSecondary"
              >
                {jobTypes[jobData && jobData.employmentType]}
              </Typography>
            </Fragment>
          }
        />
        <CardContent className={classes.noPadding}>
          <Typography variant="body2" color="textSecondary" component="p">
            {jobData && jobData.description}
          </Typography>
        </CardContent>
      </Card>
    </Fragment>
  );
};

JobDetail.propTypes = {
  jobId: PropTypes.number,
  jobs: PropTypes.array
};

JobDetail.defaultProps = {
  jobs: []
};

export default JobDetail;
