import React from "react";
import Table from "react-bootstrap/Table";
import Users from "./Users";

function UserTable({ headings, users, handleSort }) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {headings.map(({ name, width }) => {
              return (
                <th 
                  key={name} 
                  style={{ width }}
                  onClick={() => {
                    handleSort(name.toLowerCase());
                  }}
                >
                  {name}
                </th>
              );
            })}
          </tr>
        </thead>
        <Users users={users}/>
      </Table>
    </div>
  );
}

export default UserTable;
