/**
 * =================================================================
 * Step 1: Add this code into App.js
 * =================================================================
 */

// import { useRef } from "react";
// import Video from "./video";
// function App() {
//   const videoRef = useRef();

//   const handlePlay = () => {
//     videoRef.current.playVideo();
//   };

//   const handlePause = () => {
//     videoRef.current.pauseVideo();
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <Video ref={videoRef} />
//       <div>
//         <button onClick={handlePlay}>Play</button>
//         <button onClick={handlePause}>Pause</button>
//       </div>
//     </div>
//   );
// }

// export default App;

import { forwardRef, useImperativeHandle, useRef } from "react";
import video1 from "./Video/a1.mp4";

function Video(props, ref) {
  const videoRef = useRef();
  useImperativeHandle(ref, () => ({
    playVideo() {
      videoRef.current.play();
    },
    pauseVideo() {
      videoRef.current.pause();
    },
  }));

  return <video ref={videoRef} style={{ width: 200 }} src={video1}></video>;
}

export default forwardRef(Video);
