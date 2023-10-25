import React, { useState } from "react";
import "./login.css";

const SignupForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [rotateCar, setRotateCar] = useState(false);

  const handleUsernameInput = () => {
    setRotateCar(true);
  };

  const handleSignup= () => {
    fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: user.email,
          password: user.password,
        },
      }),
    })
    .then((response) => {
      console.log(response.status)
      if (!response.ok) {
        throw new Error("Signup failed");
      }
      const authorizationHeader = response.headers.get('Authorization');
      if (authorizationHeader) {
        localStorage.setItem("token", authorizationHeader);
      } else {
        console.error("Authorization header not found in the response");
      }
    })
    .catch((error) => {
      console.error("Signup failed:", error);
    });
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
        <button onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
};

export default SignupForm;

