# Projeto-Calculadora-JS
Meu primeiro Projeto com JS, calculadora JavaScript


        função  calculadora ( ) {
    const  operação  =  Number ( prompt ( 'Escolha uma operação:\n 1 - Soma(+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - potenciação(**)' ) ) ;
    if  ( ! operação  ||  operação  >=  7 ) {
        alerta ( 'Erro - Operação Inválida' ) ;
        calculadora ( ) ;
    } senão  {
        let   n1  =  Número ( prompt  ( 'Insira o Primeiro Valor' ) ) ;
        let   n2  =  Número ( prompt  ( 'Insira o Segundo Valor' ) ) ;
        deixe   Resultado ;se ( ! n1  ||  ! n2 ) {
            alert ( 'Erro - Parâmetros inválidos!' )
            calculadora ( ) ;

        } else  {  função  soma ( ) {
            Resultado  =  n1  +  n2 ;
            alerta ( ` ${ n1 } + ${ n2 } = ${ Resultado } ` )
            Novaoperação ( ) ;
        }
        function  subtração ( ) {
            Resultado  =  n1  -  n2
            alerta ( ` ${ n1 } - ${ n2 } = ${ Resultado } ` )
            Novaoperação ( ) ;
        }
        function  multiplicação ( ) {
            Resultado  =  n1  *  n2
            alerta ( ` ${ n1 } * ${ n2 } = ${ Resultado } ` )
            Novaoperação ( ) ;
        }
        function  divisãoReal ( ) {
            Resultado  =  n1  /  n2
            alerta ( ` ${ n1 } / ${ n2 } = ${ Resultado } ` )
            Novaoperação ( ) ;
        }
        function  divisãoInteira ( ) {
            Resultado  =  n1  %  n2
            alert ( `O resto da divisão inteira ${ n1 } e ${ n2 } é igual a ${ Resultado } ` )
            Novaoperação ( ) ;
        }
        function  ponteciacao ( ) {
            Resultado  =  n1  **  n2
            alert ( ` ${ n1 } Elevado a ${ n2 } é igual a ${ Resultado } ` )
            Novaoperação ( ) ;
        }

        function  Novaoperação ( ) {
            let  opcao  =  prompt ( 'Deseja Fazer outra Operação?\n 1 - Sim\n 2 - Não' ) ;
            if  ( opção  ==  1 ) {
                calculadora ( ) ;
            } else  if  ( opcao  ==  2 )  {
                alerta ( 'Até Mais!' )
            }  senão  {
                alert ( 'Digite opção Válida' )
                Novaoperação ( ) ;
            }
        }

        }




    // if (operação == 1) {
    // soma();
    // } else if (operação == 2) {
    // subtração();
    // } else if (operação == 3) {
    // multiplicação();
    // } else if (operação == 4) {
    // divisãoReal();
    // } else if (operação == 5) {
    // divisãoInteira();
    // } else if (operação == 6) {
    // ponteciacao();

    // }
    switch  ( operação ) {
            caso  1 :
                soma ( ) ;
                quebrar ;
            caso  2 :
                subtração ( ) ;
                quebrar ;
            caso  3 :
                multiplicação ( ) ;
                quebrar ;
            caso  4 :
                divisãoReal ( ) ;
                quebrar ;
            caso  5 :
                divisãoInteira ( ) ;
            caso  6 :
                ponteciação ( ) ;
                quebrar ;

    }

 }    
}
calculadora ( ) ;
