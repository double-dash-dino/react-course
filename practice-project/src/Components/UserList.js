import "./UserList.css";
import UserItem from "./UserItem.js";

const UserList = (props) => {
  return (
    <div>
      <h2>User list</h2>
      {props.users.map((user) => (
        <UserItem key={user.key} username={user.username} age={user.age} />
      ))}
    </div>
  );
};

export default UserList;
