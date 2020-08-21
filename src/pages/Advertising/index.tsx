import React from 'react';
import { ReactComponent as ReactLogo } from '../../assets/logo.svg';

import { Container, ContentContainer, LogoContainer } from './styles';

interface YoutubeTypes {
  playVideo(): void;
}

const Dashboard: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <ReactLogo />
        <p>
          <span>M</span>inicurso de <span>I</span>nteligência <span>A</span>
          rtificial
        </p>
      </LogoContainer>

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
