import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
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

  // const handleSeek = useCallback(
  //   (event: React.FormEvent<HTMLButtonElement>) => {
  //     event.preventDefault();
  //     player.current?.seekTo(5000, 'seconds');
  //     const playerYotube = player.current?.getInternalPlayer() as YoutubeTypes;
  //     playerYotube.playVideo();
  //   },
  //   [player],
  // );

  return (
    <>
      <Header>
        <ReactLogo height="" style={{ width: '50px' }} />
        <BottomText style={{ width: '100px' }} />
      </Header>
      <Container>
        <ContentContainer>
          <PlayerContainer>
            <ReactPlayer
              ref={player}
              controls
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              width="100%"
              height="100%"
            />
          </PlayerContainer>

          <NodeContainer>
            <ul>
              {Chapters.map(chapter => (
                <li>
                  <button type="button">
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
