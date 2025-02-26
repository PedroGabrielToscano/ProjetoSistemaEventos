import React from 'react';

import {
  Container,
  Content,
  ContainerText,
  Title,
  Subtitle,
  BuyButton,
  CardsContainer,
  Card,
  InfoSection,
  InfoText,
  InfoImage,
  StatsSection,
  StatsCard,
  StatsButton,
  WallpaperSection,
  BuySection,
  BuyTitle,
  BuyText,
  BuyContainerRow,
  BuyContainerColumn,
  BuyImage,
  BuyCard,
  BuyTitleCard,
  BuyPriceCard,
  BuyTextCard,
  BuyWarrantyCard,
  BuyListCard,
  BuyButtonCard,
  FeedbackSection,
  FeedbackTitle,
  FAQSection,
  FAQImage,
  FAQContainerRow,
  FAQContainerColumn,
  FAQTitle,
} from './styles';

import Carousel from '../../components/Carousel/Carousel'
import FAQ from '../../components/FAQ/FAQ'

import email from "../../assets/icons/email.png";
import seguranca from "../../assets/icons/seguranca.png";

import astronautCorki from "../../assets/figures/astronautCorki.png"; // Imagem importada
import astronautNautilus from "../../assets/figures/astronautNautilus.png"; // Imagem importada
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';


const items = [
  {
    nick: "PGT TURBO PEDRO",
    review: "Atendimento bom demais, comprei ",
    imageUrl: "https://i.imgur.com/NbSZrAK.jpeg"
  },
  {
    nick: "Dioguin maluco",
    review: "Comprei 2 ingressos,",
    imageUrl: "https://i.imgur.com/QYRFcC0.jpeg"
  },
  {
    nick: "Jose arco iris kkkk",
    review: "Comprei para ver o arco iris nas cataratas #amei",
    imageUrl: "https://i.imgur.com/CIpVONy.jpeg"
  },
  {
    nick: "ONÇA TOMANDO MAMADEIRA",
    review: "fui visitar o refugio itaipu",
    imageUrl: "https://i.imgur.com/zNTMXF2.jpeg"
  },
  {
    nick: "Kleiton",
    review: "amei muito o evento, e o site ajudou bastante ",
    imageUrl: "https://i.imgur.com/gERhs08.jpeg"
  }
];


const Home: React.FC = () => {


  return (
    <Container style={{ position: "relative", zIndex: 1 }}>
      <Header></Header>
      <WallpaperSection /> {/* Seção do wallpaper */}

      <Content>
        <ContainerText>
          <Title>
            Garanta seu <strong className="bold">Ingresso para os principais eventos da cidade</strong> e aproveite tudo de Foz
          </Title>
          <Subtitle>
            Bem-vindo ao maior site de compra de ingressos.
          </Subtitle>
          <a href="/signup">
    <BuyButton>Ver eventos</BuyButton>
  </a>
        </ContainerText>
      </Content>

      <CardsContainer>
        <Card>
          <img src={email} alt="Acesso completo a conta" />
          <p>Informação completa dos eventos</p>
        </Card>
        <Card>
          <img src={seguranca} alt="Garantia e segurança" />
          <p>Garantia e segurança</p>
        </Card>
      </CardsContainer>

      {/* Info Section */}
      <InfoSection>
        <InfoImage src={astronautCorki} alt="Astronaut Corki" />
        <InfoText>
          <p>Bem-vindo! Somos especialistas em transformar momentos em experiências inesquecíveis. Conectamos você aos mel
          hores eventos culturais, esportivos e de entretenimento, proporcionando uma plataforma completa para descobrir, reservar e aproveitar experiências únicas.</p>
          <StatsSection>
            <StatsCard>
              <h3>1000+</h3>
              <p>Eventos cadastrados</p>
            </StatsCard>
            <StatsCard>
              <h3>10000+</h3>
              <p>Clientes embarcados</p>
            </StatsCard>
            <StatsCard>
              <h3>3000+</h3>
              <p>Feedbacks registrados</p>
            </StatsCard>
          </StatsSection>
          <a href="/signup">
          <StatsButton>Descubra Mais</StatsButton>
          </a>
        </InfoText>
      </InfoSection>

      

      {/* Feedback Section */}
      <FeedbackSection>
        <FeedbackTitle>O que nossos clientes estão dizendo</FeedbackTitle>
      </FeedbackSection>
      <Carousel items={items} />

      {/* FAQ Section */}
      <FAQSection>
        <FAQContainerRow>
          <FAQImage src={astronautNautilus} alt="Astronaut Ivern" />
          <FAQContainerColumn>
            <FAQTitle>Perguntas Frequentes</FAQTitle>
            <FAQ></FAQ>
          </FAQContainerColumn>
        </FAQContainerRow>
      </FAQSection>

        <Footer></Footer>
    </Container>
    


  );
};

export default Home;
