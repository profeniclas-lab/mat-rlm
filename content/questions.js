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
  }

];
