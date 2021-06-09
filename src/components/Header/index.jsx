import React from "react";
import styled from "styled-components";
import HeaderImg from "../../asset/bg.jpg";
import Typist from "react-typist";

const HeaderContainer = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${HeaderImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Blank = styled.div`
  height: ${(props) => props.h}px;
`;

const Title = styled.h1`
  font-size: ${(props) => (props.size ? props.size : 63)}px;
  color: white;
  text-align: center;
  margin: 0;
`;

const SubTitle = styled.h3`
  font-size: ${(props) => (props.size ? props.size : 24)}px;
  color: white;
  text-align: center;
  margin: 0;
  font-weight: 600;
`;

const TitleBox = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Blank h={200}/>
      <Typist>
        <TitleBox>
          <Title>Team Ko</Title>
          <Typist.Delay ms={500} />
          <Blank h={10}></Blank>
          <SubTitle>Make What We Want</SubTitle>
        </TitleBox>
      </Typist>
    </HeaderContainer>
  );
};

export default Header;
