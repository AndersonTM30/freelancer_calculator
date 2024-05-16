# Regras de cálculo de precificação

## Custo Fixo
Pesquisar no google o valor médio de hora de desenvolvedor júnior no mercado que pode ser feito o cálculo: 
```
    valor_hora_mes = salario_medio / (horas_trabalhadas * dias_trabalhados)
    
```
Depois arredonda para cima para poder ter lucro.  

Pesquisar no site do Fiver pela área de atuação do projeto, por exemplo se tiver fazendo um freelance para criar uma landing page, pode fazer a consulta para ver uma média de valor da construção do projeto.

Para calcular o valor do projeto precisa estimar quantas horas vai levar para concluir o projeto e faz a conta com o valor médio:
```
    valor_custo_projeto = valor_hora_mes * horas_de_construcao_do_projeto
```

## Custo variável
Agora precisa consultar os valores de hospedagem e domínio que o cliente solicitou para concluir o orçamento. A consulta é feita nos provedores de hospedagem e domínio. Dentre outros recursos temos os valores de domínio de aplicação, design, valor do servidor de banco de dados, servidor de aplicação, certificado digital, servidor de cache, servidor de email.
```
    valor_custo_variavel = dominio + hospedagem_aplicacao + design + valor_hospedagem_database + certificado_digital + servidor_cache + servidor_email + Suporte
```