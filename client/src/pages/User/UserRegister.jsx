import React, { useState } from "react";

import { registerRequest } from "../../axios/registerRequest";

function UserRegister() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = async (e) => {
    // const userData = {
    //   username,
    //   email,
    //   password,
    // };
    // console.log(userData);

    e.preventDefault();
    try {
      //axios will transfer javascript object to json type with correct content type
      const res = await registerRequest.post("auth/local/register", {
        username,
        email,
        password,
      });
      localStorage.setItem("jwt", res.data.jwt);
      if (res.data.jwt) console.log("user Created!");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">username</label>
        <input
          name="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <label htmlFor="email">email</label>
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">password</label>
        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default UserRegister;
