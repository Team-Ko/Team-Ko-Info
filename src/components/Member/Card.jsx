import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
`;

const CardBox = styled.div`
    width: 200px;
    height: 320px;
    color: white;
    font-size: 20px;
    text-align: center;
    &:hover {
        background-color: gray;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    margin-bottom: 40px;
`;

const Card = () => {
    return (
        <Container>
            <CardBox>
                <Circle></Circle>
                Frontend <br/>
                - 고한혁 -
            </CardBox>
            <CardBox>
                <Circle></Circle>
                Frontend <br/>
                - 노윤탁 -
            </CardBox>
            <CardBox>
                <Circle></Circle>
                Backend, <br/>
                UI/UX <br/>
                - 신동현 -
            </CardBox>
            <CardBox>
                <Circle></Circle>
                Backend, <br/>
                Planner <br/>
                - 김한새 -
            </CardBox>
        </Container>
    );
}

export default Card;