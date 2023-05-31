import React, { useContext } from "react";
import { ContextoNovoVideo } from "../../context";
import { Nav } from "../../components/nav/Nav";
import { InputDescr, Inputs } from "../../components/inputs/Inputs";
import { ButtonEnviar, ButtonLimpar, ButtonModificarPage } from "../../components/buttons/Buttons";
import { Footer } from "../../components/footer/Footer";
import {ListaDeOpçõesCategorias} from "../../endpoints/listaDeOpçõesCategorias/ListaDeOpçõesCategorias"
import { ContainerNovoVideo,  DivSelect,  Divbuttons,  Formulario, Header1, Main, Spanform } from "./StyledNovoVideo";

export const NovoVideo = () => {
   
    const videoNovo = useContext(ContextoNovoVideo);
       
    return(
        <ContainerNovoVideo >
            <Nav nome={"Voltar"}/>
            <Main>
                    <Header1>
                        <h1>Novo vídeo</h1>
                    </Header1>
                <Formulario onSubmit={videoNovo.buttonNovoVideo} >
                        <Inputs value={videoNovo.titulos}
                            onchange={videoNovo.onChange}
                            placeholder={"Titulo"}
                            type={"text"} name={"titulos"}
                        />
                        <Inputs value={videoNovo.linkVideo}
                            onchange={videoNovo.onChange} 
                            placeholder={"link do Video"} 
                            type={"text"} 
                            name={"linkVideo"} />
                        <Inputs value={videoNovo.linkImgVideo}
                            onchange={videoNovo.onChange}
                            placeholder={"link da imagem do video"}
                            type={"text"} 
                            name={"linkImgVideo"}  />

                        <DivSelect><ListaDeOpçõesCategorias/> </DivSelect>

                        <InputDescr value={videoNovo.descricao}
                            onchange={videoNovo.onChange}
                            placeholder={"descricao"}
                            type={"text"} 
                            name={"descricao"}/>
                        
                        <Spanform>
                            <div>  
                                <ButtonEnviar  name={"Salvar"}/>
                                
                            </div>
                            <Divbuttons>
                                <span>
                                    <ButtonLimpar  clear= {videoNovo.clean}  name={"Limpar"} /> 
                                </span>
                                <span>
                                    <ButtonModificarPage name={"Nova Categoria"} /> 
                                </span>
                            </Divbuttons>
                        </Spanform>

                </Formulario>

            </Main>

          

           <Footer/>
        </ContainerNovoVideo >
    );

};