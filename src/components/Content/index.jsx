import React from "react";
import styled from "styled-components";

const InnerContainer = styled.div`
    width: 100vw;
    height: 1000px;
    background-color: black;
`;

const Title = styled.div`
  color: white;
  font-size: 42px;
  font-weight: bold;
  text-align: center;
  border-bottom: 1px solid rgb(127, 127, 127);
  width: 600px;
  padding-bottom: 20px;
  margin: 0 auto;
`;

const SubTitle = styled.div`
  color: white;
  font-size: 32px;
  text-align: center;
  margin: 0 auto;
  padding-top: 10px;
`;

const Content = () => {
  return (
  <InnerContainer>
    <Title>Team-Ko를 소개합니다</Title>
    <SubTitle>우리가 하는 일들</SubTitle>
  </InnerContainer>
  );
};

export default Content;
