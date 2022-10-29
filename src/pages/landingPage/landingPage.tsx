//import hooks
import { Link } from "react-router-dom";
//import images
import logo from "../../assets/img/logo.png";
import world from "../../assets/svg/world.svg"
//import components
import { Conteiner, ConteinerButton, ImageConteiner } from "./styled";



export const LandingPage = () => {

  return (
    <Conteiner>
      <ConteinerButton>
        <img src={logo} />
        <p>Descubra seu próximo destino.</p>
        <Link to={"/register"}>Embarcar</Link>
        <div className="bottom"></div>
      </ConteinerButton>
      <ImageConteiner>
        <img src={world} />
      </ImageConteiner>
      <div className="vector"></div>
    </Conteiner>
  );
};
