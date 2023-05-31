import { styled } from "styled-components";



export const ContainerListaDeCategorias = styled.div`
    width: 100%;
    max-width: 100%;
    min-height: 320px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y:auto;
  


`;
export const Table =  styled.div`
    width: 100%;
    max-width: 95%;
    min-width:320px;
    height: auto;
    border: none;
    border-bottom: 2px solid ${props => props.theme.Themers.colorText};
    display: flex;  
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme.Themers.textAlternativ};
  
   


`;

export const Categorias =  styled.div`
    width: 100%;
    max-width: 95%;
    min-width:320px;
    height: 4em;
    display: flex;  
    justify-content: space-between;
    align-items: center;
    
    word-wrap: break-word;


`;

export const PNome= styled.div `
    width: 7em;
    height: 3em;
    border: none;
    border-bottom: 2px solid ${props => props.theme.Themers.colorText};
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 15px;
    word-break: break-word;
    color: ${props => props.theme.Themers.textAlternativ};
    font-weight: 400;
    
   
`

export const PDesc= styled.div `
    width: 11em;
    height: 3em;
    border: none;
    border-bottom: 2px solid ${props => props.theme.Themers.colorText};
    display: flex;
    align-items: center;
    justify-content: center;
    word-break: break-word;
    font-size: 15px;
    font-weight: 400;
    color: ${props => props.theme.Themers.textAlternativ};
`;

export const DivButton= styled.div `
    width: 16em;
    height: 3em;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;



export const Buttons = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
max-width: 100%;
height: 3em;
color: ${props => props.theme.Themers.textAlternativ}; 
background-color:${props => props.theme.Themers.colorText};
font-size: 14px;
padding: 1.8em;
box-sizing: border-box;
text-align: center;
cursor: pointer;
border: none;
font-weight: 700;


`;

