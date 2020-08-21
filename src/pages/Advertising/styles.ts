import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1180px;
  margin: auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: auto;

  p {
    text-transform: uppercase;
  }

  svg {
    align-self: center;

    padding-bottom: 25px;
    width: 100px;
    height: auto;

    g {
      fill: #71c2ff;
    }
  }
`;

export const ContentContainer = styled.div`
  margin: auto;

  strong {
    font-size: 24px;
  }

  input {
    height: 50px;
    width: 350px;
    background: rgb(18, 18, 20);
    border-radius: 5px;
    border-width: 0px;
    padding-left: 10px;
  }
  button {
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: bold;
    height: 50px;
    text-transform: uppercase;
    background: #71c2ff;
    border-radius: 5px;
    border-width: 0px;
    transition: background 0.2s ease 0s, color 0.2s ease 0s;
    width: 220px;
  }
`;
