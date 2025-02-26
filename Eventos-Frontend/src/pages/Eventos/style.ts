import styled from 'styled-components';

/* Wrapper principal que ocupa a tela toda e adiciona um gradiente de fundo */
export const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #dbeafe, #eff6ff);
  display: flex;
  flex-direction: column;
`;

/* Barra superior: cor de destaque, espaçamento e exibição dos dados do usuário e título */
export const HeaderContainer = styled.header`
  background-color: #3b82f6;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
`;

export const UserInfo = styled.div`
  text-align: right;

  p {
    margin: 0.2rem 0;
    strong {
      margin-right: 0.25rem;
    }
  }
`;

export const MainContent = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1rem;
`;

export const LoadingText = styled.p`
  color: #555;
  text-align: center;
`;

export const ErrorText = styled.p`
  color: red;
  text-align: center;
`;

export const EventsGrid = styled.div`
  display: grid;
  gap: 2rem; 
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  margin-top: 1rem;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const CardImage = styled.img`
  width: 335px;
  height: 200px;
  border-radius: 4px;
  object-fit: cover;
`;

export const CardTitle = styled.h2`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.75rem;
  line-height: 1.4;
  flex-grow: 1;
`;

export const CardInfo = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;

  strong {
    color: #333;
  }
`;

export const AddEventButton = styled.button`
  background-color:rgb(59, 246, 59);
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 20px;
  border-radius: 5px;

  &:hover {
    background-color:rgb(70, 235, 37);
  }
`;

export const DeleteEventButton = styled.button`
  background-color: #ef4444;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: auto;
  border-radius: 5px;

  &:hover {
    background-color: #dc2626;
  }
`;

export const FormContainer = styled.form`
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  background-color: rgb(59, 246, 59); /* Verde */
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: rgb(70, 235, 37); /* Verde um pouco mais escuro no hover */
  }
`;

export const DeleteButton = styled.button`
  background-color: red; 
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: darkred;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #555;
`;

export const EditEventButton = styled.button`
  background-color: #3b82f6; /* Azul */
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #2563eb; /* Azul mais escuro */
  }
`;
