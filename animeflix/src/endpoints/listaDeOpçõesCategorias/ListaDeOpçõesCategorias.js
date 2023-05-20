import React, { useContext } from "react";
import { ContextoNovaCategoria, ContextoNovoVideo } from "../../context";


export const ListaDeOpçõesCategorias = () => { 
    const listNocaCategoria = useContext(ContextoNovaCategoria);
    const videoNovo = useContext(ContextoNovoVideo);
    return (
        <select onChange={videoNovo.onChange} required value={videoNovo.categoria}
            name={"categoria"} 
        >
            <option />
            {listNocaCategoria.novaCtg.map(item => {
                return <option key={item.id}>{item.name}</option>
            })}
        </select>
    
    );

};