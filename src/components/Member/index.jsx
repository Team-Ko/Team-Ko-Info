import React from "react";
import Card from "./Card";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 500px;
    background-color: black;
`;

const Member = () => {
    return (
        <Container>
            <Card />
        </Container>
    );
}

export default Member;