import { styled } from "styled-components";



export const Div = styled.div`
    width: 100%;
    max-width: 85%;
    min-width: 500px;
    height: 7em;
    min-height: 4em;
    display: flex;
    flex: 1  1;
    justify-content: space-between;
    align-items: center;
    border: 1px solid red;
    background-color: ${props => props.theme.Themers.backgroundColor};
    
`;

export const Img = styled.img`
    width: 9%;
    max-width: 7.5%;
    min-width:110px;
    height: 100%;
    min-height: 100%;
    background-color: ${props => props.theme.Themers.backgroundColor};
    cursor: pointer;
`;


 export const Span = styled.span `
    display: flex;
    flex: 1 , 1;
    justify-content: center;
    align-items: center;
    border: none;
    
    :hover { 
        background-color:  ${props => props.theme.Themers.textAlternativ};
        color: ${props => props.theme.Themers.colorText};
        font-weight: 700;
        transition : 1000ms;
    }
 `;




