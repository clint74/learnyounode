var values = process.argv;

var soma = 0;
for (var i=0; i<values.length; i++) {
	if (!isNaN(values[i])){
		soma = soma + parseInt(values[i]);
	}
}
console.log(soma);

