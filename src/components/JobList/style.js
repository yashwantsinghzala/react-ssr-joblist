import { makeStyles } from "@material-ui/core/styles";
import { get } from "lodash";

export const useStyles = makeStyles(theme => ({
  heading: {
    padding: "15px",
    textTransform: "uppercase",
    color: get(theme, "palette.primary.main")
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
}));
