import React from "react";
import Offline from "./Offline"
import Online from "./Online"

const Status = ({ isOnline }) => {
  return <div className="status">{isOnline ? <Online /> : <Offline />}</div>;
};


export default Status;
