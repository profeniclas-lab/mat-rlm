/* ============================================================
   DIAGNÓSTICOS — Módulos de prioridade CONDICIONAL
   Preenchidos: MAT-10, MAT-19, MAT-20, MAT-22
   ============================================================ */

window.DIAGNOSTICS_COMPLEMENTAR = {

  /* ============================================================
     MAT-10 — Equações do 2º Grau, Sistemas e Inequações
  ============================================================ */
  'MAT-10': {
    id: 'D-MAT-10',
    moduloId: 'MAT-10',
    itens: [
      {
        id: 'D-MAT-10-01',
        tipo: 'multipla_escolha',
        subtopico: 'Bhaskara',
        pergunta: 'As raízes da equação x² - 5x + 6 = 0 são:',
        alternativas: [
          { id: 'A', texto: 'x = 1 e x = 6' },
          { id: 'B', texto: 'x = 2 e x = 3' },
          { id: 'C', texto: 'x = -2 e x = -3' },
          { id: 'D', texto: 'x = 5 e x = 6' }
        ],
        gabarito: 'B',
        explicacao: 'Δ = 25 - 24 = 1. Bhaskara: x = (5 ± 1)/2 → x₁ = 3; x₂ = 2. Verificação: 2² - 5×2 + 6 = 0 ✓; 3² - 5×3 + 6 = 0 ✓.'
      },
      {
        id: 'D-MAT-10-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Discriminante',
        pergunta: 'Se o discriminante Δ de uma equação do 2º grau for negativo, a equação não possui raízes reais.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. Δ < 0 significa que √Δ não é real, então não há raízes reais. A parábola não cruza o eixo x. Δ = 0 → raiz dupla; Δ > 0 → duas raízes reais distintas.'
      },
      {
        id: 'D-MAT-10-03',
        tipo: 'situacao',
        subtopico: 'Sistema de equações',
        pergunta: 'Resolvendo o sistema x + y = 10 e x - y = 4, os valores de x e y são:',
        alternativas: [
          { id: 'A', texto: 'x = 7 e y = 3' },
          { id: 'B', texto: 'x = 6 e y = 4' },
          { id: 'C', texto: 'x = 5 e y = 5' },
          { id: 'D', texto: 'x = 8 e y = 2' }
        ],
        gabarito: 'A',
        explicacao: 'Somando as equações: 2x = 14 → x = 7. Substituindo: 7 + y = 10 → y = 3. Verificação: 7 + 3 = 10 ✓; 7 - 3 = 4 ✓.'
      },
      {
        id: 'D-MAT-10-04',
        tipo: 'autoavaliacao',
        subtopico: 'Inequações',
        pergunta: 'Você lembra que, ao multiplicar ou dividir uma inequação por um número NEGATIVO, o sinal da desigualdade INVERTE?',
        resposta: 'Sim. Ex.: -2x > 6 → dividindo por -2 (negativo), o sinal inverte: x < -3. Outro exemplo: 5 - 3x ≤ 2 → -3x ≤ -3 → x ≥ 1. Esquecer a inversão é o erro mais comum em inequações. Multiplicação/divisão por número POSITIVO NÃO inverte o sinal.'
      }
    ]
  },

  /* ============================================================
     MAT-19 — Lógica Proposicional
  ============================================================ */
  'MAT-19': {
    id: 'D-MAT-19',
    moduloId: 'MAT-19',
    itens: [
      {
        id: 'D-MAT-19-01',
        tipo: 'multipla_escolha',
        subtopico: 'Condicional',
        pergunta: 'A proposição "Se 3 > 5, então 10 > 7" tem valor lógico:',
        alternativas: [
          { id: 'A', texto: 'Verdadeiro' },
          { id: 'B', texto: 'Falso' },
          { id: 'C', texto: 'Indeterminado' },
          { id: 'D', texto: 'Depende do contexto' }
        ],
        gabarito: 'A',
        explicacao: 'A condicional p → q só é FALSA quando p = V e q = F. Aqui, p ("3 > 5") é FALSA, então a condicional é automaticamente VERDADEIRA, independentemente de q. Regra: F → qualquer coisa = V.'
      },
      {
        id: 'D-MAT-19-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Conjunção e disjunção',
        pergunta: 'A conjunção p ∧ q ("p E q") é verdadeira quando pelo menos uma das proposições é verdadeira.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. A conjunção p ∧ q só é VERDADEIRA quando AMBAS são verdadeiras. Basta uma ser F para o resultado ser F. A descrição "pelo menos uma verdadeira" é da DISJUNÇÃO (∨), não da conjunção.'
      },
      {
        id: 'D-MAT-19-03',
        tipo: 'situacao',
        subtopico: 'Tabela-verdade',
        pergunta: 'Uma tabela-verdade que envolve 3 proposições simples (p, q, r) tem quantas linhas?',
        alternativas: [
          { id: 'A', texto: '3' },
          { id: 'B', texto: '6' },
          { id: 'C', texto: '8' },
          { id: 'D', texto: '9' }
        ],
        gabarito: 'C',
        explicacao: 'Número de linhas = 2ⁿ, onde n = número de proposições simples. Com n = 3: 2³ = 8 linhas. Cada proposição pode ser V ou F, gerando todas as combinações possíveis.'
      },
      {
        id: 'D-MAT-19-04',
        tipo: 'autoavaliacao',
        subtopico: 'Conectivos',
        pergunta: 'Você consegue montar a tabela-verdade de uma proposição composta com dois ou três conectivos (¬, ∧, ∨, →, ↔) e lembrar a prioridade de avaliação?',
        resposta: 'Prioridade dos conectivos (do maior para o menor): 1) ¬ (negação); 2) ∧ (conjunção); 3) ∨ (disjunção); 4) → (condicional); 5) ↔ (bicondicional). Tabelas: com 2 proposições → 4 linhas; com 3 → 8 linhas; com 4 → 16 linhas (sempre 2ⁿ). Conjunção: V só se ambas V. Disjunção: F só se ambas F. Condicional: F só quando V→F. Bicondicional: V quando ambas têm o mesmo valor.'
      }
    ]
  },

  /* ============================================================
     MAT-20 — Equivalências e Argumentação Lógica
  ============================================================ */
  'MAT-20': {
    id: 'D-MAT-20',
    moduloId: 'MAT-20',
    itens: [
      {
        id: 'D-MAT-20-01',
        tipo: 'multipla_escolha',
        subtopico: 'Leis de De Morgan',
        pergunta: 'A negação da proposição "Estudo e trabalho" é:',
        alternativas: [
          { id: 'A', texto: 'Estudo e não trabalho' },
          { id: 'B', texto: 'Não estudo ou não trabalho' },
          { id: 'C', texto: 'Não estudo e não trabalho' },
          { id: 'D', texto: 'Não estudo ou trabalho' }
        ],
        gabarito: 'B',
        explicacao: 'De Morgan: ¬(p ∧ q) ≡ ¬p ∨ ¬q. A negação de uma conjunção é a DISJUNÇÃO das negações. Portanto: "Não estudo OU não trabalho". Nunca usar "E" na negação de conjunção.'
      },
      {
        id: 'D-MAT-20-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Contrapositiva',
        pergunta: 'A proposição "Se chove, então uso guarda-chuva" é logicamente equivalente a "Se não uso guarda-chuva, então não chove".',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. Essa é a CONTRAPOSITIVA: p → q ≡ ¬q → ¬p. A recíproca ("Se uso guarda-chuva, então chove") NÃO é equivalente. Só a contrapositiva mantém a equivalência lógica.'
      },
      {
        id: 'D-MAT-20-03',
        tipo: 'situacao',
        subtopico: 'Negação da condicional',
        pergunta: 'A negação da proposição "Se estudo, então passo" é:',
        alternativas: [
          { id: 'A', texto: 'Se não estudo, então não passo' },
          { id: 'B', texto: 'Estudo e não passo' },
          { id: 'C', texto: 'Não estudo ou passo' },
          { id: 'D', texto: 'Se passo, então estudo' }
        ],
        gabarito: 'B',
        explicacao: '¬(p → q) ≡ p ∧ ¬q. Mantém o antecedente (p), nega o consequente (¬q) e troca "SE...ENTÃO" por "E". Assim: "Estudo E NÃO passo". A alternativa C é a equivalência ¬p ∨ q; a D é a recíproca (não a negação); a A é um erro comum (negar as duas partes).'
      },
      {
        id: 'D-MAT-20-04',
        tipo: 'autoavaliacao',
        subtopico: 'Argumentação lógica',
        pergunta: 'Você consegue distinguir um argumento VÁLIDO (estrutura garante a conclusão) de um argumento com premissas VERDADEIRAS, e aplicar Modus Ponens e Modus Tollens?',
        resposta: 'VÁLIDO ≠ VERDADEIRO. Um argumento é válido quando, se as premissas são V, a conclusão é necessariamente V. As premissas podem ser factualmente F e o argumento continuar válido (validade é estrutural). MODUS PONENS: p → q; p ∴ q. Ex.: "Se chove, molho. Chove. Logo, molho." MODUS TOLLENS: p → q; ¬q ∴ ¬p. Ex.: "Se chove, molho. Não molho. Logo, não chove." Erros comuns: afirmar o consequente (p → q; q ∴ p) e negar o antecedente (p → q; ¬p ∴ ¬q) — ambos INVÁLIDOS.'
      }
    ]
  },

  /* ============================================================
     MAT-22 — Análise Combinatória e Probabilidade
  ============================================================ */
  'MAT-22': {
    id: 'D-MAT-22',
    moduloId: 'MAT-22',
    itens: [
      {
        id: 'D-MAT-22-01',
        tipo: 'multipla_escolha',
        subtopico: 'Princípio multiplicativo',
        pergunta: 'Uma pessoa tem 4 camisas e 3 calças. De quantas formas diferentes ela pode se vestir (uma camisa e uma calça)?',
        alternativas: [
          { id: 'A', texto: '7' },
          { id: 'B', texto: '12' },
          { id: 'C', texto: '24' },
          { id: 'D', texto: '64' }
        ],
        gabarito: 'B',
        explicacao: 'Princípio fundamental da contagem: 4 × 3 = 12 combinações possíveis. Não se soma (4 + 3 = 7 está errado) — quando as escolhas são independentes, multiplica-se.'
      },
      {
        id: 'D-MAT-22-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Arranjo x combinação',
        pergunta: 'Escolher 3 pessoas entre 8 para formar uma comissão sem cargos definidos é um problema de ARRANJO, pois a ordem importa.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. Comissão SEM cargos definidos é COMBINAÇÃO (a ordem NÃO importa). Se os 3 fossem ocupar cargos diferentes (presidente, secretário, tesoureiro), aí seria ARRANJO. Regra de ouro: se trocar a ordem gera resultado diferente, é arranjo; se não, combinação.'
      },
      {
        id: 'D-MAT-22-03',
        tipo: 'situacao',
        subtopico: 'Probabilidade',
        pergunta: 'Uma urna contém 5 bolas vermelhas e 3 bolas azuis. Retirando-se uma bola ao acaso, qual a probabilidade de ela ser vermelha?',
        alternativas: [
          { id: 'A', texto: '3/8' },
          { id: 'B', texto: '5/8' },
          { id: 'C', texto: '5/3' },
          { id: 'D', texto: '1/2' }
        ],
        gabarito: 'B',
        explicacao: 'P = casos favoráveis / casos possíveis = 5/8. Total de bolas = 5 + 3 = 8. Favoráveis (vermelhas) = 5. A probabilidade é sempre um número entre 0 e 1.'
      },
      {
        id: 'D-MAT-22-04',
        tipo: 'autoavaliacao',
        subtopico: 'Escolha da fórmula',
        pergunta: 'Diante de um problema de contagem, você consegue identificar rapidamente se deve usar permutação, arranjo, combinação ou apenas o princípio multiplicativo?',
        resposta: 'Perguntas-chave: 1) TODOS os elementos serão usados? Se sim → PERMUTAÇÃO (P(n) = n!). 2) Apenas PARTE dos elementos? Aí: 2a) A ORDEM importa? Se sim → ARRANJO (A(n,p) = n!/(n-p)!). 2b) A ordem NÃO importa? → COMBINAÇÃO (C(n,p) = n!/[p!(n-p)!]). 3) Escolhas independentes em etapas? → PRINCÍPIO MULTIPLICATIVO (m × n). Exemplos: fila de 5 pessoas = permutação (5!); 3 pessoas para 3 cargos entre 7 = arranjo (A(7,3) = 210); 3 pessoas para comissão entre 7 = combinação (C(7,3) = 35); senha de 4 dígitos = princípio multiplicativo (10⁴).'
      }
    ]
  }

};
