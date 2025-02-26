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
import ban from "../../assets/icons/ban.png";

import astronautCorki from "../../assets/figures/astronautCorki.png"; // Imagem importada
import astronautIvern from "../../assets/figures/astronautIvern.png"; // Imagem importada
import astronautNautilus from "../../assets/figures/astronautNautilus.png"; // Imagem importada
import astronautTeemo from "../../assets/figures/astronautTeemo.png"; // Imagem importada
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';


const items = [
  {
    nick: "Ensabuado",
    review: "Atendimento bom demais, comprei chegou na hora valeu tmj. Atendimento bom demais, comprei chegou na hora valeu tmj. Atendimento bom demais, comprei chegou na hora valeu tmj. Atendimento bom demais, comprei chegou na hora valeu tmj. teste teste teste teste ",
    imageUrl: "https://i.pinimg.com/originals/6e/be/a5/6ebea5dbbe07d8bee942e0ed6fbb5c0d.png"
  },
  {
    nick: "Item 2",
    review: "review for item 2",
    imageUrl: "https://www.w3schools.com/w3images/avatar6.png"
  },
  {
    nick: "Item 3",
    review: "review for item 3",
    imageUrl: "https://www.w3schools.com/w3images/avatar5.png"
  },
  {
    nick: "Item 4",
    review: "review for item 4",
    imageUrl: "https://www.w3schools.com/w3images/avatar2.png"
  },
  {
    nick: "Item 5",
    review: "review for item 5",
    imageUrl: "https://www.w3schools.com/w3images/avatar6.png"
  },
  {
    nick: "Item 6",
    review: "review for item 6",
    imageUrl: "https://www.w3schools.com/w3images/avatar5.png"
  },
  {
    nick: "Item 7",
    review: "review for item 7",
    imageUrl: "https://www.w3schools.com/w3images/avatar2.png"
  },
  {
    nick: "Item 8",
    review: "review for item 8",
    imageUrl: "https://www.w3schools.com/w3images/avatar6.png"
  },
  {
    nick: "Item 9",
    review: "review for item 9",
    imageUrl: "https://www.w3schools.com/w3images/avatar5.png"
  },
  {
    nick: "Item 10",
    review: "review for item 10",
    imageUrl: "https://www.w3schools.com/w3images/avatar2.png"
  },
  {
    nick: "Item 11",
    review: "review for item 11",
    imageUrl: "https://www.w3schools.com/w3images/avatar6.png"
  },
  {
    nick: "Item 12",
    review: "review for item 12",
    imageUrl: "https://www.w3schools.com/w3images/avatar5.png"
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
            Garanta sua <strong className="bold">Smurf de League of Legends</strong> e Inicie sua Nova Jornada
          </Title>
          <Subtitle>
            Bem-vindo ao maior site de compra de smurfs 100% seguras contra banimentos.
          </Subtitle>
          <BuyButton>Comprar Smurf</BuyButton>
        </ContainerText>
      </Content>

      <CardsContainer>
        <Card>
          <img src={email} alt="Acesso completo a conta" />
          <p>Acesso completo a conta</p>
        </Card>
        <Card>
          <img src={seguranca} alt="Garantia e segurança" />
          <p>Garantia e segurança</p>
        </Card>
        <Card>
          <img src={ban} alt="Imune a banimentos" />
          <p>Imune a banimentos</p>
        </Card>
      </CardsContainer>

      {/* Info Section */}
      <InfoSection>
        <InfoImage src={astronautCorki} alt="Astronaut Corki" />
        <InfoText>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <StatsSection>
            <StatsCard>
              <h3>10000+</h3>
              <p>Jornadas realizadas</p>
            </StatsCard>
            <StatsCard>
              <h3>10000+</h3>
              <p>Clientes embarcados</p>
            </StatsCard>
            <StatsCard>
              <h3>10000+</h3>
              <p>Feedbacks registrados</p>
            </StatsCard>
          </StatsSection>
          <StatsButton>Quero uma Smurf também</StatsButton>
        </InfoText>
      </InfoSection>

      {/* Buy Section */}
      <BuySection>
        <BuyContainerRow>
          <BuyContainerColumn>
            <BuyTitle>Garanta sua conta</BuyTitle>
            <BuyText>Selecione o tipo de compra que você deseja realizar e se atente a todas as informaçõesrr sobre a smurf desejada</BuyText>

            <BuyContainerRow>
              <BuyCard id="buyRandom">
                <BuyTitleCard>Smurf Random</BuyTitleCard>
                <BuyPriceCard>R$ 14,99</BuyPriceCard>
                <BuyTextCard>Não liga para a skin que venha na conta e quer pagar barato?</BuyTextCard>
                <BuyWarrantyCard>Garantia: 7 dias</BuyWarrantyCard>
                <BuyListCard>
                  <li>Pelo menos nível 30</li>
                  <li>40.000+ de Essência Azul</li>
                  <li>MMR 100% Zerado</li>
                  <li>E-mail não confirmado</li>
                  <li>Skins aleatórias nos espólios</li>
                </BuyListCard>
                <BuyButtonCard>Comprar</BuyButtonCard>
              </BuyCard>

              <BuyCard id="buySkin">
                <BuyTitleCard>Smurf com Skin</BuyTitleCard>
                <BuyPriceCard>R$ 19,99+</BuyPriceCard>
                <BuyTextCard>Escolha uma skin para estar nos espólios de sua smurf!</BuyTextCard>
                <BuyWarrantyCard>Garantia: 10 dias</BuyWarrantyCard>
                <BuyListCard>
                  <li>Pelo menos nível 30</li>
                  <li>40.000+ de Essência Azul</li>
                  <li>MMR 100% Zerado</li>
                  <li>E-mail não confirmado</li>
                  <li>Escolha uma skin garantida</li>
                </BuyListCard>
                <BuyButtonCard>Escolher Skin</BuyButtonCard>
              </BuyCard>
            </BuyContainerRow>

          </BuyContainerColumn>
          <BuyImage src={astronautIvern} alt="Astronaut Ivern" />
        </BuyContainerRow>
      </BuySection>

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
