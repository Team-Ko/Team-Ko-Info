import React from "react";
import styled from "styled-components";
import HeaderImg from "../../asset/asd.jpg";

const Container = styled.div`
    width: 65%;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
`;

const CardBox = styled.div`
    width: 230px;
    height: 330px;
    color: white;
    font-size: 20px;
    text-align: center;

    margin-top:20px;
    &:hover {
        background-color: #1d1d1d;
        border-radius: 10px;

        transition: 0.2s;
        transform: scale(1.03);
        
        animation-duration: 0.3s;
        
    }
`;

const Circle = styled.div`
    margin: 0 auto;
    
    width: 200px;
    height: 200px;

    margin-top: 10px; 
    border-radius: 50%;
    background-color: white;
    margin-bottom: 40px;
    & > img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }
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
                <Circle><img src={HeaderImg} alt=""/></Circle>
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