/* ============================================================
   FLASHCARDS — Módulos ESSENCIAIS
   Preenchidos: MAT-01, MAT-03, MAT-06, MAT-07, MAT-08
   ============================================================ */

window.FLASHCARDS = [

  /* ============================================================
     MAT-01 — Operações Fundamentais
  ============================================================ */
  {
    id: 'F-MAT-01-0001',
    moduloId: 'MAT-01',
    topicoId: 'MAT-01',
    frente: 'Qual é a ordem de prioridade das operações em uma expressão numérica?',
    verso: '1) Parênteses ( ); 2) Colchetes [ ]; 3) Chaves { }; 4) Potenciação e radiciação; 5) Multiplicação e divisão (da esquerda para a direita); 6) Adição e subtração (da esquerda para a direita). Quem desrespeita a ordem erra o resultado.',
    dificuldade: 1,
    tags: ['prioridade', 'expressões']
  },
  {
    id: 'F-MAT-01-0002',
    moduloId: 'MAT-01',
    topicoId: 'MAT-01',
    frente: 'Por que não existe divisão por zero?',
    verso: 'Porque a divisão é a operação inversa da multiplicação. Para a ÷ 0 = x, precisaríamos de x × 0 = a. Mas qualquer número multiplicado por 0 dá 0, então x × 0 = a só seria possível se a = 0 — e mesmo assim x seria indeterminado. Logo, a ÷ 0 é indefinida.',
    dificuldade: 2,
    tags: ['divisão', 'zero']
  },
  {
    id: 'F-MAT-01-0003',
    moduloId: 'MAT-01',
    topicoId: 'MAT-01',
    frente: 'Qual a diferença entre adição e multiplicação?',
    verso: 'ADIÇÃO: junta valores diferentes (3 + 5 = 8). MULTIPLICAÇÃO: soma repetida de um mesmo valor (3 × 5 = 3 + 3 + 3 + 3 + 3 = 15). Ambas são comutativas (a ordem não altera o resultado), mas apenas a multiplicação é distributiva em relação à adição.',
    dificuldade: 1,
    tags: ['adição', 'multiplicação']
  },
  {
    id: 'F-MAT-01-0004',
    moduloId: 'MAT-01',
    topicoId: 'MAT-01',
    frente: 'Como conferir se uma multiplicação está correta?',
    verso: 'Use a operação inversa (divisão). Se 234 × 7 = 1.638, então 1.638 ÷ 7 = 234 e 1.638 ÷ 234 = 7. Se algum dos resultados não bater, houve erro na multiplicação. Vale o mesmo para soma (subtração) e subtração (soma).',
    dificuldade: 2,
    tags: ['verificação', 'operações inversas']
  },

  /* ============================================================
     MAT-03 — Frações e Números Decimais
  ============================================================ */
  {
    id: 'F-MAT-03-0001',
    moduloId: 'MAT-03',
    topicoId: 'MAT-03',
    frente: 'Como converter fração → decimal → porcentagem?',
    verso: 'FRAÇÃO → DECIMAL: divida o numerador pelo denominador. Ex.: 3/4 = 0,75. DECIMAL → PORCENTAGEM: multiplique por 100. Ex.: 0,75 × 100 = 75%. FRAÇÃO → PORCENTAGEM: divida e multiplique por 100 (ou use a fração equivalente com denominador 100). Ex.: 3/4 = 75/100 = 75%.',
    dificuldade: 1,
    tags: ['conversão', 'fração', 'decimal', 'porcentagem']
  },
  {
    id: 'F-MAT-03-0002',
    moduloId: 'MAT-03',
    topicoId: 'MAT-03',
    frente: 'Como somar e subtrair frações com denominadores diferentes?',
    verso: 'Reduza ao mesmo denominador pelo MMC. Ex.: 1/2 + 1/3 → MMC = 6 → 3/6 + 2/6 = 5/6. NUNCA some numeradores e denominadores diretamente (1/2 + 1/3 NÃO é 2/5). Após a soma, simplifique o resultado se possível.',
    dificuldade: 2,
    tags: ['fração', 'adição', 'MMC']
  },
  {
    id: 'F-MAT-03-0003',
    moduloId: 'MAT-03',
    topicoId: 'MAT-03',
    frente: 'Como multiplicar e dividir frações?',
    verso: 'MULTIPLICAÇÃO: multiplique numerador por numerador e denominador por denominador. Ex.: 2/5 × 3/4 = 6/20 = 3/10. DIVISÃO: multiplique a primeira pelo INVERSO da segunda. Ex.: (2/5) ÷ (3/4) = 2/5 × 4/3 = 8/15. Simplifique sempre o resultado final.',
    dificuldade: 2,
    tags: ['fração', 'multiplicação', 'divisão']
  },
  {
    id: 'F-MAT-03-0004',
    moduloId: 'MAT-03',
    topicoId: 'MAT-03',
    frente: 'Como encontrar a fração geratriz de uma dízima periódica?',
    verso: 'DÍZIMA SIMPLES (ex.: 0,333...): coloque o período sobre uma sequência de 9. Ex.: 0,333... = 3/9 = 1/3. DÍZIMA COMPOSTA (ex.: 0,1666...): (parte não periódica + período) - (parte não periódica), sobre uma sequência de 9 seguida de 0. Ex.: (16 - 1)/90 = 15/90 = 1/6.',
    dificuldade: 3,
    tags: ['dízima', 'fração geratriz']
  },

  /* ============================================================
     MAT-06 — Razão, Proporção e Divisão Proporcional
  ============================================================ */
  {
    id: 'F-MAT-06-0001',
    moduloId: 'MAT-06',
    topicoId: 'MAT-06',
    frente: 'Qual é a propriedade fundamental das proporções?',
    verso: 'Em uma proporção a/b = c/d, o produto dos EXTREMOS é igual ao produto dos MEIOS: a × d = b × c. É a base da multiplicação cruzada, usada em regra de três e em equações com proporções.',
    dificuldade: 2,
    tags: ['proporção', 'propriedade fundamental']
  },
  {
    id: 'F-MAT-06-0002',
    moduloId: 'MAT-06',
    topicoId: 'MAT-06',
    frente: 'Como identificar se duas grandezas são direta ou inversamente proporcionais?',
    verso: 'Teste prático: se uma grandeza AUMENTA e a outra TAMBÉM AUMENTA (na mesma razão) → DIRETAMENTE proporcionais. Se uma AUMENTA e a outra DIMINUI (na razão inversa) → INVERSAMENTE proporcionais. Ex.: mais kg de pão → mais valor pago (direta); mais velocidade → menos tempo de viagem (inversa).',
    dificuldade: 2,
    tags: ['proporcionalidade', 'direta', 'inversa']
  },
  {
    id: 'F-MAT-06-0003',
    moduloId: 'MAT-06',
    topicoId: 'MAT-06',
    frente: 'Como dividir um valor em partes DIRETAMENTE proporcionais a 2, 3 e 5?',
    verso: 'Some os pesos: 2 + 3 + 5 = 10. Ache a constante k = valor total / 10. Multiplique cada peso por k. Ex.: dividir R$ 1.000 → k = 100 → partes 200, 300 e 500. A soma das partes deve sempre igualar o total (confira!).',
    dificuldade: 3,
    tags: ['divisão proporcional', 'direta']
  },
  {
    id: 'F-MAT-06-0004',
    moduloId: 'MAT-06',
    topicoId: 'MAT-06',
    frente: 'Como dividir um valor em partes INVERSAMENTE proporcionais a 2 e 3?',
    verso: 'Use o INVERSO dos pesos: 1/2 e 1/3. Some: 1/2 + 1/3 = 3/6 + 2/6 = 5/6. Ache k = valor total / (5/6). Multiplique k por 1/2 e por 1/3. Ex.: dividir R$ 1.800 → k = 2.160 → partes 1.080 e 720.',
    dificuldade: 3,
    tags: ['divisão proporcional', 'inversa']
  },

  /* ============================================================
     MAT-07 — Regra de Três Simples e Composta
  ============================================================ */
  {
    id: 'F-MAT-07-0001',
    moduloId: 'MAT-07',
    topicoId: 'MAT-07',
    frente: 'Como resolver uma regra de três simples DIRETA?',
    verso: 'Monte a tabela com as duas grandezas. Verifique se são DIRETAS (ambas crescem juntas). Multiplique em cruz. Ex.: 5 cadernos → R$ 60; 8 cadernos → x. 5/8 = 60/x → 5x = 480 → x = R$ 96.',
    dificuldade: 1,
    tags: ['regra de três', 'direta']
  },
  {
    id: 'F-MAT-07-0002',
    moduloId: 'MAT-07',
    topicoId: 'MAT-07',
    frente: 'Como resolver uma regra de três simples INVERSA?',
    verso: 'Verifique se as grandezas são INVERSAS (uma cresce, a outra decresce). MULTIPLIQUE EM LINHA (ou inverta uma coluna e multiplique em cruz). Ex.: 4 pedreiros → 12 dias; 6 pedreiros → x. 4 × 12 = 6 × x → 48 = 6x → x = 8 dias.',
    dificuldade: 2,
    tags: ['regra de três', 'inversa']
  },
  {
    id: 'F-MAT-07-0003',
    moduloId: 'MAT-07',
    topicoId: 'MAT-07',
    frente: 'Qual é o passo a passo da regra de três COMPOSTA?',
    verso: '1) Monte a tabela com todas as grandezas (uma coluna por grandeza). 2) Isole mentalmente cada grandeza e compare com a incógnita, mantendo as demais constantes. 3) Classifique cada uma como direta ou inversa. 4) Multiplique o valor conhecido pelas razões das grandezas diretas e pelo INVERSO das inversas. 5) Calcule e confira o resultado.',
    dificuldade: 3,
    tags: ['regra de três', 'composta']
  },
  {
    id: 'F-MAT-07-0004',
    moduloId: 'MAT-07',
    topicoId: 'MAT-07',
    frente: 'Como resolver problemas de torneiras que enchem um tanque?',
    verso: 'Some as TAXAS (1/tempo), não os tempos. Se a torneira A enche em 6 h e a B em 3 h: em 1 h, A enche 1/6 e B enche 1/3. Juntas: 1/6 + 1/3 = 1/2 do tanque por hora. Tempo total = 2 h. NUNCA some 6 + 3 = 9 ou faça média (6+3)/2 = 4,5.',
    dificuldade: 3,
    tags: ['torneiras', 'razão de trabalho']
  },

  /* ============================================================
     MAT-08 — Porcentagem
  ============================================================ */
  {
    id: 'F-MAT-08-0001',
    moduloId: 'MAT-08',
    topicoId: 'MAT-08',
    frente: 'Como aplicar aumento e desconto percentual?',
    verso: 'AUMENTO de p%: multiplique por (1 + p/100). Ex.: +25% = × 1,25. DESCONTO de p%: multiplique por (1 - p/100). Ex.: -25% = × 0,75. Lembre: aumentar 25% e depois descontar 25% NÃO volta ao valor original (1,25 × 0,75 = 0,9375 → perda de 6,25%).',
    dificuldade: 2,
    tags: ['porcentagem', 'aumento', 'desconto']
  },
  {
    id: 'F-MAT-08-0002',
    moduloId: 'MAT-08',
    topicoId: 'MAT-08',
    frente: 'Como calcular a VARIAÇÃO PERCENTUAL entre dois valores?',
    verso: 'Variação = (Vfinal - Vinicial) / Vinicial × 100. O divisor é SEMPRE o valor INICIAL. Ex.: de 80 para 100 → (100 - 80)/80 × 100 = 25%. NUNCA divida pelo valor final.',
    dificuldade: 2,
    tags: ['porcentagem', 'variação']
  },
  {
    id: 'F-MAT-08-0003',
    moduloId: 'MAT-08',
    topicoId: 'MAT-08',
    frente: 'Por que porcentagens sucessivas NÃO se somam?',
    verso: 'Porque cada percentual incide sobre uma base DIFERENTE (o valor já alterado). Aumentos/descontos sucessivos devem ser MULTIPLICADOS. Ex.: +10% depois +20% = 1,10 × 1,20 = 1,32 = +32% (e não +30%). Já +25% depois -25% = 1,25 × 0,75 = 0,9375 = -6,25%.',
    dificuldade: 3,
    tags: ['porcentagem', 'sucessivas']
  },
  {
    id: 'F-MAT-08-0004',
    moduloId: 'MAT-08',
    topicoId: 'MAT-08',
    frente: 'Qual a diferença entre lucro sobre CUSTO e lucro sobre VENDA?',
    verso: 'LUCRO SOBRE CUSTO: base é o valor de compra. Ex.: comprou por 200, vendeu por 250 → lucro 50/200 = 25%. LUCRO SOBRE VENDA: base é o valor de venda. Ex.: mesmo caso → lucro 50/250 = 20%. O lucro absoluto é o mesmo; o percentual muda porque a base é diferente. As bancas usam isso como pegadinha.',
    dificuldade: 3,
    tags: ['porcentagem', 'lucro']
  }

];
