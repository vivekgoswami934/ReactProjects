import styled from "@emotion/styled";
import { SendRounded } from "@mui/icons-material";
import React from "react";

const Container = styled.div`
  height: 60vh;
  background-color: #d6c2c2;
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px; */
  box-shadow: rgba(0, 0, 0, 0.56) 10px 22px 70px 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 72px;
  margin-bottom: 20px;
`;
const Description = styled.div`
font-size: 25px;
font-weight: 300;
margin-bottom: 20px;
`;
const InputContainer = styled.div`
width:50%;
height:40px;
background-color: #b3aea8;
box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
display: flex;
justify-content: space-between;

`;
const Input = styled.input`
flex:9;
border: none;
padding-left: 30px;
font-weight: bolder;
`;
const Button = styled.button`
flex:1;
border:none;
background-color: #015c5c;
color: white;

`;

const Newsletter = () => {
  return (
    <div>
      <Container>
        <Title>Newsletter</Title>
        <Description>
          Get timely updates from your favorite products.
        </Description>
        <InputContainer>
          <Input placeholder="Write Your Email For Update" />
          <Button>
            <SendRounded />
          </Button>
        </InputContainer>
      </Container>
    </div>
  );
};

export default Newsletter;
