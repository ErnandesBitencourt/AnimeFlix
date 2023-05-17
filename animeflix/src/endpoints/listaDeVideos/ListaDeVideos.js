import React, { useContext } from "react";
import { ContextoNovaCategoria, ContextoNovoVideo } from "../../context";


export const ListaDeVideos = () => {
    const videosNovos = useContext(ContextoNovoVideo);
    const categoriasNovas = useContext(ContextoNovaCategoria);
    const categoriasCriadas = categoriasNovas.novaCtg.map(a => a.name)
    
    const videosPorCategorias = videosNovos.novoVideo.filter(a =>a.categoria === categoriasCriadas)
    
    
    return (
        <>
           { console.log(videosPorCategorias)}
        </>

    )
}