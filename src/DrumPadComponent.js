import React from 'react';

const DrumPadComponent = props => {
  return (
    <span className="drum-pad" id={props.drumSound.sound} onClick={() => {props.padClick(props.drumSound.key)}}>
      {props.drumSound.key}
      <audio className='clip' id={props.drumSound.key} src={"./sounds/" + props.drumSound.sound + ".mp3"}></audio>
    </span>
  );
}

export default DrumPadComponent;