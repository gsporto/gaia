import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: auto;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 500px;

  @media (max-width: 991.98px) {
    flex-direction: column;
    height: 100vh;
  }
`;

export const PlayerContainer = styled.div`
  flex: 3;
  background: rgb(25, 25, 28);
  padding: 10px;
  border-radius: 10px 0 0 10px;

  @media (max-width: 991.98px) {
    max-height: 300px;
    border-radius: 0;
  }
`;

export const NodeContainer = styled.aside`
  display: flex;
  flex: 1;
  padding: 10px;
  border-radius: 0 10px 10px 0;
  background: rgb(25, 25, 28);

  @media (max-width: 991.98px) {
    border-radius: 0;
  }

  ul {
    position: relative;
    margin: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    li {
      display: flex;
      list-style: none;
      position: relative;

      height: 100%;

      & + li {
        margin-top: 20px;
      }

      &:not(:first-child) {
        &:before {
          content: '';
          height: 100%;
          position: absolute;
          border: 1px solid #71c2ff;
          bottom: 50%;
          left: 4px;
        }
      }

      &:not(:last-child) {
        &:after {
          content: '';
          height: 100%;
          position: absolute;
          border: 1px solid #71c2ff;
          top: 50%;
          left: 4px;
        }
      }

      button {
        z-index: 2;
        position: relative;
        border-radius: 50%;
        height: 10px;
        width: 10px;
        margin-right: 30px;
        border-width: 0;
        align-self: center;

        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 20px;
          transform: translate(-50%, -50%);
          background: rgb(32, 32, 36);
          border-width: 2px;
          border-style: solid;
          border-color: #71c2ff;
          border-radius: 50%;
        }

        &::after {
          content: '';
          position: absolute;
          left: 0px;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgb(225, 225, 230);
        }
      }

      p {
        margin: auto;
      }
    }
  }
`;
