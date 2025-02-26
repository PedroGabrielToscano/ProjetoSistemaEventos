import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

type CarouselItemType = {
  review: string;
  nick: string;
  imageUrl: string; // Adicionando a URL da imagem
};

type CarouselProps = {
  items: CarouselItemType[];
};

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 50px;
  padding-top: 25px;
  position: relative;
  @media (max-width: 768px) {
    max-width: 300px;
  }
  
`;

const CarouselTrack = styled.div<{ translateX: number }>`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => props.translateX}%);
  width: 100%;
`;

const CarouselItem = styled.div<{ itemsPerView: number }>`
  flex: 0 0 calc(100% / ${(props) => props.itemsPerView});
  min-width: calc(100% / ${(props) => props.itemsPerView});
  box-sizing: border-box;
  padding: 1rem;
  position: relative; /* Permite o posicionamento da imagem em relação a esta div */
  overflow: visible; /* Permite que a imagem ultrapasse os limites da div */
`;

const CarouselButton = styled.button`
  background: none;
  color: white;
  border: none;
  padding: 19px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  font-size: 18px;

  &:first-of-type {
    left: -1.2rem; /* Ajustado para fora do carrossel */
  }
  &:last-of-type {
    right: -1.2rem; /* Ajustado para fora do carrossel */
  }
`;

const ItemCard = styled.div`
  display: flex;
  background-color: #282424;
  border-radius: 5px;
  padding: 1rem;
  text-align: center;
  min-height: 400px;
  margin: 5px;
  position: relative;
  padding-top: 70px;
  flex-direction: column;
  justify-content: space-between; 
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  top: -45px; /* Faz a metade da imagem para fora do card */
  border: solid 8px #282424;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2; /* Garante que a imagem ficará acima do conteúdo do card */
`;

const ItemText = styled.div`
  width: 100%;
  text-align: left; /* Alinha o texto ao centro */
  padding-top: 10px; /* Ajusta o conteúdo para não sobrepor a imagem */
  font-size: 18px;
  line-height: 1.2; /* Aumenta o espaçamento entre as linhas */
  word-spacing: 5px; /* Aumenta o espaçamento entre as palavras */
  font-family: 'Raleway', sans-serif; /* Aplica a fonte Raleway */
`;

const Nick = styled.p`
  text-align: left; /* Alinha o nick à esquerda */
  padding: 20px; /* Adiciona um pequeno espaço à esquerda */
  font-weight: bold; /* Destaca o nick com negrito */
  font-family: 'Raleway', sans-serif; /* Aplica a fonte Raleway */
  margin-top: auto; /* Empurra o Nick para o final do card */

`;

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [draggedX, setDraggedX] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const updateItemsPerView = () => {
    if (window.innerWidth < 600) {
      setItemsPerView(1);
    } else if (window.innerWidth < 900) {
      setItemsPerView(2);
    } else {
      setItemsPerView(3);
    }
  };

  useEffect(() => {
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const totalItems = items.length;

  const moveToNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = totalItems - itemsPerView;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const moveToPrev = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = totalItems - itemsPerView;
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  };

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.pageX;
    setIsDragging(true);
    setStartX(clientX);
    setDraggedX(0);
  };

  const endDrag = () => {
    setIsDragging(false);
    if (draggedX < -50) {
      moveToNext(); // Move to next item if dragged left
    } else if (draggedX > 50) {
      moveToPrev(); // Move to previous item if dragged right
    }
  };

  const dragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const clientX = "touches" in e ? e.touches[0].clientX : e.pageX;
    setDraggedX(clientX - startX);
  };

  return (
    <CarouselContainer>
      <CarouselButton onClick={moveToPrev}>❮</CarouselButton>
      <CarouselTrack
        ref={trackRef}
        translateX={-(currentIndex * (100 / itemsPerView))}
        onMouseDown={startDrag}
        onMouseMove={dragMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onTouchStart={startDrag}
        onTouchMove={dragMove}
        onTouchEnd={endDrag}
      >
        {items.map((item, index) => (
          <CarouselItem key={index} itemsPerView={itemsPerView}>
            <ItemCard>
              <ItemImage src={item.imageUrl} alt={item.review} />
              <ItemText>{item.review}</ItemText>
              <Nick>{item.nick}</Nick>
            </ItemCard>
          </CarouselItem>
        ))}
      </CarouselTrack>
      <CarouselButton onClick={moveToNext}>❯</CarouselButton>
    </CarouselContainer>
  );
};

export default Carousel;
