import React, { Component } from "react";
import UserTable from "./UserTable";
import Search from "./Search";
import API from "../utils/API";
import './../styles/UserList.css'

export default class UserList extends Component {
  state = {
    users: [{}],
    order: "descend",
    searchResults: [{}],
  };
  headings = [
    { name: "Image", width: "10%" },
    { name: "Name", width: "15%" },
    { name: "Phone", width: "20%" },
    { name: "Email", width: "20%" },
    { name: "City", width: "10%" },
  ];

  handleSort = (heading) => {
    if (this.state.order === "descend") {
      this.setState({
        order: "ascend",
      });
    } else {
      this.setState({
        order: "descend",
      });
    }

    const compareFnc = (a, b) => {
      if (this.state.order === "ascend") {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // numerically
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
        // numerically
        else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      }
    };
    const sortedUsers = this.state.searchResults.sort(compareFnc);
    this.setState({ searchResults: sortedUsers });
  };

  handleSearchChange = (e) => {
    const filter = e.target.value;
    const returnedList = this.state.users.filter((user) => {
      let values = Object.values(user).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ searchResults: returnedList });
  };

  componentDidMount() {
    API.getRandomUsers().then((results) => {
      this.setState({
        users: results.data.results,
        searchResults: results.data.results,
      });
    });
  }
  render() {
    return (
      <Search handleSearchChange={this.handleSearchChange} />,
        <div className="data-area">
          <UserTable
            headings={this.headings}
            users={this.state.searchResults}
            handleSort={this.handleSort}
          />
        </div>
    );
  }
}
