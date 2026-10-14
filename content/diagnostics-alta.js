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
  }

  /* ============================================================
     Próximo lote — adicionar em edição futura:
     'MAT-02', 'MAT-04', 'MAT-05', 'MAT-09', 'MAT-11', 'MAT-12', 'MAT-13'
  ============================================================ */

};
