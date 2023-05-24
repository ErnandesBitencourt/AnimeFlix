
import React from "react"
import { RouterPages } from "./routes/Router";
import { GlobalStyle } from "./style/styleGlobal/StyledGlobal";
import { ThemeProvider } from "styled-components";
import { Themers } from "./style/colors/Themers";


function App() {

  return (
    <>
    <ThemeProvider   theme={{Themers}}>
       <GlobalStyle/>
       <RouterPages/>
    </ThemeProvider>
     
    </>
  )
    
 
}

export default App;

