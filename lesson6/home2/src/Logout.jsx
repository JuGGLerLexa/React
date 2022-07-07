import React from "react";

const Logout = ({ onLogout }) => (
  <button onClick={() => onLogout()} className="btn logout">
    Logout
  </button>
);
export default Logout;
