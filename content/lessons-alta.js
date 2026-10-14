/* ============================================================
   AULAS — Módulos ESSENCIAIS e de prioridade ALTA
   Preenchidos neste lote: MAT-01, MAT-03
   Próximos lotes: MAT-06, MAT-07, MAT-08 (essenciais)
                   MAT-02, MAT-04, MAT-05, MAT-09, MAT-11, MAT-12, MAT-13 (alta)
   ============================================================ */

window.LESSONS_ALTA = {

  /* ============================================================
     MAT-01 — Operações Fundamentais
  ============================================================ */
  'MAT-01': {
    id: 'L-MAT-01',
    moduloId: 'MAT-01',
    objetivo: 'Dominar as quatro operações fundamentais (adição, subtração, multiplicação e divisão), a ordem de prioridade entre elas, técnicas de cálculo mental e estimativas. Base para todo o restante da matemática de concursos.',
    prerequisitos: [],

    introducao: 'Adição, subtração, multiplicação e divisão são os tijolos de tudo o que vem depois: frações, porcentagem, proporção, equações. Um erro em uma dessas operações derruba a questão inteira. Por isso, este é o módulo mais importante da base.',

    explicacaoSimples: 'Pense nas quatro operações como ferramentas básicas: somar é juntar; subtrair é tirar; multiplicar é somar várias vezes o mesmo valor; dividir é repartir em partes iguais. Quando o problema mistura várias operações, existe uma ordem certa para resolvê-las — quem desrespeita a ordem, erra.',

    explicacaoTecnica: 'As quatro operações fundamentais operam sobre o conjunto dos números. A ADIÇÃO é comutativa (a + b = b + a) e associativa ((a + b) + c = a + (b + c)); tem elemento neutro (0) e o simétrico (-a). A SUBTRAÇÃO NÃO é comutativa nem associativa. A MULTIPLICAÇÃO é comutativa, associativa, tem elemento neutro (1) e distributiva em relação à adição (a × (b + c) = a×b + a×c). A DIVISÃO é a operação inversa da multiplicação e tem restrição: NÃO existe divisão por zero. PRIORIDADE DAS OPERAÇÕES: (1) parênteses, depois colchetes, depois chaves; (2) potenciação e radiciação; (3) multiplicação e divisão (da esquerda para a direita); (4) adição e subtração (da esquerda para a direita).',

    exemplos: [
      'Adição: 245 + 378 = 623.',
      'Subtração: 800 - 357 = 443 (pegar emprestado quando a unidade não é suficiente).',
      'Multiplicação: 234 × 7 = 1.638 (7 × 4 = 28, escreve 8 e vai 2; 7 × 3 = 21 + 2 = 23, escreve 3 e vai 2; 7 × 2 = 14 + 2 = 16).',
      'Divisão: 1.638 ÷ 7 = 234 (operação inversa).',
      'Prioridade: 2 + 3 × 4 = 2 + 12 = 14. NÃO é 5 × 4 = 20.',
      'Parênteses: (2 + 3) × 4 = 5 × 4 = 20.',
      'Cálculo mental: 98 + 47 = 98 + 2 + 45 = 100 + 45 = 145.',
      'Estimativa: 4.812 ÷ 9 ≈ 5.000 ÷ 10 = 500.'
    ],

    comparacoes: [
      { termoA: 'Adição', termoB: 'Multiplicação', diferenca: 'ADIÇÃO: junta valores diferentes (3 + 5 = 8). MULTIPLICAÇÃO: soma repetida de um mesmo valor (3 × 5 = 3+3+3+3+3 = 15). Quando os dois números são pequenos, a multiplicação é mais rápida; quando um deles é 0 ou 1, a multiplicação dá o resultado imediato (n × 0 = 0; n × 1 = n).' },
      { termoA: 'Subtração', termoB: 'Divisão', diferenca: 'SUBTRAÇÃO: retira uma quantidade (10 - 3 = 7). DIVISÃO: reparte em partes iguais (10 ÷ 3 ≈ 3,33). A subtração é a operação inversa da adição; a divisão é a operação inversa da multiplicação. Cuidado: divisão por zero é indefinida (10 ÷ 0 não existe).' },
      { termoA: 'Prioridade das operações', termoB: 'Ordem dos parênteses', diferenca: 'PRIORIDADE: entre operações sem sinal de agrupamento, multiplicação/divisão vêm antes de adição/subtração. PARÊNTESES: forçam a ordem — o que está dentro deles é resolvido primeiro, independentemente da operação. Depois vêm colchetes [ ] e chaves { }.' }
    ],

    aplicacaoEmConcurso: 'Praticamente toda questão de matemática começa passando por aqui. As bancas cobram principalmente: prioridade das operações (expressões numéricas), problemas contextualizados com mais de uma operação e cálculo mental. A base é tão importante que, em 5 questões de qualquer prova, 4 dependem de você acertar as operações fundamentais.',

    pegadinhas: [
      'Achar que 2 + 3 × 4 = 20 (somou primeiro). O correto é 14 (multiplicação antes).',
      'Ignorar que parênteses alteram a ordem: (2 + 3) × 4 = 20; 2 + (3 × 4) = 14.',
      'Errar o "vai um" ou "vai dois" em multiplicações com números de dois ou mais algarismos.',
      'Dividir por zero. NÃO existe divisão por zero — em expressões numéricas, é erro fatal.',
      'Confundir sinal de multiplicação com a letra x em problemas longos.',
      'Trocar a ordem de colchetes e chaves: a sequência é ( ), depois [ ], depois { }.',
      'Em problemas de concurso, esquecer de arredondar em estimativas quando o enunciado pede "aproximadamente".'
    ],

    errosComuns: [
      'Decorar "regras" de prioridade sem entender que a multiplicação é atalho da adição.',
      'Ignorar parênteses em expressões numéricas de prova.',
      'Calcular mentalmente com pressa e errar o "vai" da multiplicação.',
      'Não conferir o resultado usando a operação inversa (somar → subtrair; multiplicar → dividir).'
    ],

    resumo: [
      'Quatro operações: adição, subtração, multiplicação e divisão.',
      'Adição e multiplicação são comutativas; subtração e divisão NÃO são.',
      'Divisão por zero é indefinida.',
      'Prioridade: ( ) → [ ] → { } → potência/raiz → × e ÷ → + e -.',
      'Dentro da mesma prioridade, resolve da esquerda para a direita.',
      'Confira o resultado: 234 × 7 = 1.638 → 1.638 ÷ 7 = 234 (operação inversa).',
      'Estimativa: arredonde para números redondos e ajuste.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Pense em uma receita de bolo: você soma ingredientes, retira o que sobra, multiplica a receita se quiser mais porções e divide se quiser menos. E existe uma ordem certa para fazer cada coisa — antes de somar, verifique se não tem multiplicação escondida.',
      outroExemplo: 'Se uma caixa tem 12 ovos e você compra 5 caixas, quantos ovos tem? 12 × 5 = 60. Se dá 8 ovos para cada um dos 7 sobrinhos, quantos sobram? 60 - (8 × 7) = 60 - 56 = 4 ovos.',
      compararConceitos: 'Adição: junta. Subtração: tira. Multiplicação: soma repetida. Divisão: reparte. Prioridade: parênteses > potência > × e ÷ > + e -.',
      mostrarPegadinha: 'Cuidado: "2 + 3 × 4 = 20". ERRADO. Primeiro resolve 3 × 4 = 12; depois 2 + 12 = 14. A multiplicação SEMPRE vem antes da adição quando não há parênteses.',
      comoApareceEmConcurso: 'Cobrança direta em expressões numéricas (com ou sem parênteses) e em problemas contextualizados de várias etapas.',
      fazerPergunta: {
        pergunta: 'Quanto é 10 + 2 × 5 - 4?',
        resposta: '20. Primeiro resolve 2 × 5 = 10; depois 10 + 10 = 20; depois 20 - 4 = 16. Espere — na verdade é 16. Vamos devagar: 2 × 5 = 10. 10 + 10 = 20. 20 - 4 = 16. Resposta: 16.'
      }
    }
  },

  /* ============================================================
     MAT-03 — Frações e Números Decimais
  ============================================================ */
  'MAT-03': {
    id: 'L-MAT-03',
    moduloId: 'MAT-03',
    objetivo: 'Dominar frações equivalentes, simplificação, comparação, operações com frações, números mistos, dízimas periódicas e conversão entre fração, decimal e porcentagem. Base para porcentagem, razão, proporção e matemática financeira.',
    prerequisitos: ['MAT-01'],

    introducao: 'Fração é uma forma de representar parte de um todo. Números decimais são outra forma de representar a mesma ideia. Saber transitar entre fração, decimal e porcentagem é essencial: 1/2 = 0,5 = 50% representam a mesma coisa. Quem domina isso resolve problemas de desconto, juros e proporção com muito mais facilidade.',

    explicacaoSimples: 'Imagine uma pizza. Se você come 2 de 8 fatias, comeu 2/8 (dois oitavos) = 1/4 = 0,25 = 25%. São quatro formas de dizer a mesma coisa. Fração mostra a parte em relação ao todo (numerador/denominador). Decimal transforma a fração em número com vírgula. Porcentagem é uma fração de denominador 100.',

    explicacaoTecnica: 'FRAÇÃO: número da forma a/b, com b ≠ 0. Numerador (a) = quantas partes; denominador (b) = em quantas partes o todo foi dividido. FRAÇÕES EQUIVALENTES: representam o mesmo valor (1/2 = 2/4 = 3/6 = 4/8). Obtidas multiplicando ou dividindo numerador e denominador pelo mesmo número. SIMPLIFICAÇÃO: dividir numerador e denominador pelo MDC (máximo divisor comum) até a fração ficar irredutível. COMPARAÇÃO: com mesmo denominador, maior numerador vence (3/5 > 2/5). Com denominadores diferentes, reduza ao mesmo denominador (MMC) e compare. OPERAÇÕES: adição/subtração exigem o MESMO denominador (MMC); multiplicação é numerador × numerador e denominador × denominador; divisão é multiplicar pelo inverso da segunda fração. NÚMEROS MISTOS: 2 1/3 = 2 + 1/3 = 7/3. DÍZIMAS: simples (0,333...) ou compostas (0,1666...). Fração geratriz converte dízima em fração. CONVERSÕES: fração → decimal (divida numerador por denominador); decimal → fração (coloque sobre 10, 100, 1000 conforme casas decimais, simplifique); fração → porcentagem (multiplique por 100).',

    exemplos: [
      'Frações equivalentes: 1/2 = 2/4 = 4/8 = 50/100.',
      'Simplificação: 24/36 = 2/3 (dividindo ambos por 12, que é o MDC).',
      'Comparação: 2/3 vs 3/4 → MMC = 12 → 8/12 vs 9/12 → 3/4 é maior.',
      'Adição: 1/2 + 1/3 = 3/6 + 2/6 = 5/6.',
      'Multiplicação: 2/5 × 3/4 = 6/20 = 3/10.',
      'Divisão: 2/5 ÷ 3/4 = 2/5 × 4/3 = 8/15.',
      'Número misto: 2 1/3 = (2 × 3 + 1)/3 = 7/3.',
      'Dízima: 0,333... = 1/3; 0,1666... = 1/6.',
      'Conversões: 3/4 = 0,75 = 75%; 0,4 = 2/5 = 40%; 25% = 1/4 = 0,25.'
    ],

    comparacoes: [
      { termoA: 'Fração', termoB: 'Número decimal', diferenca: 'FRAÇÃO: representação em partes (3/4). DECIMAL: mesma quantidade em sistema posicional com vírgula (0,75). Toda fração pode virar decimal (dividindo numerador pelo denominador), mas nem todo decimal vira fração simples — dízimas periódicas exigem fração geratriz (0,333... = 1/3).' },
      { termoA: 'Dízima periódica simples', termoB: 'Dízima periódica composta', diferenca: 'SIMPLES: o período começa logo após a vírgula (0,333..., 0,525252...). COMPOSTA: há uma parte não periódica entre a vírgula e o período (0,1666..., 0,2333...). Regras diferentes para achar a fração geratriz.' },
      { termoA: 'Fração própria', termoB: 'Fração imprópria', diferenca: 'PRÓPRIA: numerador < denominador (2/5 = 0,4) — vale menos que 1 inteiro. IMPRÓPRIA: numerador ≥ denominador (7/3 = 2,33) — vale 1 inteiro ou mais. Imprópria pode ser escrita como número misto: 7/3 = 2 1/3.' },
      { termoA: 'Simplificar fração', termoB: 'Amplificar fração', diferenca: 'SIMPLIFICAR: DIVIDIR numerador e denominador pelo mesmo número (24/36 ÷ 12 = 2/3). AMPLIFICAR: MULTIPLICAR numerador e denominador pelo mesmo número (2/3 × 4 = 8/12). Ambas mantêm o mesmo valor; servem para reduzir ou comparar.' }
    ],

    aplicacaoEmConcurso: 'Frações aparecem disfarçadas em quase toda questão: "2/3 dos alunos...", "1/4 do salário...", "3/5 da produção...". Também são base para PORCENTAGEM (75% = 3/4) e MATEMÁTICA FINANCEIRA (juros de 2,5% ao mês = 0,025 = 25/1000 = 1/40). Saber converter entre fração, decimal e porcentagem acelera muito a resolução.',

    pegadinhas: [
      'Somar frações sem reduzir ao mesmo denominador: 1/2 + 1/3 NÃO é 2/5; é 5/6.',
      'Multiplicar frações somando numerador com numerador e denominador com denominador: 1/2 × 1/3 = 1/6 (multiplica os numeradores entre si e os denominadores entre si — não soma).',
      'Dividir frações sem inverter a segunda: 2/5 ÷ 3/4 = 2/5 × 4/3 = 8/15 (inverta a segunda e multiplique).',
      'Confundir dízima simples com composta e errar a fração geratriz.',
      'Esquecer de simplificar o resultado final (provas cobram a fração irredutível).',
      'Tratar número misto como multiplicação: 2 1/3 NÃO é 2 × 1/3 = 2/3; é 2 + 1/3 = 7/3.',
      'Ao converter decimal em fração, esquecer de colocar potência de 10 adequada: 0,4 = 4/10 = 2/5, não 4/100.'
    ],

    errosComuns: [
      'Decorar regras sem entender o "porquê" — na primeira variação do problema, erra.',
      'Confundir o que fazer na adição (MMC) com o que fazer na multiplicação (direto).',
      'Não simplificar a fração final.',
      'Usar a calculadora mental e errar a conversão decimal ↔ fração.'
    ],

    resumo: [
      'Fração = parte/todo. Numerador em cima; denominador embaixo (≠ 0).',
      'Frações equivalentes: mesmo valor, numeradores e denominadores diferentes.',
      'Simplificar: dividir pelo MDC. Amplificar: multiplicar pelo mesmo número.',
      'Adição/subtração: reduzir ao mesmo denominador (MMC).',
      'Multiplicação: numerador × numerador, denominador × denominador.',
      'Divisão: multiplicar pelo inverso da segunda fração.',
      'Número misto: 2 1/3 = 7/3.',
      'Dízimas: simples (0,333... = 1/3) e compostas (0,1666... = 1/6).',
      'Conversões: fração → decimal (dividir); decimal → fração (sobre potência de 10); fração → porcentagem (× 100).'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Fração é pedaço de pizza. Decimal é o mesmo pedaço escrito em outra linguagem. Porcentagem é o mesmo pedaço contado em 100 partes. 1/2 = 0,5 = 50% — tudo igual.',
      outroExemplo: 'Se você tem R$ 240 e gasta 3/4, quanto sobra? 3/4 de 240 = 3 × 60 = 180. Sobram 240 - 180 = R$ 60. Em decimal: 3/4 = 0,75; 0,75 × 240 = 180. Em porcentagem: 75% de 240 = 180.',
      compararConceitos: 'Adição de frações: MMC no denominador. Multiplicação: direto (numerador × numerador). Divisão: inverte e multiplica. Fração → decimal: divide. Decimal → fração: sobre 10/100/1000. Fração → %: × 100.',
      mostrarPegadinha: 'Cuidado: "1/2 + 1/3 = 2/5". ERRADO. É preciso MMC: 3/6 + 2/6 = 5/6. Somar frações NUNCA é somar numerador com numerador e denominador com denominador.',
      comoApareceEmConcurso: 'Cobrança em problemas contextualizados ("2/3 dos funcionários..."), conversões (fração ↔ decimal ↔ porcentagem) e comparação de frações.',
      fazerPergunta: {
        pergunta: 'Qual é a fração geratriz da dízima 0,333...?',
        resposta: '1/3. Para dízima periódica simples com 1 algarismo no período, a regra é: 0,333... = 3/9 = 1/3 (após simplificar).'
      }
    }
  }  ,

  /* ============================================================
     MAT-06 — Razão, Proporção e Divisão Proporcional
  ============================================================ */
  'MAT-06': {
    id: 'L-MAT-06',
    moduloId: 'MAT-06',
    objetivo: 'Compreender razão entre grandezas, proporção, propriedade fundamental das proporções, grandezas direta e inversamente proporcionais e divisão em partes proporcionais. Base para regra de três, porcentagem e matemática financeira.',
    prerequisitos: ['MAT-01', 'MAT-03'],

    introducao: 'Razão é a comparação entre duas grandezas por meio de uma divisão. Proporção é a igualdade entre duas razões. Esses conceitos aparecem o tempo todo em problemas de concurso: escalas, velocidades, densidades, misturas, divisão de lucros e rateios.',

    explicacaoSimples: 'Razão é como dizer "para cada 2 de uma coisa, tenho 3 de outra". Proporção é quando duas razões são iguais: "2 está para 3 assim como 4 está para 6". Se em uma receita 2 xícaras de farinha rendem 3 bolos, então 4 xícaras rendem 6 bolos — é a mesma razão.',

    explicacaoTecnica: 'RAZÃO entre a e b (b ≠ 0) é o quociente a/b. Ex.: velocidade = distância/tempo; densidade = massa/volume; escala = medida no desenho/medida real. PROPORÇÃO é a igualdade de duas razões: a/b = c/d (leia-se "a está para b assim como c está para d"). Termos: a e d são extremos; b e c são meios. PROPRIEDADE FUNDAMENTAL: o produto dos extremos é igual ao produto dos meios (a × d = b × c). Isso permite resolver proporções por multiplicação cruzada. GRANDEZAS DIRETAMENTE PROPORCIONAIS: quando uma aumenta, a outra aumenta na mesma razão (dobro → dobro). Ex.: quantidade de pão e valor pago. GRANDEZAS INVERSAMENTE PROPORCIONAIS: quando uma aumenta, a outra diminui na razão inversa (dobro → metade). Ex.: velocidade e tempo de viagem. DIVISÃO EM PARTES PROPORCIONAIS: dividir um valor em partes diretamente proporcionais a números dados (usando a constante de proporcionalidade k) ou inversamente proporcionais (usando 1/n).',

    exemplos: [
      'Razão: em uma turma, 15 meninas e 20 meninos → razão meninas/meninos = 15/20 = 3/4.',
      'Proporção: 3/4 = 15/20 (extremos: 3 × 20 = 60; meios: 4 × 15 = 60 — conferem).',
      'Diretamente proporcionais: 2 kg de queijo custam R$ 40; 5 kg custam R$ 100 (mesma razão: 20 R$/kg).',
      'Inversamente proporcionais: 60 km/h em 3 h; 90 km/h em 2 h (mesma distância: 180 km).',
      'Divisão diretamente proporcional: dividir R$ 300 em partes proporcionais a 2 e 3. k = 300/(2+3) = 60. Partes: 120 e 180.',
      'Divisão inversamente proporcional: dividir R$ 300 em partes inversamente proporcionais a 2 e 3. Some 1/2 + 1/3 = 5/6. k = 300 / (5/6) = 360. Partes: 180 e 120.'
    ],

    comparacoes: [
      { termoA: 'Razão', termoB: 'Proporção', diferenca: 'RAZÃO: uma única comparação (a/b). Ex.: 3/4. PROPORÇÃO: igualdade entre DUAS razões (a/b = c/d). Ex.: 3/4 = 15/20. Toda proporção contém duas razões; a recíproca não é verdadeira.' },
      { termoA: 'Grandezas diretamente proporcionais', termoB: 'Grandezas inversamente proporcionais', diferenca: 'DIRETAS: uma aumenta → outra aumenta na mesma razão (2× pão → 2× valor). INVERSAS: uma aumenta → outra diminui na razão inversa (2× velocidade → 1/2 do tempo). Na regra de três, inverte-se apenas nas grandezas inversas.' },
      { termoA: 'Divisão diretamente proporcional', termoB: 'Divisão inversamente proporcional', diferenca: 'DIRETA: usa os números dados como pesos (2 e 3 → partes 120 e 180 em 300). INVERSA: usa o INVERSO dos números (2 e 3 → 1/2 e 1/3 → partes 180 e 120 em 300). A soma das partes é sempre o valor total.' },
      { termoA: 'Extremos', termoB: 'Meios', diferenca: 'Em a/b = c/d: EXTREMOS são a e d (primeiro e último). MEIOS são b e c (segundo e terceiro). Propriedade fundamental: produto dos extremos = produto dos meios (a × d = b × c). É a base da multiplicação cruzada.' }
    ],

    aplicacaoEmConcurso: 'Razão e proporção aparecem em problemas de: divisão de lucros entre sócios, rateio de despesas, escala de mapas e plantas, densidade demográfica, velocidade média, misturas e ligas metálicas. A divisão proporcional (direta e inversa) é cobrada quase sempre como problema completo, exigindo montar a equação, achar k e calcular as partes.',

    pegadinhas: [
      'Inverter a razão sem motivo: 3/4 NÃO é o mesmo que 4/3.',
      'Esquecer a condição b ≠ 0 e d ≠ 0 — sem ela, a razão não existe.',
      'Confundir grandezas diretas com inversas. Teste: se uma aumenta, a outra aumenta (direta) ou diminui (inversa)?',
      'Na divisão inversamente proporcional, esquecer de usar 1/n (o inverso) em vez de n.',
      'Somar as partes no final para conferir — a soma tem que dar o total.',
      'Em problemas de mistura, esquecer de usar a proporção das quantidades, não dos preços.'
    ],

    errosComuns: [
      'Confundir proporcionalidade com igualdade — grandezas proporcionais não precisam ter o mesmo valor, só a mesma razão.',
      'Montar a proporção invertida (colocar b onde deveria ser d).',
      'Não simplificar a razão final.',
      'Confundir "razão de A para B" (A/B) com "razão de B para A" (B/A).'
    ],

    resumo: [
      'Razão: quociente entre duas grandezas (a/b, b ≠ 0).',
      'Proporção: igualdade entre duas razões (a/b = c/d).',
      'Propriedade fundamental: produto dos extremos = produto dos meios.',
      'Diretamente proporcionais: aumentam juntas. Inversamente: uma sobe, outra desce.',
      'Divisão diretamente proporcional: usa n como peso.',
      'Divisão inversamente proporcional: usa 1/n como peso.',
      'Sempre confira: a soma das partes = total.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Razão é comparar. Proporção é manter a mesma comparação em outra situação. Se 1 kg custa R$ 20, 3 kg custam R$ 60 — a razão preço/peso é sempre 20.',
      outroExemplo: 'Três amigos investiram R$ 2.000, R$ 3.000 e R$ 5.000 em um negócio. O lucro de R$ 20.000 será dividido proporcionalmente. Total investido = 10.000. k = 20.000/10.000 = 2. Partes: 4.000, 6.000 e 10.000.',
      compararConceitos: 'Direta: dobro → dobro. Inversa: dobro → metade. Divisão direta: pesos = números. Divisão inversa: pesos = inversos dos números.',
      mostrarPegadinha: 'Cuidado: "Se 4 operários fazem uma obra em 10 dias, 8 operários fazem em 20 dias". ERRADO. É INVERSAMENTE proporcional: 8 operários fazem em 5 dias.',
      comoApareceEmConcurso: 'Problemas de rateio, divisão de lucros, escalas, velocidade média e misturas. Aparece em quase toda prova de nível médio.',
      fazerPergunta: {
        pergunta: 'Dividir R$ 1.200 em partes inversamente proporcionais a 2 e 4.',
        resposta: 'Some 1/2 + 1/4 = 3/4. k = 1.200 / (3/4) = 1.600. Partes: 1.600 × 1/2 = 800 e 1.600 × 1/4 = 400. Conferindo: 800 + 400 = 1.200. ✓'
      }
    }
  },

  /* ============================================================
     MAT-07 — Regra de Três Simples e Composta
  ============================================================ */
  'MAT-07': {
    id: 'L-MAT-07',
    moduloId: 'MAT-07',
    objetivo: 'Dominar a regra de três simples (direta e inversa) e a regra de três composta, com identificação de grandezas, montagem de tabelas e resolução de problemas de produtividade, trabalhadores, tempo e quantidade.',
    prerequisitos: ['MAT-06'],

    introducao: 'Regra de três é a ferramenta mais cobrada em concursos. Serve para resolver problemas que envolvem duas ou mais grandezas proporcionais. Quem domina regra de três resolve rápido e sem erro — quem não domina, perde tempo e erra.',

    explicacaoSimples: 'Se você sabe que 3 cadernos custam R$ 30, quanto custam 5 cadernos? A regra de três organiza essa conta. Você monta uma tabela, coloca os valores conhecidos, e acha o valor desconhecido. Quando há mais de duas grandezas envolvidas, é regra de três composta.',

    explicacaoTecnica: 'REGRA DE TRÊS SIMPLES: envolve duas grandezas. Monte a tabela com as grandezas nas colunas e os valores em linhas. Verifique se são DIRETAMENTE proporcionais (aumentam juntas) ou INVERSAMENTE proporcionais (uma sobe, outra desce). DIRETA: multiplique em cruz. INVERSA: multiplique em linha (ou inverta uma das colunas antes de cruzar). REGRA DE TRÊS COMPOSTA: envolve três ou mais grandezas. Monte a tabela com todas. Compare cada grandeza com a incógnita (uma por vez), mantendo as demais constantes, e classifique como direta ou inversa. Depois multiplique tudo respeitando as proporções. Fórmula geral: x = (valor conhecido) × (produto dos fatores diretos) / (produto dos fatores inversos).',

    exemplos: [
      'Simples direta: 3 cadernos → R$ 30. 5 cadernos → x. 3/5 = 30/x → 3x = 150 → x = 50.',
      'Simples inversa: 4 operários → 10 dias. 8 operários → x. 4/8 = x/10 → 8x = 40 → x = 5 dias.',
      'Composta: 6 máquinas produzem 1.200 peças em 4 horas. Quantas peças 10 máquinas produzem em 6 horas? Peças é direta com máquinas e direta com horas. x = 1.200 × (10/6) × (6/4) = 1.200 × 10/4 = 3.000 peças.',
      'Composta com inversa: 8 operários fazem uma obra em 15 dias, trabalhando 6 h/dia. Quantos dias 12 operários levarão trabalhando 8 h/dia? Operários × dias = inversa; horas × dias = inversa. x = 15 × (8/12) × (6/8) = 15 × 1/2 = 7,5 dias.'
    ],

    comparacoes: [
      { termoA: 'Regra de três simples', termoB: 'Regra de três composta', diferenca: 'SIMPLES: 2 grandezas, uma incógnita. Ex.: cadernos × preço. COMPOSTA: 3 ou mais grandezas, uma incógnita. Ex.: máquinas × peças × horas. A composta exige analisar cada grandeza SEPARADAMENTE em relação à incógnita, mantendo as demais constantes.' },
      { termoA: 'Grandeza direta', termoB: 'Grandeza inversa', diferenca: 'DIRETA: as duas crescem juntas (mais horas → mais peças). INVESSA: uma cresce, a outra decresce (mais operários → menos dias). Na montagem, multiplique em cruz para diretas e em linha para inversas (ou inverta a coluna inversa antes de cruzar).' },
      { termoA: 'Regra de três', termoB: 'Proporção direta', diferenca: 'REGRA DE TRÊS é o MÉTODO (montar tabela, classificar, resolver). PROPORÇÃO DIRETA é o TIPO de relação (a/b = c/d). A regra de três é a ferramenta; a proporção é o conceito matemático por trás dela.' }
    ],

    aplicacaoEmConcurso: 'Regra de três é o "arroz com feijão" dos concursos. Aparece em: problemas de trabalhadores/tempo/obra, produtividade, consumo de combustível, densidade, velocidade, escalas, misturas, receitas, vazão de torneiras, etc. A versão COMPOSTA é a mais cobrada em provas de nível médio. A banca costuma testar a correta identificação de cada grandeza como direta ou inversa — errar essa classificação derruba a questão.',

    pegadinhas: [
      'Classificar como direta uma grandeza que é inversa. Teste: "se uma aumenta, a outra aumenta?" Se sim, é direta; se não, é inversa.',
      'Na composta, comparar TODAS as grandezas de uma vez em vez de uma por vez com a incógnita.',
      'Esquecer de manter as unidades consistentes (horas com horas, dias com dias, kg com kg).',
      'Multiplicar em cruz quando deveria multiplicar em linha (ou vice-versa).',
      'Confundir "operários" com "dias" — mais operários trabalham MENOS dias (inversa).',
      'Em regra de três com mesma unidade em ambos os lados, esquecer de simplificar antes de multiplicar.'
    ],

    errosComuns: [
      'Montar a tabela de forma errada (trocar linhas por colunas).',
      'Não verificar se o resultado faz sentido (mais operários deveria reduzir o tempo).',
      'Esquecer de simplificar as frações antes de multiplicar.',
      'Tratar a regra de três composta como se fosse simples (comparar tudo de uma vez).'
    ],

    resumo: [
      'Regra de três simples: 2 grandezas, 1 incógnita.',
      'Direta: multiplica em cruz. Inversa: multiplica em linha (ou inverte uma coluna).',
      'Regra de três composta: 3 ou mais grandezas.',
      'Na composta, compare CADA grandeza com a incógnita separadamente.',
      'Teste prático: mais operários → menos dias (inversa); mais horas → mais peças (direta).',
      'Confira sempre o resultado (faz sentido?).'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Regra de três é organizar uma conta com o que você sabe e o que quer descobrir. Se 1 kg de carne custa R$ 40, 3 kg custam R$ 120. Você multiplica e divide — nada mais.',
      outroExemplo: 'Em uma fábrica, 5 máquinas produzem 500 peças em 2 horas. Quantas peças 8 máquinas produzem em 5 horas? Peças é direta com máquinas (mais máquinas, mais peças) e direta com horas (mais horas, mais peças). x = 500 × (8/5) × (5/2) = 500 × 4 = 2.000 peças.',
      compararConceitos: 'Direta: crescem juntas. Inversa: uma cresce, outra decresce. Simples: 2 grandezas. Composta: 3 ou mais. Classificar antes de calcular.',
      mostrarPegadinha: 'Cuidado: "Se 2 pedreiros fazem um muro em 6 dias, 4 pedreiros fazem em 12 dias". ERRADO. É inversa: 4 pedreiros fazem em 3 dias.',
      comoApareceEmConcurso: 'O tempo todo em problemas de obra, produtividade e consumo. Frequência altíssima em concursos de nível médio.',
      fazerPergunta: {
        pergunta: 'Uma torneira enche um tanque em 4 horas. Outra torneira enche o mesmo tanque em 6 horas. Juntas, em quanto tempo enchem?',
        resposta: 'Em 2,4 horas (ou 2h 24min). Em 1 hora, a primeira enche 1/4 e a segunda 1/6. Juntas: 1/4 + 1/6 = 3/12 + 2/12 = 5/12. Tempo = 12/5 = 2,4 h = 2h 24min.'
      }
    }
  },

  /* ============================================================
     MAT-08 — Porcentagem
  ============================================================ */
  'MAT-08': {
    id: 'L-MAT-08',
    moduloId: 'MAT-08',
    objetivo: 'Dominar cálculo de porcentagens, conversão entre fração/decimal/porcentagem, aumentos e descontos, variação percentual, porcentagens sucessivas e interpretação de problemas contextualizados.',
    prerequisitos: ['MAT-01', 'MAT-03'],

    introducao: 'Porcentagem é a linguagem do comércio, das finanças, das estatísticas e dos descontos. Em concursos, aparece em praticamente toda prova: juros, reajustes, promoções, crescimento populacional, índices. Quem domina porcentagem resolve questões de várias disciplinas com mais segurança.',

    explicacaoSimples: 'Por cento significa "por cada cem". 25% é o mesmo que 25/100 = 0,25 = 1/4. Calcular 25% de algo é multiplicar por 0,25 (ou dividir por 4). Aumento de 30% é multiplicar por 1,30; desconto de 30% é multiplicar por 0,70. Simples assim.',

    explicacaoTecnica: 'PORCENTAGEM: razão de denominador 100. p% = p/100. CONVERSÕES: p% = p/100 = decimal (2 casas); decimal → % (multiplica por 100); fração → % (multiplica por 100 e simplifica). CÁLCULO: p% de N = (p/100) × N. AUMENTO percentual: valor final = valor inicial × (1 + p/100). DESCONTO percentual: valor final = valor inicial × (1 - p/100). VARIAÇÃO PERCENTUAL entre dois valores: (Vfinal - Vinicial)/Vinicial × 100. PORCENTAGENS SUCESSIVAS: dois aumentos (ou descontos) sucessivos NÃO se somam — multiplicam-se. Ex.: aumento de 10% e depois 20% = × 1,10 × 1,20 = × 1,32 = aumento total de 32%. Desconto de 10% e aumento de 10% NÃO retornam ao valor original: 100 × 0,90 × 1,10 = 99 (perda de 1%). LUCRO sobre custo x lucro sobre venda: base diferente, resultado diferente.',

    exemplos: [
      '20% de 250 = 0,20 × 250 = 50.',
      'Aumento de 15% em R$ 80: 80 × 1,15 = R$ 92.',
      'Desconto de 15% em R$ 80: 80 × 0,85 = R$ 68.',
      'Variação percentual: preço passou de 50 para 60. Variação = (60-50)/50 = 10/50 = 0,20 = 20%.',
      'Porcentagens sucessivas: aumento de 10% seguido de 20%: 1,10 × 1,20 = 1,32 → 32% de aumento total.',
      'Desconto seguido de aumento: 100 × 0,80 × 1,20 = 96 (perda de 4%, não "volta ao normal").',
      'Lucro sobre custo: comprou por 100, vendeu por 120 → lucro de 20% sobre o custo.',
      'Lucro sobre venda: vendeu por 120 com lucro de 20 sobre 120 → 20/120 ≈ 16,67% sobre a venda.'
    ],

    comparacoes: [
      { termoA: 'Aumento percentual', termoB: 'Desconto percentual', diferenca: 'AUMENTO de p%: multiplica por (1 + p/100). Ex.: +30% = × 1,30. DESCONTO de p%: multiplica por (1 - p/100). Ex.: -30% = × 0,70. Cuidado: um desconto de 30% NÃO desfaz um aumento de 30% — o valor final fica MENOR (0,70 × 1,30 = 0,91).' },
      { termoA: 'Lucro sobre custo', termoB: 'Lucro sobre venda', diferenca: 'SOBRE CUSTO: base é o preço de compra. Ex.: comprou 100, vendeu 120 → 20% de lucro sobre o custo. SOBRE VENDA: base é o preço de venda. Ex.: vendeu 120 com R$ 20 de lucro → 20/120 ≈ 16,67%. O mesmo lucro dá percentuais diferentes conforme a base.' },
      { termoA: 'Porcentagens sucessivas', termoB: 'Soma de porcentagens', diferenca: 'SUCESSIVAS: multiplicam-se os fatores (1,10 × 1,20 = 1,32 = 32%). SOMA DIRETA: somam-se os percentuais (10% + 20% = 30%). A soma direta é ERRADA quando há aplicação em cadeia. Só vale para descontos/aumentos em bases diferentes.' },
      { termoA: 'Variação absoluta', termoB: 'Variação percentual', diferenca: 'ABSOLUTA: diferença bruta (60 - 50 = 10). PERCENTUAL: diferença dividida pela base inicial ((60-50)/50 = 20%). A variação percentual permite comparar grandezas de tamanhos diferentes; a absoluta não.' }
    ],

    aplicacaoEmConcurso: 'Porcentagem é campeã absoluta em concursos. Aparece em: descontos comerciais, aumentos salariais, reajustes de preços, índices de inflação, juros, crescimento populacional, estatísticas, gráficos e tabelas. A banca cobra: cálculo direto, variação percentual, porcentagens sucessivas, lucro/prejuízo, desconto sobre valor já aumentado. Frequentemente combinada com MAT-11 (Matemática Financeira) e MAT-13 (Tabelas e Gráficos).',

    pegadinhas: [
      'Somar porcentagens sucessivas (10% + 20% = 30%). ERRADO — deve multiplicar (1,10 × 1,20 = 1,32 = 32%).',
      'Achar que desconto de 30% desfaz aumento de 30%. NÃO desfaz: 0,70 × 1,30 = 0,91 (perda de 9%).',
      'Confundir lucro sobre custo com lucro sobre venda.',
      'Usar a base errada na variação percentual: o divisor é sempre o valor INICIAL.',
      'Em descontos comerciais, confundir "desconto de 20% sobre o preço de tabela" com "desconto de 20% sobre o preço já com desconto".',
      'Esquecer de converter % em decimal antes de calcular: 5% = 0,05 (não 5).',
      'Tratar "desconto sobre desconto" como soma de percentuais.'
    ],

    errosComuns: [
      'Decorar fórmulas sem entender a base de cálculo.',
      'Confundir porcentagem com ponto percentual (uma alta de 2% em uma taxa de 5% significa 5% + 2% = 7%, e não 5% × 1,02).',
      'Não simplificar o resultado final quando a resposta é uma fração.',
      'Em problemas de desconto, calcular o valor do desconto e esquecer de subtrair do preço original.'
    ],

    resumo: [
      'p% = p/100. Converta sempre para decimal antes de multiplicar.',
      'p% de N = (p/100) × N.',
      'Aumento: × (1 + p/100). Desconto: × (1 - p/100).',
      'Variação percentual = (Vfinal - Vinicial) / Vinicial × 100.',
      'Porcentagens sucessivas: MULTIPLICAM-SE os fatores, NÃO se somam.',
      'Lucro sobre custo ≠ lucro sobre venda (bases diferentes).',
      '100 × 0,70 × 1,30 = 91 (perda de 9%) — desconto não desfaz aumento.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Porcentagem é só uma fração com denominador 100. 25% = 25/100 = 0,25. Calcular 25% de 80 é multiplicar 0,25 × 80 = 20. Aumentar 25% é multiplicar por 1,25; descontar 25% é multiplicar por 0,75.',
      outroExemplo: 'Um produto custa R$ 200. A loja dá 10% de desconto e depois mais 20% em cima do preço já com desconto. Preço final: 200 × 0,90 × 0,80 = R$ 144. Total de desconto: 28%, não 30%.',
      compararConceitos: 'Aumento: × (1 + p/100). Desconto: × (1 - p/100). Sucessivos: multiplica os fatores. Variação: dividir pela base inicial. Lucro sobre custo vs sobre venda: bases diferentes.',
      mostrarPegadinha: 'Cuidado: "Aumentar 10% e depois diminuir 10% volta ao valor original". ERRADO. 100 × 1,10 × 0,90 = 99. Sempre perde 1% nesse vai e volta.',
      comoApareceEmConcurso: 'Em quase toda prova. Combina com finanças, gráficos e estatística.',
      fazerPergunta: {
        pergunta: 'Um produto sofreu aumento de 25% e depois desconto de 25%. Qual foi a variação percentual final?',
        resposta: 'Perda de 6,25%. 100 × 1,25 × 0,75 = 93,75. Variação = (93,75 - 100)/100 = -6,25%. Um aumento e um desconto iguais NÃO se anulam — sempre há perda.'
      }
    }
  }

};
