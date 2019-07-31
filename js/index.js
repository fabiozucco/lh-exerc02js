var i = parseInt(prompt("Digite o valor de i:"));
var a = parseFloat(prompt("Digite o valor de a:"));
var b = parseFloat(prompt("Digite o valor de b:"));
var c = parseFloat(prompt("Digite o valor de c:"));
var higher = 0;
var middle = 0;
var lower = 0;

if (i === 1 || i === 2 || i === 3) {
}if (a > b && a > c && b < c) {
	higher = a;
	middle = c;
	lower = b;
}if (a > b && a > c && c < b) {
	higher = a;
	middle = b;
	lower = c;
}if (b > a && b > c && a < c) {
	higher = b;
	middle = c;
	lower = a;
}if (b > a && b > c && c < a) {
	higher = b;
	middle = a;
	lower = c;
}if (c > b && c > a && b < a) {
	higher = c;
	middle = a;
	lower = b;
}if (c > b && c > a && a < b) {
	higher = c;
	middle = b;
	lower = a;
}

if (i === 1){
	document.body.append("i:1 - Ordem Crescente: " + lower + ",  " + middle + " e  " + higher);	
}else if (i === 2){
	document.body.append("i:2 - Ordem Decrescente: " + higher + ",  " + middle + " e  " + lower);		
}else if (i === 3){
	document.body.append("i:3 - Ordem Crescente: " + middle + ",  " + higher + " e  " + lower);
}else{
	document.body.append("Número não encontrado!")
}