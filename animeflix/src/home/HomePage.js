import React from "react"
import { Nav } from "../components/nav/Nav";
import { Footer } from "../components/footer/Footer";
import { Main} from "../components/main/Main"
import {Header} from "../components/header/Header"
import { Container } from "./StyledHomePage";




export  const HomePage = () => {


  return (
    <Container >
      <Nav nome={"Novo Video"}/>
      <Header/>
      <Main/>
      <Footer/>
    </Container>
  );
}

