import React, { Component } from "react";
import UserTable from "./UserTable";
import Search from "./Search";
import API from "../utils/API";
import "../styles/UserList.css";

export default class UserList extends Component {
  // set the state for users, the order they're displayed and the filtered array
  state = {
    users: [{}],
    order: "descend",
    filteredUsers: [{}]
  }

  // Set the names of the table columns; the key is "name" which will be mapped over
  headings = [
    { name: "Image", width: "10%" },
    { name: "Name", width: "10%" },
    { name: "Phone", width: "20%" },
    { name: "Email", width: "20%" },
    { name: "Location", width: "10%" }
  ]

  handleSort = heading => {
    if (this.state.order === "descend") {
      this.setState({
        order: "ascend"
      })
    } else {
      this.setState({
        order: "descend"
      })
    }

    // compare 2 values: the input string in the search box
    // with the results.name.first and results.name.last string values
    // that is what the a & b parameters represent: the two values to compare
    const compareFnc = (a, b) => {
      if (this.state.order === "ascend") {
        // account for missing values; if there is no search input
        // return the entire list
        // if the inpput does not match anything, return nothing
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // compare input to the data and only return data matching input
        else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          return a[heading] - b[heading];
        }
      } else {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      }
    }
    const sortedUsers = this.state.filteredUsers.sort(compareFnc);
    this.setState({ filteredUsers: sortedUsers });
  }

  handleSearchChange = (event) => {
    // The filter variable is each instance of string input in the search box,
    // such as 's', 'st', 'ste', 'step', 'steph', etc...
    const filter = event.target.value;
    // Create a new array equal to the filtered users
    // by mapping over each user (item) value and return only values matching
    // the string input in the search box
    const filteredList = this.state.users.filter(item => {
      // merge data together, then see if user input is anywhere inside
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredUsers: filteredList });
  }

  // get the results ready to render the users on the page
  componentDidMount() {
    API.getRandomUsers().then(results => {
      this.setState({
        users: results.data.results,
        filteredUsers: results.data.results
      });
    });
  }

  render() {
    return (
      <>
        <Search handleSearchChange={this.handleSearchChange} />
        <div className="data-area">
          <UserTable
            headings={this.headings}
            users={this.state.filteredUsers}
            handleSort={this.handleSort}
          />
        </div>
      </>
    );
  }
}
