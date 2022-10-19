import { useState } from "react";
import User from "./components/User/User";
import Modal from "./components/Modal/Modal";
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
      <Modal />
    </>
  );
}

export default App;
