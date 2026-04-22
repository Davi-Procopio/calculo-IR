let salarioBruto = parseFloat(prompt("Escreva o seu salário bruto mensal (ex: 15000.00):"));
let imposto = 0;
let aliquota = "";

if (salarioBruto > 10000.00) {
    imposto = salarioBruto * 0.275;
    aliquota = "27,5%";
} else if (salarioBruto >= 8000.01) {
    imposto = salarioBruto * 0.225;
    aliquota = "22,5%";
} else if (salarioBruto >= 6500.01) {
    imposto = salarioBruto * 0.15;
    aliquota = "15%";
} else if (salarioBruto >= 5000.01) {
    imposto = salarioBruto * 0.075;
    aliquota = "7,5%";
} else {
    imposto = 0;
    aliquota = "Não é aplicada a alicota";
}

let salarioLiquido = salarioBruto - imposto;

alert(`Relatório de salário:\nSalário Bruto: R$ ${salarioBruto.toFixed(2)}\nAlíquota Aplicada: ${aliquota}\nImposto: R$ ${imposto.toFixed(2)}\nSalário Líquido: R$ ${salarioLiquido.toFixed(2)}`);