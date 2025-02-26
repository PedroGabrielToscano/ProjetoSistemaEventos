import React, { memo } from 'react';
import Particles from 'react-tsparticles'; // Certifique-se de ter instalado o react-tsparticles
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine'; // Importando Engine para o tipo de partículas

const ParticlesBackground: React.FC = memo(() => {

    const particlesInit = async (main: Engine) => {
        console.log(main);
        await loadFull(main);
      };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: "absolute", // Torna o componente posicionado
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -3,
        pointerEvents: "none" // Certifique-se de que está atrás de outros componentes
      }}
      options={{
        fullScreen: {
          enable: false, // Desativa o fullscreen para não sobrescrever tudo
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: false,
              value_area: 1000,
            },
          },
          color: {
            value: ["#ffffff", "#87CEFA", "#FFD700"], // Cores mais variadas
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.8,
            random: true, // Permite opacidade variável
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.3,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 4 }, // Tamanhos variados para simular estrelas
            random: true,
          },
          move: {
            enable: true,
            speed: 0.6, // Movimento mais lento e suave
            random: true,
            straight: false,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: false,
              mode: "grab",
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
});

export default ParticlesBackground;
