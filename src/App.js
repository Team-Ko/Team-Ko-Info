import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Content from "./components/Content";
import Member from "./components/Member";

const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  background-color: black;
`;

const App = () => {
  return (
    <Container>
      <Header />
      <Content />
      <Member />
    </Container>
  );
};

export default App;
