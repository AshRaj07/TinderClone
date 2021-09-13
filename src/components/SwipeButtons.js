import React from "react";
import "./SwipeButtons.css";
import { IconButton } from "@material-ui/core";
import { Close, Favorite, FlashOn, Replay, StarRate } from "@material-ui/icons";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__replay">
        <Replay fontSize="large" />
      </IconButton >
      <IconButton className="swipeButtons__close">
        <Close fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarRate fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__favorite">
        <Favorite fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__flash">
        <FlashOn fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
