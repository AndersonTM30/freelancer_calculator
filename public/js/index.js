﻿import { moneyMask } from "./utils.js";
document.addEventListener('DOMContentLoaded', function () {
    let somaValorHora = 0;
    let isLight = false;
    let horasTrabalhadas = document.querySelector('#horasTrabalhadas');
    let diasTrabalhados = document.querySelector('#diasTrabalhados');
    let salarioBase = document.querySelector('#salarioBase');

    let dominio = document.querySelector('#dominio');
    let hospedagemApp = document.querySelector('#hospedagemApp');
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
        , 'certificadoDigital'
        , 'servidorCache'
        , 'hospedagemDatabase'
        , 'designProjeto'
        , 'servidorEmail'
        , 'suporte'
        , 'atualizacoesApp'
    ];

    document.querySelector('#diasTrabalhados').addEventListener('input', function() {
        limitarDigitosInputNumber(this);
    })

    document.querySelectorAll('#' + inputId.join(', #')).forEach(input => {
        input.value = '0,00';
        moneyMask(input);
        input.addEventListener('input', function() {
            calcularValorProjeto();
        })
    })

    document.querySelector('#darkmode-toggle').addEventListener('click', function() {
        const lightImage = document.querySelector('.light-image');
        const darkImage = document.querySelector('.dark-image');

        document.body.classList.toggle('dark-theme');

        if(isLight) {
            lightImage.classList.remove('hidden');
            darkImage.classList.add('hidden');
            isLight = false;
        } else {
            darkImage.classList.remove('hidden');
            lightImage.classList.add('hidden');
            isLight = true;

        }
 
    })

    function stringParaFloat(param) {
        param = param.replaceAll('.', '').replaceAll(',', '.')
        return parseFloat(param);
    }

    function validaTipoNumero(param) {
        return isNaN(param) ? 0 : param;
    }

    function limitarDigitosInputNumber(input) {
        let maxDigitos = 10;
        let valorAtual = input.value;

        if(valorAtual.length > maxDigitos) {
            input.value = valorAtual.substr(0, maxDigitos);
        }
    }

    function calcularValorHora() {
        let valorSalarioBase = stringParaFloat(salarioBase.value);
        valorSalarioBase = validaTipoNumero(valorSalarioBase);

        valorSalarioBase = parseFloat(valorSalarioBase);
        let horas = parseFloat(220);
        somaValorHora = valorSalarioBase / horas;
        console.log(`Salário Base: ${valorSalarioBase} - Carga horária: ${horas} - Soma valor hora: ${somaValorHora.toFixed(2)}`);
        if(somaValorHora > 0) {
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
        let valorCertificadoDigital = stringParaFloat(certificadoDigital.value);
        let valorServidorCache = stringParaFloat(servidorCache.value);
        let valorHospedagemDatabase = stringParaFloat(hospedagemDatabase.value);
        let valorDesignProjeto = stringParaFloat(designProjeto.value);
        let valorServidorEmail = stringParaFloat(servidorEmail.value);
        let valorHorasTrabalhadas = stringParaFloat(horasTrabalhadas.value);
        let valorDiasTrabalhados = stringParaFloat(diasTrabalhados.value);
        
        
        valorDominio = validaTipoNumero(valorDominio);
        valorHospedagemApp = validaTipoNumero(valorHospedagemApp);
        valorCertificadoDigital = validaTipoNumero(valorCertificadoDigital);
        valorServidorCache = validaTipoNumero(valorServidorCache);
        valorHospedagemDatabase = validaTipoNumero(valorHospedagemDatabase);
        valorDesignProjeto = validaTipoNumero(valorDesignProjeto);
        valorServidorEmail = validaTipoNumero(valorServidorEmail);
        valorHorasTrabalhadas = validaTipoNumero(valorHorasTrabalhadas);
        valorDiasTrabalhados = validaTipoNumero(valorDiasTrabalhados);

        let valorTotalProjeto = (somaValorHora * valorHorasTrabalhadas) * valorDiasTrabalhados;

        let result =    valorDominio
                        + valorHospedagemApp
                        + valorCertificadoDigital
                        + valorServidorCache
                        + valorHospedagemDatabase
                        + valorDesignProjeto
                        + valorServidorEmail
                        + valorTotalProjeto;
        if(result > 0) {
            document.querySelector('#resultadoProjeto').innerHTML = `
                ${result.toLocaleString('pt-BR', {currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2})}
            `;
        }

    }

})
