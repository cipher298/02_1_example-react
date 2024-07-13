/**
 * =================================================================
 * count, prevCount.current
 * =================================================================
 */
// import { useEffect, useState, useRef } from "react";

// function Content() {
//   const [count, setCount] = useState(60);

//   const timer = useRef();
//   const prevCount = useRef();

//   useEffect(() => {
//     prevCount.current = count;
//   }, [count]);

//   const handleStart = () => {
//     timer.current = setInterval(() => {
//       setCount((prevCount) => prevCount - 1);
//     }, 1000);
//     console.log("Start: ", timer.current);
//   };

//   const handleStop = () => {
//     clearInterval(timer.current);
//     console.log("Stop: ", timer.current);
//   };

//   console.log(count, prevCount.current);

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>{count}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//     </div>
//   );
// }

// export default Content;
