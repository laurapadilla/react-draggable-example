import { GlobalStyles, Main, Container } from "./styles";
import { Dots } from "./components/Dots";
import { About } from "./components/About";
import { Header } from "./components/Header";
export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>
        {/* <About /> */}
        <Dots />
      </Main>
      <Container>
        <About />
        <About />
        <About />
        <About />
      </Container>
    </>
  );
}
