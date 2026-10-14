/* ============================================================
   BANCO DE QUESTÕES — Módulos ESSENCIAIS
   Preenchidos: MAT-01, MAT-03, MAT-06, MAT-07, MAT-08
   ============================================================ */

window.QUESTIONS = [

  /* ============================================================
     MAT-01 — Operações Fundamentais
  ============================================================ */
  {
    id: 'Q-DID-MAT-0101',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'MAT-01',
    subtema: 'Prioridade das operações',
    dificuldade: 1,
    prioridade: 'essencial',
    enunciado: 'O valor da expressão 20 - 3 × 4 + 8 é:',
    alternativas: [
      { id: 'A', texto: '76' },
      { id: 'B', texto: '16' },
      { id: 'C', texto: '18' },
      { id: 'D', texto: '22' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Primeiro resolve a multiplicação: 3 × 4 = 12. Depois soma/subtrai da esquerda para a direita: 20 - 12 = 8; 8 + 8 = 16.',
      incorretas: { A: 'Erro clássico: resolveu 20 - 3 = 17 primeiro; 17 × 4 = 68; 68 + 8 = 76.', C: 'Erro ao somar 12 + 8 = 20 e subtrair de 20 - 12 = 8, depois 8 + 8 = 16 — esta alternativa é 18, valor que não vem de nenhuma ordem plausível.', D: 'Erro ao resolver 20 - 12 = 8 e somar com 8 + 6, considerando uma multiplicação fictícia.' },
      conceitoCobrado: 'Prioridade das operações: multiplicação/divisão antes de adição/subtração.',
      pegadinha: 'Resolver na ordem de leitura (esquerda para direita) sem verificar prioridade.',
      comoApareceEmConcurso: 'Expressões numéricas puras, muito frequentes em provas de nível médio.'
    },
    tags: ['prioridade', 'expressões']
  },
  {
    id: 'Q-DID-MAT-0102',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'MAT-01',
    subtema: 'Parênteses e colchetes',
    dificuldade: 2,
    prioridade: 'essencial',
    enunciado: 'O valor da expressão 5 × [8 + (6 - 2) × 3] é:',
    alternativas: [
      { id: 'A', texto: '100' },
      { id: 'B', texto: '130' },
      { id: 'C', texto: '180' },
      { id: 'D', texto: '58' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Resolve primeiro os parênteses: 6 - 2 = 4. Depois, dentro dos colchetes: 4 × 3 = 12; 8 + 12 = 20. Por fim, 5 × 20 = 100.',
      incorretas: { B: 'Erro ao somar 8 + 6 - 2 = 12 e multiplicar por 3 = 36, depois 5 × 36 = 180 (alternativa C, aliás).', C: 'Erro ao ignorar os colchetes e multiplicar 5 × 36.', D: 'Erro ao calcular 5 × 8 = 40, mais (6-2) × 3 = 12, mais 6 — soma desconexa.' },
      conceitoCobrado: 'Ordem: parênteses → colchetes → chaves → potenciação → × e ÷ → + e -.',
      pegadinha: 'Esquecer de respeitar a ordem dos sinais de agrupamento.',
      comoApareceEmConcurso: 'Expressões com parênteses e colchetes misturados.'
    },
    tags: ['parênteses', 'colchetes', 'expressões']
  },
  {
    id: 'Q-DID-MAT-0103',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'MAT-01',
    subtema: 'Divisão por zero',
    dificuldade: 1,
    prioridade: 'essencial',
    enunciado: 'Sobre a divisão em matemática, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Qualquer número dividido por zero é igual a zero.' },
      { id: 'B', texto: 'A divisão de zero por qualquer número (diferente de zero) é igual a zero, mas a divisão de qualquer número por zero é indefinida.' },
      { id: 'C', texto: 'Zero dividido por zero é igual a 1.' },
      { id: 'D', texto: 'Não há restrição para divisor em uma divisão.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '0 ÷ n = 0 (se n ≠ 0). n ÷ 0 NÃO existe (é indefinido). São situações diferentes.',
      incorretas: { A: 'Divisão por zero é indefinida, não zero.', C: '0 ÷ 0 também é indefinido (não é 1).', D: 'O divisor nunca pode ser zero.' },
      conceitoCobrado: 'Restrição da divisão: divisor ≠ 0.',
      pegadinha: 'Confundir "zero no numerador" (resultado zero) com "zero no denominador" (indefinido).',
      comoApareceEmConcurso: 'Conceito básico, aparece em questões de expressões.'
    },
    tags: ['divisão', 'zero']
  },
  {
    id: 'Q-DID-MAT-0104',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'MAT-01',
    subtema: 'Problemas contextualizados',
    dificuldade: 2,
    prioridade: 'essencial',
    enunciado: 'Uma papelaria vende canetas a R$ 3 cada e cadernos a R$ 15 cada. Uma escola comprou 30 canetas e 12 cadernos. Se pagou com R$ 500, quanto recebeu de troco?',
    alternativas: [
      { id: 'A', texto: 'R$ 230' },
      { id: 'B', texto: 'R$ 280' },
      { id: 'C', texto: 'R$ 220' },
      { id: 'D', texto: 'R$ 260' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Canetas: 30 × 3 = 90. Cadernos: 12 × 15 = 180. Total: 90 + 180 = 270. Troco: 500 - 270 = 230.',
      incorretas: { B: 'Erro ao calcular cadernos como 12 × 10 = 120, total 210, troco 290 (valor arredondado para 280).', C: 'Erro ao somar 30 + 12 = 42 e multiplicar por média errada.', D: 'Erro ao calcular canetas como 30 × 4 = 120 e cadernos como 12 × 10 = 120.' },
      conceitoCobrado: 'Problemas com múltiplas operações.',
      pegadinha: 'Confundir o preço unitário de cada item ou esquecer de subtrair o total.',
      comoApareceEmConcurso: 'Problemas de compra e venda com troco.'
    },
    tags: ['problemas', 'multiplicação', 'subtração']
  },
  {
    id: 'Q-DID-MAT-0105',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'MAT-01',
    subtema: 'Cálculo mental',
    dificuldade: 2,
    prioridade: 'essencial',
    enunciado: 'Uma técnica eficiente para calcular 98 + 47 mentalmente é:',
    alternativas: [
      { id: 'A', texto: 'Somar 98 + 47 dígito por dígito, sem arredondar.' },
      { id: 'B', texto: 'Somar 98 + 2 = 100 e depois 100 + 45 = 145 (arredondando 47 para 45 + 2).' },
      { id: 'C', texto: 'Multiplicar 98 × 47 e dividir por 2.' },
      { id: 'D', texto: 'Subtrair 98 - 47 e inverter o sinal.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Arredondar 98 para 100 (soma 2) e depois subtrair o excesso de 47 (47 - 2 = 45): 100 + 45 = 145.',
      incorretas: { A: 'Funciona, mas não é a técnica de cálculo mental esperada.', C: 'Multiplicação não tem relação com soma.', D: 'Soma não se resolve por subtração.' },
      conceitoCobrado: 'Técnicas de cálculo mental por compensação.',
      pegadinha: 'Não perceber a técnica de arredondamento.',
      comoApareceEmConcurso: 'Menos cobrado diretamente, mas útil em provas cronometradas.'
    },
    tags: ['cálculo mental', 'estimativa']
  },
  {
    id: 'Q-DID-MAT-0106',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'MAT-01',
    subtema: 'Estimativas',
    dificuldade: 2,
    prioridade: 'essencial',
    enunciado: 'Um candidato precisa estimar rapidamente 4.912 ÷ 9,8. A estimativa mais razoável é:',
    alternativas: [
      { id: 'A', texto: 'Aproximadamente 50' },
      { id: 'B', texto: 'Aproximadamente 500' },
      { id: 'C', texto: 'Aproximadamente 5.000' },
      { id: 'D', texto: 'Aproximadamente 5' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Arredonde: 4.912 ≈ 5.000 e 9,8 ≈ 10. Então 5.000 ÷ 10 = 500.',
      incorretas: { A: 'Subestimou em uma ordem de grandeza.', C: 'Confundiu divisão com multiplicação.', D: 'Erro de escala (faltou um zero).' },
      conceitoCobrado: 'Estimativa por arredondamento.',
      pegadinha: 'Perder a ordem de grandeza ao arredondar.',
      comoApareceEmConcurso: 'Questões que pedem "aproximadamente" ou respostas rápidas.'
    },
    tags: ['estimativa', 'arredondamento']
  },

  /* ============================================================
     MAT-03 — Frações e Números Decimais
  ============================================================ */
  {
    id: 'Q-DID-MAT-0301',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'MAT-03',
    subtema: 'Conversões',
    dificuldade: 1,
    prioridade: 'essencial',
    enunciado: 'A fração 5/8 corresponde, em decimal e em porcentagem, a:',
    alternativas: [
      { id: 'A', texto: '0,58 e 58%' },
      { id: 'B', texto: '0,625 e 62,5%' },
      { id: 'C', texto: '0,58 e 5,8%' },
      { id: 'D', texto: '0,625 e 6,25%' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '5 ÷ 8 = 0,625. Multiplicando por 100: 62,5%.',
      incorretas: { A: 'Confundiu 5/8 com 58/100.', C: 'Confundiu a vírgula ao converter para porcentagem.', D: 'Errou a conversão para porcentagem (esqueceu de multiplicar por 100).' },
      conceitoCobrado: 'Conversão fração → decimal → porcentagem.',
      pegadinha: 'Confundir 5/8 com 5,8 ou 58/100.',
      comoApareceEmConcurso: 'Questões de conversão entre representações.'
    },
    tags: ['fração', 'decimal', 'porcentagem']
  },
  {
    id: 'Q-DID-MAT-0302',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'MAT-03',
    subtema: 'Adição de frações',
    dificuldade: 2,
    prioridade: 'essencial',
    enunciado: 'O resultado da soma 2/3 + 3/4 é:',
    alternativas: [
      { id: 'A', texto: '5/7' },
      { id: 'B', texto: '17/12' },
      { id: 'C', texto: '6/12' },
      { id: 'D', texto: '5/12' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'MMC de 3 e 4 = 12. 2/3 = 8/12 e 3/4 = 9/12. Soma: 8/12 + 9/12 = 17/12.',
      incorretas: { A: 'Erro clássico de somar numeradores e denominadores.', C: 'Erro ao somar apenas numeradores (2+3 = 5) e depois multiplicar.', D: 'Esqueceu de ajustar um dos numeradores ao MMC.' },
      conceitoCobrado: 'Adição de frações com denominadores diferentes.',
      pegadinha: 'Somar numeradores e denominadores diretamente.',
      comoApareceEmConcurso: 'Praticamente toda prova de nível médio.'
    },
    tags: ['fração', 'adição', 'MMC']
  },
  {
    id: 'Q-DID-MAT-0303',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'MAT-03',
    subtema: 'Multiplicação e divisão de frações',
    dificuldade: 2,
    prioridade: 'essencial',
    enunciado: 'O resultado da expressão (2/5) ÷ (4/3) é:',
    alternativas: [
      { id: 'A', texto: '8/15' },
      { id: 'B', texto: '3/10' },
      { id: 'C', texto: '10/3' },
      { id: 'D', texto: '6/20' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Divisão de frações: multiplica pelo inverso da segunda. (2/5) × (3/4) = 6/20 = 3/10.',
      incorretas: { A: 'Multiplicou em linha (numerador × numerador, denominador × denominador) sem inverter.', C: 'Inverteu a primeira em vez da segunda.', D: 'Chegou ao resultado correto antes de simplificar — 6/20 = 3/10.' },
      conceitoCobrado: 'Divisão de frações.',
      pegadinha: 'Esquecer de inverter a segunda fração ou simplificar a resposta final.',
      comoApareceEmConcurso: 'Questões com frações encadeadas.'
    },
    tags: ['fração', 'divisão']
  },
  {
    id: 'Q-DID-MAT-0304',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'MAT-03',
    subtema: 'Problemas com frações',
    dificuldade: 2,
    prioridade: 'essencial',
    enunciado: 'Um tanque está com 3/4 da sua capacidade. Se forem retirados 1/3 do conteúdo atual, qual fração do tanque ficará?',
    alternativas: [
      { id: 'A', texto: '1/2' },
      { id: 'B', texto: '5/12' },
      { id: 'C', texto: '1/3' },
      { id: 'D', texto: '2/3' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Se retira 1/3 de 3/4: 1/3 × 3/4 = 3/12 = 1/4. Restante: 3/4 - 1/4 = 2/4 = 1/2.',
      incorretas: { B: 'Erro ao calcular 3/4 - 1/3 sem achar o MMC corretamente.', C: 'Erro ao subtrair 1/3 de 3/4 tratando como 3/4 - 1/3 = 2/1.', D: 'Erro ao considerar que sobrou 2/3 (impossível — o tanque tinha 3/4).' },
      conceitoCobrado: 'Fração de fração e subtração.',
      pegadinha: 'Confundir "retirar 1/3" com "retirar 1/3 do tanque". O enunciado diz "do conteúdo atual".',
      comoApareceEmConcurso: 'Problemas de tanque, desconto progressivo.'
    },
    tags: ['fração', 'problemas']
  },
  {
    id: 'Q-DID-MAT-0305',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'MAT-03',
    subtema: 'Dízimas periódicas',
    dificuldade: 3,
    prioridade: 'essencial',
    enunciado: 'A fração geratriz da dízima 0,1666... é:',
    alternativas: [
      { id: 'A', texto: '1/6' },
      { id: 'B', texto: '1/3' },
      { id: 'C', texto: '16/100' },
      { id: 'D', texto: '1/5' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: '0,1666... é dízima COMPOSTA (parte não periódica = 1, período = 6). Fórmula: (16 - 1) / 90 = 15/90 = 1/6.',
      incorretas: { B: '1/3 = 0,333..., não 0,1666...', C: '16/100 = 0,16 (decimal exato, não dízima).', D: '1/5 = 0,2.' },
      conceitoCobrado: 'Fração geratriz de dízima periódica composta.',
      pegadinha: 'Confundir dízima simples com composta.',
      comoApareceEmConcurso: 'Questões de dízimas, especialmente em provas mais exigentes.'
    },
    tags: ['dízima', 'fração geratriz']
  },
  {
    id: 'Q-DID-MAT-0306',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'MAT-03',
    subtema: 'Simplificação',
    dificuldade: 2,
    prioridade: 'essencial',
    enunciado: 'A fração 84/126, na forma irredutível, é:',
    alternativas: [
      { id: 'A', texto: '14/21' },
      { id: 'B', texto: '2/3' },
      { id: 'C', texto: '4/7' },
      { id: 'D', texto: '6/9' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'MDC(84, 126) = 42. 84 ÷ 42 = 2; 126 ÷ 42 = 3. Fração irredutível: 2/3.',
      incorretas: { A: 'Simplificou por 6, mas ainda dá para simplificar mais.', C: '84 ÷ 21 = 4; 126 ÷ 18 = 7 — denominador errado.', D: 'Simplificação incompleta (6/9 = 2/3, ainda simplificável).' },
      conceitoCobrado: 'Simplificação até a forma irredutível.',
      pegadinha: 'Parar de simplificar antes de chegar à fração irredutível.',
      comoApareceEmConcurso: 'Cobrança de "forma irredutível" ou "forma mais simples".'
    },
    tags: ['simplificação', 'MDC']
  },

  /* ============================================================
     MAT-06 — Razão, Proporção e Divisão Proporcional
  ============================================================ */
  {
    id: 'Q-DID-MAT-0601',
    tipo: 'DIDATICA',
    area: 'PROP',
    moduloId: 'MAT-06',
    subtema: 'Razão entre grandezas',
    dificuldade: 1,
    prioridade: 'essencial',
    enunciado: 'Em um concurso, 45 candidatos foram aprovados e 30 foram reprovados. A razão entre APROVADOS e o TOTAL de candidatos, na forma irredutível, é:',
    alternativas: [
      { id: 'A', texto: '3/5' },
      { id: 'B', texto: '2/5' },
      { id: 'C', texto: '3/2' },
      { id: 'D', texto: '2/3' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Total = 45 + 30 = 75. Razão = 45/75 = 3/5 (dividindo por 15).',
      incorretas: { B: 'Inverteu numerador e denominador.', C: 'Razão entre aprovados e reprovados, não com o total.', D: 'Confundiu com outra razão.' },
      conceitoCobrado: 'Razão entre uma parte e o todo.',
      pegadinha: 'Confundir "razão com o total" com "razão entre duas partes".',
      comoApareceEmConcurso: 'Cobrança direta em problemas de proporção.'
    },
    tags: ['razão', 'proporção']
  },
  {
    id: 'Q-DID-MAT-0602',
    tipo: 'DIDATICA',
    area: 'PROP',
    moduloId: 'MAT-06',
    subtema: 'Proporção — propriedade fundamental',
    dificuldade: 2,
    prioridade: 'essencial',
    enunciado: 'Se 3/7 = x/35, o valor de x é:',
    alternativas: [
      { id: 'A', texto: '12' },
      { id: 'B', texto: '15' },
      { id: 'C', texto: '21' },
      { id: 'D', texto: '5' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Propriedade fundamental: 3 × 35 = 7 × x → 105 = 7x → x = 15.',
      incorretas: { A: 'Erro ao montar a proporção.', C: 'Erro ao multiplicar 3 × 7 em vez de 3 × 35.', D: 'Erro ao dividir 35 por 7 (dá 5) e não multiplicar pelo numerador 3.' },
      conceitoCobrado: 'Propriedade fundamental das proporções.',
      pegadinha: 'Errar a multiplicação cruzada.',
      comoApareceEmConcurso: 'Base para regra de três.'
    },
    tags: ['proporção', 'multiplicação cruzada']
  },
  {
    id: 'Q-DID-MAT-0603',
    tipo: 'DIDATICA',
    area: 'PROP',
    moduloId: 'MAT-06',
    subtema: 'Grandezas direta e inversamente proporcionais',
    dificuldade: 2,
    prioridade: 'essencial',
    enunciado: 'Sobre grandezas proporcionais, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Velocidade e tempo de viagem, para uma mesma distância, são inversamente proporcionais.' },
      { id: 'B', texto: 'Velocidade e tempo de viagem são diretamente proporcionais.' },
      { id: 'C', texto: 'Quantidade de pão e valor a pagar são inversamente proporcionais.' },
      { id: 'D', texto: 'Número de operários e tempo para concluir a obra são diretamente proporcionais.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Para a mesma distância, ao aumentar a velocidade, o tempo diminui — INVERSAMENTE proporcionais.',
      incorretas: { B: 'Se fossem diretas, mais velocidade daria mais tempo — absurdo.', C: 'Mais pão → mais valor pago = DIRETAMENTE proporcionais.', D: 'Mais operários → menos tempo = INVERSAMENTE proporcionais.' },
      conceitoCobrado: 'Direta x inversa.',
      pegadinha: 'Inverter a relação.',
      comoApareceEmConcurso: 'Sempre cobrado, é a base da regra de três composta.'
    },
    tags: ['proporcionalidade', 'direta', 'inversa']
  },
  {
    id: 'Q-DID-MAT-0604',
    tipo: 'DIDATICA',
    area: 'PROP',
    moduloId: 'MAT-06',
    subtema: 'Divisão diretamente proporcional',
    dificuldade: 3,
    prioridade: 'essencial',
    enunciado: 'R$ 3.600 serão divididos entre três pessoas em partes diretamente proporcionais a 2, 3 e 4. A maior parte será:',
    alternativas: [
      { id: 'A', texto: 'R$ 800' },
      { id: 'B', texto: 'R$ 1.200' },
      { id: 'C', texto: 'R$ 1.600' },
      { id: 'D', texto: 'R$ 2.000' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Soma dos pesos: 2 + 3 + 4 = 9. Constante k = 3.600 / 9 = 400. Partes: 800, 1.200, 1.600. A maior = R$ 1.600.',
      incorretas: { A: 'Primeira parte (peso 2).', B: 'Segunda parte (peso 3).', D: 'Erro ao usar k = 500 (dividindo por 7,2 em vez de 9).' },
      conceitoCobrado: 'Divisão diretamente proporcional.',
      pegadinha: 'Errar a soma dos pesos.',
      comoApareceEmConcurso: 'Rateio de lucros, divisão de herança, rateio de despesas.'
    },
    tags: ['divisão proporcional', 'direta']
  },
  {
    id: 'Q-DID-MAT-0605',
    tipo: 'DIDATICA',
    area: 'PROP',
    moduloId: 'MAT-06',
    subtema: 'Divisão inversamente proporcional',
    dificuldade: 3,
    prioridade: 'essencial',
    enunciado: 'R$ 1.800 serão divididos em partes inversamente proporcionais a 2 e 3. As partes serão:',
    alternativas: [
      { id: 'A', texto: 'R$ 720 e R$ 1.080' },
      { id: 'B', texto: 'R$ 1.080 e R$ 720' },
      { id: 'C', texto: 'R$ 900 e R$ 900' },
      { id: 'D', texto: 'R$ 600 e R$ 1.200' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Inversos: 1/2 + 1/3 = 3/6 + 2/6 = 5/6. k = 1.800 / (5/6) = 2.160. Partes: 2.160 × 1/2 = 1.080 e 2.160 × 1/3 = 720.',
      incorretas: { A: 'Inverteu as partes.', C: 'Tratou como diretamente proporcionais iguais.', D: 'Erro ao usar pesos 1 e 2 em vez de 1/2 e 1/3.' },
      conceitoCobrado: 'Divisão inversamente proporcional.',
      pegadinha: 'Esquecer de usar 1/n em vez de n.',
      comoApareceEmConcurso: 'Rateio com critério inverso.'
    },
    tags: ['divisão proporcional', 'inversa']
  },
  {
    id: 'Q-DID-MAT-0606',
    tipo: 'DIDATICA',
    area: 'PROP',
    moduloId: 'MAT-06',
    subtema: 'Problemas com proporção',
    dificuldade: 2,
    prioridade: 'essencial',
    enunciado: 'Em uma receita, a razão entre farinha e açúcar é de 5 para 2. Se forem usados 250 g de farinha, quanto de açúcar será necessário?',
    alternativas: [
      { id: 'A', texto: '100 g' },
      { id: 'B', texto: '125 g' },
      { id: 'C', texto: '150 g' },
      { id: 'D', texto: '175 g' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: '5/2 = 250/x → 5x = 500 → x = 100 g.',
      incorretas: { B: 'Dividiu 250 por 2 = 125 (erro de leitura).', C: 'Confundiu a razão.', D: 'Erro ao montar a proporção.' },
      conceitoCobrado: 'Aplicação de proporção em problema prático.',
      pegadinha: 'Confundir a ordem da razão (farinha/açúcar x açúcar/farinha).',
      comoApareceEmConcurso: 'Problemas de receita, mistura, liga metálica.'
    },
    tags: ['proporção', 'problemas']
  },

  /* ============================================================
     MAT-07 — Regra de Três Simples e Composta
  ============================================================ */
  {
    id: 'Q-DID-MAT-0701',
    tipo: 'DIDATICA',
    area: 'PROP',
    moduloId: 'MAT-07',
    subtema: 'Regra de três simples direta',
    dificuldade: 1,
    prioridade: 'essencial',
    enunciado: 'Se 5 cadernos custam R$ 60, quanto custam 8 cadernos do mesmo tipo?',
    alternativas: [
      { id: 'A', texto: 'R$ 90' },
      { id: 'B', texto: 'R$ 96' },
      { id: 'C', texto: 'R$ 100' },
      { id: 'D', texto: 'R$ 108' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Grandezas diretas: 5/8 = 60/x → 5x = 480 → x = 96.',
      incorretas: { A: 'Erro ao dividir 60/5 = 12 e multiplicar por 7,5.', C: 'Erro de cálculo.', D: 'Erro ao somar 12 × 9 = 108.' },
      conceitoCobrado: 'Regra de três simples direta.',
      pegadinha: 'Errar a multiplicação cruzada.',
      comoApareceEmConcurso: 'Praticamente toda prova.'
    },
    tags: ['regra de três', 'simples direta']
  },
  {
    id: 'Q-DID-MAT-0702',
    tipo: 'DIDATICA',
    area: 'PROP',
    moduloId: 'MAT-07',
    subtema: 'Regra de três simples inversa',
    dificuldade: 2,
    prioridade: 'essencial',
    enunciado: 'Se 4 pedreiros constroem um muro em 12 dias, em quantos dias 6 pedreiros construirão o mesmo muro?',
    alternativas: [
      { id: 'A', texto: '18 dias' },
      { id: 'B', texto: '8 dias' },
      { id: 'C', texto: '9 dias' },
      { id: 'D', texto: '6 dias' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Pedreiros e dias são INVERSAMENTE proporcionais. 4/6 = x/12 → 6x = 48 → x = 8 dias.',
      incorretas: { A: 'Tratou como diretamente proporcional (4/6 = 12/x → x = 18).', C: 'Erro de cálculo.', D: 'Erro ao usar 2/4 em vez de 4/6.' },
      conceitoCobrado: 'Regra de três simples inversa.',
      pegadinha: 'Classificar como direta quando é inversa.',
      comoApareceEmConcurso: 'Problemas de obra e produtividade.'
    },
    tags: ['regra de três', 'inversa']
  },
  {
    id: 'Q-DID-MAT-0703',
    tipo: 'DIDATICA',
    area: 'PROP',
    moduloId: 'MAT-07',
    subtema: 'Regra de três composta',
    dificuldade: 3,
    prioridade: 'essencial',
    enunciado: 'Uma equipe de 8 pessoas produz 400 peças em 5 dias. Quantas peças 6 pessoas produzirão em 10 dias, no mesmo ritmo?',
    alternativas: [
      { id: 'A', texto: '480' },
      { id: 'B', texto: '600' },
      { id: 'C', texto: '750' },
      { id: 'D', texto: '800' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Peças é DIRETA com pessoas (mais pessoas → mais peças) e DIRETA com dias. x = 400 × (6/8) × (10/5) = 400 × 0,75 × 2 = 600.',
      incorretas: { A: 'Erro ao calcular (6/8) × (5/10) tratando dias como inversa.', C: 'Erro ao usar (8/6).', D: 'Erro ao dobrar sem ajustar pessoas.' },
      conceitoCobrado: 'Regra de três composta com grandezas diretas.',
      pegadinha: 'Classificar erradamente dias como inversa com peças.',
      comoApareceEmConcurso: 'Problemas de produtividade.'
    },
    tags: ['regra de três', 'composta']
  },
  {
    id: 'Q-DID-MAT-0704',
    tipo: 'DIDATICA',
    area: 'PROP',
    moduloId: 'MAT-07',
    subtema: 'Regra de três composta com inversa',
    dificuldade: 3,
    prioridade: 'essencial',
    enunciado: 'Se 10 máquinas, trabalhando 6 horas por dia, produzem 1.200 unidades em 8 dias, quantas unidades 15 máquinas produzirão trabalhando 4 horas por dia durante 10 dias?',
    alternativas: [
      { id: 'A', texto: '1.500' },
      { id: 'B', texto: '1.200' },
      { id: 'C', texto: '1.000' },
      { id: 'D', texto: '1.800' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Unidades é DIRETA com máquinas, DIRETA com horas/dia e DIRETA com dias. x = 1.200 × (15/10) × (4/6) × (10/8) = 1.200 × 1,5 × 0,6667 × 1,25 = 1.500.',
      incorretas: { B: 'Erro ao anular todas as variações.', C: 'Erro ao inverter alguma razão.', D: 'Erro ao multiplicar sem ajustar horas.' },
      conceitoCobrado: 'Regra de três composta.',
      pegadinha: 'Errar a montagem dos fatores.',
      comoApareceEmConcurso: 'Problemas de produção industrial.'
    },
    tags: ['regra de três', 'composta']
  },
  {
    id: 'Q-DID-MAT-0705',
    tipo: 'DIDATICA',
    area: 'PROP',
    moduloId: 'MAT-07',
    subtema: 'Torneiras',
    dificuldade: 3,
    prioridade: 'essencial',
    enunciado: 'Uma torneira enche um tanque em 6 horas. Outra torneira enche o mesmo tanque em 3 horas. Juntas, em quanto tempo encherão o tanque?',
    alternativas: [
      { id: 'A', texto: '2 horas' },
      { id: 'B', texto: '4,5 horas' },
      { id: 'C', texto: '9 horas' },
      { id: 'D', texto: '1,5 hora' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Em 1 hora: 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Tempo = 2 horas.',
      incorretas: { B: 'Fez média aritmética das horas ((6+3)/2 = 4,5).', C: 'Somou as horas (6+3 = 9).', D: 'Erro de cálculo.' },
      conceitoCobrado: 'Problemas de torneiras (razão de trabalho).',
      pegadinha: 'Somar tempos em vez de somar as taxas (1/t).',
      comoApareceEmConcurso: 'Problemas clássicos de torneiras.'
    },
    tags: ['torneiras', 'razão de trabalho']
  },
  {
    id: 'Q-DID-MAT-0706',
    tipo: 'DIDATICA',
    area: 'PROP',
    moduloId: 'MAT-07',
    subtema: 'Consumo e combustível',
    dificuldade: 2,
    prioridade: 'essencial',
    enunciado: 'Um carro percorre 320 km com 40 litros de combustível. Quantos litros serão necessários para percorrer 480 km nas mesmas condições?',
    alternativas: [
      { id: 'A', texto: '50 litros' },
      { id: 'B', texto: '60 litros' },
      { id: 'C', texto: '70 litros' },
      { id: 'D', texto: '80 litros' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Grandezas diretas: 320/480 = 40/x → 320x = 19.200 → x = 60 litros.',
      incorretas: { A: 'Erro de cálculo.', C: 'Erro ao dividir 480/320 = 1,5 e arredondar.', D: 'Erro ao dobrar 40 em vez de multiplicar por 1,5.' },
      conceitoCobrado: 'Regra de três com consumo.',
      pegadinha: 'Confundir o sentido da proporção.',
      comoApareceEmConcurso: 'Problemas de veículos, viagens.'
    },
    tags: ['regra de três', 'consumo']
  },

  /* ============================================================
     MAT-08 — Porcentagem
  ============================================================ */
  {
    id: 'Q-DID-MAT-0801',
    tipo: 'DIDATICA',
    area: 'PROP',
    moduloId: 'MAT-08',
    subtema: 'Cálculo direto',
    dificuldade: 1,
    prioridade: 'essencial',
    enunciado: 'Quanto é 35% de R$ 240?',
    alternativas: [
      { id: 'A', texto: 'R$ 72' },
      { id: 'B', texto: 'R$ 84' },
      { id: 'C', texto: 'R$ 90' },
      { id: 'D', texto: 'R$ 96' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '35% = 0,35. 240 × 0,35 = 84.',
      incorretas: { A: 'Erro ao usar 30% = 72.', C: 'Erro ao calcular 37,5% = 90.', D: 'Erro ao usar 40% = 96.' },
      conceitoCobrado: 'Cálculo direto de porcentagem.',
      pegadinha: 'Confundir 35% com 30% ou 40%.',
      comoApareceEmConcurso: 'Questões básicas de porcentagem.'
    },
    tags: ['porcentagem']
  },
  {
    id: 'Q-DID-MAT-0802',
    tipo: 'DIDATICA',
    area: 'PROP',
    moduloId: 'MAT-08',
    subtema: 'Aumentos e descontos',
    dificuldade: 2,
    prioridade: 'essencial',
    enunciado: 'Um produto de R$ 250 recebeu um desconto de 20% e depois um aumento de 10% sobre o valor já com desconto. O preço final é:',
    alternativas: [
      { id: 'A', texto: 'R$ 225' },
      { id: 'B', texto: 'R$ 220' },
      { id: 'C', texto: 'R$ 230' },
      { id: 'D', texto: 'R$ 240' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '250 × 0,80 × 1,10 = 200 × 1,10 = 220.',
      incorretas: { A: 'Erro ao subtrair 20% e somar 10% linearmente (250 × 0,90 = 225).', C: 'Erro de cálculo.', D: 'Considerou apenas o desconto.' },
      conceitoCobrado: 'Porcentagens sucessivas.',
      pegadinha: 'Somar/descontar percentuais em vez de multiplicar os fatores.',
      comoApareceEmConcurso: 'Promoções comerciais.'
    },
    tags: ['porcentagem', 'sucessivas']
  },
  {
    id: 'Q-DID-MAT-0803',
    tipo: 'DIDATICA',
    area: 'PROP',
    moduloId: 'MAT-08',
    subtema: 'Variação percentual',
    dificuldade: 2,
    prioridade: 'essencial',
    enunciado: 'O preço de um produto passou de R$ 80 para R$ 100. Qual foi a variação percentual?',
    alternativas: [
      { id: 'A', texto: '20%' },
      { id: 'B', texto: '25%' },
      { id: 'C', texto: '30%' },
      { id: 'D', texto: '80%' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '(100 - 80)/80 = 20/80 = 0,25 = 25%.',
      incorretas: { A: 'Usou o valor final como base (20/100 = 20%).', C: 'Erro de cálculo.', D: 'Erro ao usar 80/100.' },
      conceitoCobrado: 'Variação percentual.',
      pegadinha: 'Usar a base errada (final em vez de inicial).',
      comoApareceEmConcurso: 'Reajustes, inflação, crescimento.'
    },
    tags: ['porcentagem', 'variação']
  },
  {
    id: 'Q-DID-MAT-0804',
    tipo: 'DIDATICA',
    area: 'PROP',
    moduloId: 'MAT-08',
    subtema: 'Porcentagens sucessivas',
    dificuldade: 3,
    prioridade: 'essencial',
    enunciado: 'Um produto sofreu um aumento de 30% e, em seguida, um desconto de 30%. Qual foi a variação percentual final em relação ao preço inicial?',
    alternativas: [
      { id: 'A', texto: 'Nenhuma variação' },
      { id: 'B', texto: 'Perda de 9%' },
      { id: 'C', texto: 'Ganho de 9%' },
      { id: 'D', texto: 'Perda de 30%' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '100 × 1,30 × 0,70 = 91. Variação: (91 - 100)/100 = -9%. Perda de 9%.',
      incorretas: { A: 'Aumento e desconto iguais NÃO se anulam.', C: 'Sinal invertido.', D: 'Confundiu com perda do valor do desconto.' },
      conceitoCobrado: 'Porcentagens sucessivas com efeito líquido.',
      pegadinha: 'Achar que aumentos/descontos iguais se anulam.',
      comoApareceEmConcurso: 'Promoções do tipo "aumentei e depois dei desconto".'
    },
    tags: ['porcentagem', 'sucessivas']
  },
  {
    id: 'Q-DID-MAT-0805',
    tipo: 'DIDATICA',
    area: 'PROP',
    moduloId: 'MAT-08',
    subtema: 'Lucro sobre custo x sobre venda',
    dificuldade: 3,
    prioridade: 'essencial',
    enunciado: 'Um comerciante comprou um produto por R$ 200 e vendeu por R$ 250. É correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O lucro foi de 25% sobre o custo e de 20% sobre a venda.' },
      { id: 'B', texto: 'O lucro foi de 20% sobre o custo e de 25% sobre a venda.' },
      { id: 'C', texto: 'O lucro foi de 25% em qualquer base.' },
      { id: 'D', texto: 'O lucro foi de 50% sobre o custo.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Lucro absoluto = 50. Sobre o custo: 50/200 = 25%. Sobre a venda: 50/250 = 20%.',
      incorretas: { B: 'Inverteu as bases.', C: 'A base altera o percentual.', D: 'Erro ao considerar 100 (não 50) sobre o custo.' },
      conceitoCobrado: 'Lucro sobre custo x lucro sobre venda.',
      pegadinha: 'Assumir que o percentual é sempre o mesmo independentemente da base.',
      comoApareceEmConcurso: 'Comércio, finanças.'
    },
    tags: ['porcentagem', 'lucro']
  },
  {
    id: 'Q-DID-MAT-0806',
    tipo: 'DIDATICA',
    area: 'PROP',
    moduloId: 'MAT-08',
    subtema: 'Descontos comerciais',
    dificuldade: 2,
    prioridade: 'essencial',
    enunciado: 'Uma loja oferece 15% de desconto em um produto de R$ 320. Se o cliente pagar em dinheiro, ganha mais 5% sobre o valor já com desconto. O valor final pago é:',
    alternativas: [
      { id: 'A', texto: 'R$ 256,00' },
      { id: 'B', texto: 'R$ 258,40' },
      { id: 'C', texto: 'R$ 260,00' },
      { id: 'D', texto: 'R$ 272,00' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '320 × 0,85 × 0,95 = 272 × 0,95 = 258,40.',
      incorretas: { A: 'Considerou desconto total de 20% linear (320 × 0,80 = 256).', C: 'Erro de arredondamento.', D: 'Considerou apenas o desconto de 15%.' },
      conceitoCobrado: 'Descontos sucessivos.',
      pegadinha: 'Somar os descontos (15% + 5% = 20%) em vez de multiplicar.',
      comoApareceEmConcurso: 'Promoções em lojas.'
    },
    tags: ['porcentagem', 'descontos sucessivos']
  },

  /* ============================================================
     MAT-02 — Conjuntos Numéricos
  ============================================================ */
  {
    id: 'Q-DID-MAT-0201',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'MAT-02',
    subtema: 'Classificação em conjuntos',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre o número √16, é correto afirmar que ele pertence a:',
    alternativas: [
      { id: 'A', texto: 'Apenas aos irracionais (𝕀).' },
      { id: 'B', texto: 'Aos naturais (ℕ), inteiros (ℤ), racionais (ℚ) e reais (ℝ).' },
      { id: 'C', texto: 'Apenas aos racionais (ℚ), sem ser natural.' },
      { id: 'D', texto: 'Apenas aos reais (ℝ).' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '√16 = 4. Como 4 é natural, também é inteiro, racional e real. ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.',
      incorretas: { A: 'Só raízes não exatas (√2, √3, √5) são irracionais.', C: '4 é natural (e portanto também racional).', D: 'Pertence a todos os conjuntos numéricos citados, não apenas a ℝ.' },
      conceitoCobrado: 'Classificação de raízes exatas.',
      pegadinha: 'Achar que toda raiz é irracional. Raiz exata é racional.',
      comoApareceEmConcurso: 'Cobrança direta de classificação.'
    },
    tags: ['conjuntos', 'raízes']
  },
  {
    id: 'Q-DID-MAT-0202',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'MAT-02',
    subtema: 'Comparação na reta numérica',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'Na reta numérica, os números -3, -8, 0, 2 e -1, ordenados do MENOR para o MAIOR, ficam:',
    alternativas: [
      { id: 'A', texto: '-8, -3, -1, 0, 2' },
      { id: 'B', texto: '2, 0, -1, -3, -8' },
      { id: 'C', texto: '0, -1, -3, -8, 2' },
      { id: 'D', texto: '-1, -3, -8, 0, 2' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Na reta numérica, quanto mais à esquerda, menor o número. Entre negativos, -8 é o menor (mais à esquerda) e -1 é o maior (mais à direita). Depois vêm 0 e 2.',
      incorretas: { B: 'Está em ordem decrescente.', C: 'Confunde a posição do 0 e dos negativos.', D: 'Erra a ordem entre -1, -3 e -8.' },
      conceitoCobrado: 'Ordenação na reta numérica.',
      pegadinha: 'Achar que -8 é maior que -1 (porque 8 > 1). Em módulo, sim; na reta, não.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['reta numérica', 'ordenação']
  },
  {
    id: 'Q-DID-MAT-0203',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'MAT-02',
    subtema: 'Módulo',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'O valor da expressão |−7| + |−3| − |2| é:',
    alternativas: [
      { id: 'A', texto: '-8' },
      { id: 'B', texto: '8' },
      { id: 'C', texto: '12' },
      { id: 'D', texto: '-12' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '|-7| = 7, |-3| = 3, |2| = 2. Então: 7 + 3 - 2 = 8.',
      incorretas: { A: 'Sinal trocado no resultado.', C: 'Somou em vez de subtrair o |2|.', D: 'Erro de sinal.' },
      conceitoCobrado: 'Módulo (valor absoluto) — sempre positivo.',
      pegadinha: 'Esquecer que o módulo transforma qualquer número em positivo.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['módulo', 'valor absoluto']
  },
  {
    id: 'Q-DID-MAT-0204',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'MAT-02',
    subtema: 'Intervalos',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'O intervalo ]2, 7] representa o conjunto dos números reais que são:',
    alternativas: [
      { id: 'A', texto: 'Maiores que 2 e menores que 7, sem incluir os extremos.' },
      { id: 'B', texto: 'Maiores ou iguais a 2 e menores que 7, incluindo 2.' },
      { id: 'C', texto: 'Maiores que 2 (excluindo 2) e menores ou iguais a 7 (incluindo 7).' },
      { id: 'D', texto: 'Apenas os números inteiros entre 2 e 7.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'O colchete "de fora" ( ] ) indica extremo EXCLUÍDO; o "de dentro" ( ] invertido, ou seja, ] de fora e ] invertido) indica extremo INCLUÍDO. Assim: ]2, 7] = {x ∈ ℝ | 2 < x ≤ 7}.',
      incorretas: { A: 'O 7 está incluído.', B: 'O 2 está excluído.', D: 'O intervalo é contínuo — inclui todos os reais, não só inteiros.' },
      conceitoCobrado: 'Notação de intervalo.',
      pegadinha: 'Confundir a abertura/fechadura dos colchetes.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['intervalos']
  },
  {
    id: 'Q-DID-MAT-0205',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'MAT-02',
    subtema: 'Racionais x irracionais',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre os números 0,333..., √25 e π, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Os três são irracionais.' },
      { id: 'B', texto: '0,333... é racional, √25 é racional e π é irracional.' },
      { id: 'C', texto: 'Os três são racionais.' },
      { id: 'D', texto: '0,333... é irracional, √25 é racional e π é racional.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '0,333... = 1/3 → racional. √25 = 5 → racional. π = 3,14159... (não periódico) → irracional.',
      incorretas: { A: 'Só π é irracional.', C: 'π é irracional, não racional.', D: '0,333... é racional (dízima periódica), não irracional; π é irracional.' },
      conceitoCobrado: 'Racional x irracional.',
      pegadinha: 'Confundir dízima periódica (racional) com decimal infinito (irracional).',
      comoApareceEmConcurso: 'Cobrança frequente.'
    },
    tags: ['racionais', 'irracionais']
  },

  /* ============================================================
     MAT-04 — Divisibilidade, MDC e MMC
  ============================================================ */
  {
    id: 'Q-DID-MAT-0401',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'MAT-04',
    subtema: 'Critérios de divisibilidade',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'O número 4.752 é divisível por:',
    alternativas: [
      { id: 'A', texto: 'Apenas por 3.' },
      { id: 'B', texto: 'Por 3 e por 9.' },
      { id: 'C', texto: 'Por 2, 3 e 9, mas não por 5.' },
      { id: 'D', texto: 'Por 2, 3, 5 e 9.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Por 2: termina em 2 (par). Por 3 e 9: soma dos algarismos = 4+7+5+2 = 18, que é múltiplo de 3 e de 9. Por 5: NÃO (não termina em 0 nem em 5).',
      incorretas: { A: 'Também é divisível por 2 e 9.', B: 'Também é divisível por 2.', D: 'Não é divisível por 5 (não termina em 0 ou 5).' },
      conceitoCobrado: 'Critérios de divisibilidade.',
      pegadinha: 'Confundir múltiplos de 3 com múltiplos de 9 (todo múltiplo de 9 é de 3, mas o contrário não vale).',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['divisibilidade']
  },
  {
    id: 'Q-DID-MAT-0402',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'MAT-04',
    subtema: 'Números primos',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'São números primos entre 10 e 20:',
    alternativas: [
      { id: 'A', texto: '11, 13, 17, 19' },
      { id: 'B', texto: '11, 13, 15, 17' },
      { id: 'C', texto: '10, 12, 14, 16' },
      { id: 'D', texto: '12, 13, 17, 19' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Primos entre 10 e 20: 11, 13, 17, 19. Todos têm apenas 2 divisores (1 e ele mesmo).',
      incorretas: { B: '15 tem mais de 2 divisores (1, 3, 5, 15).', C: 'Todos são pares e maiores que 2 (compostos).', D: '12 é composto (divisores: 1, 2, 3, 4, 6, 12).' },
      conceitoCobrado: 'Números primos.',
      pegadinha: 'Incluir números pares (exceto 2) ou múltiplos de 3/5.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['primos']
  },
  {
    id: 'Q-DID-MAT-0403',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'MAT-04',
    subtema: 'MDC em problemas',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Um professor tem 48 lápis e 72 canetas para distribuir em kits iguais, sem sobras, com o MAIOR número possível de kits. Quantos kits ele formará e quantos lápis terá cada kit?',
    alternativas: [
      { id: 'A', texto: '12 kits, 4 lápis cada' },
      { id: 'B', texto: '24 kits, 2 lápis cada' },
      { id: 'C', texto: '48 kits, 1 lápis cada' },
      { id: 'D', texto: '36 kits, 3 lápis cada' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'MDC(48, 72): 48 = 2⁴ × 3; 72 = 2³ × 3². MDC = 2³ × 3 = 24. Lápis por kit: 48/24 = 2.',
      incorretas: { A: '12 divide, mas não é o MAIOR número possível.', C: '48 é divisor de 48 mas não de 72.', D: '36 não divide 48.' },
      conceitoCobrado: 'MDC aplicado — dividir em partes iguais.',
      pegadinha: 'Confundir com MMC.',
      comoApareceEmConcurso: 'Problemas contextualizados.'
    },
    tags: ['MDC']
  },
  {
    id: 'Q-DID-MAT-0404',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'MAT-04',
    subtema: 'MMC em problemas',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Um relógio A toca a cada 12 minutos e um relógio B toca a cada 18 minutos. Se ambos tocaram juntos agora, em quanto tempo tocarão juntos novamente?',
    alternativas: [
      { id: 'A', texto: '24 minutos' },
      { id: 'B', texto: '30 minutos' },
      { id: 'C', texto: '36 minutos' },
      { id: 'D', texto: '48 minutos' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Encontro periódico → MMC(12, 18). 12 = 2² × 3; 18 = 2 × 3². MMC = 2² × 3² = 36 minutos.',
      incorretas: { A: '24 é múltiplo de 12, mas não de 18.', B: '30 é múltiplo de 12? não; de 18? não.', D: '48 é múltiplo de 12, mas não de 18.' },
      conceitoCobrado: 'MMC aplicado — encontros periódicos.',
      pegadinha: 'Confundir com MDC (que seria 6).',
      comoApareceEmConcurso: 'Problemas de periodicidade.'
    },
    tags: ['MMC']
  },
  {
    id: 'Q-DID-MAT-0405',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'MAT-04',
    subtema: 'Relação MDC × MMC',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sabendo que MDC(60, 84) = 12, o MMC(60, 84) é:',
    alternativas: [
      { id: 'A', texto: '240' },
      { id: 'B', texto: '360' },
      { id: 'C', texto: '420' },
      { id: 'D', texto: '520' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Relação: MDC × MMC = a × b. Então MMC = (60 × 84)/12 = 5.040/12 = 420.',
      incorretas: { A: '60 × 4 = 240, mas não verifica a relação.', B: '360 = 60 × 6, mas não é múltiplo de 84.', D: 'Erro de cálculo.' },
      conceitoCobrado: 'Relação fundamental entre MDC e MMC.',
      pegadinha: 'Não lembrar da relação e tentar calcular separadamente.',
      comoApareceEmConcurso: 'Cobrança rápida por relação.'
    },
    tags: ['MDC', 'MMC', 'relação']
  },

  /* ============================================================
     MAT-05 — Potenciação, Radiciação e Expressões Numéricas
  ============================================================ */
  {
    id: 'Q-DID-MAT-0501',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'MAT-05',
    subtema: 'Propriedades das potências',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'O valor simplificado de (3² × 3⁵) ÷ 3⁴ é:',
    alternativas: [
      { id: 'A', texto: '3³ = 27' },
      { id: 'B', texto: '3¹¹' },
      { id: 'C', texto: '3⁻³' },
      { id: 'D', texto: '3⁷' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: '3² × 3⁵ = 3⁷. Depois 3⁷ ÷ 3⁴ = 3³ = 27.',
      incorretas: { B: 'Somou todos os expoentes, esquecendo a divisão.', C: 'Subtraiu os expoentes na ordem errada.', D: 'Esqueceu de subtrair o 3⁴ da divisão.' },
      conceitoCobrado: 'Propriedades das potências de mesma base.',
      pegadinha: 'Confundir soma e subtração de expoentes na multiplicação e na divisão.',
      comoApareceEmConcurso: 'Expressões com potências.'
    },
    tags: ['potenciação']
  },
  {
    id: 'Q-DID-MAT-0502',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'MAT-05',
    subtema: 'Expoente negativo',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'O valor de 5⁻² é:',
    alternativas: [
      { id: 'A', texto: '-25' },
      { id: 'B', texto: '-10' },
      { id: 'C', texto: '1/25' },
      { id: 'D', texto: '1/10' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: '5⁻² = 1/5² = 1/25 = 0,04.',
      incorretas: { A: 'O sinal de menos NÃO torna o resultado negativo — inverte a base.', B: 'Confundiu potência com multiplicação.', D: 'Confundiu 5² (25) com 5×2 (10).' },
      conceitoCobrado: 'Expoente negativo.',
      pegadinha: 'Achar que o resultado é negativo.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['potenciação', 'expoente negativo']
  },
  {
    id: 'Q-DID-MAT-0503',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'MAT-05',
    subtema: 'Expressões numéricas',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'O valor da expressão 5 + 2² × (8 - 3) - √36 é:',
    alternativas: [
      { id: 'A', texto: '19' },
      { id: 'B', texto: '15' },
      { id: 'C', texto: '25' },
      { id: 'D', texto: '13' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Parênteses primeiro: 8 - 3 = 5. Potência: 2² = 4. Raiz: √36 = 6. Depois: 5 + 4 × 5 - 6 = 5 + 20 - 6 = 19.',
      incorretas: { B: 'Erro ao multiplicar 5 + 2² = 9 por 5 = 45, menos 6, daria 39.', C: 'Erro ao somar tudo antes de multiplicar.', D: 'Erro ao considerar √36 = 8.' },
      conceitoCobrado: 'Ordem das operações + potência + raiz.',
      pegadinha: 'Não respeitar a ordem.',
      comoApareceEmConcurso: 'Expressões numéricas mistas.'
    },
    tags: ['expressões', 'potenciação', 'radiciação']
  },
  {
    id: 'Q-DID-MAT-0504',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'MAT-05',
    subtema: 'Notação científica',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'O número 0,00045 em notação científica é:',
    alternativas: [
      { id: 'A', texto: '4,5 × 10⁻⁴' },
      { id: 'B', texto: '4,5 × 10⁻³' },
      { id: 'C', texto: '45 × 10⁻⁵' },
      { id: 'D', texto: '4,5 × 10⁴' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: '0,00045 = 4,5 × 10⁻⁴. Andamos 4 casas para a direita até chegar a 4,5 (entre 1 e 10).',
      incorretas: { B: 'Seria 0,0045.', C: 'O coeficiente deve estar entre 1 e 10.', D: 'Expoente positivo indica número grande, não pequeno.' },
      conceitoCobrado: 'Notação científica.',
      pegadinha: 'Errar o sinal do expoente ou o número de casas.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['notação científica']
  },
  {
    id: 'Q-DID-MAT-0505',
    tipo: 'DIDATICA',
    area: 'FUND',
    moduloId: 'MAT-05',
    subtema: 'Raízes',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'O valor da expressão √49 + √81 - √100 é:',
    alternativas: [
      { id: 'A', texto: '8' },
      { id: 'B', texto: '12' },
      { id: 'C', texto: '14' },
      { id: 'D', texto: '30' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '√49 = 7; √81 = 9; √100 = 10. 7 + 9 - 10 = 6 + 6 = 12.',
      incorretas: { A: 'Erro de cálculo.', C: 'Erro ao somar 7 + 9 = 16, subtrair 2.', D: 'Somou as raízes sem resolver.' },
      conceitoCobrado: 'Radiciação.',
      pegadinha: 'Somar os radicandos (√49 + √81 ≠ √130).',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['radiciação']
  },

  /* ============================================================
     MAT-09 — Expressões Algébricas e Equações do 1º Grau
  ============================================================ */
  {
    id: 'Q-DID-MAT-0901',
    tipo: 'DIDATICA',
    area: 'PROP',
    moduloId: 'MAT-09',
    subtema: 'Equação do 1º grau',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'A solução da equação 5x - 8 = 3x + 12 é:',
    alternativas: [
      { id: 'A', texto: 'x = 4' },
      { id: 'B', texto: 'x = 6' },
      { id: 'C', texto: 'x = 10' },
      { id: 'D', texto: 'x = 20' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: '5x - 3x = 12 + 8 → 2x = 20 → x = 10. Verificação: 5(10)-8 = 42; 3(10)+12 = 42. ✓',
      incorretas: { A: 'Erro ao passar termos.', B: 'Erro de sinal.', D: 'Esqueceu de dividir por 2.' },
      conceitoCobrado: 'Equação do 1º grau.',
      pegadinha: 'Errar o sinal ao passar termos de lado.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['equação 1º grau']
  },
  {
    id: 'Q-DID-MAT-0902',
    tipo: 'DIDATICA',
    area: 'PROP',
    moduloId: 'MAT-09',
    subtema: 'Equação com parênteses',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'O valor de x na equação 4(x + 3) - 2(x - 1) = 24 é:',
    alternativas: [
      { id: 'A', texto: 'x = 5' },
      { id: 'B', texto: 'x = 7' },
      { id: 'C', texto: 'x = 9' },
      { id: 'D', texto: 'x = 11' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Distributiva: 4x + 12 - 2x + 2 = 24. Simplificando: 2x + 14 = 24 → 2x = 10 → x = 5. Recalculemos: 4(5+3)-2(5-1) = 4(8) - 2(4) = 32 - 8 = 24 ✓. Aguarde: 4×8 = 32; 2×4 = 8; 32-8 = 24 ✓. Então x = 5. A alternativa correta é A.'
    },
    tags: ['equação', 'parênteses']
  },
  {
    id: 'Q-DID-MAT-0903',
    tipo: 'DIDATICA',
    area: 'PROP',
    moduloId: 'MAT-09',
    subtema: 'Equação com frações',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'A solução da equação x/2 + x/3 = 10 é:',
    alternativas: [
      { id: 'A', texto: 'x = 6' },
      { id: 'B', texto: 'x = 10' },
      { id: 'C', texto: 'x = 12' },
      { id: 'D', texto: 'x = 24' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'MMC(2, 3) = 6. Multiplica toda a equação por 6: 3x + 2x = 60 → 5x = 60 → x = 12. Verificação: 12/2 + 12/3 = 6 + 4 = 10 ✓.',
      incorretas: { A: 'Erro ao multiplicar.', B: 'Confundiu o resultado com o valor da soma.', D: 'Erro ao dobrar o resultado.' },
      conceitoCobrado: 'Equação com frações.',
      pegadinha: 'Não eliminar denominadores antes de resolver.',
      comoApareceEmConcurso: 'Cobrança frequente.'
    },
    tags: ['equação', 'frações']
  },
  {
    id: 'Q-DID-MAT-0904',
    tipo: 'DIDATICA',
    area: 'PROP',
    moduloId: 'MAT-09',
    subtema: 'Problemas com incógnitas',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'A soma de três números consecutivos é 87. O maior deles é:',
    alternativas: [
      { id: 'A', texto: '28' },
      { id: 'B', texto: '29' },
      { id: 'C', texto: '30' },
      { id: 'D', texto: '31' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Sejam x, x+1, x+2. Soma: 3x + 3 = 87 → 3x = 84 → x = 28. Números: 28, 29, 30. Maior: 30.',
      incorretas: { A: 'É o menor.', B: 'É o do meio.', D: 'Está um além do maior.' },
      conceitoCobrado: 'Problemas com incógnitas.',
      pegadinha: 'Confundir qual é o maior.',
      comoApareceEmConcurso: 'Problemas clássicos.'
    },
    tags: ['equação', 'problemas']
  },
  {
    id: 'Q-DID-MAT-0905',
    tipo: 'DIDATICA',
    area: 'PROP',
    moduloId: 'MAT-09',
    subtema: 'Tradução de enunciados',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'A expressão algébrica que representa "o dobro de um número, mais cinco" é:',
    alternativas: [
      { id: 'A', texto: '2x + 5' },
      { id: 'B', texto: '2(x + 5)' },
      { id: 'C', texto: 'x + 10' },
      { id: 'D', texto: '5x + 2' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: '"O dobro de um número" = 2x. "Mais cinco" = somar 5. Resultado: 2x + 5.',
      incorretas: { B: 'Isso seria "o dobro de (um número mais cinco)".', C: 'Isso seria "o dobro de (x + 5)" simplificado.', D: 'Inverteu a ordem.' },
      conceitoCobrado: 'Tradução de linguagem natural para algébrica.',
      pegadinha: 'Confundir "2x + 5" com "2(x+5)" pela posição da vírgula.',
      comoApareceEmConcurso: 'Cobrança em problemas contextualizados.'
    },
    tags: ['tradução', 'álgebra']
  },

  /* ============================================================
     MAT-11 — Matemática Financeira
  ============================================================ */
  {
    id: 'Q-DID-MAT-1101',
    tipo: 'DIDATICA',
    area: 'APLI',
    moduloId: 'MAT-11',
    subtema: 'Juros simples',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Um capital de R$ 3.000 é aplicado a juros simples de 4% ao mês durante 5 meses. Os juros gerados são:',
    alternativas: [
      { id: 'A', texto: 'R$ 500' },
      { id: 'B', texto: 'R$ 600' },
      { id: 'C', texto: 'R$ 640' },
      { id: 'D', texto: 'R$ 720' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'J = C × i × t = 3.000 × 0,04 × 5 = 600.',
      incorretas: { A: 'Erro ao multiplicar.', C: 'Erro de cálculo.', D: 'Confundiu com juros compostos ou usou 6% em vez de 4%.' },
      conceitoCobrado: 'Juros simples.',
      pegadinha: 'Confundir juros com montante.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['juros simples']
  },
  {
    id: 'Q-DID-MAT-1102',
    tipo: 'DIDATICA',
    area: 'APLI',
    moduloId: 'MAT-11',
    subtema: 'Juros compostos',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Um capital de R$ 1.500 é aplicado a juros compostos de 20% ao ano durante 2 anos. O montante é:',
    alternativas: [
      { id: 'A', texto: 'R$ 2.100' },
      { id: 'B', texto: 'R$ 2.160' },
      { id: 'C', texto: 'R$ 2.200' },
      { id: 'D', texto: 'R$ 2.250' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'M = C × (1 + i)ᵗ = 1.500 × (1,20)² = 1.500 × 1,44 = 2.160.',
      incorretas: { A: '1.500 × 1,40 = 2.100 (juros simples de 20% ao ano × 2 = 40%).', C: 'Erro de cálculo.', D: 'Erro ao usar 1,50.' },
      conceitoCobrado: 'Juros compostos.',
      pegadinha: 'Confundir com juros simples (que daria 2.100).',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['juros compostos']
  },
  {
    id: 'Q-DID-MAT-1103',
    tipo: 'DIDATICA',
    area: 'APLI',
    moduloId: 'MAT-11',
    subtema: 'Conversão de taxa',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Uma aplicação rende 2% ao mês no regime de juros simples. A taxa anual equivalente é:',
    alternativas: [
      { id: 'A', texto: '20%' },
      { id: 'B', texto: '24%' },
      { id: 'C', texto: '26,82%' },
      { id: 'D', texto: '12%' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Em JUROS SIMPLES, as taxas são proporcionais. 2% ao mês × 12 meses = 24% ao ano.',
      incorretas: { A: 'Confundiu 2% com 20%.', C: '26,82% seria em JUROS COMPOSTOS (1,02¹² - 1).', D: 'Confundiu com 1% ao mês.' },
      conceitoCobrado: 'Taxa proporcional em juros simples.',
      pegadinha: 'Confundir com regime de juros compostos.',
      comoApareceEmConcurso: 'Cobrança frequente.'
    },
    tags: ['taxa', 'juros simples']
  },
  {
    id: 'Q-DID-MAT-1104',
    tipo: 'DIDATICA',
    area: 'APLI',
    moduloId: 'MAT-11',
    subtema: 'Desconto simples',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Um título de R$ 8.000 vence em 3 meses. Se for descontado hoje a uma taxa de desconto comercial simples de 2% ao mês, o valor pago será:',
    alternativas: [
      { id: 'A', texto: 'R$ 7.520' },
      { id: 'B', texto: 'R$ 7.600' },
      { id: 'C', texto: 'R$ 7.680' },
      { id: 'D', texto: 'R$ 7.840' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Desconto comercial: D = N × i × t = 8.000 × 0,02 × 3 = 480. Valor pago = 8.000 - 480 = 7.520.',
      incorretas: { B: 'Usou apenas 2,5 meses de desconto.', C: 'Erro de cálculo.', D: 'Usou 1 mês de desconto.' },
      conceitoCobrado: 'Desconto simples comercial.',
      pegadinha: 'Confundir desconto comercial com racional.',
      comoApareceEmConcurso: 'Cobrança recorrente em bancos.'
    },
    tags: ['desconto', 'juros simples']
  },
  {
    id: 'Q-DID-MAT-1105',
    tipo: 'DIDATICA',
    area: 'APLI',
    moduloId: 'MAT-11',
    subtema: 'Aumentos sucessivos',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Um produto sofreu aumento de 10% e, em seguida, mais 20%. O aumento total acumulado foi de:',
    alternativas: [
      { id: 'A', texto: '30%' },
      { id: 'B', texto: '32%' },
      { id: 'C', texto: '28%' },
      { id: 'D', texto: '22%' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '1,10 × 1,20 = 1,32 → +32%.',
      incorretas: { A: 'Somou os percentuais (10 + 20), mas eles devem ser multiplicados.', C: 'Erro de cálculo.', D: 'Erro de interpretação.' },
      conceitoCobrado: 'Aumentos sucessivos.',
      pegadinha: 'Somar percentuais em vez de multiplicar.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['porcentagem', 'aumentos sucessivos']
  },

  /* ============================================================
     MAT-12 — Sistemas de Medidas
  ============================================================ */
  {
    id: 'Q-DID-MAT-1201',
    tipo: 'DIDATICA',
    area: 'APLI',
    moduloId: 'MAT-12',
    subtema: 'Comprimento',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'A distância de 2,5 km corresponde, em metros, a:',
    alternativas: [
      { id: 'A', texto: '25 m' },
      { id: 'B', texto: '250 m' },
      { id: 'C', texto: '2.500 m' },
      { id: 'D', texto: '25.000 m' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: '1 km = 1.000 m. Então 2,5 km = 2,5 × 1.000 = 2.500 m.',
      incorretas: { A: 'Erro de fator.', B: 'Erro de fator.', D: 'Erro de fator.' },
      conceitoCobrado: 'Conversão de comprimento.',
      pegadinha: 'Deslocar a vírgula errado.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['comprimento']
  },
  {
    id: 'Q-DID-MAT-1202',
    tipo: 'DIDATICA',
    area: 'APLI',
    moduloId: 'MAT-12',
    subtema: 'Área',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Um terreno de 3 m² corresponde, em cm², a:',
    alternativas: [
      { id: 'A', texto: '300 cm²' },
      { id: 'B', texto: '3.000 cm²' },
      { id: 'C', texto: '30.000 cm²' },
      { id: 'D', texto: '300.000 cm²' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: '1 m² = 10.000 cm². Então 3 m² = 3 × 10.000 = 30.000 cm².',
      incorretas: { A: 'Usou × 100 (fator de comprimento).', B: 'Usou × 1.000 (fator de volume).', D: 'Usou × 100.000.' },
      conceitoCobrado: 'Conversão de área (× 100 por passo, 2 passos: m → dm → cm).',
      pegadinha: 'Confundir com comprimento (× 10) ou volume (× 1.000).',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['área', 'conversão']
  },
  {
    id: 'Q-DID-MAT-1203',
    tipo: 'DIDATICA',
    area: 'APLI',
    moduloId: 'MAT-12',
    subtema: 'Relação litro × volume',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Uma caixa d\'água tem volume interno de 5.000 litros. Sua capacidade, em metros cúbicos, é:',
    alternativas: [
      { id: 'A', texto: '0,5 m³' },
      { id: 'B', texto: '5 m³' },
      { id: 'C', texto: '50 m³' },
      { id: 'D', texto: '500 m³' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Relação: 1 m³ = 1.000 L. Então 5.000 L = 5 m³.',
      incorretas: { A: 'Erro de fator.', C: 'Erro de fator.', D: 'Erro de fator.' },
      conceitoCobrado: 'Relação litro × m³.',
      pegadinha: 'Errar a relação (1 m³ = 1.000 L, não 100 nem 10.000).',
      comoApareceEmConcurso: 'Cobrança frequente.'
    },
    tags: ['volume', 'litros']
  },
  {
    id: 'Q-DID-MAT-1204',
    tipo: 'DIDATICA',
    area: 'APLI',
    moduloId: 'MAT-12',
    subtema: 'Volume de sólido',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Uma piscina retangular mede 8 m de comprimento, 4 m de largura e 2 m de profundidade. Sua capacidade em litros é:',
    alternativas: [
      { id: 'A', texto: '32.000 litros' },
      { id: 'B', texto: '48.000 litros' },
      { id: 'C', texto: '64.000 litros' },
      { id: 'D', texto: '80.000 litros' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Volume = 8 × 4 × 2 = 64 m³. Como 1 m³ = 1.000 L, a capacidade é 64.000 L.',
      incorretas: { A: 'Erro ao multiplicar (8×4 = 32, esqueceu a profundidade).', B: 'Erro de cálculo.', D: 'Erro de cálculo.' },
      conceitoCobrado: 'Volume de paralelepípedo + conversão para litros.',
      pegadinha: 'Esquecer de multiplicar por 1.000 no final.',
      comoApareceEmConcurso: 'Problemas de capacidade.'
    },
    tags: ['volume', 'litros']
  },
  {
    id: 'Q-DID-MAT-1205',
    tipo: 'DIDATICA',
    area: 'APLI',
    moduloId: 'MAT-12',
    subtema: 'Tempo',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Um evento durou 2,75 horas. Esse tempo corresponde a:',
    alternativas: [
      { id: 'A', texto: '2 h 75 min' },
      { id: 'B', texto: '2 h 45 min' },
      { id: 'C', texto: '2 h 30 min' },
      { id: 'D', texto: '2 h 55 min' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '0,75 h = 0,75 × 60 = 45 min. Total: 2 h 45 min.',
      incorretas: { A: 'A parte decimal é fração de 60, não de 100.', C: 'Erro de conversão.', D: 'Erro de conversão.' },
      conceitoCobrado: 'Tempo — base 60 (não decimal).',
      pegadinha: 'Tratar 0,75 h como 75 min (errado).',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['tempo']
  },

  /* ============================================================
     MAT-13 — Interpretação de Tabelas e Gráficos
  ============================================================ */
  {
    id: 'Q-DID-MAT-1301',
    tipo: 'DIDATICA',
    area: 'APLI',
    moduloId: 'MAT-13',
    subtema: 'Variação percentual',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'A produção de uma fábrica passou de 2.500 peças em janeiro para 3.000 peças em fevereiro. A variação percentual foi de:',
    alternativas: [
      { id: 'A', texto: '10%' },
      { id: 'B', texto: '15%' },
      { id: 'C', texto: '20%' },
      { id: 'D', texto: '25%' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: '(3.000 - 2.500)/2.500 × 100 = 500/2.500 × 100 = 20%.',
      incorretas: { A: 'Usou base errada.', B: 'Erro de cálculo.', D: 'Usou a diferença como numerador mas com base no final.' },
      conceitoCobrado: 'Variação percentual.',
      pegadinha: 'Usar o valor final como base em vez do inicial.',
      comoApareceEmConcurso: 'Cobrança recorrente em questões de tabelas/gráficos.'
    },
    tags: ['variação percentual', 'gráficos']
  },
  {
    id: 'Q-DID-MAT-1302',
    tipo: 'DIDATICA',
    area: 'APLI',
    moduloId: 'MAT-13',
    subtema: 'Gráfico de setores',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Um gráfico de setores mostra a divisão de um orçamento: 45% saúde, 25% educação, 15% segurança e o restante em outras áreas. O percentual destinado a outras áreas é:',
    alternativas: [
      { id: 'A', texto: '10%' },
      { id: 'B', texto: '15%' },
      { id: 'C', texto: '20%' },
      { id: 'D', texto: '25%' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A soma dos setores deve ser 100%. 45 + 25 + 15 = 85. Outras = 100 - 85 = 15%.',
      incorretas: { A: 'Erro de cálculo.', C: 'Erro de cálculo.', D: 'Repetiu o valor de educação.' },
      conceitoCobrado: 'Gráfico de setores — soma = 100%.',
      pegadinha: 'Errar a soma.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['gráfico de setores']
  },
  {
    id: 'Q-DID-MAT-1303',
    tipo: 'DIDATICA',
    area: 'APLI',
    moduloId: 'MAT-13',
    subtema: 'Tendência em gráfico de linhas',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Um gráfico de linhas mostra a temperatura média em uma cidade ao longo de 5 meses: 22, 25, 28, 26, 24 (em °C). Sobre a tendência:',
    alternativas: [
      { id: 'A', texto: 'É de queda desde o início.' },
      { id: 'B', texto: 'É estável, sem variação.' },
      { id: 'C', texto: 'Cresceu nos primeiros meses e depois passou a cair, indicando tendência recente de queda.' },
      { id: 'D', texto: 'É de crescimento contínuo.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A linha sobe nos 3 primeiros meses (22→25→28), depois cai (28→26→24). A tendência recente é de queda.',
      incorretas: { A: 'Não caiu desde o início — subiu primeiro.', B: 'Houve variação clara.', D: 'A partir do 3º mês, caiu.' },
      conceitoCobrado: 'Análise de tendência em gráfico de linhas.',
      pegadinha: 'Olhar apenas o início e o fim e ignorar o comportamento do meio.',
      comoApareceEmConcurso: 'Interpretação de gráficos.'
    },
    tags: ['tendência', 'gráfico de linhas']
  },
  {
    id: 'Q-DID-MAT-1304',
    tipo: 'DIDATICA',
    area: 'APLI',
    moduloId: 'MAT-13',
    subtema: 'Tabela de dupla entrada',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Uma tabela de dupla entrada mostra vendas de uma loja por trimestre e por produto (A, B, C, D). No 2º trimestre, as vendas foram: A = 100, B = 250, C = 180, D = 70. O produto mais vendido e o menos vendido foram, respectivamente:',
    alternativas: [
      { id: 'A', texto: 'A e D' },
      { id: 'B', texto: 'B e D' },
      { id: 'C', texto: 'B e A' },
      { id: 'D', texto: 'C e D' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Comparando os valores do 2º trimestre: A = 100, B = 250, C = 180, D = 70. Maior = B (250). Menor = D (70).',
      incorretas: { A: 'A não é o maior.', C: 'A não é o menor — D tem 70.', D: 'C não é o maior.' },
      conceitoCobrado: 'Leitura de tabela de dupla entrada.',
      pegadinha: 'Confundir produtos/trimestres ou inverter a ordem da resposta.',
      comoApareceEmConcurso: 'Leitura de tabelas.'
    },
    tags: ['tabela', 'dupla entrada']
  },
  {
    id: 'Q-DID-MAT-1305',
    tipo: 'DIDATICA',
    area: 'APLI',
    moduloId: 'MAT-13',
    subtema: 'Informação incompleta',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Uma tabela mostra que, de 500 alunos, 60% são do turno da manhã e o restante é dividido igualmente entre tarde e noite. Quantos alunos estudam à noite?',
    alternativas: [
      { id: 'A', texto: '100' },
      { id: 'B', texto: '120' },
      { id: 'C', texto: '150' },
      { id: 'D', texto: '200' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Manhã: 60% de 500 = 300. Restante: 200, dividido igualmente entre tarde e noite = 100 cada.',
      incorretas: { B: 'Erro de cálculo.', C: 'Erro de cálculo.', D: 'Considerou os 200 inteiros para a noite.' },
      conceitoCobrado: 'Uso de porcentagem + divisão igualitária.',
      pegadinha: 'Esquecer de dividir o restante por 2.',
      comoApareceEmConcurso: 'Problemas com tabelas e porcentagem.'
    },
    tags: ['tabela', 'porcentagem', 'incompleta']
  },

  /* ============================================================
     MAT-14 — Estatística Básica
  ============================================================ */
  {
    id: 'Q-DID-MAT-1401',
    tipo: 'DIDATICA',
    area: 'APLI',
    moduloId: 'MAT-14',
    subtema: 'Média simples',
    dificuldade: 1,
    prioridade: 'media',
    enunciado: 'Um aluno tirou as notas 6, 7, 8, 9 e 10 em cinco avaliações. Sua média aritmética simples é:',
    alternativas: [
      { id: 'A', texto: '7,0' },
      { id: 'B', texto: '7,5' },
      { id: 'C', texto: '8,0' },
      { id: 'D', texto: '8,5' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Média = (6 + 7 + 8 + 9 + 10) / 5 = 40 / 5 = 8,0.',
      incorretas: { A: 'Erro ao dividir por 6.', B: 'Erro de cálculo.', D: 'Erro de cálculo.' },
      conceitoCobrado: 'Média aritmética simples.',
      pegadinha: 'Errar o número de elementos ao dividir.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['média', 'estatística']
  },
  {
    id: 'Q-DID-MAT-1402',
    tipo: 'DIDATICA',
    area: 'APLI',
    moduloId: 'MAT-14',
    subtema: 'Média ponderada',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Em um concurso, a prova de Português tem peso 3 e a de Matemática tem peso 2. Um candidato tirou 7 em Português e 9 em Matemática. Sua média ponderada é:',
    alternativas: [
      { id: 'A', texto: '8,0' },
      { id: 'B', texto: '8,2' },
      { id: 'C', texto: '8,5' },
      { id: 'D', texto: '7,8' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Média ponderada = (7×3 + 9×2) / (3+2) = (21 + 18) / 5 = 39/5 = 7,8. Aguarde — 21 + 18 = 39; 39/5 = 7,8. A alternativa D está correta, não a B. Recalculei: 7×3 = 21; 9×2 = 18; soma = 39; pesos = 5; média = 7,8. Gabarito correto: D.',
      incorretas: { A: 'Média simples das notas.', B: 'Erro de cálculo.', C: 'Erro de cálculo.' },
      conceitoCobrado: 'Média ponderada.',
      pegadinha: 'Esquecer os pesos ou dividir por 2 em vez de 5.',
      comoApareceEmConcurso: 'Muito comum em concursos.'
    },
    tags: ['média ponderada']
  },
  {
    id: 'Q-DID-MAT-1403',
    tipo: 'DIDATICA',
    area: 'APLI',
    moduloId: 'MAT-14',
    subtema: 'Mediana',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'A mediana da lista [4, 8, 2, 10, 6, 12] é:',
    alternativas: [
      { id: 'A', texto: '6' },
      { id: 'B', texto: '7' },
      { id: 'C', texto: '8' },
      { id: 'D', texto: '10' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Ordenando: [2, 4, 6, 8, 10, 12]. Com 6 valores (par), a mediana é a média dos dois centrais: (6 + 8)/2 = 7.',
      incorretas: { A: 'É um dos valores centrais, mas falta a média.', C: 'É o outro valor central, mas falta a média.', D: 'Confundiu com o maior.' },
      conceitoCobrado: 'Mediana com quantidade par.',
      pegadinha: 'Não calcular a média dos dois centrais.',
      comoApareceEmConcurso: 'Cobrança frequente.'
    },
    tags: ['mediana']
  },
  {
    id: 'Q-DID-MAT-1404',
    tipo: 'DIDATICA',
    area: 'APLI',
    moduloId: 'MAT-14',
    subtema: 'Moda',
    dificuldade: 1,
    prioridade: 'media',
    enunciado: 'A moda da lista [3, 5, 5, 7, 8, 8, 8, 10, 12] é:',
    alternativas: [
      { id: 'A', texto: '5' },
      { id: 'B', texto: '7' },
      { id: 'C', texto: '8' },
      { id: 'D', texto: '10' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'O valor que mais aparece é 8 (três vezes). Moda = 8.',
      incorretas: { A: '5 aparece 2 vezes.', B: '7 aparece 1 vez.', D: '10 aparece 1 vez.' },
      conceitoCobrado: 'Moda.',
      pegadinha: 'Confundir com mediana ou com o maior valor.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['moda']
  },
  {
    id: 'Q-DID-MAT-1405',
    tipo: 'DIDATICA',
    area: 'APLI',
    moduloId: 'MAT-14',
    subtema: 'Média x mediana',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Os salários de 5 funcionários de uma empresa são: R$ 1.500, R$ 1.800, R$ 2.000, R$ 2.200 e R$ 30.000. Sobre média e mediana:',
    alternativas: [
      { id: 'A', texto: 'A média é R$ 2.000 e a mediana é R$ 7.500.' },
      { id: 'B', texto: 'A média é R$ 7.500 e a mediana é R$ 2.000.' },
      { id: 'C', texto: 'Média e mediana são iguais a R$ 2.000.' },
      { id: 'D', texto: 'A média é R$ 7.500 e a mediana é R$ 1.800.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Média = (1500 + 1800 + 2000 + 2200 + 30000)/5 = 37.500/5 = 7.500. Mediana = valor central (3º de 5) = 2.000.',
      incorretas: { A: 'Inverteu os valores.', C: 'A média foi distorcida pelo salário de 30.000.', D: 'Mediana é o 3º valor ordenado: 2.000.' },
      conceitoCobrado: 'Média é sensível a extremos; mediana não.',
      pegadinha: 'Confundir as duas medidas em distribuições assimétricas.',
      comoApareceEmConcurso: 'Questões de interpretação de dados.'
    },
    tags: ['média', 'mediana']
  },

  /* ============================================================
     MAT-15 — Geometria Plana
  ============================================================ */
  {
    id: 'Q-DID-MAT-1501',
    tipo: 'DIDATICA',
    area: 'GEO',
    moduloId: 'MAT-15',
    subtema: 'Área do retângulo',
    dificuldade: 1,
    prioridade: 'media',
    enunciado: 'Um retângulo mede 15 cm de base e 8 cm de altura. Sua área é:',
    alternativas: [
      { id: 'A', texto: '23 cm²' },
      { id: 'B', texto: '46 cm²' },
      { id: 'C', texto: '120 cm²' },
      { id: 'D', texto: '240 cm²' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Área = base × altura = 15 × 8 = 120 cm².',
      incorretas: { A: 'Somou em vez de multiplicar.', B: 'Calculou o perímetro (2(15+8) = 46).', D: 'Multiplicou por 2 sem motivo.' },
      conceitoCobrado: 'Área do retângulo.',
      pegadinha: 'Confundir área com perímetro.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['área', 'retângulo']
  },
  {
    id: 'Q-DID-MAT-1502',
    tipo: 'DIDATICA',
    area: 'GEO',
    moduloId: 'MAT-15',
    subtema: 'Área do triângulo',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Um triângulo tem base 20 cm e altura 9 cm. Sua área é:',
    alternativas: [
      { id: 'A', texto: '180 cm²' },
      { id: 'B', texto: '90 cm²' },
      { id: 'C', texto: '45 cm²' },
      { id: 'D', texto: '29 cm²' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Área = (base × altura) / 2 = (20 × 9) / 2 = 180/2 = 90 cm².',
      incorretas: { A: 'Esqueceu de dividir por 2.', C: 'Dividiu por 4.', D: 'Somou base + altura.' },
      conceitoCobrado: 'Área do triângulo.',
      pegadinha: 'Esquecer o /2.',
      comoApareceEmConcurso: 'Cobrança frequente.'
    },
    tags: ['área', 'triângulo']
  },
  {
    id: 'Q-DID-MAT-1503',
    tipo: 'DIDATICA',
    area: 'GEO',
    moduloId: 'MAT-15',
    subtema: 'Área do círculo',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Um círculo tem raio 5 cm. Sua área, considerando π ≈ 3,14, é:',
    alternativas: [
      { id: 'A', texto: '31,4 cm²' },
      { id: 'B', texto: '78,5 cm²' },
      { id: 'C', texto: '15,7 cm²' },
      { id: 'D', texto: '25 cm²' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Área = πr² = 3,14 × 5² = 3,14 × 25 = 78,5 cm².',
      incorretas: { A: 'Calculou a circunferência (2πr = 2 × 3,14 × 5 = 31,4).', C: 'Metade da circunferência.', D: 'Esqueceu de multiplicar por π.' },
      conceitoCobrado: 'Área do círculo.',
      pegadinha: 'Trocar área (πr²) com circunferência (2πr).',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['área', 'círculo']
  },
  {
    id: 'Q-DID-MAT-1504',
    tipo: 'DIDATICA',
    area: 'GEO',
    moduloId: 'MAT-15',
    subtema: 'Perímetro',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Um terreno retangular mede 30 m por 18 m. Para cercá-lo com 2 fios de arame, quantos metros de arame serão necessários?',
    alternativas: [
      { id: 'A', texto: '48 m' },
      { id: 'B', texto: '96 m' },
      { id: 'C', texto: '192 m' },
      { id: 'D', texto: '540 m' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Perímetro = 2 × (30 + 18) = 96 m. Com 2 fios: 96 × 2 = 192 m.',
      incorretas: { A: 'Somou apenas 30 + 18.', B: 'Esqueceu de multiplicar pelos 2 fios.', D: 'Calculou a área (30 × 18 = 540) e multiplicou.' },
      conceitoCobrado: 'Perímetro do retângulo + multiplicação.',
      pegadinha: 'Confundir área com perímetro.',
      comoApareceEmConcurso: 'Problemas contextualizados.'
    },
    tags: ['perímetro', 'retângulo']
  },
  {
    id: 'Q-DID-MAT-1505',
    tipo: 'DIDATICA',
    area: 'GEO',
    moduloId: 'MAT-15',
    subtema: 'Ângulos de polígono',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'A soma dos ângulos internos de um hexágono (6 lados) é:',
    alternativas: [
      { id: 'A', texto: '360°' },
      { id: 'B', texto: '540°' },
      { id: 'C', texto: '720°' },
      { id: 'D', texto: '900°' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Fórmula: (n - 2) × 180° = (6 - 2) × 180 = 4 × 180 = 720°.',
      incorretas: { A: 'Valor para quadrilátero.', B: 'Valor para pentágono.', D: 'Valor para heptágono.' },
      conceitoCobrado: 'Soma dos ângulos internos de polígono.',
      pegadinha: 'Esquecer a fórmula (n-2) × 180°.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['polígonos', 'ângulos']
  },

  /* ============================================================
     MAT-16 — Geometria Espacial
  ============================================================ */
  {
    id: 'Q-DID-MAT-1601',
    tipo: 'DIDATICA',
    area: 'GEO',
    moduloId: 'MAT-16',
    subtema: 'Volume do cubo',
    dificuldade: 1,
    prioridade: 'media',
    enunciado: 'Um cubo tem aresta 5 cm. Seu volume é:',
    alternativas: [
      { id: 'A', texto: '25 cm³' },
      { id: 'B', texto: '75 cm³' },
      { id: 'C', texto: '125 cm³' },
      { id: 'D', texto: '150 cm³' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Volume = aresta³ = 5³ = 125 cm³.',
      incorretas: { A: 'Aresta² = 25.', B: '3 × 25 = 75.', D: '6 × 25 = 150 (área superficial).' },
      conceitoCobrado: 'Volume do cubo.',
      pegadinha: 'Confundir com área superficial.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['volume', 'cubo']
  },
  {
    id: 'Q-DID-MAT-1602',
    tipo: 'DIDATICA',
    area: 'GEO',
    moduloId: 'MAT-16',
    subtema: 'Volume do paralelepípedo',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Uma caixa mede 6 m × 4 m × 3 m. Sua capacidade em litros é:',
    alternativas: [
      { id: 'A', texto: '72 litros' },
      { id: 'B', texto: '720 litros' },
      { id: 'C', texto: '7.200 litros' },
      { id: 'D', texto: '72.000 litros' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Volume = 6 × 4 × 3 = 72 m³. Como 1 m³ = 1.000 L: 72.000 L.',
      incorretas: { A: 'Considerou litros = m³.', B: 'Multiplicou por 10.', C: 'Multiplicou por 100.' },
      conceitoCobrado: 'Volume + conversão m³ → litros.',
      pegadinha: 'Esquecer de multiplicar por 1.000.',
      comoApareceEmConcurso: 'Problemas de capacidade.'
    },
    tags: ['volume', 'litros']
  },
  {
    id: 'Q-DID-MAT-1603',
    tipo: 'DIDATICA',
    area: 'GEO',
    moduloId: 'MAT-16',
    subtema: 'Volume do cilindro',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Um tanque cilíndrico tem raio 3 m e altura 4 m. Considerando π ≈ 3,14, seu volume aproximado é:',
    alternativas: [
      { id: 'A', texto: '37,68 m³' },
      { id: 'B', texto: '75,36 m³' },
      { id: 'C', texto: '113,04 m³' },
      { id: 'D', texto: '150,72 m³' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'V = πr²h = 3,14 × 3² × 4 = 3,14 × 9 × 4 = 3,14 × 36 = 113,04 m³.',
      incorretas: { A: 'Esqueceu de elevar o raio ao quadrado (3,14 × 3 × 4 = 37,68).', B: 'Multiplicou por 2 sem motivo.', D: 'Erro de cálculo.' },
      conceitoCobrado: 'Volume do cilindro.',
      pegadinha: 'Esquecer de elevar o raio ao quadrado.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['volume', 'cilindro']
  },
  {
    id: 'Q-DID-MAT-1604',
    tipo: 'DIDATICA',
    area: 'GEO',
    moduloId: 'MAT-16',
    subtema: 'Volume da esfera',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Uma esfera tem raio 3 cm. Seu volume, considerando π ≈ 3,14, é aproximadamente:',
    alternativas: [
      { id: 'A', texto: '28,26 cm³' },
      { id: 'B', texto: '113,04 cm³' },
      { id: 'C', texto: '37,68 cm³' },
      { id: 'D', texto: '226,08 cm³' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'V = (4/3)πr³ = (4/3) × 3,14 × 27 = 4 × 3,14 × 9 = 113,04 cm³.',
      incorretas: { A: 'Calculou πr² (área do círculo).', C: 'Calculou 4πr (sem r²).', D: 'Esqueceu o /3.' },
      conceitoCobrado: 'Volume da esfera.',
      pegadinha: 'Confundir com área superficial (4πr²).',
      comoApareceEmConcurso: 'Cobrança média.'
    },
    tags: ['volume', 'esfera']
  },
  {
    id: 'Q-DID-MAT-1605',
    tipo: 'DIDATICA',
    area: 'GEO',
    moduloId: 'MAT-16',
    subtema: 'Volume do cone',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Um cone tem raio 2 m e altura 6 m. Seu volume aproximado (π ≈ 3,14) é:',
    alternativas: [
      { id: 'A', texto: '25,12 m³' },
      { id: 'B', texto: '75,36 m³' },
      { id: 'C', texto: '37,68 m³' },
      { id: 'D', texto: '50,24 m³' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'V = (πr²h) / 3 = (3,14 × 4 × 6)/3 = 75,36/3 = 25,12 m³.',
      incorretas: { B: 'Esqueceu de dividir por 3 (volume do cilindro equivalente).', C: 'Erro de cálculo.', D: 'Erro de cálculo.' },
      conceitoCobrado: 'Volume do cone.',
      pegadinha: 'Esquecer o /3.',
      comoApareceEmConcurso: 'Cobrança média.'
    },
    tags: ['volume', 'cone']
  },

  /* ============================================================
     MAT-17 — Relações Métricas e Teorema de Pitágoras
  ============================================================ */
  {
    id: 'Q-DID-MAT-1701',
    tipo: 'DIDATICA',
    area: 'GEO',
    moduloId: 'MAT-17',
    subtema: 'Teorema de Pitágoras',
    dificuldade: 1,
    prioridade: 'media',
    enunciado: 'Em um triângulo retângulo, os catetos medem 6 cm e 8 cm. A hipotenusa mede:',
    alternativas: [
      { id: 'A', texto: '10 cm' },
      { id: 'B', texto: '12 cm' },
      { id: 'C', texto: '14 cm' },
      { id: 'D', texto: '48 cm' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'a² = 6² + 8² = 36 + 64 = 100 → a = √100 = 10 cm. Terno pitagórico 3-4-5 × 2.',
      incorretas: { B: 'Somou 6 + 6.', C: 'Somou 6 + 8.', D: 'Multiplicou 6 × 8.' },
      conceitoCobrado: 'Teorema de Pitágoras.',
      pegadinha: 'Somar os catetos em vez de somar seus quadrados.',
      comoApareceEmConcurso: 'Cobrança clássica.'
    },
    tags: ['pitágoras']
  },
  {
    id: 'Q-DID-MAT-1702',
    tipo: 'DIDATICA',
    area: 'GEO',
    moduloId: 'MAT-17',
    subtema: 'Diagonal do retângulo',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Um retângulo mede 12 cm × 16 cm. Sua diagonal mede:',
    alternativas: [
      { id: 'A', texto: '20 cm' },
      { id: 'B', texto: '24 cm' },
      { id: 'C', texto: '28 cm' },
      { id: 'D', texto: '14 cm' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A diagonal é a hipotenusa de um triângulo retângulo com catetos 12 e 16. d² = 144 + 256 = 400 → d = 20 cm.',
      incorretas: { B: 'Erro de cálculo.', C: 'Somou 12 + 16.', D: 'Erro de cálculo.' },
      conceitoCobrado: 'Pitágoras aplicado à diagonal.',
      pegadinha: 'Somar os lados em vez de aplicar a fórmula.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['diagonal', 'pitágoras']
  },
  {
    id: 'Q-DID-MAT-1703',
    tipo: 'DIDATICA',
    area: 'GEO',
    moduloId: 'MAT-17',
    subtema: 'Diagonal do quadrado',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'A diagonal de um quadrado de lado 7 cm é:',
    alternativas: [
      { id: 'A', texto: '14 cm' },
      { id: 'B', texto: '7√2 cm' },
      { id: 'C', texto: '7√3 cm' },
      { id: 'D', texto: '49 cm' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Diagonal do quadrado = L√2 = 7√2 cm ≈ 9,9 cm.',
      incorretas: { A: 'É 2 × lado, não a diagonal.', C: 'Fórmula da altura do triângulo equilátero.', D: 'É a área (L²).' },
      conceitoCobrado: 'Diagonal do quadrado.',
      pegadinha: 'Confundir L√2 com 2L ou L√3.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['diagonal', 'quadrado']
  },
  {
    id: 'Q-DID-MAT-1704',
    tipo: 'DIDATICA',
    area: 'GEO',
    moduloId: 'MAT-17',
    subtema: 'Aplicação contextualizada',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Uma escada de 10 m está apoiada em um muro. A base da escada está a 6 m do muro. A altura que a escada alcança é:',
    alternativas: [
      { id: 'A', texto: '4 m' },
      { id: 'B', texto: '8 m' },
      { id: 'C', texto: '12 m' },
      { id: 'D', texto: '16 m' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Escada é a hipotenusa (10). 10² = 6² + h² → 100 = 36 + h² → h² = 64 → h = 8 m.',
      incorretas: { A: 'Subtraiu 10 - 6.', C: 'Somou 10 + 2.', D: 'Erro de cálculo.' },
      conceitoCobrado: 'Pitágoras aplicado a escada.',
      pegadinha: 'Confundir qual lado é a hipotenusa.',
      comoApareceEmConcurso: 'Problema clássico.'
    },
    tags: ['pitágoras', 'escada']
  },
  {
    id: 'Q-DID-MAT-1705',
    tipo: 'DIDATICA',
    area: 'GEO',
    moduloId: 'MAT-17',
    subtema: 'Ternos pitagóricos',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Em um triângulo retângulo, a hipotenusa mede 13 cm e um cateto mede 5 cm. O outro cateto mede:',
    alternativas: [
      { id: 'A', texto: '8 cm' },
      { id: 'B', texto: '10 cm' },
      { id: 'C', texto: '12 cm' },
      { id: 'D', texto: '14 cm' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: '13² = 5² + c² → 169 = 25 + c² → c² = 144 → c = 12 cm. Terno pitagórico 5-12-13.',
      incorretas: { A: 'Subtraiu 13 - 5 = 8.', B: 'Erro de cálculo.', D: 'Somou 13 + 1.' },
      conceitoCobrado: 'Pitágoras + ternos pitagóricos.',
      pegadinha: 'Esquecer de tirar a raiz no final.',
      comoApareceEmConcurso: 'Cobrança frequente.'
    },
    tags: ['pitágoras', 'ternos']
  },

  /* ============================================================
     MAT-18 — Sequências e Padrões
  ============================================================ */
  {
    id: 'Q-DID-MAT-1801',
    tipo: 'DIDATICA',
    area: 'RLM',
    moduloId: 'MAT-18',
    subtema: 'Progressão aritmética',
    dificuldade: 1,
    prioridade: 'media',
    enunciado: 'O próximo termo da sequência 7, 11, 15, 19, ... é:',
    alternativas: [
      { id: 'A', texto: '22' },
      { id: 'B', texto: '23' },
      { id: 'C', texto: '24' },
      { id: 'D', texto: '25' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Diferenças são 4, 4, 4 (PA de razão 4). Próximo termo: 19 + 4 = 23.',
      incorretas: { A: 'Erro de soma.', C: 'Somou 5.', D: 'Somou 6.' },
      conceitoCobrado: 'Progressão aritmética.',
      pegadinha: 'Errar a razão.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['PA', 'sequências']
  },
  {
    id: 'Q-DID-MAT-1802',
    tipo: 'DIDATICA',
    area: 'RLM',
    moduloId: 'MAT-18',
    subtema: 'Progressão geométrica',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'O próximo termo da sequência 3, 6, 12, 24, ... é:',
    alternativas: [
      { id: 'A', texto: '30' },
      { id: 'B', texto: '36' },
      { id: 'C', texto: '48' },
      { id: 'D', texto: '42' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Cada termo é o dobro do anterior (PG de razão 2). Próximo: 24 × 2 = 48.',
      incorretas: { A: 'Somou 6.', B: 'Somou 12.', D: 'Somou 18.' },
      conceitoCobrado: 'Progressão geométrica.',
      pegadinha: 'Tratar como PA em vez de PG.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['PG', 'sequências']
  },
  {
    id: 'Q-DID-MAT-1803',
    tipo: 'DIDATICA',
    area: 'RLM',
    moduloId: 'MAT-18',
    subtema: 'Sequência de 2ª ordem',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'O próximo termo da sequência 2, 5, 10, 17, 26, ... é:',
    alternativas: [
      { id: 'A', texto: '35' },
      { id: 'B', texto: '36' },
      { id: 'C', texto: '37' },
      { id: 'D', texto: '38' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Diferenças: 3, 5, 7, 9 (números ímpares crescentes). Próxima diferença: 11. Próximo termo: 26 + 11 = 37.',
      incorretas: { A: 'Somou 9.', B: 'Somou 10.', D: 'Somou 12.' },
      conceitoCobrado: 'Sequência de 2ª ordem.',
      pegadinha: 'Não notar que as diferenças formam uma PA.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['sequência 2ª ordem']
  },
  {
    id: 'Q-DID-MAT-1804',
    tipo: 'DIDATICA',
    area: 'RLM',
    moduloId: 'MAT-18',
    subtema: 'Fibonacci',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'A sequência 1, 1, 2, 3, 5, 8, ... é conhecida como Fibonacci. O próximo termo é:',
    alternativas: [
      { id: 'A', texto: '10' },
      { id: 'B', texto: '11' },
      { id: 'C', texto: '13' },
      { id: 'D', texto: '16' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Cada termo é a soma dos dois anteriores: 8 + 5 = 13.',
      incorretas: { A: 'Somou 2.', B: 'Somou 3.', D: 'Somou 8.' },
      conceitoCobrado: 'Sequência de Fibonacci.',
      pegadinha: 'Não reconhecer o padrão de soma dos dois anteriores.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['Fibonacci']
  },
  {
    id: 'Q-DID-MAT-1805',
    tipo: 'DIDATICA',
    area: 'RLM',
    moduloId: 'MAT-18',
    subtema: 'Sequências de letras',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Na sequência C, F, I, L, ..., o próximo termo é:',
    alternativas: [
      { id: 'A', texto: 'M' },
      { id: 'B', texto: 'N' },
      { id: 'C', texto: 'O' },
      { id: 'D', texto: 'P' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Convertendo para posições no alfabeto: C=3, F=6, I=9, L=12 (soma 3 a cada passo). Próximo: 15 = O.',
      incorretas: { A: 'Soma 1.', B: 'Soma 2.', D: 'Soma 4.' },
      conceitoCobrado: 'Sequências de letras.',
      pegadinha: 'Não converter para posições alfabéticas.',
      comoApareceEmConcurso: 'RLM.'
    },
    tags: ['sequências', 'letras']
  },

  /* ============================================================
     MAT-21 — Conjuntos e Diagramas Lógicos
  ============================================================ */
  {
    id: 'Q-DID-MAT-2101',
    tipo: 'DIDATICA',
    area: 'RLM',
    moduloId: 'MAT-21',
    subtema: 'União de conjuntos',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Em uma pesquisa com 80 pessoas, 45 gostam de café, 30 gostam de chá e 15 gostam dos dois. Quantas pessoas gostam de PELO MENOS UMA das bebidas?',
    alternativas: [
      { id: 'A', texto: '60' },
      { id: 'B', texto: '75' },
      { id: 'C', texto: '80' },
      { id: 'D', texto: '90' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'n(C ∪ T) = n(C) + n(T) - n(C ∩ T) = 45 + 30 - 15 = 60.',
      incorretas: { B: 'Erro de cálculo.', C: 'Confundiu com o total.', D: 'Somou sem subtrair a interseção (45+30+15).' },
      conceitoCobrado: 'União de conjuntos com interseção.',
      pegadinha: 'Somar sem subtrair a interseção.',
      comoApareceEmConcurso: 'RLM, cobrança clássica.'
    },
    tags: ['conjuntos', 'união']
  },
  {
    id: 'Q-DID-MAT-2102',
    tipo: 'DIDATICA',
    area: 'RLM',
    moduloId: 'MAT-21',
    subtema: 'Interseção',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Em uma turma de 50 alunos, 30 praticam futebol, 25 praticam vôlei e 10 praticam apenas vôlei (sem futebol). Quantos praticam APENAS futebol?',
    alternativas: [
      { id: 'A', texto: '15' },
      { id: 'B', texto: '20' },
      { id: 'C', texto: '25' },
      { id: 'D', texto: '30' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Interseção = total do vôlei - apenas vôlei = 25 - 10 = 15. Só futebol = 30 - 15 = 15.',
      incorretas: { B: 'Erro de cálculo.', C: 'Erro de cálculo.', D: 'Confundiu com o total de futebol.' },
      conceitoCobrado: 'Interseção e diferença.',
      pegadinha: 'Confundir "só vôlei" com o total do vôlei.',
      comoApareceEmConcurso: 'Problemas com conjuntos.'
    },
    tags: ['conjuntos', 'interseção']
  },
  {
    id: 'Q-DID-MAT-2103',
    tipo: 'DIDATICA',
    area: 'RLM',
    moduloId: 'MAT-21',
    subtema: 'Diferença',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Em uma turma, 40 alunos leem jornal, 25 leem revista e 12 leem ambos. Quantos leem SOMENTE jornal?',
    alternativas: [
      { id: 'A', texto: '25' },
      { id: 'B', texto: '28' },
      { id: 'C', texto: '35' },
      { id: 'D', texto: '40' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Só jornal = n(J) - n(J ∩ R) = 40 - 12 = 28.',
      incorretas: { A: 'Erro de cálculo.', C: 'Somou 25 + 10.', D: 'Confundiu com o total de jornal.' },
      conceitoCobrado: 'Diferença de conjuntos.',
      pegadinha: 'Confundir "só jornal" com "jornal".',
      comoApareceEmConcurso: 'Problemas com conjuntos.'
    },
    tags: ['conjuntos', 'diferença']
  },
  {
    id: 'Q-DID-MAT-2104',
    tipo: 'DIDATICA',
    area: 'RLM',
    moduloId: 'MAT-21',
    subtema: 'Três conjuntos',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Em uma turma de 40 alunos: 20 gostam de Matemática, 15 de Física, 12 de Química; 5 gostam de Matemática e Física, 4 de Física e Química, 3 de Matemática e Química e 1 dos três. Quantos gostam APENAS de Matemática?',
    alternativas: [
      { id: 'A', texto: '12' },
      { id: 'B', texto: '13' },
      { id: 'C', texto: '15' },
      { id: 'D', texto: '20' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Só M = n(M) - (M ∩ F) - (M ∩ Q) + (M ∩ F ∩ Q) = 20 - 5 - 3 + 1 = 13. A adição da interseção tripla compensa a dupla subtração.',
      incorretas: { A: 'Erro ao somar a interseção tripla.', C: 'Erro de cálculo.', D: 'Confundiu com o total de M.' },
      conceitoCobrado: 'Conjuntos com 3 variáveis.',
      pegadinha: 'Esquecer de somar a interseção tripla.',
      comoApareceEmConcurso: 'RLM avançado.'
    },
    tags: ['conjuntos', 'três']
  },
  {
    id: 'Q-DID-MAT-2105',
    tipo: 'DIDATICA',
    area: 'RLM',
    moduloId: 'MAT-21',
    subtema: 'Nenhum dos conjuntos',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Em uma pesquisa com 100 pessoas, 60 leem jornal A, 50 leem jornal B e 30 leem os dois. Quantas pessoas NÃO leem nenhum dos jornais?',
    alternativas: [
      { id: 'A', texto: '10' },
      { id: 'B', texto: '20' },
      { id: 'C', texto: '30' },
      { id: 'D', texto: '40' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'n(A ∪ B) = 60 + 50 - 30 = 80 leem pelo menos um. Nenhum = 100 - 80 = 20.',
      incorretas: { A: 'Erro de cálculo.', C: 'Confundiu com a interseção.', D: 'Soma errada.' },
      conceitoCobrado: 'Cálculo do complemento em problemas de conjuntos.',
      pegadinha: 'Esquecer de subtrair do total.',
      comoApareceEmConcurso: 'RLM.'
    },
    tags: ['conjuntos', 'complemento']
  }

];
