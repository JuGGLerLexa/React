import React from "react";
import Comment from "./Comment";

const userInfo = {
  name: "Lexa",
  avatarUrl: "https://avatars.githubusercontent.com/u/71986453?v=4",
};

const App = () => {
  return <Comment author={userInfo} text="Good job!" date={new Date("2022")} />;
};

export default App;
