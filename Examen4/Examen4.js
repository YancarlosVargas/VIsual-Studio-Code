let Detener = 0;

do{
    let Nombre = prompt ("Ingrese Su Nombre: ");
    let Edad = parseInt(prompt("Ingrese Edad: "));

    if(Edad>=0 && Edad<11){
        alert(`Su nombre es: ${Nombre}` + ` Y su calificacion es de: Niño`);
    }else if (Edad>=11 && Edad<19){
        alert(`Su nombre es: ${Nombre}` + ` Y su calificacion es de: Adolescente`);
    }else if (Edad>=19 && Edad<36){
        alert(`Su nombre es: ${Nombre}` + ` Y su calificacion es de: Adulto`);
    }else if(Edad>=36 && Edad<61){
        alert(`Su nombre es: ${Nombre}` + ` Y su calificacion es de: Maduro`);
    }else{
        alert(`Su nombre es: ${Nombre}` + ` Y su calificacion es de: Anciano`);
    }

    Detener = parseInt(prompt("Desea Continuar? | 1 Para Si | 2 Para No"));

}while(Detener !== 2)