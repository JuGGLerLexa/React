import React, { Component } from 'react';

class UserProfile extends Component {
  render() {
    const { userData } = this.props;
    if (!this.props.userData) {
      return null;
    }

    const { name, location, avatar_url } = userData;

    return (
      <div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default UserProfile;
