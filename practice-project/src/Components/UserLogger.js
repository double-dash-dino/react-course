import "./UserLogger.css";
import React, { useState } from "react";

const UserLogger = (props) => {
  const userData = {};
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const onUsernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const onAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (enteredUsername, enteredAge) => {
    userData.username = enteredUsername;
    userData.age = enteredAge;
    console.log(userData);
  };

  return (
    <form>
      <div>
        <h2 className="user-input__label">Username</h2>
        <input
          type="text"
          className="user-input__field"
          onChange={onUsernameChangeHandler}
        ></input>
        <h2 className="user-input__label">Age (years)</h2>
        <input
          type="number"
          className="user-input__field"
          onChange={onAgeChangeHandler}
        ></input>
      </div>
      <button
        type="submit"
        className="user-input__submit"
        onSubmit={submitHandler}
      >
        Add new user
      </button>
    </form>
  );
};

export default UserLogger;
