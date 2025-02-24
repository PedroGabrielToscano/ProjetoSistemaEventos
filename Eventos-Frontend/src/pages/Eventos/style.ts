import styled from 'styled-components';

/* 
  Wrapper principal que ocupa a tela toda 
  e adiciona um gradiente de fundo
*/
export const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #dbeafe, #eff6ff); 
  display: flex;
  flex-direction: column;
`;

/* 
  Barra superior: cor de destaque, espaçamento 
  e exibição dos dados do usuário e título
*/
export const HeaderContainer = styled.header`
  background-color: #3b82f6;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
`;

// Área esquerda da barra superior (onde fica o título)
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

// Área direita da barra superior (onde fica o usuário)
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

// Título principal
export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
`;

// Informações do usuário (nome, email)
export const UserInfo = styled.div`
  text-align: right;

  p {
    margin: 0.2rem 0;
    strong {
      margin-right: 0.25rem;
    }
  }
`;

/*
  Conteúdo principal, onde fica a grid de eventos.
  Adicionamos um margin-top para afastar da barra.
*/
export const MainContent = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1rem;
`;

// Texto de carregamento
export const LoadingText = styled.p`
  color: #555;
  text-align: center;
`;

// Texto de erro
export const ErrorText = styled.p`
  color: red;
  text-align: center;
`;

/*
  Grid dos eventos:
  - Responsivo, ajusta o número de colunas 
  - Gap para espaçamento entre cards
*/
export const EventsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  margin-top: 1rem;
`;

// Card para cada evento
export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

// Imagem do evento
export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 0.75rem;
  object-fit: cover;
`;

// Título do evento
export const CardTitle = styled.h2`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

// Descrição do evento
export const CardDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.75rem;
  line-height: 1.4;
`;

// Informações adicionais do evento (data, local, etc.)
export const CardInfo = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;

  strong {
    color: #333;
  }
`;
