import styled from "styled-components";

export const Conteiner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: var(--backgroundColor);
  justify-content: space-around;
  gap: 4rem;
  align-items: center;
`;

export const ConteinerButton = styled.div`
  width: 50%;
  height: 100%;
  padding: 1rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 2rem;
  font-family: var(--fontText);

  p {
    text-align: left;
    max-width: 90%;
    font-size: 6rem;
    font-weight: 400;
  }

  button {
    background-color: var(--buttonColor);
    padding: 1rem;
    border-radius: 8px;
    font-weight: 800;
    color: var(--buttonTextColor);
    font-size: 3.5rem;
    text-align: center;
    -webkit-box-shadow: 23px 19px 22px 7px var(--buttonBoxShadown);
    -moz-box-shadow: 23px 19px 22px 7px var(--buttonBoxShadown);
    box-shadow: 23px 19px 22px 7px var(--buttonBoxShadown);
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      color: var(--buttonTextColorHover);
      background-color: var(--buttonHover);
      -webkit-box-shadow: 23px 19px 22px 7px var(--buttonBoxShadownHover);
      -moz-box-shadow: 23px 19px 22px 7px var(--buttonBoxShadownHover);
      box-shadow: 23px 19px 22px 7px var(--buttonBoxShadownHover);
    }
  }

  img {
    display: none;
  }
  div {
    display: none;
  }

  @media screen and (max-width: 1300px) {
    p{
      font-size: 4.5rem;
    }
    button{
      font-size: 2.5rem;
    }
  }

  @media screen and (max-width: 1050px) {
    p{
      font-size: 3rem;
      max-width: 90%;
    }
    button{
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 900px) {
    padding-bottom: 2rem;
   

    p {
      max-width: 100%;
      font-size: 3rem;
    }
    button {
      font-size: 2rem;
    }

    button{
      position: relative;
      z-index: 2;
    }

    .bottom{
      display: block;
      width: 100vw;
      height: 40px;
      background-color: var(--divBackgroundColor);
      position: absolute;
      bottom: 0%;
      left: 0%;
      z-index: 1;
    }

    .top {
      border-bottom-left-radius: 8px;
      display: block;
      width: 60vw;
      height: 100px;
      background-color: var(--divBackgroundColor);
      position: absolute;
      top: 0%;
      right: 0%;
      z-index: 1;
    }

    img {
      position: relative;
      z-index: 2;
      display: block;
      width: 400px;
    }
    width: 80%;
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
`;

export const ImageConteiner = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
 

  .top {
    position: absolute;
    top: 0%;
    right: 0%;
    z-index: 1;
    border-bottom-left-radius: 16px;
    background-color: var(--divBackgroundColor);
    height: 320px;
    width: 35%;
  }

  .bottom {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    position: absolute;
    z-index: 1;
    bottom: 0%;
    height: 300px;
    min-width: 200px;
    max-width: 300px;
    width: 25%;
    right: 20%;
    background-color: var(--divBackgroundColor);
  }

  img {
    position: absolute;
    z-index: 2;
    width: 60%;
    min-width: 500px;
    max-width: 750px;
  }

  @media screen and (max-width: 1300px) {
    img {
      width: 540px;
    }

    .top {
      min-width: 200px;
      width: 30%;
      height: 300px;
      right: 0px;
    }

    .bottom {
      max-width: 150px;
      height: 350px;
    }
  }


  @media screen and (max-width: 900px) {
    display: none;
  }
`;
