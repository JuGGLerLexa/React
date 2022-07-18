import React, { Component } from "react";
import User from "./User.jsx";
import Filter from "./Filter.jsx";

class UsersList extends Component {
  state = {
    users: this.props.users,
    filterText: "",
  };

  onChange = (e) => {
    e.preventDefault();

    this.setState({
      filterText: e.target.value,
    });
  };

  render() {
    const newList = !this.state.filterText
      ? this.state.users
      : this.state.users.filter((user) =>
          user.name.toUpperCase().includes(this.state.filterText.toUpperCase())
        );

    return (
      <div>
        <Filter
          onChange={this.onChange}
          filterText={this.state.filterText}
          count={newList.length}
        />
        <ul className="users">
          {newList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
