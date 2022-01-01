import React, { Component } from "react";

import posed from "react-pose";

const Animation = posed.div({
  visible: { opacity: 1, applyAtStart: { display: "block" } },
  hidden: { opacity: 0, applyAtEnd: { display: "none" } }
});

class AddUser extends Component {
  state = {
    visible: false,
    location: "select"
  };

  changeVisibility = (e) => {
    this.setState({
      visible: !this.state.visible
    });
  };

  handleChange = (e) => {
    this.setState({
      location: e.target.value
    });
  };

  render() {
    const { visible } = this.state;
    return (
      <div className="col-md-8 mb-4">
        <br />
        <button
          onClick={this.changeVisibility}
          className="mb-2 btn btn-dark btn-block"
        >
          {visible ? "Hide Request Form" : "Show Request Form"}
        </button>
        <br />
        <Animation pose={visible ? "visible" : "hidden"}>
          <div className="card">
            <div className="card-header">
              <h4>Transcript Request Form</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="id"
                    placeholder="Enter name"
                    className="form-control"
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    className="form-control"
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Enter phone"
                    className="form-control"
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="location">Location where transcript would be sent</label>
                  <select value="select"
                    className="form-control"
                    value={this.state.location}
                    onChange={this.handleChange}
                  >
                    <option value="select">Choose location</option>
                    <option value="Local">Within Nigeria</option>
                    <option value="Foreign">Outside Nigeria</option>
                  </select>
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="address">Detail address where transcript would be sent</label>
                  <textarea
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter address"
                    className="form-control"
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="department">Department</label>
                  <input
                    type="text"
                    name="department"
                    id="department"
                    placeholder="Enter your department"
                    className="form-control"
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="registrationNumber">Registration Number</label>
                  <input
                    type="text"
                    name="registrationNumber"
                    id="registrationNumber"
                    placeholder="Enter Registration Number"
                    className="form-control"
                  />
                </div>
                <br />
                <button className="btn btn-primary btn-block" type="submit">
                  Proceed
                </button>
              </form>
            </div>
          </div>
        </Animation>
      </div>
    );
  }
}

export default AddUser;
