import React, { useContext } from "react";
import { ContextoNovaCategoria, ContextoNovoVideo } from "../../context";
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
        
           <div>{listaDeVideosCriados} </div>
        

    )
}