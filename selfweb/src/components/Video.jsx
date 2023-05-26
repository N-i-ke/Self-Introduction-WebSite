import React, { Component } from 'react'
import "video-react/dist/video-react.css"; // import css
import { Player, ControlBar, PlaybackRateMenuButton } from "video-react";

class Video extends Component {
  componentDidMount() {
    this.player.playbackRate = 1;
    this.forceUpdate();
  }
  render() {
      return (
        <div className="bg-video">
          <Player
            ref={(c) => {
              this.player = c;
            }}
            playsInline
          >
            <ControlBar>
              <PlaybackRateMenuButton order={7} rates={[2, 1.5, 1.0, 0.5]} />
            </ControlBar>
            <source src="../Video/TopQBeijing.mp4" type="video/mp4" />
          </Player>
        </div>
      );
  }
}


export default Video
