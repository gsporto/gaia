import React, { useRef } from 'react';
import ReactPlayer from 'react-player';

import {
  Container,
  ContentContainer,
  NodeContainer,
  PlayerContainer,
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
            <li>
              <button type="button">&nbsp;</button>
              <p>Capitulo 1</p>
            </li>
            <li>
              <button type="button">&nbsp;</button>
              <p>Capitulo 3</p>
            </li>
            <li>
              <button type="button">&nbsp;</button>
              <p>Capitulo 3</p>
            </li>
            <li>
              <button type="button">&nbsp;</button>
              <p>Capitulo 4</p>
            </li>
          </ul>
        </NodeContainer>
      </ContentContainer>
    </Container>
  );
};

export default Dashboard;
