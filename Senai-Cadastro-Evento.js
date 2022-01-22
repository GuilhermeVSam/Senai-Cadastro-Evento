const DataAtual = new Date();
var DataEvento = new Date(2022,05,25);

if (DataEvento > DataAtual) {
    console.log ("Data do Evento Valida!");
} else {
    console.log ("Data do Evento Invalida!");
}

const IdadePermitida = Number (18);
var IdadeDoUsuario = Number (24);

if (IdadeDoUsuario >= IdadePermitida) {
    console.log ("Aguarde...");
} else {
    console.log ("Somente Maiores de 18 Anos!");
}

var Participantes = Number (85);

while (Participantes < 100) {
    break;
}
if (Participantes > 100) {
    console.log("Desculpe, o Evento Atingiu a Capacidade Maxima de Participantes");
}

if(DataEvento > DataAtual && IdadeDoUsuario >= IdadePermitida && Participantes < 100){
    console.log("Seu Evento Foi Criado com Sucesso!");
} else {
    console.log("Erro. O Evento Nao Pode ser Criado.");
}