import React, { useEffect } from "react";
import "./courses.css"

import ReactPlayer from "react-player"



const src =
  "https://fuchsia-uncertain-newt-518.mypinata.cloud/ipfs/QmdviLRdi757kDCAtfFp6nZnfPgfZR5sUjsimqCz6XLqpp";

const Video = () => {
  
  useEffect(() => {
    const video = document.querySelector(".metacoinvideo");
    video.addEventListener('loadeddata', function () {
      video.play();
    });

    video.addEventListener('ended', function () {
      video.currentTime = 0; // Reset video to the beginning
      video.play();
    });
  }, []);


  return (
    <video src={src} className="metacoinvideo" width="70%" muted>
    </video>
  );
};

export default Video;
{/* </div> 
    </>
  )
}

export default coinVideo */}
