import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0px;

  width: 100%;
  height: 72px;
  padding: 0px 30px;

  z-index: 10;
  background: #212121;

  svg:first-child {
    margin-right: 10px;

    g {
      fill: #2962ff;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: auto;
  margin-top: 90px;
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
  background: #212121;
  padding: 10px;
  border-radius: 10px 0 0 10px;
  margin-right: 10px;

  @media (max-width: 991.98px) {
    margin-right: 0;
    max-height: 300px;
    border-radius: 0;
  }
`;

export const NodeContainer = styled.aside`
  display: flex;
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  background: #212121;

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
          border: 1px solid #2962ff;
          bottom: 50%;
          left: 4px;
        }
      }

      &:not(:last-child) {
        &:after {
          content: '';
          height: 100%;
          position: absolute;
          border: 1px solid #2962ff;
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
          background: #312e38;
          border-width: 2px;
          border-style: solid;
          border-color: #2962ff;
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
        margin: auto 0;
        font-size: 14px;
      }
    }
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex: 1;

  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  background: #212121;

  .accordion {
    flex: 1;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 2px;

    .accordion__item {
      & + .accordion__item {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
      }

      .accordion__button {
        background-color: #2962ff;
        color: #fff;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        text-align: left;
        border: none;

        &:hover {
          background-color: #2962ffa6;
        }

        &:before {
          display: inline-block;
          content: '';
          height: 10px;
          width: 10px;
          margin-right: 12px;
          border-bottom: 2px solid currentColor;
          border-right: 2px solid currentColor;
          transform: rotate(-45deg);
          transition: all 0.25s ease-in;
        }

        &[aria-expanded='true']::before,
        &[aria-selected='true']::before {
          transform: rotate(45deg);
        }
      }

      [hidden] {
        display: none;
      }

      .accordion__panel {
        padding: 20px;
        animation: fadein 0.5s ease-in;

        p {
          text-indent: 2rem;
          padding-bottom: 1rem;
        }
      }
    }
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
