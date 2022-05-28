import React from 'react';

import {BiPlay, BiPause} from 'react-icons/bi';
import {meal} from '../../constants';

import './Intro.css';

const Intro = () => {
  const [PlayVideo, setPlayVideo] = React.useState(false);
  const VidRef = React.useRef();

  const handleVideo= ()=> {
    setPlayVideo((preState)=>!preState);

    if(PlayVideo){
      VidRef.current.pause();
    }
    else{
      VidRef.current.play();
    }
  }


return ( 

  <div className='app__video'>
    <video src={meal} type="video/mp4" controls={false} muted  loop ref={VidRef} />

    <div className="app__video-overlay flex__center">
      <div className="app__video-overlay_circle flex__center" onClick={handleVideo}>
      {PlayVideo ? <BiPause color='#fff' fontSize={30} /> : <BiPlay color='#fff' fontSize={30} />}

      </div>
    </div>
  </div>
  )
}

export default Intro;
