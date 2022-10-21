import styled from "styled-components";
import { BoxPaginaPrincipal } from "./style";
import Dados from "../Dados/Dados";
function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  const cnl = "DevKay";
  const yt = "Clique aqui";
  const crs = "Aprenda enquanto eles dormem";
  return (
    <BoxPaginaPrincipal
      className="box-pagina-principal"
      onClick={reproduzVideo}
    >
      {" "}
      <img src={props.image1} alt={props.textoAlternativo} />
      <Dados canal={cnl} youtube={yt} curso={crs} />
      <h4>{props.titulo}</h4>
    </BoxPaginaPrincipal>
  );
}

export default CardVideo;
