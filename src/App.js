import "./styles.css";
import UserContext from "./context";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Login from "./pages/login.js";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Alldata from "./pages/Alldata";
export default function App() {
  return (
    <Router>
      <Navbar />
      <UserContext.Provider
        value={{
          users: [
            {
              name: "Bala",
              email: "bala@gmail.com",
              password: "bala112233",
              balance: 0
            }
          ]
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/alldata" element={<Alldata />} />
        </Routes>
      </UserContext.Provider>
      <Footer />
    </Router>
  );
}
