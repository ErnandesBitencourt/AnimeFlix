import React from "react"
export const ListaSuspensa = ({ items,  value, onchange,placeholder}) => {
    return (
    <div >
        <select required placeholder={placeholder} value={value} onChange={onchange}>
            <option />
            {items}
        </select>
    </div>)
}

