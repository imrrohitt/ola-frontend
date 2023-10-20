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
    // console.log(user.email,user.password)
    try {
      const response = await axios.post("localhost:3001/login", {
        user: {
          email: user.email,
          password: user.password,
        },
      });

      console.log(response);
      // After a successful login, store the token
      localStorage.setItem("token", response.data.token);

      // Include the token in your future API requests
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
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
      <form>
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
      </form>
    </div>
  );
};

export default LoginForm;
