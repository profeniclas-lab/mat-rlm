/* ============================================================
   MÓDULOS — Matemática e RLM
   Áreas/blocos:
     FUND = Fundamentos Matemáticos (MAT-01 a MAT-05)
     PROP = Proporcionalidade e Álgebra (MAT-06 a MAT-10)
     APLI = Matemática Aplicada (MAT-11 a MAT-14)
     GEO  = Geometria e Matemática Espacial (MAT-15 a MAT-17)
     RLM  = Raciocínio Lógico-Matemático (MAT-18 a MAT-22)
   Prioridades:
     essencial    = MAT-01, MAT-03, MAT-06, MAT-07, MAT-08
     alta         = MAT-02, MAT-04, MAT-05, MAT-09, MAT-11, MAT-12, MAT-13
     media        = MAT-14, MAT-15, MAT-16, MAT-17, MAT-18, MAT-21
     condicional  = MAT-10, MAT-19, MAT-20, MAT-22
   ============================================================ */

window.MODULES = [

  /* ============ BLOCO A — FUNDAMENTOS MATEMÁTICOS ============ */
  {
    id: 'MAT-01',
    area: 'FUND',
    titulo: 'Operações Fundamentais',
    prioridade: 'essencial',
    subtopicos: [
      'Adição',
      'Subtração',
      'Multiplicação',
      'Divisão',
      'Prioridade das operações',
      'Cálculo mental',
      'Estimativas',
      'Problemas matemáticos',
      'Interpretação de enunciados'
    ]
  },
  {
    id: 'MAT-02',
    area: 'FUND',
    titulo: 'Conjuntos Numéricos',
    prioridade: 'alta',
    subtopicos: [
      'Números naturais',
      'Números inteiros',
      'Números racionais',
      'Números irracionais',
      'Números reais',
      'Reta numérica',
      'Módulo',
      'Comparação',
      'Ordenação',
      'Intervalos'
    ]
  },
  {
    id: 'MAT-03',
    area: 'FUND',
    titulo: 'Frações e Números Decimais',
    prioridade: 'essencial',
    subtopicos: [
      'Frações equivalentes',
      'Simplificação',
      'Comparação de frações',
      'Operações com frações',
      'Números mistos',
      'Dízimas periódicas',
      'Conversão entre fração, decimal e porcentagem'
    ]
  },
  {
    id: 'MAT-04',
    area: 'FUND',
    titulo: 'Divisibilidade, MDC e MMC',
    prioridade: 'alta',
    subtopicos: [
      'Critérios de divisibilidade',
      'Números primos',
      'Decomposição em fatores primos',
      'Divisores',
      'Múltiplos',
      'Máximo divisor comum (MDC)',
      'Mínimo múltiplo comum (MMC)'
    ]
  },
  {
    id: 'MAT-05',
    area: 'FUND',
    titulo: 'Potenciação, Radiciação e Expressões Numéricas',
    prioridade: 'alta',
    subtopicos: [
      'Propriedades das potências',
      'Raízes',
      'Expoentes',
      'Expressões com parênteses e colchetes',
      'Ordem das operações',
      'Notação científica'
    ]
  },

  /* ============ BLOCO B — PROPORCIONALIDADE E ÁLGEBRA ============ */
  {
    id: 'MAT-06',
    area: 'PROP',
    titulo: 'Razão, Proporção e Divisão Proporcional',
    prioridade: 'essencial',
    subtopicos: [
      'Razão entre grandezas',
      'Proporções',
      'Propriedade fundamental das proporções',
      'Grandezas diretamente proporcionais',
      'Grandezas inversamente proporcionais',
      'Divisão em partes proporcionais'
    ]
  },
  {
    id: 'MAT-07',
    area: 'PROP',
    titulo: 'Regra de Três Simples e Composta',
    prioridade: 'essencial',
    subtopicos: [
      'Identificação das grandezas',
      'Montagem de tabelas',
      'Regra de três direta',
      'Regra de três inversa',
      'Regra de três composta',
      'Produtividade, trabalhadores, tempo e quantidade'
    ]
  },
  {
    id: 'MAT-08',
    area: 'PROP',
    titulo: 'Porcentagem',
    prioridade: 'essencial',
    subtopicos: [
      'Cálculo de porcentagens',
      'Fração e decimal equivalentes',
      'Aumentos e descontos',
      'Variação percentual',
      'Porcentagens sucessivas',
      'Comparação de preços',
      'Interpretação de problemas contextualizados'
    ]
  },
  {
    id: 'MAT-09',
    area: 'PROP',
    titulo: 'Expressões Algébricas e Equações do 1º Grau',
    prioridade: 'alta',
    subtopicos: [
      'Variáveis e expressões',
      'Simplificação algébrica',
      'Propriedade distributiva',
      'Equações',
      'Problemas com incógnitas',
      'Tradução de enunciados para equações'
    ]
  },
  {
    id: 'MAT-10',
    area: 'PROP',
    titulo: 'Equações do 2º Grau, Sistemas e Inequações',
    prioridade: 'condicional',
    subtopicos: [
      'Equações quadráticas',
      'Fatoração básica',
      'Sistemas de equações',
      'Métodos de substituição e eliminação',
      'Inequações',
      'Problemas aplicados'
    ]
  },

  /* ============ BLOCO C — MATEMÁTICA APLICADA ============ */
  {
    id: 'MAT-11',
    area: 'APLI',
    titulo: 'Matemática Financeira',
    prioridade: 'alta',
    subtopicos: [
      'Sistema monetário brasileiro',
      'Capital, taxa, tempo, juros e montante',
      'Juros simples',
      'Juros compostos',
      'Descontos',
      'Aumentos sucessivos',
      'Taxas percentuais',
      'Comparação de valores em situações financeiras'
    ]
  },
  {
    id: 'MAT-12',
    area: 'APLI',
    titulo: 'Sistemas de Medidas',
    prioridade: 'alta',
    subtopicos: [
      'Comprimento',
      'Massa',
      'Capacidade',
      'Volume',
      'Área',
      'Tempo',
      'Conversão de unidades',
      'Sistema métrico decimal',
      'Medidas de superfície',
      'Medidas cúbicas',
      'Relações entre litros e unidades de volume'
    ]
  },
  {
    id: 'MAT-13',
    area: 'APLI',
    titulo: 'Interpretação de Tabelas e Gráficos',
    prioridade: 'alta',
    subtopicos: [
      'Tabelas simples',
      'Tabelas de dupla entrada',
      'Gráficos de barras',
      'Gráficos de linhas',
      'Gráficos de setores',
      'Comparação de dados',
      'Variação absoluta e percentual',
      'Identificação de tendências',
      'Interpretação de informações incompletas'
    ]
  },
  {
    id: 'MAT-14',
    area: 'APLI',
    titulo: 'Estatística Básica',
    prioridade: 'media',
    subtopicos: [
      'População e amostra',
      'Frequência absoluta e relativa',
      'Média aritmética simples',
      'Média ponderada',
      'Mediana',
      'Moda',
      'Amplitude',
      'Interpretação de resultados estatísticos'
    ]
  },

  /* ============ BLOCO D — GEOMETRIA E MATEMÁTICA ESPACIAL ============ */
  {
    id: 'MAT-15',
    area: 'GEO',
    titulo: 'Geometria Plana',
    prioridade: 'media',
    subtopicos: [
      'Ponto, reta e plano',
      'Ângulos',
      'Triângulos',
      'Quadriláteros',
      'Polígonos',
      'Perímetro',
      'Área',
      'Circunferência e círculo',
      'Fórmulas geométricas',
      'Problemas contextualizados'
    ]
  },
  {
    id: 'MAT-16',
    area: 'GEO',
    titulo: 'Geometria Espacial',
    prioridade: 'media',
    subtopicos: [
      'Cubos e paralelepípedos',
      'Prismas',
      'Cilindros',
      'Pirâmides',
      'Cones e esferas',
      'Volume',
      'Área superficial',
      'Conversão de unidades',
      'Problemas envolvendo capacidade e armazenamento'
    ]
  },
  {
    id: 'MAT-17',
    area: 'GEO',
    titulo: 'Relações Métricas e Teorema de Pitágoras',
    prioridade: 'media',
    subtopicos: [
      'Triângulo retângulo',
      'Hipotenusa e catetos',
      'Teorema de Pitágoras',
      'Diagonais',
      'Distâncias',
      'Relações métricas',
      'Aplicação em problemas'
    ]
  },

  /* ============ BLOCO E — RACIOCÍNIO LÓGICO-MATEMÁTICO ============ */
  {
    id: 'MAT-18',
    area: 'RLM',
    titulo: 'Sequências e Padrões',
    prioridade: 'media',
    subtopicos: [
      'Sequências numéricas',
      'Padrões de formação',
      'Sequências de letras e figuras',
      'Identificação de regularidades',
      'Raciocínio sequencial',
      'Problemas com padrões'
    ]
  },
  {
    id: 'MAT-19',
    area: 'RLM',
    titulo: 'Lógica Proposicional',
    prioridade: 'condicional',
    subtopicos: [
      'Proposições',
      'Proposições simples e compostas',
      'Valor lógico',
      'Negação',
      'Conectivos',
      'Conjunção',
      'Disjunção',
      'Condicional',
      'Bicondicional',
      'Tabelas-verdade'
    ]
  },
  {
    id: 'MAT-20',
    area: 'RLM',
    titulo: 'Equivalências e Argumentação Lógica',
    prioridade: 'condicional',
    subtopicos: [
      'Equivalências lógicas',
      'Leis de De Morgan',
      'Negação de proposições',
      'Condições necessárias e suficientes',
      'Argumentos',
      'Premissas e conclusões',
      'Validade de argumentos',
      'Inferências e deduções'
    ]
  },
  {
    id: 'MAT-21',
    area: 'RLM',
    titulo: 'Conjuntos e Diagramas Lógicos',
    prioridade: 'media',
    subtopicos: [
      'Pertinência e inclusão',
      'Subconjuntos',
      'União',
      'Interseção',
      'Diferença',
      'Complemento',
      'Diagramas de Venn',
      'Problemas de contagem com conjuntos',
      'Relações entre pessoas, objetos ou grupos'
    ]
  },
  {
    id: 'MAT-22',
    area: 'RLM',
    titulo: 'Análise Combinatória e Probabilidade',
    prioridade: 'condicional',
    subtopicos: [
      'Princípio fundamental da contagem',
      'Princípio multiplicativo',
      'Permutações',
      'Arranjos e combinações',
      'Espaço amostral',
      'Eventos',
      'Probabilidade simples',
      'Casos favoráveis e possíveis',
      'Problemas contextualizados'
    ]
  }

];
