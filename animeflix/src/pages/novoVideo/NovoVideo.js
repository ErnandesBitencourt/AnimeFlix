import React, { useContext } from "react";
import { ContextoNovoVideo } from "../../context";
import { Nav } from "../../components/nav/Nav";
import { InputDescr, Inputs } from "../../components/inputs/Inputs";
import { ButtonEnviar, ButtonLimpar, ButtonModificarPage } from "../../components/buttons/Buttons";
import { Footer } from "../../components/footer/Footer";

export const NovoVideo = () => {
   
    const videoNovo = useContext(ContextoNovoVideo);
       
    return(
        <div>
            <Nav nome={"Voltar"}/>
            <head>
                <h1>Novo vídeo</h1>
            </head>
           <form onSubmit={videoNovo.buttonNovoVideo} >
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
          
                <InputDescr value={videoNovo.descricao}
                    onchange={videoNovo.onChange}
                    placeholder={"descricao"}
                    type={"text"} 
                    name={"descricao"}/>
                <Inputs/>
                
                <span>
                    <div>  
                        <ButtonEnviar  name={"Salvar"}/>
                        
                    </div>
                    <div>
                     <ButtonLimpar  clear= {videoNovo.clean}  name={"Limpar"} />  <ButtonModificarPage name={"Nova Categoria"} /> 
                    </div>
                </span>

           </form>

          

           <Footer/>
        </div>
    );

};