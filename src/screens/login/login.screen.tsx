import React, { useState } from "react";
import { useAppDispatch } from "../../state/hooks";
import { addOneUser, setCurrentUser } from "../../state/slices/user.slice";
import Styles from "./LoginScreen.module.css";

function LoginScreen() {
  const [username, setUsername] = useState("");

  const dispatch = useAppDispatch();

  function onChangeUsername(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  function onClickLogin() {
    if (!username) {
      alert("Please enter a username");
      return;
    }
    dispatch(setCurrentUser(username));
    dispatch(addOneUser({ username: username, stared: [] }));
  }

  return (
    <div className="App">
      <div className={Styles.container}>
        <input
          data-testid={"username-input"}
          className={Styles.input}
          placeholder={"Please enter your username"}
          onChange={onChangeUsername}
        />
        <button data-testid={"login-button"} onClick={onClickLogin}>
          <h6>Login / Register</h6>
        </button>
      </div>
    </div>
  );
}

export default LoginScreen;
