import React, { useState } from "react";
import styled from "styled-components";

const FAQContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  min-width: 750px; /* Mantém 800px em telas grandes */
  padding: 0 1rem;

  @media (max-width: 1024px) {
    min-width: 600px; /* Reduz o min-width para telas médias (tablets) */
  }

  @media (max-width: 768px) {
    min-width: 100%; /* Remove limite mínimo para telas menores */
    max-width: 100%; /* Ocupa toda a largura */
  }
`;


const FAQItem = styled.div`
  background-color: #004cb3;
  border-radius: 5px;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  text-align: left;
`;

const FAQQuestion = styled.div<{ isOpen: boolean }>`
  padding: 1rem;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  display: flex; /* Alinha ícone e texto horizontalmente */
  align-items: center;

  &:hover {
    background-color: ${({ isOpen }) => (isOpen ? 'transparent' : '#007bff')};
  }

  svg {
    margin-right: 0.5rem; /* Espaço entre o ícone e o texto */
    width: 24px;
    height: 24px;
    fill: #fff;
  }
`;

const FAQAnswer = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "200px" : "0")};
  overflow: hidden;
  padding: ${({ isOpen }) => (isOpen ? "1rem" : "0")};
  color: #fff;
  background-color: #007bff;
  transition: all 0.3s ease;
`;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    "Quem somos?",
    "Como saber se é seguro comprar?",
    "Quais os metódos de pagamento?",
    "Qual o tempo de entrega?",
    "Vocês tem cupom? como consigo um?",
  ];

  const answers = [
    "Somos uma empresa especializada na venda de eventos, dedicados a transformar momentos em experiências inesquecíveis. Nosso foco é conectar pessoas aos melhores eventos culturais, esportivos e de entretenimento, garantindo uma jornada completa desde a descoberta até a participação no evento.",
    "Priorizamos a segurança e a transparência em todas as etapas da compra. ",
    "MERCADO PAGO.",
    "Para compras de ingressos eletrônicos, a confirmação e o envio são realizados de forma quase imediata",
    "Ainda não",
  ];

  // Array de ícones diferentes
  const icons = [
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-ufo"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16.95 9.01c3.02 .739 5.05 2.123 5.05 3.714c0 2.367 -4.48 4.276 -10 4.276s-10 -1.909 -10 -4.276c0 -1.59 2.04 -2.985 5.07 -3.724" /><path d="M7 9c0 1.105 2.239 2 5 2s5 -.895 5 -2v-.035c0 -2.742 -2.239 -4.965 -5 -4.965s-5 2.223 -5 4.965v.035" /><path d="M15 17l2 3" /><path d="M8.5 17l-1.5 3" /><path d="M12 14h.01" /><path d="M7 13h.01" /><path d="M17 13h.01" /></svg>,
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-shield-lock"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.998 2l.118 .007l.059 .008l.061 .013l.111 .034a.993 .993 0 0 1 .217 .112l.104 .082l.255 .218a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.531 -2.527l.263 -.225l.096 -.075a.993 .993 0 0 1 .217 -.112l.112 -.034a.97 .97 0 0 1 .119 -.021l.115 -.007zm.002 7a2 2 0 0 0 -1.995 1.85l-.005 .15l.005 .15a2 2 0 0 0 .995 1.581v1.769l.007 .117a1 1 0 0 0 1.993 -.117l.001 -1.768a2 2 0 0 0 -1.001 -3.732z" /></svg>,
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-credit-card"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 10v6a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-6h20zm-14.99 4h-.01a1 1 0 1 0 .01 2a1 1 0 0 0 0 -2zm5.99 0h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0 -2zm5 -10a4 4 0 0 1 4 4h-20a4 4 0 0 1 4 -4h12z" /></svg>,
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-stopwatch"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 13a7 7 0 1 0 14 0a7 7 0 0 0 -14 0z" /><path d="M14.5 10.5l-2.5 2.5" /><path d="M17 8l1 -1" /><path d="M14 3h-4" /></svg>,
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-device-heart-monitor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm-4 13a1 1 0 0 0 -.993 .883l-.007 .117l.007 .127a1 1 0 0 0 1.986 0l.007 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm3 0a1 1 0 0 0 -.993 .883l-.007 .117l.007 .127a1 1 0 0 0 1.986 0l.007 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm-6 -6.764l-.106 .211a1 1 0 0 1 -.77 .545l-.124 .008l-5 -.001v3.001h14v-3.001l-4.382 .001l-.724 1.447a1 1 0 0 1 -1.725 .11l-.063 -.11l-1.106 -2.211zm7 -4.236h-12a1 1 0 0 0 -.993 .883l-.007 .117v1.999l4.381 .001l.725 -1.447a1 1 0 0 1 1.725 -.11l.063 .11l1.106 2.21l.106 -.21a1 1 0 0 1 .77 -.545l.124 -.008l5 -.001v-1.999a1 1 0 0 0 -.883 -.993l-.117 -.007z" /></svg>,    
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-gift-card"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 4a4 4 0 0 1 3.995 3.8l.005 .2v8a4 4 0 0 1 -3.8 3.995l-.2 .005h-12a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 3.8 -3.995l.2 -.005h12zm-5.493 5l-.19 .004c-.928 .052 -1.719 .583 -2.317 1.444c-.56 -.805 -1.288 -1.322 -2.139 -1.428l-.198 -.017l-.164 -.003l-.16 .005c-1.28 .086 -2.339 1.179 -2.339 2.495c0 1.226 1.222 2.211 2.453 2.447l.16 .026l-1.32 1.32l-.083 .094a1 1 0 0 0 0 1.226l.083 .094l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l2.293 -2.292l2.293 2.292l.094 .083a1 1 0 0 0 1.403 -1.403l-.083 -.094l-1.32 -1.32c1.229 -.169 2.502 -1.11 2.606 -2.315l.007 -.158l-.005 -.163c-.08 -1.189 -1.02 -2.162 -2.175 -2.316l-.159 -.016l-.154 -.005zm-.025 2l.102 .009c.194 .04 .367 .21 .407 .406l.009 .085l-.012 .031l-.034 .04c-.13 .135 -.513 .369 -.836 .42l-.118 .009h-.602l.052 -.1l.088 -.156c.27 -.444 .574 -.696 .852 -.738l.092 -.006zm-4.964 0l.084 .005l.094 .02c.254 .077 .523 .32 .765 .718l.09 .157l.05 .1h-.601l-.106 -.008c-.398 -.057 -.894 -.4 -.894 -.492c0 -.23 .194 -.446 .416 -.491l.102 -.01z" /></svg>,
  ];

  return (
    <FAQContainer>
      {faqs.map((faq, index) => (
        <FAQItem key={index}>
          <FAQQuestion onClick={() => toggleFAQ(index)} isOpen={openIndex === index}>
            {icons[index]} {/* Renderiza o ícone correspondente */}
            {faq}
          </FAQQuestion>
          <FAQAnswer isOpen={openIndex === index}>{answers[index]}</FAQAnswer>
        </FAQItem>
      ))}
    </FAQContainer>
  );
};

export default FAQ;
