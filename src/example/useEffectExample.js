/**
 * =================================================================
 * Step 1: Add this code into App.js
 * =================================================================
 */
// import { useState } from "react";
// import Content from "./Content";
// /**
//  * Todolist with useState
//  */
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

/**
 * =================================================================
 * Step 2.1: Add this code into index.js to fake Chat App work
 * =================================================================
 */
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// // Fake Comments
// function emitComments(id) {
//   setInterval(() => {
//     window.dispatchEvent(
//       new CustomEvent(`lesson-${id}`, {
//         detail: `Nội dung comments của lesson ${id}`,
//       })
//     );
//   }, 2000);
// }

// emitComments(1);
// emitComments(2);
// emitComments(3);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

/**
 * =================================================================
 * Step 2.2: Add this code into Content.js
 * Change document title
 * Render data from API
 * Handle scroll, resize
 * Preview Avatar
 * =================================================================
 */
// import { useEffect, useLayoutEffect, useState } from "react";

// const tabs = ["posts", "comments", "albums"];

// const lessons = [
//   {
//     id: 1,
//     name: "Java",
//   },
//   {
//     id: 2,
//     name: "React",
//   },
//   {
//     id: 3,
//     name: "NodeJs",
//   },
// ];

// function Content() {
//   const [title, setTitle] = useState("");
//   const [posts, setPost] = useState([]);
//   const [type, setType] = useState("posts");
//   const [showSTT, setShowSTT] = useState(false);
//   const [resize, setResize] = useState(window.innerWidth);
//   const [countdown, setCountdown] = useState(1000);
//   const [avatar, setAvatar] = useState();
//   const [lessonId, setLessonId] = useState(1);
//   const [count, setCount] = useState(0);

//   // Change document title
//   useEffect(() => {
//     document.title = title;
//   });

//   // Render data from api
//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${type}`)
//       .then((response) => response.json())
//       .then((posts) => setPost(posts));
//   }, [type]);

//   // Show button Scroll To Top when scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY >= 200) {
//         setShowSTT(true);
//       } else {
//         setShowSTT(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Change window width when resize
//   useEffect(() => {
//     const handleResize = () => {
//       setResize(window.innerWidth);
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   // Countdown
//   // Cách 1
//   useEffect(() => {
//     const timeId = setInterval(() => {
//       setCountdown((prev) => prev - 1);
//     }, 1000);

//     return () => {
//       clearInterval(timeId);
//     };
//   }, []);

//   // Cách 2
//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     setCountdown(countdown - 1);
//   //   }, 1000);
//   // }, [countdown]);

//   // Handle change avatar
//   useEffect(() => {
//     return () => {
//       if (avatar) {
//         URL.revokeObjectURL(avatar.preview);
//       }
//     };
//   }, [avatar]);

//   // Handle change avatar
//   const handleChangeAvatar = (e) => {
//     const file = e.target.files[0];

//     // Có thể tự tạo props preview để dùng
//     file.preview = URL.createObjectURL(file);

//     setAvatar(file);

//     e.target.value = null;
//   };

//   // Lắng nghe emit detail Fake Chat App
//   useEffect(() => {
//     const handleComment = ({ detail }) => {
//       console.log(detail);
//     };
//     window.addEventListener(`lesson-${lessonId}`, handleComment);

//     return () => {
//       window.removeEventListener(`lesson-${lessonId}`, handleComment);
//     };
//   }, [lessonId]);

//   // Run 1 2 3 0 1 2 3 không bị nháy 4
//   useLayoutEffect(() => {
//     if (count > 3) {
//       setCount(0);
//     }
//   });

//   // Run count + 1
//   const handleRun = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       {/* Window Size & Change Document Title */}
//       <div>
//         <label>Window Size: </label>
//         <label>{resize}</label>
//         <br></br>
//         <label>Change Document Title: </label>
//         <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
//       </div>

//       {/* 1 2 3 0 1 2 3 */}
//       <div>
//         <h1>{count}</h1>
//         <button onClick={handleRun}>Run</button>
//       </div>

//       {/* Fake Chat App / Subscribe/Unsubscribe */}
//       <div style={{ margin: "10px", cursor: "pointer" }}>
//         {lessons.map((lesson) => (
//           <li
//             key={lesson.id}
//             style={{
//               color: lessonId === lesson.id ? "red" : "#333",
//             }}
//             onClick={() => setLessonId(lesson.id)}
//           >
//             {lesson.name}
//           </li>
//         ))}
//       </div>

//       {/* Countdown */}
//       <div>
//         <h1>{countdown}</h1>
//       </div>

//       {/* Image */}
//       <div>
//         <input type="file" onChange={handleChangeAvatar} />
//         <br></br>
//         <img
//           style={{ marginTop: 10, width: "100px" }}
//           src={avatar?.preview}
//           alt="image"
//         ></img>
//       </div>
//       <br></br>

//       {/* Data render */}
//       <div>
//         {tabs.map((tab) => (
//           <button
//             style={
//               type === tab
//                 ? {
//                     color: "#fff",
//                     background: "#333",
//                   }
//                 : {}
//             }
//             key={tab}
//             onClick={() => setType(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//         <ul>
//           {posts.map((post) => (
//             <li key={post.id}>{post.title || post.name}</li>
//           ))}
//         </ul>
//       </div>

//       {/* Button Scroll To Top */}
//       <div>
//         {showSTT && (
//           <button
//             style={{
//               position: "fixed",
//               right: 20,
//               bottom: 20,
//             }}
//           >
//             Scroll To Top
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Content;
