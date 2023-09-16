import entradaDados from 'readline-sync';

console.log("\n Escolha uma das alternativas: \n");
console.log(" 1 - Listar os salários mínimos de 2010 à 2020 \n");
console.log(" 2 - Listar o índice IPCA de 2010 à 2020 \n");
console.log(" 3 - Comparação entre o percentual de aumento salarial e o IPCA \n");

let dados = [
    { ano: 2010, salario: 510, inflacao: 5.91 },
    { ano: 2011, salario: 545, inflacao: 6.50 },
    { ano: 2012, salario: 622, inflacao: 5.84 },
    { ano: 2013, salario: 678, inflacao: 5.91 },
    { ano: 2014, salario: 724, inflacao: 6.41 },
    { ano: 2015, salario: 788, inflacao: 10.67 },
    { ano: 2016, salario: 880, inflacao: 6.29 },
    { ano: 2017, salario: 937, inflacao: 2.95 },
    { ano: 2018, salario: 954, inflacao: 3.75 },
    { ano: 2019, salario: 998, inflacao: 4.31 },
    { ano: 2020, salario: 1045, inflacao: 4.52 },
];

let escolha = entradaDados.question("\n Digite sua escolha: \n");



switch (escolha) {
    case "1":
        for (let dados_salario of dados) {
            let ano = dados_salario.ano;
            let valor = dados_salario.salario.toFixed(2).replace(".", ",");
            console.log(`O ano ${ano} teve um salário mínimo igual a R$ ${valor}`);
        }
        break;
    case "2":
        for (let dados_ipc of dados) {
            let ano = dados_ipc.ano;
            let dados_inflacao = dados_ipc.inflacao.toFixed(2);
            console.log(`O ano ${ano} teve um IPC foi igual a ${dados_inflacao}%`);
        }
        break;
    case "3":
        for (let i = 1; i < dados.length; i++) {
           
            
            let salarioAnterior = dados[i - 1].salario;
            let salarioAno = dados[i].salario;
            let diferenca = salarioAno - salarioAnterior;
            let percentualCrescimento = (diferenca / salarioAnterior) * 100;
            let crescimentoFormatado = percentualCrescimento.toFixed(2).replace(".", ",");
            
            console.log(`${crescimentoFormatado}% de crescimento no ano ${dados[i].ano}`);
                
            
        }
        break;
    default:
        console.log("Opção inválida");
}
