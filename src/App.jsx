import styled from "styled-components";
import Menu from "./Components/Menu";
import Home from "./Pages/Home";

function App() {
  return (
    <StyledApp>
      <div className="App">
        <Menu />
        <Home />
      </div>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`

  .App {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
