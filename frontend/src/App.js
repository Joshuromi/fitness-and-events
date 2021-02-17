import { Container } from "reactstrap";
import Routes from "./routes";

function App() {
  return (
    <Container>
      <h2 className="text-center mb-4">Fitness and Events</h2>
      <Routes />
    </Container>
  );
}

export default App;
