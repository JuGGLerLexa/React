import React from "react";

const Login = ({ onLogin }) => (
  <button onClick={() => onLogin()} className="btn login">
    Login
  </button>
);
export default Login;
