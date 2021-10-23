import "./UserLogger.css";
import React, { useState } from "react";
import EmptyNameError from "./Errors/EmptyNameError";

const UserLogger = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const onUsernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const onAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length > 0) {
      const userData = {
        key: Math.random().toString(),
        username: enteredUsername,
        age: enteredAge,
      };

      setEnteredUsername("");
      setEnteredAge("");
      props.onSubmitNewUser(userData);
    } else {
      console.log(enteredUsername.length);
      return <EmptyNameError />;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <h2 className="user-input__label">Username</h2>
        <input
          type="text"
          className="user-input__field"
          value={enteredUsername}
          onChange={onUsernameChangeHandler}
        ></input>
        <h2 className="user-input__label">Age (years)</h2>
        <input
          type="number"
          className="user-input__field"
          value={enteredAge}
          onChange={onAgeChangeHandler}
        ></input>
      </div>
      <button type="submit" className="user-input__submit">
        Add new user
      </button>
    </form>
  );
};

export default UserLogger;
