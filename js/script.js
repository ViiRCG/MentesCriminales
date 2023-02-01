let ventana


const emerge=()=>{
    ventana=confirm ("¿Quieres saber más? REGÍSTRATE!")
    if(ventana){
        window.open("./pages/temporadas.html")
     }

}


setTimeout(emerge, 5000)


