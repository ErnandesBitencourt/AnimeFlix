import React, { useContext} from "react";
import { Nav } from "../../components/nav/Nav";
import { InputDescr, Inputs } from "../../components/inputs/Inputs";
import { ButtonEnviar, ButtonLimpar } from "../../components/buttons/Buttons";
import { Footer } from "../../components/footer/Footer";
import { ContextoNovaCategoria } from "../../context";
import { ListaDeCategorias } from "../../endpoints/listaDeCategorias/ListaDeCategorias";
import { ContainerNovoCategoria, FormularioCategoria, Head, MainCategoria, Section, Span } from "./StyledNovaCategoria";
export const NovaCategoria =  () => {
    const categoriaNova = useContext(ContextoNovaCategoria);
      return(
        <ContainerNovoCategoria>
            <Nav nome={"Voltar"}/>
            <MainCategoria>
                    
                <FormularioCategoria onSubmit={categoriaNova.buttonNovaCategoria}  >
                    <Head>
                        <h1>Nova categoria</h1>
                    </Head>
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
                    <Span>
                        <div><ButtonEnviar name={"Salvar"} /></div>
                        <div><ButtonLimpar clear= {categoriaNova.cleanCtg}  name={"Limpar"}  /></div> 
                    </Span>
                </FormularioCategoria>
                    <Section >
                        <ListaDeCategorias/>
                    </Section>
            </MainCategoria>
            <Footer/>
        </ContainerNovoCategoria>
    )
}