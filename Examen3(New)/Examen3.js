let AlumnosAdministracion = 0;
let AlumnosDerecho = 0;
let AlumnosMedicina = 0;
let AlumnosSistema = 0;
let EdadDeLaPersonaConMayorSalario = 0;
let PromedioAdministracion = 0;
let ContadorDeAdministracion = 0;
let DetenerCiclo = 0;
let SalarioMaximo = 0;

do {
    let Nombre = prompt("Ingrese Su Nombre: ");
    let Salario = parseInt(prompt("Ingrese Su Salario: "));
    let Edad = parseInt(prompt("Ingrese Su Edad: "));

    if (Salario > SalarioMaximo) {
        SalarioMaximo = Salario + SalarioMaximo;
        EdadDeLaPersonaConMayorSalario = Edad;
    }

    let Carrera = parseInt(prompt("Escoja su carrera: 1 Para Administracion | 2 Para derecho | 3 Para Medicina | 4 Para Sistemas"));

    switch (Carrera) {
        case 1:
            AlumnosAdministracion++;
            break

        case 2:
            AlumnosDerecho++;
            break

        case 3:
            AlumnosMedicina++;
            break

        case 4:
            AlumnosSistema++;
            break

        default:
            alert("Opcion incorrecta, porfavor escojer una de las disponibles.");
            break
    }

    if (Carrera == 1) {
        ContadorDeAdministracion++;
        PromedioAdministracion = Salario + PromedioAdministracion;
    }

    DetenerCiclo = parseInt(prompt("Desea Continuar? | 1 Para si | 2 Para no"));
} while (DetenerCiclo !== 2)

if (AlumnosAdministracion > AlumnosDerecho && AlumnosAdministracion > AlumnosMedicina && AlumnosAdministracion > AlumnosSistema) {
    alert(`La carrera con mas alumnos es la de administracion, contando con ${AlumnosAdministracion} Alumnos.`)
} else if (AlumnosDerecho > AlumnosAdministracion && AlumnosDerecho > AlumnosMedicina && AlumnosDerecho > AlumnosSistema) {
    alert(`La carrera con mas alumnos es la de derecho, contando con ${AlumnosDerecho} Alumnos.`);
} else if (AlumnosMedicina > AlumnosAdministracion && AlumnosMedicina > AlumnosDerecho && AlumnosMedicina > AlumnosSistema) {
    alert(`La carrera con mas alumnos es la de medicina, contando con ${AlumnosMedicina} Alumnos.`);
} else if (AlumnosSistema > AlumnosAdministracion && AlumnosSistema > AlumnosDerecho && AlumnosSistema > AlumnosMedicina) {
    alert(`La carrera con mas alumnos es la de sistemas, contando con ${AlumnosSistema} Alumnos.`);
} else {
    alert("Todas las carreras tienen el mismo numero de alumnos.");
}

alert(`La edad con la persona de mayor salario es de ${EdadDeLaPersonaConMayorSalario} Años.`);

alert(`El promedio de salario de los alumnos de administracion es de ${PromedioAdministracion / ContadorDeAdministracion}`);

