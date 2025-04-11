import { Card, Button, Form } from "react-bootstrap";
import { useState, useContext } from "react";
import UserContext from "../context";
import "./pagestyle.css";

export default function Withdraw() {
  let people = useContext(UserContext);
  const [withdraw, setWithdraw] = useState("");
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(true);
  var leng = people.users.length;
  var balAnce = people.users[leng - 1].balance;
  const [availablebal, setAvailableBal] = useState(balAnce);

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
    if (parseInt(field) > balAnce) {
      setStatus("Error: " + label);
      alert("Insufficient balance to withdraw");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  // Withdraw Function
  function handleCreate(e) {
    e.preventDefault();
    if (!validate(withdraw, "withdraw")) return;
    var Money = balAnce - parseInt(withdraw);
    setAvailableBal(Money);
    people.users[leng - 1].balance = Money;
    setShow(false);
    alert("Successfully Withdrawn ₹" + withdraw);
  }

  // Reset Form
  function refreshForm() {
    setWithdraw("");
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
          <h3 className="text-center mb-3">Withdraw Money</h3>
          <h4 className="mb-4">Current Balance: ₹ {availablebal}</h4>
          {show ? (
            <Form onSubmit={handleCreate}>
              <Form.Group className="mb-3">
                <Form.Label>Enter Amount</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Amount to Withdraw"
                  value={withdraw}
                  onChange={(e) => setWithdraw(e.currentTarget.value)}
                />
              </Form.Group>
              <Button
                type="submit"
                variant="primary"
                className="w-100"
                disabled={!withdraw}
              >
                Withdraw
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
                onClick={refreshForm}
              >
                Add Another Withdraw
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
