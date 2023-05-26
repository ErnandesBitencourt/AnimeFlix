import { styled } from "styled-components";


export const Inputss = styled.input`
    width: 100%;
    height: 4em;
    border: none;
    outline: 0;
    background: none;
    font-size: 16px;
    color: ${props => props.theme.Themers.colorText};
    border-bottom: 2px solid  ${props => props.theme.Themers.colorText};


    :focus {
         outline: 0;
         border: none;
         font-size: 16px;


        ::placeholder{
    color: ${props => props.theme.Themers.colorText};
 }


        }


`;

export const InputDesri = styled.textarea`
    width: 100%;
    height: 7em;
    background: none;
    border: none;
    border-bottom: solid 2px   ${props => props.theme.Themers.colorText};
    outline: 0;
    color: ${props => props.theme.Themers.colorText};
 

     :focus {
         outline: 0;
         border: none;
         font-size: 16px;
         
        }

`;