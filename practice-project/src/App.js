import Card from "./Components/UI/Card.js";
import UserLogger from "./Components/UserLogger.js";
import UserList from "./Components/UserList.js";
import React, { useState } from "react";
import "./App.css";
import EmptyNameError from "./Components/Errors/EmptyNameError.js";
import InvalidAgeErrror from "./Components/Errors/InvalidAgeError.js";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const onSubmitNewUser = (addedUser) => {
    setListOfUsers([...listOfUsers, addedUser]);
  };

  const [errorStatus, setErrorStatus] = useState("");

  const onErrorStatus = (status) => {
    setErrorStatus(status);
  };

  return (
    <div className="App">
      {errorStatus === "emptyNameOrAge" && (
        <EmptyNameError errorStatus={onErrorStatus} />
      )}
      {errorStatus === "invalidAge" && (
        <InvalidAgeErrror errorStatus={onErrorStatus} />
      )}
      <Card>
        <UserLogger
          onSubmitNewUser={onSubmitNewUser}
          errorStatus={onErrorStatus}
        />
      </Card>
      <Card>
        <UserList users={listOfUsers} />
      </Card>
    </div>
  );
}

export default App;
