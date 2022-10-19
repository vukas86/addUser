import { useState } from "react";
import Button from "../Button/Button";
import styles from "./User.module.css";

const User = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const [modal, setmodal] = useState(false);

  const enteredUserName = (event) => {
    setUserName(event.target.value);
  };

  const enteredUserAge = (event) => {
    setUserAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (userName === "") {
      setmodal(true);
    }
    const newUser = {
      name: userName,
      age: userAge,
    };

    props.onSavedUser(newUser);

    setUserName("");
    setUserAge("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <div className={`${styles.inputField} ${styles.inputName}`}>
          <label>Username</label>
          <input
            type="text"
            onChange={enteredUserName}
            value={userName}
          ></input>
        </div>
        <div className={`${styles.inputField} ${styles.inputNumber}`}>
          <label>Age(Years)</label>
          <input
            type="number"
            min={1}
            onChange={enteredUserAge}
            value={userAge}
          ></input>
        </div>
        <Button name={"Add User"} />
      </form>
    </div>
  );
};
export default User;
