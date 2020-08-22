import React from 'react';
import { ReactComponent as ReactLogo } from '../../assets/logo.svg';
import { ReactComponent as BottomText } from '../../assets/BottomText.svg';

import { Container, ContentContainer, LogoContainer } from './styles';

interface YoutubeTypes {
  playVideo(): void;
}

const Dashboard: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <ReactLogo />
        <BottomText style={{ width: '200px' }} />
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
