import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  width: 100%;
`;

export const Logo = styled.img`
  height: 60px; /* Ajuste conforme necessário */
  @media (max-width: 768px) {
    display: none;
  }
  margin-left: 50px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  flex-grow: 1; /* Para ocupar o espaço disponível */
  margin-left: auto; /* Garante que o conteúdo de navegação vai para o centro */
`;

export const NavItem = styled.div`
  margin: 0 15px;
  cursor: pointer;
  color: #ffffff; /* Cor do texto */
  font-weight: bold;
  font-family: 'Poppins', sans-serif;

  &:hover {
    color: #007bff; /* Cor ao passar o mouse */
    text-shadow: 0 0 10px rgba(0, 123, 255, 0.7), 0 0 20px rgba(0, 123, 255, 0.5); /* Efeito de brilho */

  }
`;
