function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma(+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - potenciação(**)'));
    if (!operacao || operacao >= 7){
        alert('Erro - Operação Inválida');
        calculadora();
    }else {
        let  n1 = Number(prompt ('Insira o Primeiro Valor'));
        let  n2 = Number(prompt ('Insira o Segundo Valor'));
        let  Resultado;

        if(!n1 || !n2){
            alert('Erro - Parãmetros inválido!')
            calculadora();

        }else { function soma(){
            Resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${Resultado}`)
            Novaoperacao();
        }
        function subtracao(){
            Resultado = n1 - n2
            alert(`${n1} - ${n2} = ${Resultado}`)
            Novaoperacao();
        }
        function multiplicacao(){
            Resultado = n1 * n2
            alert(`${n1} * ${n2} = ${Resultado}`)
            Novaoperacao();
        }
        function divisaoReal(){
            Resultado = n1 / n2
            alert(`${n1} / ${n2} = ${Resultado}`)
            Novaoperacao();
        }
        function divisaoInteira(){
            Resultado = n1 % n2
            alert(`O resto da divisão inteira ${n1} e ${n2} é igual a ${Resultado}`)
            Novaoperacao();
        }
        function ponteciacao(){
            Resultado = n1 ** n2
            alert(`${n1} Elevado a ${n2} é igual a ${Resultado}`)
            Novaoperacao();
        }
    
        function Novaoperacao(){
            let opcao = prompt('Deseja Fazer outra Operação?\n 1 - Sim\n 2 - Não');
            if (opcao == 1){
                calculadora();
            }else if (opcao == 2) {
                alert('Até Mais!')
            } else {
                alert('Digite opção Válida')
                Novaoperacao();
            }
        }

        }
    
       
    
    
    // if (operacao == 1) {
    //     soma();
    //     } else if (operacao == 2) {
    //         subtracao();
    //     } else if (operacao == 3) {
    //         multiplicacao();
    //     } else if (operacao == 4) {
    //         divisaoReal(); 
    //     } else if (operacao == 5) {
    //         divisaoInteira();
    //     } else if (operacao == 6) {
    //         ponteciacao();
             
    //    }
    switch (operacao){
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
            case 6:
                ponteciacao();
                break;

    }

 }    
}
calculadora();