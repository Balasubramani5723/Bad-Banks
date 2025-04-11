import { Container, Row, Card, Button, Form } from "react-bootstrap";
import { useState, useContext } from "react";
import UserContext from "../context";
import "./pagestyle.css";

export default function Deposit() {
  let people = useContext(UserContext);
  const [deposit, setDeposit] = useState("");
  const [status, setStatus] = useState("");
  var leng = people.users.length;
  var balAnce = people.users[leng - 1].balance;
  const [availablebal, setAvailableBal] = useState(balAnce);
  const [show, setShow] = useState(true);

  // Validation Function
  function validate(field, label) {
    if (isNaN(field)) {
      setStatus("Error: " + label);
      alert("Please enter a valid number");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (parseInt(field) <= 0) {
      setStatus("Error: " + label);
      alert("Please enter a value greater than zero");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  // Deposit Function
  function handleCreate(e) {
    e.preventDefault();
    if (!validate(deposit, "deposit")) return;
    var Money = balAnce + parseInt(deposit);
    setAvailableBal(Money);
    people.users[leng - 1].balance = Money;
    setShow(false);
    alert("Successfully Deposited ₹" + deposit);
  }

  // Reset Form
  function refrushForm() {
    setDeposit("");
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
      <Card
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
          width: "400px",
        }}
      >
        <Card.Body>
          <h3 className="text-center mb-3">Deposit Money</h3>
          <h4 className="mb-4">Current Balance: ₹ {availablebal}</h4>
          {show ? (
            <Form onSubmit={handleCreate}>
              <Form.Group className="mb-3">
                <Form.Label>Enter Amount</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Amount to be deposited"
                  value={deposit}
                  onChange={(e) => setDeposit(e.currentTarget.value)}
                />
              </Form.Group>
              <Button type="submit" variant="primary" className="w-100">
                Deposit
              </Button>
            </Form>
          ) : (
            <>
              <h5 className="text-success text-center mt-3">
                Successful Transaction
              </h5>
              <Button
                variant="primary"
                className="w-100 mt-3"
                onClick={refrushForm}
              >
                Add Another Deposit
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
