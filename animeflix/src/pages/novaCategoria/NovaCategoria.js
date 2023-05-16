import React, { useContext} from "react";
import { Nav } from "../../components/nav/Nav";
import { InputDescr, Inputs } from "../../components/inputs/Inputs";
import { ButtonEnviar, ButtonLimpar } from "../../components/buttons/Buttons";
import { Footer } from "../../components/footer/Footer";
import { ContextoNovaCategoria } from "../../context";
import { ListaDeCategorias } from "../../endpoints/listaDeCategorias/ListaDeCategorias";



export const NovaCategoria =  () => {
    const categoriaNova = useContext(ContextoNovaCategoria);
      return(
        <div>
            <Nav nome={"Voltar"}/>
            <head>
                <h1>Nova categoria</h1>
            </head>
            <form onSubmit={categoriaNova.buttonNovaCategoria}  >
                <Inputs value={categoriaNova.name} 
                        onchange={categoriaNova.onChangeCtg} 
                        placeholder={"Nome"} 
                        type={"text"} name={"name"}
                    />
                <InputDescr  value={categoriaNova.descricao} 
                            onchange={categoriaNova.onChangeCtg} 
                            placeholder={"Descrição"} 
                            type={"text"} name={"descricao"}
                
                />
                <Inputs  value={categoriaNova.codigo}
                        onchange={categoriaNova.onChangeCtg} 
                        placeholder={"codigo de segurança"} 
                        type={"text"} name={"codigo"}
                    />
                <span>
                   <ButtonEnviar name={"Salvar"} />
                   <ButtonLimpar clear= {categoriaNova.cleanCtg}  name={"Limpar"}  /> 
                </span>
            </form>
            <section>
               <ListaDeCategorias/>
               
            </section>
            <Footer/>
        </div>
    )
}