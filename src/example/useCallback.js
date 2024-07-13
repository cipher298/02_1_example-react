/**
 * =================================================================
 * Step 1: Add this code into App.js
 * =================================================================
 */
// import { useCallback, useState } from "react";
// import Content from "./Content";

// function App() {
//   const [count, setCount] = useState(0);

//   const handleIncrese = useCallback(() => {
//     setCount((prev) => prev + 1);
//   }, []);

//   return (
//     <div style={{ padding: 20 }}>
//       <Content onIncrease={handleIncrese} />
//       <h1>{count}</h1>
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

// function Content({ onIncrease }) {
//   console.log("re-render: ", onIncrease);
//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Hello</h1>
//       <button onClick={onIncrease}>Count</button>
//     </div>
//   );
// }

// export default memo(Content);
