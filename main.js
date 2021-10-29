let numero1 = 100;
let numero2 = 100;

let myStyleMenssage = `
    color:#fff; 
    font-family: Arial;
    background: #2D882D;
    padding: 5px;
    border-radius: 8px;
`;
let myStyle = `
    color:#fff; 
    font-family: Arial;
    background: #407F7F;
    padding: 5px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
`;
let myStyleData = `
    color:#fff; 
    font-weight: bold; font-family: sans-serif;
    background: #669999;
    padding: 5px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
`;



console.group(`Datos a comparar`);
    console.log(`%cVariable numero1, Datos: ${numero1} Tipo de dato '${typeof(numero1)}'.`,myStyleMenssage);
    console.log(`%cVariable numero2, Datos: ${numero2} Tipo de dato '${typeof(numero2)}'.`,myStyleMenssage);
console.groupEnd();



console.log(`%cOperador Igualdad %c(${numero1} == ${numero2})`,myStyle,myStyleData, numero1 == numero2);
console.log(`%cOperador Identico %c(${numero1}, ${typeof(numero1)} === ${numero2}, ${typeof(numero2)})`,myStyle,myStyleData, numero1 === numero2);
console.log(`%cOperador Diferente %c(${numero1} != ${numero2})`,myStyle,myStyleData, numero1 != numero2);
console.log(`%cOperador No Identico %c(${numero1}, ${typeof(numero1)} !== ${numero2}, ${typeof(numero2)})`,myStyle,myStyleData, numero1 !== numero2);
console.log(`%cOperador Mayor %c(${numero1} > ${numero2})`,myStyle,myStyleData, numero1 > numero2);
console.log(`%cOperador Mayor Igual %c(${numero1} >= ${numero2})`,myStyle,myStyleData, numero1 >= numero2);
console.log(`%cOperador Menor %c(${numero1} < ${numero2})`,myStyle,myStyleData, numero1 < numero2);
console.log(`%cOperador Menor Igual%c(${numero1} <= ${numero2})`,myStyle,myStyleData, numero1 <= numero2);

