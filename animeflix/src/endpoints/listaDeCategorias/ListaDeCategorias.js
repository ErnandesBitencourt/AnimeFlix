import React, { useContext } from "react";
import { ContextoNovaCategoria } from "../../context";


export const ListaDeCategorias = () => {
const listNocaCategoria = useContext(ContextoNovaCategoria);


const categoriaCriadas = listNocaCategoria.novaCtg.map((categorias)=> {

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
                    <td>Editar em produção</td>
                    <td><button onClick={()=> listNocaCategoria.buttonDeleteCategoria(categorias.id)} >Remover</button></td>
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
