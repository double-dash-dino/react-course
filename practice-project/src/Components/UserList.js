import "./UserList.css";
import UserItem from "./UserItem.js";

const UserList = (props) => {
  return (
    <div>
      <h2>User list</h2>
      <UserItem />
      <UserItem />
    </div>
  );
};

export default UserList;
