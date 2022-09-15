import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Announcements = () => {
  return (
    <Container>
      <marquee style={{ color: 'white', fontSize: '20px' }}> Hurray!!! Super Deal ! Free Shipping on Orders Over $150</marquee>
     
    </Container>
  );
};

export default Announcements;
