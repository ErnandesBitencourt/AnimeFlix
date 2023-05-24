import React from "react";
import { ListaDeVideos } from "../../endpoints/listaDeVideos/ListaDeVideos";

export const Main = () => { 
    return (
        <div> 
            <ListaDeVideos/>
            {/* <video preload="auto" autoplay="" src="https://rawcdn.githack.com/Pranay-mate/trek-website/598639d29b63522c3977e6bb24cfa2fac6b05845/src/data/vid-20190623-065838_L7nqjgDi.compressed.mp4" tabindex="-1"></video> */}
        </div>

    )
}