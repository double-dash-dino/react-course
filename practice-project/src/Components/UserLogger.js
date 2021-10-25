import "./UserLogger.css";
import React, { useState } from "react";

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

    if (enteredAge <= 0) {
      props.errorStatus("invalidAge");
    } else if (
      enteredUsername.trim().length > 0 ||
      enteredAge.trim().length > 0
    ) {
      props.errorStatus("emptyNameOrAge");
    } else if (
      enteredUsername.trim().length > 0 &&
      enteredAge.trim().length > 0
    ) {
      const userData = {
        key: Math.random().toString(),
        username: enteredUsername,
        age: enteredAge,
      };

      setEnteredUsername("");
      setEnteredAge("");
      props.onSubmitNewUser(userData);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="username" className="user-input__label">
          Username
        </label>
        <input
          id="username"
          type="text"
          className="user-input__field"
          value={enteredUsername}
          onChange={onUsernameChangeHandler}
        ></input>
        <label htmlFor="age" className="user-input__label">
          Age (years)
        </label>
        <input
          id="userAge"
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
