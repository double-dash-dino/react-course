import "./UserItem.css";

const UserItem = (props) => {
  return (
    <div className="user-item">
      <div className="user-name">
        <h3>Name</h3>
        <p>SomeName</p>
      </div>
      <div className="user-age">
        <h3>Age</h3>
        <p>SomeAge</p>
      </div>
    </div>
  );
};

export default UserItem;
