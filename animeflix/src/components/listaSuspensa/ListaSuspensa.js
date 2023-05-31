import React from "react"
import { ContainerListaSuspensa, Select1 } from "./StyledListaSuspensa"
export const ListaSuspensa = ({ items,  value, onchange,placeholder}) => {
    return (
    
        <section  required placeholder={placeholder} value={value} onChange={onchange}>
            <option />
            {items}
        </section>
    
    )
}

