//import hooks
import { useNavigate } from "react-router-dom";
//import image
import travel from "../../assets/img/travel.png";
//import components
import { Conteiner, ImageConteiner, ConteinerButton } from "./styled";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Conteiner>
      <ConteinerButton>
        <div className="top"></div>
        <img src={travel} alt="vector" />
        <p>Descubra seu próximo destino!</p>
        <button onClick={() => navigate("/register")}>Embarca</button>
        <div className="bottom"></div>
      </ConteinerButton>
      <ImageConteiner>
        <img src={travel} alt="vector" />
        <div className="top"></div>
        <div className="bottom"></div>
      </ImageConteiner>
    </Conteiner>
  );
};
