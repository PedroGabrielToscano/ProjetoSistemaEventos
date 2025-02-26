import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1e1e1e;
  padding: 20px;
  height: 650px;
  border-left: 6px solid #007bff;
  border-bottom: 6px solid #007bff;
  border-radius: 8px;
  width: 500px;
  text-align: center;
  color: white;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 50px;
  display: flex;
  flex-direction: column;
`;

export const ContainerPage = styled.div`
  background-color:rgb(58, 58, 58);
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  min-height: 100vh;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  color: #FFF;
`;

export const Paragraph = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  color: #FFF;
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