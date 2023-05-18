import React, { useContext } from "react";
import { ContextoNovaCategoria } from "../../context";


export const ListaDeCategorias = () => {
const listNovaCategoria = useContext(ContextoNovaCategoria);


const categoriaCriadas = listNovaCategoria.novaCtg.map((categorias)=> {

    return (
        <article key={categorias.id} >
            <table >
                <tr>
                    <td>Nome</td>
                    <td>Descrição</td>
                    <td>Editar</td>
                    <td>Remover</td>
                </tr>
                <tr>
                    <td>{categorias.name}</td>
                    <td>{categorias.descricao}</td>
                    <td><button  >Editar</button></td>
                    <td><button onClick={()=> listNovaCategoria.buttonDeleteCategoria(categorias.id)} >Remover</button></td>
                </tr>
               
            </table>
        </article>
    )
}) ;


return (
    <>
       {categoriaCriadas.length > 0 ? categoriaCriadas : "" }
    </>

)
}
