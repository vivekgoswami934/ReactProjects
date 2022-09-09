import { Facebook, GitHub, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid black;
  display: flex;
  height: 60vh;
  flex: 1;
  margin-top: 5px;
  background-color: whitesmoke;
`;
const Left = styled.div`
  flex: 1;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p``;
const SocialCOntainer = styled.div``;
const SocialItem = styled.div``;

const Center = styled.div`
  flex: 1;
  border: 1px solid gray;
`;
const Right = styled.div`
  flex: 1;
  border: 1px solid gray;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>VivEk</Logo>
        <Desc>
          There are many variations of passages of Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptates modi iusto qui reprehenderit,
          commodi eaque, voluptatibus obcaecati sint laboriosam earum eos
          suscipit facere repudiandae dolorum quidem ullam exercitationem rerum
          autem!
        </Desc>
        <SocialCOntainer>
          <SocialItem>
            <Facebook />
          </SocialItem>
          <SocialItem>
            <Instagram />
          </SocialItem>
          <SocialItem>
            <Twitter />
          </SocialItem>
          <SocialItem>
            <Pinterest />
          </SocialItem>
          <SocialItem>
            <GitHub />
          </SocialItem>
        </SocialCOntainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
