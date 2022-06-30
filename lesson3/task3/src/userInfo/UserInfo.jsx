import React from "react";
import "./userinfo.scss";
import Avatar from '../avatar/Avatar';


const UserInfo = (props) => {
  return (
    <div className="user-info">
      <Avatar avatarUrl={props.user.avatarUrl} name={props.user.name} /> {}
      <div className="user-info__name">{props.user.name}</div>
    </div>
  );
};

export default UserInfo;
