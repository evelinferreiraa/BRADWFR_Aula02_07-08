a = "Évelin";
b = new String("Évelin");
console.log(a.length); // length -> n° de letras
console.log(b);

/*

*STRING*

let nome = "Évelin"; 

Métodos de Manipulação:

Método 'includes' verifica se a letra digitada existe na STRING 
ex.: nome.includes("l"); 

Método 'startsWith' verifica se a letra digitada existe no INÍCIO 
ex.: nome.starstWith("É"); 

Método 'endsWith' verifica se a letra digitada existe no FINAL
ex.: nome.endsWith("n");

Método 'indexOf' verifica a posição da letra digitada
ex.: nome.indexOf("i");

Método 'replace' substitui as letras desejadas
ex.: nome.replace("e", "i");

Método 'replaceAll' substitui TODAS as letras desejas
ex.: nome.replaceAll("e", "a");

e muitos outros métodos...

*ARRAY*

let a = ['Évelin', 9, 13, 2];

Métodos de Manipulação:

Método 'a.unshift' adiciona elementos no início do ARRAY
ex.: a.unshift("e", 90, 100);

Método 'a.push' adiciona elementos no final do ARRAY
ex.: a.push(20, 12, "v");

Método 'a.splice' adiciona valores a partir de um indíce removendo ou nãoe elementos
ex.: a.splice(3, 0, 6000); // 3-> onde fará a inserção / 0 -> não remove / 6000 -> o que será inserido

ex2.: ex.: a.splice(3, 2, 45); // 3-> onde fará a inserção / 2 -> quantos itens serão removidos / 45 -> o que será inserido

Método 'a.indexOf' verifica a posição da letra digitada
ex.: a.indexOf(45);

Método para apagar o Array:
[]; -> vazio 
ou 
a.length(0);

*Estrutura de Objeto em JS*

let obj = {nome: 'Évelin', sobrenome: 'Ferreira', cidade: 'Mairiporã', estado: function estado(){return 'São Paulo'}};
obj // para visualizar

Método para adicionar objetos
ex.: obj.numero = [1, 2, 3, 4]; 


*/ 