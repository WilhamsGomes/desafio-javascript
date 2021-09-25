const mensagemSecreta = [
    'Aprender',
    'não',
    'é',
    'o',
    'sobre',
    'que',
    'você',
    'consegue', //sabe
    'facilmente',//
    'na',  //
    'primeira', //
    'vez', //
    'mas',
    'sobre',
    'o',
    'que',
    'você',
    'pode',
    'descobrir',
    ' - 2015',
    'Chris',
    'Pine',
    'Aprenda',
    'JavaScript'
];

//Programação não é sobre o que você sabe, é sobre o que você pode descobrir. -2015, Chris Pine, Aprenda a programar.

mensagemSecreta.pop()
console.log(mensagemSecreta)

mensagemSecreta.push('a')
mensagemSecreta.push('programar')
console.log(mensagemSecreta)

mensagemSecreta[8] = 'certo' //
console.log(mensagemSecreta)

mensagemSecreta.shift();
console.log(mensagemSecreta)

mensagemSecreta.unshift('Programação')
console.log(mensagemSecreta)

mensagemSecreta.splice(7, 5, 'sabe')
console.log(mensagemSecreta)

mensagemSecreta.splice(3, 1, "sobre")
mensagemSecreta.splice(4, 1, "o")

mensagemSecreta.splice(7, 1, "sabe,")
mensagemSecreta.splice(8, 1, "é")

console.log(mensagemSecreta.join(" "))


