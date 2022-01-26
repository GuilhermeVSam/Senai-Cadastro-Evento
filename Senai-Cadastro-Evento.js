const DataAtual = new Date();
let DataEvento = new Date(2022,05,25);

if (DataEvento > DataAtual) {                               //Verificar se a data do evento e posterior a data atual.
    console.log ("Data do Evento Valida!");
} else {
    console.log ("Data do Evento Invalida!");
}

const IdadePermitida = Number (18);
let IdadeDoUsuario = Number (24);

if (IdadeDoUsuario >= IdadePermitida) {                     //Verificar se o participante possui a idade minima para comparecer ao evento.
    console.log ("Aguarde...");
} else {
    console.log ("Somente Maiores de 18 Anos!");
}


let Participantes = ['Marcos', 'Joao', 'Felipe', 'Maria', 'Pedro'];
let QuantidadeParticipantes = Participantes.length;
let inicio = 0

if (QuantidadeParticipantes < 100) {                                  //Verificar se o evento ainda possui capacidade para novos participantes.
    console.log ("Os participantes do evento são: ");
    do {
        console.log(Participantes[inicio]);
        inicio++;
    } while (inicio < QuantidadeParticipantes);
}
else{
    Participantes++;
    console.log("Desculpe, o Evento Atingiu a Capacidade Maxima de Participantes");
}

if(DataEvento > DataAtual && IdadeDoUsuario >= IdadePermitida && QuantidadeParticipantes <= 100){         //Verificar se todos os requisitos foram atingidos + confirmacao da criacao do evento.
    console.log("Seu Evento Foi Criado com Sucesso!");
} else {
    console.log("Erro. O Evento Nao Pode ser Criado.");
}