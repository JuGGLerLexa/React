import React from "react";
import moment from "moment";

const Profile = (props) => {
  const birthDay = moment(`${props.userData.birthDate}`).format("DD MMM YY");

  return (
    <div className="profile">
      <p className="profile__name">{`${props.userData.firstName} ${props.userData.lastName}`}</p>
      <p className="profile__birth">{`Was born ${birthDay} in ${props.userData.birthPlace}`}</p>
    </div>
  );
};

export default Profile;
