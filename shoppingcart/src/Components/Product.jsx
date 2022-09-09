import {
  AddShoppingCartOutlined,
  FavoriteBorderOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  position: absolute;
  width: 100%;
  z-index: 3;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition : all 0.75s ease;

`;

const Container = styled.div`
  flex: 1;
  margin: 15px;
  min-width: 280px;
  height: 350px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: whitesmoke;
  transition : all 1s ease;
  border-radius: 20px;
  
  &:hover ${Info} {
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 1;

  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  /* border: 2px solid black; */
  height: 75%;
  object-fit: cover;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
    color: white;
    background-color: #141212;
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <AddShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
