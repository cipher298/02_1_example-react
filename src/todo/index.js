import { useReducer, useRef } from "react";
import { setJob, addJob, deleteJob } from "./actions";
import reducer, { initState } from "./reducer";
import logger from "./logger";

function App() {
  const [state, dispatch] = useReducer(logger(reducer), initState);

  const inputRef = useRef();

  const { job, jobs } = state;

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));

    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "50px 50px" }}>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
