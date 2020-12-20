import React from "react";
import SearchBox from "./SearchBox.js";
import "../styles/Nav.css";

// The SearchBox functional component contains the html for the search box input form
function Search({ handleSearchChange }) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="navbar-collapse row" id="navbarNav">
        <SearchBox handleSearchChange={handleSearchChange} />
      </div>
    </nav>
  );
}
export default Search;
