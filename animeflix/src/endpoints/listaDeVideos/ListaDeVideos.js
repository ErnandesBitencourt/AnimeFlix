import React, { useContext } from "react";
import { ContextoNovaCategoria, ContextoNovoVideo } from "../../context";
import { BigPlayButton, ControlBar, PlayToggle, Player} from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css"
// import "../node_modules/video-react/dist/video-react.css"; // import css
export const ListaDeVideos = () => {
  
    const videosNovos = useContext(ContextoNovoVideo);
    const categoriasNovas = useContext(ContextoNovaCategoria);
    const listaDeVideosCriados = categoriasNovas.novaCtg.map((videos) => {
        const videosNovosPorcategoria = videosNovos.novoVideo.filter(videosN=> videosN.categoria === videos.name )
        return (
            <div>
                <main>
                    {videos.name}
                    <span>
                    {videosNovosPorcategoria.map((x)=> {
                        return (
                            <div key={x.id} >
                              <Player  
                                fluid={false}
                                width={350}
                                height={400}
                                poster= {x.linkImgVideo}
                              >
                                <source  src={x.linkVideo} ></source>
                                <ControlBar autoHide={false} disableDefaultControls={false}   >
                                <PlayToggle />
                                </ControlBar>
                                <BigPlayButton position="center" />
                              </Player>
                                <p>{x.titulos}</p>
                                <span>{x.descricao} </span>
                            </div>
                        )
                    })}
                </span>
                </main>   
            </div>  
        )
    })
    return (
        
           <div>{listaDeVideosCriados.length > 0 ? listaDeVideosCriados : " Nenhum video foi criado click no botão Novo Video e crie sua lista de animes favoritos. "} </div>
        

    )
}