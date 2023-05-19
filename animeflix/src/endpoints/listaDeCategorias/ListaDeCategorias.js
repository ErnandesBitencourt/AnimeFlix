import React, { useContext } from "react";
import { ContextoNovaCategoria } from "../../context";
import { EditeCategoria } from "../editeCategoria/EditeCategoria";


export const ListaDeCategorias = () => {
const listNovaCategoria = useContext(ContextoNovaCategoria);


const categoriaCriadas = listNovaCategoria.novaCtg.map((categorias)=> {
   
    return (
               listNovaCategoria.editCategoria === categorias.id ? <EditeCategoria categorias={categorias.id} /> :
                <tr key={categorias.id} >
                    <td>{categorias.name}</td>
                    <td>{categorias.descricao}</td>
                    <td><button onClick={() =>listNovaCategoria.buttonEdita(categorias.id)}  >Editar</button></td>
                    <td><button onClick={()=> listNovaCategoria.buttonDeleteCategoria(categorias.id)} >Remover</button></td>
                </tr>
    )
}) ;


return (
    <div>
       {categoriaCriadas.length > 0 ?  <table >
                <tr>
                    <td>Nome</td>
                    <td>Descrição</td>
                    <td>Editar</td>
                    <td>Remover</td>
                </tr>
                {categoriaCriadas}
         </table> : ""}
       
    </div> 

)
}
