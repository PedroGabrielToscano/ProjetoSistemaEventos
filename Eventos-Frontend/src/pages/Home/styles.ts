import styled from 'styled-components';
import successBackground from '../../assets/backgrounds/image.png'; // Importa a imagem

export const Container = styled.div`
  display: flex;
  flex-direction: column; // Coloca os elementos em coluna
  align-items: center; // Centraliza horizontalmente
  height: auto; // Ajusta a altura conforme necessário
  background-color:rgb(21, 27, 34)
`;

// Nova seção para o wallpaper
export const WallpaperSection = styled.div`
  width: 100%;
  min-height: 600px;
  background:  url(${successBackground}) no-repeat center top;
  background-size: cover;
  background-position: center;
  position: absolute; // Usando posição absoluta
  top: 0; // Alinhando ao topo do Container
  left: 0; // Alinhando à esquerda do Container
  z-index: -1; // Colocand

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2); // Cor preta com 20% de opacidade
    mix-blend-mode: screen; // Aplica o efeito de screen
    z-index: 1; // Coloca a camada acima da imagem, mas abaixo do conteúdo
  }
  
`;

export const Content = styled.div`
  width: 100%; // Permite que a largura ocupe 100%
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  justify-content: flex-start;
  align-items: flex-start; // Mantém o conteúdo alinhado à esquerda
  text-align: left;
  color: white;
  margin-top: 100px;
  margin-bottom: 300px; // Espaço entre o conteúdo e os cards
  padding-left: 150px;
  @media (max-width: 768px) {
    margin-top: 50px;
    margin-bottom: 200px;
    padding-left: 15px;
  }
`;

export const ContainerText = styled.div`
    max-width: 600px; // Limita a largura máxima
    justify-items: flex-start;
    justify-content: flex-start;
    align-items: flex-start; 
    
    
`;

export const Title = styled.p`
  font-size: 50px; // Tamanho responsivo
  line-height: 1.1;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 5px;
  font-weight: 100;
  @media (max-width: 768px) {

  }

  strong {
    font-weight: 700; // Negrito apenas para o trecho em negrito
  }
`;

export const Subtitle = styled.p`
  font-size: 15px; // Tamanho responsivo
  font-family: 'Poppins', sans-serif;
  margin-top: 10px;
  margin-bottom: 30px;
  line-height: 1.5;
  font-weight: 100;
  @media (max-width: 768px) {

  }
`;

export const BuyButton = styled.button`
  background-color: #004cb3;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 15px 30px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease; /* Adiciona a transição para o movimento */

  &:hover {
    background-color: #007bff;
    transform: translateY(-5px); /* Move o botão um pouco para cima */

  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center; // Centraliza os cards
  margin-top: 40px; // Espaço entre o conteúdo e os cards
  margin-bottom: 40px;
  width: 100%;
  max-width: 1000px;
  flex-wrap: wrap; // Permite que os cards se ajustem em várias linhas
  position: absolute;
  top: 480px;
  @media (max-width: 768px) {
    top: 515px;
    width: 80%;
  }
`;

export const Card = styled.div`
  background-color: #004cb3;
  padding: 20px;
  border-radius: 15px;
  width: 250px;
  text-align: center;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 10px; // Margem entre os cards
  flex: 1; // Permite que os cards ocupem espaço disponível

  img {
    width: 50px;
    margin-bottom: 1rem;
  }

  p {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    width: 100px;
    padding: 10px;
}
`;

export const InfoSection = styled.div`
  display: flex;
  justify-content: center; // Centraliza a seção
  margin-top: 90px; // Espaço entre os cards e a nova seção
  margin-bottom: 40px;
  width: 100%;
  max-width: 1200px; // Limita a largura máxima
  flex-wrap: wrap; 
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const InfoImage = styled.img`
  width: 100%; // Ajuste o tamanho conforme necessário
  margin-right: 20px;
  max-width: 400px; // Limita o tamanho da imagem
  height: 100%; // Mantém a proporção da imagem

  @media (max-width: 768px) {
    width: 70%;
    height: 70%;
    margin-top: 100px;
    margin-bottom: 50px;
  }

`;

export const InfoText = styled.div`
  background-color: #1E1E1E; // Fundo cinza
  padding: 80px; // Preenchimento
  flex: 1; // Permite que o texto ocupe o espaço disponível
  border-radius: 10px; // Bordas arredondadas
  display: flex; // Para o alinhamento
  flex-direction: column; // Coloca texto e estatísticas em coluna
  justify-content: flex-start; // Mantém o texto alinhado à esquerda
  align-items: flex-start; // Alinha itens à esquerda
  color: #ffffff; // Cor do texto
  text-align: left; // Alinha texto à esquerda
  width: 100%; // Largura total
`;

export const StatsSection = styled.div`
  display: flex; // Coloca as estatísticas lado a lado
  align-items: center;
  justify-content: flex-start; // Alinha as estatísticas à esquerda
  margin-top: 20px; // Espaço acima das estatísticas
  width: 100%;
  flex-wrap: wrap; // Permite que as estatísticas se ajustem em várias linhas


