/* ============================================================
   AULAS — Módulos de prioridade CONDICIONAL
   Preenchidos: MAT-10, MAT-19, MAT-20, MAT-22
   ============================================================ */

window.LESSONS_COMPLEMENTAR = {

  /* ============================================================
     MAT-10 — Equações do 2º Grau, Sistemas e Inequações
  ============================================================ */
  'MAT-10': {
    id: 'L-MAT-10',
    moduloId: 'MAT-10',
    objetivo: 'Compreender equações quadráticas, fatoração básica, sistemas de equações (substituição e eliminação), inequações e problemas aplicados. Aprofundamento conforme o perfil das provas.',
    prerequisitos: ['MAT-09'],

    introducao: 'Equações do 2º grau aparecem em problemas de área, queda livre, movimento e otimização. Sistemas de equações resolvem problemas com duas incógnitas. Inequações tratam de desigualdades. Este módulo é "condicional" porque só vale investir tempo nele quando o edital cobrar explicitamente — mas quando cobra, é decisivo.',

    explicacaoSimples: 'Uma equação do 2º grau tem x² como maior expoente (ex.: x² + 5x + 6 = 0). Ela pode ter 0, 1 ou 2 soluções. Um sistema de equações tem duas incógnitas e duas equações, resolvidas juntas. Uma inequação é como uma equação, mas com <, >, ≤ ou ≥ em vez de =.',

    explicacaoTecnica: 'EQUAÇÃO DO 2º GRAU: ax² + bx + c = 0, com a ≠ 0. Fórmula de Bhaskara: x = (-b ± √Δ) / (2a), onde Δ = b² - 4ac. Análise do discriminante: Δ > 0 → 2 raízes reais distintas; Δ = 0 → 1 raiz real (dupla); Δ < 0 → nenhuma raiz real. Relações de Girard (soma e produto): S = x1 + x2 = -b/a; P = x1 × x2 = c/a. FATORAÇÃO: quando possível, escrever ax² + bx + c = a(x - x1)(x - x2). SISTEMAS DE EQUAÇÕES: dois métodos principais. SUBSTITUIÇÃO: isola uma incógnita em uma equação e substitui na outra. ELIMINAÇÃO (adição): soma ou subtrai as equações para cancelar uma incógnita. INEQUAÇÕES DO 1º GRAU: resolva como equação, mas ATENÇÃO: ao multiplicar ou dividir por número NEGATIVO, o sinal da desigualdade INVERTE.',

    exemplos: [
      'Equação: x² - 5x + 6 = 0. Δ = 25 - 24 = 1. x = (5 ± 1)/2 → x1 = 3; x2 = 2.',
      'Δ = 0: x² - 6x + 9 = 0 → Δ = 0 → x = 3 (raiz dupla).',
      'Δ < 0: x² + x + 1 = 0 → Δ = 1 - 4 = -3 → sem raízes reais.',
      'Girard: x² - 7x + 12 = 0 → S = 7; P = 12 → raízes 3 e 4.',
      'Sistema por substituição: x + y = 10; x - y = 4 → x = 7; y = 3.',
      'Sistema por eliminação: 2x + y = 8; x - y = 1 → somando: 3x = 9 → x = 3; y = 2.',
      'Inequação: -2x > 6 → x < -3 (sinal invertido ao dividir por -2).'
    ],

    comparacoes: [
      { termoA: 'Equação do 1º grau', termoB: 'Equação do 2º grau', diferenca: '1º GRAU: ax + b = 0 → solução única x = -b/a. 2º GRAU: ax² + bx + c = 0 → até 2 raízes, calculadas por Bhaskara (x = (-b ± √Δ)/2a). A presença do x² muda tudo: análise do discriminante decide se há 0, 1 ou 2 raízes.' },
      { termoA: 'Substituição', termoB: 'Eliminação', diferenca: 'SUBSTITUIÇÃO: isola uma incógnita em uma equação e substitui na outra. ELIMINAÇÃO: soma ou subtrai as equações para eliminar uma incógnita diretamente. Ambos resolvem o mesmo tipo de sistema — escolha o que for mais simples no caso concreto.' },
      { termoA: 'Equação', termoB: 'Inequação', diferenca: 'EQUAÇÃO: usa sinal de igualdade (=). Tem soluções pontuais. INEQUAÇÃO: usa <, >, ≤ ou ≥. Tem intervalo de soluções. ATENÇÃO: ao multiplicar/dividir por número NEGATIVO em uma inequação, o SINAL INVERTE.' },
      { termoA: 'Discriminante Δ > 0', termoB: 'Discriminante Δ = 0', diferenca: 'Δ > 0: duas raízes reais DISTINTAS (a parábola cruza o eixo x em 2 pontos). Δ = 0: uma raiz real DUPLA (a parábola toca o eixo x em 1 ponto). Δ < 0: nenhuma raiz real (a parábola não toca o eixo x).' }
    ],

    aplicacaoEmConcurso: 'Cobrança conforme o edital. Aparece em problemas de área (terreno quadrado), movimento (queda livre, distância), mistura, otimização e em questões de RLM que exigem montar sistemas. Se o edital cita "equações do 2º grau", invista tempo. Caso contrário, foque nos sistemas (mais cobrados).',

    pegadinhas: [
      'Esquecer o sinal negativo em -b: a fórmula é (-b ± √Δ)/2a.',
      'Errar o cálculo do Δ: Δ = b² - 4ac (não b - 4ac).',
      'Achar que Δ < 0 significa "sem solução". Significa "sem raiz REAL" — mas ainda pode ter complexas.',
      'Em sistemas, isolar errado ou esquecer de substituir o valor em uma das equações originais.',
      'Em inequações, esquecer de INVERTER o sinal ao dividir por número negativo. Ex.: -2x > 6 → x < -3.',
      'Confundir soma (S = -b/a) com produto (P = c/a) nas relações de Girard.'
    ],

    errosComuns: [
      'Decorar Bhaskara sem entender o discriminante.',
      'Não verificar a solução encontrada substituindo na equação original.',
      'Confundir ax² + bx + c = 0 com ax² + bx = 0 (incompleta, resolve por fatoração: x(ax + b) = 0).',
      'Em problemas contextualizados, aceitar raízes negativas (ex.: idade negativa não faz sentido).'
    ],

    resumo: [
      'Equação do 2º grau: ax² + bx + c = 0, com a ≠ 0.',
      'Bhaskara: x = (-b ± √Δ) / 2a, com Δ = b² - 4ac.',
      'Δ > 0: 2 raízes. Δ = 0: 1 raiz dupla. Δ < 0: 0 raízes reais.',
      'Girard: S = -b/a; P = c/a.',
      'Sistemas: substituição ou eliminação.',
      'Inequação: INVERTE o sinal ao multiplicar/dividir por número negativo.',
      'Sempre conferir a solução na equação original.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Equação do 2º grau é uma equação com x². O "delta" decide quantas raízes tem. Se positivo, duas; se zero, uma; se negativo, nenhuma real. O resto é aplicar Bhaskara.',
      outroExemplo: 'Um terreno retangular tem área 60 m² e perímetro 34 m. Quais as dimensões? x + y = 17 (semiperímetro) e x × y = 60. Resolvendo: y = 17 - x → x(17 - x) = 60 → x² - 17x + 60 = 0 → Δ = 289 - 240 = 49 → x = (17 ± 7)/2 → x = 12 ou x = 5. Dimensões: 12 m × 5 m.',
      compararConceitos: 'Bhaskara: fórmula geral. Discriminante: decide quantidade de raízes. Girard: atalho por soma/produto. Sistemas: substituição ou eliminação. Inequação: cuidado com sinal negativo.',
      mostrarPegadinha: 'Cuidado: "-2x > 6 → x > -3". ERRADO. Ao dividir por -2 (negativo), o sinal INVERTE: x < -3. Esquecer isso é o erro mais comum em inequações.',
      comoApareceEmConcurso: 'Problemas de área, otimização e sistemas de equações.',
      fazerPergunta: {
        pergunta: 'Quais as raízes da equação x² - 5x + 6 = 0?',
        resposta: 'Δ = 25 - 24 = 1. x = (5 ± 1)/2 → x1 = 3 e x2 = 2. Verificando: 3² - 5×3 + 6 = 9 - 15 + 6 = 0 ✓; 2² - 5×2 + 6 = 4 - 10 + 6 = 0 ✓.'
      }
    }
  },

  /* ============================================================
     MAT-19 — Lógica Proposicional
  ============================================================ */
  'MAT-19': {
    id: 'L-MAT-19',
    moduloId: 'MAT-19',
    objetivo: 'Compreender proposições, proposições simples e compostas, valor lógico, negação, conectivos (conjunção, disjunção, condicional, bicondicional) e tabelas-verdade. Base para raciocínio lógico em concursos.',
    prerequisitos: ['MAT-18'],

    introducao: 'Lógica proposicional é a base do raciocínio lógico cobrado em concursos. Trabalha com proposições (afirmações que podem ser verdadeiras ou falsas) e conectivos que as combinam. É muito cobrada em provas de RLM e áreas administrativas.',

    explicacaoSimples: 'Proposição é uma frase que pode ser classificada como V (verdadeira) ou F (falsa). Ex.: "O céu é azul" (proposição). "Que horas são?" (não é proposição). Conectivos são palavras que juntam proposições: E, OU, SE... ENTÃO, SE E SOMENTE SE. Cada um tem uma tabela-verdade.',

    explicacaoTecnica: 'PROPOSIÇÃO: sentença declarativa que pode ser V ou F. PROPOSIÇÕES SIMPLES (p, q, r): uma única afirmação. COMPOSTAS: duas ou mais, unidas por conectivos. CONECTIVOS E TABELAS-VERDADE (resumo): NEGAÇÃO (¬p): inverte o valor. CONJUNÇÃO (p ∧ q, "E"): só é V se ambas V. DISJUNÇÃO (p ∨ q, "OU"): só é F se ambas F. CONDICIONAL (p → q, "SE p ENTÃO q"): só é F quando p é V e q é F. BICONDICIONAL (p ↔ q, "p SE E SOMENTE SE q"): V quando ambas têm o mesmo valor. NÚMERO DE LINHAS DA TABELA: 2ⁿ, onde n = número de proposições simples. Ex.: 2 proposições → 4 linhas; 3 proposições → 8 linhas. PRIORIDADE DOS CONECTIVOS (da maior para a menor): ¬, ∧, ∨, →, ↔.',

    exemplos: [
      'Proposição: "3 é primo" (V). Não proposição: "Você vai à festa?" (pergunta).',
      'Conjunção p ∧ q: "Estudo e trabalho". Só é V se as duas forem V.',
      'Disjunção p ∨ q: "Estudo ou trabalho". Só é F se as duas forem F.',
      'Condicional p → q: "Se estudo, então passo". Só é F se p = V e q = F.',
      'Bicondicional p ↔ q: "Estudo se e somente se passo". V quando p e q têm o mesmo valor.',
      'Negação: ¬p inverte. Se p = V, ¬p = F.',
      'Tabela com 3 proposições: 2³ = 8 linhas.'
    ],

    comparacoes: [
      { termoA: 'Conjunção (∧)', termoB: 'Disjunção (∨)', diferenca: 'CONJUNÇÃO ("E"): só é VERDADEIRA quando AMBAS as proposições são V. Ex.: "Chove e faz frio" → só V se ambos. DISJUNÇÃO ("OU"): só é FALSA quando AMBAS são F. Ex.: "Chove ou faz frio" → só F se ambos F. Lembre: ∧ é rigoroso (exige tudo V); ∨ é flexível (basta um V).' },
      { termoA: 'Condicional (→)', termoB: 'Bicondicional (↔)', diferenca: 'CONDICIONAL (p → q): só é FALSA quando p = V e q = F. Em todos os outros casos, é V. BICONDICIONAL (p ↔ q): VERDADEIRO quando p e q têm o MESMO valor (V-V ou F-F); FALSO quando são diferentes (V-F ou F-V).' },
      { termoA: 'Proposição simples', termoB: 'Proposição composta', diferenca: 'SIMPLES: uma única afirmação (p, q). COMPOSTA: duas ou mais simples unidas por conectivos (p ∧ q, p → q). O número de linhas da tabela-verdade depende do número de proposições simples: 2ⁿ.' },
      { termoA: 'Negação (¬)', termoB: 'Contrário', diferenca: 'NEGAÇÃO (¬p): inverte o valor lógico. Se p = V, ¬p = F. É precisa: a negação de "todo A é B" é "existe A que não é B", NÃO "nenhum A é B". O contrário nem sempre é a negação lógica.' }
    ],

    aplicacaoEmConcurso: 'Lógica proposicional é cobrada em praticamente todo concurso com RLM. Aparece como: identificação de proposições, análise de valor lógico, montagem de tabelas-verdade, equivalências lógicas e negações. É a base para os módulos MAT-20 (equivalências) e demais questões de lógica.',

    pegadinhas: [
      'Achar que a condicional p → q é F quando p = F. NÃO — só é F quando p = V e q = F.',
      'Confundir "ou" inclusivo (∨) com "ou exclusivo" (⊕). Em lógica clássica, o "ou" é INCLUSIVO (basta um V).',
      'Errar a negação de "todo A é B". A negação é "existe A que não é B", NÃO "nenhum A é B".',
      'Confundir o número de linhas da tabela-verdade: 2ⁿ (n = proposições simples), não 2 × n.',
      'Trocar a ordem de avaliação dos conectivos (prioridade: ¬, ∧, ∨, →, ↔).',
      'Achar que a negação de uma conjunção é a negação de cada parte. É: ¬(p ∧ q) = ¬p ∨ ¬q (De Morgan).'
    ],

    errosComuns: [
      'Decorar tabelas sem entender o significado dos conectivos.',
      'Confundir a condicional com a bicondicional.',
      'Esquecer de negar AMBAS as partes ao aplicar De Morgan.'
    ],

    resumo: [
      'Proposição: sentença V ou F. Não: perguntas, exclamações, ordens.',
      'Negação (¬): inverte o valor.',
      'Conjunção (∧): V só se ambas V.',
      'Disjunção (∨): F só se ambas F.',
      'Condicional (→): F só quando V → F.',
      'Bicondicional (↔): V se ambas iguais.',
      'Tabela com n proposições simples: 2ⁿ linhas.',
      'Prioridade: ¬, ∧, ∨, →, ↔.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Imagine uma prova de tiro ao alvo: a conjunção (E) exige acertar os DOIS alvos; a disjunção (OU) exige acertar PELO MENOS UM. A condicional (SE...ENTÃO) só falha quando o primeiro é verdadeiro e o segundo falso.',
      outroExemplo: 'Se "vou à praia" (p) e "está sol" (q). A proposição p → q ("se vou à praia, então está sol") é FALSA se eu fui à praia e NÃO estava sol. Em todos os outros casos (não fui, ou fui e estava sol, ou não fui e não estava sol), é verdadeira.',
      compararConceitos: '∧ = rigoroso (tudo V). ∨ = flexível (basta um V). → = só falha com V→F. ↔ = V quando iguais. ¬ = inverte.',
      mostrarPegadinha: 'Cuidado: "A condicional é falsa quando p é falso". ERRADO. A condicional p → q só é FALSA quando p = V e q = F. Se p é falso, a condicional é automaticamente verdadeira ("verdade vazia").',
      comoApareceEmConcurso: 'Toda prova de RLM cobra proposições e tabelas-verdade.',
      fazerPergunta: {
        pergunta: 'Qual o valor lógico de "3 > 5 → 10 > 7"?',
        respostA: 'VERDADEIRO. A primeira parte (3 > 5) é FALSA, então a condicional é automaticamente verdadeira. Lembre: F → V = V; F → F = V; V → F = F.'
      }
    }
  },

  /* ============================================================
     MAT-20 — Equivalências e Argumentação Lógica
  ============================================================ */
  'MAT-20': {
    id: 'L-MAT-20',
    moduloId: 'MAT-20',
    objetivo: 'Compreender equivalências lógicas, Leis de De Morgan, negação de proposições, condições necessárias e suficientes, argumentos, premissas e conclusões, validade de argumentos e inferências.',
    prerequisitos: ['MAT-19'],

    introducao: 'Equivalências lógicas permitem reescrever uma proposição sem alterar seu valor lógico. As Leis de De Morgan são as mais cobradas. Argumentação lógica testa se uma conclusão segue necessariamente das premissas. É a continuação natural de MAT-19.',

    explicacaoSimples: 'Duas proposições são equivalentes quando têm a mesma tabela-verdade. "Se chove, então uso guarda-chuva" é equivalente a "Se não uso guarda-chuva, então não chove". As Leis de De Morgan mostram como negar conjunções e disjunções. Argumento válido é aquele em que, se as premissas são verdadeiras, a conclusão é necessariamente verdadeira.',

    explicacaoTecnica: 'EQUIVALÊNCIAS FUNDAMENTAIS: p → q ≡ ¬q → ¬p (contrapositiva); p → q ≡ ¬p ∨ q; p ↔ q ≡ (p → q) ∧ (q → p). LEIS DE DE MORGAN: ¬(p ∧ q) ≡ ¬p ∨ ¬q (negação de "E" vira "OU" com as negações); ¬(p ∨ q) ≡ ¬p ∧ ¬q (negação de "OU" vira "E" com as negações). NEGAÇÃO DA CONDICIONAL: ¬(p → q) ≡ p ∧ ¬q ("mantém o primeiro, nega o segundo, troca o SE por E"). NEGAÇÃO DA BICONDICIONAL: ¬(p ↔ q) ≡ p ↔ ¬q (ou ¬p ↔ q). CONDIÇÃO NECESSÁRIA E SUFICIENTE: em p → q, p é SUFICIENTE para q; q é NECESSÁRIA para p. VALIDADE DE ARGUMENTO: um argumento é VÁLIDO quando a conclusão é consequência lógica das premissas (não é possível ter premissas V e conclusão F simultaneamente). Métodos de verificação: tabela-verdade; regras de inferência (modus ponens, modus tollens).',

    exemplos: [
      'Contrapositiva: "Se chove, uso guarda-chuva" ≡ "Se não uso guarda-chuva, não chove".',
      'De Morgan: ¬(p ∧ q) ≡ ¬p ∨ ¬q. Ex.: negar "Estudo e trabalho" → "Não estudo OU não trabalho".',
      'De Morgan: ¬(p ∨ q) ≡ ¬p ∧ ¬q. Ex.: negar "Estudo ou trabalho" → "Não estudo E não trabalho".',
      'Negação da condicional: ¬("Se estudo, passo") ≡ "Estudo E não passo".',
      'p → q ≡ ¬p ∨ q. Ex.: "Se chove, uso guarda-chuva" ≡ "Não chove ou uso guarda-chuva".',
      'Modus ponens: p → q; p ∴ q. Ex.: Se chove, molho. Chove. Logo, molho.',
      'Modus tollens: p → q; ¬q ∴ ¬p. Ex.: Se chove, molho. Não molho. Logo, não chove.'
    ],

    comparacoes: [
      { termoA: 'Negação', termoB: 'Equivalência', diferenca: 'NEGAÇÃO: inverte o valor lógico. ¬p é o oposto de p. EQUIVALÊNCIA: duas proposições com a MESMA tabela-verdade. p → q ≡ ¬q → ¬p. Negar ≠ equivalente: a negação de "Se chove, molho" é "Chove E não molho"; a contrapositiva é "Se não molho, então não chove".' },
      { termoA: 'Modus ponens', termoB: 'Modus tollens', diferenca: 'MODUS PONENS: afirma o antecedente. Forma: p → q; p ∴ q. Ex.: "Se chove, molho. Chove. Logo, molho." MODUS TOLLENS: nega o consequente. Forma: p → q; ¬q ∴ ¬p. Ex.: "Se chove, molho. Não molho. Logo, não chove." São as duas regras de inferência mais usadas.' },
      { termoA: 'Condição suficiente', termoB: 'Condição necessária', diferenca: 'Em p → q ("se p então q"): p é SUFICIENTE para q (basta p para ter q). q é NECESSÁRIA para p (sem q, não tem p). Ex.: "Se é mineiro, então é brasileiro" — ser mineiro é SUFICIENTE para ser brasileiro; ser brasileiro é NECESSÁRIO para ser mineiro.' },
      { termoA: 'Argumento válido', termoB: 'Argumento verdadeiro', diferenca: 'VÁLIDO: a FORMA lógica garante que se as premissas forem verdadeiras, a conclusão será verdadeira. VERDADEIRO: as premissas são de fato verdadeiras. Um argumento pode ser válido com premissas falsas (a validade está na estrutura, não no conteúdo).' }
    ],

    aplicacaoEmConcurso: 'Cobrado intensamente em RLM. As questões pedem: negar proposições compostas, identificar equivalências (contrapositiva, De Morgan), avaliar validade de argumentos. As Leis de De Morgan e a negação da condicional são campeãs. É a base para resolver questões de raciocínio lógico mais complexas.',

    pegadinhas: [
      'Negar uma conjunção sem usar De Morgan: ¬(p ∧ q) NÃO é ¬p ∧ ¬q. É ¬p ∨ ¬q.',
      'Confundir a recíproca (q → p) com a contrapositiva (¬q → ¬p). Só a contrapositiva é equivalente a p → q.',
      'Errar a negação da condicional: ¬(p → q) ≡ p ∧ ¬q (mantém p, nega q). NÃO é ¬p → ¬q.',
      'Achar que um argumento com premissas falsas é inválido. A validade é estrutural; as premissas podem ser falsas.',
      'Confundir condição suficiente com necessária. Em p → q: p é suficiente; q é necessária.',
      'Trocar as regras de Modus Ponens e Modus Tollens.'
    ],

    errosComuns: [
      'Aplicar De Morgan sem negar as duas partes.',
      'Confundir equivalência com recíproca.',
      'Não verificar a validade estrutural em argumentos.'
    ],

    resumo: [
      'Contrapositiva: p → q ≡ ¬q → ¬p.',
      'De Morgan 1: ¬(p ∧ q) ≡ ¬p ∨ ¬q.',
      'De Morgan 2: ¬(p ∨ q) ≡ ¬p ∧ ¬q.',
      'Negação da condicional: ¬(p → q) ≡ p ∧ ¬q.',
      'p → q ≡ ¬p ∨ q.',
      'Modus ponens: p → q; p ∴ q.',
      'Modus tollens: p → q; ¬q ∴ ¬p.',
      'Suficiente: p em p → q. Necessária: q em p → q.',
      'Argumento VÁLIDO: estrutura garante conclusão se premissas V.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'As Leis de De Morgan são o "truque" para negar "E" e "OU": nega tudo e troca o conectivo. "Estudo E trabalho" negado é "Não estudo OU não trabalho". Para negar "SE...ENTÃO", você mantém a primeira e nega a segunda, trocando o "se" por "e".',
      outroExemplo: 'A proposição "Se bebo café, fico acordado" tem três equivalentes cobradas: contrapositiva ("Se não fico acordado, não bebo café"), com ∨ ("Não bebo café ou fico acordado") e negação ("Bebo café E não fico acordado"). Saber transitar entre elas é decisivo.',
      compararConceitos: 'De Morgan: nega tudo e troca ∧ por ∨ (e vice-versa). Condicional: p → q ≡ ¬p ∨ q ≡ ¬q → ¬p. Negação da condicional: p ∧ ¬q. Suficiente x necessária: p suficiente; q necessária.',
      mostrarPegadinha: 'Cuidado: "A negação de \'se estudo, então passo\' é \'se não estudo, então não passo\'". ERRADO. A negação é "Estudo E NÃO passo". A condicional só é falsa quando o antecedente é V e o consequente é F.',
      comoApareceEmConcurso: 'RLM, toda prova cobra De Morgan, negação da condicional e validade de argumentos.',
      fazerPergunta: {
        pergunta: 'Qual a negação de "Todos os alunos estudaram"?',
        resposta: 'A negação de "todo A é B" é "algum A não é B". Portanto: "Algum aluno NÃO estudou". NUNCA "Nenhum aluno estudou" — essa é a contrária, não a negação lógica.'
      }
    }
  },

  /* ============================================================
     MAT-22 — Análise Combinatória e Probabilidade
  ============================================================ */
  'MAT-22': {
    id: 'L-MAT-22',
    moduloId: 'MAT-22',
    objetivo: 'Compreender o princípio fundamental da contagem, princípio multiplicativo, permutações, arranjos e combinações, espaço amostral, eventos, probabilidade simples, casos favoráveis e possíveis, e problemas contextualizados.',
    prerequisitos: ['MAT-19'],

    introducao: 'Análise combinatória conta possibilidades: de quantas formas posso organizar, escolher ou combinar elementos. Probabilidade mede a chance de um evento ocorrer. São temas muito cobrados em concursos de RLM e áreas administrativas — especialmente em problemas de senhas, filas, sorteios e grupos.',

    explicacaoSimples: 'Se tenho 3 camisas e 4 calças, de quantas formas posso me vestir? 3 × 4 = 12 (princípio multiplicativo). Se quero ESCOLHER 2 entre 5 pessoas para uma comissão, uso combinação: C(5,2) = 10. Se a ORDEM importa (presidente e vice), uso arranjo: A(5,2) = 20. Se todos participam e a ordem importa (fila), uso permutação: P(5) = 120.',

    explicacaoTecnica: 'PRINCÍPIO FUNDAMENTAL DA CONTAGEM: se uma decisão pode ser tomada de m formas e outra de n formas, o total é m × n. PERMUTAÇÃO: todos os n elementos são usados, a ordem importa. P(n) = n! = n × (n-1) × ... × 1. Ex.: fila de 4 pessoas = 4! = 24. ARRANJO: escolher p entre n, a ORDEM IMPORTA. A(n,p) = n! / (n-p)!. COMBINAÇÃO: escolher p entre n, a ORDEM NÃO IMPORTA. C(n,p) = n! / [p!(n-p)!]. PROBABILIDADE: P(E) = casos favoráveis / casos possíveis. Propriedades: 0 ≤ P(E) ≤ 1; P(∅) = 0; P(universo) = 1; P(não E) = 1 - P(E). Probabilidade da união: P(A ∪ B) = P(A) + P(B) - P(A ∩ B).',

    exemplos: [
      'Princípio multiplicativo: 3 camisas e 4 calças → 12 combinações.',
      'Permutação: 5 pessoas em uma fila → 5! = 120.',
      'Arranjo: 6 candidatos para 2 cargos (presidente e vice) → A(6,2) = 6!/4! = 30.',
      'Combinação: 6 pessoas para formar comissão de 2 → C(6,2) = 6!/(2!4!) = 15.',
      'Probabilidade: dado de 6 faces, P(sair número par) = 3/6 = 1/2.',
      'Probabilidade: 3 bolas vermelhas e 2 azuis; P(retirar vermelha) = 3/5.',
      'P(não chover) = 1 - P(chover). Ex.: se P(chover) = 0,3, então P(não chover) = 0,7.'
    ],

    comparacoes: [
      { termoA: 'Arranjo', termoB: 'Combinação', diferenca: 'ARRANJO (A): a ORDEM importa. A(n,p) = n!/(n-p)!. Ex.: 6 candidatos para presidente e vice = 6 × 5 = 30. COMBINAÇÃO (C): a ORDEM NÃO importa. C(n,p) = n!/[p!(n-p)!]. Ex.: 6 candidatos para comissão de 2 = 15. Regra de ouro: se trocar a ordem gera resultado diferente, use ARRANJO; se não, use COMBINAÇÃO.' },
      { termoA: 'Permutação', termoB: 'Arranjo', diferenca: 'PERMUTAÇÃO (P): todos os n elementos são usados (p = n). P(n) = n!. Ex.: fila de 5 pessoas = 5!. ARRANJO: usa apenas PARTE dos elementos (p < n). A(n,p) = n!/(n-p)!. Ex.: 5 pessoas para 2 cargos = 5 × 4 = 20.' },
      { termoA: 'Probabilidade', termoB: 'Análise combinatória', diferenca: 'COMBINATÓRIA: conta possibilidades (de quantas formas posso fazer). PROBABILIDADE: mede chance (probabilidade de um evento). A probabilidade usa a combinatória como ferramenta: P = favoráveis / possíveis. Muitos problemas de probabilidade exigem primeiro a contagem combinatória.' },
      { termoA: 'Evento complementar', termoB: 'Evento impossível', diferenca: 'COMPLEMENTAR: tudo o que NÃO é o evento. P(¬E) = 1 - P(E). Ex.: P(não chover) = 1 - P(chover). IMPOSSÍVEL: nunca ocorre. P = 0 (ex.: tirar 7 em um dado de 6 faces). Evento certo: P = 1 (ex.: tirar número de 1 a 6 em um dado).' }
    ],

    aplicacaoEmConcurso: 'Cobrança conforme edital, mas frequente em RLM. Aparece em problemas de: senhas, placas, filas, sorteios, comissões, agrupamentos, distribuição de prêmios, anagramas e probabilidades com cartas, dados e urnas. A distinção arranjo x combinação é a pegadinha mais comum.',

    pegadinhas: [
      'Confundir arranjo com combinação. Teste: "trocar a ordem dá resultado diferente?" Se sim, arranjo; se não, combinação.',
      'Esquecer que 0! = 1 (por definição).',
      'Aplicar a fórmula de combinação quando o problema envolve ordem (e vice-versa).',
      'Somar probabilidades sem subtrair a interseção: P(A ∪ B) = P(A) + P(B) - P(A ∩ B).',
      'Confundir "ao menos um" com "nenhum". "Ao menos um" = 1 - P(nenhum).',
      'Errar o espaço amostral: contar como favoráveis eventos que não satisfazem exatamente a condição.'
    ],

    errosComuns: [
      'Decorar fórmulas sem entender quando usar cada uma.',
      'Esquecer de dividir pelo fatorial das repetições em combinações.',
      'Não identificar se o problema pede arranjo ou combinação.'
    ],

    resumo: [
      'Princípio multiplicativo: m × n formas.',
      'Permutação: todos os elementos; ordem importa. P(n) = n!.',
      'Arranjo: parte dos elementos; ordem importa. A(n,p) = n!/(n-p)!.',
      'Combinação: parte dos elementos; ordem NÃO importa. C(n,p) = n!/[p!(n-p)!].',
      'Probabilidade: P = favoráveis / possíveis.',
      'P(¬E) = 1 - P(E).',
      'P(A ∪ B) = P(A) + P(B) - P(A ∩ B).',
      '0! = 1.',
      'Regra de ouro: se a ordem importa → arranjo; se não → combinação.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Imagine uma fila. Se você quer saber quantas ORDENS diferentes de 5 pessoas existem, é permutação (5! = 120). Se você vai ESCOLHER 2 pessoas entre 5 para uma comissão SEM cargos definidos, é combinação (10). Se os 2 escolhidos vão ocupar cargos DIFERENTES (presidente e vice), é arranjo (20).',
      outroExemplo: 'Quantos anagramas tem a palavra AMOR? São 4 letras diferentes: 4! = 24. Se fosse CASA (com A repetido 2 vezes): 4!/2! = 12. Quantas comissões de 3 pessoas posso formar com 7 candidatos? C(7,3) = 35. Se for escolher 3 pessoas para 3 cargos (presidente, secretário, tesoureiro), é arranjo: A(7,3) = 210.',
      compararConceitos: 'Permutação: todos, ordem importa (n!). Arranjo: parte, ordem importa (n!/(n-p)!). Combinação: parte, ordem NÃO importa (n!/[p!(n-p)!]). Probabilidade: favoráveis/possíveis. Complemento: 1 - P(E).',
      mostrarPegadinha: 'Cuidado: "Escolher 2 pessoas entre 5 para uma comissão é arranjo". ERRADO. Comissão NÃO tem ordem — é combinação: C(5,2) = 10. Se os cargos fossem presidente e vice, aí seria arranjo: A(5,2) = 20.',
      comoApareceEmConcurso: 'RLM, probabilidade, contagem e problemas contextualizados (senhas, filas, comissões, sorteios).',
      fazerPergunta: {
        pergunta: 'De quantas formas posso escolher 2 cartas de um baralho de 4 cartas (A, B, C, D)?',
        resposta: 'C(4,2) = 4!/(2!2!) = 24/4 = 6. As combinações são: AB, AC, AD, BC, BD, CD. A ordem NÃO importa (AB = BA), por isso é combinação.'
      }
    }
  }

};
