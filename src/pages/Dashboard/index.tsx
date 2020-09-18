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
    'https://r4---sn-bg0eznll.c.drive.google.com/videoplayback?expire=1600478037&ei=FSNlX-SRJIbihga38q-oBw&ip=191.30.108.202&cp=QVRFUkVfV1BRSFhPOnZMZmlPZ1dOcFRtT1NHUXVlUjhMSnB6ZHJKUmtVUmxqZ2lCcExydmdNRW4&id=5f6379f794813ab9&itag=18&source=webdrive&requiressl=yes&mh=Go&mm=32&mn=sn-bg0eznll&ms=su&mv=m&mvi=4&pl=19&ttl=transient&susc=dr&driveid=1HF5hbubkwFnmXlpMxfoFiWriOqPmuqy0&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=83.684&lmt=1600453831001890&mt=1600463480&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRAIgIJy_Au9lw5jOFs3fSYAa6kJG0xdZbciS68yXRMFVRSYCIDV4y-FCsvtYugVxUgzhxkN3uwTEAtDuZS3T4qaGAhSH&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhALqrTOe4_atNMVnEJdlO-L1kHv_rMvnwrQliS-VshIerAiEAxDbNaXcCqq6M0h5Vc7t_k64VRX-4c1MrwUkI0PBlUtM=&cpn=qjVQioGTb7b6wy9n&c=WEB_EMBEDDED_PLAYER&cver=20200918',
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
