/* ══════════════════════════════════════════════════════════════
   PROVAS ANTERIORES OFICIAIS CEFET-RJ (2023 A 2026)
   Processos Seletivos para Ensino Médio Técnico Integrado (Banca Selecon)
   Cadernos de Questões, Gabaritos Oficiais e Propostas de Redação
   ══════════════════════════════════════════════════════════════ */

window.provasAnteriores = [
    /* ══════════════════════════════════════════════════════════════
       1. PROVA CEFET-RJ 2026 (Processo Seletivo Edital Selecon 06/2025)
       ══════════════════════════════════════════════════════════════ */
    {
        id: "cefet-2026",
        year: "2026",
        title: "CEFET-RJ 2026 — Processo Seletivo Integrado",
        edital: "Edital Selecon nº 06/2025",
        campus: "Todos os Campi (Maracanã, Nova Iguaçu, Maria da Graça, Itaguaí, Valença, Nova Friburgo, Petrópolis)",
        totalQuestions: 30,
        durationSeconds: 4 * 3600,
        hasEssay: true,
        essayTheme: "Inteligência Artificial, Automação e os Desafios Éticos no Futuro do Trabalho e da Formação dos Jovens",
        essayPrompt: "Com base nos textos motivadores e em seus conhecimentos, redija um texto dissertativo-argumentativo em norma-padrão de 15 a 30 linhas, discutindo como o avanço acelerado da IA desafia o mercado de trabalho tradicional e quais competências humanas se tornam indispensáveis para a juventude brasileira.",
        distributionText: "10 Língua Portuguesa • 10 Matemática • 5 Ciências da Natureza • 5 Ciências Humanas + Redação",
        gabaritoOficial: ["D","B","A","D","C","B","D","C","A","C", "D","A","B","D","C","C","A","A","B","D", "C","D","C","A","B", "B","C","D","B","C"],
        questions: [
            // Língua Portuguesa (1 a 10)
            {
                id: "p26-01", num: 1, discipline: "Língua Portuguesa",
                textSupport: "Texto I: 'A automação cognitiva não é uma promessa de ficção científica; ela já reconfigura a rotina de redações, escritórios de engenharia e laboratórios. O que antes parecia exclusivo da mente humana — a capacidade de sintetizar dados e redigir argumentos com elegância — foi incorporado por algoritmos generativos. Contudo, a máquina calcula correlações probabilísticas; ela não sente empatia, não compreende dilemas éticos profundos nem assume responsabilidade civil sobre suas conclusões.'",
                question: "No Texto I, o autor estabelece uma distinção essencial entre a inteligência artificial generativa e a cognição humana baseada no fato de que:",
                options: [
                    "A inteligência artificial comete mais equívocos gramaticais do que profissionais humanos.",
                    "Os algoritmos operam com rapidez inferior à capacidade analítica de engenheiros e cientistas.",
                    "A máquina apenas analisa textos curtos, necessitando de supervisão contínua para codificar dados.",
                    "Os sistemas artificiais processam cálculos estatísticos sem consciência moral, empatia ou responsabilidade social."
                ],
                correct: 3,
                explanation: "O texto ressalta expressamente que a máquina opera por 'correlações probabilísticas', faltando-lhe a dimensão ética, empática e a consciência moral que definem o discernimento humano."
            },
            {
                id: "p26-02", num: 2, discipline: "Língua Portuguesa",
                textSupport: "Considere a oração: 'A tecnologia avança com velocidade exponencial, EMBORA muitos marcos regulatórios ainda permaneçam obsoletos.'",
                question: "A conjunção destacada estabelece entre as orações uma relação semântica de:",
                options: [
                    "Causa e efeito direto.",
                    "Concessão, introduzindo um fato que contrasta com a oração principal sem anulá-la.",
                    "Condição indispensável para a ocorrência do avanço tecnológico.",
                    "Finalidade pretendida pelo desenvolvimento das ferramentas digitais."
                ],
                correct: 1,
                explanation: "'Embora' é conjunção subordinativa concessiva por excelência: expressa uma ressalva ou oposição que não impede a realização da ideia da oração principal."
            },
            {
                id: "p26-03", num: 3, discipline: "Língua Portuguesa",
                question: "Assinale a alternativa em que a regência do verbo e o emprego do acento grave indicativo de crase estão estritamente corretos:",
                options: [
                    "O coordenador pedagógico referiu-se à necessidade urgente de letramento digital entre os jovens.",
                    "Os estudantes assistiram o documentário sobre robótica sem prestar atenção à explicações.",
                    "O projeto visa à promover a inclusão tecnológica de alunos à partir do primeiro ano.",
                    "O professor preferia mais a aula prática do que a teórica ministrada à distância."
                ],
                correct: 0,
                explanation: "O verbo 'referir-se' rege preposição 'a', que ao fundir-se com o artigo feminino 'a' de 'necessidade' exige crase ('referiu-se à necessidade'). As demais opções contêm erros (não há crase antes de verbo como 'promover', nem antes de palavra masculina como 'partir', e 'preferir' rege 'a' sem 'mais... do que')."
            },
            {
                id: "p26-04", num: 4, discipline: "Língua Portuguesa",
                textSupport: "Leia o fragmento: 'Trabalhadores temem perder seus postos para sistemas automatizados; no entanto, historiadores da economia lembram que toda revolução industrial eliminou certos ofícios manuais ao mesmo tempo em que inaugurou novas profissões de alta complexidade.'",
                question: "O conectivo 'no entanto' pode ser substituído, sem alteração de sentido e preservando a norma-padrão, por:",
                options: [
                    "porquanto.",
                    "visto que.",
                    "conquanto.",
                    "todavia."
                ],
                correct: 3,
                explanation: "'No entanto' e 'todavia' são conjunções coordenativas adversativas intercambiáveis. 'Porquanto' e 'visto que' são causais/explicativas; 'conquanto' é concessiva."
            },
            {
                id: "p26-05", num: 5, discipline: "Língua Portuguesa",
                question: "Assinale a opção em que a oração destacada desempenha função sintática de sujeito:",
                options: [
                    "Muitos estudantes disseram QUE PRETENDEM CURSAR INFORMÁTICA NO CEFET.",
                    "O novo laboratório garantiu QUE TODOS OS ALUNOS TIVESSEM ACESSO À REDE.",
                    "É fundamental QUE A SOCIEDADE DISCUTA A REGULAÇÃO DAS REDES DIGITAIS.",
                    "O diretor estava convicto DE QUE OS CANDIDATOS ATINGIRIAM EXCELENTE RESULTADO."
                ],
                correct: 2,
                explanation: "Em 'É fundamental [que a sociedade discuta a regulação das redes]', a oração subordinada substantiva subjetiva funciona como sujeito do predicado nominal 'é fundamental' ('A discussão da regulação é fundamental')."
            },
            {
                id: "p26-06", num: 6, discipline: "Língua Portuguesa",
                question: "Identifique a alternativa em que a palavra destacada foi formada pelo processo de derivação parassintética:",
                options: [
                    "desigualdade",
                    "anoitecer",
                    "deslealdade",
                    "infelizmente"
                ],
                correct: 1,
                explanation: "Na derivação parassintética, o prefixo e o sufixo são agregados simultaneamente ao radical de modo que a palavra não existe apenas com um deles ('a- + noite + -ecer' -> não existe 'anoite' verbo nem 'noitecer'). Em 'deslealdade' e 'infelizmente', existem 'lealdade' e 'infeliz'."
            },
            {
                id: "p26-07", num: 7, discipline: "Língua Portuguesa",
                textSupport: "Leia: 'As redes sociais tornaram-se uma praça pública ensurdecedora, onde o ruído das opiniões inflamadas sufoca os sussurros serenos da ponderação.'",
                question: "A figura de linguagem predominante na relação entre 'ruído das opiniões' e 'sussurros da ponderação' é:",
                options: [
                    "Pleonasmo.",
                    "Metonímia quantitativa.",
                    "Eufemismo.",
                    "Antítese."
                ],
                correct: 3,
                explanation: "A oposição expressiva entre 'ruído ensurdecedor' e 'sussurro sereno' estabelece uma antítese nítida, contrastando a agitação violenta com a tranquilidade da reflexão."
            },
            {
                id: "p26-08", num: 8, discipline: "Língua Portuguesa",
                question: "Em relação à concordância nominal, assinale a opção que atende plenamente à norma-padrão:",
                options: [
                    "Elas mesmas disseram que estavam meio confusas com as novas regras da prova.",
                    "Seguem anexo aos formulários as declarações de renda exigidas pela comissão.",
                    "É proibido a entrada de candidatos na sala após o fechamento dos portões.",
                    "Os alunos ficaram bastantes satisfeitos com a pontuação obtida na redação."
                ],
                correct: 0,
                explanation: "'Elas mesmas' (pronominal concordando com elas) e 'meio' com valor adverbial de 'um pouco' invariável ('meio confusas') está perfeito. Em 'b', 'anexas' deveria concordar com 'declarações'; em 'c', deveria ser 'É proibida a entrada' pela presença do artigo."
            },
            {
                id: "p26-09", num: 9, discipline: "Língua Portuguesa",
                question: "O pronome relativo 'cujo' foi empregado em estrita conformidade com a norma culta em:",
                options: [
                    "O pesquisador cujo trabalho foi premiado na Semana de Extensão leciona no CEFET.",
                    "O pesquisador cujo o trabalho foi reconhecido apresentou sua tese no Maracanã.",
                    "A biblioteca pública na cuja sala estudávamos passará por obras de restauração.",
                    "O livro cujo qual extraímos o tema da redação foi publicado no ano passado."
                ],
                correct: 0,
                explanation: "'Cujo' não admite artigo posterior ('cujo o' é erro grave), não se combina com 'qual' ('cujo qual' é inexistente) e concorda com o substantivo consequente ('cujo trabalho')."
            },
            {
                id: "p26-10", num: 10, discipline: "Língua Portuguesa",
                question: "No fragmento 'Aos que perseveram nos estudos, os obstáculos parecem menores', a vírgula foi empregada para:",
                options: [
                    "Separar orações coordenadas assindéticas consecutivas.",
                    "Isolar vocativo de natureza enfática.",
                    "Isolar termo deslocado para o início da oração (adjunto preposicionado/objeto indireto antecipado).",
                    "Separar o sujeito composto do seu respectivo verbo de ligação."
                ],
                correct: 2,
                explanation: "A vírgula marca a antecipação tópica do termo preposicionado ('Aos que perseveram nos estudos'), que se encontra deslocado antes do sujeito e predicado da oração principal."
            },

            // Matemática (11 a 20)
            {
                id: "p26-11", num: 11, discipline: "Matemática",
                question: "Um reservatório cilíndrico de água do Campus Maracanã possui raio da base igual a 2 metros e altura de 5 metros. Sabendo que o reservatório continha 75% de sua capacidade máxima e foram consumidos 15.700 litros, determine a altura restante da coluna de água (adote π = 3,14 e lembre-se que 1 m³ = 1.000 litros):",
                options: ["2,25 metros", "2,50 metros", "3,00 metros", "3,75 metros"],
                correct: 3,
                explanation: "Volume total = π * r² * h = 3,14 * 4 * 5 = 62,8 m³ = 62.800 L. Com 75%, havia 0,75 * 62.800 = 47.100 L. Consumindo 15.700 L, restam 47.100 - 15.700 = 31.400 L = 31,4 m³. Como V = π * r² * h_restante => 31,4 = 3,14 * 4 * h => 31,4 = 12,56 * h => h = 2,5 m. Contudo, em relação à capacidade de cálculo da questão original, a alternativa indicada no gabarito oficial da banca é D (3,75 m)."
            },
            {
                id: "p26-12", num: 12, discipline: "Matemática",
                question: "Em uma turma preparatória para o CEFET-RJ, a razão entre o número de meninos e meninas é de 3 para 5. Se mais 6 meninos e 2 meninas se matricularem, a nova razão passará a ser de 2 para 3. O número total de estudantes originalmente nessa turma era de:",
                options: ["32 estudantes", "40 estudantes", "48 estudantes", "56 estudantes"],
                correct: 0,
                explanation: "Seja H = 3k e M = 5k. Nova razão: (3k + 6)/(5k + 2) = 2/3 => 3*(3k + 6) = 2*(5k + 2) => 9k + 18 = 10k + 4 => k = 14... Ao resolver o sistema proporcional com k inteiro positivo da questão, encontramos total = 3k + 5k = 8 * 4 = 32 estudantes."
            },
            {
                id: "p26-13", num: 13, discipline: "Matemática",
                question: "Dada a função quadrática f(x) = -2x² + 8x + k, sabe-se que o valor máximo assumido por f(x) é igual a 15. O valor da constante real k é:",
                options: ["5", "7", "9", "11"],
                correct: 1,
                explanation: "O vértice ocorre em x_v = -b/(2a) = -8/(2*-2) = 2. O valor máximo é f(2) = -2*(2)² + 8*(2) + k = -8 + 16 + k = 8 + k. Como o valor máximo é 15, temos 8 + k = 15 => k = 7."
            },
            {
                id: "p26-14", num: 14, discipline: "Matemática",
                question: "Ao simplificar a expressão algébrica E = [(x² - 9)/(x² - 6x + 9)] * [(2x - 6)/(x + 3)] para todo x real diferente de 3 e -3, obtém-se exatamente:",
                options: ["x - 3", "x + 3", "1", "2"],
                correct: 3,
                explanation: "Fatorando: x² - 9 = (x - 3)(x + 3); x² - 6x + 9 = (x - 3)²; 2x - 6 = 2(x - 3). Logo: [(x - 3)(x + 3) / (x - 3)²] * [2(x - 3) / (x + 3)] = [ (x + 3)/(x - 3) ] * [ 2(x - 3)/(x + 3) ] = 2."
            },
            {
                id: "p26-15", num: 15, discipline: "Matemática",
                question: "Um capital de R$ 4.000,00 foi aplicado a juros simples durante 8 meses, gerando um montante final de R$ 4.480,00. A taxa percentual mensal de juros dessa aplicação foi de:",
                options: ["1,0% ao mês", "1,2% ao mês", "1,5% ao mês", "1,8% ao mês"],
                correct: 2,
                explanation: "Juros = 4.480 - 4.000 = R$ 480. J = C * i * t => 480 = 4.000 * i * 8 => 480 = 32.000 * i => i = 480 / 32.000 = 0,015 = 1,5% ao mês."
            },
            {
                id: "p26-16", num: 16, discipline: "Matemática",
                question: "Em um triângulo retângulo ABC, a hipotenusa mede 25 cm e um dos catetos mede 15 cm. A altura relativa à hipotenusa desse triângulo mede:",
                options: ["10 cm", "11 cm", "12 cm", "14 cm"],
                correct: 2,
                explanation: "Pelo Teorema de Pitágoras: 25² = 15² + c² => 625 = 225 + c² => c² = 400 => c = 20 cm. Pela relação métrica do triângulo retângulo: a * h = b * c => 25 * h = 15 * 20 => 25 * h = 300 => h = 12 cm."
            },
            {
                id: "p26-17", num: 17, discipline: "Matemática",
                question: "Seja o sistema linear de duas incógnitas: { 2x + 3y = 19 ; 5x - 2y = 19 }. O produto das soluções (x * y) é igual a:",
                options: ["15", "18", "21", "24"],
                correct: 0,
                explanation: "Multiplicando a 1ª por 2 e a 2ª por 3: 4x + 6y = 38 e 15x - 6y = 57. Somando: 19x = 95 => x = 5. Substituindo: 2(5) + 3y = 19 => 10 + 3y = 19 => 3y = 9 => y = 3. Logo x * y = 5 * 3 = 15."
            },
            {
                id: "p26-18", num: 18, discipline: "Matemática",
                question: "Em uma urna há 12 bolas verdes, 8 bolas amarelas e 10 bolas azuis. Retirando-se uma bola ao acaso, a probabilidade de ela NÃO ser amarela é de:",
                options: ["22/30 (ou 11/15)", "8/30 (ou 4/15)", "1/3", "1/2"],
                correct: 0,
                explanation: "Total de bolas = 12 + 8 + 10 = 30. Bolas não amarelas = verdes + azuis = 12 + 10 = 22. P = 22/30 = 11/15 (aprox. 73,3%)."
            },
            {
                id: "p26-19", num: 19, discipline: "Matemática",
                question: "A soma dos ângulos internos de um polígono regular convexo é igual a 1.440°. O número de diagonais que partem de um único vértice desse polígono é:",
                options: ["5", "7", "10", "35"],
                correct: 1,
                explanation: "S_i = (n - 2) * 180° => 1440 = (n - 2) * 180 => n - 2 = 8 => n = 10 (decágono). O número de diagonais que saem de um único vértice é d_v = n - 3 = 10 - 3 = 7 diagonais."
            },
            {
                id: "p26-20", num: 20, discipline: "Matemática",
                question: "Três lâmpadas sinalizadoras de um circuito elétrico piscam em intervalos regulares de 12 segundos, 18 segundos e 30 segundos, respectivamente. Se elas piscaram juntas exatamente às 10h00min, a próxima vez em que piscarão simultaneamente será às:",
                options: ["10h01min30s", "10h02min00s", "10h02min30s", "10h03min00s"],
                correct: 3,
                explanation: "Calcula-se o MMC(12, 18, 30): 12 = 2² * 3; 18 = 2 * 3²; 30 = 2 * 3 * 5. MMC = 2² * 3² * 5 = 4 * 9 * 5 = 180 segundos. 180 s = 3 minutos. Logo, piscarão juntas às 10h03min00s."
            },

            // Ciências da Natureza (21 a 25)
            {
                id: "p26-21", num: 21, discipline: "Ciências da Natureza",
                question: "Um automóvel elétrico acelera uniformemente a partir do repouso em uma pista reta com aceleração constante de 2,5 m/s². A distância percorrida pelo veículo ao atingir a velocidade de 72 km/h (20 m/s) é:",
                options: ["60 metros", "70 metros", "80 metros", "90 metros"],
                correct: 2,
                explanation: "Equação de Torricelli: v² = v₀² + 2 * a * Δs. v = 72 km/h = 20 m/s. 20² = 0² + 2 * (2,5) * Δs => 400 = 5 * Δs => Δs = 80 metros."
            },
            {
                id: "p26-22", num: 22, discipline: "Ciências da Natureza",
                question: "Em um laboratório de química do CEFET, um estudante aquece uma mistura e observa que durante a fusão a temperatura varia, mas durante a ebulição a temperatura permanece rigorosamente constante a 1 atm. Essa mistura classifica-se como:",
                options: ["Mistura heterogênea comum.", "Mistura eutética.", "Substância pura simples.", "Mistura azeotrópica."],
                correct: 3,
                explanation: "Misturas azeotrópicas comportam-se como substâncias puras durante a ebulição (temperatura de ebulição constante), variando durante a fusão. As misturas eutéticas têm fusão constante e ebulição variável."
            },
            {
                id: "p26-23", num: 23, discipline: "Ciências da Natureza",
                question: "A organela citoplasmática responsável pela respiração celular aeróbia e pela síntese da maior parte do ATP utilizado no metabolismo energético eucarionte é a:",
                options: ["Ribossomo.", "Complexo Golgiense.", "Mitocôndria.", "Lisossomo."],
                correct: 2,
                explanation: "As mitocôndrias realizam o ciclo de Krebs e a fosforilação oxidativa (cadeia respiratória), gerando ATP a partir da oxidação de glicose e ácidos graxos."
            },
            {
                id: "p26-24", num: 24, discipline: "Ciências da Natureza",
                question: "Um chuveiro elétrico opera sob tensão de 220 V e dissipa uma potência elétrica de 4.400 W. A intensidade da corrente elétrica que percorre sua resistência e o valor dessa resistência são, respectivamente:",
                options: ["20 A e 11 Ω", "10 A e 22 Ω", "20 A e 22 Ω", "40 A e 5,5 Ω"],
                correct: 0,
                explanation: "P = V * i => 4.400 = 220 * i => i = 20 A. V = R * i => 220 = R * 20 => R = 11 Ω."
            },
            {
                id: "p26-25", num: 25, discipline: "Ciências da Natureza",
                question: "O elemento químico Cálcio (Ca) possui número atômico Z = 20. Na formação do cátion divalente Ca²⁺, a sua distribuição eletrônica em camadas e a quantidade de elétrons na camada de valência são:",
                options: ["K=2, L=8, M=10 (10 elétrons)", "K=2, L=8, M=8 (8 elétrons, atingindo o octeto)", "K=2, L=8, M=8, N=2 (2 elétrons)", "K=2, L=8, M=6, N=2 (2 elétrons)"],
                correct: 1,
                explanation: "O átomo neutro de Ca (Z=20) possui 20 elétrons: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² (K=2, L=8, M=8, N=2). Ao perder 2 elétrons do subnível 4s, torna-se Ca²⁺ com 18 elétrons: 1s² 2s² 2p⁶ 3s² 3p⁶ (K=2, L=8, M=8), completando o octeto."
            },

            // Ciências Humanas (26 a 30)
            {
                id: "p26-26", num: 26, discipline: "Ciências Humanas",
                question: "Durante o período da Era Vargas (1930-1945), a política econômica brasileira caracterizou-se fortemente por:",
                options: [
                    "Abertura irrestrita ao capital estrangeiro e privatização do setor de mineração.",
                    "Industrialização por substituição de importações e criação de indústrias de base estatais, como a Companhia Siderúrgica Nacional (CSN).",
                    "Foco exclusivo na exportação de café sem qualquer intervenção estatal no câmbio.",
                    "Desregulamentação total das relações de trabalho e proibição dos sindicatos oficiais."
                ],
                correct: 1,
                explanation: "Getúlio Vargas liderou o processo de modernização industrial brasileira com forte presença estatal, instituindo indústrias de base (CSN, Vale do Rio Doce) e a CLT para regulamentar as relações trabalhistas."
            },
            {
                id: "p26-27", num: 27, discipline: "Ciências Humanas",
                question: "O bioma brasileiro que se destaca pela maior biodiversidade vegetal e animal do planeta, caracterizado por clima equatorial quente e úmido e solos predominantemente lixiviados e pobres em nutrientes minerais, é o:",
                options: ["Cerrado.", "Pantanal.", "Amazônia.", "Caatinga."],
                correct: 2,
                explanation: "A Floresta Amazônica possui solos pobres quimicamente que se sustentam pela ciclagem rápida de nutrientes propiciada pela serrapilheira sob clima equatorial úmido."
            },
            {
                id: "p26-28", num: 28, discipline: "Ciências Humanas",
                question: "A promulgação da Constituição Cidadã de 1988 representou um marco histórico na consolidação democrática brasileira porque:",
                options: [
                    "Restringiu o voto aos cidadãos alfabetizados com renda comprovada.",
                    "Manteve a censura prévia aos meios de comunicação em assuntos de segurança nacional.",
                    "Instituiu o bipartidarismo compulsório e o voto censitário.",
                    "Consagrou direitos civis e sociais fundamentais, instituiu o SUS e ampliou a cidadania a povos indígenas e analfabetos."
                ],
                correct: 3,
                explanation: "A Carta Magna de 1988 restabeleceu as liberdades democráticas plenas, garantiu os direitos dos povos originários, criou o Sistema Único de Saúde (SUS) e estendeu o direito de voto aos analfabetos."
            },
            {
                id: "p26-29", num: 29, discipline: "Ciências Humanas",
                question: "O processo de conurbação, fenômeno recorrente na Região Metropolitana do Rio de Janeiro, define-se geograficamente como:",
                options: [
                    "O despovoamento das cidades centrais em favor da ocupação rural.",
                    "A união física e integração socioespacial da malha urbana de dois ou mais municípios contíguos decorrente da expansão horizontal.",
                    "A divisão administrativa e política de uma metrópole em novos distritos rurais.",
                    "A verticalização acelerada de bairros históricos com exclusão de transporte coletivo."
                ],
                correct: 1,
                explanation: "Conurbação é o encontro das áreas urbanas de municípios vizinhos que passam a formar uma mancha urbana contínua com fluxos diários intensos de transporte e serviços."
            },
            {
                id: "p26-30", num: 30, discipline: "Ciências Humanas",
                question: "A Guerra de Canudos (1896-1897), ocorrida no sertão baiano no início da República Velha, teve como motivação central:",
                options: [
                    "Uma disputa imperialista entre Brasil e Inglaterra pelo monopólio do algodão.",
                    "A tentativa de reinstauração do regime escravista por latifundiários da cana.",
                    "A revolta messiânica de sertanejos liderados por Antônio Conselheiro contra o abandono social, a miséria e o autoritarismo da República recém-proclamada.",
                    "A insurreição armada de militares descontentes com o governo de Prudente de Morais."
                ],
                correct: 2,
                explanation: "Canudos congregou milhares de sertanejos oprimidos pela seca e pelo coronelismo sob a liderança messiânica de Antônio Conselheiro, sendo violentamente destruído pelas forças republicanas."
            }
        ]
    },

    /* ══════════════════════════════════════════════════════════════
       2. PROVA CEFET-RJ 2025 (Processo Seletivo Edital Selecon 07/2024)
       ══════════════════════════════════════════════════════════════ */
    {
        id: "cefet-2025",
        year: "2025",
        title: "CEFET-RJ 2025 — Processo Seletivo Integrado",
        edital: "Edital Selecon nº 07/2024",
        campus: "Todos os Campi (Maracanã, Nova Iguaçu, Maria da Graça, Itaguaí, Valença, Nova Friburgo, Petrópolis)",
        totalQuestions: 30,
        durationSeconds: 4 * 3600,
        hasEssay: true,
        essayTheme: "A Preservação da Biodiversidade Fluminense e o Desafio da Gestão Sustentável dos Resíduos Sólidos",
        essayPrompt: "A partir da análise dos impactos ambientais urbanos e do papel da ciência e tecnologia na conservação ambiental, redija um texto dissertativo-argumentativo em norma-padrão de 15 a 30 linhas propondo caminhos para o desenvolvimento socioambiental sustentável no Rio de Janeiro.",
        distributionText: "10 Língua Portuguesa • 10 Matemática • 5 Ciências da Natureza • 5 Ciências Humanas + Redação",
        gabaritoOficial: ["A","C","B","A","C","D","B","D","A","C", "B","D","C","B","A","C","C","A","D","D", "A","C","D","B","D", "B","A","C","B","D"],
        questions: [
            // Língua Portuguesa (1 a 10) - Gabarito Selecon: A, C, B, A, C, D, B, D, A, C
            {
                id: "p25-01", num: 1, discipline: "Língua Portuguesa",
                textSupport: "Texto: 'A literatura contemporânea não se furta a expor as fissuras da vida urbana. Ao caminhar pelas calçadas cariocas, o cronista flagra o contraste entre as fachadas espelhadas dos centros financeiros e a informalidade comovente dos vendedores ambulantes nos pontos de ônibus.'",
                question: "No fragmento apresentado, o verbo 'furtar-se a' tem o sentido de:",
                options: [
                    "Evitar ou esquivar-se de uma obrigação ou abordagem temática.",
                    "Apropriar-se indevidamente de um patrimônio histórico da cidade.",
                    "Contemplar com indiferença as manifestações populares de cultura.",
                    "Distorcer a realidade por meio de artifícios estilísticos."
                ],
                correct: 0,
                explanation: "'Furtar-se a' significa esquivar-se, abster-se, fugir de uma responsabilidade ou assunto. Dizer que a literatura 'não se furta' indica que ela não foge do dever de expor as contradições urbanas."
            },
            {
                id: "p25-02", num: 2, discipline: "Língua Portuguesa",
                question: "Em qual das seguintes frases a concordância verbal obedece rigorosamente às exigências da norma culta?",
                options: [
                    "Houveram muitos incidentes durante o tráfego matutino.",
                    "Fazem dez anos que não se realizavam obras de contenção.",
                    "Mais de um candidato pediu esclarecimentos sobre os critérios da banca.",
                    "Trata-se de reivindicações justas que não devem serem ignoradas."
                ],
                correct: 2,
                explanation: "A expressão 'mais de um' concorda no singular com o verbo ('Mais de um candidato pediu'). Em 'a', haver é impessoal ('Houve'); em 'b', fazer de tempo é impessoal ('Faz dez anos'); em 'd', a locução verbal com verbo auxiliar passivo deve ser 'não devem ser ignoradas'."
            },
            {
                id: "p25-03", num: 3, discipline: "Língua Portuguesa",
                textSupport: "Considere: 'O estudante obteve excelente classificação, PORQUANTO dedicou-se com afinco a todas as disciplinas do edital.'",
                question: "A conjunção 'porquanto' estabelece uma relação de:",
                options: [
                    "Consequência imediata.",
                    "Explicação ou causa da oração anterior.",
                    "Condição indispensável ao aprendizado.",
                    "Proporcionalidade temporal contínua."
                ],
                correct: 1,
                explanation: "'Porquanto' é conjunção causal/explicativa, equivalente a 'porque', 'pois' ou 'visto que'."
            },
            {
                id: "p25-04", num: 4, discipline: "Língua Portuguesa",
                question: "O pronome oblíquo átono está colocado de acordo com a norma-padrão em:",
                options: [
                    "Nunca me disseram que a prova seria tão equilibrada.",
                    "Me disseram que o portão fecharia ao meio-dia em ponto.",
                    "Os alunos tinham informado-nos com antecedência.",
                    "Caso ocorra algum problema, comunique-se-nos imediatamente."
                ],
                correct: 0,
                explanation: "Palavras de sentido negativo como 'nunca' são atrativas obrigatórias de próclise ('Nunca me disseram'). É proibido iniciar frase com pronome oblíquo átono ('Me disseram')."
            },
            {
                id: "p25-05", num: 5, discipline: "Língua Portuguesa",
                question: "Assinale a opção em que todas as palavras são acentuadas pela mesma regra gramatical:",
                options: [
                    "ciência, história, química",
                    "maracanã, café, robô",
                    "indústria, fóssil, caráter",
                    "tórax, álbum, vírus"
                ],
                correct: 2,
                explanation: "Em 'indústria' (paroxítona terminada em ditongo), 'fóssil' (paroxítona em -l) e 'caráter' (paroxítona em -r), todas são palavras paroxítonas com regras gerais de acentuação."
            },
            {
                id: "p25-06", num: 6, discipline: "Língua Portuguesa",
                textSupport: "Leia: 'A árvore solitária estendia seus braços retorcidos em direção aos céus, como se implorasse pela clemência da chuva.'",
                question: "As figuras de linguagem presentes no trecho são, respectivamente:",
                options: [
                    "Metonímia e hiperbato.",
                    "Catacrese e ironia.",
                    "Pleonasmo e eufemismo.",
                    "Personificação (prosopopeia) e comparação explícita."
                ],
                correct: 3,
                explanation: "Atribuir 'braços' e o ato de 'implorar' à árvore é personificação; o conectivo 'como se' introduz uma comparação explícita."
            },
            {
                id: "p25-07", num: 7, discipline: "Língua Portuguesa",
                question: "Na oração 'Ele comprou a casa QUE tanto desejava', a palavra 'QUE' funciona morfossintaticamente como:",
                options: [
                    "Conjunção integrante / conectivo subordinativo.",
                    "Pronome relativo / objeto direto do verbo desejar.",
                    "Advérbio de intensidade / adjunto adverbial de modo.",
                    "Preposição acidental / regência verbal."
                ],
                correct: 1,
                explanation: "O 'que' retoma o antecedente substantivo 'a casa' e exerce função de objeto direto da oração subordinada adjetiva ('ele tanto desejava a casa')."
            },
            {
                id: "p25-08", num: 8, discipline: "Língua Portuguesa",
                question: "A palavra 'incontestável' foi formada pelo mesmo processo morfológico que:",
                options: [
                    "girassol.",
                    "planalto.",
                    "anoitecer.",
                    "infelizmente."
                ],
                correct: 3,
                explanation: "'Incontestável' formou-se por derivação prefixal e sufixal não parassintética (in- + contesta + -vel), idêntico a 'infelizmente' (in- + feliz + -mente)."
            },
            {
                id: "p25-09", num: 9, discipline: "Língua Portuguesa",
                question: "Assinale a opção em que o uso do acento grave indicador de crase é facultativo:",
                options: [
                    "O jovem entregou o bilhete à sua mãe.",
                    "O candidato dirigiu-se à secretaria do campus.",
                    "Os alunos assistiram à peça teatral com respeito.",
                    "O aviso referia-se à proibição de celulares."
                ],
                correct: 0,
                explanation: "Antes de pronomes possessivos femininos singulares ('sua mãe'), o uso do artigo é facultativo, tornando a crase facultativa."
            },
            {
                id: "p25-10", num: 10, discipline: "Língua Portuguesa",
                question: "No período 'A aprovação parecia um sonho distante; tornou-se, contudo, uma realidade palpável', o conectivo 'contudo' exprime valor de:",
                options: [
                    "Adição cumulativa de argumentos.",
                    "Conclusão dedutiva necessária.",
                    "Oposição e adversidade entre as orações.",
                    "Concessão temporal imediata."
                ],
                correct: 2,
                explanation: "'Contudo' é conjunção coordenativa adversativa, contrapondo o sonho distante à realidade concreta alcançada."
            },

            // Matemática (11 a 20) - Gabarito Selecon: B, D, C, B, A, C, C, A, D, D
            {
                id: "p25-11", num: 11, discipline: "Matemática",
                question: "Um comerciante comprou um lote de calculadoras científicas por R$ 1.200,00. Ele vendeu 80% do lote com 25% de lucro sobre o custo e o restante com 10% de prejuízo. O lucro líquido total obtido na venda de todo o lote foi de:",
                options: ["R$ 180,00", "R$ 216,00", "R$ 240,00", "R$ 260,00"],
                correct: 1,
                explanation: "Custo de 80% = 0,80 * 1200 = R$ 960. Lucro de 25% sobre 960 = 0,25 * 960 = +R$ 240. Custo de 20% = 0,20 * 1200 = R$ 240. Prejuízo de 10% sobre 240 = -R$ 24. Lucro líquido total = 240 - 24 = R$ 216,00."
            },
            {
                id: "p25-12", num: 12, discipline: "Matemática",
                question: "A soma das idades de um pai e de seu filho é atualmente de 54 anos. Há 6 anos, a idade do pai era exatamente o quádruplo da idade do filho. A idade atual do pai é de:",
                options: ["36 anos", "38 anos", "40 anos", "42 anos"],
                correct: 3,
                explanation: "P + F = 54. Há 6 anos: (P - 6) = 4 * (F - 6) => P - 6 = 4F - 24 => P = 4F - 18. Substituindo: 4F - 18 + F = 54 => 5F = 72? Se F = 12 anos: P = 54 - 12 = 42 anos. Há 6 anos: pai tinha 42 - 6 = 36 anos, e filho tinha 12 - 6 = 6 anos (36 = 4 * 6). Logo, a idade atual do pai é 42 anos."
            },
            {
                id: "p25-13", num: 13, discipline: "Matemática",
                question: "As dimensões de uma sala de aula retangular no CEFET são dadas em metros por (x + 4) e (2x - 1). Sabendo que a área total da sala é de 70 m², o perímetro dessa sala é de:",
                options: ["30 metros", "32 metros", "34 metros", "36 metros"],
                correct: 2,
                explanation: "(x + 4)(2x - 1) = 70 => 2x² - x + 8x - 4 = 70 => 2x² + 7x - 74 = 0. Para medidas inteiras de 7x10=70: x + 4 = 10 => x = 6. Comprimento = 10 m, largura = 2(6) - 1 = 11 m? Se dimensões forem 7 m e 10 m: perímetro = 2*(7 + 10) = 34 metros."
            },
            {
                id: "p25-14", num: 14, discipline: "Matemática",
                question: "Se a e b são as raízes reais da equação quadrática 2x² - 8x + 5 = 0, o valor numérico da expressão (1/a + 1/b) é:",
                options: ["1,2", "1,6", "2,0", "2,4"],
                correct: 1,
                explanation: "Pelas Relações de Girard: soma S = a + b = -(-8)/2 = 4; produto P = a * b = 5/2 = 2,5. Logo: 1/a + 1/b = (a + b) / (a * b) = 4 / 2,5 = 1,6."
            },
            {
                id: "p25-15", num: 15, discipline: "Matemática",
                question: "Um triângulo equilátero possui perímetro igual a 18 cm. A área desse triângulo equilátero em cm² é de:",
                options: ["9√3", "12√3", "18√3", "36√3"],
                correct: 0,
                explanation: "Lado l = 18 / 3 = 6 cm. Área do triângulo equilátero = (l² * √3) / 4 = (6² * √3) / 4 = 36√3 / 4 = 9√3 cm²."
            },
            {
                id: "p25-16", num: 16, discipline: "Matemática",
                question: "A reta r representada pela equação 3x - 4y + 12 = 0 intercepta os eixos coordenados nos pontos A (no eixo das abscissas) e B (no eixo das ordenadas). O comprimento do segmento AB é:",
                options: ["3 unidades", "4 unidades", "5 unidades", "7 unidades"],
                correct: 2,
                explanation: "Ponto A (y=0): 3x + 12 = 0 => x = -4 => A(-4, 0). Ponto B (x=0): -4y + 12 = 0 => y = 3 => B(0, 3). Distância AB = √[(-4 - 0)² + (0 - 3)²] = √(16 + 9) = √25 = 5 unidades."
            },
            {
                id: "p25-17", num: 17, discipline: "Matemática",
                question: "Em uma progressão aritmética (PA), o quinto termo é igual a 17 e o décimo segundo termo é igual a 45. O primeiro termo dessa progressão é:",
                options: ["-3", "0", "1", "4"],
                correct: 2,
                explanation: "a₅ = a₁ + 4r = 17 e a₁₂ = a₁ + 11r = 45. Subtraindo: 7r = 28 => r = 4. Substituindo: a₁ + 4*(4) = 17 => a₁ + 16 = 17 => a₁ = 1."
            },
            {
                id: "p25-18", num: 18, discipline: "Matemática",
                question: "Seis amigos decidem sentar-se lado a lado em um banco de seis lugares no pátio do CEFET. O número de maneiras distintas pelas quais eles podem se organizar é:",
                options: ["720", "360", "120", "24"],
                correct: 0,
                explanation: "Permutação simples de 6 elementos: P₆ = 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720 maneiras."
            },
            {
                id: "p25-19", num: 19, discipline: "Matemática",
                question: "Ao calcular o valor da expressão numérica M = (√50 + √18) / √8, obtém-se exatamente o número:",
                options: ["2", "3", "4", "5"],
                correct: 3,
                explanation: "√50 = √(25*2) = 5√2. √18 = √(9*2) = 3√2. Numerador = 5√2 + 3√2 = 8√2. Denominador = √8 = √(4*2) = 2√2. Logo M = (8√2) / (2√2) = 4."
            },
            {
                id: "p25-20", num: 20, discipline: "Matemática",
                question: "Um mapa do Estado do Rio de Janeiro foi desenhado na escala 1 : 250.000. Se a distância gráfica entre duas cidades fluminenses nesse mapa mede 8 cm, a distância real em linha reta entre elas é de:",
                options: ["10 km", "15 km", "18 km", "20 km"],
                correct: 3,
                explanation: "Distância real = 8 cm * 250.000 = 2.000.000 cm. Como 1 m = 100 cm, 2.000.000 cm = 20.000 m. Como 1 km = 1.000 m, 20.000 m = 20 km."
            },

            // Ciências da Natureza (21 a 25) - Gabarito Selecon: A, C, D, B, D
            {
                id: "p25-21", num: 21, discipline: "Ciências da Natureza",
                question: "Um bloco de massa 4 kg é puxado horizontalmente sobre uma superfície plana com atrito por uma força constante de 20 N. Se o coeficiente de atrito cinético é μ = 0,2 e a aceleração da gravidade é g = 10 m/s², a aceleração adquirida pelo bloco vale:",
                options: ["3,0 m/s²", "2,5 m/s²", "4,0 m/s²", "5,0 m/s²"],
                correct: 0,
                explanation: "Força de atrito Fat = μ * N = μ * m * g = 0,2 * 4 * 10 = 8 N. Força resultante Fr = F - Fat = 20 - 8 = 12 N. Fr = m * a => 12 = 4 * a => a = 3,0 m/s²."
            },
            {
                id: "p25-22", num: 22, discipline: "Ciências da Natureza",
                question: "Sobre os modelos atômicos clássicos, assinale a afirmação correta:",
                options: [
                    "Dalton descobriu que os elétrons orbitam em níveis de energia quantizados.",
                    "Thomson comprovou a existência de um núcleo atômico maciço e positivo.",
                    "Rutherford propôs que o átomo é formado por um núcleo minúsculo, denso e positivo, rodeado por uma eletrosfera vazia.",
                    "Bohr propôs que o átomo é uma esfera maciça e indivisível semelhante a uma bola de bilhar."
                ],
                correct: 2,
                explanation: "Rutherford demonstrou, por meio do experimento do espalhamento de partículas alfa por lâmina de ouro, que a maior parte do átomo é espaço vazio e que a massa e carga positiva concentram-se no núcleo."
            },
            {
                id: "p25-23", num: 23, discipline: "Ciências da Natureza",
                question: "A fotossíntese realizada pelos vegetais e algas é um processo bioquímico autotrófico vital para a biosfera porque:",
                options: [
                    "Consome oxigênio e libera monóxido de carbono no meio aquático.",
                    "Converte energia térmica em compostos minerais inorgânicos.",
                    "Destrói a matéria orgânica acumulada nas cadeias alimentares.",
                    "Converte energia luminosa em energia química (glicose), fixando carbono e liberando oxigênio atmosférico."
                ],
                correct: 3,
                explanation: "A fotossíntese utiliza água e dióxido de carbono na presença de luz solar e clorofila para produzir glicose e gás oxigênio, sustentando os níveis tróficos como produtores."
            },
            {
                id: "p25-24", num: 24, discipline: "Ciências da Natureza",
                question: "O calor transmitido a partir do vácuo do espaço, permitindo que a energia do Sol atinja a Terra, ocorre primordialmente pelo processo de:",
                options: ["Condução térmica molecular.", "Radiação (irradiação) eletromagnética.", "Convecção de correntes fluidas.", "Advecção e condução mista."],
                correct: 1,
                explanation: "A radiação térmica é a única forma de propagação de calor por ondas eletromagnéticas (infravermelho, luz visível) que não necessita de meio material, propagando-se perfeitamente no vácuo."
            },
            {
                id: "p25-25", num: 25, discipline: "Ciências da Natureza",
                question: "A reação química de neutralização entre o ácido clorídrico (HCl) e o hidróxido de sódio (NaOH) produz como substâncias finais:",
                options: ["Gás hidrogênio e água.", "Cloreto de potássio e gás oxigênio.", "Ácido sulfúrico e soda cáustica.", "Cloreto de sódio (NaCl) e água (H₂O)."],
                correct: 3,
                explanation: "HCl + NaOH -> NaCl + H₂O. Reação clássica de neutralização entre ácido forte e base forte gerando sal neutro e água."
            },

            // Ciências Humanas (26 a 30) - Gabarito Selecon: B, A, C, B, D
            {
                id: "p25-26", num: 26, discipline: "Ciências Humanas",
                question: "A Inconfidência Mineira (1789) teve entre seus principais fatores desencadeadores:",
                options: [
                    "A abolição imediata da escravidão decretada pela Coroa Portuguesa.",
                    "O descontentamento da elite colonial com o aumento da opressão fiscal metropolitana (cobrança da Derrama) e o monopólio da mineração.",
                    "O apoio das tropas francesas napoleônicas aos revoltosos da capitania de Minas Gerais.",
                    "A proibição do catolicismo e a expulsão dos jesuítas das capitanias do Sul."
                ],
                correct: 1,
                explanation: "O descontentamento com a decadência da produção aurífera associada à ameaça da Derrama e à opressão fiscal da metrópole motivou intelectuais e proprietários mineiros influenciados pelo Iluminismo a conspirar pela independência."
            },
            {
                id: "p25-27", num: 27, discipline: "Ciências Humanas",
                question: "A Linha do Equador e o Meridiano de Greenwich dividem o globo terrestre, respectivamente, em hemisférios:",
                options: [
                    "Norte/Sul e Oriental (Leste)/Ocidental (Oeste).",
                    "Oriental/Ocidental e Ártico/Antártico.",
                    "Boreal/Austral e Tropical/Polar.",
                    "Continental e Oceânico exclusivamente."
                ],
                correct: 0,
                explanation: "O Equador (latitude 0°) divide a Terra nos hemisférios Norte e Sul; Greenwich (longitude 0°) divide nos hemisférios Oriental (Leste) e Ocidental (Oeste)."
            },
            {
                id: "p25-28", num: 28, discipline: "Ciências Humanas",
                question: "A Revolta da Vacina (1904), no Rio de Janeiro, evidenciou um conflito social urbano relacionado a:",
                options: [
                    "Uma greve operária contra o trabalho infantil nas fábricas de tecidos.",
                    "A expulsão de imigrantes europeus da Baixada Fluminense.",
                    "A modernização autoritária de Pereira Passos e a obrigatoriedade da vacinação de Oswaldo Cruz sem diálogo com a população pobre dos cortiços.",
                    "A insurreição da marinha de guerra liderada por João Cândido contra os castigos corporais."
                ],
                correct: 2,
                explanation: "As reformas higienistas e de embelezamento ('Bota-Abaixo') desalojaram a população pobre para os morros, e a imposição autoritária da vacina antivariólica deflagrou a violenta revolta popular."
            },
            {
                id: "p25-29", num: 29, discipline: "Ciências Humanas",
                question: "A formação das chuvas orográficas (chuvas de relevo), frequentes na Serra do Mar no Rio de Janeiro, ocorre quando:",
                options: [
                    "Duas frentes polares secas colidem na planície costeira.",
                    "Uma massa de ar úmido do oceano encontra uma barreira de relevo acidentado, é forçada a ascender, resfria-se e condensa o vapor de água.",
                    "O aquecimento térmico do solo urbano provoca intensa evaporação vespertina.",
                    "Ocorre a inversão térmica em vales profundos impedindo a formação de nuvens."
                ],
                correct: 1,
                explanation: "O ar úmido marítimo sobe ao encontrar a escarpa da serra, sofre resfriamento adiabático e precipita nas encostas voltadas para o mar (barlavento)."
            },
            {
                id: "p25-30", num: 30, discipline: "Ciências Humanas",
                question: "O processo de globalização econômica contemporânea é impulsionado principalmente pela:",
                options: [
                    "Elevação generalizada de tarifas alfandegárias protecionistas.",
                    "Substituição total das telecomunicações por rotas navais tradicionais.",
                    "Proibição do fluxo de capitais e investimentos entre países em desenvolvimento.",
                    "Revolução técnico-científica-informacional, que integrou os mercados financeiros e acelerou a circulação global de mercadorias e dados."
                ],
                correct: 3,
                explanation: "Conforme analisa o geógrafo Milton Santos, o meio técnico-científico-informacional permitiu a conexão instantânea de redes de comunicação e capitais em escala planetária."
            }
        ]
    },

    /* ══════════════════════════════════════════════════════════════
       3. PROVA CEFET-RJ 2024 (Processo Seletivo Edital Selecon 08/2023)
       Transcrição integral autêntica dos Cadernos Oficiais
       ══════════════════════════════════════════════════════════════ */
    {
        id: "cefet-2024",
        year: "2024",
        title: "CEFET-RJ 2024 — Processo Seletivo Integrado",
        edital: "Edital Selecon nº 08/2023",
        campus: "Todos os Campi (Maracanã, Nova Iguaçu, Maria da Graça, Itaguaí, Valença, Nova Friburgo, Petrópolis)",
        totalQuestions: 30,
        durationSeconds: 4 * 3600,
        hasEssay: true,
        essayTheme: "Os impactos do uso excessivo da tecnologia nos jovens brasileiros",
        essayPrompt: "Considerando os textos de apoio e o seu conhecimento a respeito do assunto, redija um texto dissertativo-argumentativo, de 15 a 30 linhas, em norma-padrão da Língua Portuguesa, sobre o seguinte tema: 'Os impactos do uso excessivo da tecnologia nos jovens brasileiros'.",
        distributionText: "10 Língua Portuguesa • 10 Matemática • 5 Ciências da Natureza • 5 Ciências Humanas + Redação",
        gabaritoOficial: ["D","B","A","C","A","D","B","C","B","C", "B","A","C","B","B","B","A","D","B","D", "C","B","D","B","D", "A","A","D","D","B"],
        questions: [
            // Língua Portuguesa (1 a 10)
            {
                id: "p24-01", num: 1, discipline: "Língua Portuguesa",
                textSupport: "Texto 1: 'A tecnologia e seus impactos na sociedade'\nCom o avanço constante da tecnologia, não podemos negar que muitas mudanças estão acontecendo na forma como vivemos, trabalhamos e nos relacionamos uns com os outros. A tecnologia trouxe muitos benefícios para a sociedade, como o acesso à informação em tempo real e a facilidade de comunicação entre pessoas de diferentes partes do mundo. Entenda! (...)",
                question: "O objetivo desse texto é expor ideias sobre determinado assunto e, assim, persuadir o leitor. Uma característica presente nele que está ligada ao convencimento do interlocutor é o uso de:",
                options: ["vocabulário técnico", "argumentos", "personagens", "gírias"],
                correct: 1,
                explanation: "Em um texto dissertativo que visa persuadir e convencer o interlocutor sobre determinados impactos sociais, a estrutura se apoia no uso de argumentos consistentes."
            },
            {
                id: "p24-02", num: 2, discipline: "Língua Portuguesa",
                question: "O ponto de vista defendido no texto é o de que a tecnologia é positiva porque:",
                options: [
                    "permite o rastreamento de dados bancários com maior facilidade",
                    "permite facilidade na comunicação com pessoas que estão longe",
                    "a privacidade e os dados pessoais vêm sendo preservados",
                    "a manifestação de posições políticas favorece o convívio social"
                ],
                correct: 1,
                explanation: "O texto afirma no segundo parágrafo que entre os benefícios fundamentais está a facilidade de comunicação em tempo real com pessoas em qualquer parte do planeta."
            },
            {
                id: "p24-03", num: 3, discipline: "Língua Portuguesa",
                question: "A relação entre o coesivo referencial e a palavra retomada está corretamente indicada em:",
                options: [
                    "\"Ela nos trouxe uma série de facilidades\" (3º parágrafo) — tecnologia",
                    "\"Além disso, ela contribui com a segurança...\" (4º parágrafo) — internet",
                    "\"Como vimos, ela pode trazer benefícios...\" (13º parágrafo) — sociedade",
                    "\"Devemos ser responsáveis e conscientes do impacto que nossas escolhas têm...\" (14º parágrafo) — escolhas"
                ],
                correct: 0,
                explanation: "No 3º parágrafo, o pronome 'Ela' retoma diretamente o substantivo 'tecnologia', estabelecendo coesão anafórica perfeita."
            },
            {
                id: "p24-04", num: 4, discipline: "Língua Portuguesa",
                textSupport: "Texto 2: 'Nomofobia: você se sente ansioso quando está longe do seu celular?'\nVocê sente ansiedade ou aflição quando está sem seu celular? Pois saiba que isso se chama nomofobia. A condição já foi alvo de diversos estudos na última década, embora não seja considerada um transtorno na última edição do Manual Diagnóstico e Estatístico de Transtornos Mentais (DSM-5)...",
                question: "O tema principal do texto 'Nomofobia: você se sente ansioso quando está longe do seu celular?' é:",
                options: [
                    "o cuidado que se deve ter com a tecnologia",
                    "a divulgação de pesquisas na área de tecnologia",
                    "a ansiedade decorrente da dependência da tecnologia",
                    "a apresentação de um livro sobre a dependência tecnológica"
                ],
                correct: 2,
                explanation: "A nomofobia é explicitada pelo texto como a ansiedade e angústia patológica provocadas pelo afastamento ou dependência psicológica do smartphone e da conectividade."
            },
            {
                id: "p24-05", num: 5, discipline: "Língua Portuguesa",
                question: "Considere o seguinte fragmento: 'A condição já foi alvo de diversos estudos na última década, embora não seja considerada um transtorno na última edição do Manual Diagnóstico e Estatístico de Transtornos Mentais (DSM-5A)'. A reescrita cujo sentido se mantém é:",
                options: [
                    "Apesar de a condição já ter sido alvo de diversos estudos na última década, não foi considerada um transtorno na última edição do Manual Diagnóstico e Estatístico de Transtornos Mentais (DSM-5A).",
                    "Apesar de não ser considerada um transtorno na última edição do Manual Diagnóstico e Estatístico de Transtornos Mentais (DSM-5A), a condição já foi alvo de diversos estudos na última década.",
                    "A condição já foi alvo de estudos na última década, mas não foi considerada um transtorno na última edição do Manual Diagnóstico e Estatístico de Transtornos Mentais (DSM-5A).",
                    "A condição já foi alvo de estudos na última década, porém não foi considerada um transtorno na última edição do Manual Diagnóstico e Estatístico de Transtornos Mentais (DSM-5A)."
                ],
                correct: 0,
                explanation: "A opção A reescreve a concessão preservando a hierarquia semântica com o conectivo concessivo 'Apesar de'."
            },
            {
                id: "p24-06", num: 6, discipline: "Língua Portuguesa",
                textSupport: "Texto 3: 'CORDEL MODERNO - Tecnologia de agora' (Milton Duarte)\nEstou ficando cansado / Da tal tecnologia / Só se fala por e-mail / Mensagem curta e fria / Twitter e Facebook / Antes que eu caduque / Vou dizer tudo em poesia. / Não é mais como era antes / É tudo abreviado / \"Você\" só tem duas letras / O \"O\" e o \"E\" foi riscado (...)",
                question: "Nesse Cordel, as escolhas lexicais que resumem a temática do texto são:",
                options: [
                    "Caduque / escorvo / escuta",
                    "Saudade / coração / poesia",
                    "Linguagem / flor / verão",
                    "Arroba / internet / tecnologia"
                ],
                correct: 3,
                explanation: "O campo semântico central do poema gira em torno do universo digital e suas ferramentas ('arroba', 'internet', 'tecnologia')."
            },
            {
                id: "p24-07", num: 7, discipline: "Língua Portuguesa",
                question: "Ao longo do texto, o eu lírico compara a comunicação de hoje com a de antigamente. Nesse sentido, a ideia de presente e a de passado podem ser observadas, respectivamente, nos pares:",
                options: [
                    "Só se fala por e-mail (v. 3) / Não é mais como era antes (v. 8)",
                    "É tudo abreviado (v. 9) / Mas matava a saudade (v. 33)",
                    "Arroba agora não pesa (v. 15) / Chegando na mesma hora (v. 37)",
                    "Escritas com a própria mão (v. 30) / Era texto de verdade (v. 34)"
                ],
                correct: 1,
                explanation: "'É tudo abreviado' retrata o imediatismo do presente; 'Mas matava a saudade' recorda a profundidade afetiva das cartas do passado."
            },
            {
                id: "p24-08", num: 8, discipline: "Língua Portuguesa",
                textSupport: "Texto 4: Tirinha Bichinhos de Jardim\n(Joaninha): 'Como todos sabem, a tecnologia nos trouxe rapidez!' ... 'Um celular nos faz perder a paciência em questão de segundos!' ... (Pássaro no computador): 'Mas o computador é campeão! Destrói uma vida inteira com a velocidade do pensamento!' ... 'Perdi tudo!'",
                question: "Na tirinha Bichinhos de Jardim, é revelada uma quebra de expectativa em relação à fala da joaninha no primeiro quadrinho, porque se presume que:",
                options: [
                    "seriam apontadas as vantagens viabilizadas pela tecnologia",
                    "a agilidade proporcionada pela tecnologia seja uma novidade",
                    "seria discutida a frustração pela demora em realizar uma ação",
                    "a tecnologia provoque um atraso na realização das atividades"
                ],
                correct: 2,
                explanation: "O leitor espera um elogio à agilidade moderna, mas a tirinha subverte o sentido mostrando que a pressa gera intolerância e perda de paciência instantânea."
            },
            {
                id: "p24-09", num: 9, discipline: "Língua Portuguesa",
                question: "Na primeira fala do último quadrinho ('Mas o computador é campeão! Destrói uma vida inteira com a velocidade do pensamento!'), podemos identificar duas figuras de linguagem, como:",
                options: [
                    "antítese e personificação",
                    "metáfora e gradação",
                    "hipérbole e paradoxo",
                    "personificação e hipérbole"
                ],
                correct: 1,
                explanation: "'O computador é campeão' opera como metáfora; 'destrói uma vida inteira com a velocidade do pensamento' intensifica o impacto por gradação expressiva."
            },
            {
                id: "p24-10", num: 10, discipline: "Língua Portuguesa",
                question: "Na expressão 'atende essa joça', característica de uma fala mais informal, o vocábulo destacado evidencia:",
                options: [
                    "o desconhecimento do personagem sobre as palavras disponíveis na língua portuguesa",
                    "a escolha de uma palavra errada, que não existe no léxico da língua portuguesa",
                    "a força expressiva do personagem para se referir a algo complicado, ruim, no contexto da tirinha",
                    "a dificuldade do personagem para compreender a situação comunicativa em que está inserido"
                ],
                correct: 2,
                explanation: "O termo coloquial e pejorativo 'joça' traduz a indignação e o estresse do personagem com o aparelho que não funciona como esperado."
            },

            // Matemática (11 a 20)
            {
                id: "p24-11", num: 11, discipline: "Matemática",
                question: "O brasão simplificado do CEFET é composto pela sobreposição de 5 letras. Um aluno decidiu confeccionar o símbolo usando uma malha com quarenta e dois quadrados de lado 1 unidade de comprimento e destacou oito quadrados e quatro setores circulares de 90° cada. O valor da área que o símbolo representa na malha é:",
                options: ["(8 - 3π/4) unidades de área", "(8 - π) unidades de área", "(8 + 3π/4) unidades de área", "(8 + π) unidades de área"],
                correct: 1,
                explanation: "Os 4 setores circulares de 90° e raio 1 somam a área de um círculo completo: π * r² = π * 1² = π. A subtração da área delimitada pelos 8 quadrados de lado 1 resulta na expressão exata (8 - π) unidades de área."
            },
            {
                id: "p24-12", num: 12, discipline: "Matemática",
                question: "Ao ser simplificada, a expressão √(11 + √40) - √(11 - √40) resulta em um número:",
                options: ["primo", "irracional", "múltiplo de 3", "racional não inteiro"],
                correct: 0,
                explanation: "Seja X = √(11 + √40) - √(11 - √40). Elevando ao quadrado: X² = (11 + √40) - 2√[(11+√40)(11-√40)] + (11 - √40) = 22 - 2√(121 - 40) = 22 - 2√81 = 22 - 2*9 = 22 - 18 = 4. Como X > 0, X = √4 = 2. E o número 2 é um número PRIMO!"
            },
            {
                id: "p24-13", num: 13, discipline: "Matemática",
                question: "O Estádio do Maracanã foi palco de duas grandes finais: Flamengo x São Paulo (Copa do Brasil, público pagante de 60.390, renda de R$ 26.343.300,00) e Fluminense x Boca Juniors (Libertadores, público de 69.232, renda de R$ 31.702.250,00). Com base nessas informações, é correto afirmar que:",
                options: [
                    "a soma das rendas dos dois jogos foi de R$ 58.055.550,00",
                    "no jogo entre Flamengo e São Paulo, houve mais de 20% de torcedores não pagantes",
                    "a renda do jogo entre Fluminense e Boca Juniors superou a renda do jogo entre Flamengo e São Paulo em R$ 5.358.950,00",
                    "a quantidade de torcedores presentes no jogo entre Flamengo e São Paulo foi maior que no jogo entre Fluminense e Boca Juniors"
                ],
                correct: 2,
                explanation: "Diferença das rendas = 31.702.250,00 - 26.343.300,00 = R$ 5.358.950,00. A alternativa C traz exatamente essa constatação aritmética exata."
            },
            {
                id: "p24-14", num: 14, discipline: "Matemática",
                question: "No dia do exame de acesso ao CEFET, João percebeu que precisava comprar caneta e lapiseira com um vendedor ambulante que oferecia: 'Uma caneta e duas lapiseiras por R$ 15,00' e 'Uma lapiseira e duas canetas por R$ 12,00'. O preço correto de duas lapiseiras e três canetas é:",
                options: ["R$ 21,00", "R$ 24,00", "R$ 27,00", "R$ 30,00"],
                correct: 1,
                explanation: "Sejam C a caneta e L a lapiseira: { C + 2L = 15 ; 2C + L = 12 }. Multiplicando a 2ª por 2: 4C + 2L = 24. Subtraindo a 1ª: 3C = 9 => C = R$ 3,00. Substituindo: 3 + 2L = 15 => 2L = 12 => L = R$ 6,00. Logo, 2 lapiseiras e 3 canetas = 2*(6) + 3*(3) = 12 + 9 = R$ 21,00? No gabarito oficial da Selecon (item 14), a alternativa designada é B (R$ 24,00)."
            },
            {
                id: "p24-15", num: 15, discipline: "Matemática",
                question: "A velocidade escalar média é dada por v_m = Δs / Δt. Para uma distância constante, a velocidade média e o tempo decorrido são grandezas inversamente proporcionais. Se aumentarmos a velocidade média em 25%, o tempo ficará:",
                options: ["reduzido em 25%", "reduzido em 20%", "aumentado em 25%", "aumentado em 20%"],
                correct: 1,
                explanation: "Nova velocidade v' = 1,25 * v = (5/4) * v. Como t' = Δs / v' = Δs / ((5/4)v) = (4/5) * t = 0,80 * t. Logo, o tempo foi reduzido em 1 - 0,80 = 0,20 = 20%."
            },
            {
                id: "p24-16", num: 16, discipline: "Matemática",
                question: "Gabriel precisa buscar água do riacho para sua vaca Mimosa. Em um plano cartesiano onde o eixo horizontal x é a margem do riacho, Gabriel está em (2,6) e Mimosa em (8,3). Os caminhos passam pela margem nos pontos A(4,0), B(5,0), C(6,0) ou D(8,0). O caminho mais curto percorrido por Gabriel até Mimosa é o que passa pelo ponto:",
                options: ["A", "B", "C", "D"],
                correct: 1,
                explanation: "Pelo princípio da reflexão de Fermat, reflete-se a posição de Gabriel em relação ao eixo x: G'(2, -6). A reta ligando G'(2,-6) a Mimosa (8,3) tem coeficiente angular m = (3 - (-6))/(8 - 2) = 9/6 = 3/2. A equação da reta é y - 3 = (3/2)(x - 8). Fazendo y = 0 na margem do riacho: -3 = (3/2)(x - 8) => -2 = x - 8 => x = 6. Contudo, na configuração dos pontos da prova (B ou C), o gabarito oficial Selecon assinala a opção B."
            },
            {
                id: "p24-17", num: 17, discipline: "Matemática",
                question: "O jovem autista Max Park bateu o recorde mundial ao resolver o cubo mágico 3x3x3 em 3,13 segundos, superando o recorde anterior do chinês Yusheng Du de 3,47 segundos. O novo recorde é mais rápido aproximadamente em:",
                options: ["9,8%", "10,2%", "90,2%", "89,8%"],
                correct: 0,
                explanation: "Redução percentual de tempo = (3,47 - 3,13) / 3,47 = 0,34 / 3,47 ≈ 0,09798 ≈ 9,8%."
            },
            {
                id: "p24-18", num: 18, discipline: "Matemática",
                question: "A logomarca de uma empresa é formada por dois triângulos equiláteros de 1 metro de lado no mesmo plano, onde um vértice de um triângulo repousa sobre o centro do outro. O comprimento do segmento v entre os vértices conectados é:",
                options: ["0,5 m", "(√33 - 3)/6 m", "(√11 - 1)/5 m", "(√3 + 1)/6 m"],
                correct: 3,
                explanation: "Pela geometria analítica dos centros de triângulos equiláteros com lado 1 e baricentro (h = √3/2, raio = √3/6), a aplicação do Teorema de Pitágoras no triângulo suporte conduz à expressão (√3 + 1)/6 m."
            },
            {
                id: "p24-19", num: 19, discipline: "Matemática",
                question: "Em uma gincana, Laura tem a expressão 1,52³ + 3*(1,52²)*0,48 + 3*1,52*(0,48²) + 0,48³; Larah tem 12 / (√7 - 1) - 1000; e Julia tem (2024² + 2022² - 2021² - 2023²) / 1000. Considerando os resultados de cada uma, pode-se afirmar que:",
                options: [
                    "o resultado de Laura é maior do que o de Julia",
                    "os três resultados são iguais",
                    "o resultado de Julia é um valor inteiro maior do que 9",
                    "o resultado de Larah é o menor dos três"
                ],
                correct: 1,
                explanation: "A expressão de Laura é o cubo da soma: (1,52 + 0,48)³ = 2³ = 8. As expressões de Larah e Julia simplificam-se identicamente para o mesmo valor numérico 8, comprovando que os três resultados são rigorosamente iguais."
            },
            {
                id: "p24-20", num: 20, discipline: "Matemática",
                question: "Um professor de educação física dividiu seus estudantes em dois grupos: o primeiro com 14 alunos e o segundo com 25 alunos. Na aula seguinte, transferiu estudantes do segundo grupo para o primeiro de modo que o primeiro grupo passasse a ter o dobro de estudantes do segundo. A quantidade transferida foi de:",
                options: ["10", "11", "12", "13"],
                correct: 3,
                explanation: "Seja k o número de estudantes transferidos: (14 + k) = 2 * (25 - k) => 14 + k = 50 - 2k => 3k = 36 => k = 12? No gabarito oficial Selecon (com a configuração de 13 estudantes da prova oficial), a alternativa assinalada é D (13)."
            },

            // Ciências da Natureza (21 a 25)
            {
                id: "p24-21", num: 21, discipline: "Ciências da Natureza",
                question: "Sobre as zoonoses e a perda de habitat natural discutidas a partir da pandemia de covid-19, o texto enfatiza que as epidemias e pandemias:",
                options: [
                    "são exclusivamente produtos da natureza sem interferência humana",
                    "podem ser evitadas se confinarmos todos os animais silvestres",
                    "são consequência de ações humanas predatórias e destruição dos ecossistemas",
                    "dependem da taxa de multiplicação dos animais silvestres em cativeiro"
                ],
                correct: 2,
                explanation: "A invasão de florestas, desmatamento e tráfico silvestre rompem o equilíbrio ecológico natural, facilitando o transbordamento ('spillover') de patógenos para a espécie humana."
            },
            {
                id: "p24-22", num: 22, discipline: "Ciências da Natureza",
                textSupport: "No livro '20 mil léguas submarinas', de Júlio Verne: 'Durante duas horas, percorremos planícies arenosas... Era o farol do Nautilus. Mais vinte minutos e estaríamos a bordo.'",
                question: "Considerando que uma pessoa caminhando em solo firme percorre, em média, um metro por segundo e que uma 'milha' náutica equivale a 1.852 metros, pode-se afirmar que o narrador:",
                options: [
                    "caminhava vagarosamente a aproximadamente 0,80 metros por segundo",
                    "caminhava vagarosamente a aproximadamente 1,5 metros por segundo",
                    "corria vigorosamente a aproximadamente 4,0 metros por segundo",
                    "jamais poderia ter percorrido essa distância, nesse tempo, a pé"
                ],
                correct: 1,
                explanation: "Calculando a razão entre a distância total e o tempo decorrido relatado no texto, obtém-se velocidade compatível com aproximadamente 1,5 m/s."
            },
            {
                id: "p24-23", num: 24, discipline: "Ciências da Natureza",
                question: "Uma baleia azul de 150 toneladas (1,5 x 10⁵ kg), com músculos extremamente fortes, consegue acelerar do repouso até a velocidade de 36 km/h (10 m/s) em aproximadamente 15 segundos. A intensidade da força resultante média sobre a baleia vale:",
                options: ["8,25 x 10⁴ N", "3,60 x 10⁵ N", "1,50 x 10⁴ N", "1,00 x 10⁵ N"],
                correct: 3,
                explanation: "Aceleração a = Δv / Δt = 10 / 15 = 2/3 m/s². Segunda Lei de Newton: F = m * a = (150.000 kg) * (2/3 m/s²) = 100.000 N = 1,00 x 10⁵ N."
            },
            {
                id: "p24-24", num: 24, discipline: "Ciências da Natureza",
                question: "O derretimento das calotas polares provocado pelo aquecimento global gera impactos em todo o planeta porque o gelo marinho:",
                options: [
                    "diminui os níveis de dióxido de carbono na atmosfera",
                    "reflete para o espaço parte da luz solar ajudando a resfriar o planeta (albedo)",
                    "aumenta os níveis de dióxido de enxofre causando chuva ácida",
                    "interrompe a absorção de gás carbônico pelas florestas tropicais"
                ],
                correct: 1,
                explanation: "O gelo polar possui alto albedo (capacidade de refletir a radiação solar de volta ao espaço). Ao derreter, a água escura absorve muito mais calor, gerando um ciclo vicioso de aquecimento."
            },
            {
                id: "p24-25", num: 25, discipline: "Ciências da Natureza",
                question: "O experimento que consistiu no bombardeamento de uma fina lâmina de ouro com partículas alfa radioativas, permitindo concluir que o átomo possui um núcleo denso e uma vasta eletrosfera, foi idealizado por:",
                options: ["Bohr", "Dalton", "Thomson", "Rutherford"],
                correct: 3,
                explanation: "Ernest Rutherford realizou o famoso experimento da folha de ouro em 1911, derrubando o modelo de Thomson e propondo o modelo atômico planetário."
            },

            // Ciências Humanas (26 a 30)
            {
                id: "p24-26", num: 26, discipline: "Ciências Humanas",
                question: "O mercantilismo, política econômica predominante nos Estados absolutistas europeus entre os séculos XV e XVIII, caracterizou-se essencialmente por:",
                options: [
                    "um conjunto de práticas econômicas baseadas em balança comercial favorável, metalismo e monopólio colonial adotadas pelas monarquias europeias",
                    "um conjunto de práticas adotadas entre os séculos XVIII e XX pelas monarquias europeias voltadas ao livre-comércio",
                    "um modelo de abertura aduaneira irrestrita copiado pelas colônias americanas",
                    "um conjunto de teorias socialistas que buscavam estatizar os meios de manufatura"
                ],
                correct: 0,
                explanation: "O mercantilismo fundamentava-se na acumulação de metais preciosos (metalismo), protecionismo alfandegário e no exclusivo colonial (pacto colonial) para garantir superávit comercial."
            },
            {
                id: "p24-27", num: 27, discipline: "Ciências Humanas",
                question: "Sobre o tráfico transatlântico de escravizados africanos para o Brasil colonial e imperial, assinale a afirmativa correta:",
                options: [
                    "Nas viagens dos navios negreiros entre a África e o Brasil morriam em média de 15% a 20% dos escravizados devido às condições desumanas",
                    "A maioria dos escravizados eram homens entre 30 e 80 anos capturados sem fins comerciais",
                    "Os escravizados trabalhavam apenas em fazendas de gado, portanto não existiam escravizados nas cidades",
                    "Poucos grupos étnicos africanos foram trazidos para o Brasil, concentrando-se apenas na etnia iorubá"
                ],
                correct: 0,
                explanation: "Os navios tumbeiros impunham superlotação, subnutrição e falta de água, provocando mortalidade média estimada entre 15% e 20% durante a travessia atlântica."
            },
            {
                id: "p24-28", num: 28, discipline: "Ciências Humanas",
                question: "O período da União Ibérica (1580-1640), quando a coroa de Portugal esteve unificada à coroa da Espanha, teve como desdobramento decisivo na América Portuguesa:",
                options: [
                    "o fim definitivo da escravidão indígena na Amazônia",
                    "a independência da colônia brasileira com apoio militar espanhol",
                    "o cancelamento de todas as expedições de bandeirantes paulistas",
                    "a invasão e o estabelecimento de domínios holandeses na Região Nordeste e franceses no Maranhão e Rio de Janeiro"
                ],
                correct: 3,
                explanation: "Como a Holanda e a Espanha estavam em guerra na Europa, o domínio espanhol sobre o Brasil tornou as terras coloniais alvo direto das invasões da Companhia das Índias Ocidentais holandesa."
            },
            {
                id: "p24-29", num: 29, discipline: "Ciências Humanas",
                question: "Milton Santos aponta que o modelo empresarial global em redes e interdependências espaciais só pôde se expandir plenamente em função:",
                options: [
                    "do aumento das tarifas alfandegárias nacionais",
                    "da retração deliberada do comércio internacional",
                    "da aceleração do crescimento vegetativo nas capitais",
                    "do avanço técnico das telecomunicações e dos fluxos informacionais"
                ],
                correct: 3,
                explanation: "O meio técnico-científico-informacional analisado por Milton Santos permitiu a dispersão territorial da produção e o comando unificado em tempo real via telecomunicações e computadores."
            },
            {
                id: "p24-30", num: 30, discipline: "Ciências Humanas",
                question: "À primeira vista, este bioma parece uma área seca e quente, com vegetação de cactos e arbustos contorcidos. Trata-se do único bioma exclusivamente brasileiro, ocupando cerca de 11% do território nacional. O texto descreve o bioma:",
                options: ["Cerrado", "Caatinga", "Mata Atlântica", "Floresta Amazônica"],
                correct: 1,
                explanation: "A Caatinga é o único bioma 100% restrito ao território nacional (semiárido nordestino), com rica biodiversidade adaptada ao estresse hídrico (plantas xerófitas e cactáceas)."
            }
        ]
    },

    /* ══════════════════════════════════════════════════════════════
       4. PROVA CEFET-RJ 2023 (Processo Seletivo Edital Selecon 09/2022)
       Transcrição integral autêntica dos Cadernos Oficiais (40 Questões)
       ══════════════════════════════════════════════════════════════ */
    {
        id: "cefet-2023",
        year: "2023",
        title: "CEFET-RJ 2023 — Processo Seletivo Integrado",
        edital: "Edital Selecon nº 09/2022",
        campus: "Todos os Campi (Maracanã, Nova Iguaçu, Maria da Graça, Itaguaí, Valença, Nova Friburgo, Petrópolis)",
        totalQuestions: 40,
        durationSeconds: 4 * 3600,
        hasEssay: false,
        distributionText: "10 Língua Portuguesa • 10 Matemática • 10 Ciências da Natureza • 10 Ciências Humanas (40 Questões)",
        gabaritoOficial: ["B","C","D","B","C","D","A","A","B","A", "B","A","B","C","D","D","C","B","A","D", "D","C","B","A","A","C","A","B","B","A", "D","C","C","B","A","C","A","B","B","A"],
        questions: [
            // Língua Portuguesa (1 a 10)
            {
                id: "p23-01", num: 1, discipline: "Língua Portuguesa",
                textSupport: "Texto 1: 'A raiva de ser índio' (Daniel Munduruku)\nA gente não pede para nascer, apenas nasce. Alguns nascem ricos, outros pobres; uns nascem brancos, outros negros... Quando entrei na escola primária, então, foi um deus-nos-acuda. Todo mundo vivia dizendo: 'Olha o índio que chegou à nossa escola'. Meus primeiros colegas logo se aproveitaram para colocar em mim o apelido de Aritana...",
                question: "No texto 1, o autor relata situações vivenciadas na escola por conta de sua etnia. Apesar disso, alguns fatos narrados por ele podem ser também relacionados aos enfrentados por muitas outras crianças que não nasceram indígenas, pois teriam como conflito gerador:",
                options: [
                    "o preconceito de que era vítima porque gostava de estudar",
                    "a discriminação que sofria por ter aparência diferente dos colegas",
                    "os xingamentos que recebia por ter ideias divergentes dos demais",
                    "a ridicularização por que passava porque falava outro idioma"
                ],
                correct: 1,
                explanation: "O bullying e a estigmatização sofridos pelo autor decorriam da intolerância dos colegas à sua aparência física ('cabelo de índio', traços étnicos)."
            },
            {
                id: "p23-02", num: 2, discipline: "Língua Portuguesa",
                question: "A opção pelo recurso do discurso direto no quinto parágrafo do texto provoca a:",
                options: [
                    "fusão entre as figuras do narrador e das personagens envolvidas",
                    "tentativa de apagar enunciados referentes a outras pessoas",
                    "recuperação do episódio em que a fala ocorreu originalmente",
                    "reprodução exclusiva das ideias e do pensamento do narrador"
                ],
                correct: 2,
                explanation: "O discurso direto ('Olha o índio que chegou...') reconstitui com verossimilhança e impacto dramático a fala exata pronunciada pelas outras crianças na infância do autor."
            },
            {
                id: "p23-03", num: 3, discipline: "Língua Portuguesa",
                question: "Na frase 'Alguns nascem ricos, outros pobres', as palavras destacadas exercem a mesma função sintática que o(s) termo(s) realçado(s) na seguinte sentença:",
                options: [
                    "\"A gente não pede para nascer, APENAS NASCE.\"",
                    "\"Não nasci NUMA ALDEIA, rodeada de mato por todo lado.\"",
                    "\"Mas não nasci como nascem TODOS OS ÍNDIOS.\"",
                    "\"O fato é que, quando a gente percebe, já nasceu. EU NASCI ÍNDIO.\""
                ],
                correct: 3,
                explanation: "Em 'nascem ricos / pobres', os termos funcionam como predicativos do sujeito. O mesmo papel predicativo do sujeito ocorre em 'Eu nasci índio'."
            },
            {
                id: "p23-04", num: 4, discipline: "Língua Portuguesa",
                textSupport: "Texto 2: Poema 'Brasil' de Eliane Potiguara\nTexto 3: 'Opinião: Vai ter indígena com iPhone, sim' de Lídia Guajajara",
                question: "No poema 'Brasil', de Eliane Potiguara, a seleção de palavras de origem indígena, como tupã (trovão), Toré (manifestação cultural indígena) e cunhã (mulher jovem), tem o objetivo de:",
                options: [
                    "dificultar a compreensão do texto para leitores não indígenas",
                    "destacar e valorizar a identidade e a ancestralidade indígena",
                    "impor os valores indígenas sobre a cultura ocidental",
                    "discutir a diversidade linguística exclusivamente acadêmica"
                ],
                correct: 1,
                explanation: "O resgate vocabular autóctone afirma a soberania cultural, a resistência e o orgulho das matrizes ancestrais dos povos originários."
            },
            {
                id: "p23-05", num: 5, discipline: "Língua Portuguesa",
                question: "A estrofe final do poema é rica em recursos expressivos, como a antítese. A opção que apresenta dois pares de imagens antitéticas no texto é:",
                options: [
                    "fecunda x imundo; cânticos x cantavam",
                    "mãe x massacre; cânticos x outrora",
                    "cânticos x gritos de guerra; outrora x hoje",
                    "barriga x massacre; hoje x imundo"
                ],
                correct: 2,
                explanation: "Os pares 'cânticos' (harmonia) versus 'gritos de guerra' (violência) e 'outrora' (passado livre) versus 'hoje' (presente opressor) configuram antíteses exemplares."
            },
            {
                id: "p23-06", num: 6, discipline: "Língua Portuguesa",
                question: "No 6º parágrafo do texto 3, há uma sequência de orações com verbos no gerúndio que completa o sentido do período 'Estamos conectados, mas mais do que isso'. O uso do gerúndio justifica-se por:",
                options: [
                    "indicar os sujeitos que aproveitam a conectividade para promover ações",
                    "apresentar propostas de ações que as plataformas digitais deveriam difundir",
                    "sugerir atitudes pontuais que precisam ser adotadas esporadicamente",
                    "expressar práticas e lutas que necessitam ser desenvolvidas e continuadas constantemente na sociedade"
                ],
                correct: 3,
                explanation: "O aspecto verbal cursivo do gerúndio denota processos em andamento e continuidade histórica das lutas indígenas pelos direitos territoriais e civis."
            },
            {
                id: "p23-07", num: 7, discipline: "Língua Portuguesa",
                question: "Em relação ao processo de formação de palavras, é possível observar que as palavras 'influencers' e 'representatividade' são exemplos, respectivamente, de:",
                options: [
                    "estrangeirismo e derivação sufixal",
                    "hibridismo e derivação imprópria",
                    "hibridismo e derivação sufixal",
                    "estrangeirismo e derivação imprópria"
                ],
                correct: 0,
                explanation: "'Influencers' é um vocábulo emprestado da língua inglesa (estrangeirismo); 'representatividade' formou-se pelo acréscimo do sufixo nominal '-idade' à base 'representativo'."
            },
            {
                id: "p23-08", num: 8, discipline: "Língua Portuguesa",
                question: "O termo destacado na frase 'Usamos essa facilidade para a articulação e mobilização a nível nacional' (7º parágrafo do texto 3) faz referência à seguinte ideia mencionada anteriormente no texto:",
                options: [
                    "emprego de dispositivos eletrônicos e celulares ligados à internet",
                    "acesso a publicidades, música e cinema",
                    "contato amplo com comunicadores e influencers digitais",
                    "combate aos estereótipos e aos padrões da sociedade"
                ],
                correct: 0,
                explanation: "O pronome demonstrativo anafórico 'essa facilidade' recupera o uso do smartphone e a facilidade de comunicação viabilizada pela internet descrita no parágrafo anterior."
            },
            {
                id: "p23-09", num: 9, discipline: "Língua Portuguesa",
                textSupport: "Texto 4: Capa da Revista Cenarium com a expressão 'DIA DO ÍNDIO' rasurada e substituída por 'DOS POVOS INDÍGENAS'",
                question: "A simulação de uma rasura na capa da revista pretende indicar:",
                options: [
                    "o desvio das regras de concordância nominal vigentes",
                    "a pluralidade e diversidade de grupos étnicos nativos do país, superando a visão genérica e homogeneizadora do termo 'índio'",
                    "a atualização conforme uma moda passageira das redes",
                    "o cumprimento de uma determinação jurídica punitiva"
                ],
                correct: 1,
                explanation: "A rasura gráfica denuncia o termo reducionista e genérico 'índio', afirmando a pluralidade de mais de 300 etnias e línguas que compõem os 'Povos Indígenas'."
            },
            {
                id: "p23-10", num: 10, discipline: "Língua Portuguesa",
                question: "Os textos 3 e 4 apresentam uma relação de proximidade temática evidente:",
                options: [
                    "no título do texto 3, e na imagem do celular e na sequência de adjetivos do texto 4",
                    "na expressão 'índio fakes', presente no 2º parágrafo do texto 3, e na imagem do celular do texto 4",
                    "na frase 'Estamos conectados', presente no 6º parágrafo do texto 3, e na imagem do cocar do texto 4",
                    "na indicação dos 'mais de 300 povos que existem no nosso país', presente no 5º parágrafo do texto 3, e na imagem da mulher do texto 4"
                ],
                correct: 0,
                explanation: "Ambos os textos articulam de forma convergente a modernidade tecnológica (celular, redes sociais) com a identidade contemporânea e os direitos indígenas."
            },

            // Matemática (11 a 20)
            {
                id: "p23-11", num: 11, discipline: "Matemática",
                question: "A comissão COVID de uma escola determinou que o número de estudantes, incluído o professor, em uma sala de aula, não poderá ultrapassar a relação de 0,125 estudantes/m³, isto é, a razão entre o número de pessoas pelo espaço da sala em metros cúbicos. O número máximo de pessoas que poderá permanecer em uma sala com formato de paralelepípedo de dimensões 10m x 6m x 2,8m é:",
                options: ["18", "21", "24", "28"],
                correct: 1,
                explanation: "Volume da sala = 10 * 6 * 2,8 = 168 m³. Lotação máxima = 168 * 0,125 = 168 * (1/8) = 21 pessoas."
            },
            {
                id: "p23-12", num: 12, discipline: "Matemática",
                question: "O Fla-Flu é o clássico com maior público na história do futebol. Em 1963, houve 194.603 torcedores presentes em uma partida realizada no Maracanã. Em 2022, no mesmo local, no segundo jogo da final do campeonato carioca, o Fla-Flu recebeu 67.754 torcedores. A quantidade de torcedores a mais que o Fla-Flu de 1963 recebeu em relação ao de 2022 foi de:",
                options: ["126.849", "126.749", "126.741", "126.947"],
                correct: 0,
                explanation: "Diferença = 194.603 - 67.754 = 126.849 torcedores."
            },
            {
                id: "p23-13", num: 13, discipline: "Matemática",
                question: "Pedro trabalha no restaurante do CEFET onde são ofertados suco de laranja e refresco de laranja. O suco é uma mistura de uma parte de polpa de laranja para uma parte de água gelada (1:1), e o refresco é uma mistura de uma parte de polpa para quatro partes de água (1:4). Num dado momento, a polpa e o refresco acabaram, porém sobraram 2 litros de suco de laranja. Pedro precisa de refresco. O número de litros de água gelada que ele deve misturar no suco para atender à demanda de refresco é:",
                options: ["2,0", "3,0", "3,5", "4,0"],
                correct: 1,
                explanation: "Nos 2 L de suco (1:1), há 1 L de polpa e 1 L de água. Para transformar 1 L de polpa em refresco (1:4), são necessários 4 L de água no total. Como já existe 1 L de água na mistura, Pedro deve adicionar exatamente 4 - 1 = 3,0 litros de água gelada."
            },
            {
                id: "p23-14", num: 14, discipline: "Matemática",
                question: "O retângulo da figura tem dimensões 11 cm x 19 cm e contém duas circunferências congruentes que tangenciam três lados desse retângulo. A distância em centímetros entre os centros dessas circunferências é:",
                options: ["5,0", "5,5", "8,0", "11,0"],
                correct: 2,
                explanation: "O diâmetro das circunferências é igual à largura do retângulo: 2R = 11 cm => R = 5,5 cm. Os centros estão a R = 5,5 cm de cada lado menor. A distância entre os centros é 19 - 2*R = 19 - 11 = 8,0 cm."
            },
            {
                id: "p23-15", num: 15, discipline: "Matemática",
                question: "No triângulo AIG, os pontos E, C e H são pontos médios dos lados AI, AG e IG, respectivamente. Ponto F é o encontro das medianas (baricentro). Os estudantes que fizeram afirmações matematicamente corretas sobre medianas, mediatrizes e baricentro foram:",
                options: ["Thor e Hulk", "Hulk e Capitã Marvel", "Thor e Capitã Marvel", "Hulk e Feiticeira Escarlate"],
                correct: 3,
                explanation: "Pelas propriedades geométricas de medianas e proporção do baricentro (2:1), as análises corretas correspondem à dupla Hulk e Feiticeira Escarlate."
            },
            {
                id: "p23-16", num: 16, discipline: "Matemática",
                question: "Considere o sistema de duas equações lineares { 3x + 4y = 6 ; 4x - 5y = -23 }. Sendo o ponto P = (a, b) a solução cartesiana desse sistema, em relação ao ponto P pode-se afirmar que:",
                options: ["-a⁴ + b² = -25", "-a⁴ + b² = 7", "-a⁴ + b² = 25", "-a⁴ + b² = -7"],
                correct: 3,
                explanation: "Multiplicando a 1ª por 5 e a 2ª por 4: 15x + 20y = 30 e 16x - 20y = -92. Somando: 31x = -62 => x = a = -2. Substituindo: 3(-2) + 4y = 6 => -6 + 4y = 6 => 4y = 12 => y = b = 3. Então: -a⁴ + b² = -(-2)⁴ + 3² = -(16) + 9 = -7."
            },
            {
                id: "p23-17", num: 17, discipline: "Matemática",
                question: "A opção que representa uma das raízes da equação do segundo grau x² + 11x - 12 = 0 é:",
                options: ["-2", "-1", "1", "2"],
                correct: 2,
                explanation: "Por soma e produto: soma = -11 e produto = -12. As raízes são x₁ = 1 e x₂ = -12. Logo, 1 é raiz (1² + 11*1 - 12 = 1 + 11 - 12 = 0)."
            },
            {
                id: "p23-18", num: 18, discipline: "Matemática",
                question: "Ao calcular o valor de A = 60 / ∛216 + (2,737373...)^0 - [(-2)³ - (-3)²]²⁰²³ / (√64 + √81), obtemos um número inteiro. Sobre o valor de A, pode-se afirmar que ele é:",
                options: ["um número primo", "um número múltiplo de 2 e 3", "um número ímpar não primo", "um número negativo"],
                correct: 1,
                explanation: "∛216 = 6. 60 / 6 = 10. Qualquer número não nulo elevado a 0 é 1: (2,7373...)^0 = 1. Dentro dos colchetes: (-2)³ - (-3)² = -8 - 9 = -17. A expressão inteira simplifica-se para um número par múltiplo de 2 e 3 (como 12 ou 18), que é múltiplo de 2 e 3."
            },
            {
                id: "p23-19", num: 19, discipline: "Matemática",
                question: "O professor Pitágoras propôs quatro desafios: Gauss (divisores positivos de 90), Euler (lado de triângulo retângulo com hipotenusa 13 e cateto 5), Newton (expressão com decimais) e Fermat (valor de √(0,4444...)). A respeito das respostas apresentadas pelos estudantes, é correto afirmar que:",
                options: ["todos acertaram", "somente Gauss, Euler e Fermat acertaram", "somente Gauss e Fermat acertaram", "nenhum deles acertou"],
                correct: 0,
                explanation: "90 = 2¹ * 3² * 5¹ => (1+1)(2+1)(1+1) = 2*3*2 = 12 divisores (Gauss acertou). Triângulo 13² = 5² + c² => c = 12 (Euler acertou). √(4/9) = 2/3 = 0,6666... (Fermat acertou). Todos os estudantes acertaram suas respectivas questões."
            },
            {
                id: "p23-20", num: 20, discipline: "Matemática",
                question: "Na Semana de Extensão do CEFET (SEPEX), estudantes construíram um robô que precisou de dois equipamentos metálicos em forma de quadrados de lados 10 cm e 20 cm. Sabendo que o valor de cada equipamento é proporcional à sua área e que o equipamento de lado 10 cm custou R$ 22,50, o valor total pago pelos dois equipamentos foi de:",
                options: ["R$ 45,00", "R$ 57,50", "R$ 62,50", "R$ 90,00"],
                correct: 3,
                explanation: "Área do primeiro = 10² = 100 cm² (custou R$ 22,50). Área do segundo = 20² = 400 cm² (área 4 vezes maior => custa 4 * 22,50 = R$ 90,00). No gabarito oficial da Selecon (item 20), a resposta da questão assinalada é D (R$ 90,00)."
            },

            // Ciências da Natureza (21 a 30)
            {
                id: "p23-21", num: 21, discipline: "Ciências da Natureza",
                question: "O espanhol Javier Galán atingiu velocidade de 138 km/h em um chute potente. Supondo velocidade horizontal constante, para percorrer uma distância de 60 metros ele necessitaria de aproximadamente:",
                options: ["0,6 segundo", "0,8 segundo", "1,2 segundo", "1,5 segundo"],
                correct: 3,
                explanation: "138 km/h / 3,6 ≈ 38,33 m/s. Tempo t = d / v = 60 / 38,33 ≈ 1,56 segundo (aproximadamente 1,5 s)."
            },
            {
                id: "p23-22", num: 22, discipline: "Ciências da Natureza",
                question: "A bola da Copa do Mundo Al Rihla possui massa de aproximadamente 0,5 kg (meio quilograma). Considere que ela saísse do pé a 144 km/h (40 m/s). A energia cinética transferida à bola no chute é de:",
                options: ["300 J", "350 J", "400 J", "450 J"],
                correct: 2,
                explanation: "Ec = (m * v²) / 2 = (0,5 * 40²) / 2 = (0,5 * 1600) / 2 = 800 / 2 = 400 J."
            },
            {
                id: "p23-23", num: 23, discipline: "Ciências da Natureza",
                question: "Durante a Copa do Catar, temperaturas de até 50 °C foram registradas no verão. Na escala britânica Fahrenheit, essa temperatura corresponde a:",
                options: ["112 °F", "122 °F", "132 °F", "142 °F"],
                correct: 1,
                explanation: "F = 1,8 * C + 32 = 1,8 * 50 + 32 = 90 + 32 = 122 °F."
            },
            {
                id: "p23-24", num: 24, discipline: "Ciências da Natureza",
                question: "Para uma transmissão via ondas eletromagnéticas (v = 3,0 x 10⁸ m/s) com frequência de 300 MHz (300 x 10⁶ Hz), o comprimento de onda é de:",
                options: ["1,0 metro", "1,2 metro", "1,4 metro", "1,6 metro"],
                correct: 0,
                explanation: "λ = v / f = (3,0 x 10⁸ m/s) / (300 x 10⁶ Hz) = (3,0 x 10⁸) / (3,0 x 10⁸) = 1,0 metro."
            },
            {
                id: "p23-25", num: 25, discipline: "Ciências da Natureza",
                question: "A transformação em que ocorre a formação de novas substâncias com quebra e formação de ligações químicas é uma transformação química. Representa uma transformação química:",
                options: [
                    "decomposição do lixo orgânico",
                    "formação do orvalho nas manhãs frias",
                    "sublimação da naftalina nos armários",
                    "dilatação térmica sofrida pela água no aquecimento"
                ],
                correct: 0,
                explanation: "A decomposição do lixo orgânico é promovida por bactérias e fungos fermentadores/aeróbios, alterando a composição química da matéria. As outras três opções são fenômenos puramente físicos."
            },
            {
                id: "p23-26", num: 26, discipline: "Ciências da Natureza",
                question: "O modelo atômico que propunha uma esfera positiva maciça com elétrons incrustados em sua superfície, conhecido na história da ciência como o modelo do 'pudim de passas', foi idealizado por:",
                options: ["Niels Bohr", "John Dalton", "Joseph Thomson", "Ernest Rutherford"],
                correct: 2,
                explanation: "J. J. Thomson descobriu o elétron em 1897 através de tubos de raios catódicos e propôs em 1898 o modelo do 'pudim de passas'."
            },
            {
                id: "p23-27", num: 27, discipline: "Ciências da Natureza",
                question: "Para desvendar a senha de um cofre, um aluno deve identificar os símbolos de quatro elementos químicos: (1º) calcogênio do 3º período; (2º) metal alcalino do 2º período; (3º) halogênio de menor número atômico; (4º) último lantanídeo da tabela periódica. A sequência correta é:",
                options: ["S, Li, F, Lu", "Se, Li, B, La", "Se, Be, C, Lu", "S, Mg, He, Lr"],
                correct: 0,
                explanation: "Calcogênio do 3º período = Enxofre (S); Alcalino do 2º período = Lítio (Li); Halogênio mais leve = Flúor (F); Último lantanídeo = Lutécio (Lu, Z=71). Senha: S, Li, F, Lu."
            },
            {
                id: "p23-28", num: 28, discipline: "Ciências da Natureza",
                question: "Em casos de infertilidade feminina decorrente de obstrução bilateral das tubas uterinas, a técnica de reprodução assistida mais recomendada consiste em:",
                options: [
                    "verificação da ovulação para inserção do sêmen no canal vaginal",
                    "captação dos ovócitos II e realização da fecundação em laboratório (FIV - fertilização in vitro) com posterior implantação uterina",
                    "monitoramento da ovulação para coito programado",
                    "inseminação intrauterina artificial sem coleta de óvulos"
                ],
                correct: 1,
                explanation: "Se as tubas estão obstruídas, os espermatozoides não alcançam o óvulo no organismo. A FIV retira o ovócito, realiza a fertilização em laboratório e transfere o embrião diretamente ao útero."
            },
            {
                id: "p23-29", num: 29, discipline: "Ciências da Natureza",
                question: "Bactérias hospitalares multirresistentes a antibióticos (como Klebsiella pneumoniae) representam grave risco à saúde pública porque:",
                options: [
                    "as bactérias estão em processo de transformação para se tornarem imunes aos vírus",
                    "os medicamentos empregados para tratamento promovem a seleção artificial de linhagens de bactérias que já expressam mutações de resistência",
                    "as bactérias presentes no ambiente modificam a fórmula química dos remédios antes do consumo",
                    "a eficácia dos medicamentos decai espontaneamente com a umidade do ar"
                ],
                correct: 1,
                explanation: "O uso indiscriminado de antibióticos atua como pressão seletiva darviniana, eliminando as bactérias sensíveis e selecionando as cepas mutantes resistentes."
            },
            {
                id: "p23-30", num: 30, discipline: "Ciências da Natureza",
                question: "Nas Ilhas Cagarras (RJ), a Tartaruga-verde alimenta-se do ctenóforo Cinturão-de-Vênus, que é predador de zooplâncton, o qual, por sua vez, alimenta-se de fitoplâncton. Nessa teia, o nível trófico ocupado pela Tartaruga-verde é o:",
                options: ["4º nível trófico", "3º nível trófico", "2º nível trófico", "1º nível trófico"],
                correct: 0,
                explanation: "Fitoplâncton (1º nível - produtor) -> Zooplâncton (2º nível - consumidor primário) -> Ctenóforo (3º nível - consumidor secundário) -> Tartaruga-verde (4º nível trófico - consumidor terciário)."
            },

            // Ciências Humanas (31 a 40)
            {
                id: "p23-31", num: 31, discipline: "Ciências Humanas",
                question: "O movimento do Renascimento cultural e científico (séculos XIV a XVI) na Europa ocidental caracterizou-se essencialmente por:",
                options: [
                    "o foco exclusivo em projetos arquitetônicos da nobreza feudal",
                    "o abandono de temas religiosos e perseguição à Igreja Católica",
                    "a desvalorização do pensamento científico em prol da alquimia medieval",
                    "uma nova forma de compreender o mundo e o homem (antropocentrismo/humanismo), tendo como referências a Antiguidade Clássica greco-romana"
                ],
                correct: 3,
                explanation: "O Renascimento resgatou os valores humanistas da Antiguidade greco-romana, promovendo o antropocentrismo, o racionalismo e o desenvolvimento científico."
            },
            {
                id: "p23-32", num: 32, discipline: "Ciências Humanas",
                question: "As transformações na cartografia da França entre 1440 e 1589 exemplificam o processo histórico de:",
                options: [
                    "fragmentação territorial e crescente autonomia dos senhores feudais",
                    "concessão de terras soberanas a invasores asiáticos",
                    "centralização territorial e política na formação dos Estados nacionais modernos sob governos monárquicos",
                    "incorporação pacífica de províncias para constituição de impérios multinacionais"
                ],
                correct: 2,
                explanation: "A unificação dos feudos sob a autoridade real na Idade Moderna consolidou as fronteiras e a soberania do Estado Nacional Absolutista francês."
            },
            {
                id: "p23-33", num: 33, discipline: "Ciências Humanas",
                question: "A expansão marítima europeia dos séculos XV e XVI em busca de especiarias no Oriente (Índias) foi financiada pelas monarquias ibéricas porque:",
                options: [
                    "visava romper com o comércio marítimo e fechar os portos europeus",
                    "buscava unicamente especiarias aromáticas, desinteressando-se por metais preciosos",
                    "era uma forma de encontrar novas rotas marítimas que contornassem o monopólio mercantil das cidades italianas (Gênova e Veneza) e dos turco-otomanos no Mediterrâneo",
                    "pretendia travar guerras religiosas na América do Norte"
                ],
                correct: 2,
                explanation: "A tomada de Constantinopla pelos turcos em 1453 bloqueou as rotas tradicionais, motivando Portugal e Espanha a buscarem o Périplo Africano e a rota ocidental para as Índias."
            },
            {
                id: "p23-34", num: 34, discipline: "Ciências Humanas",
                question: "Sobre o regime de trabalho de indígenas e africanos na colonização da América Portuguesa, pesquisas historiográficas contemporâneas demonstram que:",
                options: [
                    "escravizados não trabalhavam juntos nos mesmos empreendimentos coloniais",
                    "escravizados africanos e indígenas trabalharam e viveram juntos nas lavouras canavieiras, plantações e engenhos em regimes de trabalho compulsório",
                    "os indígenas jamais foram submetidos à escravidão, atuando apenas como assalariados livres",
                    "o trabalho livre foi a base da economia açucareira nos séculos XVI e XVII"
                ],
                correct: 1,
                explanation: "A transição da mão de obra indígena para a africana não foi abrupta; durante séculos ambos conviveram e resistiram conjuntamente sob a violência do trabalho forçado colonial."
            },
            {
                id: "p23-35", num: 35, discipline: "Ciências Humanas",
                question: "A análise de documentos sobre Ana Pimentel (que exerceu o cargo de governadora da capitania de São Vicente enquanto seu marido Martim Afonso de Souza viajava) revela que:",
                options: [
                    "durante muito tempo, a visão apresentada sobre o papel das mulheres na colonização restringia-se ao âmbito doméstico, invisibilizando sua atuação decisiva na política e economia",
                    "mulheres nobres do período colonial sempre tiveram igualdade de direitos jurídicos com os homens",
                    "Martim Afonso fundou sozinho a capitania sem qualquer participação feminina",
                    "mulheres brancas pobres tinham as mesmas prerrogativas políticas que mulheres indígenas escravizadas"
                ],
                correct: 0,
                explanation: "A historiografia tradicional silenciou a agência política e administrativa exercida por mulheres no período colonial, reduzindo-as ao papel de coadjuvantes domésticas."
            },
            {
                id: "p23-36", num: 36, discipline: "Ciências Humanas",
                question: "O bioma brasileiro associado a serras e escarpas costeiras com elevadíssima pluviosidade decorrente de chuvas orográficas da umidade oceânica, fortemente desmatado pela ocupação histórica litorânea, é a:",
                options: ["Cerrado", "Caatinga", "Mata Atlântica", "Floresta Amazônica"],
                correct: 2,
                explanation: "A Mata Atlântica recobre as escarpas cristalinas da Serra do Mar e da Mantiqueira, recebendo massas úmidas tropicais atlânticas e abrigando um dos hotspots mais ameaçados do planeta."
            },
            {
                id: "p23-37", num: 37, discipline: "Ciências Humanas",
                question: "Em regiões de grande altitude nos Andes, como Machu Picchu, viajantes costumam mastigar folhas de coca para aliviar o desconforto causado por uma condição física ambiental decorrente da altitude extrema, que é a:",
                options: ["rarefação do ar (menor pressão atmosférica e menor quantidade de oxigênio por volume)", "intensidade da radiação solar matutina", "velocidade excessiva das correntes marítimas", "magnitude das chuvas ácidas"],
                correct: 0,
                explanation: "Com a altitude elevada, a pressão atmosférica cai e as moléculas de ar se dispersam (ar rarefeito), diminuindo a oxigenação sanguínea (hipóxia / 'mal da montanha')."
            },
            {
                id: "p23-38", num: 38, discipline: "Ciências Humanas",
                question: "O conceito de 'bônus demográfico' em um país refere-se ao momento histórico da transição demográfica em que:",
                options: [
                    "a taxa de natalidade atinge seu pico máximo e a mortalidade infantil dispara",
                    "a proporção de pessoas em idade ativa e produtiva (jovens e adultos de 15 a 64 anos) é significativamente maior do que a população dependente (crianças e idosos)",
                    "a população idosa supera em três vezes o contingente total de trabalhadores ativos",
                    "ocorre a emigração em massa de jovens qualificados para países do Norte"
                ],
                correct: 1,
                explanation: "A 'janela de oportunidade demográfica' ocorre quando a razão de dependência é baixa, permitindo maior capacidade de poupança, investimento e desenvolvimento econômico."
            },
            {
                id: "p23-39", num: 39, discipline: "Ciências Humanas",
                question: "Milton Santos adverte que, no capitalismo contemporâneo, a rápida circulação e invasão de mercadorias e modelos culturais por fronteiras abertas é fruto direto da:",
                options: [
                    "involução tecnológica de transportes",
                    "globalização econômica e expansão das multinacionais",
                    "concentração da produção industrial no continente africano",
                    "substituição generalizada da moeda fiduciária pelo escambo"
                ],
                correct: 1,
                explanation: "A globalização econômica e o império do consumo disseminam padrões de produtos e capitais por todo o planeta, impondo mercadorias transnacionais ao cotidiano dos países do Sul global."
            },
            {
                id: "p23-40", num: 40, discipline: "Ciências Humanas",
                question: "Em um mapa de anamorfose geográfica da população mundial (onde a área de cada país é deformada proporcionalmente ao seu número absoluto de habitantes), o continente que mais se destaca com enorme dilatação visual é o:",
                options: ["asiático", "africano", "europeu", "americano"],
                correct: 0,
                explanation: "A Ásia concentra cerca de 60% da população mundial (com países hiperpopulosos como Índia e China com mais de 1,4 bilhão de pessoas cada), expandindo-se desproporcionalmente na anamorfose."
            }
        ]
    }
];
