/**
 * =================================================================
 * Add this code into App.js
 * Count Up / Down
 * =================================================================
 */
// import { useReducer } from "react";

// /**
//  * 1. Init state: 0
//  * 2. Actions: Up (state + 1) / Down (state - 1)
//  * 3. Reducer
//  * 4. Dispatch
//  */

// // 1. Init state: 0
// const initState = 0;

// // 2. Actions: Up (state + 1) / Down (state - 1)
// const UP_ACTION = "up";
// const DOWN_ACTION = "down";

// // 3. Reducer
// const reducer = (state, action) => {
//   switch (action) {
//     case UP_ACTION:
//       return state + 1;
//     case DOWN_ACTION:
//       return state - 1;
//     default:
//       throw new Error("Invalid action!");
//   }
// };

// function App() {
//   const [count, dispatch] = useReducer(reducer, initState);

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>{count}</h1>
//       <br></br>
//       <button onClick={() => dispatch(UP_ACTION)}>Up</button>
//       <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
//     </div>
//   );
// }

// export default App;

/**
 * =================================================================
 * Add this code into App.js
 * TODO APP
 * =================================================================
 */
// import { useReducer, useRef } from "react";

// const initState = {
//   job: "",
//   jobs: [],
// };

// const SET_JOB = "set_job";
// const ADD_JOB = "add_job";
// const DELETE_JOB = "delete_job";

// const setJob = (payload) => {
//   return {
//     type: SET_JOB,
//     payload,
//   };
// };

// const addJob = (payload) => {
//   return {
//     type: ADD_JOB,
//     payload,
//   };
// };

// const deleteJob = (payload) => {
//   return {
//     type: DELETE_JOB,
//     payload,
//   };
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case SET_JOB:
//       return {
//         ...state,
//         job: action.payload,
//       };
//     case ADD_JOB:
//       return {
//         ...state,
//         jobs: [...state.jobs, action.payload],
//       };
//     case DELETE_JOB:
//       const newJobs = [...state.jobs];

//       newJobs.splice(action.payload, 1);

//       return {
//         ...state,
//         jobs: newJobs,
//       };
//     default:
//       throw new Error("Invalid action.");
//   }
// };

// function App() {
//   const [state, dispatch] = useReducer(reducer, initState);

//   const inputRef = useRef();

//   const { job, jobs } = state;

//   const handleSubmit = () => {
//     dispatch(addJob(job));
//     dispatch(setJob(""));

//     inputRef.current.focus();
//   };

//   return (
//     <div style={{ padding: "50px 50px" }}>
//       <h3>Todo</h3>
//       <input
//         ref={inputRef}
//         value={job}
//         placeholder="Enter todo..."
//         onChange={(e) => {
//           dispatch(setJob(e.target.value));
//         }}
//       />
//       <button onClick={handleSubmit}>Add</button>
//       <ul>
//         {jobs.map((job, index) => (
//           <li key={index}>
//             {job}
//             <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
