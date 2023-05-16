import React from "react";
import { ButtonModificarPage} from "../buttons/Buttons";
import { useNavigate } from "react-router-dom";
import { homePage } from "../../routes/coordenador";




export const Nav = ({nome}) => { 
    const navigate =  useNavigate();

    return (
        <div>
            <h1 onClick={()=>homePage(navigate)}>AnimeFlix</h1>
            <ButtonModificarPage name={nome} />
        </div>

    )

}