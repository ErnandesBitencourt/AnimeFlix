import React from "react"
import { Nav } from "../components/nav/Nav";
import { Footer } from "../components/footer/Footer";
import { Main} from "../components/main/Main"
import {Header} from "../components/header/Header"




export  const HomePage = () => {


  return (
    <div >
      <Nav nome={"Novo Video"}/>
      <Header/>
    
      <Main/>
      <Footer/>
    </div>
  );
}

