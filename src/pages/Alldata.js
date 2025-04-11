import { Card, Table } from "react-bootstrap";
import { useContext } from "react";
import UserContext from "../context";
import "./pagestyle.css";

export default function Alldata() {
  let people = useContext(UserContext);

  // Render Table Headers
  function renderTableHeader() {
    let header = Object.keys(people.users[0]);
    return header.map((value, index) => (
      <th key={index}>{value.toUpperCase()}</th>
    ));
  }

  // Render Table Data
  function renderTableData() {
    return people.users.map((user, index) => {
      const { name, email, password, balance } = user;
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>{email}</td>
          <td>{password}</td>
          <td>₹ {balance}</td>
        </tr>
      );
    });
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
          width: "800px",
        }}
      >
        <Card.Body>
          <h3 className="text-center mb-4">All Transactions</h3>
          <Table striped bordered hover>
            <thead>
              <tr>{renderTableHeader()}</tr>
            </thead>
            <tbody>{renderTableData()}</tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}
