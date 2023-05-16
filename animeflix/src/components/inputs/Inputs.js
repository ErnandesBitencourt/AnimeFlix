import React from "react"


export const Inputs = ({value,onchange,type,name,placeholder}) => {
    
    return(
        <input placeholder={placeholder} value={value} onChange={onchange} type={type} name={name} required />
    )
}
export const InputDescr = ({value,onchange,type,name,placeholder}) => {
   
    return(
        <input placeholder={placeholder}  value={value} onChange={onchange} type={type} name={name} required />
    )
}