///////////// desafios
function olaMundo(){
    console.log('Olá mundo!');
}
olaMundo();

function olaNome(nome){
    console.log(`Olá, ${nome}!`);
}
olaNome('Guilherme');

function dobro(numero){
    return parseInt(numero * 2);
}
console.log(dobro(10));

function media(n1, n2, n3){
    return parseInt((n1 + n2 + n3) / 3);
}
console.log(media(100,60,80));

function numeroMaior(n1, n2){
    if(n1 > n2){
        return n1;
    } else if(n1 == n2){
        return 'Os números são iguais'
    } else{
        return n2;
    }
}
console.log(numeroMaior(10,100));

function multiplicaNumero(numero){
    return numero * numero;
}
console.log(multiplicaNumero(100));
