import React from "react";

function Users({ users }) {
  return (
    <tbody>
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ login, picture, name }) => {
          return (
            <tr key={login.uuid}>
              <td data-th="Image">
                <img
                  src={picture.large}
                  alt="profile pic"
                  className="img-responsive"
                />
              </td>
              <td data-th="Name">
                {name.title} {name.first} {name.last}
              </td>
            </tr>
          );
        })
      ) : (
        <div></div>
      )}
    </tbody>
  );
}

export default Users;
