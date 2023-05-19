import  { useState } from "react";




export const useFormNovaCtg = (estadoinicial) => {
    const[formCtg, setformCtg] = useState(estadoinicial);
    const onChangeCtg = (event) => {
        const {name,value} = event.target
        setformCtg({...formCtg,[name]:value})
    }
    const cleanCtg = () => {
       return setformCtg(estadoinicial)
    }
    return[formCtg, onChangeCtg,cleanCtg ]
}