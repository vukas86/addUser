import { useState } from "react";
import User from "./components/User/User";
import RenderedUser from "./components/RenderedUser/RenderedUser";

function App() {
  const [user, setUser] = useState("");

  const savedUserHandler = (newUser) => {
    const user = {
      ...newUser,
      id: Math.random().toString(),
    };

    setUser((prevUser) => {
      return [user, ...prevUser];
    });
  };

  return (
    <>
      <User onSavedUser={savedUserHandler} />
      <RenderedUser items={user} />
    </>
  );
}

export default App;
