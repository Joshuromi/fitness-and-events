import { Container } from "reactstrap";
import Routes from "./routes";
import "./App.css";

function App() {
  return (
    <Container>
      <h2 className="text-center header">Fitness & Events</h2>
      <Routes />
    </Container>
  );
}

export default App;
