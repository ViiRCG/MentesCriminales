/**Jorge, perdona por la calidad de algunas fotos, que ya no me daba tiempo a andar buscando otras mejores. :,) */

let img__big=document.getElementById("img__big");
let galery=document.getElementById("galery");
let imagenes=document.querySelectorAll(".img__little");
let fondo__texts=document.getElementById("fondo__texts");

/*******INFORMACIÓN SOBRE LA FOTO SELECCIONADA *************/
let aaron="</h2><p class='fondo__text'>En los primeros episodios nace su hijo. La serie intenta mostrar su vida familiar y como equilibra el trabajo y su familia, aparecen esporádicamente su esposa y su hermana. Ayudó a Reid en su calificación de armas de fuego. Se separa de su esposa Haley en la tercera temporada por tener como prioridad su trabajo sobre su familia. Pero antes de esto le ofrecen un cambio de departamento a Crímenes financieros (Strauss), el cual no acepta por quedarse en la UAC.</p>"

let emily="</h2><p class='fondo__text'>Interpretada por la actriz Paget Brewster. Hija de un diplomático de carrera, se graduó de Yale y ha estado trabajando para el FBI durante diez años, principalmente en Oriente Medio. Consigue el puesto en la Unidad a pesar de que no estaban solicitando personal tras la reciente partida de Elle Greenway. Dado que desde pequeña viajó con sus padres en misiones diplomáticas, domina varios idiomas con relativa fluidez, entre ellos el árabe, el italiano, el ruso y el castellano. </p>";


let spencer="</h2><p class='fondo__text'>Interpretado por el actor Matthew Gray Gubler. Se graduó en secundaria a los doce años y se fue al MIT a los trece años. Obtuvo tres doctorados en Matemáticas, Química e Ingeniería a la edad de veintiuno. Además, es licenciado en Psicología, Sociología y Criminología. Tiene un cociente intelectual de 187, memoria eidética, y puede leer 20.000 palabras por minuto. Posee un miedo atroz a todos los patógenos en general y presenta indicios a la esquizofrenia y al Síndrome de Asperger.</p>";

let jenni="</h2><p class='fondo__text'>Interpretada por la actriz canadiense A. J. Cook. Desempeña labores de relaciones públicas de la Unidad de Análisis de Conducta. Es el enlace del equipo de Hotch con los medios de comunicación y agencias locales de policía. En la segunda temporada, conoce a Will LaMontagne Jr, con quien empieza una relación y tiene un hijo en la cuarta temporada (Henry), del cual Spencer es el padrino y Penelope la madrina.</p>";

let penelope="</h2><p class='fondo__text'>Interpretada por la actriz estadounidense Kirsten Vangsness. Es la encargada de la oficina de tecnología audiovisual del equipo de la BAU (Unidad de Análisis de Conducta), su despacho se encuentra en Quántico, Virginia, y en casi todos los episodios contacta solo por teléfono o webcam con los agentes. Su puesto es fundamental, siendo quien mantiene las bases de datos y edita los vídeos y los archivos de audio con los que deben trabajar. Mantiene un juego de coqueteos continuo con Derek Morgan.  </p>";


let rossi="</h2><p class='fondo__text'>Interpretado por el actor Joe Mantegna. Fue uno de los fundadores de la UAC y volvió tras 10 años retirado para resolver 'asuntos pendientes' (era uno de sus primeros casos, el cual había quedado sin resolver). Ha tenido 3 esposas. Fue uno de los primeros en iniciar con la UAC, junto con el agente Giddeon. Una parte muy importante de este personaje es que David suele intentar compensar a las víctimas de sus casos, sobre todo en aquellos casos que se los toma como personales. </p>";

let strauss="</h2><p class='fondo__text'>Está a cargo de distintos departamentos, entre ellos la UAC. En las primeras temporadas muestra una clara postura de tener algo en contra de Hotch. Ella fue la que llevó a Emily a la UAC con el fin de vigilar a Hotch y dar un testimonio que pudiera quitarlo. Suspende a Hotch por un tiempo y ella toma su lugar como jefa de unidad. Al encontrarse en el campo las cosas cambian y empieza a notar lo valioso del trabajo en equipo. Se muestra arrogante y no acepta comentarios hacia ella, carece del sentido de humor.</p>";

