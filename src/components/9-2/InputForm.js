import { useLocalStorage } from "hooks/useLocalStorage";
import React, { useState } from "react";

export default function InputForm() {
  const [remember, setRemember] = useState(false);

  const [userName, setUserName] = useLocalStorage("userName", "");
  const [password, setPassword] = useLocalStorage("password", "");

  const toggleCheck = (event) => {
    setRemember(event.target.checked);
  };

  const login = () => {
    window.alert(
      "Logged in! Welcome " + userName + "! Your password is: " + password
    );
  };

  return (
    <div className={"login-box "}>
      <div>
        <label>Username: </label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          name="username"
        ></input>
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <input
          type="checkbox"
          checked={remember}
          name="remember"
          onChange={toggleCheck}
        ></input>
        <label>Remember me!</label>
      </div>

      <div>
        <button className="login-button inria-sans-bold" onClick={login}>
          LOGIN
        </button>
      </div>
    </div>
  );
}
