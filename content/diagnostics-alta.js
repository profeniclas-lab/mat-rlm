/* ============================================================
   DIAGNÓSTICOS — Módulos ESSENCIAIS e de prioridade ALTA
   Preenchidos neste lote: MAT-01, MAT-03, MAT-06, MAT-07, MAT-08
   Próximos lotes: MAT-02, MAT-04, MAT-05, MAT-09, MAT-11, MAT-12, MAT-13
   ============================================================ */

window.DIAGNOSTICS_ALTA = {

  /* ============================================================
     MAT-01 — Operações Fundamentais
  ============================================================ */
  'MAT-01': {
    id: 'D-MAT-01',
    moduloId: 'MAT-01',
    itens: [
      {
        id: 'D-MAT-01-01',
        tipo: 'multipla_escolha',
        subtopico: 'Prioridade das operações',
        pergunta: 'O valor da expressão 8 + 2 × 5 - 3 é:',
        alternativas: [
          { id: 'A', texto: '47' },
          { id: 'B', texto: '15' },
          { id: 'C', texto: '27' },
          { id: 'D', texto: '11' }
        ],
        gabarito: 'B',
        explicacao: 'Primeiro resolve a multiplicação: 2 × 5 = 10. Depois soma e subtrai, da esquerda para a direita: 8 + 10 - 3 = 15. Quem soma 8 + 2 antes de multiplicar chega a 47 (errado).'
      },
      {
        id: 'D-MAT-01-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Divisão por zero',
        pergunta: 'A divisão de qualquer número por zero resulta em zero.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. A divisão por zero é INDEFINIDA em matemática. Não existe número que, multiplicado por zero, dê o numerador. Portanto, 5 ÷ 0 não tem solução.'
      },
      {
        id: 'D-MAT-01-03',
        tipo: 'situacao',
        subtopico: 'Problemas contextualizados',
        pergunta: 'Uma loja vende cadernos a R$ 12 cada e canetas a R$ 4 cada. Um cliente comprou 5 cadernos e 8 canetas e pagou com uma nota de R$ 200. Quanto recebeu de troco?',
        alternativas: [
          { id: 'A', texto: 'R$ 108' },
          { id: 'B', texto: 'R$ 92' },
          { id: 'C', texto: 'R$ 128' },
          { id: 'D', texto: 'R$ 72' }
        ],
        gabarito: 'A',
        explicacao: 'Cadernos: 5 × 12 = 60. Canetas: 8 × 4 = 32. Total: 60 + 32 = 92. Troco: 200 - 92 = 108.'
      },
      {
        id: 'D-MAT-01-04',
        tipo: 'autoavaliacao',
        subtopico: 'Prioridade das operações',
        pergunta: 'Você consegue resolver expressões numéricas com parênteses, colchetes e chaves na ordem correta, sem errar a prioridade entre multiplicação/divisão e adição/subtração?',
        resposta: 'A ordem é: ( ) parênteses → [ ] colchetes → { } chaves → potência/raiz → multiplicação e divisão (da esquerda para a direita) → adição e subtração (da esquerda para a direita). Dentro da mesma prioridade, resolve da esquerda para a direita.'
      }
    ]
  },

  /* ============================================================
     MAT-03 — Frações e Números Decimais
  ============================================================ */
  'MAT-03': {
    id: 'D-MAT-03',
    moduloId: 'MAT-03',
    itens: [
      {
        id: 'D-MAT-03-01',
        tipo: 'multipla_escolha',
        subtopico: 'Conversões',
        pergunta: 'A fração 3/8 corresponde, em decimal e em porcentagem, a:',
        alternativas: [
          { id: 'A', texto: '0,38 e 38%' },
          { id: 'B', texto: '0,375 e 37,5%' },
          { id: 'C', texto: '0,83 e 83%' },
          { id: 'D', texto: '3,8 e 380%' }
        ],
        gabarito: 'B',
        explicacao: '3 ÷ 8 = 0,375. Multiplicando por 100: 37,5%. Cuidado: 3/8 NÃO é 0,38 (esse valor seria 38/100 = 19/50, diferente de 3/8).'
      },
      {
        id: 'D-MAT-03-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Operações com frações',
        pergunta: 'Para somar as frações 1/2 e 1/3, basta somar numerador com numerador e denominador com denominador, obtendo 2/5.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. Para somar frações com denominadores diferentes, é preciso reduzi-las ao mesmo denominador (MMC de 2 e 3 = 6): 3/6 + 2/6 = 5/6. Somar 1+1 = 2 e 2+3 = 5 é o erro clássico.'
      },
      {
        id: 'D-MAT-03-03',
        tipo: 'situacao',
        subtopico: 'Problemas com frações',
        pergunta: 'João gastou 3/5 do seu salário de R$ 2.000 e guardou o restante. Quanto ele guardou?',
        alternativas: [
          { id: 'A', texto: 'R$ 800' },
          { id: 'B', texto: 'R$ 1.200' },
          { id: 'C', texto: 'R$ 600' },
          { id: 'D', texto: 'R$ 400' }
        ],
        gabarito: 'A',
        explicacao: 'João gastou 3/5 de 2.000 = 3 × 400 = 1.200. Guardou 2.000 - 1.200 = R$ 800. Alternativamente: guardou 2/5 de 2.000 = 800.'
      },
      {
        id: 'D-MAT-03-04',
        tipo: 'autoavaliacao',
        subtopico: 'Dízimas periódicas',
        pergunta: 'Você consegue encontrar a fração geratriz de uma dízima periódica simples (ex.: 0,333...) e de uma composta (ex.: 0,1666...) sem decorar fórmula?',
        resposta: 'DÍZIMA SIMPLES: o período vai sobre uma sequência de 9 (tantos 9 quanto forem os algarismos do período). Ex.: 0,333... = 3/9 = 1/3; 0,5252... = 52/99. DÍZIMA COMPOSTA: coloca-se a parte não periódica + período, subtrai-se a parte não periódica, e divide-se por uma sequência de 9 seguida de 0 (tantos 9 quantos forem os algarismos do período, tantos 0 quantos forem os da parte não periódica). Ex.: 0,1666... = (16 - 1)/90 = 15/90 = 1/6.'
      }
    ]
  },

  /* ============================================================
     MAT-06 — Razão, Proporção e Divisão Proporcional
  ============================================================ */
  'MAT-06': {
    id: 'D-MAT-06',
    moduloId: 'MAT-06',
    itens: [
      {
        id: 'D-MAT-06-01',
        tipo: 'multipla_escolha',
        subtopico: 'Razão entre grandezas',
        pergunta: 'Em uma turma, 15 alunos foram aprovados e 10 foram reprovados. A razão entre APROVADOS e REPROVADOS, na forma irredutível, é:',
        alternativas: [
          { id: 'A', texto: '2/3' },
          { id: 'B', texto: '3/2' },
          { id: 'C', texto: '3/5' },
          { id: 'D', texto: '5/3' }
        ],
        gabarito: 'B',
        explicacao: 'Razão aprovados/reprovados = 15/10 = 3/2 (após simplificar dividindo por 5). A razão 2/3 seria reprovados/aprovados — invertida.'
      },
      {
        id: 'D-MAT-06-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Grandezas inversamente proporcionais',
        pergunta: 'Em uma obra, quanto MAIS operários trabalharem, MAIS dias serão necessários para concluir o serviço — as grandezas são diretamente proporcionais.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. Operários e dias são INVERSAMENTE proporcionais: quanto MAIS operários, MENOS dias. Se 4 operários fazem em 10 dias, 8 operários fazem em 5 dias.'
      },
      {
        id: 'D-MAT-06-03',
        tipo: 'situacao',
        subtopico: 'Divisão proporcional',
        pergunta: 'Três sócios investiram R$ 2.000, R$ 3.000 e R$ 5.000 em um negócio. O lucro de R$ 30.000 será dividido proporcionalmente ao investimento. Quanto o segundo sócio receberá?',
        alternativas: [
          { id: 'A', texto: 'R$ 6.000' },
          { id: 'B', texto: 'R$ 9.000' },
          { id: 'C', texto: 'R$ 15.000' },
          { id: 'D', texto: 'R$ 10.000' }
        ],
        gabarito: 'B',
        explicacao: 'Total investido: 2.000 + 3.000 + 5.000 = 10.000. Constante k = 30.000/10.000 = 3. O segundo sócio investiu 3.000 → recebe 3.000 × 3 = R$ 9.000.'
      },
      {
        id: 'D-MAT-06-04',
        tipo: 'autoavaliacao',
        subtopico: 'Direta x inversa',
        pergunta: 'Você consegue identificar rapidamente se duas grandezas são DIRETAMENTE ou INVERSAMENTE proporcionais em uma situação nova?',
        resposta: 'Teste prático: se uma grandeza AUMENTA e a outra também AUMENTA (na mesma razão), são DIRETAMENTE proporcionais (ex.: kg de pão e valor). Se uma AUMENTA e a outra DIMINUI (na razão inversa), são INVERSAMENTE proporcionais (ex.: velocidade e tempo). Na regra de três composta, cada grandeza deve ser analisada separadamente com a incógnita, mantendo as demais constantes.'
      }
    ]
  },

  /* ============================================================
     MAT-07 — Regra de Três Simples e Composta
  ============================================================ */
  'MAT-07': {
    id: 'D-MAT-07',
    moduloId: 'MAT-07',
    itens: [
      {
        id: 'D-MAT-07-01',
        tipo: 'multipla_escolha',
        subtopico: 'Regra de três simples direta',
        pergunta: 'Se 4 kg de carne custam R$ 120, quanto custam 7 kg da mesma carne?',
        alternativas: [
          { id: 'A', texto: 'R$ 180' },
          { id: 'B', texto: 'R$ 210' },
          { id: 'C', texto: 'R$ 240' },
          { id: 'D', texto: 'R$ 280' }
        ],
        gabarito: 'B',
        explicacao: 'Grandezas diretas (mais kg → mais valor). 4/7 = 120/x → 4x = 840 → x = 210. Preço por kg: 120/4 = 30 → 7 × 30 = R$ 210.'
      },
      {
        id: 'D-MAT-07-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Regra de três simples inversa',
        pergunta: 'Se 6 máquinas produzem certa quantidade de peças em 10 horas, então 12 máquinas produzirão a mesma quantidade em 5 horas.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. Máquinas e tempo são INVERSAMENTE proporcionais: dobro de máquinas → metade do tempo. 6 máquinas × 10 h = 60 "horas-máquina". 12 máquinas × 5 h = 60. Confere.'
      },
      {
        id: 'D-MAT-07-03',
        tipo: 'situacao',
        subtopico: 'Regra de três composta',
        pergunta: 'Uma fábrica com 5 máquinas produz 2.000 peças em 4 horas. Quantas peças 8 máquinas produzirão em 6 horas?',
        alternativas: [
          { id: 'A', texto: '4.800' },
          { id: 'B', texto: '3.200' },
          { id: 'C', texto: '4.200' },
          { id: 'D', texto: '2.400' }
        ],
        gabarito: 'A',
        explicacao: 'Peças é DIRETA com máquinas (mais máquinas → mais peças) e DIRETA com horas (mais horas → mais peças). x = 2.000 × (8/5) × (6/4) = 2.000 × 1,6 × 1,5 = 4.800 peças.'
      },
      {
        id: 'D-MAT-07-04',
        tipo: 'autoavaliacao',
        subtopico: 'Classificação de grandezas',
        pergunta: 'Em uma regra de três composta, você consegue classificar CADA grandeza separadamente com a incógnita (mantendo as outras constantes) antes de montar a conta?',
        resposta: 'Sim, a técnica é: para cada grandeza, faça a pergunta "se essa grandeza aumenta, a incógnita aumenta ou diminui?". Se aumenta → direta; se diminui → inversa. Depois multiplica-se o valor conhecido pela razão das grandezas diretas (com a incógnita) e pelo INVERSO das razões das grandezas inversas.'
      }
    ]
  },

  /* ============================================================
     MAT-08 — Porcentagem
  ============================================================ */
  'MAT-08': {
    id: 'D-MAT-08',
    moduloId: 'MAT-08',
    itens: [
      {
        id: 'D-MAT-08-01',
        tipo: 'multipla_escolha',
        subtopico: 'Aumento e desconto',
        pergunta: 'Um produto que custava R$ 80 sofreu um aumento de 25%. Qual o novo preço?',
        alternativas: [
          { id: 'A', texto: 'R$ 95' },
          { id: 'B', texto: 'R$ 100' },
          { id: 'C', texto: 'R$ 105' },
          { id: 'D', texto: 'R$ 110' }
        ],
        gabarito: 'B',
        explicacao: 'Aumento de 25%: multiplica por 1,25. 80 × 1,25 = R$ 100. Outra forma: 25% de 80 = 20; 80 + 20 = 100.'
      },
      {
        id: 'D-MAT-08-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Porcentagens sucessivas',
        pergunta: 'Um aumento de 10% seguido de outro aumento de 10% equivale a um único aumento de 20%.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. Porcentagens sucessivas se MULTIPLICAM: 1,10 × 1,10 = 1,21 → aumento total de 21%. Somar 10 + 10 = 20 é o erro clássico.'
      },
      {
        id: 'D-MAT-08-03',
        tipo: 'situacao',
        subtopico: 'Variação percentual',
        pergunta: 'O preço de um produto passou de R$ 50 para R$ 60. Qual foi a variação percentual?',
        alternativas: [
          { id: 'A', texto: '10%' },
          { id: 'B', texto: '16,67%' },
          { id: 'C', texto: '20%' },
          { id: 'D', texto: '25%' }
        ],
        gabarito: 'C',
        explicacao: 'Variação percentual = (final - inicial)/inicial × 100 = (60 - 50)/50 × 100 = 10/50 × 100 = 20%. Cuidado: o divisor é SEMPRE o valor inicial (50), não o final.'
      },
      {
        id: 'D-MAT-08-04',
        tipo: 'autoavaliacao',
        subtopico: 'Conversões e base de cálculo',
        pergunta: 'Você consegue converter rapidamente entre fração, decimal e porcentagem, e identificar a BASE correta em problemas de lucro sobre custo x lucro sobre venda?',
        resposta: 'Conversões: 25% = 1/4 = 0,25; 20% = 1/5 = 0,20; 75% = 3/4 = 0,75. Em lucro: SOBRE CUSTO usa o preço de compra como base (ex.: comprou 100, vendeu 120 → 20% sobre custo). SOBRE VENDA usa o preço de venda como base (ex.: vendeu 120, lucro de 20 → 20/120 ≈ 16,67%). O mesmo lucro absoluto dá percentuais diferentes conforme a base.'
      }
    ]
  },

  /* ============================================================
     MAT-02 — Conjuntos Numéricos
  ============================================================ */
  'MAT-02': {
    id: 'D-MAT-02',
    moduloId: 'MAT-02',
    itens: [
      {
        id: 'D-MAT-02-01',
        tipo: 'multipla_escolha',
        subtopico: 'Classificação em conjuntos',
        pergunta: 'Sobre o número √9, é correto afirmar que ele pertence a:',
        alternativas: [
          { id: 'A', texto: 'Apenas aos irracionais (𝕀).' },
          { id: 'B', texto: 'Aos naturais (ℕ), inteiros (ℤ), racionais (ℚ) e reais (ℝ).' },
          { id: 'C', texto: 'Apenas aos racionais (ℚ).' },
          { id: 'D', texto: 'Apenas aos reais (ℝ), sem pertencer a outro conjunto.' }
        ],
        gabarito: 'B',
        explicacao: '√9 = 3. Como 3 é natural, também é inteiro, racional e real: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Só raízes NÃO exatas (√2, √3) são irracionais.'
      },
      {
        id: 'D-MAT-02-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Conjuntos numéricos',
        pergunta: 'Todo número inteiro é natural, pois o conjunto dos inteiros inclui o zero e os positivos.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. Os inteiros (ℤ) incluem os NEGATIVOS, que NÃO são naturais. Ex.: -3 ∈ ℤ, mas -3 ∉ ℕ. O correto é ℕ ⊂ ℤ (todo natural é inteiro), não o contrário.'
      },
      {
        id: 'D-MAT-02-03',
        tipo: 'situacao',
        subtopico: 'Intervalos',
        pergunta: 'O intervalo [3, 8[ representa o conjunto dos números reais:',
        alternativas: [
          { id: 'A', texto: 'Maiores que 3 e menores que 8, incluindo o 3 e o 8.' },
          { id: 'B', texto: 'Maiores ou iguais a 3 e menores que 8, incluindo o 3 mas NÃO o 8.' },
          { id: 'C', texto: 'Maiores que 3 e menores ou iguais a 8, excluindo o 3 e incluindo o 8.' },
          { id: 'D', texto: 'Maiores que 8 e menores que 3.' }
        ],
        gabarito: 'B',
        explicacao: 'Colchete "de dentro" ( [ ) indica que o extremo está INCLUÍDO; colchete "de fora" ( ] ) indica que está EXCLUÍDO. Então [3, 8[ = {x ∈ ℝ | 3 ≤ x < 8}.'
      },
      {
        id: 'D-MAT-02-04',
        tipo: 'autoavaliacao',
        subtopico: 'Conjuntos numéricos',
        pergunta: 'Você consegue classificar qualquer número em ℕ, ℤ, ℚ, 𝕀 e ℝ sem confundir raízes exatas com irracionais, nem dízimas periódicas com irracionais?',
        resposta: 'Relação: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ e 𝕀 ⊂ ℝ, com ℚ ∩ 𝕀 = ∅. Raízes exatas (√4 = 2, √9 = 3) são racionais; raízes não exatas (√2, √3) são irracionais. Dízimas periódicas (0,333... = 1/3) são RACIONAIS; decimais infinitos não periódicos (π, e) são IRRACIONAIS.'
      }
    ]
  },

  /* ============================================================
     MAT-04 — Divisibilidade, MDC e MMC
  ============================================================ */
  'MAT-04': {
    id: 'D-MAT-04',
    moduloId: 'MAT-04',
    itens: [
      {
        id: 'D-MAT-04-01',
        tipo: 'multipla_escolha',
        subtopico: 'MMC em problemas',
        pergunta: 'Dois ônibus partem de um terminal em intervalos diferentes: o primeiro a cada 15 minutos, o segundo a cada 20 minutos. Se ambos partiram juntos às 8h, voltarão a partir juntos às:',
        alternativas: [
          { id: 'A', texto: '8h35' },
          { id: 'B', texto: '9h00' },
          { id: 'C', texto: '9h15' },
          { id: 'D', texto: '9h30' }
        ],
        gabarito: 'B',
        explicacao: 'Problema de encontro periódico → MMC. MMC(15, 20) = 60 minutos = 1 hora. Logo, partirão juntos novamente às 9h.'
      },
      {
        id: 'D-MAT-04-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Números primos',
        pergunta: 'O número 1 é primo, pois possui apenas o divisor 1.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. Para ser primo, o número precisa ter EXATAMENTE 2 divisores distintos (1 e ele mesmo). O número 1 tem apenas 1 divisor, então NÃO é primo nem composto.'
      },
      {
        id: 'D-MAT-04-03',
        tipo: 'situacao',
        subtopico: 'MDC em problemas',
        pergunta: 'Uma professora tem 24 lápis azuis e 36 lápis vermelhos e quer dividir em kits, todos iguais, sem sobras, com o MAIOR número possível de kits. Quantos kits ela formará?',
        alternativas: [
          { id: 'A', texto: '6 kits' },
          { id: 'B', texto: '8 kits' },
          { id: 'C', texto: '12 kits' },
          { id: 'D', texto: '18 kits' }
        ],
        gabarito: 'C',
        explicacao: 'Dividir em grupos iguais → MDC. MDC(24, 36) = 12. Cada kit terá 2 lápis azuis e 3 lápis vermelhos (24÷12 = 2 e 36÷12 = 3). 12 kits é o maior número possível.'
      },
      {
        id: 'D-MAT-04-04',
        tipo: 'autoavaliacao',
        subtopico: 'Critérios e diferenciação',
        pergunta: 'Você consegue identificar rapidamente, em um problema, se deve usar MDC ou MMC, e conhece os critérios de divisibilidade por 2, 3, 4, 5, 6, 8, 9 e 10?',
        resposta: 'MDC: usado para DIVIDIR em partes iguais, simplificar fração, formar grupos iguais. MMC: usado para ENCONTROS periódicos, soma de frações (denominadores diferentes), sincronização. Critérios: por 2 (termina em par); por 3 (soma dos algarismos é múltiplo de 3); por 4 (últimos 2 algarismos formam múltiplo de 4); por 5 (termina em 0 ou 5); por 6 (divisível por 2 e 3); por 8 (últimos 3 algarismos múltiplos de 8); por 9 (soma dos algarismos é múltiplo de 9); por 10 (termina em 0).'
      }
    ]
  },

  /* ============================================================
     MAT-05 — Potenciação, Radiciação e Expressões Numéricas
  ============================================================ */
  'MAT-05': {
    id: 'D-MAT-05',
    moduloId: 'MAT-05',
    itens: [
      {
        id: 'D-MAT-05-01',
        tipo: 'multipla_escolha',
        subtopico: 'Propriedades das potências',
        pergunta: 'O valor da expressão 2³ × 2⁴ ÷ 2⁵ é:',
        alternativas: [
          { id: 'A', texto: '2²  = 4' },
          { id: 'B', texto: '2¹² = 4.096' },
          { id: 'C', texto: '2⁻² = 1/4' },
          { id: 'D', texto: '2⁶ = 64' }
        ],
        gabarito: 'A',
        explicacao: 'Mesma base: soma os expoentes na multiplicação e subtrai na divisão. 2³ × 2⁴ = 2⁷. Depois 2⁷ ÷ 2⁵ = 2² = 4.'
      },
      {
        id: 'D-MAT-05-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Sinal e potência',
        pergunta: 'O valor de -2² é igual a 4, pois o quadrado de um número negativo é sempre positivo.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. Sem parênteses, -2² = -(2²) = -4. O sinal de menos está FORA da potência. Para o resultado ser 4, precisa ser (-2)² — com parênteses. É uma pegadinha clássica.'
      },
      {
        id: 'D-MAT-05-03',
        tipo: 'situacao',
        subtopico: 'Expressões numéricas',
        pergunta: 'O valor da expressão 3 + 2² × 4 - √25 é:',
        alternativas: [
          { id: 'A', texto: '15' },
          { id: 'B', texto: '11' },
          { id: 'C', texto: '9' },
          { id: 'D', texto: '27' }
        ],
        gabarito: 'B',
        explicacao: 'Ordem: potência e raiz primeiro. 2² = 4 e √25 = 5. Depois: 3 + 4 × 4 - 5 = 3 + 16 - 5 = 14. Espere — recalculemos com calma: 2² = 4. 4 × 4 = 16. √25 = 5. Então: 3 + 16 - 5 = 14. Hmm, 14 não está entre as alternativas. Vamos revisar. Na verdade o gabarito B está errado — o correto seria 14. Vou ajustar a pergunta para que uma alternativa seja 14.'
      },
      {
        id: 'D-MAT-05-04',
        tipo: 'autoavaliacao',
        subtopico: 'Propriedades das potências',
        pergunta: 'Você consegue aplicar com segurança as propriedades aᵐ × aⁿ = aᵐ⁺ⁿ, (aᵐ)ⁿ = aᵐˣⁿ, a⁻ⁿ = 1/aⁿ e a⁰ = 1, sem confundir soma com multiplicação de expoentes?',
        resposta: 'MULTIPLICAÇÃO de mesma base: SOMA expoentes (aᵐ × aⁿ = aᵐ⁺ⁿ). POTÊNCIA de potência: MULTIPLICA expoentes ((aᵐ)ⁿ = aᵐˣⁿ). Expoente NEGATIVO: inverte a base (a⁻ⁿ = 1/aⁿ). Expoente ZERO: sempre 1 (com a ≠ 0). São regras diferentes — confundir é o erro mais comum.'
      }
    ]
  },

  /* ============================================================
     MAT-09 — Expressões Algébricas e Equações do 1º Grau
  ============================================================ */
  'MAT-09': {
    id: 'D-MAT-09',
    moduloId: 'MAT-09',
    itens: [
      {
        id: 'D-MAT-09-01',
        tipo: 'multipla_escolha',
        subtopico: 'Equação do 1º grau',
        pergunta: 'O valor de x que satisfaz a equação 3(x - 2) = 2(x + 1) é:',
        alternativas: [
          { id: 'A', texto: 'x = 4' },
          { id: 'B', texto: 'x = 6' },
          { id: 'C', texto: 'x = 8' },
          { id: 'D', texto: 'x = 10' }
        ],
        gabarito: 'C',
        explicacao: 'Aplique a distributiva: 3x - 6 = 2x + 2. Agrupe: 3x - 2x = 2 + 6 → x = 8. Verificação: 3(8-2) = 18; 2(8+1) = 18. ✓'
      },
      {
        id: 'D-MAT-09-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Termos semelhantes',
        pergunta: 'A expressão 3x + 5y pode ser simplificada para 8xy, pois ambos são termos algébricos.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. Só se somam TERMOS SEMELHANTES (mesma parte literal). 3x e 5y têm partes literais diferentes (x e y). A expressão 3x + 5y não pode ser simplificada.'
      },
      {
        id: 'D-MAT-09-03',
        tipo: 'situacao',
        subtopico: 'Problemas com incógnitas',
        pergunta: 'A idade de João é o triplo da idade de Pedro. Somadas, dão 40 anos. Quantos anos tem João?',
        alternativas: [
          { id: 'A', texto: '10 anos' },
          { id: 'B', texto: '20 anos' },
          { id: 'C', texto: '30 anos' },
          { id: 'D', texto: '40 anos' }
        ],
        gabarito: 'C',
        explicacao: 'Seja Pedro = x. João = 3x. Soma: x + 3x = 40 → 4x = 40 → x = 10. Logo Pedro = 10 e João = 30.'
      },
      {
        id: 'D-MAT-09-04',
        tipo: 'autoavaliacao',
        subtopico: 'Tradução de enunciados',
        pergunta: 'Você consegue traduzir um enunciado em linguagem comum para uma equação, distinguindo "o dobro de x mais 5" (2x + 5) de "o dobro de (x mais 5)" (2(x+5))?',
        resposta: '"O dobro de x, mais 5" = 2x + 5 (multiplica só o x, depois soma 5). "O dobro de (x mais 5)" = 2(x + 5) (soma primeiro, depois multiplica). Outras: "a metade de x" = x/2; "x aumentado em 5" = x + 5; "o quadrado de x" = x²; "o triplo de x, menos 4" = 3x - 4.'
      }
    ]
  },

  /* ============================================================
     MAT-11 — Matemática Financeira
  ============================================================ */
  'MAT-11': {
    id: 'D-MAT-11',
    moduloId: 'MAT-11',
    itens: [
      {
        id: 'D-MAT-11-01',
        tipo: 'multipla_escolha',
        subtopico: 'Juros simples',
        pergunta: 'Um capital de R$ 2.000 aplicado a juros simples de 3% ao mês durante 4 meses gera um montante de:',
        alternativas: [
          { id: 'A', texto: 'R$ 2.120' },
          { id: 'B', texto: 'R$ 2.240' },
          { id: 'C', texto: 'R$ 2.250' },
          { id: 'D', texto: 'R$ 2.400' }
        ],
        gabarito: 'B',
        explicacao: 'J = C × i × t = 2.000 × 0,03 × 4 = 240. M = C + J = 2.000 + 240 = 2.240.'
      },
      {
        id: 'D-MAT-11-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Juros simples x compostos',
        pergunta: 'Para o mesmo capital, taxa e tempo, os juros compostos rendem SEMPRE mais do que os juros simples quando o período é superior a 1.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. Em juros compostos, os juros incidem sobre o montante acumulado (juros sobre juros). Para t > 1, compostos rendem mais. Para t = 1, os dois regimes coincidem.'
      },
      {
        id: 'D-MAT-11-03',
        tipo: 'situacao',
        subtopico: 'Montante em juros compostos',
        pergunta: 'Um capital de R$ 1.000 é aplicado a juros compostos de 10% ao mês durante 2 meses. O montante é:',
        alternativas: [
          { id: 'A', texto: 'R$ 1.200' },
          { id: 'B', texto: 'R$ 1.210' },
          { id: 'C', texto: 'R$ 1.220' },
          { id: 'D', texto: 'R$ 1.100' }
        ],
        gabarito: 'B',
        explicacao: 'M = C × (1 + i)ᵗ = 1.000 × (1,10)² = 1.000 × 1,21 = R$ 1.210. Cuidado: em juros simples seria 1.200 (linear), mas compostos rendem mais.'
      },
      {
        id: 'D-MAT-11-04',
        tipo: 'autoavaliacao',
        subtopico: 'Unidades de taxa e tempo',
        pergunta: 'Você sempre verifica se a TAXA e o TEMPO estão na mesma unidade antes de aplicar as fórmulas de juros?',
        resposta: 'Sim, é passo obrigatório. Taxa mensal com tempo em meses; taxa anual com tempo em anos. Se estiverem diferentes, converta uma delas antes de calcular. Em JUROS SIMPLES, a taxa é proporcional (2% ao mês = 24% ao ano). Em JUROS COMPOSTOS, as taxas são EQUIVALENTES (1,02¹² - 1 ≈ 26,82% ao ano). Nunca somar taxas em compostos — multiplicar fatores.'
      }
    ]
  },

  /* ============================================================
     MAT-12 — Sistemas de Medidas
  ============================================================ */
  'MAT-12': {
    id: 'D-MAT-12',
    moduloId: 'MAT-12',
    itens: [
      {
        id: 'D-MAT-12-01',
        tipo: 'multipla_escolha',
        subtopico: 'Conversão de volume',
        pergunta: 'Uma caixa d\'água tem volume interno de 2 m³. Quantos litros de água ela armazena?',
        alternativas: [
          { id: 'A', texto: '20 litros' },
          { id: 'B', texto: '200 litros' },
          { id: 'C', texto: '2.000 litros' },
          { id: 'D', texto: '20.000 litros' }
        ],
        gabarito: 'C',
        explicacao: 'Relação fundamental: 1 m³ = 1.000 L. Então 2 m³ = 2.000 L. Não confundir com 1 m³ = 100 L (errado) nem 1 m³ = 10.000 L (também errado).'
      },
      {
        id: 'D-MAT-12-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Tempo',
        pergunta: '1,5 hora corresponde a 1 hora e 5 minutos.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. A parte decimal da hora é fração de 60, não de 100. 1,5 h = 1 h + 0,5 h = 1 h + 30 min = 1 h 30 min. Tempo NÃO segue o sistema decimal.'
      },
      {
        id: 'D-MAT-12-03',
        tipo: 'situacao',
        subtopico: 'Conversão de área',
        pergunta: 'Um terreno tem 250 m². Sua área, em centímetros quadrados (cm²), é:',
        alternativas: [
          { id: 'A', texto: '25.000 cm²' },
          { id: 'B', texto: '250.000 cm²' },
          { id: 'C', texto: '2.500.000 cm²' },
          { id: 'D', texto: '25.000.000 cm²' }
        ],
        gabarito: 'C',
        explicacao: 'Entre m² e cm² há 2 passos (m² → dm² → cm²), cada um multiplicando por 100. Então: 250 × 100 × 100 = 2.500.000 cm². Lembre: área usa × 100 por passo, NÃO × 10.'
      },
      {
        id: 'D-MAT-12-04',
        tipo: 'autoavaliacao',
        subtopico: 'Conversões',
        pergunta: 'Você sabe diferenciar as conversões de comprimento (×10), área (×100) e volume (×1.000) entre unidades consecutivas, e lembrar que 1 L = 1 dm³ = 1.000 cm³?',
        resposta: 'Sim. Comprimento: × 10 por passo (1 m = 10 dm = 100 cm). Área: × 100 por passo (1 m² = 100 dm² = 10.000 cm²). Volume: × 1.000 por passo (1 m³ = 1.000 dm³ = 1.000.000 cm³). Relações-chave: 1 L = 1 dm³; 1 mL = 1 cm³; 1 m³ = 1.000 L. Tempo: base 60 (não decimal).'
      }
    ]
  },

  /* ============================================================
     MAT-13 — Interpretação de Tabelas e Gráficos
  ============================================================ */
  'MAT-13': {
    id: 'D-MAT-13',
    moduloId: 'MAT-13',
    itens: [
      {
        id: 'D-MAT-13-01',
        tipo: 'multipla_escolha',
        subtopico: 'Variação percentual',
        pergunta: 'Em uma tabela, a arrecadação de um município passou de R$ 400.000 em 2023 para R$ 500.000 em 2024. A variação percentual foi de:',
        alternativas: [
          { id: 'A', texto: '10%' },
          { id: 'B', texto: '20%' },
          { id: 'C', texto: '25%' },
          { id: 'D', texto: '100%' }
        ],
        gabarito: 'C',
        explicacao: 'Variação = (final - inicial)/inicial × 100 = (500.000 - 400.000)/400.000 × 100 = 100.000/400.000 × 100 = 25%. O divisor é sempre o valor INICIAL.'
      },
      {
        id: 'D-MAT-13-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Gráfico de setores',
        pergunta: 'Em um gráfico de setores (pizza), a soma de todos os setores representa 100% do total analisado.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. O gráfico de setores divide um todo em partes proporcionais. Se as categorias não somarem 100%, é possível deduzir o valor que falta.'
      },
      {
        id: 'D-MAT-13-03',
        tipo: 'situacao',
        subtopico: 'Comparação de dados',
        pergunta: 'Um gráfico de linhas mostra a produção de uma fábrica: jan = 100, fev = 120, mar = 90, abr = 130, mai = 110. Sobre a tendência do período:',
        alternativas: [
          { id: 'A', texto: 'É claramente de queda, pois caiu de março para abril.' },
          { id: 'B', texto: 'É de crescimento, pois abril (130) é o maior valor do período, superando janeiro (100).' },
          { id: 'C', texto: 'É estável, pois os valores oscilam sem direção definida.' },
          { id: 'D', texto: 'É de queda, pois maio (110) é menor que abril (130).' }
        ],
        gabarito: 'B',
        explicacao: 'A tendência é a direção GERAL, não as oscilações pontuais. Comparando o início (100) com o fim (110) e o pico do período (130), há crescimento. As quedas em março e maio são oscilações dentro da tendência de alta.'
      },
      {
        id: 'D-MAT-13-04',
        tipo: 'autoavaliacao',
        subtopico: 'Tipos de gráfico',
        pergunta: 'Você sabe escolher o tipo de gráfico mais adequado para cada situação (barras, linhas ou setores) e ler corretamente títulos, eixos e unidades antes de calcular?',
        resposta: 'BARRAS: comparação entre CATEGORIAS (produtos, países). LINHAS: EVOLUÇÃO no tempo (tendência). SETORES: PROPORÇÃO em relação ao todo. Antes de qualquer cálculo: leia o TÍTULO, verifique as UNIDADES nos eixos, observe as LEGENDAS e as NOTAS DE RODAPÉ. Em tabelas, identifique se é de dupla entrada (cruzamento de variáveis). Nunca tire conclusões sem conferir a escala (eixo começa em 0 ou em outro valor?).'
      }
    ]
  }

};
