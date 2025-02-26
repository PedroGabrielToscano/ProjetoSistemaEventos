import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
`;

export const Paragraph = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  color: #666;
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

// Novo botão de "Criar Conta"
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
