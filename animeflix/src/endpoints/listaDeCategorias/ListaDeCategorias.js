import React, { useContext } from "react";
import { ContextoNovaCategoria } from "../../context";
import { EditeCategoria } from "../editeCategoria/EditeCategoria";
import { Buttons, Categorias, ContainerListaDeCategorias, DivButton, PDesc, PNome, Table } from "./StyledListaDeCategorias";


export const ListaDeCategorias = () => {
const listNovaCategoria = useContext(ContextoNovaCategoria);


const categoriaCriadas = listNovaCategoria.novaCtg.map((categorias)=> {
   
    return (
               listNovaCategoria.editCategoria === categorias.id ? <EditeCategoria categorias={categorias.id} name={categorias.name} descricao={categorias.descricao} /> :
                <Categorias key={categorias.id} >
                    <PNome>{categorias.name}</PNome>
                    <PDesc>{categorias.descricao}</PDesc>
                   <DivButton>
                    <span><Buttons onClick={() =>listNovaCategoria.buttonEdita(categorias.id)}  >Editar</Buttons></span>
                     <span><Buttons onClick={()=> listNovaCategoria.buttonDeleteCategoria(categorias.id)} >Remover</Buttons></span>
                   </DivButton>
                </Categorias>
    )
}) ;


return (
    <ContainerListaDeCategorias>
       {categoriaCriadas.length > 0 ?  <Table >
                
                    <p>Nome</p>
                    <p>Descrição</p>
                    <p>Editar</p>
                    <tp>Remover</tp>
                     
         </Table> : ""}
         {categoriaCriadas}
       
    </ContainerListaDeCategorias> 

)
}
