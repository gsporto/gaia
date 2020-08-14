import React, { useRef } from 'react';
import ReactPlayer from 'react-player';

import { Container, NodeContainer, PlayerContainer } from './styles';

interface YoutubeTypes {
  playVideo(): void;
}

const Dashboard: React.FC = () => {
  const player = useRef<ReactPlayer>(null);

  function handleSeek(event: React.FormEvent<HTMLButtonElement>): void {
    event.preventDefault();
    player.current?.seekTo(5000, 'seconds');
    const playerYotube = player.current?.getInternalPlayer() as YoutubeTypes;
    playerYotube.playVideo();
  }

  return (
    <Container>
      <PlayerContainer>
        <ReactPlayer
          ref={player}
          controls
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          width="100%"
          height="auto"
        />
      </PlayerContainer>

      <NodeContainer />
    </Container>
  );
};

export default Dashboard;
