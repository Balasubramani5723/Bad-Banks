import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useContext } from "react";
import userContext from "../context";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const { users } = useContext(userContext);

  function handleLogin(e) {
    e.preventDefault();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setStatus("Login successful");
      alert("Login successful!");
    } else {
      setStatus("Login failed. Please check your email and password.");
      alert("Invalid email or password.");
    }
    setTimeout(() => setStatus(""), 3000);
  }

  return (
    <div
    style={{
      height: "64.7vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
  
      <div
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.1)", 
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
      width: "350px",
    }}
  >
  
        <h3>Login</h3>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="loginEmail">Email</label>
            <input
              type="email"
              className="form-control"
              id="loginEmail"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="loginPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="loginPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{ marginTop: "10px" }}
          >
            Login
          </button>
          <div className="mt-3 text-danger">{status}</div>
        </form>
      </div>
    </div>
  );
}
