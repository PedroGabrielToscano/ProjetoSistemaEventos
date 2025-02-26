import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  width: 100%;
  background-color: #1e1e1e;
  color: #fff;
  margin-top: 80px;
  box-sizing: border-box;
`;

const FooterContainer = styled.footer`
  padding: 50px 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 30px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    margin: 20px 0;
    width: 100%;
  }
`;

const Title = styled.h4`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 14px;
  color: #ffff;
  margin-top: 6px;
  margin-bottom: 25px;
  max-width: 200px;

  @media (max-width: 768px) {
    align-self: center;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

const LinkItem = styled.li`

  margin-top: 6px;
  margin-bottom: 12px;
  font-family: 'Raleway', sans-serif;

  a {
    color: #fff;
    text-decoration: none;
    font-family: 'Raleway', sans-serif;
    font-size: 14px;

    &:hover {
      color: #ccc;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: left;
  margin-top: 20px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    color: #1e1e1e;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    font-size: 20px;
    text-decoration: none;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #ccc;
      color: #1e1e1e;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Newsletter = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  input {
    padding: 10px 15px;
    border-top: 1px solid white;
    border-left: 1px solid white;
    border-right: none;
    border-bottom: 1px solid white;
    border-radius: 30px 0 0 30px;
    outline: none;
    background-color: transparent;
    color: #fff;
    flex: 1;
    font-size: 14px;
    min-width: 0;
    max-width: 300px;
    margin-top: 20px;
    &::placeholder {
      color: #aaa;
    }
  }

  button {
    padding: 10px 20px;
    background-color: #ffffff;
    border: 1px solid white;
    border-radius: 0 30px 30px 0;
    margin-top: 20px;
    cursor: pointer;
    font-size: 14px;
    color: black  ;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    &:hover {
      background-color: #ccc;
      color: #1e1e1e;
      border: 1px solid #ccc;

    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;

    input {
      border-radius: 30px;
      margin-bottom: 10px;
      width: 60%;
    }

    button {
      border-radius: 30px;
      width: 60%;
      padding: 12px 0;
    }
  }
`;

const CopyrightContainer = styled.div`
  background-color: black;
  text-align: center;
  padding: 20px 40px;
  font-size: 12px;
  color: #aaa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;

  div {
    margin: 5px 0;
    text-align: center;
    color: white;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Column style={{ flex: 1 }}>
          <Title>Astro Smurfs</Title>
          <Text>Fornecendo Smurfs de qualidade para novas jornadas.</Text>
          <SocialIcons>
            <a href="#">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>
            </a>
            <a href="#">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
            </a>
            <a href="#">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-discord"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" /><path d="M7 16.5c3.5 1 6.5 1 10 0" /></svg>
            </a>
          </SocialIcons>
        </Column>
        <Column style={{ flex: 0.8 }}>
          <Title>Site links</Title>
          <LinkList>
            <LinkItem>
              <a href="#">Home</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Random</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Skins</a>
            </LinkItem>
          </LinkList>
        </Column>
        <Column style={{ flex: 0.8 }}>
          <Title>Support</Title>
          <LinkList>
            <LinkItem>
              <a href="#">Contato</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Discord</a>
            </LinkItem>
          </LinkList>
        </Column>
        <Column style={{ flex: 1.4 }}>
          <Title>Fique por dentro de promoções</Title>
          <Newsletter>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </Newsletter>
        </Column>
      </FooterContainer>
      <CopyrightContainer>
        <div>Copyright © Astro Smurfs 2025 | All Rights Reserved</div>
        <div>Esse site NÃO é afiliado, patrocinado, endossado ou associado a League of Legends ou Riot Games, Inc.</div>
        <div>Desenvolvido por Gustavo</div>
      </CopyrightContainer>
    </FooterWrapper>
  );
};

export default Footer;
