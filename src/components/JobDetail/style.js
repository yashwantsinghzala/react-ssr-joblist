import { makeStyles } from "@material-ui/core/styles";
import { get } from "lodash";

const useStyles = makeStyles(theme => ({
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

const rootStyles = makeStyles(theme => ({
  root: {
    borderBottom: "1px dashed rgba(0,0,0,0.12)",
    paddingLeft: 0,
    paddingRight: 0
  }
}));

export { rootStyles, useStyles };
