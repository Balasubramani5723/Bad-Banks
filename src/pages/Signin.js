import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useContext } from "react";
import userContext from "../context";
import Login from "./login";

export default function Signin() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let people = useContext(userContext);

  // Validation Function
  function validate(field, label) {
    if (!field) {
      alert("Please enter " + label);
      return false;
    }
    if (label === "password" && password.length < 8) {
      alert("Password must be at least 8 characters long");
      return false;
    }
    if (label === "name" && !isNaN(field)) {
      alert("Please enter a valid name");
      return false;
    }
    if (label === "email") {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!pattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
      }
    }
    return true;
  }

  // Handle Signup
  function handleCreate(e) {
    e.preventDefault();
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;

    people.users.push({ name, email, password, balance: 0 });
    setShow(false);
    alert("Account Created Successfully");
  }

  // Reset Form
  function refreshForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <div
      style={{
        backgroundImage: "url('https://via.placeholder.com/800')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "64.7vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
          width: "400px",
        }}
      >
        {show ? (
          <>
            <h3 className="text-center">Sign Up</h3>
            <form onSubmit={handleCreate}>
              <div className="form-group mt-3">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 mt-3"
                disabled={!name || !email || !password}
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <>
            <h5 className="text-center">Account Created Successfully</h5>
            <button
              className="btn btn-primary w-100 mt-3"
              onClick={refreshForm}
            >
              Add Another Account
            </button>
          </>
        )}
      </div>
    </div>
  );
}
