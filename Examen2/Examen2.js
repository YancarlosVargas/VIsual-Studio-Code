const ValorA = parseInt(prompt ("Ingresar Valor A: "));
const ValorB = parseInt(prompt ("Ingresar Valor B: "));

if(ValorA == ValorB){
alert("Estas Ingresando El Mismo Numero!");
}else if(ValorA>ValorB){
    alert(`De los numeros ingresados, el numero ${ValorA} es mayor`);
}else{
    alert(`De los numeros ingresados, el numero ${ValorB} es mayor`);
}


