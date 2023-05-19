import React, { useContext } from "react";
import { ContextoNovaCategoria } from "../../context";
import { InputDescr, Inputs } from "../../components/inputs/Inputs";
import { ButtonEnviar } from "../../components/buttons/Buttons";


export const  EditeCategoria = ({categorias}) => {
    const categoriaNova = useContext(ContextoNovaCategoria);

   
    return (
        <div>
            
            <form onSubmit={categoriaNova.buttonSalvarEdicao}  >

                    <tr>
                        <td> <Inputs value={categoriaNova.name} 
                            onchange={categoriaNova.onChangeCtg} 
                            placeholder={"Nome"} 
                            type={"text"} name={"name"}
                            />
                        </td>
                        <td>
                            <InputDescr  value={categoriaNova.descricao} 
                                    onchange={categoriaNova.onChangeCtg} 
                                    placeholder={"Descrição"} 
                                    type={"text"} name={"descricao"}
                        
                                />
                        </td>
                        <td>
                        <span>
                            <ButtonEnviar name={"Salvar"} />       
                            </span>
                        </td>
                            
                        <td>
                            <span>
                            <button onClick={()=> categoriaNova.buttonDeleteCategoria(categorias)} >Remover</button>     
                            </span>

                        </td>
                    </tr>
            </form>
        </div>
    )
}