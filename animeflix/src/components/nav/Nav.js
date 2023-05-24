import React from "react";
import { ButtonModificarPage} from "../buttons/Buttons";
import { useNavigate } from "react-router-dom";
import { homePage } from "../../routes/coordenador";

import AnimeFlixunscreen from "../../img/AnimeFlixunscreen.gif"
import { Div, Img, Span  } from "../nav/StyledNav";




export const Nav = ({nome}) => { 
    const navigate =  useNavigate();

    return (
        <Div>
            <Img  onClick={()=>homePage(navigate)}  src={AnimeFlixunscreen} alt="gif do logo da pagina"   />
            
            
            <Span><ButtonModificarPage name={nome} /></Span>
        </Div>

    )

}