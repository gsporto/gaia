import React from 'react';
import logo from '../../assets/logo.png';

import { Container, ContentContainer } from './styles';

interface YoutubeTypes {
  playVideo(): void;
}

const Dashboard: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={logo} alt="" />
        <p>Minicurso de Inteligência Artificial</p>
      </div>

      <ContentContainer>
        <strong>Cadastre-se e receba noticias sobre nosso evento. </strong>
        <div>
          <input type="text" placeholder="Seu Email" />
          <button type="button">Cadastrar-se</button>
        </div>
      </ContentContainer>
    </Container>
  );
};

export default Dashboard;
