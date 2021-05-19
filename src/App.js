import React, { useState } from "react";

function App() {
  const [currenttime, setcurrenttime] = useState();

  const upDateTime = () => {
    let currenttime = new Date().toLocaleTimeString();
    setcurrenttime(currenttime);
  };

  return (
    <>
      <h1>{currenttime}</h1>
      <button onClick={upDateTime}> Get Current Time</button>
    </>
  );
}

export default App;
