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
  },

  /* ============================================================
     MAT-14 — Estatística Básica
  ============================================================ */
  {
    id: 'F-MAT-14-0001',
    moduloId: 'MAT-14',
    topicoId: 'MAT-14',
    frente: 'Qual a diferença entre MÉDIA, MEDIANA e MODA?',
    verso: 'MÉDIA: soma dos valores ÷ quantidade. Sensível a extremos. MEDIANA: valor central dos dados ORDENADOS (par → média dos 2 centrais). Robusta a extremos. MODA: valor que mais aparece. Pode ser bimodal (2) ou amodal (nenhuma). Ex.: [1, 2, 3, 4, 100] → média 22 (distorcida); mediana 3 (representativa); moda: amodal.',
    dificuldade: 2,
    tags: ['estatística', 'medidas']
  },
  {
    id: 'F-MAT-14-0002',
    moduloId: 'MAT-14',
    topicoId: 'MAT-14',
    frente: 'Como calcular a MÉDIA PONDERADA?',
    verso: 'Média ponderada = soma (valor × peso) ÷ soma dos pesos. Ex.: notas 7 (peso 3) e 9 (peso 2): (7×3 + 9×2)/(3+2) = (21+18)/5 = 7,8. Cuidado: dividir pela SOMA DOS PESOS (5), não pela quantidade de valores (2).',
    dificuldade: 2,
    tags: ['média ponderada']
  },
  {
    id: 'F-MAT-14-0003',
    moduloId: 'MAT-14',
    topicoId: 'MAT-14',
    frente: 'Qual a diferença entre frequência ABSOLUTA e RELATIVA?',
    verso: 'ABSOLUTA (fi): número de vezes que um valor aparece na amostra (contagem). RELATIVA (fri): fi / total; pode ser expressa em fração, decimal ou porcentagem. Ex.: 15 meninas em 40 alunos → absoluta 15; relativa 15/40 = 0,375 = 37,5%. A soma das frequências relativas é sempre 100%.',
    dificuldade: 2,
    tags: ['frequência']
  },

  /* ============================================================
     MAT-15 — Geometria Plana
  ============================================================ */
  {
    id: 'F-MAT-15-0001',
    moduloId: 'MAT-15',
    topicoId: 'MAT-15',
    frente: 'Quais são as fórmulas de ÁREA das principais figuras planas?',
    verso: 'Quadrado: L². Retângulo: b × h. Triângulo: (b × h)/2. Trapézio: ((B + b) × h)/2. Paralelogramo: b × h. Círculo: πr². SEMPRE identificar a figura e converter as unidades para a mesma antes de calcular.',
    dificuldade: 2,
    tags: ['área', 'fórmulas']
  },
  {
    id: 'F-MAT-15-0002',
    moduloId: 'MAT-15',
    topicoId: 'MAT-15',
    frente: 'Qual a diferença entre PERÍMETRO e ÁREA?',
    verso: 'PERÍMETRO: soma dos lados (contorno). Unidade linear (cm, m, km). Usado para cercar, contornar. ÁREA: superfície interna. Unidade quadrada (cm², m², km²). Usado para revestir, plantar, calcular valor. Em um retângulo b×h: perímetro = 2(b+h); área = b×h.',
    dificuldade: 1,
    tags: ['perímetro', 'área']
  },
  {
    id: 'F-MAT-15-0003',
    moduloId: 'MAT-15',
    topicoId: 'MAT-15',
    frente: 'Qual a diferença entre CÍRCULO e CIRCUNFERÊNCIA?',
    verso: 'CIRCUNFERÊNCIA: a linha curva que delimita — comprimento = 2πr. CÍRCULO: a região interna delimitada pela circunferência — área = πr². Uma é o contorno; o outro é a superfície. NUNCA troque as duas fórmulas.',
    dificuldade: 2,
    tags: ['círculo', 'circunferência']
  },

  /* ============================================================
     MAT-16 — Geometria Espacial
  ============================================================ */
  {
    id: 'F-MAT-16-0001',
    moduloId: 'MAT-16',
    topicoId: 'MAT-16',
    frente: 'Quais são as fórmulas de VOLUME das principais figuras espaciais?',
    verso: 'Cubo: a³. Paralelepípedo: c × l × a. Prisma: área da base × altura. Cilindro: πr² × h. Pirâmide: (área da base × h)/3. Cone: (πr² × h)/3. Esfera: (4/3)πr³. A pirâmide e o cone são "um terço" do prisma/cilindro correspondente.',
    dificuldade: 3,
    tags: ['volume', 'fórmulas']
  },
  {
    id: 'F-MAT-16-0002',
    moduloId: 'MAT-16',
    topicoId: 'MAT-16',
    frente: 'Quais são as relações entre VOLUME e CAPACIDADE (litros)?',
    verso: '1 m³ = 1.000 L. 1 dm³ = 1 L. 1 cm³ = 1 mL. Para converter m³ em litros, multiplique por 1.000. Para converter litros em m³, divida por 1.000. Ex.: caixa de 2 m³ → 2.000 L. Caixa de 500 cm³ → 0,5 L = 500 mL.',
    dificuldade: 2,
    tags: ['volume', 'litros']
  },
  {
    id: 'F-MAT-16-0003',
    moduloId: 'MAT-16',
    topicoId: 'MAT-16',
    frente: 'Qual a diferença entre VOLUME e ÁREA SUPERFICIAL?',
    verso: 'VOLUME (3D, unidade ao cubo): quanto cabe dentro. Ex.: cubo a³; cilindro πr²h. ÁREA SUPERFICIAL (2D, unidade ao quadrado): quanto de material para revestir. Ex.: cubo 6a²; cilindro 2πr² + 2πrh; esfera 4πr². Volume → litros/capacidade. Área superficial → tinta, revestimento.',
    dificuldade: 3,
    tags: ['volume', 'área superficial']
  },

  /* ============================================================
     MAT-17 — Relações Métricas e Teorema de Pitágoras
  ============================================================ */
  {
    id: 'F-MAT-17-0001',
    moduloId: 'MAT-17',
    topicoId: 'MAT-17',
    frente: 'Qual é o Teorema de Pitágoras e como aplicá-lo?',
    verso: 'Em um triângulo retângulo: a² = b² + c², onde a é a HIPOTENUSA (maior lado, oposto ao ângulo de 90°) e b, c são os CATETOS. Ex.: catetos 6 e 8 → a² = 36+64 = 100 → a = 10. SEMPRE identificar quem é a hipotenusa antes de aplicar.',
    dificuldade: 1,
    tags: ['pitágoras']
  },
  {
    id: 'F-MAT-17-0002',
    moduloId: 'MAT-17',
    topicoId: 'MAT-17',
    frente: 'Quais são os ternos pitagóricos mais cobrados?',
    verso: '3-4-5 (e múltiplos: 6-8-10, 9-12-15, 12-16-20...). 5-12-13. 8-15-17. 7-24-25. Reconhecer esses ternos acelera muito a resolução. Ex.: escada 13 m, base 5 m → altura 12 m (terno 5-12-13).',
    dificuldade: 2,
    tags: ['pitágoras', 'ternos']
  },
  {
    id: 'F-MAT-17-0003',
    moduloId: 'MAT-17',
    topicoId: 'MAT-17',
    frente: 'Como calcular a DIAGONAL do quadrado e do retângulo?',
    verso: 'QUADRADO de lado L: diagonal = L√2 (fórmula pronta, vem de √(L² + L²)). RETÂNGULO b × h: diagonal² = b² + h² (aplicação direta de Pitágoras). Ex.: retângulo 9×12 → d² = 81+144 = 225 → d = 15. Diagonais dividem a figura em dois triângulos retângulos iguais.',
    dificuldade: 2,
    tags: ['diagonal', 'pitágoras']
  },

  /* ============================================================
     MAT-18 — Sequências e Padrões
  ============================================================ */
  {
    id: 'F-MAT-18-0001',
    moduloId: 'MAT-18',
    topicoId: 'MAT-18',
    frente: 'Qual a diferença entre PROGRESSÃO ARITMÉTICA (PA) e PROGRESSÃO GEOMÉTRICA (PG)?',
    verso: 'PA: diferença CONSTANTE entre termos (soma/subtrai sempre o mesmo). Ex.: 3, 7, 11, 15 (r = 4). Termo geral: an = a1 + (n-1)r. PG: razão CONSTANTE (multiplica/divide pelo mesmo). Ex.: 2, 6, 18, 54 (q = 3). Termo geral: an = a1 × q^(n-1). PA cresce linearmente; PG, exponencialmente.',
    dificuldade: 2,
    tags: ['PA', 'PG']
  },
  {
    id: 'F-MAT-18-0002',
    moduloId: 'MAT-18',
    topicoId: 'MAT-18',
    frente: 'Como resolver uma sequência quando as DIFERENÇAS formam outra sequência?',
    verso: 'É uma sequência de 2ª ordem. Calcule as diferenças entre termos consecutivos. Se elas formam uma PA (ou outra regra clara), continue a sequência de diferenças e some ao último termo. Ex.: 2, 5, 10, 17, 26 → diferenças 3, 5, 7, 9 (PA de razão 2) → próxima diferença 11 → próximo termo 26+11 = 37.',
    dificuldade: 3,
    tags: ['sequências 2ª ordem']
  },
  {
    id: 'F-MAT-18-0003',
    moduloId: 'MAT-18',
    topicoId: 'MAT-18',
    frente: 'Como converter uma sequência de LETRAS em sequência numérica?',
    verso: 'Converta cada letra para sua posição no alfabeto: A=1, B=2, C=3, ..., Z=26. Ex.: C, F, I, L → 3, 6, 9, 12 (soma 3). Próximo: 15 = O. Outras regras comuns: pular letras (A, C, E, G — pula 1); alternar direções; combinar com números. Sempre converta primeiro para números.',
    dificuldade: 3,
    tags: ['sequências de letras']
  },

  /* ============================================================
     MAT-21 — Conjuntos e Diagramas Lógicos
  ============================================================ */
  {
    id: 'F-MAT-21-0001',
    moduloId: 'MAT-21',
    topicoId: 'MAT-21',
    frente: 'Qual a fórmula da UNIÃO de dois conjuntos?',
    verso: 'n(A ∪ B) = n(A) + n(B) - n(A ∩ B). A subtração da interseção evita contar os elementos comuns duas vezes. Ex.: 30 gostam de inglês, 20 de espanhol, 10 dos dois → n(I ∪ E) = 30 + 20 - 10 = 40. SEM a subtração, daria 50 (errado, pois os 10 seriam contados 2 vezes).',
    dificuldade: 2,
    tags: ['conjuntos', 'união']
  },
  {
    id: 'F-MAT-21-0002',
    moduloId: 'MAT-21',
    topicoId: 'MAT-21',
    frente: 'Qual a diferença entre PERTINÊNCIA (∈) e INCLUSÃO (⊂)?',
    verso: 'PERTINÊNCIA (∈): relação entre ELEMENTO e CONJUNTO. Ex.: 3 ∈ {1, 2, 3}. INCLUSÃO (⊂): relação entre CONJUNTO e CONJUNTO. Ex.: {1, 2} ⊂ {1, 2, 3}. São símbolos diferentes. Nunca troque. ∈ é elemento; ⊂ é subconjunto.',
    dificuldade: 2,
    tags: ['conjuntos', 'pertinência', 'inclusão']
  },
  {
    id: 'F-MAT-21-0003',
    moduloId: 'MAT-21',
    topicoId: 'MAT-21',
    frente: 'Como resolver problemas de conjuntos com o diagrama de Venn?',
    verso: 'Passos: 1) Desenhe círculos sobrepostos (retângulo = universo). 2) Preencha PRIMEIRO a INTERSEÇÃO (ou interseção tripla em 3 conjuntos). 3) Calcule cada região exclusiva: só A = n(A) - n(A ∩ B) - n(A ∩ C) + n(A ∩ B ∩ C). 4) Some as regiões e confira com o total. "Nenhum" = total do universo - soma dos que estão em pelo menos um.',
    dificuldade: 3,
    tags: ['conjuntos', 'Venn']
  }

];
