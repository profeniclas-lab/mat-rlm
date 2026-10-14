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
  },

  /* ============================================================
     MAT-02 — Conjuntos Numéricos
  ============================================================ */
  {
    id: 'F-MAT-02-0001',
    moduloId: 'MAT-02',
    topicoId: 'MAT-02',
    frente: 'Quais são os conjuntos numéricos e como se relacionam?',
    verso: 'ℕ = naturais (0, 1, 2, 3...); ℤ = inteiros (inclui negativos); ℚ = racionais (frações a/b, com b ≠ 0); 𝕀 = irracionais (√2, √3, π — decimais infinitos NÃO periódicos); ℝ = reais (ℚ ∪ 𝕀). Relações: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ; 𝕀 ⊂ ℝ. ℚ ∩ 𝕀 = ∅.',
    dificuldade: 1,
    tags: ['conjuntos']
  },
  {
    id: 'F-MAT-02-0002',
    moduloId: 'MAT-02',
    topicoId: 'MAT-02',
    frente: 'O que é módulo (valor absoluto) de um número e como se calcula?',
    verso: 'Módulo é a DISTÂNCIA do número até o zero na reta numérica — sempre ≥ 0. Regra: |x| = x se x ≥ 0; |x| = -x se x < 0. Ex.: |7| = 7; |-7| = 7; |0| = 0. Nunca é negativo. Em expressões, resolva o módulo antes das operações externas.',
    dificuldade: 2,
    tags: ['módulo']
  },
  {
    id: 'F-MAT-02-0003',
    moduloId: 'MAT-02',
    topicoId: 'MAT-02',
    frente: 'Como funciona a notação de intervalos?',
    verso: 'Colchete "de fora" ( ] ou [ ) indica extremo ABERTO (excluído). Colchete "de dentro" ( [ ou ] ) indica FECHADO (incluído). Exemplos: [2, 5] = {x | 2 ≤ x ≤ 5}; ]2, 5[ = {x | 2 < x < 5}; [2, 5[ = {x | 2 ≤ x < 5}; ]-∞, 3] = {x | x ≤ 3}.',
    dificuldade: 3,
    tags: ['intervalos']
  },

  /* ============================================================
     MAT-04 — Divisibilidade, MDC e MMC
  ============================================================ */
  {
    id: 'F-MAT-04-0001',
    moduloId: 'MAT-04',
    topicoId: 'MAT-04',
    frente: 'Qual a diferença entre MDC e MMC e quando usar cada um?',
    verso: 'MDC: MAIOR divisor comum — usado para DIVIDIR em partes iguais, formar grupos iguais, simplificar frações. MMC: MENOR múltiplo comum — usado para ENCONTROS periódicos, sincronização, soma de frações com denominadores diferentes. Regra: MDC ≤ menor número; MMC ≥ maior número.',
    dificuldade: 2,
    tags: ['MDC', 'MMC']
  },
  {
    id: 'F-MAT-04-0002',
    moduloId: 'MAT-04',
    topicoId: 'MAT-04',
    frente: 'Quais são os critérios de divisibilidade por 2, 3, 4, 5, 6, 8, 9 e 10?',
    verso: 'Por 2: termina em par. Por 3: soma dos algarismos é múltiplo de 3. Por 4: últimos 2 algarismos formam múltiplo de 4. Por 5: termina em 0 ou 5. Por 6: divisível por 2 E por 3. Por 8: últimos 3 algarismos formam múltiplo de 8. Por 9: soma dos algarismos é múltiplo de 9. Por 10: termina em 0.',
    dificuldade: 2,
    tags: ['divisibilidade']
  },
  {
    id: 'F-MAT-04-0003',
    moduloId: 'MAT-04',
    topicoId: 'MAT-04',
    frente: 'Como calcular MDC e MMC pela decomposição em fatores primos?',
    verso: 'Fatore cada número em primos. Ex.: 24 = 2³ × 3; 36 = 2² × 3². MDC: produto dos fatores COMUNS, cada um com o MENOR expoente → 2² × 3 = 12. MMC: produto de TODOS os fatores (comuns e não comuns), cada um com o MAIOR expoente → 2³ × 3² = 72. Relação: MDC × MMC = a × b.',
    dificuldade: 3,
    tags: ['MDC', 'MMC', 'fatoração']
  },

  /* ============================================================
     MAT-05 — Potenciação, Radiciação e Expressões
  ============================================================ */
  {
    id: 'F-MAT-05-0001',
    moduloId: 'MAT-05',
    topicoId: 'MAT-05',
    frente: 'Quais são as principais propriedades das potências?',
    verso: 'Mesma base: aᵐ × aⁿ = aᵐ⁺ⁿ (SOMA); aᵐ ÷ aⁿ = aᵐ⁻ⁿ (SUBTRAI). Potência de potência: (aᵐ)ⁿ = aᵐˣⁿ (MULTIPLICA). Distributiva: (a×b)ⁿ = aⁿ×bⁿ; (a÷b)ⁿ = aⁿ÷bⁿ. Casos especiais: a⁰ = 1 (a≠0); a¹ = a; a⁻ⁿ = 1/aⁿ; a^(m/n) = ⁿ√(aᵐ).',
    dificuldade: 2,
    tags: ['potenciação', 'propriedades']
  },
  {
    id: 'F-MAT-05-0002',
    moduloId: 'MAT-05',
    topicoId: 'MAT-05',
    frente: 'O que fazer com expoente NEGATIVO e qual o erro clássico?',
    verso: 'Expoente negativo: INVERTE a base e torna o expoente positivo. a⁻ⁿ = 1/aⁿ. Ex.: 2⁻³ = 1/8 = 0,125; 5⁻² = 1/25. ERRO CLÁSSICO: achar que o resultado é negativo (não é!). Outro erro: -2² = -4 (sem parênteses, o sinal fica fora); (-2)² = +4 (com parênteses).',
    dificuldade: 2,
    tags: ['expoente negativo']
  },
  {
    id: 'F-MAT-05-0003',
    moduloId: 'MAT-05',
    topicoId: 'MAT-05',
    frente: 'Como converter um número para notação científica?',
    verso: 'Formato: a × 10ⁿ, com 1 ≤ a < 10 (coeficiente) e n inteiro. Regra: desloque a vírgula até obter o coeficiente entre 1 e 10; o expoente é o número de casas deslocadas. Se deslocou para a esquerda (número grande), expoente POSITIVO; para a direita (número pequeno), NEGATIVO. Ex.: 480.000 = 4,8 × 10⁵; 0,00045 = 4,5 × 10⁻⁴.',
    dificuldade: 3,
    tags: ['notação científica']
  },

  /* ============================================================
     MAT-09 — Expressões Algébricas e Equações do 1º Grau
  ============================================================ */
  {
    id: 'F-MAT-09-0001',
    moduloId: 'MAT-09',
    topicoId: 'MAT-09',
    frente: 'Como resolver uma equação do 1º grau com parênteses?',
    verso: 'Passos: 1) Aplicar a propriedade distributiva para eliminar parênteses. 2) Agrupar termos semelhantes de cada lado. 3) Passar termos com x para um lado e números para o outro (TROCANDO O SINAL ao passar). 4) Dividir pelo coeficiente de x. Ex.: 3(x - 2) = 2(x + 1) → 3x - 6 = 2x + 2 → 3x - 2x = 2 + 6 → x = 8.',
    dificuldade: 2,
    tags: ['equação 1º grau', 'parênteses']
  },
  {
    id: 'F-MAT-09-0002',
    moduloId: 'MAT-09',
    topicoId: 'MAT-09',
    frente: 'O que é a propriedade distributiva e como usá-la?',
    verso: 'a(b + c) = ab + ac; a(b - c) = ab - ac. Ex.: 3(x + 4) = 3x + 12; 5(x - 2) = 5x - 10. ERRO CLÁSSICO: esquecer de multiplicar o número por AMBOS os termos dentro dos parênteses — 3(x + 4) NÃO é 3x + 4. É também a base da FATORAÇÃO (operação inversa): 3x + 12 = 3(x + 4).',
    dificuldade: 2,
    tags: ['distributiva', 'fatoração']
  },
  {
    id: 'F-MAT-09-0003',
    moduloId: 'MAT-09',
    topicoId: 'MAT-09',
    frente: 'Como traduzir expressões comuns em álgebra?',
    verso: 'Dobro de x = 2x. Triplo de x = 3x. Metade de x = x/2. Terça parte de x = x/3. x aumentado em 5 = x + 5. x diminuído de 5 = x - 5. Quadrado de x = x². Oposto de x = -x. Sucessor de x = x + 1. Antecessor = x - 1. CUIDADO: "o dobro de x, mais 5" = 2x + 5 (≠ 2(x+5)).',
    dificuldade: 2,
    tags: ['tradução', 'álgebra']
  },

  /* ============================================================
     MAT-11 — Matemática Financeira
  ============================================================ */
  {
    id: 'F-MAT-11-0001',
    moduloId: 'MAT-11',
    topicoId: 'MAT-11',
    frente: 'Qual a diferença entre JUROS SIMPLES e JUROS COMPOSTOS?',
    verso: 'SIMPLES: juros sempre sobre o CAPITAL inicial. Crescimento LINEAR. Fórmulas: J = C × i × t; M = C(1 + i×t). COMPOSTOS: juros sobre o MONTANTE acumulado (juros sobre juros). Crescimento EXPONENCIAL. Fórmula: M = C(1 + i)ᵗ. Para t = 1, os dois coincidem; para t > 1, compostos rendem mais.',
    dificuldade: 3,
    tags: ['juros simples', 'juros compostos']
  },
  {
    id: 'F-MAT-11-0002',
    moduloId: 'MAT-11',
    topicoId: 'MAT-11',
    frente: 'Como funcionam as taxas em juros simples x juros compostos?',
    verso: 'JUROS SIMPLES: taxas PROPORCIONAIS. 2% ao mês = 24% ao ano (2 × 12). JUROS COMPOSTOS: taxas EQUIVALENTES. 2% ao mês = (1,02)¹² - 1 ≈ 26,82% ao ano. REGRA: em qualquer regime, TAXA e TEMPO devem estar na MESMA UNIDADE antes de aplicar as fórmulas.',
    dificuldade: 3,
    tags: ['taxas', 'equivalência']
  },
  {
    id: 'F-MAT-11-0003',
    moduloId: 'MAT-11',
    topicoId: 'MAT-11',
    frente: 'O que é desconto comercial simples e como calcular?',
    verso: 'Desconto comercial (por fora): calculado sobre o VALOR NOMINAL (valor de face do título). Fórmula: D = N × i × t. Valor pago = N - D. Ex.: título de R$ 8.000, taxa 2% ao mês, 3 meses antes do vencimento: D = 8.000 × 0,02 × 3 = 480; valor pago = 7.520. Diferente do desconto RACIONAL (por dentro), que incide sobre o valor atual.',
    dificuldade: 3,
    tags: ['desconto', 'comercial']
  },

  /* ============================================================
     MAT-12 — Sistemas de Medidas
  ============================================================ */
  {
    id: 'F-MAT-12-0001',
    moduloId: 'MAT-12',
    topicoId: 'MAT-12',
    frente: 'Quais são os fatores de conversão entre unidades consecutivas de comprimento, área e volume?',
    verso: 'COMPRIMENTO (linear): × 10 (ou ÷ 10) por passo. Ex.: 1 m = 100 cm. ÁREA: × 100 (ou ÷ 100) por passo. Ex.: 1 m² = 10.000 cm². VOLUME: × 1.000 (ou ÷ 1.000) por passo. Ex.: 1 m³ = 1.000.000 cm³. A lógica: fator = 10 elevado à dimensão (1 = 10, 2 = 100, 3 = 1.000).',
    dificuldade: 2,
    tags: ['conversão', 'comprimento', 'área', 'volume']
  },
  {
    id: 'F-MAT-12-0002',
    moduloId: 'MAT-12',
    topicoId: 'MAT-12',
    frente: 'Quais são as relações entre litro e unidades de volume?',
    verso: 'RELAÇÕES FUNDAMENTAIS: 1 L = 1 dm³. 1 mL = 1 cm³. 1 m³ = 1.000 L. 1 L = 1.000 mL. Para converter m³ em litros: multiplique por 1.000. Para cm³ em mL: são iguais. Para dm³ em L: são iguais. Sempre converta as dimensões para dm (ou m ou cm) antes de calcular volumes em litros.',
    dificuldade: 2,
    tags: ['litros', 'volume']
  },
  {
    id: 'F-MAT-12-0003',
    moduloId: 'MAT-12',
    topicoId: 'MAT-12',
    frente: 'Por que as unidades de tempo NÃO seguem o sistema decimal?',
    verso: 'Porque o tempo é medido em BASE 60 (60 segundos = 1 minuto; 60 minutos = 1 hora) e BASE 24 (24 horas = 1 dia). Assim, 0,5 hora = 30 minutos (não 50) e 1,5 hora = 1 h 30 min (não 1 h 5 min). ERRO CLÁSSICO: tratar a parte decimal como se fosse base 100. Sempre multiplique a fração de hora por 60 para obter minutos.',
    dificuldade: 2,
    tags: ['tempo']
  },

  /* ============================================================
     MAT-13 — Interpretação de Tabelas e Gráficos
  ============================================================ */
  {
    id: 'F-MAT-13-0001',
    moduloId: 'MAT-13',
    topicoId: 'MAT-13',
    frente: 'Qual o uso mais adequado de cada tipo de gráfico?',
    verso: 'BARRAS: comparação entre CATEGORIAS (países, produtos) em um mesmo momento. LINHAS: EVOLUÇÃO no tempo — mostra tendências (crescimento, queda, estabilidade). SETORES (pizza): PROPORÇÃO em relação ao TODO — cada fatia é uma fração/porcentagem; a soma é 100%. Escolha pelo tipo de dado e pelo que se quer mostrar.',
    dificuldade: 2,
    tags: ['gráficos', 'tipos']
  },
  {
    id: 'F-MAT-13-0002',
    moduloId: 'MAT-13',
    topicoId: 'MAT-13',
    frente: 'Como calcular a variação percentual entre dois valores?',
    verso: 'Variação = (Vfinal - Vinicial) / Vinicial × 100. O divisor é SEMPRE o valor INICIAL. Ex.: de R$ 400 para R$ 500 → (500-400)/400 × 100 = 25%. CUIDADO: não confunda com variação absoluta, que é apenas a diferença (500 - 400 = 100). Para comparar grandezas de tamanhos diferentes, sempre use a percentual.',
    dificuldade: 2,
    tags: ['variação percentual', 'gráficos']
  },
  {
    id: 'F-MAT-13-0003',
    moduloId: 'MAT-13',
    topicoId: 'MAT-13',
    frente: 'Como identificar a TENDÊNCIA em um gráfico de linhas?',
    verso: 'Tendência é a DIREÇÃO GERAL da linha, não as oscilações pontuais. Olhe o conjunto todo: a linha sobe (crescimento), desce (queda) ou fica estável (estabilidade). Ex.: 22, 25, 28, 26, 24 — subiu e depois caiu; a tendência RECENTE é de queda. Cuidado: uma única queda não muda a tendência; olhe o padrão geral do período.',
    dificuldade: 3,
    tags: ['tendência', 'gráfico de linhas']
  }

];
