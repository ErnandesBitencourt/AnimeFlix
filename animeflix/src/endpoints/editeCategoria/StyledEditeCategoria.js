import { styled } from "styled-components";

export const ContainerEdite =  styled.div`
    width: 100%;
    max-width: 95%;
    min-width:320px;
    height: 4em;
    
    display: flex;  
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.Themers.textAlternativ};
  
    
  
`;

export const FormEdite=  styled.form`
    width: 100%;
    max-width: 100%;
    min-width:320px;
    height: 100%;
    display: flex;  
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme.Themers.textAlternativ};
   
  
    
`;

export const Span = styled.span`
       width: 7em;
     height: 3em;
     align-items: center;
     display: flex;
     justify-content: center;
     input{    
        color: ${props => props.theme.Themers.textAlternativ};
        font-weight: 100;
        width: 100%;
        height: 100%;
        text-align: left;
        font-size: 15px;
        font-family: 'Josefin Sans', sans-serif;
       
   
}
`;


export const Span1 = styled.span`
       width: 11em;
     height: 3em;
     align-items: center;
     display: flex;
     justify-content: center;
     
input{
    color: ${props => props.theme.Themers.textAlternativ};
    font-weight: 100;
     width: 100%;
     height: 100%;
    text-align: center;
    align-items:center ;
    font-size: 15px;
    font-family: 'Josefin Sans', sans-serif;


    
}
`;

export const ButtonsDiv =  styled.div`
    display: flex;
    width: 16em;
    height: 3em;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
   

`;

export const Button = styled.button`
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