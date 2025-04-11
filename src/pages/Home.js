import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import "./pagestyle.css";

export default function Home() {
  return (
    <>
      <Container className="Container">
        <Row>
          <h1
            id="welcome mt-1"
            className="text-center"
            style={{ color: "aqua" }}
          >
            Welcome to <span style={{ color: "blue" }}>Banking Application</span>
          </h1>
        </Row>
      </Container>
    </>
  );
}
