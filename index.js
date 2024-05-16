import { moneyMask } from "./utils.js";
document.addEventListener('DOMContentLoaded', function () {
    let somaValorHora = 0;
    let horasTrabalhadas = document.querySelector('#horasTrabalhadas');
    let diasTrabalhados = document.querySelector('#diasTrabalhados');
    let salarioBase = document.querySelector('#salarioBase');

    let dominio = document.querySelector('#dominio');
    let hospedagemApp = document.querySelector('#hospedagemApp');
    let construcaoProjeto = document.querySelector('#construcaoProjeto');
    let certificadoDigital = document.querySelector('#certificadoDigital');
    let servidorCache = document.querySelector('#servidorCache');
    let hospedagemDatabase = document.querySelector('#hospedagemDatabase');
    let designProjeto = document.querySelector('#designProjeto');
    let servidorEmail = document.querySelector('#servidorEmail');
    let suporte = document.querySelector('#suporte');
    let atualizacoesApp = document.querySelector('#atualizacoesApp');

    let inputId = [
        'salarioBase'
        , 'dominio'
        , 'hospedagemApp'
        , 'construcaoProjeto'
        , 'certificadoDigital'
        , 'servidorCache'
        , 'hospedagemDatabase'
        , 'designProjeto'
        , 'servidorEmail'
        , 'suporte'
        , 'atualizacoesApp'
    ];

    document.querySelectorAll('#' + inputId.join(', #')).forEach(input => {
        input.value = '0,00';
        moneyMask(input);
    })

    function stringParaFloat(param) {
        param = param.replace('.', '').replace(',', '.')
        return parseFloat(param);
    }

    function validaTipoNumero(param) {
        return isNaN(param) ? 0 : param;
    }

    function calcularValorHora() {
        // debugger
        let valorHorasTrabalhadas = stringParaFloat(horasTrabalhadas.value);
        let valorDiasTrabalhados = stringParaFloat(diasTrabalhados.value);
        let valorSalarioBase = stringParaFloat(salarioBase.value);

        valorHorasTrabalhadas = validaTipoNumero(valorHorasTrabalhadas);
        valorDiasTrabalhados = validaTipoNumero(valorDiasTrabalhados);
        valorSalarioBase = validaTipoNumero(valorSalarioBase);

        somaValorHora = valorSalarioBase / (valorHorasTrabalhadas * valorDiasTrabalhados);
        
        document.querySelector('#resultado').innerHTML = `
            <p>Valor Hora: ${somaValorHora.toLocaleString('pt-BR', {currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
        `;

    }

    function calcularValorProjeto() {
        calcularValorHora();
        
        let valorDominio = stringParaFloat(dominio.value);
        let valoHospedagemApp = stringParaFloat(hospedagemApp.value);
        let valoConstrucaoProjeto = stringParaFloat(construcaoProjeto.value);
        let valoCertificadoDigital = stringParaFloat(certificadoDigital.value);
        let valoServidorCache = stringParaFloat(servidorCache.value);
        let valoHospedagemDatabase = stringParaFloat(hospedagemDatabase.value);
        let valoDesignProjeto = stringParaFloat(designProjeto.value);
        let valoServidorEmail = stringParaFloat(servidorEmail.value);
        let valoSuporte = stringParaFloat(suporte.value);
        let valoAtualizacoesApp = stringParaFloat(atualizacoesApp.value);
        let valorHorasTrabalhadas = stringParaFloat(horasTrabalhadas.value);
        let valorDiasTrabalhados = stringParaFloat(diasTrabalhados.value);
        
        
        valorDominio = validaTipoNumero(valorDominio);
        valoHospedagemApp = validaTipoNumero(valoHospedagemApp);
        valoConstrucaoProjeto = validaTipoNumero(valoConstrucaoProjeto);
        valoCertificadoDigital = validaTipoNumero(valoCertificadoDigital);
        valoServidorCache = validaTipoNumero(valoServidorCache);
        valoHospedagemDatabase = validaTipoNumero(valoHospedagemDatabase);
        valoDesignProjeto = validaTipoNumero(valoDesignProjeto);
        valoServidorEmail = validaTipoNumero(valoServidorEmail);
        valoSuporte = validaTipoNumero(valoSuporte);
        valoAtualizacoesApp = validaTipoNumero(valoAtualizacoesApp);
        valorHorasTrabalhadas = validaTipoNumero(valorHorasTrabalhadas);
        valorDiasTrabalhados = validaTipoNumero(valorDiasTrabalhados);

        let valorTotalProjeto = (somaValorHora * valorHorasTrabalhadas) * valorDiasTrabalhados;

        construcaoProjeto.value = valorTotalProjeto.toLocaleString('pt-BR', {currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2});

        let result =    valorDominio
                        + valoHospedagemApp
                        // + valoConstrucaoProjeto
                        + valoCertificadoDigital
                        + valoServidorCache
                        + valoHospedagemDatabase
                        + valoDesignProjeto
                        + valoServidorEmail
                        + valoSuporte
                        + valoAtualizacoesApp
                        + valorTotalProjeto;
        document.querySelector('#resultadoProjeto').innerHTML = `
            <p>Valor do Projeto: ${result.toLocaleString('pt-BR', {currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
        `;

    }

    // document.querySelector('#enviarDadosFreela').addEventListener('click', function(event) {
    //     event.preventDefault();
    //     calcularValorHora();
    // })
    document.querySelector('#calularValorProjeto').addEventListener('click', function(event) {
        event.preventDefault();
        calcularValorProjeto();
    })

})
