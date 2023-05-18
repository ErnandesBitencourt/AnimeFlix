import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../home/HomePage";
import { NovoVideo } from "../pages/novoVideo/NovoVideo";
import { NovaCategoria } from "../pages/novaCategoria/NovaCategoria";
import { useForm } from "../hooks/useForm";
import { useFormNovaCtg } from "../hooks/useFormNovaCtg";
import { ContextoNovaCategoria, ContextoNovoVideo } from "../context";
import {v4 as uuidv4} from "uuid"

export const RouterPages = () => {
    const[form, onChange , clean] = useForm({id:"",titulos:"" , linkVideo:"",linkImgVideo:"",categoria:"", descricao:""});
    const[formCtg, onChangeCtg,cleanCtg] = useFormNovaCtg({id:"",name:"",descricao:"", codigo:""})
    const [novoVideo , setNovoVideo] = useState([]);
    const [novaCtg,setNovaCtg] = useState([]);
    const buttonNovoVideo = (event) => {
        event.preventDefault()
        setNovoVideo([...novoVideo,{id:form.id=uuidv4(),titulos:form.titulos,linkVideo:form.linkVideo, linkImgVideo:form.linkImgVideo, categoria:form.categoria,descricao:form.descricao}]);
      return  alert("Video Criado com sucesso!")
    };
  //////////---------Nova categoria ----------------///////////////
  const buttonNovaCategoria = (event) => {
    event.preventDefault()
   if(novaCtg){
    setNovaCtg([...novaCtg,{id:formCtg.id=uuidv4(),name:formCtg.name,descricao:formCtg.descricao,codigo:formCtg.codigo}])
    return  alert("Categoria Criado com sucesso!")
   }
   
  };
 
  const buttonDeleteCategoria= (id) => {
      setNovaCtg(novaCtg.filter(categoria => categoria.id !== id));
    }
    return(
      
        <ContextoNovoVideo.Provider value={{
          id:form.id, titulos:form.titulos, linkVideo:form.linkVideo, linkImgVideo:form.linkImgVideo , descricao:form.descricao ,novoVideo:novoVideo, buttonNovoVideo: buttonNovoVideo, onChange:onChange, clean:clean, categoria:form.categoria 
          }}>
          <ContextoNovaCategoria.Provider value={{
            id:formCtg.id, name:formCtg.name, descricao:formCtg.descricao, codigo:formCtg.cotigo ,buttonNovaCategoria:buttonNovaCategoria, onChangeCtg:onChangeCtg, cleanCtg:cleanCtg, novaCtg:novaCtg,buttonDeleteCategoria:buttonDeleteCategoria
            }}>   
              <BrowserRouter>
                <Routes>
                  <Route index element = {<HomePage/>} />
                  <Route path="/novovideo" element={<NovoVideo/> } />
                  <Route path="/novacategoria" element={<NovaCategoria/> } />
                  <Route path="/*" element = { <div><h1>Pagina não encontrada</h1></div>} />
                </Routes>
              </BrowserRouter>
          </ContextoNovaCategoria.Provider>
        </ContextoNovoVideo.Provider>
        
    )
}