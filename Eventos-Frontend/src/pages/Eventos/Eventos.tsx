import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  PageWrapper,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  Title,
  UserInfo,
  MainContent,
  LoadingText,
  ErrorText,
  EventsGrid,
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  CardInfo
} from './style';

interface AuthData {
  token: string;
  userId: string;
  userNome: string;
  userEmail: string;
  userRole: string;
  userExp: string;
}

interface EventData {
  id: number;
  nome: string;
  descricao: string;
  data_Evento: string;
  imagem: string;
  local_Evento: string;
  responsavel_id: number;
}

const Eventos: React.FC = () => {
  const [authData, setAuthData] = useState<AuthData>({
    token: '',
    userId: '',
    userNome: '',
    userEmail: '',
    userRole: '',
    userExp: '',
  });
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  // Verifica se há token no localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/'); // Redireciona para a página inicial se não houver token
      return;
    }
    const userId = localStorage.getItem('userId') || '';
    const userNome = localStorage.getItem('userNome') || '';
    const userEmail = localStorage.getItem('userEmail') || '';
    const userRole = localStorage.getItem('userRole') || '';
    const userExp = localStorage.getItem('userExp') || '';

    setAuthData({ token, userId, userNome, userEmail, userRole, userExp });
  }, [navigate]);

  // Requisição GET para buscar os eventos
  useEffect(() => {
    if (!authData.token) return;

    setLoading(true);
    axios
      .get('http://127.0.0.1:8585/events/', {
        headers: {
          Authorization: `Bearer ${authData.token}`,
        },
      })
      .then((response) => {
        setEvents(response.data);
      })
      .catch(() => {
        setError('Erro ao carregar os eventos');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [authData.token]);

  return (
    <PageWrapper>
      {/* Barra Superior */}
      <HeaderContainer>
        <HeaderLeft>
          <Title>Eventos</Title>
        </HeaderLeft>
        <HeaderRight>
          <UserInfo>
            <p>
              <strong>Usuário:</strong> {authData.userNome}
            </p>
            <p>
              <strong>Email:</strong> {authData.userEmail}
            </p>
          </UserInfo>
        </HeaderRight>
      </HeaderContainer>

      {/* Conteúdo Principal */}
      <MainContent>
        {loading && <LoadingText>Carregando eventos...</LoadingText>}
        {error && <ErrorText>{error}</ErrorText>}

        <EventsGrid>
          {!loading &&
            !error &&
            events.map((event) => (
              <Card key={event.id}>
                {event.imagem && (
                  <CardImage
                    src={event.imagem}
                    alt={event.nome}
                    onError={(e) => {
                      // Se a imagem não carregar, ocultamos
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                )}
                <CardTitle>{event.nome}</CardTitle>
                <CardDescription>{event.descricao}</CardDescription>
                <CardInfo>
                  <strong>Local:</strong> {event.local_Evento}
                </CardInfo>
                <CardInfo>
                  <strong>Data:</strong>{' '}
                  {new Date(event.data_Evento).toLocaleString()}
                </CardInfo>
              </Card>
            ))}
        </EventsGrid>
      </MainContent>
    </PageWrapper>
  );
};

export default Eventos;
