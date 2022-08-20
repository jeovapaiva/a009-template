

 console.log("Teste!");

 console.log("Qual é seu nome?");
 const nome = prompt();
 const nomeMaiuscula = nome.toUpperCase();
 console.log("Qual é sua cor favorita?");
 const cor = prompt();
 console.log("Sua citação favorita:"); 
 const cit = prompt(""); 

const stringconcatenada = " O seu nome é " + nome +  " e " + cor + " é sua cor favorita, " + cit  + " é sua citação favorita."; 
console.log("string concatenada:", stringconcatenada); 

const templatestring = `A cor favorita de ${nome} é ${cor} e sua citação favorita é ${cit}`  
console.log("templatestring:", templatestring);

// olhar quantos caracteres tem o nome da pessoa.
console.log("Quantidade de caracteres:", nome.length); 

// checar se o nome da pessoa tem a letra "a".
const letra = nomeMaiuscula.includes("A");
console.log("seu nome tem a letra A? ", letra);     