`;

export const StatsCard = styled.div`
  margin: 0 10px; // Margem entre os cards de estatísticas
  text-align: center; // Alinha o texto ao centro
  font-size: 20px; // Tamanho do texto
  font-family: 'Poppins', sans-serif;

  p {
    margin: 0;
    font-size: 10px;
    font-weight: 100;
  }

  h3 {
    margin: 0;
    font-size: 45px;
    font-weight: bold;
  }
`;

export const StatsButton = styled.button`
  background-color: #004cb3; // Cor do botão
  color: white; // Cor do texto
  border: none; // Sem borda
  border-radius: 50px; // Bordas arredondadas
  padding: 15px 30px; // Preenchimento do botão
  font-weight: bold; // Texto em negrito
  font-size: 1rem; // Tamanho do texto
  cursor: pointer; // Cursor de ponteiro
  margin-top: 40px; // Espaço acima do botão
  transition: background-color 0.3s ease; // Transição suave

  &:hover {
    background-color: #007bff   ; // Cor ao passar o mouse
  }
`;

export const BuySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px;
  margin-top: 50px;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0px;

  }
`;

export const BuyContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap; /* Permite que os elementos quebrem linha */

  @media (max-width: 768px) {
    flex-direction: column; /* Empilha os elementos verticalmente em telas menores */
  }
`;

export const BuyContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%; /* Garante que o conteúdo ocupe 100% da largura */
  }
`;

export const BuyTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const BuyText = styled.p`
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
  margin-top: 10px;
  margin-bottom: 30px;
  line-height: 1.5;
  font-weight: 100;

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
`;

export const BuyImage = styled.img`
  height: 600px;
  margin-bottom: 65px;
  margin-left: 50px;
  max-width: 400px;

  @media (max-width: 768px) {
    width: 70%;
    margin: 20px 0;
  }
`;

export const BuyCard = styled.div`
  background-color: #1e1e1e;
  padding: 20px;
  border-left: 6px solid #007bff;
  border-bottom: 6px solid #007bff;
  border-radius: 8px;
  width: 250px;
  min-height: 400px;
  text-align: center;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 25px;
  flex: 1;

  @media (max-width: 768px) {
    width: 300px; /* Cada card ocupa 100% da largura disponível */
    min-height: 400px;

  }
`;

export const BuyTitleCard = styled.h2`

  color: #fff;
  font-family: 'Poppins', sans-serif;
  margin-top: 10px;
  margin-bottom: 35px;
  font-size: 18px;

`

export const BuyPriceCard = styled.span`

  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 35px;
  font-weight: bolder;
  transition: color 0.3s ease; /* Adiciona transição para a cor */

  &:hover {
    color: #007bff; /* Cor azul ao passar o mouse */
  }

`

export const BuyTextCard = styled.p`

  color: #fff;
  font-family: 'Poppins', sans-serif;
  margin-top: 25px;
  margin-bottom: 25px;
  font-size: 12px;


`

export const BuyWarrantyCard = styled.span`

  color: #fff;
  font-family: 'Poppins', sans-serif;
  margin-top: 25px;
  margin-bottom: 25px;
  font-size: 12px;
  font-weight: bolder;


`

export const BuyListCard = styled.ul`
  list-style-position: inside; /* Alinha a bolinha perto do texto */
  margin-top: 25px; /* Margem considerável acima da lista */
  padding: 0; /* Remove o padding padrão da lista */
  text-align: left; /* Alinha os itens à esquerda */

  li {
    margin-bottom: 5px; /* Espaço entre os itens da lista */
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: #ffff; /* Cor do texto */
  }
`;

export const BuyButtonCard = styled.button`

  background-color: #004cb3;
  color: white;
  border: none;
  border-radius: 50px;
  margin-top: 45px;
  margin-bottom: 10px;
  padding: 15px 30px;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 90%;

  &:hover {
    background-color: #007bff;
  }


`

export const FeedbackSection = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px;
  justify-content: center;

  @media (max-width: 768px) {
    margin: 20px;
    padding: 20px;
  }
`;

export const FeedbackTitle = styled.h2`

  color: #fff;
  font-family: 'Raleway', sans-serif; /* Aplica a fonte Raleway */
  margin-bottom: 50px;
  font-size: 2rem;

`

export const FAQSection = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px;
  margin-top: 50px;
  justify-content: center;

  @media (max-width: 768px) {
    margin: 20px;
    padding: 20px;
  }

`

export const FAQContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap; /* Permite que os elementos quebrem linha */

  @media (max-width: 768px) {
    flex-direction: column; /* Empilha os elementos verticalmente em telas menores */
  }
`;

export const FAQContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%; /* Garante que o conteúdo ocupe 100% da largura */
  }
`;

export const FAQTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 5rem;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const FAQText = styled.p`
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
  margin-top: 10px;
  margin-bottom: 30px;
  line-height: 1.5;
  font-weight: 100;

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
`;

export const FAQImage = styled.img`
  height: 600px;
  margin-bottom: 65px;
  margin-right: 100px;
  max-width: 400px;

  @media (max-width: 768px) {
    width: 70%;
    margin: 20px 0;
  }
`;