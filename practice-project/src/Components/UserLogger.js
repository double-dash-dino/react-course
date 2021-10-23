import "./UserLogger.css";

const UserLogger = (props) => {
  return (
    <div>
      <h2 className="user-input__label">Username</h2>
      <input type="text"></input>
      <h2 className="user-input__label">Age</h2>
      <input type="number"></input>
    </div>
  );
};

export default UserLogger;
