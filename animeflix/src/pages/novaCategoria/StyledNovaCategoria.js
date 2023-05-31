import { styled } from "styled-components";

export const ContainerNovoCategoria = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
`;

export const MainCategoria = styled.main`
    width:100%;
    max-width: 85%;
    min-width: 320px;
    height: 37em;
    display: flex;
    justify-content: space-around;
    gap :1em;
    align-items: center;
    margin-top: 2em;

    @media only screen  and (max-width: 1300px){
        display: flex;
        flex-direction :column ;
        gap: 4em;
        height: auto;
    }
 
`;
export const Head = styled.header`
    width: 100%;
    height: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const FormularioCategoria = styled.form`
    width: 100%;
    max-width: 35%;
    min-width: 320px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    flex: 1 1 ;
    @media only screen  and (max-width: 1300px){
        gap: 2em;
    }

`;

export const Span = styled.span` 
  width: 100%;
  height: 3em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media only screen  and (max-width: 1300px){
        margin-top: 3em;
    }

`;

export const Section = styled.section`
            width: 100%;
            max-width: 40%;
            min-width: 320px;
            height: 100%;
            align-items: center;
           
`;
