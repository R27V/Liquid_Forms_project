import React from "react";
import Tooltip from "@mui/material/Tooltip";
// import { withStyles } from "@material-ui/core/styles";

const EllipsedLabel = ({ maxLength, label, className, toolTipDelay = 500 }) => {
  //   const HtmlTooltip = withStyles((theme) => ({
  //     tooltip: {
  //       fontSize: theme.typography.pxToRem(13),
  //     },
  //   }))(Tooltip);

  return label && label.length > maxLength ? (
    <Tooltip enterDelay={toolTipDelay} title={label} arrow>
      <span className={className || ""}>{`${label.substring(
        0,
        maxLength
      )}...`}</span>
    </Tooltip>
  ) : (
    <span className={className || ""}>{label}</span>
  );
};

export default EllipsedLabel;
