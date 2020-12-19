import React, { Component } from "react";
import { Container, Jumbotron } from "react-bootstrap";

export default class Title extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>Employee Directory</h1>
          <p>
            Sort employees by name or email, or use the search box to find a
            specific employee.
          </p>
        </Container>
      </Jumbotron>
    );
  }
}
