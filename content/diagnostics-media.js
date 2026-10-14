/* ============================================================
   DIAGNÓSTICOS — Módulos de prioridade MÉDIA
   Preenchidos: MAT-14, MAT-15, MAT-16, MAT-17, MAT-18, MAT-21
   ============================================================ */

window.DIAGNOSTICS_MEDIA = {

  /* ============================================================
     MAT-14 — Estatística Básica
  ============================================================ */
  'MAT-14': {
    id: 'D-MAT-14',
    moduloId: 'MAT-14',
    itens: [
      {
        id: 'D-MAT-14-01',
        tipo: 'multipla_escolha',
        subtopico: 'Mediana',
        pergunta: 'A mediana da lista [8, 3, 12, 5, 7, 10] é:',
        alternativas: [
          { id: 'A', texto: '5' },
          { id: 'B', texto: '7' },
          { id: 'C', texto: '7,5' },
          { id: 'D', texto: '8' }
        ],
        gabarito: 'C',
        explicacao: 'Primeiro ORDENE: [3, 5, 7, 8, 10, 12]. Com 6 valores (par), a mediana é a média dos dois centrais: (7 + 8)/2 = 7,5. Nunca calcule mediana sem ordenar.'
      },
      {
        id: 'D-MAT-14-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Média x mediana',
        pergunta: 'Em um conjunto de dados com valores extremos muito altos (outliers), a média aritmética costuma ser MAIS representativa que a mediana.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. A MÉDIA é sensível a valores extremos (um diretor com salário altíssimo distorce a média para cima). A MEDIANA é mais robusta — não é afetada por outliers. Em distribuições muito assimétricas, a mediana representa melhor o valor típico.'
      },
      {
        id: 'D-MAT-14-03',
        tipo: 'situacao',
        subtopico: 'Média ponderada',
        pergunta: 'Um aluno tirou 6 na prova 1 (peso 2) e 9 na prova 2 (peso 3). Sua média ponderada é:',
        alternativas: [
          { id: 'A', texto: '7,0' },
          { id: 'B', texto: '7,5' },
          { id: 'C', texto: '7,8' },
          { id: 'D', texto: '8,0' }
        ],
        gabarito: 'C',
        explicacao: 'Média ponderada = (6×2 + 9×3) / (2+3) = (12+27)/5 = 39/5 = 7,8. Cuidado: dividir pela SOMA dos pesos (5), não por 2.'
      },
      {
        id: 'D-MAT-14-04',
        tipo: 'autoavaliacao',
        subtopico: 'Medidas estatísticas',
        pergunta: 'Você sabe diferenciar com segurança MÉDIA, MEDIANA e MODA, e identificar quando cada uma é mais adequada?',
        resposta: 'MÉDIA: soma/quantidade — sensível a extremos, boa quando os dados são homogêneos. MEDIANA: valor central (ordenar antes!) — robusta a extremos, boa para distribuições assimétricas (ex.: salários). MODA: valor mais frequente — útil para dados categóricos ou quando se quer o "mais comum". Podem coincidir (em distribuições simétricas) ou divergir bastante.'
      }
    ]
  },

  /* ============================================================
     MAT-15 — Geometria Plana
  ============================================================ */
  'MAT-15': {
    id: 'D-MAT-15',
    moduloId: 'MAT-15',
    itens: [
      {
        id: 'D-MAT-15-01',
        tipo: 'multipla_escolha',
        subtopico: 'Área de triângulo',
        pergunta: 'Um triângulo tem base 12 cm e altura 7 cm. Sua área é:',
        alternativas: [
          { id: 'A', texto: '84 cm²' },
          { id: 'B', texto: '42 cm²' },
          { id: 'C', texto: '19 cm²' },
          { id: 'D', texto: '21 cm²' }
        ],
        gabarito: 'B',
        explicacao: 'Área do triângulo = (base × altura) / 2 = (12 × 7) / 2 = 84 / 2 = 42 cm². Esquecer o /2 é o erro clássico.'
      },
      {
        id: 'D-MAT-15-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Círculo x circunferência',
        pergunta: 'A área do círculo de raio r é dada por 2πr, e o comprimento da circunferência é πr².',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso — está INVERTIDO. ÁREA do círculo: πr² (com expoente 2). COMPRIMENTO da circunferência: 2πr (sem expoente). Nunca troque as duas.'
      },
      {
        id: 'D-MAT-15-03',
        tipo: 'situacao',
        subtopico: 'Problema contextualizado',
        pergunta: 'Um terreno retangular mede 20 m × 15 m. Para cercá-lo com 3 fios de arame, quantos metros de arame serão necessários?',
        alternativas: [
          { id: 'A', texto: '70 m' },
          { id: 'B', texto: '210 m' },
          { id: 'C', texto: '300 m' },
          { id: 'D', texto: '140 m' }
        ],
        gabarito: 'B',
        explicacao: 'Perímetro = 2 × (20 + 15) = 70 m. Como são 3 fios: 70 × 3 = 210 m. Cuidado: 300 m é a ÁREA, não o perímetro.'
      },
      {
        id: 'D-MAT-15-04',
        tipo: 'autoavaliacao',
        subtopico: 'Fórmulas de área',
        pergunta: 'Você consegue aplicar de memória as fórmulas de área de quadrado, retângulo, triângulo, trapézio e círculo, e diferenciar perímetro de área?',
        resposta: 'PERÍMETRO (contorno, unidade linear): quadrado 4L; retângulo 2(b+h); circunferência 2πr. ÁREA (superfície, unidade quadrada): quadrado L²; retângulo b×h; triângulo (b×h)/2; trapézio ((B+b)×h)/2; círculo πr². Antes de aplicar, identifique a figura e converta todas as unidades para a mesma.'
      }
    ]
  },

  /* ============================================================
     MAT-16 — Geometria Espacial
  ============================================================ */
  'MAT-16': {
    id: 'D-MAT-16',
    moduloId: 'MAT-16',
    itens: [
      {
        id: 'D-MAT-16-01',
        tipo: 'multipla_escolha',
        subtopico: 'Volume do paralelepípedo',
        pergunta: 'Uma caixa retangular mede 4 m × 3 m × 2 m. Seu volume é:',
        alternativas: [
          { id: 'A', texto: '9 m³' },
          { id: 'B', texto: '24 m³' },
          { id: 'C', texto: '26 m²' },
          { id: 'D', texto: '12 m³' }
        ],
        gabarito: 'B',
        explicacao: 'Volume = comprimento × largura × altura = 4 × 3 × 2 = 24 m³. Unidade ao CUBO (m³), não ao quadrado.'
      },
      {
        id: 'D-MAT-16-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Relação litro x m³',
        pergunta: 'Uma caixa d\'água de 3 m³ tem capacidade para 300 litros.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. Relação fundamental: 1 m³ = 1.000 L. Então 3 m³ = 3.000 L, não 300 L. É o erro de "esquecer um zero".'
      },
      {
        id: 'D-MAT-16-03',
        tipo: 'situacao',
        subtopico: 'Volume do cilindro',
        pergunta: 'Um tanque cilíndrico tem raio 2 m e altura 5 m. Considerando π ≈ 3,14, seu volume aproximado é:',
        alternativas: [
          { id: 'A', texto: '31,4 m³' },
          { id: 'B', texto: '62,8 m³' },
          { id: 'C', texto: '20,0 m³' },
          { id: 'D', texto: '125,6 m³' }
        ],
        gabarito: 'B',
        explicacao: 'V = πr²h = 3,14 × 2² × 5 = 3,14 × 4 × 5 = 62,8 m³. Erro comum: esquecer de elevar o raio ao quadrado (daria 31,4).'
      },
      {
        id: 'D-MAT-16-04',
        tipo: 'autoavaliacao',
        subtopico: 'Volume x área superficial',
        pergunta: 'Você diferencia com clareza VOLUME (quanto cabe dentro) de ÁREA SUPERFICIAL (quanto de material para revestir) em cubos, paralelepípedos e cilindros?',
        resposta: 'VOLUME (3D, unidade ao cubo): cubo a³; paralelepípedo c×l×a; cilindro πr²h; cone (πr²h)/3; pirâmide (área base × h)/3; esfera (4/3)πr³. ÁREA SUPERFICIAL (2D, unidade ao quadrado): cubo 6a²; paralelepípedo 2(ab+ac+bc); cilindro 2πr² + 2πrh; esfera 4πr². Volume é "capacidade"; área superficial é "revestimento".'
      }
    ]
  },

  /* ============================================================
     MAT-17 — Relações Métricas e Teorema de Pitágoras
  ============================================================ */
  'MAT-17': {
    id: 'D-MAT-17',
    moduloId: 'MAT-17',
    itens: [
      {
        id: 'D-MAT-17-01',
        tipo: 'multipla_escolha',
        subtopico: 'Teorema de Pitágoras',
        pergunta: 'Em um triângulo retângulo, os catetos medem 9 cm e 12 cm. A hipotenusa mede:',
        alternativas: [
          { id: 'A', texto: '15 cm' },
          { id: 'B', texto: '21 cm' },
          { id: 'C', texto: '18 cm' },
          { id: 'D', texto: '25 cm' }
        ],
        gabarito: 'A',
        explicacao: 'a² = 9² + 12² = 81 + 144 = 225 → a = √225 = 15 cm. É o terno pitagórico 3-4-5 multiplicado por 3 (9-12-15).'
      },
      {
        id: 'D-MAT-17-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Diagonal do quadrado',
        pergunta: 'A diagonal de um quadrado de lado L é sempre L√2.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. A diagonal do quadrado é a hipotenusa de um triângulo retângulo isósceles de catetos L. Então d² = L² + L² = 2L², logo d = L√2. Fórmula para memorizar.'
      },
      {
        id: 'D-MAT-17-03',
        tipo: 'situacao',
        subtopico: 'Problema com escada',
        pergunta: 'Uma escada de 13 m está apoiada em uma parede, com a base a 5 m da parede. A que altura a escada toca a parede?',
        alternativas: [
          { id: 'A', texto: '8 m' },
          { id: 'B', texto: '10 m' },
          { id: 'C', texto: '12 m' },
          { id: 'D', texto: '18 m' }
        ],
        gabarito: 'C',
        explicacao: 'A escada é a hipotenusa (13). Um cateto é 5. 13² = 5² + h² → 169 = 25 + h² → h² = 144 → h = 12 m. Terno 5-12-13.'
      },
      {
        id: 'D-MAT-17-04',
        tipo: 'autoavaliacao',
        subtopico: 'Identificação dos lados',
        pergunta: 'Você identifica corretamente qual lado é a hipotenusa e quais são os catetos em qualquer triângulo retângulo antes de aplicar Pitágoras?',
        resposta: 'HIPOTENUSA: lado oposto ao ângulo de 90° — é sempre o MAIOR lado. CATETOS: os dois lados que formam o ângulo reto. Fórmula: a² = b² + c² (a = hipotenusa; b, c = catetos). Em problemas com escada, rampa ou altura, a ESCADA/RAMPA é sempre a hipotenusa. Em problemas com diagonal de retângulo, a diagonal é a hipotenusa. Nunca aplique Pitágoras em triângulos que NÃO são retângulos.'
      }
    ]
  },

  /* ============================================================
     MAT-18 — Sequências e Padrões
  ============================================================ */
  'MAT-18': {
    id: 'D-MAT-18',
    moduloId: 'MAT-18',
    itens: [
      {
        id: 'D-MAT-18-01',
        tipo: 'multipla_escolha',
        subtopico: 'Progressão aritmética',
        pergunta: 'O próximo termo da sequência 4, 9, 14, 19, ... é:',
        alternativas: [
          { id: 'A', texto: '22' },
          { id: 'B', texto: '23' },
          { id: 'C', texto: '24' },
          { id: 'D', texto: '25' }
        ],
        gabarito: 'C',
        explicacao: 'As diferenças são 5, 5, 5 — é uma PA de razão 5. Próximo termo: 19 + 5 = 24.'
      },
      {
        id: 'D-MAT-18-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'PA x PG',
        pergunta: 'A sequência 2, 4, 8, 16, 32 é uma progressão aritmética de razão 2.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. É uma PROGRESSÃO GEOMÉTRICA (PG) de razão 2 (multiplica por 2). PA de razão 2 seria 2, 4, 6, 8 (soma 2).'
      },
      {
        id: 'D-MAT-18-03',
        tipo: 'situacao',
        subtopico: 'Sequência de 2ª ordem',
        pergunta: 'Na sequência 1, 3, 6, 10, 15, 21, ..., o próximo termo é:',
        alternativas: [
          { id: 'A', texto: '27' },
          { id: 'B', texto: '28' },
          { id: 'C', texto: '30' },
          { id: 'D', texto: '35' }
        ],
        gabarito: 'B',
        explicacao: 'As diferenças são 2, 3, 4, 5, 6 — crescem de 1 em 1. Próxima diferença: 7. Próximo termo: 21 + 7 = 28. São os números triangulares (1, 3, 6, 10, 15, 21, 28).'
      },
      {
        id: 'D-MAT-18-04',
        tipo: 'autoavaliacao',
        subtopico: 'Identificação de padrões',
        pergunta: 'Diante de uma sequência nova, você testa sistematicamente: diferenças, multiplicações, alternâncias e padrões famosos (quadrados, cubos, Fibonacci) antes de desistir?',
        resposta: 'Estratégia em ordem: 1) Calcular diferenças entre termos consecutivos. 2) Se as diferenças são constantes → PA. 3) Se as diferenças formam outra sequência → regra de 2ª ordem. 4) Se cada termo é múltiplo do anterior → PG. 5) Verificar padrões famosos (quadrados n², cubos n³, Fibonacci, triangulares). 6) Verificar alternância (regra diferente para termos ímpares e pares). 7) Em letras, converter para posições no alfabeto (A=1, B=2...).'
      }
    ]
  },

  /* ============================================================
     MAT-21 — Conjuntos e Diagramas Lógicos
  ============================================================ */
  'MAT-21': {
    id: 'D-MAT-21',
    moduloId: 'MAT-21',
    itens: [
      {
        id: 'D-MAT-21-01',
        tipo: 'multipla_escolha',
        subtopico: 'União de conjuntos',
        pergunta: 'Em uma turma, 30 alunos falam inglês, 20 falam espanhol e 10 falam os dois idiomas. Quantos alunos falam PELO MENOS UM dos idiomas?',
        alternativas: [
          { id: 'A', texto: '50' },
          { id: 'B', texto: '40' },
          { id: 'C', texto: '60' },
          { id: 'D', texto: '30' }
        ],
        gabarito: 'B',
        explicacao: 'n(I ∪ E) = n(I) + n(E) - n(I ∩ E) = 30 + 20 - 10 = 40. Somar sem subtrair a interseção (daria 50) conta os 10 alunos dos dois idiomas duas vezes.'
      },
      {
        id: 'D-MAT-21-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Pertinência x inclusão',
        pergunta: 'Se A = {1, 2, 3} e B = {1, 2, 3, 4, 5}, podemos afirmar que 3 ∈ A e também que A ⊂ B.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. Pertinência (∈): 3 é elemento de A. Inclusão (⊂): A está contido em B, pois todo elemento de A também está em B. Os símbolos são diferentes: ∈ entre elemento e conjunto; ⊂ entre conjunto e conjunto.'
      },
      {
        id: 'D-MAT-21-03',
        tipo: 'situacao',
        subtopico: 'Diferença de conjuntos',
        pergunta: 'Em uma turma de 40 alunos, 25 gostam de Matemática e 18 gostam de Português, sendo que 10 gostam das duas disciplinas. Quantos alunos gostam APENAS de Matemática?',
        alternativas: [
          { id: 'A', texto: '15' },
          { id: 'B', texto: '18' },
          { id: 'C', texto: '25' },
          { id: 'D', texto: '8' }
        ],
        gabarito: 'A',
        explicacao: 'Só Matemática = n(M) - n(M ∩ P) = 25 - 10 = 15. Cuidado: 25 é o TOTAL de alunos que gostam de Matemática (incluindo os que gostam dos dois). "Só de Matemática" exclui a interseção.'
      },
      {
        id: 'D-MAT-21-04',
        tipo: 'autoavaliacao',
        subtopico: 'Diagrama de Venn',
        pergunta: 'Ao resolver problemas com conjuntos, você sempre desenha o diagrama de Venn e começa preenchendo pela INTERSEÇÃO (ou interseção tripla em 3 conjuntos) antes de calcular as demais regiões?',
        resposta: 'Sim, é a estratégia correta: 1) Desenhar o diagrama com os círculos se sobrepondo. 2) Preencher PRIMEIRO a interseção (ou interseção tripla em problemas com 3 conjuntos). 3) Calcular as regiões exclusivas subtraindo a interseção do total de cada conjunto. 4) Somar todas as regiões para conferir com o total. Fórmula: n(A ∪ B) = n(A) + n(B) - n(A ∩ B). Sempre conferir se a soma das regiões = total do universo.'
      }
    ]
  }

};
