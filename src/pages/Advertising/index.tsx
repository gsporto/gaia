import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiBook } from 'react-icons/fi';
import { ReactComponent as ReactLogo } from '../../assets/logo.svg';
import { ReactComponent as BottomText } from '../../assets/BottomText.svg';

import { Container, ContentContainer, LogoContainer } from './styles';

interface YoutubeTypes {
  playVideo(): void;
}

const Dashboard: React.FC = () => {
  const [label, setLabel] = useState<string>('Cadastrar-se');
  const handleSend = useCallback(() => {
    setLabel('Carregando');
    setTimeout(() => {
      setLabel('Cadastrado');
      setTimeout(() => {
        setLabel('Cadastrar-se');
      }, 1000);
    }, 2000);
  }, []);

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
          <button type="button" onClick={handleSend}>
            {label}
          </button>
        </div>
        <Link to="/dashboard">
          <button type="button">
            <FiBook /> Aulas
          </button>
        </Link>
      </ContentContainer>
    </Container>
  );
};

export default Dashboard;
