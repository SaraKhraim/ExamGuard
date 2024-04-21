import React from 'react';
import { useEffect, useRef} from 'react';

const VideoPlayer = (props) => {
    const {width, height, src} = props;
    
    const videoRef = useRef();
    
    return(
        <div>
        <video 
        ref={videoRef} 
        src={src} 
        height={height}
        width={width}
        controls />
        
      </div>
    );
};

export default VideoPlayer;