let derek="</h2><p class='fondo__text'>Interpretado por el actor estadounidense Shemar Moore. Egresado de Northwestern University gracias a una beca deportiva, es cinturón negro de judo e instructor de defensa personal. Anteriormente se desempeñó como miembro del escuadrón antibombas de la policía de Chicago. Es experto en crímenes obsesivos, se divierte molestando a Reid gastándole todo tipo de bromas a costa de su genio o en situaciones que son incómodas para él, pero aun así lo protege y orienta como un hermano mayor. </p>";


const aleatorio=()=>{
    
    let pos= Math.floor(Math.random()*imagenes.length)
    let imagen=imagenes[pos].src
    
    img__big.src=imagen
    
    for(let i=0; i<imagenes.length; i++){
        let nombre=imagen.substring(imagen.lastIndexOf("/") + 1, imagen.lastIndexOf(".")).replace(/%20/g, " ");
        
        if(imagenes[i]=nombre){
            switch(nombre){
                case "Aaron Hotchner":
                    fondo__texts.innerHTML="<h2 class='fondo__title fondo__title-text' id='fondo__text'>"+nombre+aaron;
                    break;

                case "Emily Prentiss":
                    fondo__texts.innerHTML="<h2 class='fondo__title fondo__title-text' id='fondo__text'>"+nombre+emily;
                    break;

                case "Spencer Reed":
                    fondo__texts.innerHTML="<h2 class='fondo__title fondo__title-text' id='fondo__text'>"+nombre+spencer;
                    break;

                case "Jennifer Jareau":
                    fondo__texts.innerHTML="<h2 class='fondo__title fondo__title-text' id='fondo__text'>"+nombre+jenni;
                    break;

                case "Penelope Garcia":
                    fondo__texts.innerHTML="<h2 class='fondo__title fondo__title-text' id='fondo__text'>"+nombre+penelope;
                    break;

                case "David Rossi":
                    fondo__texts.innerHTML="<h2 class='fondo__title fondo__title-text' id='fondo__text'>"+nombre+rossi;
                break;

                case "Erin Strauss":
                    fondo__texts.innerHTML="<h2 class='fondo__title fondo__title-text' id='fondo__text'>"+nombre+strauss;
                break;
                
                case "Derek Morgan":
                    fondo__texts.innerHTML="<h2 class='fondo__title fondo__title-text' id='fondo__text'>"+nombre+derek;
                break;

            }
        }


    }
}

const seleccionado=(event)=>{
    let elegido=event.target

    if(elegido.src!=img__big.src)
    img__big.src=elegido.src
    

    for(let i=0; i<imagenes.length; i++){
        let nombre=elegido.src.substring(elegido.src.lastIndexOf("/") + 1, elegido.src.lastIndexOf(".")).replace(/%20/g, " ");
    
        if(imagenes[i]=nombre){
        
            switch(nombre){
            
            case "Aaron Hotchner":
                fondo__texts.innerHTML="<h2 class='fondo__title fondo__title-text' id='fondo__text'>"+nombre+aaron;
                break;

            case "Emily Prentiss":
                fondo__texts.innerHTML="<h2 class='fondo__title fondo__title-text' id='fondo__text'>"+nombre+emily;
                break;

            case "Spencer Reed":
                fondo__texts.innerHTML="<h2 class='fondo__title fondo__title-text' id='fondo__text'>"+nombre+spencer;
                break;

            case "Jennifer Jareau":
                fondo__texts.innerHTML="<h2 class='fondo__title fondo__title-text' id='fondo__text'>"+nombre+jenni;
                break;

            case "Penelope Garcia":
                fondo__texts.innerHTML="<h2 class='fondo__title fondo__title-text' id='fondo__text'>"+nombre+penelope;
                break;

            case "David Rossi":
                fondo__texts.innerHTML="<h2 class='fondo__title fondo__title-text' id='fondo__text'>"+nombre+rossi;
            break;

            case "Erin Strauss":
                fondo__texts.innerHTML="<h2 class='fondo__title fondo__title-text' id='fondo__text'>"+nombre+strauss;
            break;
            
            case "Derek Morgan":
                fondo__texts.innerHTML="<h2 class='fondo__title fondo__title-text' id='fondo__text'>"+nombre+derek;
            break;

        }
    }
}
}



/********LISTENERS **********/
document.addEventListener("DOMContentLoaded", aleatorio);
galery.addEventListener("click", seleccionado);



/**********No será el código más óptimo del mundo, pero hace lo que se le pide :)***************/


