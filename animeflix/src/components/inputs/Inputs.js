import React from "react"
import { InputDesri, Inputss } from "./StyledInputs"


export const Inputs = ({value,onchange,type,name,placeholder}) => {
    
    return(
        <Inputss placeholder={placeholder} value={value} onChange={onchange} type={type} name={name} required />
    )
}
export const InputDescr = ({value,onchange,type,name,placeholder}) => {
   
    return(
        < InputDesri placeholder={placeholder}  value={value} onChange={onchange} type={type} name={name} required />
    )
}