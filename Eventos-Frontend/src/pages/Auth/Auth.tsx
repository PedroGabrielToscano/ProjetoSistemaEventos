import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Title, Paragraph, Form, Input, Button, ErrorMessage, SignupLink, ContainerPage } from './style';

interface JwtPayload {
  id: string;
  nome: string;
  email: string;
  role: string;
  exp: number;
}

// Função para decodificar o JWT manualmente
const decodeJWT = (token: string): JwtPayload | null => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    return null;
  }
};

const Auth: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('http://127.0.0.1:8585/auth/', { email, senha });
      const { token } = response.data;
      const decoded = decodeJWT(token);

      if (!decoded) {
        setError('Token inválido.');
        setLoading(false);
        return;
      }

      // Armazena os dados no localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('userId', decoded.id);
      localStorage.setItem('userNome', decoded.nome);
      localStorage.setItem('userEmail', decoded.email);
      localStorage.setItem('userRole', decoded.role);
      localStorage.setItem('userExp', decoded.exp.toString());

      // Redireciona para a página de eventos
      navigate('/eventos');
    } catch (err) {
      setError('Erro ao autenticar. Verifique suas credenciais.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContainerPage>
    <Container>
      <Title>Autenticação</Title>
      <Paragraph>Digite seu email e senha para acessar sua conta</Paragraph>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'Entrar'}
        </Button>
      </Form>

      {/* Botão para ir para a página de cadastro */}
      <SignupLink onClick={() => navigate('/signup')}>Ainda não é cadastrado? Clique aqui!</SignupLink>
    </Container>
    </ContainerPage>
  );
};

export default Auth;