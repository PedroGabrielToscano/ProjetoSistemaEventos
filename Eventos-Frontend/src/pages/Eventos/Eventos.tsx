import React, { useEffect, useState } from 'react';
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
  CardInfo,
  AddEventButton,
  ModalOverlay,
  ModalContent,
  Button,
  DeleteButton,
  EditEventButton
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
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editingEvent, setEditingEvent] = useState<EventData | null>(null);
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataEvento, setDataEvento] = useState('');
  const [imagem, setImagem] = useState('');
  const [localEvento, setLocalEvento] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    setAuthData({
      token,
      userId: localStorage.getItem('userId') || '',
      userNome: localStorage.getItem('userNome') || '',
      userEmail: localStorage.getItem('userEmail') || '',
      userRole: localStorage.getItem('userRole') || '',
      userExp: localStorage.getItem('userExp') || '',
    });
  }, []);

  useEffect(() => {
    if (!authData.token) return;
    
    setLoading(true);
    
    // Definir a URL com base no tipo de usuário
    let url = 'http://127.0.0.1:8585/events/';
    if (authData.userRole === 'responsavel') {
      url = `http://127.0.0.1:8585/events/?responsavel_id=${authData.userId}`;
    }
  
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${authData.token}` },
      })
      .then((response) => setEvents(response.data))
      .catch(() => setError('Erro ao carregar os eventos'))
      .finally(() => setLoading(false));
  }, [authData.token, authData.userRole, authData.userId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (authData.userRole !== 'responsavel') {
      alert('Você não tem permissão para criar eventos.');
      return;
    }
    try {
      if (!authData.token || !authData.userId) return;
      await axios.post(
        'http://127.0.0.1:8585/events/',
        {
          nome,
          descricao,
          data_Evento: dataEvento,
          imagem,
          local_Evento: localEvento,
          responsavel_id: authData.userId,
        },
        {
          headers: { Authorization: `Bearer ${authData.token}` },
        }
      );
      alert('Evento criado com sucesso!');
      setShowModal(false);
      setEvents([...events, { id: Date.now(), nome, descricao, data_Evento: dataEvento, imagem, local_Evento: localEvento, responsavel_id: parseInt(authData.userId) }]);
      resetForm();
    } catch (error) {
      alert('Erro ao criar evento!');
    }
  };

  const handleDelete = async (eventId: number) => {
    if (authData.userRole !== 'responsavel') {
      alert('Você não tem permissão para deletar eventos.');
      return;
    }
    try {
      if (!authData.token) return;

      await axios.delete(`http://127.0.0.1:8585/events/${eventId}`, {
        headers: { Authorization: `Bearer ${authData.token}` }
      });

      alert('Evento deletado com sucesso!');
      setEvents(events.filter(event => event.id !== eventId));
    } catch (error) {
      alert('Erro ao deletar evento!');
    }
  };

  const handleEdit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (authData.userRole !== "responsavel") {
    alert("Você não tem permissão para editar eventos.");
    return;
  }
  
  try {
    if (!authData.token || !editingEvent) return;

    await axios.put(
      `http://127.0.0.1:8585/events/${editingEvent.id}`,
      {
        nome,
        descricao,
        data_Evento: dataEvento,
        imagem,
        local_Evento: localEvento,
      },
      {
        headers: { Authorization: `Bearer ${authData.token}` },
      }
    );

    alert("Evento atualizado com sucesso!");
    setShowModal(false);
    setEvents(events.map(event => 
      event.id === editingEvent.id 
        ? { ...event, nome, descricao, data_Evento: dataEvento, imagem, local_Evento: localEvento } 
        : event
    ));
    resetForm();
  } catch (error) {
    alert("Erro ao editar evento!");
  }
};

  

  const resetForm = () => {
    setEditingEvent(null);
    setNome('');
    setDescricao('');
    setDataEvento('');
    setImagem('');
    setLocalEvento('');
  };

  return (
    <PageWrapper>
      <HeaderContainer>
        <HeaderLeft>
          <Title>Eventos & Bilheteria Foz</Title>
        </HeaderLeft>
        <HeaderRight>
          <UserInfo>
            <p>
              <strong>Usuário:</strong> {authData?.userNome || "Desconhecido"}
            </p>
            <p>
              <strong>Email:</strong> {authData?.userEmail || "Não informado"}
            </p>
          </UserInfo>
        </HeaderRight>
      </HeaderContainer>
  
      <MainContent>
        {authData?.userRole === "responsavel" && (
          <AddEventButton
            onClick={() => {
              setEditingEvent(null);
              setShowModal(true);
            }}
          >
            + Adicionar Evento
          </AddEventButton>
        )}
  
        {loading && <LoadingText>Carregando eventos...</LoadingText>}
        {error && <ErrorText>{error}</ErrorText>}
  
        <EventsGrid>
          {events.length > 0 ? (
            events.map((event) => (
              <Card key={event.id}>
                {event.imagem && <CardImage src={event.imagem} alt={event.nome} />}
                <CardTitle>{event.nome}</CardTitle>
                <CardDescription>{event.descricao}</CardDescription>
                <CardInfo>
                  <strong>Local:</strong> {event.local_Evento}
                </CardInfo>
                <CardInfo>
                  <strong>Data:</strong>{" "}
                  {event.data_Evento
                    ? new Date(event.data_Evento).toLocaleString()
                    : "Data não informada"}
                </CardInfo>
  
                {authData?.userRole === "responsavel" && (
                  <>
                    <EditEventButton
                      onClick={() => {
                        setEditingEvent(event);
                        setNome(event.nome);
                        setDescricao(event.descricao);
                        setDataEvento(event.data_Evento);
                        setImagem(event.imagem);
                        setLocalEvento(event.local_Evento);
                        setShowModal(true);
                      }}
                    >
                      Editar
                    </EditEventButton>
                    <DeleteButton onClick={() => handleDelete(event.id)}>Deletar</DeleteButton>
                  </>
                )}
              </Card>
            ))
          ) : (
            <p>Nenhum evento encontrado.</p>
          )}
        </EventsGrid>
  
        {showModal && (
          <ModalOverlay>
            <ModalContent>
              <h2>{editingEvent ? "Editar Evento" : "Criar Evento"}</h2>
              <form onSubmit={editingEvent ? handleEdit : handleSubmit}>
                <input
                  type="text"
                  placeholder="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Descrição"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  required
                />
                <input
                  type="date"
                  value={dataEvento}
                  onChange={(e) => setDataEvento(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Imagem (URL)"
                  value={imagem}
                  onChange={(e) => setImagem(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Local"
                  value={localEvento}
                  onChange={(e) => setLocalEvento(e.target.value)}
                  required
                />
                <Button type="submit">{editingEvent ? "Atualizar" : "Criar"}</Button>
                <Button type="button" onClick={() => setShowModal(false)}>
                  Cancelar
                </Button>
              </form>
            </ModalContent>
          </ModalOverlay>
        )}
      </MainContent>
    </PageWrapper>
  );
} 

export default Eventos;
