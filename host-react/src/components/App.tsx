import React, { useRef, useEffect } from "react";
import counterWrapper from "remote/counterWrapper";
import HorizontalTimeline from "remote2/HorizontalTimeline";

import "./app.scss";

const App = () => {
  const divRef = useRef(null);

  useEffect(() => {
    counterWrapper(divRef.current);
  }, []);

  return (
    <div className="mt-10 mx-auto max-w-6xl">
      <div className="px-2">Name: react-host</div>
      <br />
      <HorizontalTimeline />
      <br />
      <div className="px-2" ref={divRef}></div>
    </div>
  );
};

export default App;
