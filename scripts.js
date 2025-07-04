        // Exemplo 1 - Jogo dos números secretos
        function executarExemplo1() {
            alert('Seja bem-vindo ao jogo do número secreto!');

            let numeroSecreto = Math.floor(Math.random() * 10) + 1;
            console.log("Número secreto (para testes):", numeroSecreto);

            let chute;
            let tentativas = 0;

            while (chute != numeroSecreto) {
                chute = parseInt(prompt('Escolha um número entre 1 e 10'));
                
                if (chute === null) {
                    alert('Jogo cancelado. Até a próxima!');
                    return;
                }
                
                if (isNaN(chute) || chute < 1 || chute > 10) {
                    alert('Por favor, insira um número válido entre 1 e 10.');
                    continue;
                }
                
                tentativas++;

                if (chute == numeroSecreto) {
                    alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativa(s).`);
                } else if (chute > numeroSecreto) {
                    alert(`O número secreto é menor que ${chute}. Tente novamente.`);
                } else {
                    alert(`O número secreto é maior que ${chute}. Tente novamente.`);
                }
            }
        }

        // Exemplo 2 - Cálculo de média
        function executarExemplo2() {
            alert('Bem-vindo ao calculador de médias!');
            
            let quantidade = parseInt(prompt('Quantas notas você deseja calcular?'));
            
            if (isNaN(quantidade) || quantidade <= 0) {
                alert('Por favor, insira um número válido maior que zero.');
                return;
            }
            
            let soma = 0;
            let notasValidas = 0;
            
            while (notasValidas < quantidade) {
                let nota = parseFloat(prompt(`Digite a nota ${notasValidas + 1} (entre 0 e 10):`));
                
                if (isNaN(nota) || nota < 0 || nota > 10) {
                    alert('Por favor, insira uma nota válida entre 0 e 10.');
                    continue;
                }
                
                soma += nota;
                notasValidas++;
            }
            
            let media = soma / quantidade;
            alert(`A média das ${quantidade} notas é: ${media.toFixed(2)}`);
        }

        // Exemplo 3 - Soma de números
        function executarExemplo3() {
            alert('Bem-vindo ao somador de números!');
            
            let continuar = true;
            let soma = 0;
            let quantidade = 0;
            
            while (continuar) {
                let numero = parseFloat(prompt('Digite um número para somar (ou deixe em branco para finalizar):'));
                
                if (isNaN(numero)) {
                    continuar = false;
                } else {
                    soma += numero;
                    quantidade++;
                }
            }
            
            if (quantidade > 0) {
                alert(`Você somou ${quantidade} número(s).\nTotal: ${soma}\nMédia: ${(soma/quantidade).toFixed(2)}`);
            } else {
                alert('Nenhum número foi informado para soma.');
            }
        }