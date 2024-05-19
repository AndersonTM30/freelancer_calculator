import { moneyMask } from "./utils.js";
document.addEventListener('DOMContentLoaded', function () {
    let somaValorHora = 0;
    let horasTrabalhadas = document.querySelector('#horasTrabalhadas');
    let diasTrabalhados = document.querySelector('#diasTrabalhados');
    let salarioBase = document.querySelector('#salarioBase');

    let dominio = document.querySelector('#dominio');
    let hospedagemApp = document.querySelector('#hospedagemApp');
    // let construcaoProjeto = document.querySelector('#construcaoProjeto');
    let certificadoDigital = document.querySelector('#certificadoDigital');
    let servidorCache = document.querySelector('#servidorCache');
    let hospedagemDatabase = document.querySelector('#hospedagemDatabase');
    let designProjeto = document.querySelector('#designProjeto');
    let servidorEmail = document.querySelector('#servidorEmail');
    let suporte = document.querySelector('#suporte');
    let atualizacoesApp = document.querySelector('#atualizacoesApp');

    diasTrabalhados.value = 0;

    horasTrabalhadas.addEventListener('input', function() {
        calcularValorProjeto()
    });

    diasTrabalhados.addEventListener('input', function() {
        calcularValorProjeto()
    });

    let inputId = [
        'salarioBase'
        , 'horasTrabalhadas'
        , 'dominio'
        , 'hospedagemApp'
        // , 'construcaoProjeto'
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
        input.addEventListener('input', function() {
            calcularValorProjeto();
        })
    })

    document.querySelector('#darkmode-toggle').addEventListener('click', function() {
        // const currentTheme = document.body.className = '';

        document.body.classList.toggle('dark-theme');
        // if(currentTheme == 'dark-theme') {
        //     document.body.classList.add('light-theme');
        // } else {
        // }
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
        // let valorHorasTrabalhadas = stringParaFloat(horasTrabalhadas.value);
        // let valorDiasTrabalhados = stringParaFloat(diasTrabalhados.value);
        let valorSalarioBase = stringParaFloat(salarioBase.value);

        // valorHorasTrabalhadas = validaTipoNumero(valorHorasTrabalhadas);
        // valorDiasTrabalhados = validaTipoNumero(valorDiasTrabalhados);
        valorSalarioBase = validaTipoNumero(valorSalarioBase);

        // somaValorHora = valorSalarioBase / (valorHorasTrabalhadas * valorDiasTrabalhados);
        somaValorHora = valorSalarioBase / 220;
        if(somaValorHora > 0) {
            // document.querySelector('#resultado').innerHTML = `
            //     <p>Valor Hora: ${somaValorHora.toLocaleString('pt-BR', {currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
            // `;
            document.querySelector('#resultado').innerHTML = `
                 ${somaValorHora.toLocaleString('pt-BR', {currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2})}
            `;
        }

    }

    function calcularValorSuporte() {
        let valorSuporte = stringParaFloat(suporte.value);
        valorSuporte = validaTipoNumero(valorSuporte);

        let result = somaValorHora * valorSuporte;
        if(result > 0) {
            document.querySelector('#resultadoSuporte').innerHTML = `
                 ${result.toLocaleString('pt-BR', {currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2})}
            `;
        }
    }

    function calcularValorAtualizacoes() {
        let valorAtualizacoesApp = stringParaFloat(atualizacoesApp.value);
        valorAtualizacoesApp = validaTipoNumero(valorAtualizacoesApp);

        let result = somaValorHora * valorAtualizacoesApp;
        if(result > 0) {
            document.querySelector('#resultadoAtualizacoesApp').innerHTML = `
                 ${result.toLocaleString('pt-BR', {currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2})}
            `;
        }
    }

    function calcularValorProjeto() {
        calcularValorHora();
        calcularValorSuporte();
        calcularValorAtualizacoes();
        
        let valorDominio = stringParaFloat(dominio.value);
        let valorHospedagemApp = stringParaFloat(hospedagemApp.value);
        // let valorConstrucaoProjeto = stringParaFloat(construcaoProjeto.value);
        let valorCertificadoDigital = stringParaFloat(certificadoDigital.value);
        let valorServidorCache = stringParaFloat(servidorCache.value);
        let valorHospedagemDatabase = stringParaFloat(hospedagemDatabase.value);
        let valorDesignProjeto = stringParaFloat(designProjeto.value);
        let valorServidorEmail = stringParaFloat(servidorEmail.value);
        // let valorSuporte = stringParaFloat(suporte.value);
        // let valorAtualizacoesApp = stringParaFloat(atualizacoesApp.value);
        let valorHorasTrabalhadas = stringParaFloat(horasTrabalhadas.value);
        let valorDiasTrabalhados = stringParaFloat(diasTrabalhados.value);
        
        
        valorDominio = validaTipoNumero(valorDominio);
        valorHospedagemApp = validaTipoNumero(valorHospedagemApp);
        // valoConstrucaoProjeto = validaTipoNumero(valoConstrucaoProjeto);
        valorCertificadoDigital = validaTipoNumero(valorCertificadoDigital);
        valorServidorCache = validaTipoNumero(valorServidorCache);
        valorHospedagemDatabase = validaTipoNumero(valorHospedagemDatabase);
        valorDesignProjeto = validaTipoNumero(valorDesignProjeto);
        valorServidorEmail = validaTipoNumero(valorServidorEmail);
        // valorSuporte = validaTipoNumero(valorSuporte);
        // valorAtualizacoesApp = validaTipoNumero(valorAtualizacoesApp);
        valorHorasTrabalhadas = validaTipoNumero(valorHorasTrabalhadas);
        valorDiasTrabalhados = validaTipoNumero(valorDiasTrabalhados);

        let valorTotalProjeto = (somaValorHora * valorHorasTrabalhadas) * valorDiasTrabalhados;

        // construcaoProjeto.value = valorTotalProjeto.toLocaleString('pt-BR', {currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2});

        let result =    valorDominio
                        + valorHospedagemApp
                        // + valoConstrucaoProjeto
                        + valorCertificadoDigital
                        + valorServidorCache
                        + valorHospedagemDatabase
                        + valorDesignProjeto
                        + valorServidorEmail
                        // + valorSuporte
                        // + valorAtualizacoesApp
                        + valorTotalProjeto;
        if(result > 0) {
            // document.querySelector('#resultadoProjeto').innerHTML = `
            //     <p>Valor do Projeto: ${result.toLocaleString('pt-BR', {currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
            // `;
            document.querySelector('#resultadoProjeto').innerHTML = `
                ${result.toLocaleString('pt-BR', {currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2})}
            `;
        }

    }

    // document.querySelector('#enviarDadosFreela').addEventListener('click', function(event) {
    //     event.preventDefault();
    //     calcularValorHora();
    // })
    // document.querySelector('#calularValorProjeto').addEventListener('click', function(event) {
    //     event.preventDefault();
    //     calcularValorProjeto();
    // })

})
