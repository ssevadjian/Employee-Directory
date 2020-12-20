import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "../styles/SearchBox.css";

function SearchBox({ handleSearchChange }) {
  return (
    <InputGroup size="sm" className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-sm" onChange={e => handleSearchChange(e)}>Search</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>

    // <div className="searchbox">
    //   <form className="form-inline">
    //     <input
    //       className="form-control"
    //       type="search"
    //       placeholder="Search"
    //       aria-label="Search"
    //       onChange={e => handleSearchChange(e)}
    //     />
    //   </form>
    // </div>
  );
}
export default SearchBox;