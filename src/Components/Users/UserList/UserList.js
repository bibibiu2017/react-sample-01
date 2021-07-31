import React from "react";
import Card from "../../UI/Card/Card";
import classes from "./UserList.module.css";

const UserList = ({ users }) => {
  return users && users.length ? (
    <Card className={classes.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  ) : null;
};

export default UserList;
