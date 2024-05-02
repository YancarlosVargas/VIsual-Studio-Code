let ContadorDeSexoFemenino = 0
let ContadorDeSexoMasculino = 0
let ContadorDeCasados = 0;
let ContadorDeSolteros = 0;
let Detener = 0;

if (Detener !== 2) {
    do {
        let Nombre = prompt(`Ingrese Su Nombre: `);
        let Sexo = parseInt(prompt("Seleccionar Sexo: 1 Para Masculino | 2: Para Femenino"));
        let EstadoCivil = parseInt(prompt("Seleccionar Su Estado Civil: 1 Para Casado | 2 Para Soltero"));
        Detener = parseInt(prompt("Desea Continuar encuestando? | 1 Para si | 2 Para No"));
        (Sexo == "1" ? ContadorDeSexoMasculino++ : ContadorDeSexoFemenino++);
        (EstadoCivil == "1" ? ContadorDeCasados++ : ContadorDeSolteros++);
    } while (Detener !== 2);
}

(ContadorDeSexoFemenino == 0 ? alert("No hubieron personas femeninas encuestadas.") : alert(`El Numero de personas encuestadas femeninas fueron: ${ContadorDeSexoFemenino}`));

(ContadorDeSexoMasculino == 0 ? alert("No hubieron personas masculinos encuestadas.") : alert(`El Numero de personas encuestadas masculinos fueron: ${ContadorDeSexoMasculino}`));

if (ContadorDeCasados == ContadorDeSolteros) {
    alert("El Numero de Casados y Solteros es el mismo.")
} else if (ContadorDeCasados > ContadorDeSolteros) {
    alert(`De las personas encuestadas la categoria con menos personas son los Casados, con solamente: ${ContadorDeCasados} Personas.`)
} else {
    alert(`De las personas encuestadas la categoria con menos personas son los Solteros, con solamente ${ContadorDeSolteros} Personas.`)
}