import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1e1e1e;
  padding: 20px;
  height: 400px;
  border-left: 6px solid #007bff;
  border-bottom: 6px solid #007bff;
  border-radius: 8px;
  width: 500px;
  text-align: center;
  color: white;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 25px;
  display: flex;
  flex-direction: column;
`;

export const ContainerPage = styled.div`
  background-color:rgb(58, 58, 58);
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
  justify-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  color: #fff;
`;

export const Paragraph = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  color: #fff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

export const Button = styled.button`
  padding: 0.75rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;

  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  margin-bottom: 1rem;
  text-align: center;
`;

// Novo botÃ£o de "Criar Conta"
export const SignupLink = styled.button`
  background: none;
  border: none;
  color: #007bff;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  display: block;
  width: 100%;

  &:hover {
    text-decoration: underline;
  }
`;