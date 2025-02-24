import React, { useState } from 'react';
import axios from 'axios';
import { 
  Container, 
  Title, 
  Paragraph, 
  Form, 
  Input, 
  Button, 
  ErrorMessage, 
  SuccessMessage 
} from './style';

const Signup: React.FC = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!nome.trim()) newErrors.nome = 'Nome é obrigatório';
    if (!cpf.trim()) newErrors.cpf = 'CPF é obrigatório';
    else if (!/^\d{11}$/.test(cpf))
      newErrors.cpf = 'CPF deve conter 11 dígitos numéricos';
    if (!nascimento)
      newErrors.nascimento = 'Data de nascimento é obrigatória';
    if (!email.trim()) newErrors.email = 'Email é obrigatório';
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
      newErrors.email = 'Email inválido';
    if (!phone.trim()) newErrors.phone = 'Telefone é obrigatório';
    if (!senha) newErrors.senha = 'Senha é obrigatória';
    else if (senha.length < 6)
      newErrors.senha = 'Senha deve ter ao menos 6 caracteres';
    if (senha !== confirmSenha)
      newErrors.confirmSenha = 'Senhas não conferem';

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const data = {
        nome,
        cpf,
        nascimento,
        email,
        phone,
        senha,
      };
      await axios.post('http://127.0.0.1:8585/users/', data);
      setSuccess('Cadastro concluído!');
      // Limpa os campos do formulário
      setNome('');
      setCpf('');
      setNascimento('');
      setEmail('');
      setPhone('');
      setSenha('');
      setConfirmSenha('');
    } catch (error) {
      setErrors({ submit: 'Erro ao realizar cadastro. Tente novamente.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Cadastro de Usuário</Title>
      <Paragraph>Preencha os campos abaixo para criar sua conta</Paragraph>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        {errors.nome && <ErrorMessage>{errors.nome}</ErrorMessage>}
        
        <Input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        {errors.cpf && <ErrorMessage>{errors.cpf}</ErrorMessage>}
        
        <Input
          type="date"
          placeholder="Data de Nascimento"
          value={nascimento}
          onChange={(e) => setNascimento(e.target.value)}
        />
        {errors.nascimento && <ErrorMessage>{errors.nascimento}</ErrorMessage>}
        
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        
        <Input
          type="text"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
        
        <Input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        {errors.senha && <ErrorMessage>{errors.senha}</ErrorMessage>}
        
        <Input
          type="password"
          placeholder="Confirmar Senha"
          value={confirmSenha}
          onChange={(e) => setConfirmSenha(e.target.value)}
        />
        {errors.confirmSenha && <ErrorMessage>{errors.confirmSenha}</ErrorMessage>}
        
        {errors.submit && <ErrorMessage>{errors.submit}</ErrorMessage>}
        
        <Button type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'Cadastrar'}
        </Button>
      </Form>
      {success && <SuccessMessage>{success}</SuccessMessage>}
    </Container>
  );
};

export default Signup;
