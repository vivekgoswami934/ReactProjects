import {
  Facebook,
  GitHub,
  Instagram,
  Mail,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* border: 2px solid black; */
  display: flex;
  /* height: 60vh; */
  flex: 1;
  margin-top: 5px;
  background-color: whitesmoke;
`;
const Left = styled.div`
  flex: 1;
  /* border: 1px solid gray; */
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialItem = styled.div`
  width: 40px;
  height: 40px;
  color: white;
  background-color: #${(props) => props.color};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  /* border: 1px solid gray; */
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  /* border: 1px solid gray; */
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
margin-top: 40px;
  width: 70%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>VivEk.</Logo>
        <Desc>
          There are many variations of passages of Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptates modi iusto qui reprehenderit,
          commodi eaque, voluptatibus obcaecati sint laboriosam earum eos
          suscipit facere repudiandae dolorum quidem ullam exercitationem rerum
          autem!
        </Desc>
        <SocialContainer>
          <SocialItem color="3B5999">
            <Facebook />
          </SocialItem>
          <SocialItem color="E4405F">
            <Instagram />
          </SocialItem>
          <SocialItem color="55ACEE">
            <Twitter />
          </SocialItem>
          <SocialItem color="E60023">
            <Pinterest />
          </SocialItem>
          <SocialItem color="000">
            <GitHub />
          </SocialItem>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Sigin</ListItem>
          <ListItem>Terms & Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Azamgarh , Uttar Pradesh
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +917985747772
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "10px" }} /> vivekgoswamidbng@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
