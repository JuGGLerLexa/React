import React from "react";
import "./Avatar.scss";

const Avatar = (props) => {
  return <img className="avatar" src={props.avatarUrl} alt={props.name} />;
};

export default Avatar;
