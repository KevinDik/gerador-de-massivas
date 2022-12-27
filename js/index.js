let _empresa = document.querySelector("#empresa");
let _eventualidade = document.querySelector("#evento");
let _cidade = document.querySelector("#cidade");
let _responsavel = document.querySelector("#setor");
let _hora_inicio = document.querySelector("#hora");
let _quantidade_clientes = document.querySelector("#quant_clientes");
let divPai = document.getElementsByClassName("response")[0];

function generateMassive() {
    /*Seletor empresa*/
    let rede = document.createElement('p');
    let empresa_value = document.createTextNode(`Empresa: ${_empresa.value}`);
    rede.appendChild(empresa_value);
    divPai.appendChild(rede);

    /*seletor evento*/
    let evento = document.createElement('p');
    let evento_value = document.createTextNode(`Evento ${_eventualidade}`)
    evento.appendChild(evento_value);
    divPai.appendChild(evento);

    /*Seletor cidade*/
    let cidade = document.createElement('p');
    let cidade_value = document.createTextNode(`Cidade: ${_cidade.value}`);
    cidade.appendChild(cidade_value);
    divPai.appendChild(cidade)

    /*seletor da hora*/
    let hora = document.createElement('p');
    let hora_value = document.createTextNode(`Hora do inicio: ${_hora_inicio.value}`);
    hora.appendChild(hora_value);
    divPai.appendChild(hora);

    let clientes = document.createElement('p');
    let clientes_value = document.createTextNode(`Quantidade de clientes: ${_quantidade_clientes}`);
    clientes.appendChild(clientes_value);
    divPai.appendChild(clientes);
}