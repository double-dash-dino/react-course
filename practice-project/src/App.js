import Card from "./Components/UI/Card.js";
import UserLogger from "./Components/UserLogger.js";
import UserList from "./Components/UserList.js";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const onSubmitNewUser = (addedUser) => {
    setListOfUsers([...listOfUsers, addedUser]);
  };
  return (
    <div className="App">
      <Card>
        <UserLogger onSubmitNewUser={onSubmitNewUser} />
      </Card>
      <Card>
        <UserList users={listOfUsers} />
      </Card>
    </div>
  );
}

export default App;
