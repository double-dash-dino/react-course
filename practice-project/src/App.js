import Card from "./Components/UI/Card.js";
import UserLogger from "./Components/UserLogger.js";
import UserList from "./Components/UserList.js";
import React, { useState } from "react";
import "./App.css";
import EmptyNameError from "./Components/Errors/EmptyNameError.js";

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
      {errorStatus === "emptyNameOrAge" && <EmptyNameError />}
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
