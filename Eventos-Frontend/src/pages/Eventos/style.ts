import styled from 'styled-components';

/* Wrapper principal que ocupa a tela toda e adiciona um gradiente de fundo */
export const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: radial-gradient(circle,rgb(112, 112, 112),rgb(21, 27, 34));
  display: flex;
  flex-direction: column;
`;

/* Barra superior: cor de destaque, espaçamento e exibição dos dados do usuário e título */
export const HeaderContainer = styled.header`
  background-color: #1e1e1e;
  border-bottom: 3px solid #007bff;
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
  background-color: #1e1e1e;
  border-radius: 8px;
  border-left: 6px solid #007bff;
  border-bottom: 6px solid #007bff;
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
  color: #FFF;
  margin-bottom: 0.5rem;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: #FFF;
  margin-bottom: 0.75rem;
  line-height: 1.4;
  flex-grow: 1;
`;

export const CardInfo = styled.p`
  font-size: 0.9rem;
  color: #FFF;
  margin-bottom: 0.5rem;

  strong {
    color: #FFF;
  }
`;

export const AddEventButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 20px;
  border-radius: 5px;

  &:hover {
    background-color:rgb(0, 55, 114);
  }
`;

export const DeleteEventButton = styled.button`
  background-color:rgb(253, 64, 64); /* Azul */
  color: white;
  border: none;
  padding: 10px 15px;
  width: 50%;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin: 5px;

  &:hover {
    background-color:rgb(235, 37, 37); /* Azul mais escuro */
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
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  background: #007bff
  color: white;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #2c2c2c;
  padding: 25px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  color: #fff;
  font-family: "Poppins", sans-serif;
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

export const ModalTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 22px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #007bff;
  border-radius: 5px;
  font-size: 14px;
  background: #1e1e1e;
  color: white;
  outline: none;

  &::placeholder {
    color: #aaa;
  }
`;

export const EditEventButton = styled.button`
  background-color: #3b82f6; /* Azul */
  color: white;
  border: none;
  padding: 10px 15px;
  width: 50%;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin: 5px;

  &:hover {
    background-color: #2563eb; /* Azul mais escuro */
  }
`;
export const BuyButton = styled.button`
  background-color:rgb(16, 143, 60); /* Azul */
  color: white;
  border: none;
  padding: 10px 15px;
  width: 50%;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin: 5px;

  &:hover {
    background-color:rgb(38, 95, 13); /* Azul mais escuro */
  }
`;