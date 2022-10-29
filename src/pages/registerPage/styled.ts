import styled from "styled-components";
import vector from "../../assets/img/Vector.png";

export const BodyConteirner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  background-color: var(--backgroundColor);

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

export const ConteinerForm = styled.form`
  padding: 2rem;
  z-index: 2;
  position: relative;
  background-color: var(--formColor);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 25%;
  gap: 1.5rem;


  @media screen and (max-width: 1100px) {
    width: 40%;
  }

  @media screen and (max-width: 768px) {
    width: 80%
  }
`;

export const ImgConteiner = styled.div`
  width: 30%;
  img {
    width: 100%;
  }

  @media screen and (max-width: 1100px) {
    width: 35%;
  }
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
