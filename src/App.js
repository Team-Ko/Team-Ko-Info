import React from "react";
import styled from "styled-components";
import Header from "./components/Header";

const Container = styled.div`
  margin: 0 auto;
  height: 100vh;
  background-color: black;
`;

const App = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default App;
