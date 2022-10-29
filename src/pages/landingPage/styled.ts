import styled from "styled-components";
import vector from "../../assets/img/Vector.png";

export const Conteiner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: var(--backgroundColor);
  justify-content: center;
  gap: 4rem;
  align-items: center;

  .vector {
    width: 70%;
    height: 70%;
    position: absolute;
    top: 0%;
    left: 0%;
    background-image: url(${vector});
    z-index: 0;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export const ConteinerButton = styled.div`
  padding: 3rem;
  max-width: 30%;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  z-index: 2;
  gap: 2rem;
  font-family: var(--fontText);
  border-radius: 8px;

  p {
    text-align: left;
    max-width: 90%;
    font-size: 3.5rem;
    font-weight: 400;
  }

  img {
    width: 150px;
    max-width: 150px;
  }

  a {
    padding: 0.5rem;
    background-color: var(--buttonColor);
    border-radius: 16px;
    color: white;
    font-size: 2rem;
    padding: 1rem 4rem;

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media screen and (max-width: 1350px) {
    p {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 1050px) {
    p {
      font-size: 2.5rem;
    }
    img {
      width: 120px;
    }
    a {
      padding: 1rem 1.5rem;
    }
  }

  @media screen and (max-width: 1000px) {
  }

  @media screen and (max-width: 500px) {
    img {
      width: 300px;
    }
    p {
      max-width: 100%;
      font-size: 2rem;
    }
    button {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 680px) {
    max-width: 80%;
    width: 80%;

    p {
    }
  }
`;

export const ImageConteiner = styled.div`
  img {
    position: relative;
    z-index: 2;
  }
  @media screen and (max-width: 1350px) {
    img {
      width: 600px;
    }
  }

  @media screen and (max-width: 1050px) {
    img {
      width: 400px;
    }
  }

  @media screen and (max-width: 680px) {
    display: none;
  }
`;
