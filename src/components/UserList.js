import React, { Component } from "react";
import UserTable from "./UserTable";
import API from "../utils/API";

export default class UserList extends Component {
  state = {
    users: [{}],
  };
  headings = [
    { name: "Image", width: "10%" },
    { name: "Name", width: "10%" },
    { name: "Phone", width: "20%" },
    { name: "Email", width: "20%" },
    { name: "DOB", width: "10%" },
  ];
  componentDidMount() {
    API.getRandomUsers().then((results) => {
      this.setState({
        users: results.data.results,
      });
    });
  }
  render() {
    return (
      <div>
        <UserTable
          headings={this.headings}
          users={this.state.users} />
      </div>
    );
  }
}
