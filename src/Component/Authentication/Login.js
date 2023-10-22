import React, { useState } from "react";
import "./login.css";
import axios from "axios";

const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [rotateCar, setRotateCar] = useState(false);

  const handleUsernameInput = () => {
    setRotateCar(true);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/login", {
        user: {
          email: user.email,
          password: user.password,
        },
      });

      console.log("hi this is the response ", response.headers);
      // After a successful login, store the token
      localStorage.setItem("token", response);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <div className="container">
      <div
        className="car"
        style={{ transform: rotateCar ? "rotate(180deg)" : "rotate(0)" }}
      >
        <img src="./car.png" alt="Car" id="car" />
      </div>
      <div>
        <label htmlFor="email">Enter your email</label>
        <input
          type="email"
          id="username"
          placeholder="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor="password">Enter your password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginForm;
