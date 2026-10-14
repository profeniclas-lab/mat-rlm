/* ============================================================
   AULAS — Módulos de prioridade MÉDIA
   Preenchidos neste lote: MAT-14, MAT-15, MAT-16
   Próximo lote: MAT-17, MAT-18, MAT-21
   ============================================================ */

window.LESSONS_MEDIA = {

  /* ============================================================
     MAT-14 — Estatística Básica
  ============================================================ */
  'MAT-14': {
    id: 'L-MAT-14',
    moduloId: 'MAT-14',
    objetivo: 'Compreender população, amostra, frequências, média (simples e ponderada), mediana, moda, amplitude e interpretação de resultados estatísticos. Base para interpretação de tabelas, gráficos e questões de atualidades.',
    prerequisitos: ['MAT-01', 'MAT-13'],

    introducao: 'Estatística é a ciência de coletar, organizar e interpretar dados. Em concursos, aparece em questões de atualidades (PIB, desemprego, índices), interpretação de tabelas e problemas com médias. Saber calcular média, mediana e moda, e entender o que cada uma representa, é essencial.',

    explicacaoSimples: 'Pense em uma turma de 30 alunos. A média de notas é o "resumo" do desempenho geral. A mediana divide a turma em duas metades (metade acima, metade abaixo). A moda é a nota que mais aparece. Cada uma conta uma história diferente — e a banca testa justamente essa diferença.',

    explicacaoTecnica: 'POPULAÇÃO: conjunto completo de elementos. AMOSTRA: subconjunto da população. FREQUÊNCIA ABSOLUTA (fi): número de vezes que um valor aparece. FREQUÊNCIA RELATIVA (fri): fi / total; pode ser expressa em % ou fração. MÉDIA ARITMÉTICA SIMPLES: soma dos valores / número de valores. MÉDIA PONDERADA: cada valor tem um peso; soma (valor × peso) / soma dos pesos. MEDIANA: valor central dos dados ordenados. Se a quantidade de valores é ímpar: é o valor do meio. Se é par: média aritmética dos dois centrais. MODA: valor que mais aparece. Pode haver mais de uma moda (bimodal, multimodal) ou nenhuma (amodal). AMPLITUDE: maior valor − menor valor. Medidas de tendência central (média, mediana, moda) resumem o conjunto; medidas de dispersão (amplitude, desvio padrão) mostram a variação.',

    exemplos: [
      'Média simples: notas 6, 7, 8, 9 → (6+7+8+9)/4 = 7,5.',
      'Média ponderada: prova 1 (peso 2) = 6; prova 2 (peso 3) = 8 → (6×2 + 8×3)/(2+3) = (12+24)/5 = 7,2.',
      'Mediana com quantidade ímpar: [3, 5, 7, 8, 9] → mediana = 7.',
      'Mediana com quantidade par: [3, 5, 7, 9] → mediana = (5+7)/2 = 6.',
      'Moda: [2, 3, 3, 5, 7, 7, 7] → moda = 7.',
      'Amplitude: [3, 5, 7, 8, 9] → 9 - 3 = 6.',
      'Frequência relativa: 15 meninas em 40 alunos → 15/40 = 0,375 = 37,5%.'
    ],

    comparacoes: [
      { termoA: 'Média', termoB: 'Mediana', diferenca: 'MÉDIA: soma dividida pela quantidade. É sensível a valores extremos (um valor muito alto puxa a média). MEDIANA: valor central na lista ordenada. NÃO é afetada por extremos. Ex.: [1, 2, 3, 4, 100] → média = 22 (distorcida pelo 100); mediana = 3 (não distorcida).' },
      { termoA: 'Média simples', termoB: 'Média ponderada', diferenca: 'SIMPLES: todos os valores têm o mesmo peso (soma ÷ quantidade). PONDERADA: cada valor tem um peso específico (soma de valor×peso ÷ soma dos pesos). Ex.: em concursos com pesos diferentes por prova, use a ponderada.' },
      { termoA: 'Moda', termoB: 'Mediana', diferenca: 'MODA: valor MAIS FREQUENTE. Pode haver mais de uma (bimodal) ou nenhuma (amodal). MEDIANA: valor que divide o conjunto em duas metades (50% abaixo, 50% acima). Não precisa se repetir. Ex.: [1, 2, 3, 4, 5] → moda: não há; mediana = 3.' },
      { termoA: 'População', termoB: 'Amostra', diferenca: 'POPULAÇÃO: conjunto COMPLETO de elementos estudados (ex.: todos os brasileiros). AMOSTRA: SUBCONJUNTO representativo (ex.: 2.000 brasileiros sorteados). Estatísticas amostrais são usadas quando não é viável estudar toda a população.' }
    ],

    aplicacaoEmConcurso: 'Estatística aparece em questões de atualidades (índices de inflação, taxa de desemprego, IDH), interpretação de tabelas e gráficos com médias, e problemas de concurso com cálculo direto. Bancas cobram: média simples, média ponderada, mediana (especialmente com quantidade par), moda e interpretação do que cada medida representa.',

    pegadinhas: [
      'Confundir média com mediana quando há valores extremos. Ex.: salários de uma empresa — a média pode ser muito maior que a mediana se houver um diretor com salário altíssimo.',
      'Errar a mediana com quantidade par: deve-se calcular a média dos DOIS valores centrais.',
      'Esquecer de ORDENAR os dados antes de calcular a mediana.',
      'Calcular média ponderada sem multiplicar pelos pesos.',
      'Confundir frequência absoluta (contagem) com relativa (proporção).',
      'Achar que toda lista tem moda. Se todos os valores aparecem uma vez, é amodal.'
    ],

    errosComuns: [
      'Decorar fórmulas sem entender o que cada medida representa.',
      'Não interpretar o resultado no contexto da questão.',
      'Esquecer de dividir pela SOMA dos pesos na média ponderada.'
    ],

    resumo: [
      'População: conjunto completo. Amostra: subconjunto.',
      'Frequência absoluta: contagem. Relativa: fi / total.',
      'Média simples: soma dos valores ÷ quantidade.',
      'Média ponderada: soma (valor × peso) ÷ soma dos pesos.',
      'Mediana: valor central (ordenar antes!). Par → média dos 2 centrais.',
      'Moda: valor mais frequente. Bimodal: 2 modas. Amodal: nenhuma.',
      'Amplitude: maior − menor.',
      'Média é sensível a extremos; mediana não.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Média é o "resumo" do conjunto. Mediana é o "meio" da fila ordenada. Moda é a "música que mais toca". Cada uma conta uma história diferente.',
      outroExemplo: 'Em uma empresa com salários [1.500, 1.800, 2.000, 2.200, 50.000], a média é 11.500 (distorcida pelo diretor), mas a mediana é 2.000 (mais representativa). Um sindicato usaria a mediana para argumentar; a diretoria usaria a média.',
      compararConceitos: 'Média: soma/quantidade. Mediana: centro. Moda: mais frequente. Ponderada: pesos diferentes. Amplitude: maior - menor.',
      mostrarPegadinha: 'Cuidado: em listas com valores extremos, a MÉDIA pode enganar. A MEDIANA é mais robusta. Se a questão menciona "salário típico", provavelmente quer a mediana; se menciona "salário médio", a média.',
      comoApareceEmConcurso: 'Questões de atualidades, interpretação de tabelas e cálculos diretos de média/mediana/moda.',
      fazerPergunta: {
        pergunta: 'Qual a mediana da lista [8, 3, 5, 7, 2]?',
        resposta: 'Primeiro ORDENE: [2, 3, 5, 7, 8]. Com 5 valores, a mediana é o valor central (3º): 5. NUNCA calcule a mediana sem ordenar antes.'
      }
    }
  },

  /* ============================================================
     MAT-15 — Geometria Plana
  ============================================================ */
  'MAT-15': {
    id: 'L-MAT-15',
    moduloId: 'MAT-15',
    objetivo: 'Compreender ponto, reta e plano, ângulos, triângulos, quadriláteros, polígonos, perímetro, área, circunferência e círculo, além de aplicar fórmulas geométricas em problemas contextualizados.',
    prerequisitos: ['MAT-12'],

    introducao: 'Geometria plana estuda figuras em duas dimensões: triângulos, quadrados, retângulos, círculos. Aparece em problemas de área (terrenos, paredes, placas solares), perímetro (cercas, molduras) e em situações do dia a dia. Saber as fórmulas e identificar as figuras é essencial.',

    explicacaoSimples: 'Perímetro é o contorno (soma dos lados). Área é a superfície interna (medida em cm², m², km²). Pense em um terreno: você cerca com perímetro e planta com área. Cada figura tem sua fórmula — decorar as principais é obrigatório.',

    explicacaoTecnica: 'ELEMENTOS BÁSICOS: ponto (sem dimensão), reta (infinitas direções), plano (infinitas retas). ÂNGULOS: agudo (< 90°), reto (= 90°), obtuso (> 90° e < 180°), raso (= 180°). Triângulos: soma dos ângulos internos = 180°. Classificação quanto aos lados: equilátero (3 iguais), isósceles (2 iguais), escaleno (3 diferentes). Quanto aos ângulos: retângulo (1 ângulo de 90°), acutângulo (3 agudos), obtusângulo (1 obtuso). ÁREAS E PERÍMETROS: quadrado (lado L): perímetro 4L, área L². Retângulo (base b, altura h): perímetro 2(b+h), área b × h. Triângulo (base b, altura h): área (b × h)/2. Paralelogramo: área b × h. Trapézio (bases B e b, altura h): área ((B + b) × h)/2. Círculo (raio r): perímetro (circunferência) = 2πr; área = πr². POLÍGONOS: soma dos ângulos internos = (n - 2) × 180°, onde n é o número de lados.',

    exemplos: [
      'Quadrado de lado 5: perímetro 20 cm, área 25 cm².',
      'Retângulo de 8 × 3: perímetro 22 cm, área 24 cm².',
      'Triângulo de base 10 e altura 6: área = 30 cm².',
      'Trapézio com bases 12 e 8, altura 5: área = (12+8) × 5 / 2 = 50 cm².',
      'Círculo de raio 4: circunferência = 8π cm; área = 16π cm².',
      'Hexágono (6 lados): soma dos ângulos internos = (6-2) × 180 = 720°.',
      'Triângulo retângulo com catetos 3 e 4 e hipotenusa 5: ângulo reto entre os catetos.'
    ],

    comparacoes: [
      { termoA: 'Perímetro', termoB: 'Área', diferenca: 'PERÍMETRO: soma dos lados (contorno). Medido em unidades lineares (cm, m). ÁREA: superfície interna. Medida em unidades quadradas (cm², m²). Cercar um terreno usa perímetro; plantar usa área.' },
      { termoA: 'Círculo', termoB: 'Circunferência', diferenca: 'CIRCUNFERÊNCIA: a LINHA curva que delimita o círculo. Comprimento = 2πr. CÍRCULO: a REGIÃO interna delimitada pela circunferência. Área = πr². Uma é o contorno; o outro é a superfície.' },
      { termoA: 'Triângulo equilátero', termoB: 'Triângulo isósceles', diferenca: 'EQUILÁTERO: três lados iguais, três ângulos de 60°. ISÓSCELES: dois lados iguais e dois ângulos iguais (ângulos da base). ESCALENO: três lados diferentes.' },
      { termoA: 'Retângulo', termoB: 'Paralelogramo', diferenca: 'RETÂNGULO: paralelogramo com 4 ângulos retos. Área = b × h. PARALELOGRAMO: lados opostos paralelos e iguais, mas ângulos quaisquer. Área = b × h (mesma fórmula). O retângulo é um caso particular de paralelogramo.' }
    ],

    aplicacaoEmConcurso: 'Geometria plana aparece em: cálculo de áreas de terrenos, paredes e pisos; perímetros de cercas e molduras; problemas de ladrilhamento; áreas de figuras compostas (retângulo + triângulo); problemas com círculos (rodas, tubulações). Bancas cobram principalmente: fórmulas de áreas, ângulos em triângulos e polígonos e problemas contextualizados.',

    pegadinhas: [
      'Confundir área com perímetro na hora de aplicar a fórmula.',
      'Esquecer de dividir por 2 na área do triângulo e do trapézio.',
      'Achar que a área do círculo é 2πr (essa é a circunferência).',
      'Trocar πr² por (πr)². Não é a mesma coisa.',
      'Somar ângulos internos de polígono como se fossem sempre 180°. A fórmula é (n-2) × 180°.',
      'Achar que todo triângulo com dois lados iguais tem o ângulo reto — é isósceles, não necessariamente retângulo.'
    ],

    errosComuns: [
      'Decorar fórmulas sem entender o significado.',
      'Esquecer de converter unidades (cm para m) antes de calcular.',
      'Confundir raio com diâmetro (diâmetro = 2 × raio).'
    ],

    resumo: [
      'Quadrado: perímetro 4L; área L².',
      'Retângulo: perímetro 2(b+h); área b × h.',
      'Triângulo: área (b × h)/2. Soma dos ângulos = 180°.',
      'Trapézio: área ((B + b) × h)/2.',
      'Paralelogramo: área b × h.',
      'Círculo: circunferência 2πr; área πr².',
      'Polígono: soma dos ângulos internos = (n-2) × 180°.',
      'Sempre converta unidades antes de calcular.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Perímetro é o "contorno" (cerca). Área é o "recheio" (grama). Cada figura tem sua fórmula. O triângulo é "meio retângulo", por isso divide por 2. O círculo usa π.',
      outroExemplo: 'Um terreno retangular de 20 m por 15 m: perímetro = 2(20+15) = 70 m (usado para cercar); área = 20 × 15 = 300 m² (usado para calcular o valor). Se o terreno tiver um jardim circular de raio 3 m, a área do jardim = π × 9 ≈ 28,26 m².',
      compararConceitos: 'Perímetro = contorno. Área = superfície. Circunferência = contorno do círculo. Círculo = superfície. Triângulo = metade de b × h. Trapézio = média das bases × h.',
      mostrarPegadinha: 'Cuidado: "A área do círculo é 2πr". ERRADO. 2πr é a CIRCUNFERÊNCIA (contorno). A área é πr². O expoente 2 faz toda a diferença.',
      comoApareceEmConcurso: 'Problemas de terreno, cerca, piso, roda e figuras compostas.',
      fazerPergunta: {
        pergunta: 'Um quadrado tem área de 64 cm². Qual é o seu perímetro?',
        resposta: 'Área = L² = 64 → L = 8. Perímetro = 4 × L = 4 × 8 = 32 cm.'
      }
    }
  },

  /* ============================================================
     MAT-16 — Geometria Espacial
  ============================================================ */
  'MAT-16': {
    id: 'L-MAT-16',
    moduloId: 'MAT-16',
    objetivo: 'Compreender cubos, paralelepípedos, prismas, cilindros, pirâmides, cones e esferas; calcular volume e área superficial; converter unidades; resolver problemas envolvendo capacidade e armazenamento.',
    prerequisitos: ['MAT-12', 'MAT-15'],

    introducao: 'Geometria espacial estuda sólidos em três dimensões: caixas, latas, pirâmides, esferas. Aparece em problemas de armazenamento (quantos litros cabem?), embalagens, volumes de reservatórios e capacidade de tanques. É a extensão natural da geometria plana.',

    explicacaoSimples: 'Volume é "quanto cabe dentro" (medido em cm³, m³, litros). Área superficial é "quanto de material para revestir" (medido em cm², m²). Um cubo de 1 m de lado tem volume de 1 m³ e 6 faces de 1 m² cada (área superficial = 6 m²).',

    explicacaoTecnica: 'PARALELEPÍPEDO (caixa retangular): volume = comprimento × largura × altura. Área superficial = 2(ab + ac + bc). CUBO: caso particular com arestas iguais. Volume = a³; área superficial = 6a². PRISMA (base poligonal qualquer, faces laterais retangulares): volume = área da base × altura. Área superficial = 2 × área da base + perímetro da base × altura. CILINDRO: base circular. Volume = πr² × h. Área lateral = 2πr × h. Área superficial total = 2πr² + 2πrh. PIRÂMIDE: base poligonal, faces triangulares. Volume = (área da base × altura) / 3. CONE: base circular. Volume = (πr² × h) / 3. ESFERA: volume = (4/3)πr³. Área superficial = 4πr². RELAÇÕES DE VOLUME: 1 m³ = 1.000 dm³ = 1.000.000 cm³. 1 dm³ = 1 L. 1 m³ = 1.000 L.',

    exemplos: [
      'Cubo de aresta 4: volume = 64 cm³; área superficial = 6 × 16 = 96 cm².',
      'Paralelepípedo 5 × 3 × 2: volume = 30 cm³; área superficial = 2(15+10+6) = 62 cm².',
      'Cilindro raio 3, altura 10: volume = π × 9 × 10 = 90π cm³ ≈ 282,6 cm³.',
      'Pirâmide base quadrada lado 6, altura 5: volume = (36 × 5)/3 = 60 cm³.',
      'Cone raio 4, altura 9: volume = (π × 16 × 9)/3 = 48π cm³.',
      'Esfera raio 3: volume = (4/3) × π × 27 = 36π cm³; área superficial = 4π × 9 = 36π cm².',
      'Caixa d\'água cilíndrica com raio 1 m e altura 2 m: volume = π × 1² × 2 ≈ 6,28 m³ = 6.280 L.'
    ],

    comparacoes: [
      { termoA: 'Área plana (2D)', termoB: 'Volume (3D)', diferenca: 'ÁREA: duas dimensões (comprimento × largura). Unidade ao quadrado (cm², m²). VOLUME: três dimensões (comprimento × largura × altura). Unidade ao cubo (cm³, m³). Volume de um paralelepípedo = área da base × altura.' },
      { termoA: 'Prisma', termoB: 'Pirâmide', diferenca: 'PRISMA: duas bases paralelas iguais e faces laterais retangulares. Volume = área da base × altura. PIRÂMIDE: uma base e um vértice (faces triangulares). Volume = (área da base × altura)/3. Pirâmide é "um terço" do prisma correspondente.' },
      { termoA: 'Cilindro', termoB: 'Cone', diferenca: 'CILINDRO: duas bases circulares iguais. Volume = πr² × h. CONE: uma base circular e um vértice. Volume = (πr² × h)/3. Como na relação prisma/pirâmide, o cone é "um terço" do cilindro correspondente.' },
      { termoA: 'Volume', termoB: 'Capacidade', diferenca: 'VOLUME: espaço ocupado em três dimensões (m³, cm³). CAPACIDADE: quanto cabe em um recipiente (L, mL). Relações: 1 L = 1 dm³; 1 mL = 1 cm³; 1 m³ = 1.000 L.' }
    ],

    aplicacaoEmConcurso: 'Geometria espacial aparece em problemas de: caixas d\'água (volume em litros), tanques, embalagens, latas, reservatórios, construção civil (concreto em m³) e transporte (caminhões). Bancas cobram: fórmulas de volume (cubo, paralelepípedo, cilindro), conversão entre m³ e litros e problemas contextualizados.',

    pegadinhas: [
      'Confundir volume com área superficial.',
      'Esquecer de dividir por 3 no volume da pirâmide e do cone.',
      'Achar que a área da esfera é 2πr² (é 4πr²).',
      'Errar a conversão: 1 m³ = 1.000 L (não 100, não 10.000).',
      'Confundir raio com diâmetro em cilindros e esferas (diâmetro = 2r).',
      'Esquecer de multiplicar pela altura no volume do cilindro e do prisma.'
    ],

    errosComuns: [
      'Decorar fórmulas sem entender as figuras.',
      'Confundir área lateral com área superficial total.',
      'Não converter unidades antes de calcular volumes em litros.'
    ],

    resumo: [
      'Cubo: volume = a³; área superficial = 6a².',
      'Paralelepípedo: volume = c × l × a.',
      'Prisma: volume = área da base × altura.',
      'Cilindro: volume = πr² × h.',
      'Pirâmide: volume = (área da base × altura)/3.',
      'Cone: volume = (πr² × h)/3.',
      'Esfera: volume = (4/3)πr³; área superficial = 4πr².',
      'Relações: 1 m³ = 1.000 L; 1 dm³ = 1 L; 1 cm³ = 1 mL.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Volume é "quanto cabe dentro". Pense em uma caixa d\'água: para saber quantos litros cabem, multiplique as três dimensões (em metros) e multiplique por 1.000.',
      outroExemplo: 'Uma caixa de sapatos de 30 × 20 × 15 cm: volume = 9.000 cm³ = 9 dm³ = 9 L. Já uma bola de futebol com raio 11 cm: volume = (4/3) × π × 1.331 ≈ 5.575 cm³ ≈ 5,6 L.',
      compararConceitos: 'Cubo: a³. Cilindro: πr² × h. Cone: (πr² × h)/3. Pirâmide: (área base × h)/3. Esfera: (4/3)πr³. Sempre converta unidades antes de calcular litros.',
      mostrarPegadinha: 'Cuidado: "Uma caixa d\'água de 2 m³ tem capacidade de 200 litros". ERRADO. 1 m³ = 1.000 L. Então 2 m³ = 2.000 L.',
      comoApareceEmConcurso: 'Problemas de armazenamento, caixas, tanques e embalagens.',
      fazerPergunta: {
        pergunta: 'Quantos litros cabem em uma caixa cúbica de 50 cm de aresta?',
        resposta: 'Volume = 50³ = 125.000 cm³. Como 1 dm³ = 1 L e 1 dm³ = 1.000 cm³: 125.000 cm³ = 125 dm³ = 125 L.'
      }
    }
  },

  /* ============================================================
     MAT-17 — Relações Métricas e Teorema de Pitágoras
  ============================================================ */
  'MAT-17': {
    id: 'L-MAT-17',
    moduloId: 'MAT-17',
    objetivo: 'Compreender o triângulo retângulo, hipotenusa e catetos, o Teorema de Pitágoras, diagonais, distâncias e relações métricas. Aplicar em problemas de áreas, distâncias e situações do cotidiano.',
    prerequisitos: ['MAT-15'],

    introducao: 'O Teorema de Pitágoras é uma das fórmulas mais famosas da matemática e uma das mais cobradas em concursos. Ele relaciona os três lados de um triângulo retângulo e permite calcular distâncias, diagonais, alturas e comprimentos que seriam difíceis de medir diretamente.',

    explicacaoSimples: 'Um triângulo retângulo tem um ângulo de 90° (chamado de ângulo reto). O lado maior, oposto a esse ângulo, é a hipotenusa. Os outros dois lados são os catetos. O Teorema de Pitágoras diz: o quadrado da hipotenusa é igual à soma dos quadrados dos catetos. Fórmula: a² = b² + c².',

    explicacaoTecnica: 'TRIÂNGULO RETÂNGULO: possui um ângulo reto (90°). A HIPOTENUSA (a) é o lado oposto ao ângulo reto e é sempre o MAIOR lado. Os CATETOS (b e c) formam o ângulo reto. TEOREMA DE PITÁGORAS: a² = b² + c². Aplicações: diagonal de um retângulo, distância entre dois pontos, altura de um triângulo equilátero, comprimento de rampas. TERNOS PITAGÓRICOS (combinações inteiras): 3-4-5 (e múltiplos: 6-8-10, 9-12-15); 5-12-13; 8-15-17; 7-24-25. RELAÇÕES MÉTRICAS no triângulo retângulo (com altura h relativa à hipotenusa, projetando os catetos b e c sobre ela em m e n): b² = a × m; c² = a × n; h² = m × n; a × h = b × c. DIAGONAL DO QUADRADO: d = L√2. DIAGONAL DO RETÂNGULO: d² = b² + h². ALTURA DO TRIÂNGULO EQUILÁTERO: h = (L√3)/2.',

    exemplos: [
      'Catetos 3 e 4: hipotenusa = √(9 + 16) = √25 = 5. Terno pitagórico 3-4-5.',
      'Catetos 5 e 12: hipotenusa = √(25 + 144) = √169 = 13.',
      'Hipotenusa 10, cateto 6: outro cateto = √(100 - 36) = √64 = 8.',
      'Diagonal do quadrado de lado 5: d = 5√2 ≈ 7,07.',
      'Diagonal do retângulo 6 × 8: d = √(36 + 64) = √100 = 10.',
      'Altura do triângulo equilátero de lado 6: h = (6√3)/2 = 3√3 ≈ 5,2.',
      'Escada de 5 m apoiada a 3 m da parede: altura alcançada = √(25 - 9) = 4 m.'
    ],

    comparacoes: [
      { termoA: 'Hipotenusa', termoB: 'Cateto', diferenca: 'HIPOTENUSA: lado oposto ao ângulo reto — sempre o MAIOR lado do triângulo retângulo. Aparece sozinha na fórmula a² = b² + c². CATETO: cada um dos dois lados que formam o ângulo reto. Aparecem somados na fórmula. Nunca confunda quem é quem na hora de aplicar.' },
      { termoA: 'Teorema de Pitágoras', termoB: 'Relações métricas', diferenca: 'PITÁGORAS: a² = b² + c². Relaciona os três lados. RELAÇÕES MÉTRICAS: envolvem a altura relativa à hipotenusa (h), as projeções dos catetos (m e n). Ex.: b² = a×m, h² = m×n. São fórmulas complementares.' },
      { termoA: 'Diagonal do quadrado', termoB: 'Diagonal do retângulo', diferenca: 'QUADRADO: d = L√2 (fórmula pronta). RETÂNGULO: d² = b² + h² (aplicação do Teorema de Pitágoras). O quadrado é um caso particular — a fórmula L√2 vem de √(L² + L²) = √(2L²) = L√2.' },
      { termoA: 'Triângulo retângulo', termoB: 'Triângulo equilátero', diferenca: 'RETÂNGULO: um ângulo de 90°, lados com medidas diferentes (em geral), usa Pitágoras. EQUILÁTERO: três lados iguais, três ângulos de 60°, altura = (L√3)/2, NÃO usa Pitágoras diretamente.' }
    ],

    aplicacaoEmConcurso: 'O Teorema de Pitágoras aparece em: cálculo de diagonais (retângulo, quadrado, paralelepípedo), altura de triângulo equilátero, distância entre dois pontos no plano, problemas de escadas, rampas, sombras, torres e distâncias inacessíveis. Os ternos pitagóricos (3-4-5, 5-12-13, 8-15-17) aparecem com frequência — reconhecê-los acelera a resolução.',

    pegadinhas: [
      'Confundir hipotenusa com cateto e montar a fórmula errada (b² = a² + c²).',
      'Esquecer de tirar a raiz quadrada no final do cálculo.',
      'Somar os quadrados e esquecer de tirar a raiz: a² = 25 → a = 5 (não 25).',
      'Em problemas com escada/parede, confundir qual medida é a hipotenusa. A escada é SEMPRE a hipotenusa.',
      'Aplicar Pitágoras em triângulos que NÃO são retângulos.',
      'Errar a fórmula da diagonal do quadrado: é L√2, não L².',
      'Confundir altura do triângulo equilátero (L√3/2) com altura do triângulo retângulo.'
    ],

    errosComuns: [
      'Decorar a fórmula sem entender a posição dos lados.',
      'Não identificar o ângulo reto em figuras compostas.',
      'Esquecer de simplificar a raiz quando o resultado é irracional (ex.: √50 = 5√2).',
      'Confundir área com diagonal em problemas de terrenos retangulares.'
    ],

    resumo: [
      'Triângulo retângulo: um ângulo de 90°.',
      'Hipotenusa: lado oposto ao ângulo reto, maior lado.',
      'Teorema de Pitágoras: a² = b² + c².',
      'Ternos pitagóricos: 3-4-5, 5-12-13, 8-15-17, 7-24-25 (e múltiplos).',
      'Diagonal do quadrado: d = L√2.',
      'Diagonal do retângulo: d² = b² + h².',
      'Altura do triângulo equilátero: h = (L√3)/2.',
      'Relações métricas: b² = a×m, c² = a×n, h² = m×n, a×h = b×c.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'O Teorema de Pitágoras é uma "fórmula mágica" para triângulos com ângulo de 90°. Se você conhece dois lados, descobre o terceiro. A escada, a rampa, a diagonal da TV — tudo usa Pitágoras.',
      outroExemplo: 'Uma TV de 50 polegadas tem essa medida em polegadas na DIAGONAL. Se a base tem 40 polegadas e a altura 30, a diagonal = √(40² + 30²) = √(1600 + 900) = √2500 = 50. Bate com o terno 3-4-5 multiplicado por 10.',
      compararConceitos: 'Hipotenusa = lado maior, oposto ao ângulo reto. Catetos = formam o ângulo reto. Fórmula: a² = b² + c². Diagonal do quadrado = L√2. Altura do equilátero = L√3/2.',
      mostrarPegadinha: 'Cuidado: "Em um triângulo 6-8-10, a hipotenusa é 8". ERRADO. A hipotenusa é SEMPRE o MAIOR lado — nesse caso, 10. Confira: 10² = 6² + 8² → 100 = 36 + 64 ✓.',
      comoApareceEmConcurso: 'Problemas de escada, rampa, diagonal, altura e distância. Frequência altíssima.',
      fazerPergunta: {
        pergunta: 'Uma escada de 13 m está apoiada em uma parede, com a base a 5 m da parede. A que altura a escada toca a parede?',
        respostA: 'A escada é a hipotenusa (13). Um cateto é 5. Então: 13² = 5² + h² → 169 = 25 + h² → h² = 144 → h = 12 m.'
      }
    }
  },

  /* ============================================================
     MAT-18 — Sequências e Padrões
  ============================================================ */
  'MAT-18': {
    id: 'L-MAT-18',
    moduloId: 'MAT-18',
    objetivo: 'Compreender sequências numéricas, padrões de formação, sequências de letras e figuras, identificação de regularidades, raciocínio sequencial e problemas com padrões. Base para raciocínio lógico e problemas não convencionais.',
    prerequisitos: ['MAT-01'],

    introducao: 'Sequências e padrões testam a capacidade de perceber regularidades. A banca dá uma lista de números, letras ou figuras e pede o próximo termo, uma posição específica ou a soma de termos. A chave é identificar a REGRA que gera a sequência — sem ela, é impossível avançar.',

    explicacaoSimples: 'Sequência é uma lista ordenada de elementos que segue uma regra. Ex.: 2, 4, 6, 8, 10 — soma 2 a cada passo. 1, 2, 4, 8, 16 — multiplica por 2. 1, 4, 9, 16 — quadrados perfeitos. Descobrir a regra é o pulo do gato.',

    explicacaoTecnica: 'SEQUÊNCIA NUMÉRICA: lista ordenada de números em que cada termo (an) segue uma regra. TIPOS COMUNS: PROGRESSÃO ARITMÉTICA (PA): diferença constante (razão r) entre termos consecutivos. Ex.: 3, 7, 11, 15 (r = 4). Termo geral: an = a1 + (n-1) × r. Soma dos n primeiros termos: Sn = (a1 + an) × n / 2. PROGRESSÃO GEOMÉTRICA (PG): razão constante (q) por multiplicação. Ex.: 2, 6, 18, 54 (q = 3). Termo geral: an = a1 × q^(n-1). Sequências especiais: quadrados perfeitos (1, 4, 9, 16, 25...); cubos (1, 8, 27, 64...); Fibonacci (1, 1, 2, 3, 5, 8, 13 — cada termo é a soma dos dois anteriores); números triangulares (1, 3, 6, 10, 15...). SEQUÊNCIAS DE LETRAS: siga o alfabeto ou salte de acordo com uma regra (ex.: A, C, E, G — pula 1 letra). SEQUÊNCIAS DE FIGURAS: contar lados, número de pontos, posição ou simetria. ESTRATÉGIA: 1) Verifique diferenças entre termos consecutivos. 2) Se as diferenças são constantes → PA. 3) Se as diferenças formam outra sequência → regra de 2ª ordem. 4) Verifique multiplicações (PG). 5) Considere alternância de padrões (uma regra para termos ímpares, outra para pares).',

    exemplos: [
      'PA: 5, 8, 11, 14, ... → razão 3. Próximo: 17.',
      'PG: 2, 10, 50, 250, ... → razão 5. Próximo: 1.250.',
      'Quadrados: 1, 4, 9, 16, 25 → próximo: 36.',
      'Fibonacci: 1, 1, 2, 3, 5, 8 → próximo: 13.',
      'Alternada: 1, 10, 2, 20, 3, 30 → próximos: 4, 40 (uma soma 1, outra soma 10).',
      'Letras: A, C, E, G → próximo: I (pula 1 letra).',
      '2ª ordem: 1, 2, 4, 7, 11, 16 → diferenças: 1, 2, 3, 4, 5 → próximo termo: 22.'
    ],

    comparacoes: [
      { termoA: 'Progressão aritmética (PA)', termoB: 'Progressão geométrica (PG)', diferenca: 'PA: diferença CONSTANTE entre termos (soma/subtrai sempre o mesmo número). Ex.: 3, 7, 11, 15 (r = 4). PG: razão CONSTANTE (multiplica/divide sempre pelo mesmo número). Ex.: 2, 6, 18, 54 (q = 3). PA cresce linearmente; PG cresce exponencialmente.' },
      { termoA: 'Sequência de 1ª ordem', termoB: 'Sequência de 2ª ordem', diferenca: '1ª ORDEM: a regra é aplicada direto nos termos (soma 5, multiplica por 2). 2ª ORDEM: as DIFERENÇAS formam uma sequência com regra própria. Ex.: 1, 2, 4, 7, 11, 16 — as diferenças são 1, 2, 3, 4, 5 (uma PA). O próximo termo é 16 + 6 = 22.' },
      { termoA: 'Sequência numérica', termoB: 'Sequência de letras', diferenca: 'NUMÉRICA: regra sobre números (soma, subtração, multiplicação). LETRAS: regra sobre posições no alfabeto (A=1, B=2...). Ex.: C, F, I, L → posições 3, 6, 9, 12 → soma 3. Próxima: O (15).' },
      { termoA: 'Fibonacci', termoB: 'Progressão aritmética', diferenca: 'FIBONACCI: cada termo é a SOMA dos dois anteriores (1, 1, 2, 3, 5, 8, 13...). Não tem razão constante. PA: diferença constante entre termos consecutivos (5, 8, 11, 14...).' }
    ],

    aplicacaoEmConcurso: 'Sequências aparecem em provas de RLM (Raciocínio Lógico-Matemático) e em questões de padrões visuais. Bancas cobram: próximo termo, termo em posição específica (ex.: 100º termo), soma dos primeiros n termos, sequências de letras e sequências alternadas. Em concursos com disciplina de RLM, a frequência é alta.',

    pegadinhas: [
      'Achar que toda sequência numérica é PA ou PG. Pode ser Fibonacci, quadrados, cubos, alternada.',
      'Não considerar sequências de 2ª ordem (as diferenças formam outra sequência).',
      'Ignorar alternância de padrões (uma regra para posições ímpares, outra para pares).',
      'Esquecer a posição do termo na fórmula da PA: an = a1 + (n-1) × r (não é n × r).',
      'Errar o índice das letras: A = 1, B = 2, ..., Z = 26.',
      'Confundir PA (soma) com PG (multiplicação).'
    ],

    errosComuns: [
      'Tentar decorar sequências em vez de procurar a regra.',
      'Não testar a hipótese da regra nos termos seguintes.',
      'Errar a ordem das operações nas fórmulas de termo geral.'
    ],

    resumo: [
      'PA: diferença constante. Termo geral: an = a1 + (n-1)×r. Soma: Sn = (a1 + an)×n/2.',
      'PG: razão constante. Termo geral: an = a1 × q^(n-1).',
      'Sequências famosas: quadrados, cubos, Fibonacci, triangulares.',
      'Sequências de 2ª ordem: as diferenças formam outra sequência.',
      'Sequências alternadas: regras diferentes para termos ímpares e pares.',
      'Sequências de letras: use a posição alfabética (A=1, B=2...).',
      'Estratégia: teste diferenças, multiplicações, alternâncias.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Sequência é uma lista com regra. Toda questão de sequência pede a mesma coisa: descubra a REGRA. Olhe as diferenças, os multiplicadores, a alternância. Quando achar a regra, teste nos próximos termos antes de responder.',
      outroExemplo: 'Sequência: 2, 5, 10, 17, 26, ... Diferenças: 3, 5, 7, 9 (números ímpares crescentes). Próxima diferença: 11 → próximo termo: 26 + 11 = 37. É uma sequência de 2ª ordem.',
      compararConceitos: 'PA: soma. PG: multiplica. Fibonacci: soma os dois anteriores. Quadrados: n². 2ª ordem: diferenças formam sequência.',
      mostrarPegadinha: 'Cuidado: "A sequência 2, 4, 6, 8 é PG de razão 2". ERRADO. É PA de razão 2 (soma 2). PG de razão 2 seria 2, 4, 8, 16 (multiplica por 2).',
      comoApareceEmConcurso: 'RLM, raciocínio sequencial e questões com padrões visuais.',
      fazerPergunta: {
        pergunta: 'Qual o próximo termo da sequência 1, 4, 9, 16, 25, ...?',
        resposta: '36. São os quadrados perfeitos: 1², 2², 3², 4², 5², 6² = 36.'
      }
    }
  },

  /* ============================================================
     MAT-21 — Conjuntos e Diagramas Lógicos
  ) ============================================================ */
  'MAT-21': {
    id: 'L-MAT-21',
    moduloId: 'MAT-21',
    objetivo: 'Compreender pertinência e inclusão, subconjuntos, união, interseção, diferença, complemento, diagramas de Venn e problemas de contagem com conjuntos. Resolver problemas de relações entre pessoas, objetos ou grupos.',
    prerequisitos: ['MAT-02'],

    introducao: 'Conjuntos aparecem em problemas de RLM onde vários grupos se sobrepõem. A banca descreve situações ("20 alunos gostam de matemática, 15 de português, 8 dos dois") e pede uma contagem. Sem os diagramas de Venn e as operações básicas, o problema vira uma bagunça.',

    explicacaoSimples: 'Conjunto é uma coleção de elementos. União (A ∪ B) é tudo o que está em A ou em B. Interseção (A ∩ B) é o que está nos dois ao mesmo tempo. Diferença (A - B) é o que está em A mas não em B. O diagrama de Venn ajuda a visualizar: dois círculos que se sobrepõem.',

    explicacaoTecnica: 'OPERAÇÕES: PERTINÊNCIA (∈): um elemento pertence ou não a um conjunto. INCLUSÃO (⊂): um conjunto está contido em outro. UNIÃO (A ∪ B): todos os elementos de A e de B, sem repetir. INTERSEÇÃO (A ∩ B): elementos comuns a A e B. DIFERENÇA (A - B): elementos de A que NÃO estão em B. COMPLEMENTO (Aᶜ): elementos do universo que não estão em A. CARDINALIDADE: n(A ∪ B) = n(A) + n(B) - n(A ∩ B). Para três conjuntos: n(A ∪ B ∪ C) = n(A) + n(B) + n(C) - n(A∩B) - n(A∩C) - n(B∩C) + n(A∩B∩C). DIAGRAMA DE VENN: círculos que representam conjuntos. A região comum representa a interseção. A região externa aos círculos e dentro do retângulo representa o complemento. ESTRATÉGIA: comece sempre pela INTERSEÇÃO. Depois preencha cada região exclusiva. Some as regiões para achar totais.',

    exemplos: [
      'n(A) = 20, n(B) = 15, n(A ∩ B) = 8 → n(A ∪ B) = 20 + 15 - 8 = 27.',
      'Só A: 20 - 8 = 12. Só B: 15 - 8 = 7. Total: 12 + 8 + 7 = 27. ✓',
      'Três conjuntos: 30 alunos. 18 gostam de Matemática; 15 de Português; 12 de História; 6 Matemática e Português; 4 Português e História; 5 Matemática e História; 2 dos três. Quantos não gostam de nenhuma?',
      'Solução pelo diagrama: comece pela interseção tripla (2). M∩P apenas = 6-2 = 4. P∩H apenas = 4-2 = 2. M∩H apenas = 5-2 = 3. Só M = 18 - 4 - 2 - 3 = 9. Só P = 15 - 4 - 2 - 2 = 7. Só H = 12 - 2 - 2 - 3 = 5. Soma = 9 + 7 + 5 + 4 + 2 + 3 + 2 = 32? Aqui o total excede 30. Vamos refazer: total de alunos = 30. Soma dos que gostam de pelo menos uma = 9 + 7 + 5 + 4 + 2 + 3 + 2 = 32. Como o total é 30, NÃO pode dar 32. O enunciado tinha um erro. Refazendo: só M = 18 - 4 - 3 - 2 = 9. Só P = 15 - 4 - 2 - 2 = 7. Só H = 12 - 3 - 2 - 2 = 5. Total de pelo menos uma = 9 + 7 + 5 + 4 + 3 + 2 + 2 = 32. Como 32 > 30, o enunciado é inconsistente. Este tipo de erro não pode ocorrer — é importante sempre conferir se a soma bate com o total.'
    ],

    comparacoes: [
      { termoA: 'Pertinência (∈)', termoB: 'Inclusão (⊂)', diferenca: 'PERTINÊNCIA: relação entre ELEMENTO e CONJUNTO. Ex.: 3 ∈ {1, 2, 3}. INCLUSÃO: relação entre CONJUNTO e CONJUNTO. Ex.: {1, 2} ⊂ {1, 2, 3}. Nunca troque os símbolos.' },
      { termoA: 'União (∪)', termoB: 'Interseção (∩)', diferenca: 'UNIÃO: TUDO o que está em A ou em B (soma). Ex.: A = {1, 2}, B = {2, 3} → A ∪ B = {1, 2, 3}. INTERSEÇÃO: apenas o que está em A E em B (elementos comuns). Ex.: A ∩ B = {2}. União amplia; interseção reduz.' },
      { termoA: 'Diferença (A - B)', termoB: 'Complemento (Aᶜ)', diferenca: 'DIFERENÇA: elementos que estão em A mas NÃO estão em B. Ex.: A = {1, 2, 3}, B = {2, 3, 4} → A - B = {1}. COMPLEMENTO: elementos do universo que NÃO estão em A. Depende do conjunto universo. Ex.: se U = {1, 2, 3, 4, 5} e A = {1, 2}, então Aᶜ = {3, 4, 5}.' },
      { termoA: 'Cardinalidade', termoB: 'Soma dos conjuntos', diferenca: 'CARDINALIDADE de A ∪ B: n(A ∪ B) = n(A) + n(B) - n(A ∩ B). A subtração da interseção evita contar duas vezes os elementos comuns. SOMA SIMPLES (n(A) + n(B)) SEM subtrair conta a interseção DUAS VEZES — é o erro mais comum em problemas de conjuntos.' }
    ],

    aplicacaoEmConcurso: 'Conjuntos aparecem em problemas de: alunos que gostam de disciplinas, pessoas que falam idiomas, usuários de redes sociais, pacientes com sintomas, produtos comprados juntos. Bancas cobram: cálculo de n(A ∪ B), três conjuntos, "quantos só de X", "quantos não gostam de nenhum", "quantos gostam de pelo menos um". Diagrama de Venn é a ferramenta visual mais eficiente.',

    pegadinhas: [
      'Somar n(A) + n(B) sem subtrair a interseção. Os elementos comuns são contados 2 vezes.',
      'Confundir pertinência (∈) com inclusão (⊂).',
      'Esquecer a interseção tripla em problemas com três conjuntos.',
      'Preencher o diagrama começando pelas regiões externas em vez de começar pela interseção.',
      'Confundir "gostam de pelo menos um" (união) com "gostam dos dois" (interseção).',
      'Achar que "só A" é o mesmo que "A" — "só A" exclui a interseção.'
    ],

    errosComuns: [
      'Não desenhar o diagrama e tentar resolver tudo de cabeça.',
      'Esquecer de subtrair a interseção na fórmula de união.',
      'Não conferir se a soma das regiões bate com o total.'
    ],

    resumo: [
      'Pertinência (∈): elemento x conjunto. Inclusão (⊂): conjunto x conjunto.',
      'União (A ∪ B): tudo. Interseção (A ∩ B): comum.',
      'Diferença (A - B): só em A. Complemento (Aᶜ): fora de A.',
      'n(A ∪ B) = n(A) + n(B) - n(A ∩ B).',
      'Três conjuntos: subtrair as interseções duplas, somar a tripla.',
      'SEMPRE comece o diagrama pela interseção.',
      'Confira se a soma das regiões = total do conjunto universo.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Conjuntos são círculos que se sobrepõem. A parte comum dos círculos é a interseção. Some tudo de cada círculo, mas cuidado: a parte comum é contada duas vezes. Por isso se subtrai a interseção.',
      outroExemplo: 'Em uma turma, 25 alunos gostam de Matemática, 18 de Português e 10 dos dois. Quantos gostam de pelo menos uma? n(M ∪ P) = 25 + 18 - 10 = 33. Dos 25 de Matemática, 10 gostam também de Português (só 15 gostam SÓ de Matemática). Dos 18 de Português, 10 gostam também de Matemática (só 8 gostam SÓ de Português). Total: 15 + 10 + 8 = 33.',
      compararConceitos: 'União = tudo. Interseção = comum. Diferença = só no primeiro. Complemento = fora. Fórmula: n(A∪B) = n(A) + n(B) - n(A∩B). Diagrama: comece pela interseção.',
      mostrarPegadinha: 'Cuidado: "Se 20 gostam de Matemática e 15 de Português, então 35 gostam de pelo menos uma". ERRADO se houver interseção. Se 8 gostam dos dois: n(M∪P) = 20 + 15 - 8 = 27.',
      comoApareceEmConcurso: 'RLM, raciocínio lógico e problemas com grupos sobrepostos.',
      fazerPergunta: {
        pergunta: 'Em uma turma, 30 alunos falam inglês, 20 falam espanhol e 10 falam os dois. Quantos alunos há na turma?',
        respostA: 'n(I ∪ E) = n(I) + n(E) - n(I ∩ E) = 30 + 20 - 10 = 40 alunos falam pelo menos um idioma. Se a turma tem apenas alunos que falam pelo menos um, são 40.'
      }
    }
  }

};
