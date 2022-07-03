import React from "react";
import Counter from "./Counter.jsx";

const App = () => {
  return (
    <>
      <Counter start={17} interval={1000} />
      <Counter start={5} interval={100} />
      <Counter start={-21} interval={-1500} />
    </>
  );
};

export default App;
