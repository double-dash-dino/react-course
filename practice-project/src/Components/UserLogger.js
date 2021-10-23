import "./UserLogger.css";

const UserLogger = (props) => {
  return (
    <form>
      <div>
        <h2 className="user-input__label">Username</h2>
        <input type="text" className="user-input__field"></input>
        <h2 className="user-input__label">Age</h2>
        <input type="number" className="user-input__field"></input>
      </div>
      <button type="submit" className="user-input__submit">
        Add new user
      </button>
    </form>
  );
};

export default UserLogger;
