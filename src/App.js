import { useState } from "react";
import AddUser from "./Components/Users/AddUser/AddUser";
import UserList from "./Components/Users/UserList/UserList";

const App = () => {
  const [users, setUsers] = useState([]);
  const addUserHandler = (user) => {
    user.id = Math.random().toString();
    setUsers((users) => [...users, user]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
};

export default App;
