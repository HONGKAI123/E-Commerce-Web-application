import React, { useEffect, useState } from "react";
import { makeRequest } from "../../axios/makeRequest";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../../axios/loginRequest";

function UserLogin() {
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();
  //check if token is valid
  const isTokenExpired = (token) => {
    try {
      const { exp } = JSON.parse(atob(token.split(".")[1]));
      if (!exp) {
        return true;
      }
      const currentTime = Date.now() / 1000;
      return currentTime > exp;
    } catch {
      return true;
    }
  };
  useEffect(() => {
    if (jwt && !isTokenExpired(jwt)) {
      //set login state to true
      //rediect to home page
      navigate("/");
      console.log("token find!");
    }
  }, [jwt, navigate]);

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      //axios will transfer javascript object to json type with correct content type
      const res = await loginRequest.post("auth/local", {
        identifier: username,
        password: password,
      });
      if (res.data.jwt) {
        localStorage.setItem("jwt", res.data.jwt);
        navigate("/");
      } else {
        console.log("login faild, password wrong!");
      }

      // console.log(res);
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

        <label htmlFor="password">password</label>
        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default UserLogin;
