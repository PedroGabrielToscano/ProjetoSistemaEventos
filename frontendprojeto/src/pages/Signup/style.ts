import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f9f9f9;
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

  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

export const SuccessMessage = styled.span`
  color: green;
  font-size: 1rem;
  margin-top: 1rem;
  text-align: center;
`;
