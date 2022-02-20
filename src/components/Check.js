import Register from "./components/Register";
import Login from "./components/Login";
import React from "react";

import React, { useState } from "react";
import axios from "axios";

export default function Check() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username, password };

    const response = await axios.post(<Login />, user);
  };
  setUser(response.data);

  localStorage.setItem("user", response.data);

  const handleSubmit = async (e) => {};
  if (user) {
    return (
      <div>
        <Profile />
      </div>
    );
  }

  return (
    <>
      <Login />
    </>
  );
}
