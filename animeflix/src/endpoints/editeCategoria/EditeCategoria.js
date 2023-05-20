import React, { useContext } from "react";
import { ContextoNovaCategoria } from "../../context";
import { InputDescr, Inputs } from "../../components/inputs/Inputs";
import { ButtonEnviar } from "../../components/buttons/Buttons";


export const  EditeCategoria = ({categorias,name,descricao}) => {
    const categoriaNova = useContext(ContextoNovaCategoria);
    const onChangeEdtCtgName = (event,) => {
        const {name,value} = event.target
        const categoriaEditada = categoriaNova.novaCtg.map((lista)=> {
           return lista.id === categorias? {...lista, [name]:value} : lista
        })
        categoriaNova.setNovaCtg(categoriaEditada)
    };


   
   
    return (
        <div>
            
            <form onSubmit={categoriaNova.buttonSalvarEdicao}  >

                    <tr>
                        <td> <Inputs value={name} 
                            onchange={onChangeEdtCtgName} 
                            placeholder={"Nome"} 
                            type={"text"} name={"name"}
                            />
                        </td>
                        <td>
                            <InputDescr  value={descricao} 
                                    onchange={onChangeEdtCtgName} 
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