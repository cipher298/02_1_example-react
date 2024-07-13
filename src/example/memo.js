/**
 * =================================================================
 * Step 1: Add this code into App.js
 * =================================================================
 */
// import { useState } from "react";
// import Content from "./Content";

// function App() {
//   const [count, setCount] = useState(0);
//   const [count2, setCount2] = useState(0);

//   const handleCount = () => {
//     setCount((prev) => prev + 1);
//   };

//   const handleCount2 = () => {
//     setCount2((prev) => prev + 1);
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <Content count={count} />
//       <h1>{count}</h1>
//       <button onClick={handleCount}>Count</button>
//       <h1>{count2}</h1>
//       <button onClick={handleCount2}>Count2</button>
//     </div>
//   );
// }

// export default App;

/**
 * =================================================================
 * Step 2.2: Add this code into Content.js
 * =================================================================
 */
// import { memo } from "react";

// function Content({ count }) {
//   console.log("re-render: ", count);
//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Hello {count}</h1>
//     </div>
//   );
// }

// export default memo(Content);
