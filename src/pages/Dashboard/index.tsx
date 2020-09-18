import React, { useCallback, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import { ReactComponent as ReactLogo } from '../../assets/logo.svg';
import { ReactComponent as BottomText } from '../../assets/BottomText.svg';

import Chapters from '../../chapters';

import {
  Container,
  ContentContainer,
  NodeContainer,
  PlayerContainer,
  Header,
  DescriptionContainer,
} from './styles';

interface YoutubeTypes {
  playVideo(): void;
}

const Dashboard: React.FC = () => {
  const player = useRef<ReactPlayer>(null);
  const [videoFilePath, setVideoFileURL] = useState<string>(
    'videos/introducao.mp4',
  );

  const history = useHistory();

  const handleGoback = useCallback(
    (event: React.FormEvent<HTMLButtonElement>) => {
      event.preventDefault();
      history.goBack();
    },
    [history],
  );

  const handleSeek = useCallback((link: string) => {
    setVideoFileURL(link);
  }, []);

  return (
    <>
      <Header>
        <button type="button" onClick={handleGoback}>
          <FiArrowLeft size={24} />
        </button>
        <div>
          <ReactLogo height="" style={{ width: '50px' }} />
          <BottomText style={{ width: '100px' }} />
        </div>
      </Header>
      <Container>
        <ContentContainer>
          <PlayerContainer>
            <ReactPlayer
              ref={player}
              controls
              url={videoFilePath}
              width="100%"
              height="100%"
            />
          </PlayerContainer>

          <NodeContainer>
            <ul>
              {Chapters.map(chapter => (
                <li>
                  <button
                    type="button"
                    onClick={() => handleSeek(chapter.path)}
                  >
                    <circle />
                  </button>
                  <p>{chapter.title}</p>
                </li>
              ))}
            </ul>
          </NodeContainer>
        </ContentContainer>
        <DescriptionContainer>
          <Accordion allowZeroExpanded>
            {Chapters.map(chapter => (
              <AccordionItem key={chapter.title}>
                <AccordionItemHeading>
                  <AccordionItemButton>{chapter.title}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel
                  dangerouslySetInnerHTML={{ __html: chapter.content }}
                />
              </AccordionItem>
            ))}
          </Accordion>
        </DescriptionContainer>
      </Container>
    </>
  );
};

export default Dashboard;
