import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Announcements from "../Components/Announcements";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <Title>
          <b>Your Cart</b>
        </Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shooping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png" />
                <Details>
                  <ProductName>
                    <b>Prouct:</b>
                    abcdsesdfnadjf
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 4584578529
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductColor color="red" />
                  <ProductColor color="teal" />
                  <ProductSize>
                    <b>Size:</b> 37.8
                  </ProductSize>
                </Details>
                <PriceDetails>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$40</ProductPrice>
                </PriceDetails>
              </ProductDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png" />
                <Details>
                  <ProductName>
                    <b>Prouct:</b>
                    abcdsesdfnadjf
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 4584578529
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductColor color="red" />
                  <ProductColor color="teal" />
                  <ProductSize>
                    <b>Size:</b> 37.8
                  </ProductSize>
                </Details>
                <PriceDetails>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$40</ProductPrice>
                </PriceDetails>
              </ProductDetails>
            </Product>
          </Info>
          <Summary>Summary</Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Cart;

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  &:hover {
    color: Teal;
  }
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  border-radius: 8px;

  &:hover {
    background-color: teal;
    color: white;
    font-weight: 500;
  }
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
  margin: 0px 30px;

  &:hover {
    color: Teal;
  }
`;
const Bottom = styled.div`
  display: flex;
`;

const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;

const PriceDetails = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.span`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;
`;

const ProductId = styled.span``;

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 4px;
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

const Summary = styled.div`
  flex: 1;
  background-color: teal;
`;
