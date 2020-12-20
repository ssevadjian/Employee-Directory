import React from "react";

function Users({ users }) {
  return (
    <tbody>
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ login, picture, name, email, location, phone}) => {
          return (
            <tr key={login.uuid}>
              <td data-th="Image">
                <img
                  src={picture.thumbnail}
                  alt="profile pic"
                  className="img-responsive"
                />
              </td>
              <td data-th="Name">
                {name.title} {name.first} {name.last}
              </td>
              <td data-th="Phone">
                {phone}
              </td>
              <td data-th="Email">
                {email}
              </td>
              <td data-th="City">
                {location.city}, {location.state}
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
