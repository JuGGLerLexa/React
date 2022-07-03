import React from "react";
import Clock from "./Clock";

const App = () => {
  return (
    <>
      <Clock location="NEW YORK" offset = {0} />
      <Clock location="KYIV" offset = {2} />
      <Clock location="LONDON" offset = {-5} />
    </>
  );
};

export default App;
