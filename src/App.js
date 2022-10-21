import React from "react";
import CardVideo from "./Componentes/CardVideo/CardVideo";
import "./styles.css";
import { GlobalStyle } from "./Componentes/GlobalStyle";
import { TopoPag, MeioPag, GeralPag } from "./Componentes/CardVideo/style";
import Dados from "./Componentes/Dados/Dados";
export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };
  const cnl = " DevKay";
  const yt = " youtube.com.br";
  const crs = " Programe enquanto eles dormem";
  return (
    <div>
      <GlobalStyle />
      <div className="tela-inteira">
        <TopoPag>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </TopoPag>

        <GeralPag>
          <MeioPag>
            <ul>
              <li>Início</li>
              <li>Em alta</li>
              <li>Inscrições</li>
              <hr />
              <li>Originais</li>
              <li>Histórico</li>
              <li>
                <Dados />{" "}
              </li>
              <li>
                <Dados canal={cnl} youtube={yt} curso={crs} />
              </li>
            </ul>
          </MeioPag>

          <section className="painel-de-videos">
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={(card1.titulo = "Venha programar")}
              textoAlternativo={card1.textoAlternativo}
            />
          </section>
        </GeralPag>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
