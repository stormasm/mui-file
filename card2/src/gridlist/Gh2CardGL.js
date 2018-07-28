// This was the ImageGridList prior to swapping out
// an img for a SimpleCard...

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

// Both ways work
import tileData from "./tileData1.json";
//import tileData from "./tileData";
import GhCard from "./../cards/GhCard";
//import GhCard from "./../cards/GhCardNoImage";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 600,
    height: 720
  },
  subheader: {
    width: "100%"
  }
});

function GhCardGL(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={250} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.avatar} cols={tile.cols || 1}>
            <GhCard tile={tile} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

GhCardGL.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GhCardGL);
