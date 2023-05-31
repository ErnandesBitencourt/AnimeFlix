import { styled } from "styled-components";

export const ContainerNovoVideo = styled.div`
    width: 100%;
    min-width: 320px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Main = styled.main`
    width:100%;
    max-width: 25%;
    min-width: 320px;
    height: 37em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3em;

`;
export const Header1 = styled.header`
    width: 100%;
    height: 4m;
    display: flex;
    justify-content: center;
    align-items: center;


`;


export const Formulario= styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

`;

export const Spanform = styled.span` 
  width: 100%;
   min-width: 320px;
  height: 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const Divbuttons = styled.div`
    width: 100%;
    max-width: 300px;
    min-width: 100px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    

`;

export const DivSelect = styled.div`

    width: 100%;
    height: 2.5em;
    align-items: end;
    select { 
        width:  100%;
        height: 100%;
        color: ${props => props.theme.Themers.textAlternativ};
        font-weight: 400;
        background-color:  ${props => props.theme.Themers.colorText};
        
      
    }
`