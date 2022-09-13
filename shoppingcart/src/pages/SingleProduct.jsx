import React from "react";
import styled from "styled-components";
import Announcements from "../Components/Announcements";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
  border-right: 5px solid gray;
`;
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
font-weight: 150;

`;
const Desc = styled.p`
margin: 20px 0px;
`;
const Price = styled.span`
font-weight : 100;
font-size: 40px;

`;

const SingleProduct = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/cXFnLLV/3.png"></Image>
        </ImgContainer>
        <InfoContainer>
          <Title>Demim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim sint
            asperiores quo qui eius cumque? Tempore quasi id hic! Vel!
          </Desc>
          <Price>$ 20</Price>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default SingleProduct;
