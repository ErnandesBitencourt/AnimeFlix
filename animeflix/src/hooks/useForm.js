import  { useState } from "react";


export const useForm= (estadoinicial) => {
    const[form, setForm] = useState(estadoinicial);
    const onChange = (event) => {
        const {name,value} = event.target
        setForm({...form,[name]:value})
    }
    const clean = () => {
       setForm(estadoinicial)
    }
    return[form, onChange ,clean ]
};