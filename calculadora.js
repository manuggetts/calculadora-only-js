function calculadora() {
    const operacao = prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração(-) \n 3 - Multiplicação(*) \n 4 - Divisão real(/)\n 5 - Divisão inteira(%) \n 6 - Potenciação(**)');

    if (!operacao || isNaN(operacao) || operacao < 1 || operacao > 6) {
        alert('Erro - operação inválida!');
    } else {

        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        if (!isNaN(n1) && !isNaN(n2)) {
            switch (operacao) {
                case '1':
                    resultado = n1 + n2;
                    alert(`${n1} + ${n2} = ${resultado}`);
                    break;
                case '2':
                    resultado = n1 - n2;
                    alert(`${n1} - ${n2} = ${resultado}`);
                    break;
                case '3':
                    resultado = n1 * n2;
                    alert(`${n1} * ${n2} = ${resultado}`);
                    break;
                case '4':
                    if (n2 !== 0) {
                        resultado = n1 / n2;
                        alert(`${n1} / ${n2} = ${resultado}`);
                    } else {
                        alert('Erro - divisão por zero não é permitida!');
                    }
                    break;
                case '5':
                    if (n2 !== 0) {
                        resultado = n1 % n2;
                        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                    } else {
                        alert('Erro - divisão por zero não é permitida!');
                    }
                    break;
                case '6':
                    resultado = n1 ** n2;
                    alert(`${n1} elevado a ${n2} = ${resultado}`);
                    break;
                default:
                    alert('Operação inválida');
            }
        } else {
            alert('Erro - parâmetros inválidos!');
        }
    }

    let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

    if (opcao == '1') {
        calculadora();
    } else if (opcao == '2') {
        alert('Até mais!')
    } else {
        alert('Digite uma opção válida!')
    }
}

calculadora();