import React from "react";
import Table from "react-bootstrap/Table";
import Users from "./Users";

function UserTable({ headings, users }) {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            {headings.map(({ name, width }) => {
              return (
                <th key={name} style={{ width }}>
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
