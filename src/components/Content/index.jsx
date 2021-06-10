import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    background-color: black;
`;

const Title = styled.div`
  color: white;
  font-size: ${(props) => props.size}px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 20px;
  margin: 0 auto;
`;

const Sub = styled.div`
  color: white;
  font-size: ${(props) => props.size}px;
  text-align: center;
  margin: 0 auto;
  padding-top: 10px;
`;

const UnderBar = styled.div`
  border-top: 1px solid rgb(127, 127, 127);
  width: 600px;
  margin: 0 auto;
`;

const Develop = styled.div`
  color: white;
  font-size: ${(props) => props.size}px;
  margin: 0 auto;
  padding-top: 10px;
  width : 650px;
`;

const Blank = styled.div`
  height: ${(props) => props.h}px;
`;

const Content = () => {
  return (
  <Container>
    <Title size = {42}>Team-Ko를 소개합니다</Title>
    <UnderBar />
    <Sub size = {32}>우리가 하는 일들</Sub>
    <Blank h={300} />
    <Title size = {48}>우리의 개발환경은 이렇습니다</Title>
    <Develop size = {24}>
      <li>소스는 내부 GitLab 저장소를 사용합니다.</li>
      <li>프로젝트 관리는 Notion을 통해 관리합니다.</li>
      <li>같은 내용을 정할 것</li>
    </Develop>
    <Blank h={100} />
    <Title size = {44}>Team-Ko의 멤버를 소개합니다</Title>
    <Blank h={30} />
  </Container>
  );
};

export default Content;
