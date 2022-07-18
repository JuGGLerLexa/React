import React, { Component } from "react";

class UserForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const formDate = [...new FormData(this.formRef)].reduce(
      (acc, [name, value]) => ({ ...acc, [name]: value }),
      {}
    );
    this.props.onSubmit(formDate);
  };
  setRef = (node) => {
    this.formRef = node;
  };

  render() {
    return (
      <form
        ref={this.setRef}
        className="login-form"
        onSubmit={this.handleSubmit}
      >
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-input" type="text" id="name" name="name" />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="student">
            Student
          </label>
          <input
            className="form-input"
            type="checkbox"
            id="student"
            name="student"
          />
        </div>
        <div className="form-control">
          <label className="form-label" id="occupation" htmlFor="occupation">
            Occupation
          </label>
          <select name="occupation" className="form-input">
            <option value="London">London</option>
            <option value="New York">New York</option>
            <option value="Sidney">Sidney</option>
            <option value="Berlin">Berlin</option>
          </select>
        </div>
        <div className="form-control">
          <label className="form-label" id="about" htmlFor="about">
            About
          </label>
          <textarea name="about" className="form-input"></textarea>
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
