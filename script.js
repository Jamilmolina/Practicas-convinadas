const form = document.querySelector('#form');
const referencia = document.querySelector('#referencia');
const btnReferencia = document.querySelector('#btnreferencia');

function referencia1(){
    console.log(referencia.value);
} 


const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const input3 = document.querySelector('#calculo3');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit',sumarImputValues)

function sumarImputValues(event){
    event.preventDefault();
    const sumaImputs = input1.value + input2.value + input3.value;
    pResult.innerText = 'Resultado:' + sumaImputs;
}


const input4 = document.querySelector('#name');
const input5 = document.querySelector('#lastName');
const Result = document.querySelector('#result1');
const btnUnion = document.querySelector('#btnUnion');

form.addEventListener('submit',sumarImputValues1);

function sumarImputValues1(event){
    event.preventDefault();
    const sumaImputs1 = input4.value + input5.value;
    Result.innerText = 'Resultado:' + sumaImputs1;
}

