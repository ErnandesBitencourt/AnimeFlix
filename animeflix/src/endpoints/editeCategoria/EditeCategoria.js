import React, { useContext } from "react";
import { ContextoNovaCategoria } from "../../context";
import { Inputs } from "../../components/inputs/Inputs";
import { ButtonEnviar } from "../../components/buttons/Buttons";
import { Button, ButtonsDiv, ContainerEdite, FormEdite, Span, Span1 } from "./StyledEditeCategoria";


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
        <ContainerEdite>
            
            <FormEdite onSubmit={categoriaNova.buttonSalvarEdicao}  >
                        <Span> <Inputs value={name} 
                            onchange={onChangeEdtCtgName} 
                            placeholder={"Nome"} 
                            type={"text"} name={"name"}
                            />
                        </Span>
                        <Span1>
                            <Inputs value={descricao} 
                                    onchange={onChangeEdtCtgName} 
                                    placeholder={"Descrição"} 
                                    type={"text"} name={"descricao"}
                        
                                />
                        </Span1>
                        <ButtonsDiv>
                            <span>
                                <ButtonEnviar name={"Salvar"} />       
                            </span>
                        
                            <span>
                                <Button onClick={()=> categoriaNova.buttonDeleteCategoria(categorias)} >Remover</Button>     
                            </span>

                        </ButtonsDiv>
                    
            </FormEdite>
        </ContainerEdite>
    )
}