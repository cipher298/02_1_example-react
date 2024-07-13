function logger(reducer) {
  return (prevState, action) => {
    console.group(action.type);
    console.log("Pre State: ", prevState);
    console.log("Action: ", action);
    const newState = reducer(prevState, action);
    console.log("Nex State: ", newState);
    console.groupEnd();
    return newState;
  };
}

export default logger;
