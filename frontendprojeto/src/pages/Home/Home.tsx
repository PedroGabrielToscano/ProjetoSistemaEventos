import React from 'react';
import { Container, Title, Paragraph } from './style';

const Home: React.FC = () => {

  return (
    <Container>
      <Title>Bem-vindo à !</Title>
      <Paragraph>
        Esta é uma página de exemplo utilizando styled-components com o CSS separado.
      </Paragraph>
    </Container>
  );
};

export default Home;
