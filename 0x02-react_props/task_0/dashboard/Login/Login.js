import React from "react";
import "./Login.css"

export function Login() {
  return (
    <div className="App-body">
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email</label>
      <input type="email" id="email"></input>
      <label htmlFor="password">Password</label>
      <input type="text" id="password"></input>
      <button>OK</button>
    </div>
  );
}
