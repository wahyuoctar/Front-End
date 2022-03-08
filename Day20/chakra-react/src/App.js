import { Container } from "@chakra-ui/react";
import ContentCard from "./components/ContentCard";
import HomePage from "./pages/home"

function App() {
  return (
    <>
    <Container>
    <HomePage />
    <ContentCard/>
    </Container>
    </>
  );
}

export default App;
