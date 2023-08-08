// define as variáveis
let nome = prompt("Informe o seu nome: ");
let nota1 = Number(prompt("Digite a 1ª nota: "));
let nota2 = Number(prompt("Digite a 2ª nota: "));
let nota3 = Number(prompt("Digite a 3ª nota: "));

// identifica o elemento necessário para a variável
let ident = document.getElementById("id1");
let identNota1 = document.getElementById("n1");
let identNota2 = document.getElementById("n2");
let identNota3 = document.getElementById("n3");
let identMedia = document.getElementById("md1");

media = (nota1 + nota2 + nota3) / 3; // Cálculo da Média

// realiza o carregamento
ident.textContent = nome;
identNota1.textContent = nota1;
identNota2.textContent = nota2;
identNota3.textContent = nota3;
identMedia.textContent = media;

/*Outras opções de carregamento:
ident.innerHTML = nome;
ident.innerText = nome; */
