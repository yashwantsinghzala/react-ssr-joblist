import React, { Fragment } from "react";
import { find, get } from "lodash";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";

import { jobTypes } from "../../utils/constants";

const useStyles = makeStyles(theme => ({
  root: {
    borderBottom: "1px dashed rgba(0,0,0,0.12)",
    paddingLeft: 0,
    paddingRight: 0
  },
  noPadding: {
    paddingLeft: 0,
    paddingRight: 0
  },
  homeButton: {
    textDecoration: "none",
    display: "inline-block",
    border: "1px solid",
    padding: "2px 10px",
    borderRadius: "2px",
    marginBottom: "10px",
    color: get(theme, "palette.primary.main"),
    "&:hover": {
      color: get(theme, "palette.background.default"),
      background: get(theme, "palette.primary.main")
    }
  },
  svgHome: {
    verticalAlign: "middle"
  },
  homeText: {
    verticalAlign: "middle",
    textTransform: "uppercase",
    marginLeft: "5px"
  },
  noBoxShadow: {
    boxShadow: "none"
  }
}));

const CardDetail = props => {
  const classes = useStyles();
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
          classes={classes}
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

export default CardDetail;
