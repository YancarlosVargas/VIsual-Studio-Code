let Contador = 0;
let ContadorDeSexoFemenino = 0
let ContadorDeSexoMasculino = 0
let ContadorDeCasados = 0;
let ContadorDeSolteros = 0;
let Detener = 0;

if(Detener!==2){
    do {
        let Nombre = prompt(`Ingrese Su Nombre: `);
        let Sexo = parseInt(prompt("Seleccionar Sexo: 1 Para Masculino | 2: Para Femenino"));
        let EstadoCivil = parseInt(prompt("Seleccionar Su Estado Civil: 1 Para Casado | 2 Para Soltero"));
        Detener = parseInt(prompt("Desea Continuar encuestando? | 1 Para si | 2 Para No"));
    
        if (Sexo == "1") {
            ContadorDeSexoMasculino++;
        } else {
            ContadorDeSexoFemenino++;
        }
    
        if (EstadoCivil == "1") {
            ContadorDeCasados++;
        } else {
            ContadorDeSolteros++;
        }
    
        Contador++
    } while (Detener !== 2);
}


if (ContadorDeSexoFemenino == 0) {
    alert("No hubieron personas femeninas encuestadas.")
} else {
    alert(`El Numero de personas encuestadas femeninas fueron: ${ContadorDeSexoFemenino}`);

}

if (ContadorDeSexoMasculino == 0) {
    alert("No hubieron personas masculinos encuestadas.")
} else {
    alert(`El Numero de personas encuestadas masculinos fueron: ${ContadorDeSexoMasculino}`);

}

if (ContadorDeCasados == ContadorDeSolteros) {
    alert("El Numero de Casados y Solteros es el mismo.")
} else if (ContadorDeCasados > ContadorDeSolteros) {
    alert(`De las personas encuestadas la categoria con menos personas es Casados, con solamente ${ContadorDeCasados}`)
} else {
    alert(`De las personas encuestadas la categoria con menos personas es Solteros, con solamente ${ContadorDeSolteros}`)

}



