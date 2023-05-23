import React from "react";
import { useNavigate } from "react-router-dom";
import { novaCategoriaPage, novoVideoPage, voltarPage } from "../../routes/coordenador";
import { MpButton } from "./StyledButtons";


export const ButtonEnviar = ({name}) => {
    return (
        <button type="submit">
           {name}
        </button>
    )
}

export const ButtonLimpar = ({name,clear}) => {

    return (
        <button onClick={()=>clear()}>
            {name}
        </button>
    )
}

export const ButtonModificarPage = ({name}) => {
    const navigate = useNavigate();
    const modicarPages = () => {
        if (name === "Novo Video") {
           return novoVideoPage(navigate)
        }
        if (name === "Voltar") {
           return voltarPage(navigate)
        }
        if (name === "Nova Categoria") {
            return novaCategoriaPage(navigate)
         }
    }

    return (
       
        <MpButton   onClick={()=>modicarPages()  } >
           {name}
        </MpButton>
        
    )
}