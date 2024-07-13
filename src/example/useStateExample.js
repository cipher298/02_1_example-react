/**
 * =================================================================
 * Handle Checked Box Two-Way-Biding
 * =================================================================
 */

// import { useState } from "react";

// const courses = [
//   {
//     id: 1,
//     name: "JS",
//   },
//   {
//     id: 2,
//     name: "HTML",
//   },
//   {
//     id: 3,
//     name: "JAVA",
//   },
// ];

// function App() {
//   const [checked, setChecked] = useState([]);

//   const handleCheck = (id) => {
//     setChecked((prev) => {
//       const isChecked = checked.includes(id);
//       if (isChecked) {
//         return checked.filter((item) => item !== id);
//       } else {
//         return [...prev, id];
//       }
//     });
//   };

//   const handleSubmit = () => {
//     console.log({ ids: checked });
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       {courses.map((course) => (
//         <div key={course.id}>
//           <input
//             type="checkbox"
//             checked={checked.includes(course.id)}
//             onChange={() => handleCheck(course.id)}
//           />
//           {course.name}
//         </div>
//       ))}
//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   );
// }

// export default App;

/**
 * =================================================================
 * Handle Radio Button Two-Way-Biding
 * =================================================================
 */
// import { useState } from "react";

// const courses = [
//     {
//       id: 1,
//       name: "JS",
//     },
//     {
//       id: 2,
//       name: "HTML",
//     },
//     {
//       id: 3,
//       name: "JAVA",
//     },
//   ];

//   function App() {
//     const [checked, setChecked] = useState();
//     const handleSubmit = () => {
//       console.log(checked);
//     };

//     return (
//       <div style={{ padding: 20 }}>
//         {courses.map((course) => (
//           <div key={course.id}>
//             <input
//               type="radio"
//               checked={checked === course.id}
//               onChange={() => setChecked(course.id)}
//             />
//             {course.name}
//           </div>
//         ))}
//         <button onClick={handleSubmit}>Register</button>
//       </div>
//     );
//   }

// export default App;

/**
 * =================================================================
 * Todolist with useState
 * =================================================================
 */

// import { useState } from "react";
// function App() {
//     const [job, setJob] = useState("");
//     const [jobs, setJobs] = useState(() => {
//       const storageJobs = JSON.parse(localStorage.getItem("jobs"));
//       return storageJobs ?? [];
//     });

//     const handleSubmit = () => {
//       setJobs((prev) => {
//         const newJobs = [...prev, job];
//         const jsonJobs = JSON.stringify(newJobs);
//         localStorage.setItem("jobs", jsonJobs);
//         return newJobs;
//       });
//       setJob("");
//     };

//     return (
//       <div style={{ padding: 20 }}>
//         <div>
//           <input value={job} onChange={(e) => setJob(e.target.value)} />
//         </div>
//         <button onClick={handleSubmit}>Add</button>

//         <ul>
//           {jobs.map((job, index) => (
//             <li key={index}>{job}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }

// export default App;

/**
 * =================================================================
 * Mounted & Unmounted
 * =================================================================
 */
// import { useState } from "react";
// import Content from "./Content";

// function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <div style={{ padding: 20 }}>
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       {show && <Content />}
//     </div>
//   );
// }

// export default App;
