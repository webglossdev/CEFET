/* ══════════════════════════════════════════════════════════════
   MATRIZ CURRICULAR OFICIAL CEFET-RJ 2027 — FRAMEWORK ANTI-DECOREBA
   64 Módulos Pedagógicos: Trilha Seleção (Edital) + Trilha Reforço (BNCC)
   ══════════════════════════════════════════════════════════════ */

window.curriculum = [
    /* ─────────────────────────────────────────────────────────────
       1. MATEMÁTICA (13 Módulos: 11 Seleção + 2 Reforço)
       ───────────────────────────────────────────────────────────── */
    {
        id: "mat", name: "Matemática", icon: "📐",
        modules: [
        {
            id: "mat-01", title: "1. Frações, Decimais & Porcentagens", time: "25 min", difficulty: "nivelamento",
            track: "reforco", prerequisites: [], examTopics: ["BNCC 6º/7º Ano — Base de Aritmética", "Edital 1.3: Números racionais e reais, operações, proporcionalidade"],
            simpleExplanation: `
                <div style="line-height:1.75; font-size:14.5px;">
                    <p><strong>🍞 1. O que é Fração?</strong> Pense numa barra de chocolate dividida em pedaços iguais. O número de baixo (<strong>Denominador</strong>) diz em quantos pedaços a barra foi cortada. O de cima (<strong>Numerador</strong>) diz quantos pedaços você pegou. Se cortou em 4 e pegou 1, você tem <code>1/4</code> (25% ou 0,25).</p>
                    
                    <p><strong>🪜 2. Por que precisamos do MMC para somar?</strong> Imagine somar 1 pedaço de uma barra cortada em 2 partes (<code>1/2</code>) com 1 pedaço de uma barra cortada em 3 partes (<code>1/3</code>). Os pedaços têm <em>tamanhos diferentes</em>! Não dá para somar direto. O <strong>MMC (Mínimo Múltiplo Comum)</strong> é apenas encontrar um novo corte de barra que sirva para as duas ao mesmo tempo: cortando tudo em 6 pedaços (porque 6 está na tabuada do 2 e do 3), <code>1/2</code> vira <code>3/6</code> e <code>1/3</code> vira <code>2/6</code>. Agora sim: <code>3/6 + 2/6 = 5/6</code>!</p>
                    
                    <p><strong>✂️ 3. E para que serve o MDC?</strong> O <strong>MDC (Máximo Divisor Comum)</strong> serve para o caminho inverso: <strong>simplificar</strong>! Se a sua conta der <code>12/18</code>, você não vai achar essa resposta no gabarito do CEFET. Dividindo em cima e embaixo pelo MDC (que é 6), você acha a resposta oficial: <code>2/3</code>.</p>
                </div>
            `,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Por que as Frações foram Inventadas na História?</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Há mais de 3.500 anos, no Antigo Egito, os escribas do Faraó enfrentavam um dilema insolúvel apenas com números inteiros: se um feitor tinha <strong>7 pães para alimentar 10 trabalhadores</strong> ao final de uma jornada de trabalho sob o sol do deserto, como fazer uma divisão rigorosamente justa para que ninguém se rebelasse?
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Os números inteiros (1, 2, 3...) servem apenas para contar coisas inteiras. Mas a realidade é cheia de medidas quebradas. Registrado no famoso <em>Papiro de Rhind</em> (1650 a.C.), os egípcios criaram as frações unitárias para dividir terras férteis após as enchentes anuais do Rio Nilo e calcular impostos justos de grãos.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada & Analogia Intuitiva: O Tamanho das Fatias</div>
    <p>Imagine uma pizza gigante. O número de baixo da fração, o <strong>Denominador</strong>, é o cortador de pizza: ele define em quantas fatias iguais a pizza inteira foi dividida. O número de cima, o <strong>Numerador</strong>, é a sua fome: quantas fatias você colocou no prato.</p>
    <p>• <strong>Fração Equivalente:</strong> Comer <code>2/8</code> de uma pizza de 8 fatias é <em>rigorosamente a mesma quantidade</em> de quem pegou uma pizza cortada em 4 pedaços e comeu <code>1/4</code>! Trocar frações equivalentes é como trocar uma nota de R$ 20 por duas notas de R$ 10: a aparência mudou, mas o poder de compra é idêntico.</p>
    <p>• <strong>Decimal e Porcentagem:</strong> O número decimal é apenas a conta de divisão feita até o fim (<code>1 ÷ 4 = 0,25</code>). E a porcentagem é ler esse decimal pensando em 100 centavos: 0,25 é 25 centavos de 1 real, ou seja, <strong>25%</strong>.</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos Frações na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Resolução de Telas e Vídeos (Aspect Ratio):</strong> A proporção de cinema <code>16:9</code> ou de celulares <code>19.5:9</code> nada mais é do que frações que determinam a largura por altura dos pixels.</li>
        <li><strong>Baterias de Smartphones & Carros Elétricos:</strong> Quando o ícone mostra 35%, o microcontrolador mediu a tensão elétrica como fração da carga máxima (<code>35/100 = 7/20</code>).</li>
        <li><strong>Culinária e Química Farmacêutica:</strong> Preparar o dobro de um remédio ou receita culinária exige multiplicar todas as frações dos reagentes por 2 sem alterar a concentração.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #00d6b6;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:12px;">
        <span style="font-size:26px;">🔬</span>
        <h3 style="margin:0; font-size:18px; color:var(--text-primary);">Teoria Descomplicada: Operações, o Segredo do MMC e a Simplificação por MDC</h3>
    </div>
    <p style="font-size:15px; line-height:1.75; color:var(--text-secondary); margin-bottom:16px;">
        Muitos estudantes tentam decorar que <em>"soma de fração divide pelo de baixo e multiplica pelo de cima"</em>, mas na hora da prova esquecem a ordem ou travam porque nunca entenderam <strong>por onde a conta começa a andar</strong>. Vamos desmontar esse mistério passo a passo para que você nunca mais dependa de sorte ou decoreba.
    </p>

    <!-- Alerta: O Erro Fatal que Elimina Candidatos -->
    <div style="background: rgba(235, 155, 10, 0.08); border-left: 4px solid #eb9b0a; padding: 14px 18px; border-radius: 8px; margin-bottom: 20px;">
        <strong style="color: #eb9b0a; font-size: 15px;">⚠️ O Erro Fatal que Elimina Candidatos:</strong>
        <p style="font-size: 14px; line-height: 1.7; color: var(--text-secondary); margin: 6px 0 0 0;">
            Se você fizer <code>1/2 + 1/3 = (1 + 1)/(2 + 3) = 2/5</code>, você acabou de cometer o erro mais comum da matemática básica! Pense com a lógica da vida real: <code>1/2</code> é meia pizza inteira (50%). Se você somar mais um terço (33%), você tem quase a pizza inteira (83%). Mas <code>2/5</code> é apenas 40% (menos do que a metade que você já tinha no início!). <strong>Não se pode somar frações com pedaços de tamanhos diferentes!</strong>
        </p>
    </div>

    <!-- Degrau 1: O que é MMC de verdade -->
    <h4 style="color: #00d6b6; font-size: 16px; margin: 20px 0 10px 0; display: flex; align-items: center; gap: 8px;">
        <span>🪜</span> Degrau 1: O que é o MMC e de Onde Ele Surge?
    </h4>
    <p style="font-size: 14.5px; line-height: 1.7; color: var(--text-secondary); margin-bottom: 12px;">
        Para somar <code>1/2</code> com <code>1/3</code>, precisamos encontrar um <strong>tamanho de corte em comum</strong> que sirva tanto para quem divide por 2 quanto para quem divide por 3. Esse tamanho é o <strong>Mínimo Múltiplo Comum (MMC)</strong>.
    </p>
    <div style="background: var(--surface); border: 1px solid var(--border); border-radius: 10px; padding: 14px 18px; margin-bottom: 16px;">
        <div style="font-size: 13.5px; color: var(--text-secondary); line-height: 1.8;">
            • <strong>Múltiplo de um número</strong> é simplesmente o resultado da tabuada dele:<br>
            &nbsp;&nbsp;Tabuada do 2: 2, 4, <strong style="color:#00d6b6;">6</strong>, 8, 10, <strong style="color:#00d6b6;">12</strong>, 14, 16, <strong style="color:#00d6b6;">18</strong>...<br>
            &nbsp;&nbsp;Tabuada do 3: 3, <strong style="color:#00d6b6;">6</strong>, 9, <strong style="color:#00d6b6;">12</strong>, 15, <strong style="color:#00d6b6;">18</strong>, 21...<br>
            • <strong>Múltiplos Comuns:</strong> Números que aparecem nas DUAS tabuadas ao mesmo tempo: <code>6, 12, 18, 24...</code><br>
            • <strong>MÍNIMO Múltiplo Comum (MMC):</strong> É o primeiro encontro das duas tabuadas, o menor de todos: <strong style="color:#00d6b6; font-size:15px;">6</strong>!
        </div>
    </div>

    <!-- Degrau 2: A Fatoração Simultânea -->
    <h4 style="color: #00d6b6; font-size: 16px; margin: 20px 0 10px 0; display: flex; align-items: center; gap: 8px;">
        <span>⚙️</span> Degrau 2: A Fatoração Simultânea (A Famosa "Barrinha")
    </h4>
    <p style="font-size: 14.5px; line-height: 1.7; color: var(--text-secondary); margin-bottom: 10px;">
        Quando os números forem maiores (ex: somar frações com denominadores 4 e 6), não precisamos escrever a tabuada inteira. Usamos a divisão simultânea por números primos (2, 3, 5, 7...):
    </p>
    <div style="background: #0b0f19; border: 1px solid var(--border); border-radius: 8px; padding: 14px 18px; font-family: monospace; font-size: 13.5px; line-height: 1.7; color: #e2e8f0; margin-bottom: 16px;">
        &nbsp;&nbsp;4 , 6 | <strong>2</strong>&nbsp;&nbsp;(4 ÷ 2 = 2;&nbsp; 6 ÷ 2 = 3)<br>
        &nbsp;&nbsp;2 , 3 | <strong>2</strong>&nbsp;&nbsp;(2 ÷ 2 = 1;&nbsp; 3 não divide por 2, apenas repete)<br>
        &nbsp;&nbsp;1 , 3 | <strong>3</strong>&nbsp;&nbsp;(3 ÷ 3 = 1)<br>
        &nbsp;&nbsp;1 , 1 | <strong>Fim!</strong> Multiplique a coluna da direita: <strong>2 × 2 × 3 = 12</strong>.<br>
        &nbsp;&nbsp;<span style="color:#00d6b6;">➔ O MMC entre 4 e 6 é exatamente 12!</span>
    </div>

    <!-- Degrau 3: O Mistério de Divide pelo de baixo -->
    <h4 style="color: #00d6b6; font-size: 16px; margin: 20px 0 10px 0; display: flex; align-items: center; gap: 8px;">
        <span>💡</span> Degrau 3: O Mistério de "Divide Pelo de Baixo e Multiplica Pelo de Cima"
    </h4>
    <p style="font-size: 14.5px; line-height: 1.7; color: var(--text-secondary); margin-bottom: 12px;">
        Agora que sabemos que o novo denominador comum entre 2 e 3 é <strong>6</strong>, por que fazemos essa regra? Veja o significado visual de cada etapa:
    </p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; margin-bottom: 18px;">
        <div style="background: var(--surface); border: 1px solid var(--border); border-radius: 10px; padding: 14px;">
            <strong style="color: var(--accent); font-size: 14px;">Convertendo a Fração 1/2:</strong>
            <p style="font-size: 13.5px; line-height: 1.6; color: var(--text-secondary); margin: 8px 0 0 0;">
                1º) <code>6 ÷ 2 = 3</code>: "Quantas fatias novas de tamanho 1/6 cabem na minha metade antiga?" Cabem <strong>3</strong>!<br>
                2º) <code>3 × 1 = 3</code>: "Como eu tinha 1 metade, agora fico com <strong>3 fatias de 1/6</strong>."<br>
                ➔ Resultado: <code>1/2 = 3/6</code>.
            </p>
        </div>
        <div style="background: var(--surface); border: 1px solid var(--border); border-radius: 10px; padding: 14px;">
            <strong style="color: var(--accent); font-size: 14px;">Convertendo a Fração 1/3:</strong>
            <p style="font-size: 13.5px; line-height: 1.6; color: var(--text-secondary); margin: 8px 0 0 0;">
                1º) <code>6 ÷ 3 = 2</code>: "Quantas fatias novas de tamanho 1/6 cabem no meu terço antigo?" Cabem <strong>2</strong>!<br>
                2º) <code>2 × 1 = 2</code>: "Como eu tinha 1 terço, agora fico com <strong>2 fatias de 1/6</strong>."<br>
                ➔ Resultado: <code>1/3 = 2/6</code>.
            </p>
        </div>
    </div>
    <div style="background: rgba(0, 214, 182, 0.08); border: 1px solid rgba(0, 214, 182, 0.25); border-radius: 10px; padding: 14px 18px; margin-bottom: 20px; font-size: 14.5px; line-height: 1.7;">
        <strong>Conclusão da Soma:</strong> Agora que todas as fatias têm o mesmo tamanho (sextos), somamos apenas os numeradores:<br>
        <span style="font-size: 16px; font-weight: 800; color: #00d6b6;">1/2 + 1/3 = 3/6 + 2/6 = (3 + 2)/6 = 5/6</span>
    </div>

    <!-- O Método da Borboleta -->
    <div style="background: linear-gradient(135deg, rgba(138, 87, 235, 0.08), rgba(235, 155, 10, 0.05)); border: 1px dashed rgba(138, 87, 235, 0.35); border-radius: 12px; padding: 16px 18px; margin-bottom: 22px;">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
            <span style="font-size:20px;">🦋</span>
            <strong style="color: #a78bfa; font-size: 15px;">Atalho Ninja para a Prova: O Método da Borboleta (Multiplicação Cruzada)</strong>
        </div>
        <p style="font-size: 13.5px; line-height: 1.65; color: var(--text-secondary); margin-bottom: 10px;">
            Se a questão tiver apenas <strong>duas frações</strong> para somar ou subtrair, você não precisa armar a barrinha do MMC na hora da prova. Multiplique cruzado:
        </p>
        <div style="font-family: monospace; font-size: 14px; background: rgba(0,0,0,0.3); padding: 10px 14px; border-radius: 8px; color: #e2e8f0; line-height: 1.6;">
            1/2 + 1/3 = [(1 × 3) + (2 × 1)] / (2 × 3) = (3 + 2) / 6 = <strong>5/6</strong>
        </div>
        <p style="font-size: 12.5px; color: var(--text-tertiary); margin: 8px 0 0 0;">
            <em>Regra prática: Multiplica a diagonal principal + diagonal secundária no topo; multiplica os denominadores retos na base!</em>
        </p>
    </div>

    <!-- Degrau 4: E o MDC? -->
    <h4 style="color: #00d6b6; font-size: 16px; margin: 20px 0 10px 0; display: flex; align-items: center; gap: 8px;">
        <span>✂️</span> Degrau 4: E o MDC? Para que Serve e Onde Entra na Prova?
    </h4>
    <p style="font-size: 14.5px; line-height: 1.7; color: var(--text-secondary); margin-bottom: 12px;">
        Enquanto o MMC serve para <strong>iniciar</strong> a soma unificando os denominadores, o <strong>MDC (Máximo Divisor Comum)</strong> serve para o <strong>final da conta: simplificar a fração</strong> até a forma irredutível que aparece nas opções do gabarito!
    </p>
    <div style="background: var(--surface); border: 1px solid var(--border); border-radius: 10px; padding: 14px 18px; margin-bottom: 16px;">
        <div style="font-size: 13.5px; color: var(--text-secondary); line-height: 1.75;">
            • Imagine que sua conta terminou na fração <code>48/72</code>. Essa opção NÃO vai existir na prova.<br>
            • Os divisores de 48 são: 1, 2, 3, 4, 6, 8, 12, 16, <strong style="color:#eb9b0a;">24</strong>, 48.<br>
            • Os divisores de 72 são: 1, 2, 3, 4, 6, 8, 9, 12, 18, <strong style="color:#eb9b0a;">24</strong>, 36, 72.<br>
            • O <strong>MAIOR</strong> número que divide ambos ao mesmo tempo é o <strong>24</strong> (o MDC).<br>
            • Dividindo o de cima e o de baixo por 24 em uma única etapa: <code>(48 ÷ 24) / (72 ÷ 24) = 2/3</code>! Pronto, você achou a alternativa correta!
        </div>
    </div>

    <!-- Resumo das 4 Operações -->
    <h4 style="color: #00d6b6; font-size: 16px; margin: 20px 0 10px 0; display: flex; align-items: center; gap: 8px;">
        <span>📊</span> Resumo Visual das 4 Operações com Frações
    </h4>
    <div class="box-formula" style="line-height: 1.9; font-size: 14px;">
        <strong>➕ Soma & ➖ Subtração:</strong> EXIGEM denominadores iguais. Use o <strong>MMC</strong> para igualar os pedaços (ou o Método da Borboleta para 2 frações).<br>
        <strong>✖️ Multiplicação:</strong> NÃO usa MMC! Multiplica direto: topo × topo e base × base: <code>(2/3) · (4/5) = (2·4)/(3·5) = 8/15</code>.<br>
        <strong>➗ Divisão:</strong> NÃO usa MMC! Mantém a primeira fração, inverte a segunda e multiplica: <code>(2/3) ÷ (4/5) = (2/3) · (5/4) = 10/12 = 5/6</code>.<br>
        <strong>✂️ Simplificação Final:</strong> Divida numerador e denominador pelo <strong>MDC</strong> para chegar na fração irredutível do gabarito.
    </div>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Clássica da Banca do CEFET</div>
    <p>A banca adora enunciados em que frações incidem <strong>sobre o restante</strong> e não sobre o total! Exemplo: "gastei 1/3 do meu salário no aluguel e 1/4 <em>do que sobrou</em> no supermercado". Se você fizer <code>1/3 + 1/4 = 7/12</code>, você errou na hora! O correto é: se sobrou 2/3, o supermercado consumiu <code>1/4 de 2/3 = (1/4) · (2/3) = 2/12 = 1/6</code> do salário total!</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Em um processo seletivo do CEFET-RJ, 2/5 dos candidatos inscritos fizeram a prova pela manhã e 1/3 no turno da tarde. Se os 400 candidatos restantes fizeram a prova à noite, quantos candidatos se inscreveram no total?
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação do Enunciado</span><br>
        Manhã = 2/5 do total. Tarde = 1/3 do total. Noite = 400 candidatos (representa a fração restante para completar o total 1).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Modelagem Matemática</span><br>
        Somamos as frações da manhã e da tarde igualando as fatias: MMC(5, 3) = 15.<br>
        Manhã + Tarde = 2/5 + 1/3 = 6/15 + 5/15 = 11/15.<br>
        A fração restante que fez a prova à noite é: 1 − 11/15 = 4/15 do total.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Resolução dos Cálculos</span><br>
        Sabemos que 4/15 equivalem exatamente a 400 pessoas:<br>
        Se 4 partes = 400, então 1 parte (1/15) = 400 ÷ 4 = 100 pessoas.<br>
        O total de inscritos (as 15 partes de 15) é: 15 · 100 = 1.500 pessoas.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        Inscreveram-se no concurso exatamente <strong>1.500 candidatos</strong>.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Qual é o resultado simplificado da expressão (3/4 − 1/6) ÷ (7/12)?",
                    options: ["1", "7/12", "14/72", "1/2"],
                    correct: 0,
                    exp: "Primeiro resolvemos o parêntese: MMC(4,6) = 12 → (9/12 − 2/12) = 7/12. Dividindo: (7/12) ÷ (7/12) = 1."
                },
                {
                    type: "text",
                    q: "Qual é o valor decimal exato da fração 3/8? (Use vírgula para decimais)",
                    a: ["0,375", "0.375"],
                    exp: "Dividindo 3 por 8: 3 ÷ 8 = 0,375 (trezentos e setenta e cinco milésimos)."
                },
                {
                    type: "mc",
                    q: "Ao simplificar a fração 48/72 dividindo numerador e denominador pelo MDC(48, 72) = 24, obtém-se a fração irredutível:",
                    options: ["2/3", "3/4", "4/6", "1/2"],
                    correct: 0,
                    exp: "48 ÷ 24 = 2 e 72 ÷ 24 = 3 → Fração irredutível 2/3."
                }
            ]
        },
        {
            id: "mat-02", title: "2. Conjuntos & Diagramas de Venn", time: "25 min", difficulty: "fácil",
            track: "selecao", prerequisites: [], examTopics: ["Edital 1.1: Noção intuitiva de conjunto, operações, pertinência, inclusão, Diagramas de Venn-Euler"],
            simpleExplanation: `
                <p><strong>Em palavras simples:</strong> Pense em dois grupos de amigos: quem joga futebol (A) e quem joga videogame (B). Quem faz as duas coisas fica no meio, na <em>interseção</em> (A ∩ B). Se você quiser contar quantas pessoas existem no total sem contar ninguém duas vezes, você soma os dois grupos e subtrai a turma do meio!</p>
            `,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Por que a Teoria dos Conjuntos foi Inventada na História?</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        No final do século XIX, os matemáticos perceberam um problema perigoso: a matemática estava cheia de paradoxos e regras soltas sem uma fundação única e sólida. O matemático alemão <strong>Georg Cantor</strong> e o lógico britânico <strong>John Venn</strong> inventaram a Teoria dos Conjuntos para criar uma linguagem universal capaz de classificar e organizar rigorosamente qualquer ideia humana, desde contagens de objetos até infinitos.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Os diagramas visuais criados por John Venn em 1880 transformaram a lógica abstrata em desenhos geométricos intuitivos, permitindo enxergar sobreposições de ideias sem se perder no raciocínio verbal.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada & Analogia Intuitiva: Playlists do Spotify</div>
    <p>Imagine duas playlists no Spotify no seu celular: <strong>Playlist A (Trap Nacional)</strong> e <strong>Playlist B (Músicas para Malhar)</strong>.</p>
    <p>• <strong>Interseção (A ∩ B):</strong> São aquelas faixas de trap acelerado que você adicionou em AMBAS as playlists ao mesmo tempo. Ficam no miolo das duas bolhas cruzadas.</p>
    <p>• <strong>Diferença (A − B):</strong> São as músicas de trap lento que você ouve para relaxar e que NÃO combinam com academia (estão apenas na Playlist A e proibidas na B).</p>
    <p>• <strong>União (A ∪ B):</strong> É juntar todas as faixas das duas listas em uma só, com uma regra óbvia: se uma música estiver nas duas, o aplicativo não vai tocar duas vezes seguidas — ela entra uma única vez!</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos Conjuntos na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Filtros em Sites de E-commerce:</strong> Quando você pesquisa na Amazon ou Mercado Livre por <em>"Tênis Nike" (Conjunto A)</em> E <em>"Frete Grátis" (Conjunto B)</em> E <em>"Tamanho 40" (Conjunto C)</em>, o banco de dados calcula a <strong>Interseção (A ∩ B ∩ C)</strong> em milissegundos.</li>
        <li><strong>Bancos de Dados SQL da Indústria:</strong> Todo sistema corporativo (bancos, hospitais, redes sociais) usa operações de conjuntos com os comandos <code>INNER JOIN</code> (interseção) e <code>UNION</code> (união).</li>
        <li><strong>Algoritmos de Redes Sociais:</strong> Para sugerir "Pessoas que talvez você conheça", o Instagram calcula a interseção dos amigos dos seus amigos menos os contatos que você já segue.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Notações, Subconjuntos & A Fórmula da União</h3>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary);">
        Para não errar na prova do CEFET, você precisa dominar duas linguagens formais:
    </p>
    <ul style="font-size:15px; line-height:1.7; color:var(--text-secondary); padding-left:20px;">
        <li><strong>Pertinência (∈ e ∉):</strong> Liga um <em>indivíduo</em> ao seu grupo. Exemplo: <code>Neymar ∈ Jogadores</code>. (Nunca use pertence entre dois conjuntos!).</li>
        <li><strong>Inclusão (⊂ e ⊄):</strong> Liga um <em>grupo menor</em> a um <em>grupo maior</em>. Exemplo: <code>{Atacantes} ⊂ Jogadores</code>.</li>
        <li><strong>Por que o Conjunto das Partes tem $2^n$ subconjuntos?</strong> Porque ao montar um subconjunto qualquer, para cada elemento da lista você só tem duas escolhas binárias: ou ele <em>entra</em> ou <em>fica de fora</em> (como interruptores de luz: <code>2 · 2 · 2... = 2ⁿ</code>).</li>
    </ul>
    <div class="box-formula" style="line-height:1.8;">
        <strong>Fórmula Fundamental da União de 2 Conjuntos:</strong><br>
        n(A ∪ B) = n(A) + n(B) − n(A ∩ B)<br>
        <em>Demonstração: Se você somar n(A) + n(B), as pessoas do meio (interseção) foram contadas duas vezes. Por isso, você DEVE subtrair uma vez o n(A ∩ B) para corrigir a contagem!</em>
    </div>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Clássica da Banca do CEFET</div>
    <p>A banca adora confundir <strong>"gostam de A"</strong> com <strong>"gostam APENAS de A"</strong>! Se o texto diz que "40 alunos gostam de matemática e 15 gostam de matemática e física", o número de alunos que gostam <em>somente de matemática</em> é <code>40 − 15 = 25</code>! Regra de ouro da aprovação: <strong>Sempre comece preenchendo o diagrama pelo CENTRO (a interseção mais interna)!</strong></p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Em uma pesquisa com 50 alunos do 9º ano concorrentes ao CEFET Maracanã sobre cursos técnicos de preferência, 30 escolheram Informática, 25 escolheram Mecatrônica e 8 não demonstraram interesse por nenhum desses dois cursos. Quantos alunos escolheram AMBOS os cursos simultaneamente?
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação dos Dados</span><br>
        Total pesquisado = 50 alunos.<br>
        Alunos fora dos dois cursos = 8.<br>
        Total de alunos que escolheram ao menos um dos cursos: n(I ∪ M) = 50 − 8 = <strong>42 alunos</strong>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Modelagem Matemática</span><br>
        Aplicamos a fórmula da união com a incógnita x representando os que querem ambos (interseção):<br>
        n(I ∪ M) = n(I) + n(M) − n(I ∩ M)<br>
        42 = 30 + 25 − x
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Resolução dos Cálculos</span><br>
        42 = 55 − x<br>
        x = 55 − 42 = <strong>13</strong>.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        Exatamente <strong>13 candidatos</strong> têm interesse conjunto em cursar tanto Informática quanto Mecatrônica. (Checagem rápida: Apenas Informática = 30 − 13 = 17; Apenas Mecatrônica = 25 − 13 = 12; Ambos = 13; Nenhum = 8. Soma: 17 + 12 + 13 + 8 = 50 alunos!).
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Se A = {1, 2, 3, 4} e B = {3, 4, 5, 6}, o conjunto da diferença A − B é:",
                    options: ["{1, 2}", "{5, 6}", "{3, 4}", "{1, 2, 5, 6}"],
                    correct: 0,
                    exp: "A − B são os elementos que estão em A e NÃO estão em B: {1, 2}."
                },
                {
                    type: "text",
                    q: "Se um conjunto A tem 3 elementos, quantos subconjuntos ele possui no total? (2ⁿ)",
                    a: ["8"],
                    exp: "2³ = 8 subconjuntos."
                }
            ]
        },
        {
            id: "mat-03", title: "3. Conjuntos Numéricos, Dízimas & Racionalização", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: ["mat-01"], examTopics: ["Edital 1.3: Sistemas de numeração, naturais, inteiros, racionais e reais, valor absoluto, notação científica, potenciação e racionalização"],
            simpleExplanation: `
                <p><strong>Em palavras simples:</strong> Os números são como caixas: os <em>Naturais</em> (0, 1, 2...) cabem dentro dos <em>Inteiros</em> (...-2, -1, 0, 1, 2...), que cabem dentro dos <em>Racionais</em> (qualquer número que vira fração, incluindo dízimas periódicas como 0,333...). Já os <em>Irracionais</em> são números infinitos sem repetição como π e √2. E racionalizar é tirar a raiz da parte de baixo multiplicando em cima e embaixo pela raiz!</p>
            `,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">O Escândalo dos Números Irracionais: Por que foram Descobertos?</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Na Grécia Antiga (século V a.C.), a irmandade dos pitagóricos tinha um lema sagrado: <em>"Tudo no universo é número e proporção perfeita de frações inteiras"</em>. Para eles, qualquer comprimento do mundo podia ser medido pela divisão exata de dois números inteiros.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Porém, o jovem discípulo <strong>Hipaso de Metaponto</strong> desenhou um quadrado simples de lado 1 e calculou sua diagonal por Pitágoras: <code>1² + 1² = d² → d = √2</code>. Quando tentou transformar <code>√2</code> em fração, provou geometricamente que era impossível: aquele número tinha infinitas casas decimais sem qualquer repetição! A lenda diz que a descoberta provocou tanto pânico religioso que Hipaso foi atirado ao mar. Os números <strong>Irracionais (𝕀)</strong> nasciam como uma revolução.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: As Bonecas Russas & Por que Racionalizamos?</div>
    <p>• <strong>As Bonecas Russas dos Números:</strong> Pense em caixas encaixadas uma dentro da outra. A menor caixa é <code>ℕ (Naturais: 0, 1, 2, 3...)</code>. Ela cabe inteira dentro dos <code>ℤ (Inteiros: ...-2, -1, 0, 1, 2...)</code>. A caixa dos Inteiros cabe inteira dentro dos <code>ℚ (Racionais: toda fração a/b com denominador diferente de zero)</code>. E fora de todas essas caixas vivem os <strong>Irracionais (𝕀)</strong>, que não aceitam virar fração de jeito nenhum (como π, φ e √2).</p>
    <p>• <strong>Por que raios temos que "Racionalizar"?</strong> Imagine que você tem 10 reais para dividir entre 2 amigos: <code>10 ÷ 2 = 5</code> (fácil de cabeça!). Agora imagine ter que dividir 10 reais entre <code>1,41421356...</code> amigos (√2): a conta na mão é um pesadelo impraticável! Racionalizar é multiplicar em cima e embaixo por √2 para que o <strong>divisor vire um número inteiro amigável</strong> (<code>10/√2 = 5√2</code>).</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>O Padrão Internacional de Folhas A4:</strong> Por que a folha de papel A4 tem exatamente 210 mm × 297 mm? Porque a razão entre a altura e a largura é rigorosamente <strong>√2 ≈ 1,414</strong>! Graças a essa proporção irracional, se você dobrar a folha no meio, o novo retângulo resultante (A5) mantém a mesma proporção exata para fotocópias e impressões.</li>
        <li><strong>Design e Tecnologia (Proporção Áurea φ ≈ 1,618):</strong> Usada no design de cartões de crédito, telas de cinema e logotipos famosos (como a maçã da Apple e a espiral do caracol).</li>
        <li><strong>Robótica e Engenharia Mecânica:</strong> Todo cálculo de engrenagem circular ou esteira industrial envolve o número irracional <code>π = 3,14159...</code>.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: A Mágica do Conjugado & Dízimas Periódicas</h3>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary);">
        Para eliminar a raiz do denominador quando temos uma soma ou subtração (como <code>√a − b</code>), usamos o <strong>Conjugado</strong> (trocamos o sinal do meio). Veja a demonstração pelo produto notável da diferença de quadrados:
    </p>
    <div class="box-formula" style="line-height:1.8;">
        (√a − b) · (√a + b) = (√a)² − (b)² = <strong>a − b² (Livre de Raízes!)</strong><br><br>
        <strong>Como achar a Fração Geratriz de Dízimas (Ex: 0,777...):</strong><br>
        1) Seja x = 0,777...<br>
        2) Multiplicamos por 10: 10x = 7,777...<br>
        3) Subtraímos: 10x − x = 7,777... − 0,777... → 9x = 7 → <strong>x = 7/9 (Portanto é RACIONAL ℚ!)</strong>
    </div>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Clássica da Banca do CEFET</div>
    <p>A banca do CEFET adora perguntar se números com dízimas periódicas como <code>0,999...</code> ou <code>2,333...</code> são números Irracionais. <strong>NUNCA CAIA NESSA: se tem repetição periódica, SEMPRE vira fração, logo É RACIONAL (ℚ)!</strong> Os únicos Irracionais reais são raízes não exatas (√2, √3, √5, ∛4) e constantes transcendentais (π, e, φ).</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Racionalize e determine o valor numérico simplificado da expressão: <code>E = 6 / (√7 − 1)</code>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação do Problema</span><br>
        Temos uma raiz no denominador acompanhada de uma subtração: (√7 − 1). Não podemos deixar a raiz na parte inferior.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Modelagem por Conjugado</span><br>
        Multiplicamos tanto o numerador quanto o denominador pelo conjugado <strong>(√7 + 1)</strong>:
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Execução dos Cálculos</span><br>
        Numerador: 6 · (√7 + 1)<br>
        Denominador: (√7 − 1) · (√7 + 1) = (√7)² − 1² = 7 − 1 = 6.<br>
        Substituindo na fração: E = [6(√7 + 1)] / 6. Cancelamos o fator 6!
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        O valor simplificado e racionalizado é exatamente <strong>√7 + 1</strong>.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Qual dos seguintes números pertence ao conjunto dos números Irracionais (𝕀)?",
                    options: ["√9", "0,555...", "√7", "−4/2"],
                    correct: 2,
                    exp: "√7 é uma raiz não exata com dízima não periódica, sendo um número Irracional."
                },
                {
                    type: "text",
                    q: "Ao racionalizar a fração 10/√5, qual número inteiro multiplica a raiz √5 no numerador simplificado?",
                    a: ["2"],
                    exp: "10√5 / 5 = 2√5 → O coeficiente é 2."
                }
            ]
        },
        {
            id: "mat-04", title: "4. MDC, MMC & Potenciação", time: "25 min", difficulty: "fácil",
            track: "selecao", prerequisites: [], examTopics: ["Edital 1.3: Múltiplos e divisores, MDC e MMC, potenciação e propriedades"],
            simpleExplanation: `
                <p><strong>Em palavras simples:</strong> <em>MMC</em> é quando coisas periódicas voltam a se encontrar. <em>MDC</em> é quando você quer cortar coisas de tamanhos diferentes no maior pedaço igual possível sem sobrar nada.</p>
            `,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Por que o MMC, MDC e Potências foram Inventados?</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Em 300 a.C., na lendária Biblioteca de Alexandria, o grego <strong>Euclides</strong> enfrentava desafios práticos de engenharia e astronomia: como sincronizar o calendário das colheitas com os ciclos da Lua e do Sol sem computadores? Como cortar vigas de madeira gigantescas de florestas distantes para erguer templos sem gerar sobras de material caras e inúteis?
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Euclides criou o famoso <em>Algoritmo da Divisão Sucessiva</em> para o <strong>MDC</strong>. Séculos depois, para não ter que escrever centenas de zeros para descrever grãos de areia e distâncias estelares, inventou-se a <strong>Potenciação</strong>, a forma compacta de registrar multiplicações repetitivas.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: O Terminal de Ônibus, O Serralheiro & O Contágio Viral</div>
    <p>• <strong>MMC (Reencontro no Futuro):</strong> Imagine dois ônibus que partem juntos da Central do Brasil: o BRT 10 sai a cada 12 minutos e o BRT 20 sai a cada 18 minutos. Quando eles voltarão a sair juntos no mesmo minuto? No <strong>Mínimo Múltiplo Comum: MMC(12, 18) = 36 minutos</strong>!</p>
    <p>• <strong>MDC (Corte Máximo sem Sobras):</strong> Se um marceneiro tem duas tábuas de 12 metros e 18 metros e quer cortar pedaços do <em>maior tamanho possível</em> sem desperdiçar nem 1 centímetro de serragem, o tamanho perfeito de cada pedaço será o <strong>Máximo Divisor Comum: MDC(12, 18) = 6 metros</strong>.</p>
    <p>• <strong>Potenciação (Efeito Bola de Neve / Vírus):</strong> Um meme na internet que cada pessoa repassa para 2 amigos. Na 1ª rodada são 2 pessoas, na 2ª são 4, na 3ª são 8, na 10ª rodada são <code>2¹⁰ = 1.024</code> pessoas e na 20ª rodada são mais de 1 milhão de pessoas!</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Memória de Celulares e Computadores:</strong> Por que os pendrives e celulares têm 64 GB, 128 GB, 256 GB, 512 GB? Porque os chips de silício funcionam em código binário (base 2), e essas capacidades são potências puras de 2 (<code>2⁶ = 64</code>, <code>2⁷ = 128</code>...).</li>
        <li><strong>Sincronização de Semáforos Inteligentes no Rio:</strong> A CET-Rio usa o MMC dos fluxos de trânsito para sincronizar as "ondas verdes" de semáforos na Avenida Presidente Vargas e Linha Vermelha.</li>
        <li><strong>Engrenagens Industriais de Mecânica (CEFET Maracanã):</strong> Para que os dentes de duas engrenagens não se desgastem sempre no mesmo ponto de impacto, o número de dentes de cada engrenagem é calculado usando números primos entre si (MDC = 1).</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Por que $a^0 = 1$ e $a^{-n} = 1/a^n$?</h3>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary);">
        Você não precisa apenas decorar as propriedades das potências: elas são deduções lógicas puras da divisão!
    </p>
    <div class="box-formula" style="line-height:1.8;">
        <strong>Por que todo número elevado a zero dá 1? ($a^0 = 1$)</strong><br>
        Pela regra da divisão de potências de mesma base: <code>a³ ÷ a³ = a³⁻³ = a⁰</code>.<br>
        Mas qualquer número dividido por ele mesmo é igual a 1 (ex: 8 ÷ 8 = 1). Logo, <strong>a⁰ DEVE ser igual a 1</strong>!<br><br>
        <strong>Por que expoente negativo inverte a base? ($a⁻ⁿ = 1/aⁿ$)</strong><br>
        Veja: <code>a² ÷ a⁵ = a²⁻⁵ = a⁻³</code>.<br>
        Agora abrindo em frações: <code>(a · a) / (a · a · a · a · a) = 1 / (a · a · a) = 1/a³</code>. Por isso o sinal de menos no expoente significa "inverta a fração"!
    </div>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ As Duas Pegadinhas Letais da Banca do CEFET</div>
    <p>1. <strong>O Parêntese com Sinal Negativo:</strong> <code>(−2)⁴ = +16</code> (o sinal de menos está dentro do parêntese e foi multiplicado 4 vezes), mas <code>−2⁴ = −16</code> (o menos não está sendo elevado, apenas o 2!).<br>
    2. <strong>Potência de Potência vs Expoente em Cascata:</strong> <code>(2³)² = 2³ˣ² = 2⁶ = 64</code>, mas <code>2^(3²) = 2⁹ = 512</code>! Essa diferença de 64 para 512 derruba centenas de candidatos todo ano.</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Dois semáforos de uma avenida movimentada piscam em amarelo piscante durante a madrugada em ciclos de 15 segundos e 20 segundos. Se eles piscaram juntos exatamente às 02h00 da manhã, a que horas voltarão a piscar juntos pela primeira vez?
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação do Problema</span><br>
        O problema envolve eventos periódicos que se repetem em intervalos fixos e pede o próximo momento de encontro futuro → Aplicação direta do <strong>MMC(15, 20)</strong>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Modelagem por Fatoração Prima</span><br>
        Fatorando simultaneamente por números primos:<br>
        15, 20 | ÷ 2 → 15, 10<br>
        15, 10 | ÷ 2 → 15, 5<br>
        15,  5 | ÷ 3 →  5, 5<br>
         5,  5 | ÷ 5 →  1, 1<br>
        MMC = 2 · 2 · 3 · 5 = 2² · 3 · 5 = <strong>60 segundos</strong>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Conversão de Unidades Temporais</span><br>
        60 segundos equivalem a exatamente <strong>1 minuto</strong>.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        Os dois semáforos voltarão a piscar juntos exatamente às <strong>02h01min00s</strong>.
    </div>
</div>`,
            questions: [
                {
                    type: "text",
                    q: "Qual é o valor numérico de 2³ · 2² ÷ 2⁴ ?",
                    a: ["2"],
                    exp: "2^(3+2) ÷ 2⁴ = 2⁵ ÷ 2⁴ = 2¹ = 2."
                },
                {
                    type: "mc",
                    q: "Qual é o MDC entre 24 e 36?",
                    options: ["6", "12", "18", "72"],
                    correct: 1,
                    exp: "O maior divisor comum a 24 e 36 é 12."
                }
            ]
        },
        {
            id: "mat-05", title: "5. Razão, Proporção, Escalas & Regra de Três", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: ["mat-01"], examTopics: ["Edital 1.3: Proporcionalidade — grandezas diretamente e inversamente proporcionais, ordem"],
            simpleExplanation: `
                <p><strong>Em palavras simples:</strong> Se duas grandezas aumentam juntas, é <em>proporção direta</em> (multiplica cruzado). Se uma aumenta e a outra diminui (mais operários = menos dias), é <em>inversa</em> (multiplica em linha reta)!</p>
            `,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Por que Razões, Proporções e Escalas foram Inventadas?</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Na Grécia Clássica e no Renascimento, arquitetos como Fídias e Leonardo da Vinci sabiam que uma estátua ou catedral só é bela e segura se todas as suas partes mantiverem uma <strong>harmonia proporcional perfeita</strong>. Se você dobrar a altura de um prédio sem dobrar a largura de suas colunas de sustentação na mesma razão, ele desaba sob o próprio peso!
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Com as Grandes Navegações no século XVI, a invenção das <strong>Escalas Cartográficas</strong> salvou milhares de vidas de marinheiros: representava-se um oceano de milhares de quilômetros em um pergaminho de meio metro mantendo cada ângulo e distância rigorosamente proporcional à realidade.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: A Receita de Bolo & O Mutirão de Pintura</div>
    <p>• <strong>Proporção Direta (Caminham de Mãos Dadas):</strong> Se 1 bolo de aniversário gasta 4 ovos, 3 bolos gastarão 12 ovos. Se uma grandeza <em>dobra</em>, a outra <em>dobra</em> junto. Na regra de três direta, multiplicamos em cruz (em "X").</p>
    <p>• <strong>Proporção Inversa (A Gangorra Matemática):</strong> Se 2 pintores demoram 6 horas para pintar a quadra poliesportiva do CEFET, o que acontece se chamarmos 4 pintores no total? Eles vão demorar 12 horas? Claro que não! Mais gente trabalhando significa <strong>menos tempo de serviço</strong>: demorarão 3 horas! Quando uma sobe, a outra desce: na regra de três inversa, o produto é constante e multiplicamos em <em>linha reta horizontal</em>!</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Google Maps e Waze:</strong> Quando você dá "zoom" no celular, a barra de escala no canto da tela (ex: <code>1 cm = 200 m</code>) recalcula em tempo real todas as distâncias proporcionais.</li>
        <li><strong>Medicina e Enfermagem (Dosagem Pediátrica):</strong> Um erro de proporção na dosagem de antibióticos por quilo corporal (mg/kg) pode ser fatal. O cálculo é feito por regra de três estrita.</li>
        <li><strong>Modelagem 3D & Design Gráfico:</strong> Redimensionar uma imagem sem "esticar" o rosto de uma pessoa exige travar a proporção (aspect ratio), mantendo constante a razão largura/altura.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Escalas & Como Nunca Errar a Conversão</h3>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary);">
        A <strong>Escala (E)</strong> é uma fração adimensional pura: <code>E = d / D</code>, onde <code>d</code> é o tamanho no desenho e <code>D</code> é o tamanho real. Para calcular sem errar, você DEVE colocar ambos na mesma unidade (centímetros!):
    </p>
    <div class="box-formula" style="line-height:1.8;">
        <strong>Tabela Mágica de Conversão de Distâncias:</strong><br>
        1 km = 1.000 metros = <strong>100.000 centímetros</strong> (ande 5 casas com a vírgula!)<br>
        1 metro = <strong>100 centímetros</strong> (ande 2 casas com a vírgula!)<br><br>
        <strong>Exemplo Prático:</strong> Se um mapa tem escala <code>1 : 50.000</code> e a distância entre o Maracanã e a Central é de 6 cm no mapa:<br>
        Real = 6 cm · 50.000 = 300.000 cm = 3.000 m = <strong>3 km na vida real</strong>!
    </div>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>A banca adora colocar <strong>Regra de Três Inversa</strong> disfarçada de direta! Toda vez que o enunciado falar sobre: <em>velocidade vs. tempo de viagem</em>, <em>quantidade de torneiras/ralos vs. tempo para encher/esvaziar</em> ou <em>número de operários vs. prazo de entrega</em>, PARE e pense: <strong>é inversa!</strong> Se você multiplicar cruzado como faz no automático, você vai marcar a alternativa errada que a banca colocou na letra A de propósito!</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Um caminhão de entregas viajando à velocidade média constante de 60 km/h realiza um percurso entre o Rio de Janeiro e Petrópolis em exatamente 2 horas. Se o motorista conseguisse elevar com segurança sua velocidade média para 80 km/h, qual seria o novo tempo total de viagem?
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação das Grandezas</span><br>
        Grandezas envolvidas: Velocidade (km/h) e Tempo (horas).<br>
        Análise crítica: Se a velocidade do veículo aumenta, o tempo de viagem <strong>diminui</strong>. Portanto, as grandezas são <strong>Inversamente Proporcionais</strong>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Modelagem por Produto Constante</span><br>
        Na proporção inversa, o produto entre as grandezas é sempre o mesmo (a distância percorrida não mudou!):<br>
        V₁ · T₁ = V₂ · T₂<br>
        60 · 2 = 80 · T₂
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Resolução dos Cálculos</span><br>
        120 = 80 · T₂<br>
        T₂ = 120 / 80 = 12 / 8 = 3 / 2 = <strong>1,5 horas</strong>.<br>
        Cuidado com a conversão: 0,5 hora = metade de 60 minutos = 30 minutos!
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        O tempo total da viagem à nova velocidade será de exatamente <strong>1 hora e 30 minutos</strong>.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Em um mapa com escala 1:50.000, a distância de 4 cm corresponde na realidade a:",
                    options: ["2 km", "4 km", "20 km", "200 km"],
                    correct: 0,
                    exp: "4 cm · 50.000 = 200.000 cm = 2 km."
                }
            ]
        },
        {
            id: "mat-06", title: "6. Probabilidade & Estatística Básica", time: "25 min", difficulty: "nivelamento",
            track: "reforco", prerequisites: ["mat-01"], examTopics: ["BNCC 8º/9º Ano — Tratamento da Informação (leitura de gráficos e estatística básica)"],
            simpleExplanation: `
                <p><strong>Em palavras simples:</strong> <em>Probabilidade</em> é 'o que eu quero' dividido por 'todas as chances'. <em>Média</em> é somar tudo e dividir pela quantidade. <em>Mediana</em> é o termo do meio no rol ordenado!</p>
            `,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Invenção da Probabilidade: O Nobre Viciado em Jogos de Azar</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Em 1654, na França, o nobre Chevalier de Méré vivia apostando fortunas em jogos de dados nos salões de Paris, mas começou a perder dinheiro com uma aposta que parecia vantajosa. Desesperado, ele escreveu uma carta ao jovem matemático e filósofo <strong>Blaise Pascal</strong>.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Pascal iniciou uma troca histórica de cartas com <strong>Pierre de Fermat</strong>. Juntos, eles conseguiram algo considerado impossível: <em>colocar rédeas matemáticas no acaso e na sorte</em>. A Teoria das Probabilidades nascia não para prever o futuro com bola de cristal, mas para calcular com precisão fria o risco e a vantagem de cada decisão.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: O Dado Honesto & Por que a Média Pode Enganar Você</div>
    <p>• <strong>Probabilidade:</strong> É uma simples disputa de frações entre <em>"o que eu torço para acontecer"</em> (Casos Favoráveis) e <em>"todas as coisas possíveis no mundo"</em> (Espaço Amostral). Em um dado honesto de 6 faces, a chance de sair um número par (2, 4 ou 6) é <code>3 / 6 = 1/2 = 50%</code>.</p>
    <p>• <strong>A Armadilha da Média vs. Mediana (O Bilionário no Bar):</strong> Imagine um pequeno bar no Maracanã com 4 trabalhadores que ganham R$ 2.000 por mês cada um. De repente, um bilionário que ganha R$ 1 milhão entra no bar. Se você calcular a <strong>Média Salarial</strong> das pessoas ali dentro, ela salta para mais de R$ 200 mil por mês! Mas alguém ali ficou rico de verdade? Não!<br>
    Por isso inventou-se a <strong>Mediana</strong>: você coloca todo mundo em fila ordenada pelo salário e pega a pessoa que está <strong>exatamente no meio</strong> da fila. A mediana continua sendo R$ 2.000, mostrando a realidade honesta sem se deixar enganar por um único valor absurdo.</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Previsão do Tempo em Aplicativos:</strong> Quando o app diz "70% de probabilidade de chuva no Rio", meteorologistas rodaram simulações climáticas de computador onde 7 de cada 10 cenários idênticos terminaram em chuva.</li>
        <li><strong>Inteligência Artificial (LLMs como ChatGPT):</strong> Modelos de linguagem não "pensam": eles calculam a probabilidade estatística de qual palavra tem mais chance de vir a seguir com base em bilhões de textos.</li>
        <li><strong>Testes de Eficácia de Remédios e Vacinas:</strong> A Anvisa e a Fiocruz só aprovam um novo medicamento quando análises estatísticas rigorosas comprovam que a cura não foi fruto do mero acaso.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Média Simples, Ponderada, Moda e Mediana</h3>
    <div class="box-formula" style="line-height:1.8;">
        <strong>Probabilidade Simples:</strong> P(A) = Casos Favoráveis / Total de Casos Possíveis (Sempre entre 0 e 1)<br><br>
        <strong>Média Ponderada:</strong> Mp = (N₁·P₁ + N₂·P₂ + ...) / (P₁ + P₂ + ...)<br>
        <em>Atenção: Você divide pela soma dos PESOS, e nunca pela quantidade de notas!</em><br><br>
        <strong>Moda:</strong> É o valor mais "popular" (que mais se repete na lista). Se nenhum se repete, é amodal.<br>
        <strong>Mediana:</strong> É o termo central do ROL (dados colocados rigorosamente em ordem crescente!). Se a quantidade de elementos for par, tira-se a média dos dois termos centrais.
    </div>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ As Duas Pegadinhas Letais da Banca do CEFET</div>
    <p>1. <strong>Calcular a Mediana sem Ordenar os Dados:</strong> Se a questão der a sequência <code>[10, 2, 8, 3, 5]</code> e você marcar o número 8 porque ele está visualmente no meio, você caiu na armadilha! O primeiro passo OBRIGATÓRIO é ordenar: <code>[2, 3, 5, 8, 10]</code>. A mediana verdadeira é <strong>5</strong>!<br>
    2. <strong>Probabilidade SEM Reposição:</strong> Se você retira uma carta ou bola de uma urna e NÃO a devolve, tanto o número de casos favoráveis quanto o <em>total de casos possíveis (denominador) diminuem em 1</em> para a segunda retirada!</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Em uma urna da gincana de matemática do CEFET há 12 fichas verdes, 8 amarelas e 10 azuis. Uma ficha é retirada aleatoriamente, sua cor é anotada e ela NÃO é reposta na urna. Em seguida, retira-se uma segunda ficha. Qual é a probabilidade de ambas as fichas sorteadas serem amarelas?
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação do Problema</span><br>
        Total inicial de fichas = 12 + 8 + 10 = <strong>30 fichas</strong>.<br>
        Fichas amarelas favoráveis na 1ª rodada = 8.<br>
        Evento composto com retiradas sucessivas <strong>SEM REPOSIÇÃO</strong>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Modelagem das Probabilidades Sucessivas</span><br>
        P(1ª Amarela) = 8 / 30.<br>
        Após retirar uma amarela sem devolver, restam 7 amarelas e um total de 29 fichas na urna.<br>
        P(2ª Amarela | 1ª Amarela) = 7 / 29.<br>
        P(Total) = P(1ª) · P(2ª) = (8 / 30) · (7 / 29).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Resolução dos Cálculos</span><br>
        Simplificamos 8/30 dividindo por 2: 4/15.<br>
        Multiplicação direta: (4 · 7) / (15 · 29) = <strong>28 / 435</strong> (aproximadamente 0,0644 ou 6,44%).
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        A probabilidade exata de sortear duas fichas amarelas consecutivas sem reposição é de <strong>28/435</strong>.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Um estudante tirou notas 6, 8 e 7. Para ter média final 7,5 no 4º bimestre precisa de:",
                    options: ["8,5", "9,0", "9,5", "10,0"],
                    correct: 1,
                    exp: "Soma necessária = 7,5 · 4 = 30. Atual = 21. Nota necessária = 9,0."
                }
            ]
        },
        {
            id: "mat-07", title: "7. Polinômios, Fatoração & Produtos Notáveis", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: ["mat-01"], examTopics: ["Edital 1.2: Polinômios — operações, fatoração, produtos notáveis"],
            simpleExplanation: `
                <p><strong>Em palavras simples:</strong> Produtos notáveis são fórmulas rápidas de multiplicação: <code>(a + b)² = a² + 2ab + b²</code>. Fatorar é o caminho de volta: empacotar termos para poder cortar e simplificar contas.</p>
            `,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Origem Geométrica dos Produtos Notáveis: Desenhos na Areia</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Antes de existirem letras como $x$ e $y$ na álgebra, os sábios da Babilônia e o matemático persa <strong>Al-Khwarizmi</strong> (século IX) resolviam essas expressões desenhando <strong>quadrados e retângulos geométricos na areia</strong>.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Ao desenhar um quadrado grande de lado <code>(a + b)</code>, eles dividiam a figura em 4 partes visíveis: um quadrado de área <code>a²</code>, um quadrado de área <code>b²</code> e dois retângulos idênticos de área <code>a·b</code>. A famosa fórmula <code>(a + b)² = a² + 2ab + b²</code> não é uma invenção arbitrária para decorar: é o cálculo visual exato da área de um terreno!
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: A Mala de Roupas & Por que Fatorar é Poderoso?</div>
    <p>• <strong>Desenvolver vs. Fatorar:</strong> Desenvolver um produto notável é como tirar todas as roupas da mala e espalhar pelo quarto: <code>(x + 3)(x − 3) → x² − 9</code>. <strong>Fatorar</strong> é o caminho inverso: é dobrar as roupas com perfeição e colocá-las dentro de sacolas organizadas: <code>x² − 9 → (x − 3)(x + 3)</code>.</p>
    <p>• <strong>Por que a Fatoração é a maior aliada da sua nota?</strong> Porque em matemática, <strong>é proibido cortar termos somando em frações</strong>! Se você tem <code>(x² − 25) / (x − 5)</code>, você NÃO PODE cortar o x² com o x ou o 25 com o 5! Mas ao fatorar o numerador, ele vira uma multiplicação: <code>[(x − 5)(x + 5)] / (x − 5)</code>. Agora sim: como temos fatores multiplicando, podemos cortar o bloco inteiro <code>(x − 5)</code> com um único traço de caneta, simplificando uma expressão monstruosa em um simples <code>(x + 5)</code>!</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Criptografia Bancária (Segurança do Pix e Cartões):</strong> A criptografia RSA baseia-se no fato de que multiplicar polinômios e números primos é instantâneo para um computador, mas fatorar de volta é tão difícil que levaria séculos para hackers quebrarem a sua senha.</li>
        <li><strong>Engenharia Civil e Resistência dos Materiais:</strong> No curso de Edificações do CEFET, o cálculo da deformação de vigas sob o peso de carros usa polinômios de 2º e 3º graus.</li>
        <li><strong>Animações de Jogos e Cinema 3D:</strong> As curvas suaves de personagens e carros nos jogos são calculadas por polinômios de Bézier em tempo real pela placa de vídeo.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: As Fórmulas Sagradas da Fatoração</h3>
    <div class="box-formula" style="line-height:1.8;">
        <strong>1. Quadrado da Soma:</strong> (a + b)² = a² + <strong>2ab</strong> + b²<br>
        <strong>2. Quadrado da Diferença:</strong> (a − b)² = a² − <strong>2ab</strong> + b²<br>
        <strong>3. Produto da Soma pela Diferença:</strong> (a + b)(a − b) = <strong>a² − b²</strong> (O termo do meio se anula!)<br><br>
        <strong>As 3 Técnicas de Fatoração Obrigatórias no CEFET:</strong><br>
        • <em>Fator Comum em Evidência:</em> 3x² + 6x = <strong>3x(x + 2)</strong><br>
        • <em>Diferença de Quadrados:</em> x² − 36 = <strong>(x − 6)(x + 6)</strong><br>
        • <em>Trinômio Quadrado Perfeito:</em> x² + 8x + 16 = <strong>(x + 4)²</strong> (Verifique: 2·x·4 = 8x!)
    </div>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Mais Fatal da História da Banca do CEFET</div>
    <p>O esquecimento do termo do meio: <code>(a + b)² NÃO É a² + b²</code>! Quem escreve que <code>(x + 4)² = x² + 16</code> comete um dos maiores pecados matemáticos do concurso e perde a vaga! Falta o dobro do primeiro pelo segundo: <strong>2 · x · 4 = 8x</strong>! O correto é <code>x² + 8x + 16</code>!</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Simplifique a fração algébrica a seguir para todos os valores reais onde ela existe (x ≠ 5):<br>
        <code>E = (x² − 25) / (x² − 10x + 25)</code>
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação Algébrica</span><br>
        No numerador temos uma <em>Diferença de Dois Quadrados</em>: x² − 5².<br>
        No denominador temos um <em>Trinômio Quadrado Perfeito</em>: x² − 2(x)(5) + 5².
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Fatoração dos Termos</span><br>
        Numerador: x² − 25 = <strong>(x − 5)(x + 5)</strong>.<br>
        Denominador: x² − 10x + 25 = <strong>(x − 5)² = (x − 5)(x − 5)</strong>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Simplificação e Cancelamento de Fatores</span><br>
        Substituindo na fração:<br>
        E = [(x − 5)(x + 5)] / [(x − 5)(x − 5)]<br>
        Cancelamos o fator idêntico (x − 5) do numerador e do denominador:
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        A fração simplificada irredutível é <strong>(x + 5) / (x − 5)</strong>.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "A expressão (2x + 3)² desenvolvida é igual a:",
                    options: ["4x² + 9", "4x² + 12x + 9", "4x² + 6x + 9", "2x² + 12x + 9"],
                    correct: 1,
                    exp: "(2x)² + 2(2x)(3) + 3² = 4x² + 12x + 9."
                }
            ]
        },
        {
            id: "mat-08", title: "8. Equações de 1º/2º Graus & Fracionárias", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: ["mat-01", "mat-07"], examTopics: ["Edital 1.6: Equações de 1º e 2º graus, equações fracionárias, interpretação gráfica"],
            simpleExplanation: `
                <p><strong>Em palavras simples:</strong> Uma equação é uma balança em equilíbrio: o que você faz de um lado, tem que fazer exatamente igual do outro para descobrir o valor escondido de $x$.</p>
                <p>• <strong>1º Grau ($ax + b = 0$):</strong> Relação linear direta. Isole o $x$ passando o número com sinal invertido.<br>
                • <strong>2º Grau ($ax^2 + bx + c = 0$):</strong> Relação com aceleração ou área. Usa-se a Fórmula de Bhaskara, e o $\Delta$ revela quantas respostas existem!<br>
                • <strong>Fracionárias (com $x$ no denominador):</strong> É proibido dividir por zero no universo. Sempre declare a Condição de Existência (C.E.) primeiro!</p>
            `,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Por que a Álgebra e as Equações foram Inventadas?</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        A palavra <strong>Álgebra</strong> vem do árabe <em>Al-Jabr</em> (que significa 'reunir partes quebradas' ou 'restaurar o equilíbrio'), título do livro publicado no século IX pelo matemático persa <strong>Al-Khwarizmi</strong> em Bagdá.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Ele precisava resolver problemas práticos e urgentes do povo: divisão justa de heranças com regras complexas da lei, medição de terras após as cheias dos rios que apagavam as cercas, e cálculo de impostos de caravanas comerciais. Em vez de tentar 'adivinhar no olho', ele inventou um método infalível: dar uma letra temporária para o valor desconhecido ($x$) e manipular a igualdade até a resposta se revelar sozinha!
    </p>
</div>

<div class="box-analogy">
    <div class="box-header">💡 A Grande Sacada: A Balança de Dois Pratos em Equilíbrio</div>
    <p style="font-size:15px; line-height:1.7;">
        Uma equação é rigorosamente uma <strong>balança antiga de pratos</strong>:
    </p>
    <ul style="margin:8px 0 12px; padding-left:22px; font-size:14.5px; line-height:1.7; color:var(--text-secondary);">
        <li>O sinal de igualdade (<code>=</code>) é o fiel da balança, que deve se manter perfeitamente na horizontal.</li>
        <li>A incógnita <code>x</code> é um pacote surpresa que você quer pesar.</li>
        <li><strong>A Regra Sagrada:</strong> Tudo o que você fizer de um lado da balança, deve fazer OBRIGATORIAMENTE do outro lado para não desequilibrar. Se somar 5 de um lado, some 5 do outro. Se dividir um lado por 2, divida o outro por 2!</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">1</span> Equações do 2º Grau: Bhaskara & Os Segredos do Delta (Δ)</h3>
    <p style="font-size:14.5px; line-height:1.65; color:var(--text-secondary);">
        A forma geral é <code>ax² + bx + c = 0</code>. O segredo de ouro está no <strong>Discriminante (Δ = b² − 4ac)</strong>, que informa de antemão quantas soluções reais existem antes de você terminar a conta:
    </p>
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:12px; margin:14px 0;">
        <div style="background:var(--glass-bg-subtle); padding:14px; border-radius:var(--radius-sm); border:var(--glass-border-subtle);">
            <strong style="color:var(--positive);">🟢 Se Δ > 0:</strong><br>
            A raiz quadrada de Δ é um número real positivo. Somar e subtrair essa raiz gera <strong>duas raízes reais e diferentes (x₁ ≠ x₂)</strong>.
        </div>
        <div style="background:var(--glass-bg-subtle); padding:14px; border-radius:var(--radius-sm); border:var(--glass-border-subtle);">
            <strong style="color:var(--accent);">🔵 Se Δ = 0:</strong><br>
            A raiz de zero é zero. Somar ou subtrair zero dá o mesmo resultado, gerando <strong>duas raízes reais e iguais (x₁ = x₂)</strong>.
        </div>
        <div style="background:var(--glass-bg-subtle); padding:14px; border-radius:var(--radius-sm); border:var(--glass-border-subtle);">
            <strong style="color:var(--danger);">🔴 Se Δ < 0:</strong><br>
            Não existe raiz quadrada de número negativo no conjunto dos números reais! Portanto, a equação <strong>NÃO possui raízes reais</strong>.
        </div>
    </div>
    <div class="box-formula">
        Fórmula Completa: x = (−b ± √Δ) / 2a<br>
        Relações de Girard (Soma e Produto): Soma = −b/a &nbsp;|&nbsp; Produto = c/a
    </div>
</div>

<div class="box-warning">
    <div class="box-header">⚠️ A Pegadinha Mortal do CEFET: A Condição de Existência (C.E.)</div>
    <p style="font-size:14.5px; line-height:1.65; margin:0;">
        Em equações fracionárias (aquelas que possuem a letra <strong>x no denominador</strong>), existe um mandamento inegociável na matemática: <strong>NUNCA DIVIDIRÁS POR ZERO!</strong>
        <br><br>
        • Antes de fazer qualquer multiplicação cruzada, iguale cada denominador a zero e escreva a <strong>Condição de Existência (C.E.)</strong>.<br>
        • <em>Exemplo:</em> Se aparecer <code>5 / (x − 4)</code>, declare imediatamente: <strong>x ≠ 4</strong>.<br>
        • Se no final das suas contas você encontrar <code>x = 4</code>, esse valor é INVÁLIDO e a solução da equação é o conjunto vazio ∅! Todo ano dezenas de candidatos caem nessa armadilha da banca!
    </p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo Prova do CEFET-RJ em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Resolva a equação fracionária no conjunto dos números reais: <code>3 / (x − 2) = 6 / (x + 4)</code>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Condição de Existência (C.E.)</span><br>
        Denominadores não podem ser zero: x − 2 ≠ 0 → <strong>x ≠ 2</strong>, e x + 4 ≠ 0 → <strong>x ≠ −4</strong>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Modelagem e Multiplicação Cruzada</span><br>
        Aplicamos a propriedade fundamental das proporções: 3 · (x + 4) = 6 · (x − 2).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Execução dos Cálculos</span><br>
        3x + 12 = 6x − 12.<br>
        12 + 12 = 6x − 3x → 24 = 3x → x = 24 / 3 = <strong>8</strong>.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Validação pela C.E. e Conclusão</span><br>
        Como 8 ≠ 2 e 8 ≠ −4, a solução é perfeitamente válida: <strong>S = {8}</strong>.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "A soma e o produto das raízes da equação 2x² − 10x + 8 = 0 são respectivamente:",
                    options: ["Soma = 5 e Produto = 4", "Soma = −5 e Produto = 4", "Soma = 10 e Produto = 8", "Soma = 5 e Produto = −4"],
                    correct: 0,
                    exp: "Soma = −(−10)/2 = 5. Produto = 8/2 = 4."
                }
            ]
        },
        {
            id: "mat-09", title: "9. Sistemas de Equações & Interpretação Gráfica", time: "25 min", difficulty: "médio",
            track: "selecao", prerequisites: ["mat-08"], examTopics: ["Edital 1.6: Sistemas de equações de 1º e 2º graus, interpretação gráfica"],
            simpleExplanation: `
                <p><strong>Em palavras simples:</strong> Um sistema é quando você tem duas pistas para descobrir dois mistérios ao mesmo tempo (como saber quantos carros e motos estão em um estacionamento olhando o total de veículos e o total de rodas).</p>
                <p>• <strong>No gráfico:</strong> A resposta do sistema é o ponto exato onde as duas retas se cruzam no mapa!</p>
            `,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Por que Sistemas de Equações foram Inventados?</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Na vida real, os problemas quase nunca vêm com uma única pista isolada. Pense em um comerciante: ele sabe que vendeu 50 ingressos de cinema e arrecadou R$ 800, mas havia ingressos de inteira (R$ 20) e de estudante (R$ 10). Quantos de cada foram vendidos?
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Um sistema de equações une duas ou mais informações que acontecem simultaneamente. Ele permite cruzar dados para encontrar uma solução única que satisfaz todas as condições ao mesmo tempo!
    </p>
</div>

<div class="box-analogy">
    <div class="box-header">💡 A Grande Sacada: A Esquina das Duas Ruas no GPS</div>
    <p style="font-size:15px; line-height:1.7;">
        Imagine que um amigo diz: <em>'Estou na Avenida Brasil'</em> (isso é uma reta com infinitos pontos). Outro amigo liga e diz: <em>'Ele também está na Rua Bela'</em> (outra reta).
        <br><br>
        Onde ele está exatamente? No ponto exato de cruzamento entre a Avenida Brasil e a Rua Bela! <strong>A solução de um sistema de duas equações no gráfico é simplesmente a esquina onde as duas retas se encontram.</strong>
    </p>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">1</span> Classificação dos Sistemas na Prova do CEFET-RJ</h3>
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); gap:12px; margin-top:14px;">
        <div style="background:var(--glass-bg-subtle); padding:14px; border-radius:var(--radius-sm); border:var(--glass-border-subtle);">
            <strong style="color:var(--accent); font-size:14.5px;">1. Sistema Possível e Determinado (SPD)</strong>
            <p style="font-size:13.5px; color:var(--text-secondary); line-height:1.6; margin-top:6px;">
                As retas são <strong>concorrentes</strong> (possuem inclinações diferentes e se cruzam em 1 único ponto). Tem <strong>uma única solução</strong> (x, y). É o caso mais comum das provas!
            </p>
        </div>
        <div style="background:var(--glass-bg-subtle); padding:14px; border-radius:var(--radius-sm); border:var(--glass-border-subtle);">
            <strong style="color:var(--positive); font-size:14.5px;">2. Sistema Possível e Indeterminado (SPI)</strong>
            <p style="font-size:13.5px; color:var(--text-secondary); line-height:1.6; margin-top:6px;">
                As retas são <strong>coincidentes</strong> (uma desenhada exatamente por cima da outra). Todos os pontos pertencem às duas retas. Tem <strong>infinitas soluções</strong>!
            </p>
        </div>
        <div style="background:var(--glass-bg-subtle); padding:14px; border-radius:var(--radius-sm); border:var(--glass-border-subtle);">
            <strong style="color:var(--danger); font-size:14.5px;">3. Sistema Impossível (SI)</strong>
            <p style="font-size:13.5px; color:var(--text-secondary); line-height:1.6; margin-top:6px;">
                As retas são <strong>paralelas distintas</strong> (como trilhos de trem: correm lado a lado na mesma inclinação, mas nunca se tocam). Tem <strong>zero soluções</strong>!
            </p>
        </div>
    </div>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo Prova do CEFET-RJ em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema Clássica:</strong> Em um estacionamento no Maracanã há carros (4 rodas) e motos (2 rodas), totalizando 25 veículos e 74 rodas no chão. Quantos carros e quantas motos estão no estacionamento?
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação e Definição das Variáveis</span><br>
        Seja <code>c</code> a quantidade de carros e <code>m</code> a quantidade de motos.<br>
        Total de veículos: c + m = 25.<br>
        Total de rodas: 4c + 2m = 74.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Escolha do Método (Adição ou Substituição)</span><br>
        Multiplicamos a primeira equação por (−2) para cancelar a variável m pelo método da adição:<br>
        −2c − 2m = −50<br>
        4c + 2m = 74
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Execução dos Cálculos</span><br>
        Somando as duas linhas: (−2c + 4c) + (−2m + 2m) = −50 + 74.<br>
        2c = 24 → c = 24 / 2 = <strong>12 carros</strong>.<br>
        Substituindo em c + m = 25: 12 + m = 25 → m = 25 − 12 = <strong>13 motos</strong>.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão e Checagem</span><br>
        Há <strong>12 carros</strong> e <strong>13 motos</strong> no estacionamento. (Checagem das rodas: 12·4 + 13·2 = 48 + 26 = 74 rodas!).
    </div>
</div>`,
            questions: [
                {
                    type: "text",
                    q: "Em um sistema onde x + y = 20 e x − y = 4, qual é o valor de x?",
                    a: ["12"],
                    exp: "Somando as duas equações: 2x = 24 → x = 12."
                }
            ]
        },
        {
            id: "mat-10", title: "10. Funções Constante, Afim & Quadrática (Estudo do Sinal)", time: "35 min", difficulty: "difícil",
            track: "selecao", prerequisites: ["mat-07", "mat-08", "mat-09"], examTopics: ["Edital 1.5: Funções — gráficos e operações; Constante, Afim e Quadrática: gráfico e estudo de sinal"],
            simpleExplanation: `
                <p><strong>Em palavras simples:</strong> Uma função é uma máquina matemática de causa e efeito: você aperta um botão de entrada ($x$), ela processa a regra e entrega um resultado de saída ($y$).</p>
                <p>• <strong>Função Constante ($f(x) = c$):</strong> É a mensalidade da Netflix: não importa quanto você use, o preço é sempre o mesmo (reta deitada horizontal).<br>
                • <strong>Função Afim ($f(x) = ax + b$):</strong> É a corrida do Uber: taxa fixa de entrada ($b$) mais valor por quilômetro rodado ($a$). Gráfico em reta inclinada.<br>
                • <strong>Função Quadrática ($f(x) = ax^2 + bx + c$):</strong> É a bola chutada para o alto: sobe, atinge o ponto mais alto de todos (o Vértice) e desce em curva de Parábola!</p>
            `,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Por que as Funções foram Inventadas na História?</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Imagine viver no século XVII. Antes da invenção das funções matemáticas, a humanidade não conseguia <strong>prever o futuro com precisão</strong>: se um militar disparasse uma bala de canhão, ele não sabia onde ela cairia; se um fabricante quisesse saber seu faturamento variando o número de mercadorias vendidas, ele precisava refazer cada cálculo na mão um por um.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Gênios como <strong>René Descartes</strong> e <strong>Gottfried Leibniz</strong> perceberam que no universo físico nada acontece isolado: <em>uma grandeza sempre depende de outra</em>. Se a velocidade do carro aumenta, o tempo de viagem diminui. Se você compra mais pães, paga mais caro. Eles criaram as <strong>Funções</strong> para serem uma <strong>máquina de causa e efeito</strong>: você dá a causa ($x$), e a fórmula te revela imediatamente o efeito futuro ($y$)!
    </p>
</div>

<div class="box-analogy">
    <div class="box-header">💡 A Grande Sacada: A Máquina de Refrigerante</div>
    <p style="font-size:15px; line-height:1.7;">
        Pense em uma <strong>máquina automática de refrigerante</strong> na estação do metrô:
    </p>
    <ul style="margin:8px 0 12px; padding-left:22px; font-size:14.5px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Entrada (x - Variável Independente):</strong> É a tecla que você aperta livremente (ex: botão 42). Você decide o valor de x.</li>
        <li><strong>Processamento (f - A Função):</strong> É a engrenagem interna que lê o código e transporta a lata correspondente.</li>
        <li><strong>Saída (y ou f(x) - Variável Dependente):</strong> É a lata de refrigerante que cai na bandeja. O que sai depende 100% da tecla que você apertou!</li>
    </ul>
    <p style="font-size:14px; margin:0; font-weight:700; color:var(--accent);">
        ⚠️ A Regra Sagrada da Matemática: Apertar um único botão nunca pode soltar duas latas diferentes ao mesmo tempo. Para cada valor de x, existe sempre uma única resposta y!
    </p>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">1</span> Onde Usamos Isso na Vida Real e na Tecnologia?</h3>
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:14px; margin-top:14px;">
        <div style="background:var(--glass-bg-subtle); padding:16px; border-radius:var(--radius-sm); border:var(--glass-border-subtle);">
            <strong style="color:var(--accent); font-size:15px;">🚗 1. Corridas de Uber ou Táxi (Função Afim)</strong>
            <p style="font-size:13.5px; color:var(--text-secondary); line-height:1.6; margin-top:6px;">
                O app calcula o valor da corrida cobrando uma taxa fixa só de você abrir a porta do carro (a bandeirada 'b') mais um valor fixo por cada quilômetro rodado ('a'). A fórmula no código do app é exatamente: <code>Preço = a · (km) + b</code>.
            </p>
        </div>
        <div style="background:var(--glass-bg-subtle); padding:16px; border-radius:var(--radius-sm); border:var(--glass-border-subtle);">
            <strong style="color:var(--positive); font-size:15px;">📺 2. Assinatura da Netflix (Função Constante)</strong>
            <p style="font-size:13.5px; color:var(--text-secondary); line-height:1.6; margin-top:6px;">
                Se você assistir a zero minutos de séries ou a 500 horas no mês, o valor da fatura é rigorosamente idêntico: <code>f(x) = R$ 39,90</code>. O tempo varia, mas o valor de saída permanece congelado.
            </p>
        </div>
        <div style="background:var(--glass-bg-subtle); padding:16px; border-radius:var(--radius-sm); border:var(--glass-border-subtle);">
            <strong style="color:var(--purple); font-size:15px;">🚀 3. Trajetória de Foguetes & Lucro de Lojas (Função Quadrática)</strong>
            <p style="font-size:13.5px; color:var(--text-secondary); line-height:1.6; margin-top:6px;">
                Pela aceleração da gravidade, projéteis fazem uma curva no ar chamada parábola. No comércio, se uma camisa for muito barata, o lucro é baixo; se for cara demais, ninguém compra. O preço que gera o <strong>Lucro Máximo</strong> fica exatamente no pico da parábola (o Vértice).
            </p>
        </div>
    </div>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">2</span> As 3 Funções que o CEFET-RJ Cobra no Edital</h3>

    <div style="margin:16px 0;">
        <h4 style="color:var(--accent); margin-bottom:6px;">🔹 1. Função Constante: f(x) = c</h4>
        <p style="font-size:14.5px; line-height:1.65; color:var(--text-secondary);">
            • <strong>O que é:</strong> O valor de saída não depende de x. Não importa o que entra, sempre sai o número fixo c.<br>
            • <strong>Gráfico:</strong> É uma <strong>reta horizontal (deitada)</strong>, perfeitamente paralela ao eixo x. Ela corta o eixo vertical y na altura c.<br>
            • <strong>Inclinação:</strong> Vale zero (a = 0), pois a reta não sobe nem desce.
        </p>
    </div>

    <div style="margin:20px 0; padding-top:16px; border-top:1px solid var(--border);">
        <h4 style="color:var(--accent); margin-bottom:6px;">🔹 2. Função Afim ou do 1º Grau: f(x) = ax + b</h4>
        <p style="font-size:14.5px; line-height:1.65; color:var(--text-secondary);">
            <strong>O que significa cada letra na fórmula?</strong><br>
            • <strong>b (Coeficiente Linear / Termo Fixo):</strong> É o ponto de partida! Onde a reta corta o eixo vertical y quando x = 0 (é a bandeirada fixa do táxi).<br>
            • <strong>a (Coeficiente Angular / Taxa de Variação):</strong> É a inclinação da reta! Mostra quanto y sobe ou desce a cada unidade de x.<br>
            &nbsp;&nbsp;↳ Se <strong>a > 0</strong>: Função <strong>Crescente</strong> (a reta sobe para a direita ↗️).<br>
            &nbsp;&nbsp;↳ Se <strong>a < 0</strong>: Função <strong>Decrescente</strong> (a reta desce para a direita ↘️, como o nível de água esvaziando).<br>
            • <strong>Raiz ou Zero da Função (x = −b/a):</strong> É o valor de x que faz y = 0. No gráfico, é o ponto exato onde a reta <strong>cruza o chão (eixo horizontal x)</strong>.
        </p>
    </div>

    <div style="margin:20px 0; padding-top:16px; border-top:1px solid var(--border);">
        <h4 style="color:var(--accent); margin-bottom:6px;">🔹 3. Função Quadrática ou do 2º Grau: f(x) = ax² + bx + c</h4>
        <p style="font-size:14.5px; line-height:1.65; color:var(--text-secondary);">
            <strong>Por que tem x ao quadrado (x²)?</strong> Porque a taxa de variação acelera! O gráfico não é uma reta, é uma curva suave chamada <strong>Parábola</strong>.<br>
            • <strong>O sinal de 'a' define para onde a curva abre:</strong><br>
            &nbsp;&nbsp;↳ Se <strong>a > 0</strong>: Concavidade para <strong>CIMA</strong> (sorriso feliz 🙂). A curva desce até o fundo e volta a subir. Possui um ponto de <strong>MÍNIMO</strong>!<br>
            &nbsp;&nbsp;↳ Se <strong>a < 0</strong>: Concavidade para <strong>BAIXO</strong> (arco de montanha 🙁). A curva sobe até o topo e cai. Possui um ponto de <strong>MÁXIMO</strong>!<br>
            • <strong>O Vértice da Parábola V(Xv, Yv) — O Conceito Mais Cobrado do Concurso:</strong><br>
            O Vértice é a ponta da montanha ou o fundo do vale. Suas coordenadas são dadas por:
        </p>
        <div class="box-formula">
            Xv = −b / (2a) &nbsp;&nbsp;|&nbsp;&nbsp; Yv = −Δ / (4a), com Δ = b² − 4ac
        </div>
    </div>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">3</span> O que Significa o "Estudo do Sinal"? (Traduzido Sem Complicação)</h3>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary);">
        Quando a questão do CEFET pede para <em>'estudar o sinal da função'</em>, ela quer apenas que você descubra em quais trechos o resultado y fica acima do chão, no chão ou debaixo da terra:
    </p>
    <div style="display:flex; flex-direction:column; gap:10px; margin:14px 0;">
        <div style="padding:12px 16px; background:rgba(16,185,129,0.1); border-left:4px solid var(--positive); border-radius:var(--radius-sm); font-size:14px; color:var(--text-primary);">
            <strong style="color:var(--positive);">1. Onde a função é POSITIVA [f(x) > 0]?</strong><br>
            São os valores de x onde o gráfico fica desenhado <strong>acima do eixo x</strong> (acima do chão / lucro positivo).
        </div>
        <div style="padding:12px 16px; background:rgba(37,99,235,0.1); border-left:4px solid var(--accent); border-radius:var(--radius-sm); font-size:14px; color:var(--text-primary);">
            <strong style="color:var(--accent);">2. Onde a função é NULA [f(x) = 0]?</strong><br>
            São os pontos exatos onde o gráfico <strong>toca o eixo x</strong> (as raízes da equação, onde não há nem lucro nem prejuízo).
        </div>
        <div style="padding:12px 16px; background:rgba(239,68,68,0.1); border-left:4px solid var(--danger); border-radius:var(--radius-sm); font-size:14px; color:var(--text-primary);">
            <strong style="color:var(--danger);">3. Onde a função é NEGATIVA [f(x) < 0]?</strong><br>
            São os valores de x onde o gráfico mergulha <strong>abaixo do eixo x</strong> (debaixo do chão / prejuízo).
        </div>
    </div>
    <p style="font-size:14px; line-height:1.65; color:var(--text-secondary); margin-top:10px;">
        <strong>Exemplo Visual da Parábola no Estudo do Sinal:</strong><br>
        Se uma parábola tem raízes nos números 2 e 6 e abre para baixo (a < 0): entre 2 e 6 ela está voando alto no céu (positiva); antes do 2 e depois do 6 ela afundou no subsolo (negativa). Simples assim!
    </p>
</div>

<div class="box-warning">
    <div class="box-header">⚠️ A Pegadinha Mortal da Banca do CEFET: Xv versus Yv</div>
    <p style="font-size:14.5px; line-height:1.7; margin:0;">
        A banca examinadora adora colocar tanto o valor de Xv quanto de Yv nas opções de múltipla escolha para induzir ao erro. Aprenda a regra definitiva:
        <br><br>
        • Se o enunciado perguntar: <strong>'Em quantos segundos atinge a altura máxima?'</strong> ou <strong>'Quantas unidades a fábrica deve produzir para ter lucro máximo?'</strong> $\rightarrow$ Está perguntando a variável de entrada (tempo / quantidade). <strong>Calcule Xv = −b / (2a)</strong>!
        <br><br>
        • Se o enunciado perguntar: <strong>'Qual é o valor da altura máxima em metros?'</strong> ou <strong>'Qual é o lucro máximo em reais?'</strong> $\rightarrow$ Está perguntando a variável de saída (altura / dinheiro). <strong>Calcule Yv = −Δ / (4a)</strong>!
    </p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo Prova do CEFET-RJ em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Um drone agrícola pulveriza uma lavoura. Sua altura em metros após t segundos de voo é modelada pela função quadrática: <code>h(t) = −5t² + 40t</code>. Determine:
        <br><strong>a)</strong> Após quantos segundos de voo o drone atinge sua altura máxima?
        <br><strong>b)</strong> Qual é a altura máxima alcançada pelo drone?
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação e Identificação dos Coeficientes</span><br>
        A função é h(t) = at² + bt + c, com coeficientes: a = −5, b = 40 e c = 0.<br>
        Como o coeficiente a é negativo (a = −5 < 0), a parábola tem concavidade voltada para baixo (formato de montanha), garantindo que seu Vértice representa o <strong>ponto máximo de altura</strong>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Modelagem Matemática</span><br>
        • Pergunta (a): pede o <em>tempo</em> para atingir o topo → Calculamos a coordenada t do vértice: <code>t_max = Xv = −b / (2a)</code>.<br>
        • Pergunta (b): pede a <em>altura máxima</em> em metros → Calculamos a coordenada vertical do vértice: <code>h_max = Yv = −Δ / (4a)</code>, ou substituímos t_max diretamente na função.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Execução dos Cálculos</span><br>
        • Item (a): t_max = −40 / [2 · (−5)] = −40 / (−10) = <strong>4 segundos</strong>.<br>
        • Item (b): Substituindo t = 4 na função:<br>
        h(4) = −5 · (4)² + 40 · (4) = −5 · 16 + 160 = −80 + 160 = <strong>80 metros</strong>.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        O drone atinge sua altitude máxima aos <strong>4 segundos</strong> de voo, alcançando exatamente <strong>80 metros de altura</strong>.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "A trajetória de um projétil é dada por h(t) = −2t² + 12t. Em quantos segundos ele atinge a altura máxima?",
                    options: ["3 segundos", "6 segundos", "12 segundos", "18 segundos"],
                    correct: 0,
                    exp: "Como pede o tempo (x), usamos Xv = −b / (2a) = −12 / [2 · (−2)] = −12 / (−4) = 3 segundos."
                },
                {
                    type: "text",
                    q: "Qual é o zero (raiz) da função afim f(x) = 5x − 35? (O valor de x que faz f(x) = 0)",
                    a: ["7"],
                    exp: "Igualando a zero: 5x − 35 = 0 → 5x = 35 → x = 7."
                },
                {
                    type: "mc",
                    q: "Uma função do 2º grau f(x) = ax² + bx + c tem a < 0 e raízes x₁ = 1 e x₂ = 5. Em qual intervalo ela é POSITIVA [f(x) > 0]?",
                    options: ["Entre 1 e 5 (1 < x < 5)", "Para x < 1 ou x > 5", "Apenas quando x = 3", "Ela nunca é positiva"],
                    correct: 0,
                    exp: "Com concavidade para baixo (a < 0), a parábola fica ACIMA do eixo x entre as duas raízes (1 < x < 5)."
                }
            ]
        },
        {
            id: "mat-11", title: "11. Matemática Financeira: Juros & Porcentagem", time: "25 min", difficulty: "médio",
            track: "selecao", prerequisites: ["mat-01", "mat-05"], examTopics: ["Edital 1.4: Noções de matemática financeira — porcentagem, juros simples e compostos"],
            simpleExplanation: `
                <p><strong>Em palavras simples:</strong> Juros é o 'aluguel do dinheiro'. Se você empresta um apartamento, recebe aluguel; se empresta dinheiro, recebe juros!</p>
                <p>• <strong>Juro Simples ($J = C \cdot i \cdot t$):</strong> O rendimento é sempre calculado em cima do valor inicial (como uma macieira que dá sempre 5 maçãs por mês).<br>
                • <strong>Juro Composto ($M = C(1+i)^t$):</strong> Juros sobre juros! O rendimento entra no bolo e gera mais juros no mês seguinte (uma bola de neve financeira).</p>
            `,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Por que a Matemática Financeira e os Juros foram Inventados?</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Os juros surgiram há mais de 4.000 anos na antiga Mesopotâmia (Babilônia). Os agricultores que precisavam de sementes para plantar pediam grãos emprestados aos vizinhos. Ao colher no final do ano, devolviam a quantidade emprestada <em>mais uma porção extra</em> como compensação pelo tempo e pelo risco de que a safra pudesse falhar.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        No Renascimento italiano, com o crescimento dos bancos em Florença e Veneza, o conceito foi formalizado matematicamente: <strong>Juro é o aluguel do dinheiro no tempo</strong>. Quem abre mão do seu dinheiro hoje espera receber uma recompensa proporcional ao tempo e à inflação.
    </p>
</div>

<div class="box-analogy">
    <div class="box-header">💡 A Grande Sacada: A Macieira vs. A Bola de Neve</div>
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:14px; margin-top:8px;">
        <div style="background:var(--glass-bg-subtle); padding:14px; border-radius:var(--radius-sm); border:var(--glass-border-subtle);">
            <strong style="color:var(--accent); font-size:14.5px;">🍎 Juro Simples (A Macieira Fixa)</strong>
            <p style="font-size:13.5px; line-height:1.6; color:var(--text-secondary); margin-top:6px;">
                Imagine uma macieira que dá rigorosamente 5 maçãs todo mês. Você colhe e come as 5 maçãs. No mês seguinte, ela dá exatamente as mesmas 5 maçãs. O rendimento é <strong>linear e constante</strong>, sempre calculado em cima do capital inicial!
            </p>
        </div>
        <div style="background:var(--glass-bg-subtle); padding:14px; border-radius:var(--radius-sm); border:var(--glass-border-subtle);">
            <strong style="color:var(--positive); font-size:14.5px;">❄️ Juro Composto (A Bola de Neve Exponencial)</strong>
            <p style="font-size:13.5px; line-height:1.6; color:var(--text-secondary); margin-top:6px;">
                Agora imagine que você planta as sementes das maçãs colhidas. No 2º ano você tem duas macieiras; no 3º ano tem quatro! O rendimento cresce em cima do total acumulado mês a mês. É o <strong>juros sobre juros</strong>, usado em bancos, cartões de crédito e investimentos!
            </p>
        </div>
    </div>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">1</span> Onde Usamos Isso na Vida Real e no seu Bolso?</h3>
    <ul style="margin:10px 0; padding-left:22px; font-size:14.5px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>A Armadilha do Rotativo do Cartão de Crédito:</strong> Uma dívida de R$ 500 com juros compostos de 14% ao mês se transforma em mais de R$ 2.400 em um ano! Compreender matemática financeira é a principal defesa contra o endividamento.</li>
        <li><strong>Investimentos (Tesouro Direto & Poupança):</strong> O efeito inverso: guardar e investir R$ 100 todos os meses faz o tempo trabalhar a seu favor, multiplicando o saldo final.</li>
        <li><strong>Descontos e Promoções no Comércio:</strong> Avaliar criticamente se um 'desconto de 10% à vista' é mais vantajoso do que 'parcelar em 3 vezes'.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">2</span> Teoria Descomplicada & As Fórmulas Explicadas</h3>
    
    <div style="margin-bottom:14px;">
        <h4 style="color:var(--accent); margin-bottom:4px;">1. Juro Simples: J = C · i · t</h4>
        <p style="font-size:14px; line-height:1.6; color:var(--text-secondary);">
            • <strong>C (Capital):</strong> O dinheiro inicial aplicado ou emprestado.<br>
            • <strong>i (Taxa de Juros):</strong> A porcentagem por período, <strong>SEMPRE em forma decimal</strong> (ex: 5% vira 0,05; 10% vira 0,10).<br>
            • <strong>t (Tempo):</strong> Número de dias, meses ou anos.<br>
            • <strong>M (Montante):</strong> O valor total resgatado no final: <code>M = C + J</code> (o capital inicial + os juros obtidos).
        </p>
    </div>

    <div style="padding-top:14px; border-top:1px solid var(--border);">
        <h4 style="color:var(--positive); margin-bottom:4px;">2. Juro Composto: M = C · (1 + i)ᵗ</h4>
        <p style="font-size:14px; line-height:1.6; color:var(--text-secondary);">
            O termo <code>(1 + i)</code> representa o fator de multiplicação que se repete a cada período elevado ao expoente do tempo <code>t</code>.
        </p>
    </div>

    <div style="padding:12px 16px; background:rgba(37,99,235,0.08); border-radius:var(--radius-sm); margin-top:14px; font-size:13.5px;">
        <strong style="color:var(--accent);">⚠️ REGRA DE OURO DA MATEMÁTICA FINANCEIRA:</strong><br>
        A taxa <strong>i</strong> e o tempo <strong>t</strong> DEVEM estar OBRIGATORIAMENTE na mesma unidade de medida! Se a taxa for 'ao mês', o tempo deve estar em 'meses'. Se o tempo for dado em 2 anos, converta para 24 meses antes de calcular!
    </div>
</div>

<div class="box-warning">
    <div class="box-header">⚠️ A Pegadinha Mortal do CEFET: Aumentos e Descontos Sucessivos</div>
    <p style="font-size:14.5px; line-height:1.65; margin:0;">
        A banca adora colocar a pegadinha clássica:<br>
        <em>'Um produto custava R$ 100, sofreu aumento de 20% e depois um desconto de 20%. Ele voltou a custar R$ 100?'</em>
        <br><br>
        <strong>NUNCA!</strong> Veja a demonstração passo a passo:<br>
        1. R$ 100 com aumento de 20% passa para <code>100 · 1,20 = R$ 120</code>.<br>
        2. O desconto de 20% incide sobre os R$ 120 (e não sobre 100!): <code>20% de 120 = R$ 24</code> de desconto.<br>
        3. Preço final: <code>120 − 24 = R$ 96</code>! O produto ficou <strong>4% mais barato</strong> do que o preço original ($1,20 \cdot 0,80 = 0,96$)!
    </p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo Prova do CEFET-RJ em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Uma estudante guardou R$ 1.500,00 e aplicou a juros simples com rendimento de 1,5% ao mês durante 8 meses para comprar um notebook para estudar no CEFET-RJ. Qual foi o total de juros e o montante resgatado?
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação dos Dados</span><br>
        Capital C = R$ 1.500,00. Taxa i = 1,5% ao mês = 0,015. Tempo t = 8 meses. Regime: Juros Simples.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Modelagem Matemática</span><br>
        J = C · i · t &nbsp;|&nbsp; M = C + J.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Execução dos Cálculos</span><br>
        J = 1500 · 0,015 · 8 = 1500 · 0,12 = <strong>R$ 180,00</strong>.<br>
        M = 1500 + 180 = <strong>R$ 1.680,00</strong>.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        A aplicação rendeu <strong>R$ 180,00 de juros</strong>, totalizando um montante final resgatado de <strong>R$ 1.680,00</strong>.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Um desconto de 20% seguido de aumento de 20% deixa o preço final:",
                    options: ["4% menor", "Igual", "4% maior", "2% menor"],
                    correct: 0,
                    exp: "100 · 0,80 · 1,20 = 96 (4% menor)."
                }
            ]
        },
        {
            id: "mat-12", title: "12. Geometria Plana, Polígonos, Prismas & Medidas", time: "35 min", difficulty: "médio",
            track: "selecao", prerequisites: ["mat-05"], examTopics: ["Edital 2.1: Geometria Plana", "Edital 2.2: Figuras planas — caracterização e propriedades", "Edital 2.5: Relações métricas em polígonos regulares e círculos", "Edital 2.6: Perímetros e áreas de figuras planas", "Edital 2.7: Geometria Espacial — Prismas: áreas, volumes e planificação", "Edital 2.9: Sistema métrico decimal — massa, capacidade, tempo e ângulo"],
            simpleExplanation: `
                <p><strong>Em palavras simples:</strong> Área é o tamanho da superfície ($m^2$). Volume de um prisma é $\\text{Área da Base} \\times \\text{Altura}$. Lembre: $1\\text{ m}^3 = 1.000\\text{ Litros}$!</p>
            `,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Origem da Geometria: A Medição das Terras do Rio Nilo</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        A própria palavra <strong>Geometria</strong> vem da junção grega de <em>Geo</em> (Terra) e <em>Metria</em> (Medida): significa literalmente "medir a Terra". Há mais de 4.000 anos no Egito, o Rio Nilo transbordava todos os anos, apagando completamente as cercas e marcos de pedra dos fazendeiros.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Os agrimensores do Faraó, munidos de cordas com nós regulares, precisavam reconstruir as divisas das propriedades calculando o <strong>perímetro</strong> e a <strong>área</strong> de cada lote para que os impostos agrícolas continuassem justos. Mais tarde, para armazenar as colheitas contra períodos de seca, desenvolveram o cálculo do <strong>volume</strong> dos silos e armazéns em forma de prismas.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: A Cerca, O Piso Cerâmico & A Caixa d'Água</div>
    <p>• <strong>Perímetro (1 Dimensão - Linha):</strong> É o comprimento da cerca de arame farpado para cercar o pasto. Você soma todos os lados e a resposta é sempre em metros lineares (m) ou centímetros (cm).</p>
    <p>• <strong>Área (2 Dimensões - Superfície Plana):</strong> É a quantidade de piso cerâmico ou grama necessária para cobrir o chão de uma casa ou campo de futebol. A resposta é sempre em metros quadrados (m²) ou centímetros quadrados (cm²).</p>
    <p>• <strong>Volume de Prismas (3 Dimensões - Espaço Interno):</strong> Imagine uma pilha de 500 folhas de papel sulfite A4: o volume total é simplesmente a <strong>Área da folha da base vezes a Altura da pilha</strong> (<code>V = A_base · h</code>)! Para caixas retangulares (paralelepípedos), é comprimento vezes largura vezes altura (<code>a · b · c</code>).</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Construção Civil & Engenharia no CEFET:</strong> Em Edificações e Mecânica, calcular o volume de concreto de lajes (m³) e dimensionar reservatórios prediais de água.</li>
        <li><strong>Design de Embalagens Industriais:</strong> Por que as caixas de suco e leite são prismas retangulares? Porque prismas se empilham perfeitamente em paletes sem deixar vazios de ar, reduzindo os custos de frete internacional.</li>
        <li><strong>Pintura e Reformas Residenciais:</strong> Para saber quantas latas de tinta comprar, calcula-se a área total das paredes (m²) e divide-se pelo rendimento da lata informado pelo fabricante.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: As Conversões Mágicas de Volume e Capacidade</h3>
    <div class="box-formula" style="line-height:1.8;">
        <strong>As Duas Relações Sagradas de Litros:</strong><br>
        • <strong>1 m³ = 1.000 Litros</strong> (Uma caixa d'água cúbica de 1 metro de lado guarda exatamente 1.000 L!)<br>
        • <strong>1 dm³ = 1 Litro</strong> (Uma caixinha de 10 cm de lado tem 1 decímetro cúbico = 1 Litro!)<br>
        • <strong>1 cm³ = 1 mL</strong> (Um dadinho de 1 cm tem 1 mililitro de capacidade)<br><br>
        <strong>Fórmulas de Áreas Principais:</strong><br>
        • <em>Retângulo:</em> A = b · h &nbsp;|&nbsp; <em>Triângulo:</em> A = (b · h) / 2<br>
        • <em>Trapézio:</em> A = [(B + b) · h] / 2 &nbsp;|&nbsp; <em>Círculo:</em> A = π·r² (Perímetro C = 2π·r)
    </div>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Mais Cruel da Banca do CEFET</div>
    <p>A conversão de unidades ao quadrado e ao cubo! Se <code>1 m = 100 cm</code>, ao elevar ao quadrado, <strong>1 m² = 100² = 10.000 cm²</strong> (e NÃO 100 cm²!). E ao cubo, <strong>1 m³ = 100³ = 1.000.000 cm³</strong>! Toda questão de reservatório do CEFET mistura metros nas dimensões e pede a resposta em Litros para pegar quem não domina essas conversões!</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> O laboratório de química do campus Maracanã do CEFET-RJ possui um reservatório de água destilada em formato de paralelepípedo retângulo com dimensões internas de 2,5 m de comprimento, 1,2 m de largura e 80 cm de profundidade. Qual é a capacidade máxima desse reservatório em Litros?
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação e Padronização de Unidades</span><br>
        Comprimento = 2,5 m.<br>
        Largura = 1,2 m.<br>
        Profundidade = 80 cm = <strong>0,8 m</strong> (unidades obrigatoriamente iguais!).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Modelagem do Volume do Paralelepípedo</span><br>
        O volume de um prisma retangular reto é dado pelo produto das três dimensões:<br>
        V = Comprimento · Largura · Profundidade<br>
        V = 2,5 · 1,2 · 0,8
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Execução dos Cálculos e Conversão para Litros</span><br>
        2,5 · 0,8 = 2,0.<br>
        2,0 · 1,2 = <strong>2,4 m³</strong>.<br>
        Sabendo que cada 1 m³ comporta exatamente 1.000 Litros:<br>
        Capacidade = 2,4 · 1.000 = <strong>2.400 Litros</strong>.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        A capacidade volumétrica máxima do reservatório é de <strong>2.400 Litros</strong> de água destilada.
    </div>
</div>`,
            questions: [
                {
                    type: "text",
                    q: "Qual o volume (em cm³) de um cubo de aresta 4 cm?",
                    a: ["64"],
                    exp: "4³ = 64 cm³."
                }
            ]
        },
        {
            id: "mat-13", title: "13. Tales, Semelhança, Trigonometria & Leis dos Senos/Cossenos", time: "35 min", difficulty: "difícil",
            track: "selecao", prerequisites: ["mat-08", "mat-12"], examTopics: ["Edital 2.3: Triângulos — principais cevianas e pontos notáveis", "Edital 2.4: Teorema de Thales, semelhança de triângulos e polígonos", "Edital 2.5: Relações métricas em triângulos retângulos", "Edital 2.8: Trigonometria — relações trigonométricas, Lei dos Senos e Cossenos"],
            simpleExplanation: `
                <p><strong>Em palavras simples:</strong> No triângulo retângulo usamos Pitágoras ($a^2 = b^2 + c^2$) e SOH-CAH-TOA. Em triângulos quaisquer, usamos a Lei dos Cossenos ($a^2 = b^2 + c^2 - 2bc\\cos A$) ou a Lei dos Senos ($a/\\text{sen }A = b/\\text{sen }B$).</p>
            `,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Invenção de Tales & Da Trigonometria: Medindo o Inacessível</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        No século VI a.C., o filósofo grego <strong>Tales de Mileto</strong> visitou o Egito e foi desafiado pelos sacerdotes do Faraó: <em>"Nenhum homem jamais mediu a altura da Grande Pirâmide de Gizé, pois não há corda que chegue ao seu topo"</em>. Tales cravou sua vara de caminhar no chão de areia e esperou calmamente até o instante exato em que o comprimento da sombra da vara era rigorosamente igual à sua própria altura. Naquele segundo, apontou para a pirâmide e disse: <em>"A sombra da Pirâmide agora é exatamente igual à sua altura!"</em>.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Tales descobriu que triângulos com mesmos ângulos guardam <strong>proporções constantes entre seus lados (Semelhança)</strong>. Mais tarde, para guiar caravelas pelos mares sem ver terra firme, os astrônomos gregos e árabes criaram a <strong>Trigonometria</strong>, conectando lados e ângulos.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: A Foto com Zoom & O Triângulo Sagrado 3-4-5</div>
    <p>• <strong>Semelhança de Triângulos (A Foto com Zoom):</strong> Pense em dar zoom em uma foto no seu celular: o rosto da pessoa não fica esticado nem deformado — os ângulos continuam os mesmos, mas todos os comprimentos aumentam na mesma proporção exata <code>k</code>. Triângulos semelhantes são a mesma figura em escalas diferentes!</p>
    <p>• <strong>O Triângulo Sagrado dos Pedreiros (3, 4, 5):</strong> Há milhares de anos os pedreiros usam cordas com 12 nós para criar um ângulo reto perfeito de 90°: um cateto mede 3, o outro mede 4 e a hipotenusa mede 5 (<code>3² + 4² = 9 + 16 = 25 = 5²</code>)! Se você vir catetos 6 e 8, a hipotenusa é 10; se vir 30 e 40, é 50!</p>
    <p>• <strong>SOH-CAH-TOA (Os Ângulos de Visão):</strong>
        <br>– <strong>Seno (SOH):</strong> Cateto <strong>O</strong>posto / <strong>H</strong>ipotenusa (o lado que está lá do outro lado da rua).
        <br>– <strong>Cosseno (CAH):</strong> Cateto <strong>A</strong>djacente / <strong>H</strong>ipotenusa (o lado vizinho colado no ângulo).
        <br>– <strong>Tangente (TOA):</strong> Cateto <strong>O</strong>posto / Cateto <strong>A</strong>djacente (inclinação de uma rampa).
    </p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Triangulação de GPS em Celulares:</strong> Seu aplicativo de mapas não mede distâncias com régua: 4 satélites em órbita calculam os ângulos de atraso do sinal de rádio usando trigonometria esférica para cravar sua posição com precisão de 2 metros.</li>
        <li><strong>Jogos de Videogame 3D & Realidade Virtual:</strong> Todos os gráficos de PlayStation, Unity e Unreal Engine projetam o mundo 3D na tela plana 2D usando senos e cossenos milhares de vezes por segundo.</li>
        <li><strong>Rampas de Acessibilidade da NBR 9050:</strong> Engenheiros calculam a inclinação máxima permitida (tangente do ângulo ≤ 8,33%) para que cadeirantes consigam subir sem risco de tombar.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Ângulos Notáveis, Lei dos Senos e Cossenos</h3>
    <div class="box-formula" style="line-height:1.8;">
        <strong>Tabela dos Ângulos Notáveis Obrigatória:</strong><br>
        • sen(30°) = 1/2 &nbsp;|&nbsp; sen(45°) = √2/2 &nbsp;|&nbsp; sen(60°) = √3/2<br>
        • cos(30°) = √3/2 &nbsp;|&nbsp; cos(45°) = √2/2 &nbsp;|&nbsp; cos(60°) = 1/2<br>
        • tg(30°) = √3/3 &nbsp;|&nbsp; tg(45°) = 1 &nbsp;|&nbsp; tg(60°) = √3<br><br>
        <strong>Para Triângulos Quaisquer (Sem ângulo de 90°):</strong><br>
        • <em>Lei dos Cossenos (Pitágoras Generalizado):</em> a² = b² + c² − 2·b·c·cos(A)<br>
        • <em>Lei dos Senos:</em> a / sen(A) = b / sen(B) = c / sen(C) = 2R (R = raio da circunferência circunscrita)
    </div>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>Em problemas de agrimensura onde um observador ou teodolito avista o topo de uma torre ou prédio sob um ângulo de 30° ou 45°, <strong>NUNCA ESQUEÇA DE SOMAR A ALTURA DOS OLHOS DO OBSERVADOR!</strong> O triângulo retângulo calcula apenas o trecho do chão dos olhos para cima (h'). A altura real do prédio é <code>H = h' + altura_do_observador</code>!</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Para medir a altura de uma das torres de transmissão do Maracanã, um estudante posiciona um teodolito de 1,60 m de altura a 50 metros de distância da base da torre. O aparelho registra um ângulo de elevação de 30° até o ponto mais alto da torre. Considerando √3 ≈ 1,73, qual é a altura total da torre em relação ao solo?
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação Geométrica</span><br>
        Cateto adjacente ao ângulo de 30° = 50 m (distância da base).<br>
        Cateto oposto = h' (altura da torre acima do nível da luneta do teodolito).<br>
        Altura do instrumento = 1,60 m. Razão trigonométrica indicada: <strong>Tangente de 30°</strong>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Modelagem Trigonométrica</span><br>
        tg(30°) = Cateto Oposto / Cateto Adjacente<br>
        tg(30°) = h' / 50 → h' = 50 · tg(30°)<br>
        Como tg(30°) = √3 / 3: h' = 50 · (1,73 / 3).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Execução dos Cálculos</span><br>
        h' = (50 · 1,73) / 3 = 86,5 / 3 ≈ <strong>28,83 metros</strong>.<br>
        Agora somamos a altura dos olhos/aparelho: H = 28,83 + 1,60 = <strong>30,43 metros</strong>.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        A altura total da torre de iluminação em relação ao nível do solo é de aproximadamente <strong>30,43 metros</strong>.
    </div>
</div>`,
            questions: [
                {
                    type: "text",
                    q: "Catetos 6 e 8 em triângulo retângulo. Quanto mede a hipotenusa?",
                    a: ["10"],
                    exp: "6² + 8² = 100 → 10."
                }
            ]
        }
        ]
    },

    /* ─────────────────────────────────────────────────────────────
       2. LÍNGUA PORTUGUESA (11 Módulos: 11 Seleção)
       ───────────────────────────────────────────────────────────── */
    {
        id: "port", name: "Língua Portuguesa", icon: "📝",
        modules: [
        {
            id: "port-01", title: "1. Tipologia & Gêneros Textuais", time: "25 min", difficulty: "fácil",
            track: "selecao", prerequisites: [], examTopics: ["Edital Port. 1.3: Tipologia textual e gêneros textuais"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> O <em>Tipo</em> é a estrutura do texto (narrar, descrever, dissertar, dar instruções). O <em>Gênero</em> é o formato prático do dia a dia (notícia, receita, meme, redação).</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Por que Tipos e Gêneros foram Estudados na História?</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Desde a Grécia Antiga, filósofos como <strong>Aristóteles</strong> em sua <em>"Retórica"</em> e <em>"Poética"</em> notaram que o ser humano não fala apenas por falar: a fala tem uma intenção social clara. Seja para emocionar ouvintes contando uma batalha (narrativa), descrever um templo aos viajantes (descrição) ou convencer a assembleia de cidadãos a votar uma lei (dissertação argumentativa).
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        No século XX, o linguista russo <strong>Mikhail Bakhtin</strong> revolucionou a educação: ele provou que cada nova atividade social humana gera um novo <strong>Gênero Textual</strong>. Quando surgiu a imprensa, nasceu o jornal; quando surgiu o rádio, nasceu o podcast primitivo; quando surgiu a internet, nasceram o tweet e o meme!
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: O Tecido vs. A Roupa Pronta</div>
    <p>• <strong>Tipos Textuais (O Tecido):</strong> Existem apenas cerca de 5 tipos fundamentais em todo o mundo. Eles são a "matéria-prima" da construção das frases: algodão, jeans, seda (narrar, descrever, dissertar, expor, injungir).</p>
    <p>• <strong>Gêneros Textuais (A Roupa Pronta):</strong> São as roupas acabadas para cada evento social da vida humana: terno para casamento, biquíni para a praia de Copacabana, jaleco de laboratório ou pijama. Os gêneros são infinitos: receita de bolo, bula de remédio, tirinha da Mafalda, charge jornalística, contrato de aluguel ou a redação do CEFET!</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Detecção de Fake News:</strong> Criadores de notícias falsas disfarçam textos de fofoca sensacionalista no <em>gênero notícia jornalística</em> (com fotos, manchete e falsos depoimentos) para induzir os leitores ao erro.</li>
        <li><strong>Prompts de Inteligência Artificial:</strong> Quando você programa ou usa o ChatGPT, você utiliza comandos puramente <strong>Injuntivos / Instrucionais</strong> (verbos no imperativo como "faça", "resuma", "traduza").</li>
        <li><strong>Marketing Digital e Redes Sociais:</strong> As marcas não vendem produtos apenas descrevendo suas características: elas usam o <em>Storytelling</em> (tipo narrativo) para criar conexão emocional e engajamento com os clientes.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Os 5 Tipos Textuais Canônicos</h3>
    <ul style="font-size:15px; line-height:1.7; color:var(--text-secondary); padding-left:20px;">
        <li><strong>1. Narrativo:</strong> Relata uma sucessão de ações no tempo. Possui <em>Personagens, Tempo, Espaço, Narrador e Enredo</em> (verbos de ação no pretérito).</li>
        <li><strong>2. Descritivo:</strong> Retrato verbal estático. Não há passagem de tempo: é uma "fotografia com palavras" repleta de adjetivos, sensações visuais e auditivas.</li>
        <li><strong>3. Dissertativo-Argumentativo:</strong> Defesa de uma <em>Tese</em> (ponto de vista) sustentada por argumentos racionais e repertórios para convencer o leitor (É O FORMATO EXIGIDO NA REDAÇÃO DO CEFET!).</li>
        <li><strong>4. Expositivo / Informativo:</strong> Transmite dados, fatos científicos e definições com neutralidade e clareza, sem tentar persuadir ou opinar.</li>
        <li><strong>5. Injuntivo / Instrucional:</strong> Guia as ações do leitor ensinando um passo a passo através de verbos no Modo Imperativo (Ex: "Misture os ovos", "Aperte o botão liga/desliga").</li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Clássica da Banca do CEFET</div>
    <p>A banca adora colocar textos híbridos na prova! Por exemplo: em uma crônica, o autor <em>descreve</em> detalhadamente o rosto de um vendedor de rua no primeiro parágrafo, mas o texto como um todo conta a história de uma conversa que terminou em reencontro. A pergunta será: <em>"A tipologia PREDOMINANTE no texto é..."</em>. Resposta: <strong>Narrativa</strong>! Não se deixe enganar por pequenos trechos descritivos no meio de uma narrativa!</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Texto Analisado:</strong> <em>"Lave as mãos com água e sabão por pelo menos 20 segundos. Seque-as com papel descartável e utilize álcool em gel 70% para completar a higienização."</em><br>
        Identifique o gênero textual, o tipo textual predominante e a marca gramatical que comprova essa tipologia.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação Social do Gênero</span><br>
        O texto tem a finalidade prática de orientar o leitor sobre a profilaxia de doenças. Gênero: <strong>Guia de Instruções / Cartaz de Orientação Sanitária</strong>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Classificação da Tipologia</span><br>
        Como o objetivo é ensinar comandos práticos e sequenciais a serem executados pelo leitor, trata-se do tipo <strong>Injuntivo / Instrucional</strong>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Análise Gramatical Comprobatória</span><br>
        As marcas linguísticas indiscutíveis são os verbos conjugados no <strong>Modo Imperativo Afirmativo</strong>: <em>"Lave"</em>, <em>"Seque"</em>, <em>"utilize"</em>.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        O texto pertence ao gênero guia/cartaz orientador, de tipologia <strong>injuntiva</strong>, caracterizado pelo emprego obrigatório de verbos no imperativo.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Um texto que defende um ponto de vista com dados e argumentos lógicos é:",
                    options: ["Narrativo", "Dissertativo-argumentativo", "Descritivo", "Injuntivo"],
                    correct: 1,
                    exp: "Dissertativo-argumentativo foca na defesa de uma tese."
                }
            ]
        },
        {
            id: "port-02", title: "2. Literatura PALOP & Herança Africana", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: [], examTopics: ["Edital Port. Intro: Variedades linguísticas e temáticas de autores brasileiros e PALOP, herança africana"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> PALOP são os países africanos de língua portuguesa. Autores como Mia Couto e Pepetela e palavras como <em>cafuné, moleque, caçula, samba</em> mostram a rica herança africana na nossa língua.</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Origem dos PALOP & A Luta Armada Anticolonial na Literatura</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        A sigla <strong>PALOP</strong> reúne os <em>Países Africanos de Língua Oficial Portuguesa</em>: Angola, Moçambique, Guiné-Bissau, Cabo Verde e São Tomé e Príncipe. Durante séculos de violenta colonização portuguesa, esses povos foram proibidos de valorizar suas culturas ancestrais.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Nas décadas de 1960 e 1970, escritores-guerrilheiros como <strong>Agostinho Neto</strong> e <strong>Pepetela</strong> em Angola, e cronistas de tradição oral como <strong>Mia Couto</strong> e <strong>Paulina Chiziane</strong> em Moçambique, transformaram a língua portuguesa — antes a língua do colonizador — em uma arma poética de libertação nacional, fundindo o idioma europeu com a sabedoria mágica dos provérbios bantos e a ancestralidade africana.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: A Árvore Brasileira de Raízes Africanas</div>
    <p>• <strong>O Português Brasileiro Não Veio Apenas de Lisboa:</strong> Pense na língua falada no Brasil como uma árvore frondosa. Se o tronco formal veio de Portugal, a <strong>seiva afetiva e o calor humano</strong> vieram dos povos africanos escravizados, principalmente das línguas bantas (quimbundo, quicongo) e do iorubá.</p>
    <p>• Quando você faz um <em>dengo</em>, pede um <em>cafuné</em>, cuida do irmão <em>caçula</em>, come uma fatia de bolo de <em>fubá</em>, compra legumes na <em>quitanda</em>, vê um <em>moleque</em> correndo descalço na rua ou dança um <em>samba</em> no Maracanã, você está falando o coração da África ancestral sem perceber!</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Música Popular Brasileira & Letras de Música:</strong> O ritmo sincopado do Samba, do Maracatu, do Ijexá e do Funk carioca é a continuação direta das matrizes polirrítmicas dos terreiros e quilombos.</li>
        <li><strong>Lei Federal 10.639/03 nos Concursos Públicos:</strong> A legislação brasileira tornou obrigatório o estudo das relações étnico-raciais e da literatura afro-brasileira e africana, tornando o tema um dos mais cobrados na prova do CEFET.</li>
        <li><strong>Tradução Automática e IA Global:</strong> Processamento de Linguagem Natural (NLP) vem sendo refinado para reconhecer variações linguísticas do português africano falado em Maputo e Luanda.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Os 3 Gigantes da Literatura PALOP no CEFET</h3>
    <ul style="font-size:15px; line-height:1.7; color:var(--text-secondary); padding-left:20px;">
        <li><strong>Mia Couto (Moçambique):</strong> Autor de <em>"Terra Sonâmbula"</em>. Sua grande marca são os <strong>neologismos poéticos</strong> (inventa palavras fundindo termos, como "adorminhar", "invertebrar") e o realismo animista onde a terra, os rios e os mortos conversam com os vivos.</li>
        <li><strong>Pepetela (Angola):</strong> Autor de <em>"Mayombe"</em>. Retrata a luta de guerrilha nas florestas angolanas contra o exército colonial, questionando o preconceito tribal e os dilemas éticos da revolução.</li>
        <li><strong>Paulina Chiziane (Moçambique):</strong> Primeira mulher africana a publicar um romance (<em>"Niketche: Uma História de Poligamia"</em>) e vencedora do Prêmio Camões. Denuncia a opressão patriarcal sobre o corpo e a voz das mulheres africanas.</li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>A banca frequentemente traz trechos de romances de Mia Couto ou crônicas angolanas cheios de metáforas e neologismos. A pegadinha está em interpretar as palavras no sentido literal de dicionário europeu. <strong>Nos textos de Mia Couto, o fantástico e o poético expressam dores sociais reais da guerra civil e da colonização!</strong> Fique atento à exaltação da figura dos anciãos (griôs), guardiões da memória oral.</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Questão Típica CEFET:</strong> Em um conto do moçambicano Mia Couto, o narrador afirma: <em>"Aquele velho não falava: ele contava o mundo, desfiando memórias como quem desata nós de uma rede de pescar."</em> Qual é a função simbólica do ancião no texto e qual figura de linguagem estrutura a passagem?
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação Temática Sociocultural</span><br>
        Nas sociedades africanas tradicionais, o ancião representa o <strong>griô</strong> — a biblioteca viva da comunidade que transmite a sabedoria dos ancestrais pela oralidade.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Identificação da Estrutura Poética</span><br>
        A expressão <em>"como quem desata nós de uma rede de pescar"</em> utiliza um conectivo comparativo explícito (<em>como</em>) aproximando o ato de lembrar ao trabalho do pescador.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Classificação da Figura de Linguagem</span><br>
        A presença do conectivo de confronto direto classifica o recurso como <strong>Comparação (Símile)</strong>.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        O ancião simboliza a preservação da identidade cultural africana através da oralidade, construída textualmente por meio de uma <strong>comparação explícita</strong> com a lida da pesca.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "As palavras 'moleque', 'cafuné' e 'caçula' têm origem:",
                    options: ["Indígena tupi", "Africana (línguas bantas)", "Francesa", "Latina"],
                    correct: 1,
                    exp: "Originárias de línguas bantas africanas trazidas ao Brasil."
                }
            ]
        },
        {
            id: "port-03", title: "3. Variação Linguística & Preconceito Linguístico", time: "25 min", difficulty: "médio",
            track: "selecao", prerequisites: [], examTopics: ["Edital Port. 4.1: Escolha lexical e preconceito linguístico", "Edital Port. 3.1: Concordância verbal e nominal e variedades linguísticas"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> A língua varia conforme o lugar, grupo e situação. Discriminar falares diferentes é preconceito linguístico.</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Invenção da Sociolinguística: O Fim do Mito da Língua Única</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Durante séculos, as gramáticas tradicionais foram utilizadas como instrumento de dominação de classe: quem não falava exatamente como a elite nobre de Lisboa ou dos palácios imperiais era tratado como "inculto", "ignorante" ou "sem cérebro", sendo excluído da universidade e dos cargos de poder.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Na década de 1960, o linguista <strong>William Labov</strong> fundou a <strong>Sociolinguística</strong> ao provar cientificamente que <em>nenhuma língua é homogênea</em>. No Brasil, o professor <strong>Marcos Bagno</strong> consagrou o conceito de <strong>Preconceito Linguístico</strong>: a discriminação social, econômica e regional disfarçada de "defesa da língua correta".
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: A Roupa Certa para o Lugar Certo</div>
    <p>• <strong>A Roupa e a Língua:</strong> Pense na linguagem como o seu guarda-roupa. Você vai de terno completo e gravata à praia de Ipanema sob sol de 40°C? Não. Você vai prestar depoimento diante de um juiz ou fazer uma entrevista de emprego de sunga e chinelo? Também não!</p>
    <p>• Dizer que o falar popular (como <em>"os menino chegou"</em>) é "errado" é como dizer que usar chinelo na areia é um pecado mortal: não é questão de certo ou errado, mas de <strong>ADEQUAÇÃO AO CONTEXTO COMUNICATIVO</strong>! No bar com os amigos, a linguagem coloquial é perfeita e acolhedora. Na redação do CEFET, a situação exige o terno elegante da norma-padrão culta!</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Assistentes de Voz (Siri, Alexa, Google):</strong> No início, a inteligência artificial só entendia sotaques do eixo Rio-SP. Engenheiros de computação precisaram alimentar as redes neurais com variações fonéticas nordestinas, sulistas e caipiras para evitar viés algorítmico.</li>
        <li><strong>Cultura Hip-Hop, Slam e Batalhas de Rima:</strong> As gírias e o linguajar das periferias criam neologismos que mais tarde são incorporados pelos dicionários oficiais da Academia Brasileira de Letras.</li>
        <li><strong>Comunicação nas Redes Sociais:</strong> O "internetês" (abreviações como <em>vc, tbm, pq, kkkk</em>) é uma variação diafásica adaptada à rapidez da digitação em telas de celular, sem representar perda cognitiva dos jovens.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: As 4 Dimensões da Variação Linguística</h3>
    <ul style="font-size:15px; line-height:1.7; color:var(--text-secondary); padding-left:20px;">
        <li><strong>1. Variação Diatópica (Geográfica / Regional):</strong> Depende do local de nascimento ou moradia do falante. Exemplo clássico do aipim (Rio de Janeiro), mandioca (São Paulo) e macaxeira (Nordeste); o chiado carioca vs o "r" retroflexo do interior paulista.</li>
        <li><strong>2. Variação Diastrática (Social):</strong> Depende do grupo social, idade, classe econômica ou profissão. Inclui as <em>gírias juvenis</em> e o <em>jargão técnico</em> (médicos, advogados, técnicos de TI).</li>
        <li><strong>3. Variação Diafásica (Situacional / Estilo):</strong> Depende da formalidade da situação comunicativa: Registro Formal (norma-padrão) vs Registro Coloquial / Informal.</li>
        <li><strong>4. Variação Diacrônica (Histórica):</strong> Mudança da língua ao longo dos séculos. Exemplo da evolução pronominal: <em>Vossa Mercê → Vosmecê → Você → Cê → Vc</em>.</li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>Se uma opção de prova afirmar que o falante de um texto regional <em>"cometeu erros gramaticais crassos por falta de estudo"</em> ou <em>"assassinou a língua portuguesa"</em>, <strong>ELIMINE ESSA OPÇÃO IMEDIATAMENTE!</strong> A banca do CEFET abomina o preconceito linguístico! A opção correta SEMPRE usará termos respeitosos e científicos como: <em>"o texto apresenta variação linguística regional perfeitamente adequada ao contexto informal do personagem"</em> ou <em>"trata-se de fenômeno de concordância ideológica legítimo na oralidade popular"</em>.</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação de Prova:</strong> Em uma tira cômica de Chico Bento, o personagem diz: <em>"Pai, cê me compra uma bota nova pra mode eu trabaiá na roça?"</em>. A banca pergunta qual atitude a escola deve ter diante dessa fala de Chico Bento.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação Sociolinguística</span><br>
        A fala de Chico Bento expressa a variedade dialetal caipira do interior (variação diatópica e sociocultural), com léxico e fonética próprios de sua comunidade.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Aplicação do Princípio da Adequação</span><br>
        No ambiente familiar e comunitário da roça, a fala é 100% eficaz, compreensível e legítima. Não há erro de raciocínio.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Definição do Papel da Escola Pública</span><br>
        O papel da escola moderna não é "corrigir com humilhação" nem "extirpar" o dialeto materno, mas sim <strong>ampliar as possibilidades expressivas do aluno</strong>, ensinando a norma culta para que ele transite com segurança em situações formais.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        A escola deve respeitar a variedade linguística de Chico Bento como patrimônio cultural, ensinando a norma-padrão como ferramenta de cidadania, sem desvalorizar sua identidade de origem.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "A discriminação de falares regionais ou populares é classificada como:",
                    options: ["Adequação textual", "Preconceito linguístico", "Neologismo", "Hiperonímia"],
                    correct: 1,
                    exp: "Preconceito linguístico."
                }
            ]
        },
        {
            id: "port-04", title: "4. Morfologia: Classes, Formação & Neologismos", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: [], examTopics: ["Edital Port. 2.1: Classes de palavras na construção de sentidos", "Edital Port. 2.2: Estrutura e formação de palavras, neologismos"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> O substantivo nomeia, o adjetivo qualifica, o verbo indica ação. Palavras novas surgem por derivação (prefixos/sufixos) ou composição.</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Origem da Morfologia: A Catalogação dos Blocos da Mente</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        No século II a.C., na Biblioteca de Alexandria, o gramático grego <strong>Dionísio Trácio</strong> escreveu a primeira gramática da história ocidental. Ele percebeu algo fascinante: embora o ser humano consiga inventar milhões de palavras diferentes, todas elas desempenham apenas <strong>10 funções básicas</strong> na hora de descrever o universo.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        A Morfologia estuda exatamente isso: a "anatomia interna" das palavras, como elas são classificadas e como novas palavras nascem todos os dias por meio de prefixos, sufixos e fusões lexicais.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: A Escalação do Time & O LEGO das Palavras</div>
    <p>• <strong>As 10 Classes como Jogadores de Futebol:</strong>
        <br>– <strong>O Substantivo (Camisa 9):</strong> O artilheiro do time. É ele quem dá nome a tudo o que existe (pessoas, lugares, sentimentos, objetos).
        <br>– <strong>O Artigo, Adjetivo e Numeral (Os Pontas e Laterais):</strong> Jogam em função do camisa 9, caracterizando, limitando ou quantificando o substantivo.
        <br>– <strong>O Pronome (O Reserva Imediato):</strong> Entra em campo para substituir ou acompanhar o substantivo, evitando repetições cansativas.
        <br>– <strong>O Verbo (O Motor do Meio-Campo):</strong> O coração do jogo. Sem verbo, a frase não tem movimento nem vida (ações, estados, fenômenos climáticos).
        <br>– <strong>O Advérbio (O Treinador na Lateral):</strong> Modifica o verbo, o adjetivo ou outro advérbio, indicando o <em>modo, tempo, lugar ou intensidade</em>.
    </p>
    <p>• <strong>O LEGO das Palavras (Prefixos e Sufixos):</strong> Formar palavras é encaixar blocos de montar no <strong>Radical</strong> (a raiz do significado). Na derivação parassintética, se você tirar qualquer um dos blocos, a palavra perde o sentido e desmorona!</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Neologismos da Era da Internet:</strong> A língua cria novas palavras por derivação sufixal para atender à tecnologia: <em>tuitar, printar, stalkear, deletar, deslogar, flopar</em>.</li>
        <li><strong>Marcas Comerciais e Branding:</strong> Nomes de remédios e startups são criados por composição e derivação morfológica para evocar sensações de agilidade, frescor ou eficácia.</li>
        <li><strong>Processamento de Linguagem Natural (NLP):</strong> Algoritmos de busca como o Google analisam o radical das palavras (lematização) para encontrar resultados mesmo que você digite no singular ou no plural.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Os Processos de Formação de Palavras</h3>
    <ul style="font-size:15px; line-height:1.7; color:var(--text-secondary); padding-left:20px;">
        <li><strong>1. Derivação Prefixal:</strong> Adiciona prefixo antes do radical (<em>in-feliz, re-fazer, des-leal</em>).</li>
        <li><strong>2. Derivação Sufixal:</strong> Adiciona sufixo após o radical (<em>feliz-mente, leal-dade, amor-oso</em>).</li>
        <li><strong>3. Derivação Parassintética (MUITO COBRADA!):</strong> Prefixo e sufixo são acrescentados <strong>simultaneamente</strong>. Se retirar um deles, a palavra resultante NÃO existe no português (<em>en-tard-ecer → não existe "entarde" nem "tardecer"; a-noit-ecer; em-bonec-ar</em>).</li>
        <li><strong>4. Composição por Justaposição:</strong> Une duas palavras sem perda fonética de letras (<em>passatempo, girassol, guarda-chuva</em>).</li>
        <li><strong>5. Composição por Aglutinação:</strong> Une palavras com alteração/perda fonética (<em>planalto = plano + alto; vinagre = vinho + acre; fidalgo = filho + de + algo</em>).</li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>A banca adora colocar uma palavra com prefixo e sufixo como <strong>"deslealdade"</strong> e perguntar se ela é parassintética. <strong>NÃO É!</strong> Faça o teste do cancelamento: se você tirar o prefixo "des-", a palavra "lealdade" continua existindo! Se tirar o sufixo "-dade", a palavra "desleal" também existe! Portanto, trata-se de <em>Derivação Prefixal e Sufixal NÃO simultânea</em>. Só é <strong>Parassintética</strong> quando ambos são obrigatórios ao mesmo tempo (como <em>a-doç-ar</em>)!</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Questão CEFET:</strong> Analise as palavras <em>"anoitecer"</em> e <em>"infelizmente"</em> quanto aos seus respectivos processos de formação morfológica e justifique a diferença técnica entre elas.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Identificação dos Afixos e Radicais</span><br>
        Em "anoitecer": Prefixo [a-] + Radical [noit] + Sufixo [-ecer].<br>
        Em "infelizmente": Prefixo [in-] + Radical [feliz] + Sufixo [-mente].
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Teste da Independência Mórfica</span><br>
        Removendo afixos em "infelizmente": existe "infeliz" e existe "felizmente" no idioma.<br>
        Removendo afixos em "anoitecer": NÃO existe "anoite" (como verbo) e NÃO existe "noitecer".
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Classificação Gramatical Rápida</span><br>
        "Infelizmente" = Derivação Prefixal e Sufixal concomitante não obrigatória.<br>
        "Anoitecer" = Derivação Parassintética estrita.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        A palavra <em>"anoitecer"</em> é fruto de <strong>derivação parassintética</strong> porque os afixos foram adicionados de maneira simultânea e inseparável, diferindo de <em>"infelizmente"</em>.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "A palavra 'embonecar' é formada por:",
                    options: ["Derivação prefixal", "Derivação parassintética", "Aglutinação", "Hibridismo"],
                    correct: 1,
                    exp: "Derivação parassintética."
                }
            ]
        },
        {
            id: "port-05", title: "5. Verbos: Tempos, Modos & Vozes Verbais", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: [], examTopics: ["Edital Port. 2.3: Tempos e modos verbais no texto", "Edital Port. 3.4: Vozes verbais e efeitos de sentido"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> Indicativo (certeza), Subjuntivo (dúvida/desejo), Imperativo (ordem). Na voz passiva, o sujeito sofre a ação: 'O exame foi feito pelo aluno'.</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Invenção dos Modos Verbais: A Máquina do Tempo da Linguagem</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Os animais conseguem emitir sinais para avisar sobre o presente imediato (um latido de perigo ou um chamado para comida). Mas apenas a linguagem humana desenvolveu os <strong>Verbos</strong> com a capacidade de criar uma verdadeira máquina do tempo abstrata: podemos falar sobre o que aconteceu há mil anos, sobre o que está acontecendo agora e sobre o que <em>talvez</em> aconteça amanhã.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Os três <strong>Modos Verbais</strong> traduzem a atitude psicológica do falante: a segurança científica da certeza (Indicativo), o anseio da incerteza hipotética (Subjuntivo) e a autoridade direta de liderança (Imperativo).
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: As 3 Atitudes da Mente & O Golpe da Voz Passiva</div>
    <p>• <strong>Os 3 Modos Verbais:</strong>
        <br>– <strong>Indicativo (O Cientista Racional):</strong> Afirma fatos como verdades reais no passado, presente ou futuro: <em>"Eu serei aprovado no CEFET"</em>.
        <br>– <strong>Subjuntivo (O Poeta Sonhador):</strong> Vive no terreno das probabilidades, desejos e condições imaginadas: <em>"Se eu estudasse mais...", "Quando eu entrar no CEFET...", "Tomara que passe!"</em>.
        <br>– <strong>Imperativo (O Comandante de Missão):</strong> Emite ordens, instruções, apelos ou conselhos: <em>"Não desista!", "Resolva esta questão com atenção!"</em>.
    </p>
    <p>• <strong>Vozes Verbais (A Direção do Golpe):</strong>
        <br>– <em>Voz Ativa:</em> O sujeito é o autor do golpe (<em>"O aluno venceu a prova"</em>).
        <br>– <em>Voz Passiva:</em> O sujeito é paciente, recebendo o efeito da ação (<em>"A prova foi vencida pelo aluno"</em>).
    </p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Jornalismo Investigativo e Responsabilidade Jurídica:</strong> Quando um jornal quer evitar processos antes do julgamento final, usa o Pretérito do Futuro do Indicativo: <em>"Empresário teria desviado recursos públicos"</em>.</li>
        <li><strong>Manuais Técnicos e Programação de Softwares:</strong> Comandos condicionais em linguagens de programação (<code>if / then / else</code>) reproduzem rigorosamente o Pretérito Imperfeito do Subjuntivo da língua portuguesa.</li>
        <li><strong>Publicidade e Campanhas de Conscientização:</strong> Slogans publicitários usam o modo imperativo para induzir ação imediata no consumidor (<em>"Beba água", "Vem pra Caixa você também"</em>).</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: O Segredo da Partícula Apassivadora "SE"</h3>
    <div class="box-formula" style="line-height:1.8;">
        <strong>Voz Passiva Sintética (Verbo Transitivo Direto + SE):</strong><br>
        • Vende-se <strong>uma casa</strong> (Casa é o sujeito paciente singular → Verbo no singular).<br>
        • Vendem-se <strong>casas</strong> (Casas é o sujeito paciente plural → O verbo OBRIGATORIAMENTE vai para o plural!).<br><br>
        <strong>Diferente de: Índice de Indeterminação do Sujeito (VTI + SE):</strong><br>
        • Precisa-se de técnicos (Quem precisa, precisa DE algo → VTI → O verbo FICA SEMPRE NO SINGULAR!).
    </div>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>Placas de rua erradas confundem os estudantes: <em>"Aluga-se quartos"</em> é erro gravíssimo na norma-padrão! Como "quartos" é o sujeito paciente plural, o correto é <strong>"Alugam-se quartos"</strong> (equivalente a <em>"Quartos são alugados"</em>). A banca do CEFET sempre coloca essa pegadinha para testar se o aluno sabe concordar o verbo na voz passiva sintética!</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Questão CEFET:</strong> Em <em>"Construíram-se novos laboratórios de mecatrônica no campus Maracanã"</em>, classifique a voz verbal, identifique o sujeito gramatical da oração e a função da palavra 'se'.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Análise da Transitividade do Verbo</span><br>
        O verbo <em>construir</em> é Transitivo Direto (quem constrói, constrói algo).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Transformação para a Passiva Analítica</span><br>
        Podemos converter sem alteração de sentido para: <em>"Novos laboratórios de mecatrônica FORAM CONSTRUÍDOS no campus Maracanã"</em>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Identificação Sintática</span><br>
        O termo <em>"novos laboratórios de mecatrônica"</em> é o <strong>Sujeito Paciente</strong> da oração, e por isso o verbo está no plural (construíram-se).
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        A oração está na <strong>Voz Passiva Sintética</strong>, a partícula <em>"se"</em> atua como <strong>pronome apassivador</strong> e o sujeito gramatical é <em>"novos laboratórios de mecatrônica"</em>.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Em 'Alugam-se salas', o termo 'salas' é:",
                    options: ["Objeto direto", "Sujeito paciente", "Objeto indireto", "Agente"],
                    correct: 1,
                    exp: "Sujeito paciente em voz passiva sintética."
                }
            ]
        },
        {
            id: "port-06", title: "6. Sintaxe: Concordância & Regência Verbal/Nominal", time: "30 min", difficulty: "difícil",
            track: "selecao", prerequisites: ["port-04", "port-05"], examTopics: ["Edital Port. 3.1: Concordância verbal e nominal", "Edital Port. 3.2: Regência verbal e nominal e variedades linguísticas"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> Concordância combina número e pessoa. Regência diz qual preposição o verbo pede (assistir <em>ao</em> filme). Os verbos <em>Haver</em> (existir) e <em>Fazer</em> (tempo) ficam sempre no singular!</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Por que a Sintaxe e a Regência foram Inventadas?</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        No Império Romano e na Idade Média, o surgimento de contratos legais, leis constitucionais e acordos de paz internacionais exigia uma precisão cirúrgica de redação. Se um tratado entre dois reinos usasse a preposição errada ou um verbo com duplo sentido, o equívoco podia desencadear guerras sangrentas!
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        A <strong>Sintaxe</strong> foi estabelecida para ser a matemática da língua: ela dita as regras de trânsito que conectam as palavras para que o emissor e o receptor compartilhem rigorosamente o mesmo significado sem ruídos.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: O Código de Trânsito & As Pontes de Pedágio</div>
    <p>• <strong>Concordância (O Cinto de Segurança):</strong> Se o sujeito viaja no plural (<em>"Os alunos"</em>), o verbo é obrigado a afivelar o cinto e viajar no plural junto (<em>"estudaram"</em>). É uma relação de harmonia e equilíbrio mútuo.</p>
    <p>• <strong>Regência Verbal (As Pontes com Pedágio):</strong> Alguns verbos viajam direto até o seu destino sem pagar pedágio nenhum — são os Transitivos Diretos (<em>"Eu comprei o livro"</em>). Outros verbos são ilhas que exigem uma ponte com pedágio obrigatório (uma <strong>Preposição</strong>) para chegar ao complemento (<em>"Eu confio <strong>EM</strong> você"</em>, <em>"Eu preciso <strong>DE</strong> ajuda"</em>). Usar a preposição errada altera completamente o sentido da ação!</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Redação Oficial de Concursos e Leis:</strong> Qualquer edital público (como o Edital nº 05/2026 do CEFET) deve seguir rigorosamente a regência e a concordância padrão para evitar nulidade jurídica de seus artigos.</li>
        <li><strong>Entrevistas Profissionais e Mundo Corporativo:</strong> O domínio natural da regência culta (como <em>"aspirar ao cargo"</em> em vez de <em>"aspirar o cargo"</em>) é um dos critérios mais observados em seleções de estágio técnico no Rio.</li>
        <li><strong>Compiladores de Código de Computação:</strong> Sintaxe inválida em linguagens como Python ou C++ trava o programa na compilação, exatamente como um erro sintático na redação penaliza pontos graves na banca examinadora.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Os Dois Verbos Mais Cobrados no Concurso</h3>
    <div class="box-formula" style="line-height:1.8;">
        <strong>1. Verbo HAVER (no sentido de existir ou tempo decorrido):</strong><br>
        É um verbo IMPESSOAL: ele <strong>NÃO TEM SUJEITO</strong> e deve ficar <strong>SEMPRE NO SINGULAR</strong>!<br>
        • Correto: <em>Havia</em> vinte candidatos na sala. (NUNCA "Haviam"!).<br>
        • Correto: <em>Houve</em> muitos acertos na prova.<br><br>
        <strong>2. Verbo FAZER (indicando tempo transcorrido ou clima):</strong><br>
        Também é IMPESSOAL e fica <strong>SEMPRE NO SINGULAR</strong>!<br>
        • Correto: <em>Faz</em> cinco anos que estudo aqui. (NUNCA "Fazem cinco anos"!).<br>
        • Correto: <em>Fazia</em> dias muito frios no inverno.<br><br>
        <strong>As 4 Regências Clássicas que Caem Todo Ano no CEFET:</strong><br>
        • <em>Assistir:</em> com sentido de presenciar/ver exige preposição "A" (<em>Assistir <strong>ao</strong> jogo</em>). No sentido de prestar socorro não tem preposição (<em>O médico assistiu o paciente</em>).<br>
        • <em>Aspirar:</em> no sentido de desejar/almejar exige "A" (<em>Aspirar <strong>ao</strong> curso técnico</em>). No sentido de respirar/sugar é direto (<em>Aspirar o ar puro</em>).<br>
        • <em>Visar:</em> no sentido de ter como objetivo exige "A" (<em>Visar <strong>à</strong> aprovação</em>).
    </div>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>A banca adora juntar verbos auxiliares com verbos impessoais em locuções verbais, como: <em>"Devem haver muitas vagas"</em>. <strong>ISSO ESTÁ ERRADO!</strong> O verbo principal "haver" transmite sua impessoalidade para o verbo auxiliar! O correto obrigatório é: <strong>"Deve haver muitas vagas"</strong> ou <strong>"Vai fazer dois meses"</strong>! Lembre-se: o verbo auxiliar se contamina e fica no singular!</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Questão CEFET:</strong> Corrija a oração a seguir de acordo com a norma-padrão culta, justificando a correção sintática:<br>
        <em>"Houveram bastantes reclamações porque fazem três semanas que não assistem o filme nas aulas de artes."</em>
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Diagnóstico do Verbo Haver</span><br>
        "Houveram" foi empregado no sentido de existir. Sendo impessoal, não admite plural. Correção: <strong>Houve</strong>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Diagnóstico do Verbo Fazer</span><br>
        "Fazem" indica tempo cronológico transcorrido. Também é impessoal e não admite plural. Correção: <strong>Faz três semanas</strong>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Diagnóstico da Regência de Assistir</span><br>
        "Assistir" com o sentido de contemplar/ver na tela é Transitivo Indireto e rege a preposição <strong>a</strong>: <em>assistem <strong>ao</strong> filme</em>.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        A frase corrigida e plenamente adequada à norma culta é: <em>"<strong>Houve</strong> bastantes reclamações porque <strong>faz</strong> três semanas que não assistem <strong>ao</strong> filme nas aulas de artes."</em>
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Assinale a opção com concordância correta:",
                    options: ["Fazem três anos", "Houveram inscrições", "Faz três anos", "Devem haver vagas"],
                    correct: 2,
                    exp: "'Fazer' indicando tempo decorrido é impessoal e fica no singular."
                }
            ]
        },
        {
            id: "port-07", title: "7. Período Simples, Composto & Conectivos", time: "30 min", difficulty: "difícil",
            track: "selecao", prerequisites: ["port-05"], examTopics: ["Edital Port. 3.3: Relações sintáticas nos períodos simples e compostos", "Edital Port. 1.4: Mecanismos de coesão e coerência textual"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> Conectivos ligam as orações: <em>mas/porém</em> indica oposição, <em>embora</em> indica concessão, <em>portanto</em> indica conclusão.</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Origem dos Conectivos: A Lógica da Argumentação Clássica</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Na Roma Antiga e nos grandes parlamentos da história, oradores lendários como <strong>Cícero</strong> sabiam que ter boas ideias isoladas não é suficiente para convencer ninguém: o segredo do convencimento está na <strong>articulação lógica entre as premissas e as conclusões</strong>.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Os <strong>Conectivos (Conjunções)</strong> foram desenvolvidos para serem os condutores elétricos do pensamento. Eles dizem ao leitor se a próxima frase vai somar um detalhe, contestar uma ideia, explicar uma causa oculta ou selar uma conclusão irrefutável.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: Os Desvios dos Trilhos de Trem</div>
    <p>• Imagine que o seu texto é um trem bala em alta velocidade. As conjunções são as <strong>chaves de desvio dos trilhos</strong>:</p>
    <p>– <strong>Conjunções Aditivas (e, além disso):</strong> Mantêm o trem em linha reta, somando velocidade e argumentos no mesmo sentido.</p>
    <p>– <strong>Conjunções Adversativas (mas, porém, contudo, todavia, no entanto):</strong> Acionam o desvio para um trilho oposto com força total! O argumento que vem depois do "mas" é o que realmente tem peso para o autor (<em>"Ele é esforçado, <strong>mas</strong> não estuda com método"</em>).</p>
    <p>– <strong>Conjunções Concessivas (embora, mesmo que, ainda que):</strong> São quebra-molas ou obstáculos no trilho que <em>tentam atrapalhar o trem, mas não conseguem pará-lo</em> (<em>"<strong>Embora</strong> a prova do CEFET seja disputada, eu vou conquistar a minha vaga!"</em>).</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>A Lógica Booleana da Programação:</strong> Toda linha de código em computação usa conectivos lógicos (<code>AND</code> = aditiva; <code>OR</code> = alternativa; <code>IF / ELSE</code> = condicional; <code>NOT</code> = negação).</li>
        <li><strong>Redação Nota 10 do CEFET:</strong> A banca avalia a <strong>Coesão Interparágrafos</strong>: iniciar parágrafos com operadores argumentativos (<em>"Nesse cenário", "Por outro lado", "Portanto"</em>) garante nota máxima no critério de estrutura.</li>
        <li><strong>Debates Políticos e Negociações Salariais:</strong> O uso estratégico de conjunções conclusivas e adversativas desarma a oposição e conduz o ouvinte ao consenso.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: O Guia Definitivo dos Conectivos no CEFET</h3>
    <div class="box-formula" style="line-height:1.8;">
        <strong>1. Adversativas (Oposição Forte - Verbo no Indicativo):</strong><br>
        <em>mas, porém, contudo, todavia, no entanto, entretanto</em>.<br><br>
        <strong>2. Concessivas (Oposição Fraca / Quebra de Expectativa - Verbo no Subjuntivo):</strong><br>
        <em>embora, conquanto, ainda que, mesmo que, posto que, apesar de que</em>.<br><br>
        <strong>3. Conclusivas (Fechamento do Raciocínio):</strong><br>
        <em>portanto, logo, por conseguinte, destarte, assim, então</em>.<br><br>
        <strong>4. Explicativas vs Causais:</strong><br>
        • <em>Causa (o motivo de um fato):</em> Não foi à aula <strong>porque choveu</strong> (Chuva causou a ausência).<br>
        • <em>Explicação (justificativa de uma ordem ou dedução):</em> Feche o guarda-chuva, <strong>porque a chuva parou</strong>.
    </div>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>A banca adora trocar a ordem das orações para enganar o aluno no teste de <strong>Causa vs. Consequência</strong>! Veja: <em>"Como não obteve a pontuação mínima, o candidato foi desclassificado"</em>. A palavra <strong>"Como"</strong> no início da frase NÃO indica comparação: ela tem valor de <strong>CAUSA</strong> (equivale a <em>"Já que não obteve..."</em>)! Lembre-se: a causa sempre acontece antes cronologicamente; a consequência vem depois!</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Questão CEFET:</strong> Na frase: <em>"Conquanto houvesse grande concorrência para o curso técnico de Edificações, os alunos da rede pública mantiveram a confiança na preparação."</em>, identifique a relação de sentido estabelecida pelo conectivo <em>'Conquanto'</em> e substitua-o por outro de valor equivalente sem alterar a correção gramatical.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação Semântica da Frase</span><br>
        Há duas ideias em confronto: alta concorrência (obstáculo) vs manutenção da confiança (ação que prossegue apesar do obstáculo).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Identificação do Valor do Conectivo</span><br>
        A conjunção <em>"conquanto"</em> introduz uma ideia subordinada concessiva com verbo no subjuntivo (<em>houvesse</em>).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Seleção do Conectivo Sinônimo</span><br>
        Sinônimos concessivos exatos que regem o modo subjuntivo: <strong>embora</strong>, <strong>ainda que</strong>, <strong>mesmo que</strong>.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        O conectivo estabelece relação de <strong>concessão</strong> e pode ser perfeitamente substituído por <em>"Embora houvesse grande concorrência..."</em>.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Na frase 'Estudou, portanto foi aprovado', o conectivo expressa:",
                    options: ["Causa", "Conclusão", "Condição", "Adição"],
                    correct: 1,
                    exp: "'Portanto' introduz dedução conclusiva."
                }
            ]
        },
        {
            id: "port-08", title: "8. Semântica: Intertextualidade, Ambiguidade & Sentido", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: [], examTopics: ["Edital Port. 1.1: Intertextualidade — alusão, citação; discurso direto, indireto e indireto livre", "Edital Port. 4.2: Ambiguidade e polissemia", "Edital Port. 4.3: Denotação e conotação", "Edital Port. 4.4: Sinônimos, hiperônimos, hipônimos"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> <em>Denotação</em> é o sentido real do dicionário. <em>Conotação</em> é o sentido figurado. <em>Ambiguidade</em> é o duplo sentido que confunde o leitor. E a <em>Crase</em> é o casamento da preposição 'a' com o artigo 'a'!</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Origem da Semântica: O Poder do Duplo Sentido na História</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Na Grécia Antiga, reis e generais consultavam a sacerdotisa do <strong>Oráculo de Delfos</strong> antes de qualquer guerra. Creso, o poderoso rei da Lídia, perguntou se devia atacar a Pérsia. A resposta profética foi: <em>"Se você cruzar o rio, um grande império cairá"</em>. Confiante, Creso guerreou... e o império que ruiu foi o dele próprio! O oráculo nunca errava porque dominava a arte da <strong>Ambiguidade</strong> e do sentido duplo.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        A <strong>Semântica</strong> nasceu para desvendar exatamente as camadas de significado: o sentido literal de dicionário, os sentidos figurados poéticos e o diálogo invisível que um texto trava com outros textos da história (Intertextualidade).
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: O Dicionário vs. O Coração & O Casamento da Crase</div>
    <p>• <strong>Denotação (D de Dicionário):</strong> Sentido literal, objetivo e frio das palavras. Ex: <em>"A pedra caiu no rio"</em> (pedra mineral geológica).</p>
    <p>• <strong>Conotação (C de Coração / Criatividade):</strong> Sentido poético, subjetivo e figurado. Ex: <em>"Aquele candidato tem um coração de pedra"</em> (insensível, duro).</p>
    <p>• <strong>A Crase como o Casamento Perfeito:</strong> Crase não é um acento: é a fusão de dois sons idênticos <code>a + a = à</code>. Pense em um casamento formal: o <strong>Noivo</strong> é a Preposição "a" (exigida por quem pede destino ou regência, como <em>"Vou..."</em>) e a <strong>Noiva</strong> é o Artigo Feminino "a" que acompanha a palavra seguinte (<em>"a praia"</em>). Quando os dois noivos comparecem juntos ao altar: <strong>Vou à praia</strong>! Diante de palavra masculina (<em>"a pé"</em>) ou verbo (<em>"a partir"</em>), a noiva não existe, logo o casamento é proibido!</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>A Cultura dos Memes na Internet:</strong> Um meme é a manifestação mais pura da <strong>Intertextualidade</strong> moderna. Você só ri de uma imagem se o seu cérebro reconhecer a referência anterior (a cena do filme, o áudio do TikTok ou o evento esportivo original).</li>
        <li><strong>Contratos Jurídicos e Litígios Milionários:</strong> Frases com ambiguidade estrutural em cláusulas contratuais já causaram anulações de heranças e multas milionárias na justiça brasileira.</li>
        <li><strong>Mecanismos de Busca Inteligente (Semantic Search):</strong> O Google não busca apenas palavras-chave idênticas: ele analisa <em>hiperônimos e hipônimos</em> (se você pesquisa "doenças felinas", o robô sabe que "gato" é hipônimo de "felino").</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Hiperônimos, Polissemia & O Macete da Crase</h3>
    <div class="box-formula" style="line-height:1.8;">
        <strong>Hiperônimo (O Guarda-Chuva Maior) vs Hipônimo (O Detalhe Específico):</strong><br>
        • <em>Veículo</em> é hiperônimo de <em>carro, moto e bicicleta</em>.<br>
        • <em>Rosa</em> é hipônimo de <em>flor</em>.<br><br>
        <strong>Polissemia:</strong> A mesma palavra com vários sentidos (<em>Banco</em> de sentar, <em>Banco</em> de dinheiro, <em>Banco</em> de dados).<br><br>
        <strong>O Macete do "Volto Da / Volto De" para Nomes de Lugares:</strong><br>
        • <em>"Se vou A e volto DA, crase no À!"</em> (Vou à Bahia → Volto DA Bahia).<br>
        • <em>"Se vou A e volto DE, crase pra quê?"</em> (Vou a Paris → Volto DE Paris).
    </div>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>A banca adora colocar opções com <strong>crase proibida</strong> para testar sua atenção: 1) Nunca ocorre crase antes de <strong>palavras masculinas</strong> (<em>"Andamos a cavalo"</em>); 2) Nunca ocorre crase antes de <strong>verbos</strong> (<em>"Estávamos a esperar"</em>); 3) Nunca ocorre crase antes de pronomes de tratamento e indefinidos (<em>"Entreguei a ela"</em>, <em>"Disse a todos"</em>)!</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Questão CEFET:</strong> Em uma campanha publicitária lê-se: <em>"O prefeito visitou a nova escola de bicicleta."</em> Identifique o vício de linguagem presente na oração, explique o duplo sentido e reescreva o período para eliminar a falha comunicativa.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação Semântica</span><br>
        A frase gera dúvida imediata: quem estava de bicicleta? O prefeito estava pedalando para visitar o colégio, ou a escola foi construída com formato/temática de bicicleta?
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Classificação do Vício de Linguagem</span><br>
        Trata-se de uma <strong>Ambiguidade Estrutural (Anfibologia)</strong> decorrente da posição inadequada do adjunto adverbial de meio ("de bicicleta").
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Reestruturação da Frase</span><br>
        Deslocando o adjunto para perto do sujeito ou do verbo: <em>"De bicicleta, o prefeito visitou a nova escola"</em> ou <em>"O prefeito foi de bicicleta visitar a nova escola"</em>.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        O texto continha vício de <strong>ambiguidade</strong>, superado com o deslocamento do adjunto adverbial para junto do termo a que ele realmente se refere.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "A palavra 'animal' em relação a 'gato' é:",
                    options: ["Hiperônimo", "Hipônimo", "Sinônimo", "Antônimo"],
                    correct: 0,
                    exp: "Hiperônimo (categoria mais ampla)."
                }
            ]
        },
        {
            id: "port-09", title: "9. Figuras de Linguagem", time: "25 min", difficulty: "médio",
            track: "selecao", prerequisites: [], examTopics: ["Edital Port. 1.2: Figuras de linguagem na construção do sentido do texto"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> Metáfora (comparação direta), Metonímia (troca de termos), Hipérbole (exagero), Eufemismo (suavização) e Antítese (ideias opostas).</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Origem das Figuras de Linguagem: A Pintura Invisível da Palavra</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Na Grécia e em Roma, e mais tarde no esplendor do Barroco com Gregório de Matos e Padre Antônio Vieira, os grandes escritores descobriram que a linguagem puramente literal e fria é incapaz de expressar as emoções mais profundas da alma humana.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Como explicar a paixão, a tragédia ou a revolta política sem parecer um boletim meteorológico sem vida? As <strong>Figuras de Linguagem</strong> foram inventadas para serem os pincéis poéticos da mente: elas desviam as palavras do seu significado rígido para emocionar, seduzir, comover e fazer o leitor pensar fora da caixa.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: Os Efeitos Especiais de Cinema (CGI)</div>
    <p>• As Figuras de Linguagem são exatamente como os <strong>efeitos visuais em computação gráfica (CGI)</strong> de um filme de ficção:</p>
    <p>– <strong>Metáfora:</strong> É um salto sem corda que funde dois mundos (<em>"Minha mãe é uma fortaleza"</em> — ela não tem muralhas de pedra, mas tem a solidez protetora de um castelo!).</p>
    <p>– <strong>Metonímia:</strong> É a troca inteligente por proximidade (<em>"Li Machado de Assis"</em> — você não leu a pessoa física do escritor, leu o livro impresso dele!).</p>
    <p>– <strong>Hipérbole:</strong> É o exagero teatral expressivo (<em>"Já te avisei um milhão de vezes!"</em>).</p>
    <p>– <strong>Eufemismo:</strong> É a luva macia para amenizar uma dor ou choque (<em>"O avô partiu para o andar de cima"</em> no lugar de <em>morreu</em>).</p>
    <p>– <strong>Antítese vs. Paradoxo:</strong> Antítese é o sol e a lua no mesmo céu (opostos que coexistem: <em>"O riso e o pranto"</em>). Paradoxo é uma contradição lógica insana que desafia a razão (<em>"Estou cego de tanto ver"</em>).</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Propaganda e Slogans Históricos:</strong> <em>"Red Bull te dá asas"</em> é uma hipérbole e metáfora combinadas que gerou bilhões de dólares em valor de marca.</li>
        <li><strong>Charges de Jornal & Crítica Social:</strong> A Ironia é a principal arma de cartunistas para criticar a corrupção e os problemas de transporte público no Rio de Janeiro.</li>
        <li><strong>Música e Cultura Urbana:</strong> No rap, MPB e samba, as metáforas são a ferramenta de denúncia contra a desigualdade e de exaltação da vida nas favelas.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: O Quadro Comparativo das Figuras</h3>
    <ul style="font-size:15px; line-height:1.7; color:var(--text-secondary); padding-left:20px;">
        <li><strong>Metáfora:</strong> Comparação implícita sem conectivo (<em>"A vida é uma montanha-russa"</em>). Se tiver 'como', vira <em>Comparação</em> (<em>"A vida é COMO uma montanha-russa"</em>).</li>
        <li><strong>Personificação / Prosopopeia:</strong> Atribuir sentimentos e ações humanas a animais ou objetos (<em>"A noite chorava de solidão"</em>).</li>
        <li><strong>Pleonasmo:</strong> Repetição enfática de uma mesma ideia (<em>"Entrar para dentro", "Chorar um choro doído"</em>).</li>
        <li><strong>Sinestesia:</strong> Mistura de diferentes sentidos sensoriais corporais (<em>"Um olhar doce e perfumado"</em> — visão + paladar + olfato!).</li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Clássica da Banca do CEFET</div>
    <p>A confusão fatal entre <strong>Antítese</strong> e <strong>Paradoxo</strong>! Se os dois termos opostos conseguem acontecer juntos no mundo real sem quebrar a lógica da física, é <strong>Antítese</strong> (exemplo: <em>"Na mesma rua convivem a riqueza dos palacetes e a pobreza dos sem-teto"</em>). Mas se a junção dos dois termos for um absurdo lógico que parece mentira, é <strong>Paradoxo</strong> (exemplo: <em>"Aquele silêncio ensurdecedor da sala de aula"</em> — silêncio não ensurdece fisicamente!).</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Trecho Literário:</strong> <em>"Bebia a solidão dos copos vazios enquanto a cidade dormia em um sono inquieto."</em><br>
        Identifique e justifique as duas figuras de linguagem presentes no trecho acima.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Análise da Expressão "Bebia a solidão"</span><br>
        Solidão é um sentimento abstrato, impossível de ser ingerido fisicamente como líquido. Há uma fusão direta de significados: <strong>Metáfora</strong>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Análise da Expressão "A cidade dormia"</span><br>
        A cidade é uma entidade de concreto e asfalto, mas recebeu a ação biológica humana de dormir. Trata-se de <strong>Personificação (Prosopopeia)</strong>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Análise Secundária do Oximoro</span><br>
        "Sono inquieto" reúne repouso e agitação, criando uma tensão semântica antitética expressiva.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        O trecho constrói sua força poética pelo emprego da <strong>metáfora</strong> em <em>"bebia a solidão"</em> e da <strong>personificação (prosopopeia)</strong> em <em>"a cidade dormia"</em>.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Substituir 'morreu' por 'descansou no sono eterno' é:",
                    options: ["Eufemismo", "Hipérbole", "Ironia", "Metonímia"],
                    correct: 0,
                    exp: "Eufemismo."
                }
            ]
        },
        {
            id: "port-10", title: "10. Pontuação, Coesão & Coerência Textual", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: ["port-07"], examTopics: ["Edital Port. 1.4: Mecanismos de coesão e coerência textual", "Edital Port. 1.5: Pontuação"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> A pontuação organiza as ideias. Regra número 1: NUNCA coloque vírgula entre o sujeito e o verbo!</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Invenção da Pontuação: O Respiro que Virou Gramática</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Na Roma Antiga, os textos eram escritos no formato <em>scriptura continua</em>: TODASASLETRASVINHAMJUNTASSEMESPAÇOEMBRANCOESEMPONTO! Ler em voz alta era uma provação para os pulmões e exigia semanas de treino de teatro para saber onde parar para respirar.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Com o surgimento da imprensa no século XV, o impressor italiano <strong>Aldo Manuzio</strong> criou a vírgula e o ponto e vírgula modernos. Eles deixaram de ser apenas pausas para tomar ar e passaram a representar a <strong>hierarquia sintática da lógica humana</strong>.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: A Vírgula que Salva Vidas</div>
    <p>• <strong>Uma Vírgula Pode Salvar uma Vida:</strong>
        <br>– <em>"Vamos comer, crianças!"</em> (A mãe carinhosa chamando os filhos para almoçar — a vírgula isola o vocativo!).
        <br>– <em>"Vamos comer crianças!"</em> (Canibalismo horrendo! A ausência da vírgula transformou "crianças" em objeto direto que será devorado!).
    </p>
    <p>• <strong>A Lei Suprema da Sintaxe Brasileira:</strong>
        <br><strong>NUNCA SEPARA-SE O SUJEITO DO SEU VERBO COM VÍRGULA!</strong> Não importa se o sujeito tem vinte palavras de comprimento: entre a pessoa que faz a ação e o verbo não cabe vírgula!
    </p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Disputas Jurídicas Históricas:</strong> Em 2006, no Canadá, uma disputa judicial milionária de operadoras de telefonia sobre a instalação de postes foi decidida por uma única vírgula em uma frase de 14 palavras.</li>
        <li><strong>Redação Oficial de Documentos Públicos:</strong> Pontuação errada em laudos de engenharia ou prontuários médicos altera totalmente a responsabilidade civil de um desastre.</li>
        <li><strong>Semiótica das Mensagens de WhatsApp:</strong> A presença ou ausência de ponto final no fim de uma mensagem rápida (<em>"Sim."</em> vs <em>"Sim"</em>) transmite sensações de seriedade, grosseria ou intimidade entre amigos.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Os 4 Casos Obrigatórios de Vírgula</h3>
    <ul style="font-size:15px; line-height:1.7; color:var(--text-secondary); padding-left:20px;">
        <li><strong>1. Isolar Vocativo (O Chamamento):</strong> <em>"Alunos, dediquem-se aos simulados!"</em> (Obrigatório!).</li>
        <li><strong>2. Isolar Aposto Explicativo:</strong> <em>"O CEFET-RJ, instituição centenária de excelência, abre inscrições em agosto."</em></li>
        <li><strong>3. Adjunto Adverbial Deslocado:</strong> Quando a indicação de tempo ou lugar vem no início da frase (<em>"No último domingo, fizemos a prova."</em>).</li>
        <li><strong>4. Orações Adjetivas Explicativas:</strong>
            <br>• <em>Com vírgula (Explicativa - Todos):</em> "Os seres humanos, que são mortais, buscam o conhecimento."
            <br>• <em>Sem vírgula (Restritiva - Apenas alguns):</em> "Os alunos que estudaram foram aprovados." (Só os estudiosos!).
        </li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Mais Manjada da Banca do CEFET</div>
    <p>A banca adora colocar uma frase com um sujeito longo e intercalar uma vírgula antes do verbo para pegar quem lê "respirando": <em>"O candidato dedicado da escola pública da Baixada Fluminense, conquistou o primeiro lugar."</em> <strong>ERRADO!</strong> Remova a vírgula antes de "conquistou"! O sujeito nunca se divorcia do predicado por vírgula simples!</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Questão CEFET:</strong> Compare o sentido das duas frases abaixo e justifique a diferença semântica provocada pelas vírgulas:<br>
        1. <em>"Os candidatos do CEFET, que leram o edital com atenção, não esqueceram o documento com foto."</em><br>
        2. <em>"Os candidatos do CEFET que leram o edital com atenção não esqueceram o documento com foto."</em>
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Análise da Pontuação na Frase 1</span><br>
        Na frase 1, a oração <em>"que leram o edital com atenção"</em> está isolada entre vírgulas. Trata-se de uma <strong>Oração Subordinada Adjetiva Explicativa</strong>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Interpretação do Efeito de Sentido da Frase 1</span><br>
        A oração explicativa generaliza: afirma que <strong>TODOS os candidatos do CEFET</strong> leram o edital e nenhum deles esqueceu o documento.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Análise e Sentido da Frase 2</span><br>
        Na frase 2, a ausência de vírgulas classifica a oração como <strong>Adjetiva Restritiva</strong>: limita o grupo. Apenas <strong>uma parte dos candidatos</strong> leu o edital, e apenas essa parcela prevenida levou o documento.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        A presença das vírgulas transforma uma oração restritiva (grupo seleto de alunos) em explicativa (totalidade dos candidatos inscritos), alterando radicalmente o sentido do texto.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Assinale o uso INCORRETO da vírgula:",
                    options: [
                        "O estudante dedicado, foi aprovado no concurso.",
                        "No colégio, os alunos estudavam.",
                        "Maria, preste atenção.",
                        "O Rio, cidade bela, encanta a todos."
                    ],
                    correct: 0,
                    exp: "Não se separa sujeito de verbo com vírgula."
                }
            ]
        },
        {
            id: "port-11", title: "11. Redação Dissertativo-Argumentativa Completa", time: "35 min", difficulty: "difícil",
            track: "selecao", prerequisites: ["port-01", "port-06", "port-10"], examTopics: ["Edital Redação: Produção de texto dissertativo-argumentativo em prosa, coerência e clareza de ideias"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> Redação em prosa, em 4 parágrafos (Introdução com tese, 2 parágrafos de desenvolvimento e Conclusão com proposta de ação). Fuga ao tema, escrever em verso ou ferir Direitos Humanos dá nota ZERO!</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Origem do Texto Dissertativo: O Triunfo da Razão e da Cidadania</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        No século XVIII, os filósofos iluministas como <strong>Voltaire</strong>, <strong>Rousseau</strong> e <strong>Kant</strong> desafiaram os reis absolutistas provando que a autoridade não devia vir da força bruta nem de dogmas cegos, mas do <strong>debate público de ideias fundamentadas pela lógica e pela razão</strong>.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        A redação do CEFET-RJ é exatamente a continuação dessa tradição cidadã: a banca não quer saber se você sabe contar histórias infantis, mas sim se você é capaz de <strong>enxergar um problema grave da sociedade brasileira, defender um ponto de vista ético com argumentos sólidos e propor caminhos de transformação social</strong>.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: O Projeto Arquitetônico de 4 Pavimentos</div>
    <p>• A sua redação do CEFET não pode ser um monte de parágrafos improvisados: ela deve seguir uma planta estrutural de <strong>4 parágrafos perfeitos (20 a 30 linhas)</strong>:</p>
    <p>– <strong>Pavimento 1: Introdução (6 a 7 linhas):</strong> Apresenta a Contextualização do problema + A Tese (o seu ponto de vista) dividida em dois núcleos argumentativos que serão debatidos a seguir (Argumento A1 e Argumento A2).</p>
    <p>– <strong>Pavimento 2: Desenvolvimento 1 (7 a 8 linhas):</strong> Discute a fundo o Argumento A1 com causa, efeito e um repertório legítimo (história, filosofia, dados ou leis).</p>
    <p>– <strong>Pavimento 3: Desenvolvimento 2 (7 a 8 linhas):</strong> Discute a fundo o Argumento A2, mostrando outro ângulo do problema e aprofundando o debate crítico.</p>
    <p>– <strong>Pavimento 4: Conclusão (5 a 6 linhas):</strong> O teto da casa. Retoma a tese com novas palavras e apresenta uma perspectiva propositiva consistente e cidadã respeitando os Direitos Humanos.</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Futuro Acadêmico e Profissional no CEFET:</strong> Redigir relatórios técnicos de engenharia, artigos científicos e defender projetos de formatura exige exatamente o rigor dissertativo-argumentativo.</li>
        <li><strong>Provas do ENEM, UERJ e Concursos Federais:</strong> O modelo de dissertação argumentativa do CEFET é a base idêntica das maiores bancas do país.</li>
        <li><strong>Liderança Cidadã e Articulação Social:</strong> Quem domina a escrita argumentativa não é manipulado por discursos fáceis e consegue lutar pelos direitos da sua comunidade.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Os 5 Critérios Eliminatórios do Edital CEFET</h3>
    <div class="box-formula" style="line-height:1.8;">
        <strong>O que Causa NOTA ZERO IMEDIATA (Anulação) no CEFET-RJ:</strong><br>
        1. <strong>Fuga Total ao Tema:</strong> Escrever sobre futebol quando o tema é meio ambiente.<br>
        2. <strong>Texto em Verso (Poesia):</strong> O edital exige OBRIGATORIAMENTE texto em <strong>prosa</strong> com parágrafos!<br>
        3. <strong>Desrespeito aos Direitos Humanos:</strong> Defender ódio, tortura, racismo ou preconceito social.<br>
        4. <strong>Cópia dos Textos Motivadores:</strong> Linhas copiadas na íntegra da coletânea são desconsideradas.<br>
        5. <strong>Menos de 20 linhas ou mais de 30 linhas:</strong> Respeite rigorosamente a extensão oficial!
    </div>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>O maior erro dos candidatos do 9º ano é escrever um texto puramente <strong>Expositivo</strong> (ficar apenas relatando fatos e contando notícias sem se posicionar) ou um texto <strong>Narrativo</strong> (começar a contar uma história com personagens e diálogos). <strong>ISSO DESTROI A NOTA!</strong> O texto DEVE conter adjetivação crítica, verbos em 3ª pessoa do singular/plural e defesa enérgica de uma tese!</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Esqueleto Nota 10 Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Tema Hipotético Estilo CEFET:</strong> <em>"O impacto da inteligência artificial e da exclusão digital na educação dos jovens brasileiros."</em>
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Construção da Introdução (Contexto + Tese)</span><br>
        <em>"A Constituição Cidadã de 1988 assegura a educação como direito inalienável de todos os brasileiros. Contudo, o avanço célere da inteligência artificial expõe um abismo pedagógico alarmante: de um lado, a inovação tecnológica; de outro, a exclusão digital que afeta estudantes da rede pública. Desse modo, torna-se imperativo analisar não apenas a carência de infraestrutura conectiva nas periferias, mas também a necessidade de um letramento digital crítico nas escolas."</em>
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Desenvolvimento 1 (Infraestrutura e Desigualdade)</span><br>
        Focar na tese A1: falta de computadores e internet rápida nas escolas periféricas perpetua a desigualdade socioeconômica, citando o geógrafo Milton Santos sobre cidadãos de papel.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Desenvolvimento 2 (Letramento Crítico e Ética)</span><br>
        Focar na tese A2: não basta dar acesso ao computador, é preciso ensinar ética e uso produtivo da IA para que o jovem não seja apenas um consumidor passivo de algoritmos.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Propositiva Cidadã</span><br>
        <em>"Infere-se, portanto, que a democratização do conhecimento digital é indispensável para a equidade educacional. Cabe ao Ministério da Educação, em parceria com estados e institutos federais como o CEFET, modernizar os laboratórios de informática e capacitar o corpo docente para o uso ético da tecnologia. Somente assim a revolução digital deixará de ser um privilégio excludente e se tornará um instrumento de emancipação coletiva."</em>
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Qual dos seguintes fatores ANULA a redação do CEFET?",
                    options: ["Usar conectivos", "Fuga ao tema ou desrespeito aos direitos humanos", "Escrever 25 linhas", "Citar filósofos"],
                    correct: 1,
                    exp: "Fuga total ao tema ou desrespeito aos direitos humanos gera anulação com nota zero."
                }
            ]
        }
        ]
    },

    /* ─────────────────────────────────────────────────────────────
       3. FÍSICA (10 Módulos: 9 Seleção + 1 Reforço)
       ───────────────────────────────────────────────────────────── */
    {
        id: "fis", name: "Física", icon: "⚡",
        modules: [
        {
            id: "fis-01", title: "1. Introdução às Grandezas & Vetores", time: "25 min", difficulty: "nivelamento",
            track: "reforco", prerequisites: [], examTopics: ["Edital Fís. 1.1: Fenômenos físicos", "Edital Fís. 1.2: Grandezas físicas"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> <em>Grandeza Escalar</em> é a que precisa só de número e unidade (massa de 50 kg, tempo de 10 s). <em>Grandeza Vetorial</em> precisa de Direção (reta horizontal) e Sentido (para a direita), como velocidade e força!</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Origem do Sistema Internacional: O Fim do Caos dos Pés do Rei</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Até o final do século XVIII na Europa, cada cidade ou feudo tinha seu próprio padrão de medidas: o comprimento de tecidos e terras era medido pelo tamanho do pé, do polegar ou do braço do rei local! Quando o rei morria ou você viajava para a cidade vizinha, as medidas mudavam, gerando fraudes comerciais e pontes que desabavam por cálculos errados de materiais.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Durante a Revolução Francesa (1791), os cientistas criaram o <strong>Sistema Internacional de Unidades (SI)</strong> baseado em grandezas universais da natureza (metro, quilograma, segundo). Mais tarde, para guiar a navegação oceânica e disparos de projéteis, formalizou-se o conceito de <strong>Vetores</strong>.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: A Febre no Termômetro vs. O Caminhão Desgovernado</div>
    <p>• <strong>Grandeza Escalar (Basta o Número):</strong> Se o médico colocar o termômetro em você e disser que a sua temperatura é <strong>38,5°C</strong>, você já sabe tudo: está com febre! Ninguém pergunta: <em>"38,5°C para a esquerda ou para a direita?"</em>. Temperatura, tempo (10 segundos), massa (70 kg) e energia são grandezas escalares completas apenas com o valor numérico e a unidade.</p>
    <p>• <strong>Grandeza Vetorial (A Pergunta Crucial: 'PRA ONDE?!'):</strong> Agora imagine que você está atravessando a Avenida Maracanã e alguém grita: <em>"Cuidado, tem um caminhão a 80 km/h!"</em>. Você entra em pânico e pergunta imediatamente: <strong>"PARA ONDE ELE ESTÁ INDO?!"</strong>. Saber apenas o número (módulo) não salva a sua vida: você precisa saber a <strong>Direção</strong> (na pista reta) e o <strong>Sentido</strong> (vindo na sua direção ou se afastando!). Velocidade, Força, Aceleração e Deslocamento são vetores!</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Física de Motores de Games 3D:</strong> Em jogos como Free Fire ou GTA, cada bala disparada, cada pulo de personagem e a força do vento sobre um helicóptero são calculados por vetores tridimensionais (X, Y, Z).</li>
        <li><strong>Navegação Aérea e Ventos de Cauda:</strong> Pilotos de avião precisam somar o vetor da velocidade própria da aeronave com o vetor da velocidade do vento para não errar a rota de pouso no Galeão.</li>
        <li><strong>Engenharia de Pontes Estaiadas:</strong> Cabos de aço que sustentam pontes exercem forças vetoriais de tração em múltiplos ângulos cuja soma resultante deve ser rigorosamente zero para a ponte não cair.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Soma de Vetores & Teorema de Pitágoras</h3>
    <div class="box-formula" style="line-height:1.8;">
        <strong>1. Mesma Direção e Mesmo Sentido (0°):</strong> R = A + B (Força máxima!).<br>
        <strong>2. Mesma Direção e Sentidos Opostos (180°):</strong> R = |A − B| (Cabo de guerra).<br>
        <strong>3. Vetores Perpendiculares (Ângulo de 90°):</strong><br>
        Aplica-se o Teorema de Pitágoras no triângulo retângulo de forças:<br>
        <strong>R² = A² + B² → R = √(A² + B²)</strong><br>
        <em>Exemplo clássico: Uma força de 3 N puxando para o leste e 4 N para o norte geram uma resultante de: √(3² + 4²) = √(9 + 16) = √25 = 5 N!</em>
    </div>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Clássica da Banca do CEFET</div>
    <p>A banca dá duas forças de 6 N e 8 N aplicadas no mesmo corpo e pergunta: <em>"A força resultante pode ser de 15 N?"</em>. <strong>NUNCA!</strong> A resultante de dois vetores só pode variar entre o valor mínimo (subtração: <code>8 − 6 = 2 N</code>) e o valor máximo (soma: <code>8 + 6 = 14 N</code>). Qualquer valor fora do intervalo [2 N, 14 N] é fisicamente impossível!</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Um barco a motor atravessa o Rio Paraíba do Sul. Os motores impulsionam a embarcação perpendicularmente à margem com velocidade própria de 12 m/s, enquanto a correnteza do rio empurra as águas paralelamente à margem com velocidade de 5 m/s. Qual é a velocidade resultante real do barco em relação à margem?
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação Vetorial</span><br>
        Temos dois vetores de velocidade perpendiculares entre si (ângulo de 90°):<br>
        Vetor do motor Vm = 12 m/s | Vetor da correnteza Vc = 5 m/s.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Modelagem pela Regra do Paralelogramo</span><br>
        Como o ângulo entre os vetores é reto (90°), a resultante é calculada por Pitágoras:<br>
        Vr² = Vm² + Vc²
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Execução dos Cálculos</span><br>
        Vr² = 12² + 5² = 144 + 25 = 169.<br>
        Vr = √169 = <strong>13 m/s</strong>.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        A velocidade real de deslocamento do barco em relação à terra firme é de <strong>13 m/s</strong>.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Qual das seguintes grandezas é puramente ESCALAR?",
                    options: ["Velocidade", "Força peso", "Massa", "Aceleração"],
                    correct: 2,
                    exp: "A massa é completamente definida por valor numérico e unidade."
                }
            ]
        },
        {
            id: "fis-02", title: "2. Cinemática Escalar (Vm & Conversões)", time: "25 min", difficulty: "fácil",
            track: "selecao", prerequisites: ["fis-01", "mat-05"], examTopics: ["Edital Fís. 2: Mecânica — conceitos básicos da cinemática"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> Velocidade média é a distância percorrida dividida pelo tempo ($V_m = \\Delta S / \\Delta t$). Para transformar de $m/s$ para $km/h$, multiplique por 3,6!</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Invenção da Cinemática: Galileu Desafia Aristóteles</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Durante quase 2.000 anos, a humanidade acreditava nas ideias de Aristóteles: que objetos pesados caíam mais rápido simplesmente porque 'desejavam' o centro da Terra. No século XVII, <strong>Galileu Galilei</strong> usou planos inclinados de madeira polida, esferas de bronze e mediu o tempo usando o próprio batimento cardíaco para provar que o movimento podia ser medido matematicamente através da razão entre espaço e tempo.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Nascia a <strong>Cinemática</strong>: o ramo da física que descreve o movimento dos corpos sem se preocupar inicialmente com as forças que o causaram.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: O Velocímetro vs. A Média da Viagem</div>
    <p>• <strong>Velocidade Instantânea:</strong> É o número que o ponteiro do velocímetro do carro marca no painel exatamente naquele milissegundo. Se o carro parar no semáforo vermelho da Tijuca, o velocímetro cai para 0 km/h.</p>
    <p>• <strong>Velocidade Média (Vm):</strong> Não quer saber se você parou para tomar água ou se pegou trânsito: ela pega a <strong>distância total percorrida (ΔS)</strong> e divide pelo <strong>tempo total do relógio (Δt)</strong>. Se você saiu do Maracanã e chegou a Cabo Frio (150 km) em 3 horas, sua velocidade média foi <code>150 ÷ 3 = 50 km/h</code>, mesmo que você tenha corrido a 100 km/h na ponte e ficado 40 minutos engarrafado!</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Radares de Velocidade Média:</strong> Câmeras nas rodovias registram a placa do carro no ponto A e no ponto B. Se o intervalo de tempo foi menor do que o tempo mínimo permitido, o motorista é multado mesmo que passe em frente à câmera a 20 km/h!</li>
        <li><strong>Cálculo do Horário de Chegada no Waze / Google Maps:</strong> O algoritmo divide a distância restante pela velocidade média histórica dos outros motoristas naquele trecho.</li>
        <li><strong>Cronometragem Olímpica de Atletismo e Natação:</strong> No atletismo dos 100 metros rasos, microchips registram tempos na casa dos milésimos de segundo.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Por que Multiplicamos por 3,6?</h3>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary);">
        O número <strong>3,6</strong> não é uma invenção mágica: ele é a dedução rigorosa das unidades de tempo e espaço do mundo real:
    </p>
    <div class="box-formula" style="line-height:1.8;">
        1 quilômetro = <strong>1.000 metros</strong> | 1 hora = 60 minutos · 60 segundos = <strong>3.600 segundos</strong><br><br>
        1 km/h = 1.000 m / 3.600 s = 1 / <strong>3,6</strong> m/s.<br>
        Logo:<br>
        • De <strong>m/s para km/h</strong>: MULTIPLIQUE por 3,6 (Ex: 10 m/s · 3,6 = <strong>36 km/h</strong>).<br>
        • De <strong>km/h para m/s</strong>: DIVIDA por 3,6 (Ex: 72 km/h ÷ 3,6 = <strong>20 m/s</strong>).
    </div>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>A clássica questão das <strong>Duas Metades do Percurso</strong>! Um carro faz a primeira metade de uma viagem a 40 km/h e a segunda metade a 60 km/h. A pergunta da banca: <em>"Qual é a velocidade média da viagem inteira?"</em>. Se você fizer a média comum <code>(40 + 60) / 2 = 50 km/h</code>, <strong>VOCÊ ERROU</strong>! Porque ele passou mais tempo viajando devagar a 40 km/h do que rápido a 60 km/h! A velocidade média verdadeira é calculada por <code>Vm = ΔS / Δt</code> e resulta em <strong>48 km/h</strong>!</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Um trem da SuperVia parte da estação de São Cristóvão e percorre uma distância de 7.200 metros até o terminal da Central do Brasil em exatamente 200 segundos. Qual é a velocidade média do trem expressa em km/h?
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação dos Dados</span><br>
        Deslocamento ΔS = 7.200 metros.<br>
        Intervalo de tempo Δt = 200 segundos.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Cálculo da Velocidade Média em m/s</span><br>
        Vm = ΔS / Δt<br>
        Vm = 7.200 / 200 = 72 / 2 = <strong>36 m/s</strong>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Conversão para km/h pelo Fator 3,6</span><br>
        Multiplicamos o valor em m/s por 3,6:<br>
        Vm = 36 · 3,6 = <strong>129,6 km/h</strong>.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        A velocidade média de deslocamento do trem durante o trajeto foi de <strong>129,6 km/h</strong>.
    </div>
</div>`,
            questions: [
                {
                    type: "text",
                    q: "Um atleta corre 100 m em 10 s. Qual a velocidade em m/s?",
                    a: ["10", "10 m/s"],
                    exp: "100 / 10 = 10 m/s."
                }
            ]
        },
        {
            id: "fis-03", title: "3. Leis de Newton & Dinâmica", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: ["fis-01"], examTopics: ["Edital Fís. 2.1: Princípios da dinâmica (Leis de Newton)", "Edital Fís. 2.2: Trabalho, potência e energia mecânica"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> 1ª Lei (Inércia: corpos tendem a manter seu movimento), 2ª Lei ($F_r = m \\cdot a$) e 3ª Lei (Ação e Reação: forças surgem em pares de sentidos opostos em corpos diferentes).</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Revolução Newtoniana: As 3 Leis que Explicaram o Universo</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Em 1687, refugiado em sua fazenda no interior da Inglaterra durante a Grande Peste de Londres, <strong>Isaac Newton</strong> publicou o livro mais importante da história da ciência: <em>"Princípios Matemáticos da Filosofia Natural"</em>.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Newton demonstrou que a mesma força invisível que faz uma maçã cair da árvore é a força que mantém a Lua girando em torno da Terra e a Terra em torno do Sol. Suas três leis da Dinâmica estabeleceram a relação definitiva entre Força, Massa e Movimento.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: A Viagem de Ônibus & O Chute na Bola</div>
    <p>• <strong>1ª Lei (Inércia - A Preguiça da Matéria):</strong> Um corpo parado quer continuar parado; um corpo em movimento retilíneo uniforme quer continuar andando para sempre, a menos que uma força externa o force a mudar. Quando o ônibus da linha 455 freia de repente, seu corpo é projetado para a frente porque ele <em>já estava em movimento</em> e quer continuar indo! O cinto de segurança é a invenção da 1ª Lei de Newton para salvar sua vida.</p>
    <p>• <strong>2ª Lei (Princípio Fundamental: Fr = m · a):</strong> Empurrar um carrinho de supermercado vazio é fácil; empurrá-lo lotado de 50 kg de comida exige uma força bruta enorme para conseguir a mesma aceleração.</p>
    <p>• <strong>3ª Lei (Ação e Reação - O Eco Físico):</strong> Toda força de ação gera uma força de reação de mesmo módulo, mesma direção e sentido oposto. Para nadar, você empurra a água para trás e a água empurra você para a frente! O foguete cospe fogo para o chão e é empurrado para o céu!</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Foguetes Espaciais (Falcon 9 da SpaceX):</strong> Motores a jato não "se apoiam no ar": eles funcionam pela 3ª Lei de Newton até no vácuo absoluto do espaço ao expelir gases em alta velocidade.</li>
        <li><strong>Sistemas de Airbag Automotivo:</strong> Sensores de inércia detectam desacelerações brutais em milissegundos e acionam bolsas de ar antes que a cabeça do motorista colida contra o volante.</li>
        <li><strong>Balanças e Dinamômetros na Indústria:</strong> Qualquer pesagem industrial mede a deformação de molas calibradas com base na força peso (<code>P = m · g</code>).</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Massa vs. Peso</h3>
    <div class="box-formula" style="line-height:1.8;">
        <strong>Massa (m):</strong> Quantidade de matéria de um corpo. Medida em <strong>quilogramas (kg)</strong>. É constante em qualquer lugar do universo (sua massa na Terra, na Lua ou em Marte é rigorosamente a mesma!).<br><br>
        <strong>Força Peso (P):</strong> Atração gravitacional exercida pelo planeta. Medida em <strong>Newtons (N)</strong>.<br>
        <strong>P = m · g</strong> (Onde g ≈ 10 m/s² na Terra e g ≈ 1,6 m/s² na Lua).<br>
        <em>Se sua massa é 60 kg: na Terra você pesa 600 N; na Lua você pesa menos de 100 N e consegue dar saltos gigantescos!</em>
    </div>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Mais Cruel da Banca do CEFET</div>
    <p>A pegadinha de anulação das forças de Ação e Reação! A banca pergunta: <em>"Se o cavalo puxa a carroça para a frente e a carroça puxa o cavalo para trás com força de mesma intensidade, por que a carroça se move e as forças não se cancelam?"</em>. Resposta da aprovação: <strong>PORQUE AÇÃO E REAÇÃO ATUAM EM CORPOS DIFERENTES!</strong> A força de puxar a carroça atua na carroça; a força de reação atua no cavalo! Forças só se anulam quando atuam no <strong>mesmo corpo</strong>!</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Um bloco de motor de 40 kg no curso técnico de Mecânica do CEFET Maracanã é puxado horizontalmente sobre uma bancada lisa sem atrito por uma força constante de 120 N. Adotando g = 10 m/s², calcule a aceleração adquirida pelo bloco e a força normal exercida pela bancada.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Identificação das Forças em Jogo</span><br>
        Na vertical: Força Peso (P = m · g) para baixo e Força Normal (N) da bancada para cima.<br>
        Na horizontal: Força de tração aplicada F = 120 N (sem atrito).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Equilíbrio Vertical e Cálculo do Peso</span><br>
        O bloco não flutua nem afunda na bancada → Equilíbrio vertical: N = P.<br>
        P = m · g = 40 · 10 = <strong>400 N</strong>. Logo, a Força Normal vale <strong>400 N</strong>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Cálculo da Aceleração pela 2ª Lei de Newton</span><br>
        Fr = m · a<br>
        120 = 40 · a → a = 120 / 40 = <strong>3,0 m/s²</strong>.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        O bloco acelera a uma taxa de <strong>3,0 m/s²</strong> e a bancada reage suportando uma força normal de <strong>400 N</strong>.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "A tendência de um corpo permanecer em movimento retilíneo uniforme chama-se:",
                    options: ["Gravidade", "Inércia", "Atrito", "Centrípeta"],
                    correct: 1,
                    exp: "1ª Lei de Newton (Inércia)."
                }
            ]
        },
        {
            id: "fis-04", title: "4. Trabalho, Potência & Energia Mecânica", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: ["fis-03"], examTopics: ["Edital Fís. 2.2: Trabalho, potência e energia mecânica"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> Trabalho é força multiplicada pelo deslocamento ($\\tau = F \\cdot d \\cdot \\cos\\theta$). Se não houver deslocamento ($d = 0$) ou a força for perpendicular ao movimento ($\\cos 90^\\circ = 0$), o trabalho é ZERO!</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Revolução Industrial & A Invenção do Conceito de Energia</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        No século XIX, durante a explosão das fábricas e ferrovias a vapor na Inglaterra, os engenheiros precisavam de uma moeda matemática para responder a uma pergunta crucial de comércio: <em>"Quantas toneladas de carvão preciso queimar para que minha locomotiva transporte 50 vagões de minério por 100 quilômetros?"</em>.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Cientistas como <strong>James Prescott Joule</strong> e <strong>James Watt</strong> formalizaram os conceitos de <strong>Trabalho</strong>, <strong>Energia</strong> e <strong>Potência</strong>. Descobriu-se a lei mais sagrada do universo físico: <em>a energia nunca pode ser criada nem destruída, apenas transformada de uma forma em outra</em>.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: A Montanha-Russa & O Empurrão Inútil na Parede</div>
    <p>• <strong>Trabalho Físico (τ):</strong> Para a Física, "trabalho" NÃO é ficar cansado. Se você passar 4 horas empurrando uma parede de concreto com toda a sua força e suar em bicas, mas a parede não sair do lugar (<code>d = 0</code>), você realizou exatamente <strong>ZERO de Trabalho</strong>! Trabalho exige que a força consiga provocar um <strong>deslocamento</strong>!</p>
    <p>• <strong>A Montanha-Russa (A Dança das Energias):</strong>
        <br>– <em>No ponto mais alto:</em> O carrinho está quase parado, mas acumulou a quantidade máxima de <strong>Energia Potencial Gravitacional (Ep = m · g · h)</strong>.
        <br>– <em>Durante a descida:</em> A altura diminui e se transforma em velocidade brutal: a energia potencial vira <strong>Energia Cinética (Ec = m · v² / 2)</strong>!
        <br>– <em>No ponto mais baixo:</em> A velocidade é máxima! Se não houver atrito nos trilhos, a <strong>Energia Mecânica Total (Em = Ec + Ep)</strong> se mantém rigorosamente constante durante todo o trajeto!
    </p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Usinas Hidrelétricas (Itaipu):</strong> A água represada no lago em grande altitude possui energia potencial. Ao cair nos dutos, gira as turbinas (energia cinética), que acionam geradores elétricos fornecendo luz para milhões de residências.</li>
        <li><strong>Freios Regenerativos de Carros Elétricos (Tesla/BYD):</strong> Em vez de gastar as pastilhas e desperdiçar energia em calor, o motor elétrico inverte o funcionamento na descida, freando o carro e recarregando a bateria.</li>
        <li><strong>Contas de Luz (Quilowatt-hora):</strong> A Light cobra o consumo de energia da sua casa multiplicando a <strong>Potência</strong> dos aparelhos (ar-condicionado, chuveiro) pelo <strong>Tempo</strong> de uso (<code>E = P · Δt</code>).</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Fórmulas de Trabalho e Conservação</h3>
    <div class="box-formula" style="line-height:1.8;">
        <strong>Trabalho Mecânico:</strong> τ = F · d · cos(θ) [Unidade: Joule (J)]<br>
        <em>Se a força for perpendicular ao movimento (θ = 90°, como a força peso de quem anda no plano), cos(90°) = 0 → Trabalho = ZERO!</em><br><br>
        <strong>Energia Cinética (Movimento):</strong> Ec = (m · v²) / 2<br>
        <strong>Energia Potencial Gravitacional (Altura):</strong> Ep = m · g · h<br>
        <strong>Potência Mecânica (Rapidez em realizar trabalho):</strong> Pot = τ / Δt [Unidade: Watt (W = J/s)]
    </div>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>A dependência quadrática da velocidade na <strong>Energia Cinética</strong>! Se um carro duplica sua velocidade de 40 km/h para 80 km/h, a sua energia cinética NÃO dobra: ela <strong>QUADRUPLICA (2² = 4 vezes maior)</strong>! Se triplica a velocidade, a energia fica 9 vezes maior! É por isso que pequenos excessos de velocidade causam acidentes com impactos devastadores e exigem distâncias de frenagem muito maiores.</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Um carrinho de montanha-russa de 200 kg parte do repouso do topo de uma colina de 20 metros de altura em relação ao solo. Desprezando os atritos mecânicos e a resistência do ar e adotando g = 10 m/s², determine a velocidade do carrinho ao atingir a base da pista no nível do solo.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação Física e Conservação da Energia</span><br>
        Como o sistema é conservativo (sem atrito), a Energia Mecânica Inicial no topo é idêntica à Energia Mecânica Final na base: Em(topo) = Em(base).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Modelagem das Energias</span><br>
        No topo: v = 0 → Ec = 0; toda a energia é potencial: Ep = m · g · h.<br>
        Na base: h = 0 → Ep = 0; toda a energia virou cinética: Ec = (m · v²) / 2.<br>
        Igualando: m · g · h = (m · v²) / 2.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Resolução dos Cálculos (Cancelamento da Massa)</span><br>
        Podemos cancelar a massa m dos dois lados da equação:<br>
        g · h = v² / 2 → v² = 2 · g · h<br>
        v² = 2 · 10 · 20 = 400 → v = √400 = <strong>20 m/s</strong>.<br>
        (Em km/h: 20 · 3,6 = 72 km/h!).
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        O carrinho atinge o ponto mais baixo da montanha-russa a uma velocidade de <strong>20 m/s (72 km/h)</strong>, independentemente da massa ou do número de passageiros a bordo.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Se a velocidade de um carro dobra, sua energia cinética fica:",
                    options: ["Duas vezes maior", "Três vezes maior", "Quatro vezes maior", "Inalterada"],
                    correct: 2,
                    exp: "Como Ec depende de v², dobrar a velocidade quadruplica a energia (2² = 4)."
                }
            ]
        },
        {
            id: "fis-05", title: "5. Conceitos Básicos de Astronomia", time: "30 min", difficulty: "fácil",
            track: "selecao", prerequisites: [], examTopics: ["Edital Fís. 2.3: Conceitos básicos de astronomia"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> A <em>Rotação</em> da Terra (24h) gera os dias e noites. A <em>Translação</em> (365 dias) combinada com a inclinação fixa do eixo da Terra (23,5°) gera as <em>Estações do Ano</em>. As fases da Lua dependem de quanta luz solar refletida vemos dela, e os eclipses ocorrem por alinhamento astronômico perfeito.</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Medição da Terra por Eratóstenes & O Calendário Agrícola</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        No século III a.C., na Biblioteca de Alexandria (Egito), o sábio grego <strong>Eratóstenes</strong> soube que ao meio-dia do solstício de verão, na cidade de Siena, o Sol iluminava diretamente o fundo de um poço profundo sem projetar nenhuma sombra. Em Alexandria, no mesmo instante, uma estaca vertical projetava uma sombra nítida de 7,2 graus.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Usando geometria de retas paralelas e sombras, Eratóstenes não só provou que a Terra é esférica com mais de 1.700 anos de antecedência às caravelas, mas calculou a circunferência do planeta com impressionantes 99% de precisão! A astronomia nasceu da necessidade urgente dos povos antigos de prever cheias de rios (como o Nilo) e planejar épocas de plantio e colheita.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: O Pião Inclinado ao Redor da Fogueira</div>
    <p>Imagine que você está dançando ao redor de uma grande fogueira (o Sol) segurando um pião que gira inclinado em um ângulo fixo de <strong>23,5°</strong> (a Terra):</p>
    <p>• <strong>Quando o topo do pião (Hemisfério Norte) se inclina em direção à fogueira:</strong> Os raios de luz atingem a Europa de forma concentrada e perpendicular. É <em>Verão</em> lá! Ao mesmo tempo, a parte de baixo (Hemisfério Sul) fica voltada para longe da fogueira, recebendo raios rasantes e fracos: é <em>Inverno</em> no Brasil.</p>
    <p>• <strong>Seis meses depois (do outro lado da órbita):</strong> O eixo continua apontando para o mesmo lado do espaço, mas agora é a parte de baixo (Hemisfério Sul) que está voltada para o Sol. Resultado: calor escaldante, praia e <em>Verão</em> no Rio de Janeiro!</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Instalação de Painéis Solares no Brasil:</strong> Como o Brasil fica no Hemisfério Sul, os instaladores de energia solar sempre direcionam as placas fotovoltaicas voltadas para o <strong>Norte geográfico</strong>, garantindo máxima captação de luz ao longo de todas as estações do ano.</li>
        <li><strong>Satélites Geoestacionários & Meteorologia:</strong> Satélites que transmitem sinal de TV e dados de furacões giram no plano do Equador com o mesmo período de rotação da Terra (24 horas), parecendo parados sobre o mesmo ponto do planeta.</li>
        <li><strong>Fuso Horário Global:</strong> O planeta é dividido em 24 fusos horários de 15° de longitude cada (360° / 24h = 15° por hora). Por isso o horário de Brasília é UTC-3.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Movimentos, Fases e Eclipses</h3>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.8; color:var(--text-secondary);">
        <li><strong>Rotação:</strong> Giro da Terra em torno do próprio eixo polar. Duração: <strong>23h 56min 4s (aproximadamente 24h)</strong>. Consequência: sucessão de <strong>dias e noites</strong>.</li>
        <li><strong>Translação:</strong> Movimento orbital da Terra ao redor do Sol. Duração: <strong>365 dias e 6 horas</strong> (a cada 4 anos soma-se 24h, gerando o ano bissexto). Combinada com a <strong>inclinação do eixo (23,5°)</strong>, gera as <strong>4 Estações do Ano</strong>.</li>
        <li><strong>Solstícios vs Equinócios:</strong>
            <br>– <em>Solstício:</em> Desigualdade máxima de iluminação entre os hemisférios (dia mais longo do ano no verão; noite mais longa no inverno).
            <br>– <em>Equinócio:</em> Iluminação igual em ambos os hemisférios; dia e noite duram exatamente 12 horas cada (março e setembro).
        </li>
        <li><strong>Fases da Lua (Ciclo de 29,5 dias):</strong> A Lua não tem luz própria, apenas reflete o Sol. <em>Lua Nova:</em> face voltada para nós no escuro total (Lua entre Sol e Terra). <em>Quarto Crescente:</em> metade leste iluminada. <em>Lua Cheia:</em> face inteira iluminada (Terra entre Sol e Lua). <em>Quarto Minguante:</em> metade oeste iluminada.</li>
        <li><strong>Eclipses:</strong>
            <br>– <em>Eclipse Solar:</em> <strong>Sol – Lua – Terra</strong> (a Lua projeta sua sombra sobre uma faixa da Terra; ocorre na Lua Nova).
            <br>– <em>Eclipse Lunar:</em> <strong>Sol – Terra – Lua</strong> (a Terra bloqueia a luz do Sol, e a Lua entra no cone de sombra da Terra; ocorre na Lua Cheia).
        </li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>A banca do CEFET adora afirmar em alternativas falsas que <em>"o verão ocorre porque a Terra fica mais próxima do Sol em sua órbita elíptica"</em>. <strong>MENTIRA ABSOLUTA!</strong> A órbita da Terra é quase circular. Quando é verão no Brasil (janeiro), a Terra está no periélio (ponto de menor distância orbital), mas no Hemisfério Norte é pleno inverno congelante! A causa única e incontestável das estações é a <strong>INCLINAÇÃO DO EIXO TERRESTRE associada à translação</strong>.</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Durante uma aula de ciências no CEFET Maracanã, os alunos observaram que a sombra de um mastro fixo no pátio, medida exatamente às 12h, era sensivelmente mais curta no mês de dezembro do que no mês de junho. Explique a causa desse fenômeno físico e astronômico.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação Astronômica e Geográfica</span><br>
        O campus Maracanã (Rio de Janeiro) está localizado no Hemisfério Sul, nas proximidades do Trópico de Capricórnio (latitude aproximada de 22°54' S).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Modelagem das Estações e Trajetória Solar</span><br>
        Em dezembro ocorre o <strong>Solstício de Verão</strong> no Hemisfério Sul: o hemisfério está com inclinação máxima voltada para o Sol, fazendo com que o astro atinja sua posição aparente mais alta no céu (próximo ao zênite) ao meio-dia. Em junho, no <strong>Solstício de Inverno</strong>, os raios solares incidem de forma muito mais inclinada (oblíqua).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Relação Geométrica com a Sombra</span><br>
        Quanto mais vertical for a incidência dos raios solares em relação ao solo (maior ângulo de elevação do Sol), menor é o comprimento da projeção geométrica da sombra de um objeto vertical.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        A sombra é mais curta em dezembro porque os raios solares incidem quase perpendicularmente sobre o Rio de Janeiro no verão. O fenômeno resulta da <strong>inclinação de 23,5° do eixo da Terra combinada com o movimento de translação</strong>.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "As quatro estações do ano ocorrem devido à combinação de:",
                    options: [
                        "Translação da Terra e inclinação do seu eixo de rotação",
                        "Rotação da Terra e proximidade com a Lua",
                        "Distância variável da Terra em relação ao Sol",
                        "Gravidade lunar sobre as marés"
                    ],
                    correct: 0,
                    exp: "A inclinação do eixo terrestre de 23,5° durante o movimento de translação gera as estações."
                }
            ]
        },
        {
            id: "fis-06", title: "6. Ondulatória & Fenômenos Luminosos", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: [], examTopics: ["Edital Fís. 3.1: Conceitos fundamentais de ondulatória", "Edital Fís. 3.2: Fenômenos da ondulatória", "Edital Fís. 3.3: Fenômenos luminosos"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> Ondas transportam <em>energia</em> sem transportar matéria! A fórmula fundamental é $v = \\lambda \\cdot f$ (velocidade = comprimento de onda $\\times$ frequência). Som é onda mecânica (não viaja no vácuo); luz é onda eletromagnética (viaja no vácuo a 300.000 km/s).</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Disputa entre Newton e Huygens & As Equações de Maxwell</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        No século XVII, Isaac Newton defendia que a luz era feita de "corpúsculos" (pequenas bolinhas de matéria disparadas pelas fontes de luz). Já o holandês <strong>Christiaan Huygens</strong> sustentava que a luz era uma onda contínua que se propagava pelo espaço como ondas na água.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Apenas em 1801, com o célebre experimento da fenda dupla de Thomas Young (mostrando difração e interferência da luz), e mais tarde em 1865 com <strong>James Clerk Maxwell</strong> unificando eletricidade e magnetismo, provou-se que a luz visível é uma onda eletromagnética oscilando nos campos elétrico e magnético, viajando pelo vácuo cósmico na velocidade assombrosa de 300.000 km/s!
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: A "Ola" no Estádio do Maracanã</div>
    <p>A melhor maneira de entender o que é uma onda é observar a torcida fazendo a famosa "ola" na arquibancada do Maracanã:</p>
    <p>• Um setor de torcedores fica de pé, levanta os braços e senta logo em seguida. O setor vizinho repete o movimento, e uma onda humana espetacular dá a volta completa no anel do estádio!</p>
    <p>• <strong>Repare no segredo:</strong> Nenhum torcedor saiu correndo de um lado para o outro do estádio! Cada pessoa apenas subiu e desceu no seu próprio lugar. O que viajou a 40 km/h pelo Maracanã foi a <strong>perturbação / informação / energia</strong>, e NÃO a matéria! É exatamente isso que toda onda faz na natureza.</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Redes Wi-Fi (2.4 GHz e 5.0 GHz) & Celulares 5G:</strong> Transmitem dados codificados em ondas de rádio eletromagnéticas de altíssima frequência. A frequência de 5 GHz oscila 5 bilhões de vezes por segundo, permitindo transferir vídeos 4K instantaneamente!</li>
        <li><strong>Fornos Micro-ondas:</strong> Emitem ondas eletromagnéticas na frequência exata de 2,45 GHz. Essa frequência entra em ressonância com as moléculas de água dos alimentos, fazendo-as vibrar freneticamente e aquecer a comida de dentro para fora.</li>
        <li><strong>Cabos de Fibra Óptica Submarina:</strong> Conectam a internet entre continentes conduzindo pulsos de luz laser em seu interior pelo fenômeno da <em>Reflexão Interna Total</em> sem perda de sinal.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Classificação e Equação Fundamental</h3>
    <div class="box-formula" style="line-height:1.8;">
        <strong>Equação Fundamental da Ondulatória:</strong> v = λ · f<br>
        <strong>Relação com o Período:</strong> T = 1 / f  ↔  v = λ / T<br>
        <div class="legend">v = velocidade de propagação (m/s) | λ = comprimento de onda (distância entre duas cristas sucessivas, em metros) | f = frequência (número de oscilações por segundo, em Hertz [Hz]) | T = período (tempo de um ciclo completo, em segundos).</div>
    </div>
    <ul style="margin:12px 0 0 0; padding-left:20px; font-size:15px; line-height:1.8; color:var(--text-secondary);">
        <li><strong>Ondas Mecânicas:</strong> Necessitam de meio material elástico para propagação (ar, água, sólidos). Exemplos: som, ondas sísmicas de terremoto, corda de violão. <em>NÃO se propagam no vácuo!</em></li>
        <li><strong>Ondas Eletromagnéticas:</strong> Originadas da oscilação de cargas elétricas. <em>Propagam-se no vácuo</em> à velocidade de 300.000 km/s ($c = 3 \times 10^8\text{ m/s}$). Exemplos: ondas de rádio, TV, micro-ondas, infravermelho, luz visível, ultravioleta, raio X e raios gama.</li>
        <li><strong>Fenômenos Ondulatórios:</strong>
            <br>– <em>Reflexão:</em> A onda bate em um obstáculo e retorna ao mesmo meio (o eco do som).
            <br>– <em>Refração:</em> A onda muda de meio de propagação, alterando sua velocidade e comprimento de onda (a frequência NÃO se altera!).
            <br>– <em>Difração:</em> Capacidade da onda de contornar obstáculos ou passar por fendas de tamanho comparável ao seu comprimento de onda (por isso ouvimos a conversa de alguém atrás de um muro).
        </li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>1. <strong>Som no Espaço:</strong> Filmes de ficção científica adoram mostrar naves explodindo com estrondos gigantescos no vácuo espacial. A banca do CEFET cobra isso todo ano: como o som é onda MECÂNICA, ele depende de moléculas para colidir; no vácuo interestelar reina o silêncio absoluto!</p>
    <p>2. <strong>Frequência na Mudança de Meio:</strong> Quando a luz passa do ar para a água (refração), sua velocidade diminui e seu comprimento de onda encolhe, mas a <strong>FREQUÊNCIA PERMANECE RIGOROSAMENTE CONSTANTE</strong> (pois ela é a "identidade" dada pela fonte emissora).</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Uma estação de rádio FM transmite seu sinal em uma frequência de 100 MHz (MegaHertz). Sabendo que as ondas eletromagnéticas viajam no ar com velocidade de aproximadamente $3 \times 10^8\text{ m/s}$, determine o comprimento de onda ($\lambda$) dessas transmissões e converta a resposta para metros.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação e Conversão de Unidades do Sistema Internacional</span><br>
        Identificamos os dados fornecidos:<br>
        Frequência $f = 100\text{ MHz} = 100 \times 10^6\text{ Hz} = 1 \times 10^8\text{ Hz}$.<br>
        Velocidade $v = 3 \times 10^8\text{ m/s}$.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Aplicação da Equação Fundamental da Ondulatória</span><br>
        A relação entre velocidade, comprimento de onda e frequência é expressa por: $v = \lambda \cdot f \implies \lambda = \frac{v}{f}$.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Execução Algébrica</span><br>
        $\lambda = \frac{3 \times 10^8\text{ m/s}}{1 \times 10^8\text{ Hz}} = \mathbf{3\text{ metros}}$.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        Cada ciclo da onda de rádio emitida por essa estação tem exatamente <strong>3 metros de extensão</strong>. É por essa razão que as antenas de receptores FM têm dimensões em torno de 75 cm a 1,5 m (frações inteiras do comprimento de onda para recepção ressonante).
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "O som não se propaga no vácuo do espaço porque é uma:",
                    options: ["Onda eletromagnética", "Onda mecânica que necessita de meio material", "Onda gravitacional", "Onda de luz"],
                    correct: 1,
                    exp: "Ondas mecânicas exigem matéria para vibrar e se propagar."
                }
            ]
        },
        {
            id: "fis-07", title: "7. Óptica Geométrica: Espelhos Planos & Esféricos", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: ["fis-06"], examTopics: ["Edital Fís. 3.4: Conceitos de óptica geométrica em espelhos (planos e esféricos)"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> <em>Espelho Plano</em> forma imagem virtual, direita e do mesmo tamanho. <em>Espelho Convexo</em> (retrovisores de ônibus e segurança) forma imagem SEMPRE virtual, direita e <strong>MENOR</strong>, concedendo um campo de visão muito mais amplo para evitar acidentes!</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Revolução da Óptica por Alhazen & Os Espelhos Ustórios</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Na Grécia Antiga, filósofos como Euclides e Ptolomeu acreditavam na teoria da emissão: que os olhos humanos emitiam "raios visuais" que tocavam as coisas. Foi apenas no ano 1021, no Cairo, que o físico árabe <strong>Ibn al-Haytham (Alhazen)</strong> revolucionou a história ao escrever o <em>Livro da Óptica</em>.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Alhazen provou experimentalmente em uma câmara escura que a luz viaja em linha reta e é emitida por fontes (como o Sol e velas) e refletida pelos objetos até atingir a retina humana. A partir daí, os físicos passaram a dominar o controle geométrico dos raios luminosos com espelhos e lentes.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: A Colher de Sopa de Metal Polido</div>
    <p>Você tem um laboratório completo de óptica na gaveta da cozinha da sua casa: pegue uma colher de sopa de metal bem polida e olhe para ela:</p>
    <p>• <strong>Costas da Colher (Espelho Convexo):</strong> Olhe para a parte de trás arredondada da colher. Não importa a distância, seu rosto aparece sempre em pé (direito) e bem pequenininho (reduzido), permitindo que você enxergue a cozinha inteira atrás de você! É exatamente por isso que ele é o espelho preferido de motoristas de ônibus e donos de farmácia.</p>
    <p>• <strong>Fundo da Colher (Espelho Côncavo):</strong> Se você olhar para a parte interna (a concavidade) a um palmo de distância, seu rosto aparecerá <em>de cabeça para baixo</em> (imagem real e invertida)! Mas se você aproximar a colher quase encostando na ponta do seu nariz (entre o foco e o vértice), de repente sua imagem desvira e vira um espelho de aumento gigante (virtual, direita e ampliada)!</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Retrovisores de Carros & Estações de Metrô:</strong> Os retrovisores externos dos veículos e os espelhos esféricos nas plataformas de trem da SuperVia utilizam superfícies convexas para eliminar pontos cegos.</li>
        <li><strong>Faróis de Automóveis & Lanternas LED:</strong> Usam espelhos parabólicos/côncavos. Ao posicionar a lâmpada exatamente no <strong>ponto focal</strong> do espelho côncavo, os raios refletidos saem paralelos uns aos outros, projetando um facho de luz concentrado a centenas de metros na escuridão da estrada.</li>
        <li><strong>Espelhos de Barbearia & Maquiagem:</strong> São espelhos côncavos de grande raio de curvatura. Quando o rosto fica posicionado antes do foco, a imagem é ampliada e direita, facilitando detalhes milimétricos.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Espelhos Planos e Esféricos</h3>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.8; color:var(--text-secondary);">
        <li><strong>Espelhos Planos:</strong>
            <br>– Formam imagens <strong>virtuais</strong> (formadas atrás do espelho pelo prolongamento dos raios), <strong>direitas</strong> e com <strong>tamanho idêntico ao do objeto</strong>.
            <br>– A distância do objeto ao espelho ($p$) é rigorosamente igual à distância da imagem ao espelho ($p'$): $p = p'$.
            <br>– A imagem é <em>enantiomorfa</em> (inversão lateral: a sua mão direita na imagem parece a mão esquerda).
        </li>
        <li><strong>Espelhos Convexos (Divergentes):</strong>
            <br>– Para qualquer posição real do objeto na frente do espelho, a imagem formada é SEMPRE: <strong>Virtual, Direita e Menor</strong>, localizada entre o vértice e o foco virtual.
        </li>
        <li><strong>Espelhos Côncavos (Convergentes):</strong>
            <br>– Objeto antes do Centro de Curvatura: Imagem <em>Real, Invertida e Menor</em>.
            <br>– Objeto sobre o Centro de Curvatura: Imagem <em>Real, Invertida e de Mesmo Tamanho</em>.
            <br>– Objeto entre o Centro e o Foco: Imagem <em>Real, Invertida e Maior</em> (cinema/projetor).
            <br>– Objeto sobre o Foco: Imagem <em>Imprópria</em> (raios saem paralelos).
            <br>– Objeto entre o Foco e o Vértice: Imagem <strong>Virtual, Direita e Maior</strong> (espelho de aumento).
        </li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>Muitos alunos leem <em>"espelho retrovisor aumenta a segurança porque amplia a visão"</em> e marcam na prova que o espelho convexo "amplia a imagem do carro que vem atrás". <strong>CUIDADO!</strong> O espelho convexo <strong>REDUZ (diminui)</strong> o tamanho aparente dos objetos justamente para conseguir enquadrar um <strong>campo visual muito maior</strong> na mesma moldura! Se ele ampliasse a imagem, caberia menos informação no espelho.</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Um estudante caminha em direção a um espelho plano vertical a uma velocidade constante de 1,5 m/s em relação ao chão. Determine a velocidade com que o estudante se aproxima da sua própria imagem refletida e descreva as propriedades fundamentais dessa imagem.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação da Geometria do Espelho Plano</span><br>
        Em um espelho plano, a distância do objeto ao espelho ($p$) é sempre igual à distância da imagem ao espelho ($p'$). Logo, se o objeto se move em direção ao espelho, a imagem se move em direção ao espelho em sentido oposto com a mesma rapidez.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Modelagem da Velocidade Relativa</span><br>
        Velocidade do estudante em relação ao espelho: $v_e = +1,5\text{ m/s}$.<br>
        Velocidade da imagem em relação ao espelho: $v_i = -1,5\text{ m/s}$.<br>
        A velocidade relativa de aproximação entre o estudante e sua imagem é dada pela soma dos módulos: $v_{rel} = |v_e| + |v_i|$.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Cálculo da Velocidade Relativa</span><br>
        $v_{rel} = 1,5\text{ m/s} + 1,5\text{ m/s} = \mathbf{3,0\text{ m/s}}$.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        O estudante se aproxima de sua imagem com o dobro de sua velocidade pessoal, isto é, a <strong>3,0 m/s</strong>. A imagem formada pelo espelho plano é <strong>virtual, direita, de mesmo tamanho e enantiomorfa</strong>.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Os espelhos retrovisores e de segurança em ônibus utilizam espelho convexo porque:",
                    options: [
                        "Amplia o tamanho das imagens",
                        "Produz imagem sempre virtual, direita e menor com amplo campo visual",
                        "Inverte as imagens de cabeça para baixo",
                        "Não reflete luz solar"
                    ],
                    correct: 1,
                    exp: "Espelhos convexos fornecem maior campo de visão com imagens diretas e reduzidas."
                }
            ]
        },
        {
            id: "fis-08", title: "8. Termologia, Calorimetria & Transmissão de Calor", time: "25 min", difficulty: "fácil",
            track: "selecao", prerequisites: [], examTopics: ["Edital Fís. 4.1: Escalas termométricas", "Edital Fís. 4.2: Calorimetria", "Edital Fís. 4.3: Transmissão de calor"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> <em>Calor</em> não é algo que o corpo "tem", mas sim energia térmica em movimento do corpo quente para o frio! Condução ocorre por contato em sólidos (colher no café quente); Convecção ocorre em líquidos e gases (ar-condicionado no alto); Irradiação viaja em ondas térmicas até pelo vácuo (calor do Sol).</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Queda do "Fluido Calórico" & As Experiências de Joule</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Até a metade do século XIX, acreditava-se que o calor era um líquido invisível e sem peso chamado "calórico", que escorria de corpos quentes para corpos frios. Se você batesse um martelo repetidas vezes em um pedaço de ferro, diziam que o metal soltava calórico porque estava sendo espremido.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Em 1843, o físico inglês <strong>James Prescott Joule</strong> montou um experimento genial com pesos caindo e girando pás dentro de um barril isolado com água. Ele provou matematicamente que o trabalho mecânico se convertia diretamente em aumento de temperatura: <strong>calor não é matéria, calor é ENERGIA térmica em trânsito!</strong>
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: O Pix Térmico & O Mito do Cobertor Quentinho</div>
    <p>• <strong>O Pix de Energia:</strong> Ninguém "tem calor" estocado dentro do corpo, assim como ninguém tem "uma transação bancária" guardada no bolso. O que seu corpo tem é <em>Energia Térmica</em> (medida pela <em>Temperatura</em>). O <strong>Calor</strong> só existe quando essa energia está sendo transferida espontaneamente de quem tem mais temperatura para quem tem menos temperatura!</p>
    <p>• <strong>O Cobertor Não Esquenta Ninguém:</strong> Se você colocar um termômetro enrolado em um cobertor grosso em cima da cama durante horas, o termômetro vai marcar exatamente a temperatura do quarto. O cobertor não gera 1 joule de calor sequer! Ele é apenas um <strong>isolante térmico</strong> (cheio de ar retido entre as fibras) que impede que a energia térmica do seu próprio corpo escape para o ambiente.</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>A Engenharia da Garrafa Térmica (Termo):</strong> Ela combate os 3 processos simultaneamente: o <em>vácuo</em> entre as paredes duplas de vidro anula a condução e a convecção; as <em>paredes espelhadas</em> refletem a radiação térmica infravermelha de volta para o café; e a tampa plástica impede a fuga de ar quente.</li>
        <li><strong>Posicionamento do Ar-Condicionado e Aquecedor:</strong> O ar-condicionado deve ser instalado no alto da parede porque o ar refrigerado é mais denso (pesado) e desce, criando uma corrente de <strong>convecção</strong> natural que refrigera todo o quarto. O aquecedor elétrico, pelo oposto, deve ficar no chão!</li>
        <li><strong>Painéis Solares Térmicos:</strong> Aquecem a água do chuveiro captando a irradiação solar infravermelha em tubos de cobre pintados de preto fosco (que é excelente absorvedor térmico).</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Fórmulas de Calorimetria e Propagação</h3>
    <div class="box-formula" style="line-height:1.8;">
        <strong>Calor Sensível (Variação de Temperatura):</strong> Q = m · c · ΔT  ("Qui-Ma-Ce-Te")<br>
        <strong>Calor Latente (Mudança de Estado Físico):</strong> Q = m · L  ("Qui-Mo-Le")<br>
        <strong>Conversão entre Escalas:</strong> C / 5 = (F − 32) / 9 = (K − 273) / 5<br>
        <div class="legend">Q = calor (calorias [cal] ou Joules [J]) | m = massa (g ou kg) | c = calor específico da substância (cal/g·°C) | ΔT = variação de temperatura (T_final − T_inicial) | L = calor latente de fusão ou vaporização.</div>
    </div>
    <ul style="margin:12px 0 0 0; padding-left:20px; font-size:15px; line-height:1.8; color:var(--text-secondary);">
        <li><strong>Condução Térmica:</strong> Ocorre de molécula para molécula por contato direto, típica em sólidos (metais conduzem muito rápido graças aos elétrons livres).</li>
        <li><strong>Convecção Térmica:</strong> Movimento real de massas de fluidos (líquidos e gases) impulsionados por diferenças de densidade criadas por aquecimento. <em>NÃO ocorre no vácuo nem em sólidos!</em></li>
        <li><strong>Irradiação Térmica:</strong> Transferência por meio de ondas eletromagnéticas (principalmente radiação infravermelha). <em>É o ÚNICO processo que se propaga através do vácuo!</em></li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>1. <strong>Confundir Sensação Térmica com Temperatura:</strong> Ao tocar em uma maçaneta de metal e na porta de madeira no mesmo ambiente com ar-condicionado a 20 °C, a maçaneta parece "muito mais fria". A pegadinha é achar que a maçaneta está em temperatura menor: <strong>ambas estão rigorosamente à mesma temperatura de 20 °C!</strong> O metal apenas rouba calor da sua mão muito mais rápido porque é um excelente condutor térmico!</p>
    <p>2. <strong>Temperatura Durante a Mudança de Fase:</strong> Para substâncias puras à pressão constante, durante toda a fusão ou ebulição, a temperatura <strong>permanece rigorosamente constante</strong> até que toda a matéria mude de estado físico!</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Deseja-se aquecer 500 g de água pura de 20 °C até 80 °C para preparar chá no laboratório de Química do CEFET. Sabendo que o calor específico da água líquida é $c = 1,0\text{ cal}/(\text{g}\cdot^\circ\text{C})$ e que $1\text{ cal} \approx 4,2\text{ J}$, determine a quantidade de calor absorvida pela água em calorias e em Joules.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Coleta e Interpretação dos Dados</span><br>
        Massa $m = 500\text{ g}$.<br>
        Temperatura inicial $T_i = 20^\circ\text{C}$, temperatura final $T_f = 80^\circ\text{C}$.<br>
        Variação de temperatura: $\Delta T = 80 - 20 = 60^\circ\text{C}$.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Seleção da Equação Fundamental da Calorimetria</span><br>
        Como há apenas variação de temperatura sem mudança de estado (a água continua líquida), aplicamos a equação do calor sensível: $Q = m \cdot c \cdot \Delta T$.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Execução dos Cálculos Numéricos</span><br>
        $Q = 500 \cdot 1,0 \cdot 60 = \mathbf{30.000\text{ calorias}}\text{ (ou } 30\text{ kcal)}$.<br>
        Convertendo para o Sistema Internacional (Joules):<br>
        $Q_{Joules} = 30.000 \cdot 4,2 = \mathbf{126.000\text{ J}}\text{ (ou } 126\text{ kJ)}$.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        A água necessita absorver exatamente <strong>30.000 calorias (126 kJ)</strong> de energia térmica para atingir a temperatura desejada.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "A transmissão de calor do Sol até a Terra através do vácuo ocorre por:",
                    options: ["Condução", "Convecção", "Irradiação térmica", "Ebulição"],
                    correct: 2,
                    exp: "Irradiação via ondas eletromagnéticas."
                }
            ]
        },
        {
            id: "fis-09", title: "9. Eletricidade & 1ª Lei de Ohm", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: [], examTopics: ["Edital Fís. 5: Eletricidade — Eletrização e carga elétrica", "Edital Fís. 5.1: Corrente elétrica", "Edital Fís. 5.2: 1ª Lei de Ohm"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> A Voltagem ($V$) é a força que empurra as cargas elétricas. A Corrente ($i$) é a quantidade de elétrons passando por segundo. A Resistência ($R$) é a dificuldade que o fio impõe à passagem. A regra suprema é: $V = R \\cdot i$ (macete: <em>"Quem Vê, Ri!"</em>).</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Teimosia de Georg Ohm & O Choque dos Circuitos</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Em 1827, o professor e matemático alemão <strong>Georg Simon Ohm</strong> utilizou fios de prata, cobre e ferro de diferentes espessuras conectados a termopares e pilhas primitivas. Ele percebeu que, para um mesmo condutor mantido a temperatura constante, dobrar a tensão aplicada fazia a corrente elétrica dobrar exatamente na mesma proporção.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Na época, a comunidade científica zombou de sua descoberta chamando-a de "teia de desilusões e fantasias". Anos mais tarde, com o nascimento das redes de telégrafo e da iluminação pública nas cidades, a <strong>Lei de Ohm</strong> tornou-se o pilar absoluto e insubstituível de toda a engenharia eletroeletrônica da humanidade!
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: A Mangueira de Jardim & O Bocal Apertado</div>
    <p>Para nunca mais esquecer as grandezas elétricas fundamentais:</p>
    <p>• <strong>Tensão / Voltagem (U ou V, em Volts):</strong> É a pressão da água na caixa d'água ou na bomba. Se a caixa d'água estiver no alto do morro, a pressão é enorme!</p>
    <p>• <strong>Corrente Elétrica (i, em Ampères):</strong> É o fluxo real de água saindo pela boca da mangueira: quantos litros (ou Coulombs de elétrons) passam por segundo.</p>
    <p>• <strong>Resistência Elétrica (R, em Ohms [Ω]):</strong> É alguém pisando na mangueira ou apertando o bocal com o dedo. Quanto mais esmagada a mangueira, maior é a resistência e mais força (tensão) você precisa fazer para a mesma quantidade de água passar!</p>
    <p>• <strong>Fórmula Mnemônica:</strong> $U = R \cdot i$  $\to$ <em>"Você = Rindo · Indo"</em> ou <em>"Quem Vê, Ri!"</em></p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Chuveiro Elétrico no Inverno (A Chave Mágica):</strong> Quando você muda a chave do chuveiro de "Verão" para "Inverno", a resistência interna é <strong>encurtada</strong>! Menor comprimento significa menor resistência ($R$), o que faz a corrente elétrica aumentar. Pela fórmula de potência $P = U^2 / R$, diminuir a resistência aumenta a potência e esquenta mais o banho!</li>
        <li><strong>Carregadores Ultra-Rápidos de Smartphone (USB-C Power Delivery):</strong> Carregam baterias ajustando dinamicamente a tensão de 5V até 20V com correntes de 3A, entregando potências de 20W a 65W com alta eficiência térmica.</li>
        <li><strong>Disjuntores Residenciais (Segurança contra Incêndio):</strong> Desarmam automaticamente quando a corrente elétrica ultrapassa o limite seguro dos fios de cobre (Efeito Joule), evitando curtos-circuitos e incêndios.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Leis de Ohm e Potência Elétrica</h3>
    <div class="box-formula" style="line-height:1.8;">
        <strong>1ª Lei de Ohm:</strong> U = R · i  ↔  R = U / i<br>
        <strong>Potência Elétrica (Rapidez de consumo de energia):</strong> P = U · i = R · i² = U² / R<br>
        <strong>Consumo de Energia Residencial:</strong> E = P · Δt  [Potência em kW × Tempo em horas = kWh]<br>
        <div class="legend">U = tensão elétrica (Volt [V]) | i = intensidade da corrente (Ampère [A]) | R = resistência elétrica (Ohm [Ω]) | P = potência (Watt [W]).</div>
    </div>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>A clássica pergunta sobre a chave de chuveiro elétrico ou torradeira! O candidato ingênuo pensa: <em>"Quero o banho mais quente no inverno, então preciso de MAIS resistência!"</em> <strong>ERRO GRAVE!</strong> Em residências, a tensão da rede é constante (127 V ou 220 V). Pela equação $P = \frac{U^2}{R}$, como $R$ está no denominador, para termos <strong>maior potência (mais calor)</strong>, precisamos de uma <strong>RESISTÊNCIA MENOR</strong>! Quem diminui o comprimento do resistor tem água mais quente!</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Um ferro de passar roupas opera ligado à rede elétrica padrão de 110 V do Rio de Janeiro. Ao funcionar em sua potência máxima, ele é atravessado por uma corrente elétrica de 5 A. Calcule a resistência elétrica interna do aparelho e determine a potência dissipada por ele sob a forma de calor.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Identificação dos Parâmetros Elétricos</span><br>
        Tensão nominal: $U = 110\text{ V}$.<br>
        Corrente elétrica: $i = 5\text{ A}$.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Aplicação da 1ª Lei de Ohm</span><br>
        $U = R \cdot i \implies R = \frac{U}{i}$.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Resolução Numérica da Resistência e Potência</span><br>
        Cálculo da resistência: $R = \frac{110}{5} = \mathbf{22\text{ }\Omega}$.<br>
        Cálculo da potência dissipada: $P = U \cdot i = 110 \cdot 5 = \mathbf{550\text{ W}}$ (Watts).
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        O ferro possui resistência interna de <strong>22 Ohms</strong> e consome <strong>550 Watts</strong> de potência elétrica, convertendo essa energia integralmente em energia térmica para desamassar as roupas pelo Efeito Joule.
    </div>
</div>`,
            questions: [
                {
                    type: "text",
                    q: "Qual a resistência em Ohms de um resistor que sob 100 V conduz 5 A?",
                    a: ["20", "20 ohms", "20Ω"],
                    exp: "R = 100 / 5 = 20 Ω."
                }
            ]
        },
        {
            id: "fis-10", title: "10. Magnetismo & Bússola Terrestre", time: "25 min", difficulty: "fácil",
            track: "selecao", prerequisites: [], examTopics: ["Edital Fís. 6.1: Inseparabilidade dos polos", "Edital Fís. 6.2: Força magnética entre os polos", "Edital Fís. 6.3: Bússola e magnetismo terrestre"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> Polos magnéticos iguais se repelem; polos diferentes se atraem. Se você serrar um ímã ao meio, você NUNCA separa os polos: nascem dois novos ímãs completos (<em>Inseparabilidade dos Polos</em>)! O polo Norte da bússola aponta para o Norte Geográfico porque lá fica o <strong>Sul Magnético</strong> da Terra!</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Pedra de Magnésia, As Grandes Navegações & O Livro "De Magnete"</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Na Grécia Antiga, pastores observaram que os cravos de ferro de suas sandálias ficavam presos a certas pedras escuras na região de Magnésia (origem da palavra <em>magnetita</em>). Séculos depois, marinheiros chineses na Dinastia Han perceberam que lascas dessas pedras flutuando em recipientes de água giravam sozinhas apontando sempre na mesma direção cardinal.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Essa descoberta permitiu aos navegadores portugueses atravessar oceanos sem se perder no mar aberto. Em 1600, o médico real inglês <strong>William Gilbert</strong> publicou <em>De Magnete</em>, declarando uma verdade espantosa que mudou a ciência para sempre: <em>"A própria Terra inteira é um gigantesco ímã esférico natural!"</em>
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: Os Casais Inseparáveis de um Ímã</div>
    <p>Imagine dois amigos inseparáveis chamados "Norte" e "Sul" colados de mãos dadas:</p>
    <p>• Se você tentar isolar o polo Norte pegando uma serra e cortando o ímã exatamente no meio, o que acontece? Você NÃO obtém um pedaço só Norte e um pedaço só Sul!</p>
    <p>• <strong>O Milagre Magnético:</strong> No exato instante do corte, os micro-ímãs atômicos internos se rearranjam e surgem <strong>DOIS novos ímãs completos</strong>, cada um com seu próprio polo Norte e seu próprio polo Sul! É o <strong>Princípio da Inseparabilidade dos Polos Magnéticos</strong>: não existem monopolos magnéticos isolados na natureza!</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Ressonância Magnética Nuclear (Exames Médicos):</strong> Bobinas supercondutoras geram campos magnéticos intensos (1,5 a 3 Tesla) que alinham os núcleos dos átomos de hidrogênio do corpo, permitindo obter imagens ultra-detalhadas de órgãos internos sem radiação ionizante.</li>
        <li><strong>Motores Elétricos de Ventiladores e Carros:</strong> A interação de atração e repulsão rápida entre ímãs permanentes de neodímio e eletroímãs faz o rotor girar continuamente a milhares de rotações por minuto com mais de 90% de eficiência energética.</li>
        <li><strong>O Escudo Protetor da Terra (Magnetosfera):</strong> O núcleo líquido de ferro fundido em rotação no centro da Terra gera um campo magnético protetor gigante que desvia o vento solar e partículas cósmicas mortais para os polos, gerando as belíssimas <em>Auroras Polares</em>.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Campo Magnético e Bússola Terrestre</h3>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.8; color:var(--text-secondary);">
        <li><strong>Lei dos Polos:</strong> Polos de mesmo nome se <strong>repelem</strong> ($N \leftrightarrow N$, $S \leftrightarrow S$); polos de nomes contrários se <strong>atraem</strong> ($N \leftrightarrow S$).</li>
        <li><strong>Linhas de Indução Magnética:</strong> Por convenção universal, no exterior de um ímã, as linhas de campo magnético <strong>saem do polo Norte e entram no polo Sul</strong>.</li>
        <li><strong>O Segredo da Bússola Terrestre:</strong> A agulha de uma bússola é um pequeno ímã móvel. Como polos opostos se atraem, para que o polo <em>Norte</em> da bússola aponte para o <em>Norte Geográfico</em> da Terra, lá em cima deve existir um <strong>POLO SUL MAGNÉTICO</strong>!
            <br>– <strong>Polo Norte Geográfico</strong> $\approx$ <strong>Polo Sul Magnético</strong> da Terra.
            <br>– <strong>Polo Sul Geográfico</strong> $\approx$ <strong>Polo Norte Magnético</strong> da Terra.
        </li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>A banca pergunta com frequência: <em>"Qual polo magnético do planeta Terra está situado nas proximidades do Polo Norte Geográfico?"</em>. Mais da metade dos candidatos responde "Polo Norte Magnético" sem pensar! <strong>Lembre-se sempre:</strong> se fosse o polo Norte magnético, ele REPELIRIA o polo Norte da agulha da bússola! Portanto, no Polo Norte Geográfico localiza-se o <strong>POLO SUL MAGNÉTICO DA TERRA</strong>!</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Uma barra imantada com polos N (Norte) e S (Sul) é cortada transversalmente em três partes iguais (Pedaço 1, Pedaço 2 e Pedaço 3). Quantos polos magnéticos Norte e Sul existirão no total após os cortes e qual será o comportamento do pedaço central?
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Identificação do Princípio Físico Envolvido</span><br>
        A questão aborda o Princípio da Inseparabilidade dos Polos Magnéticos. Não é possível criar monopolos magnéticos na matéria macroscópica.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Análise dos Novos Extremos Gerados</span><br>
        Ao realizar dois cortes na barra original, cada uma das 3 seções passa a ser um ímã completo e autônomo, com extremidades dotadas de dipolos opostos.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Contagem dos Polos Resultantes</span><br>
        Cada um dos 3 pedaços possui obrigatoriamente 1 polo Norte e 1 polo Sul:<br>
        Total de polos Norte = 3.<br>
        Total de polos Sul = 3.<br>
        Total geral de polos magnéticos = 6 polos.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        Após os cortes, teremos <strong>três novos ímãs completos</strong>, totalizando <strong>3 polos Norte e 3 polos Sul</strong>. O pedaço central comportar-se-á exatamente como qualquer ímã comum, atraindo limalhas de ferro por ambas as extremidades.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Ao serrar um ímã em duas metades exatamente iguais, obtém-se:",
                    options: [
                        "Dois novos ímãs completos, cada um com polo Norte e polo Sul",
                        "Um pedaço apenas Norte e outro apenas Sul",
                        "Dois pedaços desmagnetizados",
                        "Dois polos neutros"
                    ],
                    correct: 0,
                    exp: "Princípio da inseparabilidade dos polos magnéticos."
                }
            ]
        }
        ]
    },

    /* ─────────────────────────────────────────────────────────────
       4. QUÍMICA (7 Módulos: 7 Seleção)
       ───────────────────────────────────────────────────────────── */
    {
        id: "qui", name: "Química", icon: "🧪",
        modules: [
        {
            id: "qui-01", title: "1. Matéria, Estados Físicos & Densidade", time: "25 min", difficulty: "nivelamento",
            track: "selecao", prerequisites: [], examTopics: ["Edital Quím. 1.1: Propriedades da matéria", "Edital Quím. 1.2: Estados físicos da matéria", "Edital Quím. 1.3: Mudanças de estado"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> Matéria é tudo que tem massa e ocupa lugar no espaço. O que determina se um corpo boia ou afunda na água não é seu peso total, mas sim a <em>Densidade</em> ($d = m / V$). Um navio petroleiro de 200 mil toneladas flutua porque é oco por dentro (baixa densidade média), enquanto uma pedrinha maciça afunda!</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">O "Eureka!" de Arquimedes & A Fraude da Coroa de Ouro</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        No século III a.C., o tirano Hierão II encomendou aos orfebres uma coroa votiva de ouro puro. Desconfiado de que os artesãos teriam desviado parte do ouro nobre e completado a peça com prata barata, ele encarregou o sábio <strong>Arquimedes de Siracusa</strong> de descobrir a fraude sem quebrar ou derreter a obra de arte.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Ao entrar em uma banheira cheia até a borda e ver a água transbordar na mesma proporção do volume do seu corpo, Arquimedes teve a epifania de sua vida e saiu correndo nu pelas ruas gritando <em>"Eureka! Eureka!"</em> (Encontrei!). Como o ouro é muito mais denso que a prata ($d_{ouro} \approx 19,3\text{ g/cm}^3$ vs $d_{prata} \approx 10,5\text{ g/cm}^3$), uma barra de ouro puro de mesmo peso deslocaria muito menos água do que a coroa adulterada. A fraude foi desmascarada e a ciência da densidade nasceu!
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: 1 kg de Chumbo vs 1 kg de Algodão</div>
    <p>A famosa charada de infância esconde o segredo de toda a Química da matéria:</p>
    <p>• Na balança, ambos pesam rigorosamente <strong>1 quilograma</strong>! Mas observe o volume que cada um ocupa no espaço:</p>
    <p>• O <strong>chumbo</strong> é tão denso que 1 kg cabe em uma caixinha minúscula de fósforos (os átomos de chumbo são pesados e estão espremidos grudadinhos uns aos outros). Já 1 kg de <strong>algodão</strong> ocupa um saco de lixo gigante de 100 litros (muito ar retido entre as fibras!).</p>
    <p>• <strong>Conclusão Intuitiva:</strong> A <strong>Densidade ($d = m / V$)</strong> mede o grau de "compactação" da matéria. Se um objeto tem densidade menor que a do fluido ao seu redor, ele boia; se tem densidade maior, ele afunda!</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Submarinos da Marinha Brasileira (Riachuelo):</strong> Controlam sua flutuabilidade por meio de tanques de lastro: para submergir, abrem válvulas e enchem os tanques com água do mar (aumentando a densidade média total); para subir à superfície, injetam ar comprimido expulsando a água para fora!</li>
        <li><strong>Teste da Gasolina Adulterada em Postos de Combustível:</strong> A densidade da gasolina comum brasileira (misturada com 27% de etanol anidro) é aferida por um <em>densímetro</em> no próprio bico da bomba para garantir que não houve adição fraudulenta de solventes ou água.</li>
        <li><strong>Gelo Boiando no Copo de Refrigerante:</strong> A água é uma das raras substâncias que <strong>expande ao congelar</strong> devido à formação de pontes de hidrogênio em rede hexagonal oca. Por isso, a densidade do gelo ($0,92\text{ g/cm}^3$) é menor que a da água líquida ($1,0\text{ g/cm}^3$), permitindo que a vida marinha sobreviva sob camadas congeladas nos polos!</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Estados Físicos e Mudanças de Fase</h3>
    <div class="box-formula" style="line-height:1.8;">
        <strong>Fórmula da Densidade:</strong> d = m / V<br>
        <div class="legend">d = densidade (g/cm³, g/mL ou kg/m³) | m = massa da amostra (g ou kg) | V = volume ocupado (cm³, mL ou L). <em>(Lembrete: 1 g/cm³ = 1.000 kg/m³ = 1 g/mL).</em></div>
    </div>
    <ul style="margin:12px 0 0 0; padding-left:20px; font-size:15px; line-height:1.8; color:var(--text-secondary);">
        <li><strong>Estado Sólido:</strong> Moléculas fortemente unidas com vibração local. <em>Forma fixa e Volume fixo</em>.</li>
        <li><strong>Estado Líquido:</strong> Moléculas com liberdade de deslizamento mútuo. <em>Forma variável (molda-se ao frasco) e Volume fixo</em>.</li>
        <li><strong>Estado Gasoso:</strong> Moléculas em alta velocidade e grande distanciamento mútuo. <em>Forma e Volume variáveis (expansibilidade e compressibilidade máximas)</em>.</li>
        <li><strong>As 5 Mudanças de Estado:</strong>
            <br>– <strong>Fusão:</strong> Sólido $\to$ Líquido (derretimento de gelo).
            <br>– <strong>Vaporização:</strong> Líquido $\to$ Gás (subdividida em <em>Evaporação</em>: lenta e espontânea; <em>Ebulição</em>: rápida e turbulenta a temperatura fixa; <em>Calefação</em>: instantânea com estalo em superfície superaquecida).
            <br>– <strong>Condensação ou Liquefação:</strong> Gás $\to$ Líquido (orvalho da manhã, gotículas na parede do copo gelado).
            <br>– <strong>Solidificação:</strong> Líquido $\to$ Sólido (água virando gelo no congelador).
            <br>– <strong>Sublimação:</strong> Sólido $\rightleftharpoons$ Gás direto sem passar pelo estado líquido (gelo seco $CO_2$, bolinhas de naftalina no armário e iodo sólido).
        </li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>1. <strong>O Copo de Refrigerante Suando:</strong> A banca pergunta a origem das gotículas de água na parede externa de um copo de refrigerante gelado. Mais de 40% dos alunos marcam "a água transpirou pelos poros do vidro". <strong>ERRO ABSURDO!</strong> O vidro é impermeável! O que acontece é a <strong>CONDENSAÇÃO do vapor de água invisível presente no ar ambiente</strong>, que colide com a superfície fria do vidro e volta ao estado líquido!</p>
    <p>2. <strong>Densidade é Propriedade Específica:</strong> 1 gota de água pura tem exatamente a MESMA densidade ($1,0\text{ g/cm}^3$) que uma piscina olímpica inteira com 2 milhões de litros de água! Cortar um objeto pela metade divide sua massa e seu volume na mesma proporção, mantendo sua densidade inalterada.</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Em uma aula prática no laboratório de Química do CEFET Maracanã, um estudante mergulha uma amostra metálica maciça e homogênea de 540 g em uma proveta graduada que continha originalmente 300 mL de água. Após a imersão completa do metal, o nível da água na proveta sobe para a marca de 500 mL. Determine a densidade desse metal em g/cm³ e responda se ele flutuaria em um recipiente com mercúrio líquido ($d_{Hg} = 13,6\text{ g/cm}^3$).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Obtenção do Volume Deslocado pelo Princípio de Arquimedes</span><br>
        O volume do metal é exatamente igual à variação do nível do líquido na proveta:<br>
        $V = V_{final} - V_{inicial} = 500\text{ mL} - 300\text{ mL} = 200\text{ mL} = 200\text{ cm}^3$.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Aplicação da Equação da Densidade</span><br>
        $d = \frac{m}{V}$, onde $m = 540\text{ g}$ e $V = 200\text{ cm}^3$.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Cálculo Numérico da Densidade</span><br>
        $d = \frac{540}{200} = \mathbf{2,7\text{ g/cm}^3}$ (densidade característica do Alumínio!).
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão e Análise de Flutuabilidade</span><br>
        A densidade da amostra é de <strong>2,7 g/cm³</strong>. Como sua densidade é substancialmente menor do que a do mercúrio líquido ($2,7 < 13,6\text{ g/cm}^3$), o bloco metálico <strong>FLUTUARÁ com facilidade na superfície do mercúrio</strong>.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Gotículas de água no lado externo de um copo gelado são formadas por:",
                    options: ["Evaporação", "Condensação do vapor de água do ar", "Transpiração do vidro", "Sublimação"],
                    correct: 1,
                    exp: "Condensação do vapor de água presente no ar ambiente."
                }
            ]
        },
        {
            id: "qui-02", title: "2. Substâncias Puras, Misturas & Separação", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: ["qui-01"], examTopics: ["Edital Quím. 2.1: Substância pura e mistura", "Edital Quím. 2.2: Substância simples e composta", "Edital Quím. 2.3: Sistemas homogêneos e heterogêneos", "Edital Quím. 2.4: Métodos de separação de misturas"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> Uma substância pura só tem moléculas idênticas. Uma mistura tem duas ou mais substâncias juntas. Se você enxerga 1 única fase uniforme, é <em>Homogênea</em> (água com sal dissolvido). Se tem 2 ou mais fases, é <em>Heterogênea</em> (água e óleo). Para separar água e sal sem perder nada, fazemos <em>Destilação Simples</em>; para separar água e álcool, <em>Destilação Fracionada</em>.</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">O Alambique dos Alquimistas & As Grandes Refinarias de Petróleo</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        No século VIII, o sábio árabe <strong>Jabir ibn Hayyan (Geber)</strong> aperfeiçoou o <em>alambique</em> (aparelho de destilação com serpentina de resfriamento). Ele descobriu que aquecendo misturas líquidas, os compostos que evaporavam mais facilmente (com menor ponto de ebulição) subiam primeiro como vapor e condensavam no tubo resfriado, separando-se perfeitamente da sujeira restante.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Hoje, esse mesmo princípio alquímico opera nas colunas gigantescas de 50 metros de altura da <strong>Refinaria de Duque de Caxias (REDUC)</strong> no Rio de Janeiro: o petróleo bruto é aquecido e separado por <strong>Destilação Fracionada</strong> em gás de cozinha (GLP), gasolina, nafta, querosene de aviação, óleo diesel e asfalto!
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: A Pista de Dança & As Fases Visuais</div>
    <p>• <strong>Substância Pura vs Mistura:</strong> Se em uma festa todos os convidados usam a mesmíssima camisa vermelha (apenas moléculas de $H_2O$), temos uma <strong>Substância Pura</strong>. Se entram pessoas com camisas azuis, brancas e pretas (sal, açúcar, água), temos uma <strong>Mistura</strong>!</p>
    <p>• <strong>Homogênea vs Heterogênea:</strong>
        <br>– <em>Homogênea (Solução):</em> Você bate café com leite e açúcar. A olho nu ou sob qualquer microscópio comum, a mistura tem um visual idêntico em cada milímetro: possui <strong>1 única fase visual</strong>!
        <br>– <em>Heterogênea:</em> Coloque água e óleo no copo. Por mais que você misture com uma colher furiosamente, eles nunca se misturam: formam duas camadas nítidas com fronteira visível: <strong>2 fases</strong>!
    </p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Estação de Tratamento de Água do Guandu (CEDAE):</strong> A água barrenta do Rio Guandu passa por <em>Floculação/Coagulação</em> (o sulfato de alumínio gruda a terra em flocos pesados), <em>Decantação</em> (a lama assenta no fundo dos tanques), <em>Filtração</em> (em leitos de cascalho, areia e carvão antracito) e <em>Cloração</em> para matar bactérias e chegar límpida à torneira dos cariocas.</li>
        <li><strong>Produção de Sal Marinho em Cabo Frio e Araruama:</strong> A água do mar é retida em grandes tanques rasos (salinas). Com a energia do Sol e dos ventos fortes da Região dos Lagos, ocorre <em>Evaporação/Cristalização fracionada</em> da água, deixando o cloreto de sódio ($NaCl$) precipitado no fundo.</li>
        <li><strong>Dessalinização de Água do Mar por Osmose Reversa:</strong> Membranas semipermeáveis com poros microscópicos retêm os íons de sódio e cloro sob alta pressão, fornecendo água potável em navios de guerra e países desérticos.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Métodos Canônicos de Separação</h3>
    <table class="comp-table" style="width:100%; margin-top:10px; font-size:14px;">
        <tr style="background:var(--card-bg-header);"><th>Método</th><th>Tipo de Mistura</th><th>Princípio Físico</th><th>Exemplo Clássico</th></tr>
        <tr><td><strong>Filtração</strong></td><td>Heterogênea (Sólido-Líquido ou Sólido-Gás)</td><td>Diferença de tamanho de partículas por membrana porosa</td><td>Pó de café no coador; aspirador de pó</td></tr>
        <tr><td><strong>Decantação</strong></td><td>Heterogênea (Sólido-Líquido ou Líquido-Líquido)</td><td>Diferença de densidade por repouso sob gravidade</td><td>Água e terra; água e óleo (funil de bromo)</td></tr>
        <tr><td><strong>Centrifugação</strong></td><td>Heterogênea (Sólido-Líquido)</td><td>Decantação acelerada por força centrífuga</td><td>Separação do plasma sanguíneo das hemácias</td></tr>
        <tr><td><strong>Separação Magnética</strong></td><td>Heterogênea (Sólido-Sólido)</td><td>Atração magnética de metais ferromagnéticos</td><td>Limalha de ferro misturada com enxofre</td></tr>
        <tr><td><strong>Levigação</strong></td><td>Heterogênea (Sólido-Sólido)</td><td>Corrente de água arrasta o sólido menos denso</td><td>Garimpo de ouro na bateia</td></tr>
        <tr><td><strong>Destilação Simples</strong></td><td>Homogênea (Sólido dissolvido em Líquido)</td><td>Grande diferença de ponto de ebulição</td><td>Água com sal (recupera água pura e sal seco)</td></tr>
        <tr><td><strong>Destilação Fracionada</strong></td><td>Homogênea (Dois Líquidos miscíveis)</td><td>Pontos de ebulição distintos e próximos com coluna</td><td>Água + Álcool; Frações do Petróleo</td></tr>
    </table>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>1. <strong>Leite e Sangue NÃO são Homogêneos:</strong> A banca pergunta se leite integral e sangue são misturas homogêneas porque "têm aspecto liso e uniforme a olho nu". <strong>CUIDADO!</strong> Ao microscópio óptico, o leite revela gotículas de gordura suspensas e o sangue exibe hemácias e leucócitos flutuando no plasma. Ambos são <strong>MISTURAS HETEROGÊNEAS (Coloides)</strong>!</p>
    <p>2. <strong>Água Mineral de Garrafinha:</strong> Não é substância pura! No rótulo está escrito "Água Mineral Fluoretada", cheia de íons dissolvidos ($Na^+, Mg^{2+}, Ca^{2+}, HCO_3^-$). Trata-se de uma <strong>Mistura Homogênea</strong>.</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Um frasco no laboratório contém um sistema heterogêneo formado por água líquida, sal de cozinha totalmente dissolvido, areia fina no fundo e limalha de ferro espalhada. Proponha uma sequência laboratorial correta e ordenada de métodos físicos de separação para obter cada um dos 4 componentes puros e isolados.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Análise dos Componentes e Propriedades Específicas</span><br>
        Temos: Ferro (magnético e insolúvel), Areia (insolúvel, densa, não-magnética), Água (solvente líquido volátil) e Sal (sólido solúvel com alto ponto de ebulição).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Definição da Sequência Estratégica</span><br>
        1º passo: Remover o sólido magnético sem contato químico.<br>
        2º passo: Separar o sólido insolúvel da fase líquida restante.<br>
        3º passo: Separar o soluto dissolvido do solvente volátil.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Execução dos Métodos Laboratoriais</span><br>
        – <strong>1º Passo (Separação Magnética):</strong> Aproxima-se um ímã do frasco, atraindo e retirando 100% da limalha de ferro.<br>
        – <strong>2º Passo (Filtração Simples):</strong> Passa-se o sistema restante por papel de filtro. A areia fica retida no filtro, enquanto a solução aquosa de cloreto de sódio passa para o béquer.<br>
        – <strong>3º Passo (Destilação Simples):</strong> Aquece-se a solução salina no balão de destilação. A água vaporiza a 100 °C, passa pelo condensador e é recolhida pura no erlenmeyer, restando os cristais secos de sal no fundo do balão.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        A sequência obrigatória é: <strong>Separação Magnética $\to$ Filtração $\to$ Destilação Simples</strong>. Todos os 4 materiais foram recuperados em pureza sem destruição química.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Para separar água líquida de álcool etílico miscíveis, o método adequado é:",
                    options: ["Filtração simples", "Decantação", "Destilação fracionada", "Catação"],
                    correct: 2,
                    exp: "Destilação fracionada separa líquidos miscíveis por diferença de ponto de ebulição."
                }
            ]
        },
        {
            id: "qui-03", title: "3. Fenômenos Físicos vs. Fenômenos Químicos", time: "25 min", difficulty: "fácil",
            track: "selecao", prerequisites: ["qui-01"], examTopics: ["Edital Quím. 3: Fenômeno físico e fenômeno químico"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> No <em>Fenômeno Físico</em> a substância continua sendo ela mesma por dentro (rasgar papel, amassar latinha, derreter gelo). No <em>Fenômeno Químico</em> há <strong>reação química</strong> e nascem substâncias inteiramente novas que não existiam antes (queimar papel, apodrecer fruta, prego enferrujar)!</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Balança de Lavoisier & A Morte da Teoria do Flogisto</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Até o final do século XVIII, acreditava-se que os materiais queimavam porque continham uma alma de fogo mística chamada "flogisto", que escapava para o ar durante a combustão. Foi o químico francês <strong>Antoine Laurent de Lavoisier</strong> que desmontou essa fantasia usando balanças analíticas de extrema precisão em recipientes hermeticamente lacrados.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Lavoisier provou que queimar carvão não é uma perda de matéria misteriosa, mas sim uma reação química onde o carbono se une violentamente ao oxigênio do ar atmosférico para produzir gás carbônico ($CO_2$). Ele estabeleceu a imortal <strong>Lei da Conservação das Massas</strong>: <em>"Na natureza nada se cria, nada se perde, tudo se transforma!"</em>
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: O Castelo de LEGO vs O Fogo Destruidor</div>
    <p>• <strong>Fenômeno Físico (Desmontar o LEGO):</strong> Você monta um castelo medieval com peças de LEGO azuis e amarelas. Se cansar dele, você desmonta as torres e remonta como uma espaçonave. A forma mudou? Sim! Mas as peças continuam sendo as mesmíssimas pecinhas de plástico intactas: <strong>Fenômeno Físico</strong>!</p>
    <p>• <strong>Fenômeno Químico (Tacar Fogo no LEGO):</strong> Se você aproximar uma chama e atear fogo no castelo, o plástico vai derreter liberando fumaça preta tóxica, fuligem carbonizada e gases inflamáveis. Você nunca mais conseguirá suas pecinhas de LEGO de volta: os átomos quebraram suas ligações antigas e formaram <strong>substâncias novas</strong>: <strong>Fenômeno Químico</strong>!</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Ferrugem em Carros e Estruturas da Ponte Rio-Niterói:</strong> O ferro metálico ($Fe$) em contato com o oxigênio e a umidade salina da Baía de Guanabara sofre oxidação (reação química), transformando ferro brilhante e resistente em óxido férrico marrom avermelhado quebradiço ($Fe_2O_3$).</li>
        <li><strong>Comprimido Efervescente de Antiácido (Sonrisal):</strong> Ao cair na água, o bicarbonato de sódio reage com o ácido cítrico e o ácido acetilsalicílico, produzindo efervescência turbulenta de gás carbônico ($CO_2$) que neutraliza a acidez estomacal.</li>
        <li><strong>Cozimento e Digestão de Alimentos:</strong> O calor da panela desnatura e quebra as proteínas da carne (químico), e no estômago o ácido clorídrico ($HCl$) e as enzimas quebram os nutrientes em moléculas menores para absorção celular.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Como Identificar Reações Químicas</h3>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:10px;">
        Para a prova do CEFET, você deve procurar as <strong>4 Evidências Macroscópicas de Reação Química</strong>:
    </p>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.8; color:var(--text-secondary);">
        <li><strong>1. Liberação de Gás (Efervescência):</strong> Formação de borbulhas em temperatura ambiente onde nenhum dos reagentes era gás (ex: vinagre reagindo com bicarbonato de sódio).</li>
        <li><strong>2. Mudança Espontânea de Cor:</strong> A água sanitária descolorindo uma camisa tingida ou a fruta cortada escurecendo ao ar por oxidação enzimática.</li>
        <li><strong>3. Formação de Precipitado Sólido:</strong> Misturar dois líquidos transparentes e incolores e subitamente surgir uma pasta sólida insolúvel que cai no fundo do tubo de ensaio.</li>
        <li><strong>4. Liberação de Luz e Calor (Efeito Térmico):</strong> Chamas acesas, queima de fogos de artifício ou lanternas químicas de emergência fluorescentes (quimiluminescência).</li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>A clássica pergunta sobre <strong>Água Fervendo na Panela</strong>: a banca descreve uma panela cheia de água no fogão cheia de bolhas de gás subindo vigorosamente e pergunta se é fenômeno químico ou físico. Mais da metade dos alunos marca "químico porque soltou bolhas de gás". <strong>ARMADILHA FATAL!</strong> Aquelas bolhas não são gás novo: são apenas <strong>VAPOR DE ÁGUA ($H_2O$ líquida virando $H_2O$ gasosa)</strong>; a molécula continua sendo idêntica! Mudança de estado físico (evaporação, fusão, condensação) é SEMPRE <strong>FENÔMENO FÍSICO</strong>!</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Considere os seguintes eventos cotidianos: (I) Acender uma vela de parafina; (II) Derretimento da parafina que escorre na base da vela; (III) Dissolução de uma colher de açúcar no café quente; (IV) Uma maçã descascada que escurece após 20 minutos exposta ao ar. Classifique cada processo como fenômeno físico ou químico, fundamentando suas respostas.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Critério Fundamental de Classificação</span><br>
        O critério absoluto é a formação de novas substâncias com quebra e rearranjo de ligações químicas (Químico) versus mera alteração de forma/estado físico (Físico).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Análise Individual dos Casos I e II (A Vela)</span><br>
        – <strong>(I) Acender o pavio da vela:</strong> Ocorre combustão dos hidrocarbonetos da parafina vaporizada com $O_2$, gerando $CO_2$, vapor de água, calor e luz: <strong>Fenômeno Químico</strong>.<br>
        – <strong>(II) Derretimento da parafina que escorre:</strong> É a fusão da parafina sólida para líquida por calor. A fórmula molecular não se alterou: <strong>Fenômeno Físico</strong>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Análise Individual dos Casos III e IV</span><br>
        – <strong>(III) Dissolução de açúcar:</strong> As moléculas de sacarose são apenas envolvidas e separadas pelas moléculas de água (solvatação), sem reação: <strong>Fenômeno Físico</strong>.<br>
        – <strong>(IV) Escurecimento da maçã:</strong> Enzimas polifenoloxidases reagem com o oxigênio do ar formando pigmentos escuros de melanina (oxidação): <strong>Fenômeno Químico</strong>.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        Os processos I e IV são <strong>Químicos</strong>, enquanto os processos II e III são estritamente <strong>Físicos</strong>.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Qual dos seguintes processos é um exemplo inequívoco de FENÔMENO QUÍMICO?",
                    options: ["Evaporação da água", "Queima de uma vela de parafina", "Dissolução de açúcar", "Gelo derretendo"],
                    correct: 1,
                    exp: "A combustão é uma reação química que transforma matéria."
                }
            ]
        },
        {
            id: "qui-04", title: "4. Gráficos de Aquecimento: Eutética & Azeotrópica", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: ["qui-01", "qui-02"], examTopics: ["Edital Quím. 1.4: Gráficos de aquecimento", "Edital Quím. 2.5: Gráficos de substâncias e misturas"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> Uma <em>Substância Pura</em> tem dois degraus perfeitamente retos (Ponto de Fusão e Ponto de Ebulição constantes). Uma <em>Mistura Comum</em> derrete e ferve em temperaturas variáveis. Mas existem misturas espertas: a <em>Mistura Eutética</em> derrete em temperatura fixa (solda eletrônica), e a <em>Mistura Azeotrópica</em> ferve em temperatura fixa (álcool 96°)!</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Frustração dos Destiladores de Álcool & As Soldas dos Relojoeiros</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        No século XIX, com o avanço da indústria química europeia, cientistas tentaram incansavelmente obter álcool etílico 100% puro repetindo o processo de destilação fracionada em colunas de laboratório centenas de vezes consecutivas. Para espanto geral, ao atingir a concentração de 96% de álcool e 4% de água, a mistura passava a evaporar em conjunto a 78,1 °C com vapor de composição rigorosamente idêntica à do líquido!
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Eles haviam descoberto as <strong>misturas azeotrópicas</strong> (do grego <em>"ferver sem mudar"</em>). Do outro lado, relojoeiros e ourives haviam criado a <strong>mistura eutética</strong>: uma liga de estanho e chumbo que derretia em uma temperatura única muito inferior à de cada metal puro isolado, ideal para soldagens milimétricas sem queimar as engrenagens!
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: A Escadaria com Patamares de Descanso</div>
    <p>Pense no gráfico de aquecimento como uma pessoa subindo uma escadaria:</p>
    <p>• <strong>Substância Pura (Dois Patamares Perfeitos):</strong> O termômetro sobe até a temperatura de fusão, <em>para de subir e fica uma linha horizontal reta</em> enquanto o sólido vira líquido (1º patamar). Depois o líquido aquece até a ebulição e <em>para de subir de novo</em> em outra linha horizontal reta até todo o líquido virar vapor (2º patamar)!</p>
    <p>• <strong>Mistura Comum (Sem Descanso):</strong> Não tem nenhuma linha horizontal reta! Tanto a fusão quanto a ebulição acontecem ao longo de faixas inclinadas de temperatura variável.</p>
    <p>• <strong>Misturas Especiais (Fingindo ser puras):</strong>
        <br>– <strong>Eutética (Imita na Fusão):</strong> Tem o 1º patamar reto (PF constante) e o 2º inclinado (PE variável). <em>(Macete: "E" de Eutética vem antes no alfabeto $\to$ fusão vem antes!).</em>
        <br>– <strong>Azeotrópica (Imita na Ebulição):</strong> Tem o 1º patamar inclinado (PF variável) e o 2º reto (PE constante)!
    </p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Solda Estanho-Chumbo em Placas de iPhone e Computadores:</strong> A liga eutética (63% Estanho e 37% Chumbo) funde a uma temperatura fixa e constante de exatamente <strong>183 °C</strong> (muito abaixo do ponto de fusão do chumbo puro, que é 327 °C), permitindo soldar microchips microscópicos sem danificar os transistores de silício por superaquecimento.</li>
        <li><strong>O Álcool 96° das Farmácias e Indústrias:</strong> O álcool hidratado a 96% v/v é o azeótropo máximo do etanol. Por isso o álcool 100% puro (anidro) usado em carros de competição não pode ser obtido por destilação comum; exige a adição de agentes químicos especiais como o ciclo-hexano.</li>
        <li><strong>Líquido de Arrefecimento dos Radiadores (Etilenoglicol + Água):</strong> Mistura colocada nos carros para abaixar o ponto de congelamento e elevar o ponto de ebulição, evitando que o motor ferva no trânsito pesado da Linha Vermelha sob o sol do Rio.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Tabela-Mestra dos Gráficos Térmicos</h3>
    <table class="comp-table" style="width:100%; margin-top:10px; font-size:14px;">
        <tr style="background:var(--card-bg-header);"><th>Classificação do Sistema</th><th>Ponto de Fusão (PF)</th><th>Ponto de Ebulição (PE)</th><th>Comportamento Gráfico</th></tr>
        <tr><td><strong>Substância Pura</strong></td><td><strong>Constante ($\Delta T = 0$)</strong></td><td><strong>Constante ($\Delta T = 0$)</strong></td><td>Dois patamares rigorosamente horizontais</td></tr>
        <tr><td><strong>Mistura Comum</strong></td><td>Variável ($\Delta T > 0$)</td><td>Variável ($\Delta T > 0$)</td><td>Curvas inclinadas sem nenhum patamar plano</td></tr>
        <tr><td><strong>Mistura Eutética</strong></td><td><strong>Constante ($\Delta T = 0$)</strong></td><td>Variável ($\Delta T > 0$)</td><td>1º patamar plano (fusão) e 2º inclinado</td></tr>
        <tr><td><strong>Mistura Azeotrópica</strong></td><td>Variável ($\Delta T > 0$)</td><td><strong>Constante ($\Delta T = 0$)</strong></td><td>1º patamar inclinado e 2º plano (ebulição)</td></tr>
    </table>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>A banca desenha na questão um gráfico de aquecimento onde o primeiro trecho de mudança de fase é inclinado (variação de temperatura durante o derretimento), mas o segundo trecho é uma linha perfeitamente horizontal e plana. Ela pergunta: <em>"O gráfico representa uma substância pura?"</em>. <strong>NÃO!</strong> Para ser substância pura, <strong>AMBOS OS PATAMARES DEVERIAM SER HORIZONTAIS</strong>. Como apenas a ebulição foi constante, trata-se inequivocamente de uma <strong>MISTURA AZEOTRÓPICA</strong>!</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Uma amostra de matéria sólida contida em um cadinho foi aquecida uniformemente a partir de 25 °C até atingir 350 °C. O gráfico registrou que a fusão ocorreu a uma temperatura rigorosamente constante de 183 °C entre o 5º e o 12º minuto. Já a ebulição teve início em 280 °C e prosseguiu com elevação contínua até 310 °C. Identifique a natureza da amostra e descreva os estados físicos presentes no 8º e no 15º minuto de aquecimento.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Análise dos Patamares de Mudança de Fase</span><br>
        A fusão ocorreu a temperatura fixa ($183^\circ\text{C} \implies \text{PF constante}$).<br>
        A ebulição ocorreu em uma faixa variável ($280^\circ\text{C} \text{ a } 310^\circ\text{C} \implies \text{PE variável}$).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Classificação do Sistema</span><br>
        Sistema com PF constante e PE variável classifica-se obrigatoriamente como uma <strong>Mistura Eutética</strong>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Determinação dos Estados Físicos por Linha Temporal</span><br>
        – <strong>No 8º minuto:</strong> O tempo está no intervalo de fusão (5 min a 12 min) a 183 °C. Logo, coexistem simultaneamente as fases <strong>Sólida e Líquida</strong>.<br>
        – <strong>No 15º minuto:</strong> A fusão já encerrou (encerrou no 12º min) e a ebulição só começará em 280 °C. Logo, a matéria encontra-se inteiramente no estado <strong>Líquido</strong>.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        A amostra é uma <strong>mistura eutética</strong> (compatível com a solda estanho-chumbo). No 8º minuto coexistem as fases <strong>sólida + líquida</strong> e no 15º minuto o sistema é puramente <strong>líquido</strong>.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Uma mistura líquida com ponto de ebulição constante durante a vaporização é:",
                    options: ["Eutética", "Azeotrópica", "Heterogênea", "Saturada"],
                    correct: 1,
                    exp: "Mistura azeotrópica."
                }
            ]
        },
        {
            id: "qui-05", title: "5. Estudo do Átomo, Z, Massa & Isótopos", time: "25 min", difficulty: "médio",
            track: "selecao", prerequisites: [], examTopics: ["Edital Quím. 4.1: O átomo e suas partículas", "Edital Quím. 4.2: Número atômico e número de massa", "Edital Quím. 4.5: Isótopos, isóbaros e isótonos"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> O átomo é formado por um núcleo minúsculo e pesado (Prótons positivos e Nêutrons neutros) cercado por uma imensa nuvem vazia de elétrons negativos. O número de prótons ($Z$) é o RG do elemento químico! O número de massa é $A = Z + n$. <em>IsótoPos</em> têm o mesmo número de <strong>P</strong>rótons!</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Folha de Ouro de Rutherford & A Descoberta do Vazio Atômico</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Por séculos, acreditava-se com John Dalton que o átomo era uma esfera maciça e indivisível como uma bola de bilhar, ou com J.J. Thomson que era uma massa positiva recheada de elétrons incrustados ("pudim de passas"). Mas em 1911, o neozelandês <strong>Ernest Rutherford</strong> realizou um dos experimentos mais brilhantes da história da humanidade.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Ele bombardeou uma folha de ouro ultrafina com partículas alfa radioativas pesadas e velozes. Para a surpresa de todos, 99,9% das partículas atravessaram o ouro em linha reta sem sofrer nenhum desvio, enquanto uma fração ínfima ricocheteava para trás! Rutherford concluiu: <strong>a matéria é quase toda espaço vazio!</strong> Toda a massa pesada está concentrada em um núcleo central positivo minúsculo, rodeado por elétrons distantes.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: O Estádio do Maracanã & A Bolinha de Gude</div>
    <p>Para você ter noção do vazio inacreditável de que somos feitos:</p>
    <p>• Imagine que você ampliasse um único átomo até ele ficar do tamanho do <strong>Estádio do Maracanã</strong> inteiro!</p>
    <p>• O <strong>Núcleo atômico</strong> seria apenas uma <strong>pequena bolinha de gude</strong> colocada na marca do pênalti no centro do gramado! E quase 100% de todo o peso do átomo (prótons e nêutrons) estaria espremido dentro daquela bolinha de gude.</p>
    <p>• E onde estariam os elétrons? Seriam como mosquitinhos minúsculos zumbindo velozmente lá em cima, nas últimas fileiras da arquibancada superior! O espaço entre o gramado e as cadeiras é puro vácuo! Você e tudo o que existe são mais de 99,9999999% de espaço vazio sustentado por forças eletromagnéticas.</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Datação Arqueológica por Carbono-14 ($^{14}C$):</strong> O Carbono-14 é um isótopo radioativo instável assimilado por todos os seres vivos através da alimentação. Ao morrer, a absorção cessa e o $^{14}C$ decai com meia-vida de 5.730 anos, permitindo datar ossadas fósseis e múmias egípcias com alta precisão.</li>
        <li><strong>Medicina Nuclear & Tratamento de Câncer:</strong> O isótopo Iodo-131 ($^{131}I$) é administrado a pacientes para diagnosticar e destruir células tumorais da glândula tireoide, enquanto o Tecnécio-99m realiza cintilografias cardíacas e ósseas.</li>
        <li><strong>Usinas Nucleares de Angra dos Reis (Angra 1 e 2):</strong> Fissão controlada dos núcleos do isótopo Urânio-235 ($^{235}U$) libera calor colossal para ferver água e acionar turbinas elétricas sem queimar 1 gota de petróleo.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Partículas Subatômicas e Semelhanças</h3>
    <div class="box-formula" style="line-height:1.8;">
        <strong>Número Atômico (Z):</strong> Z = número de prótons (identidade do elemento)<br>
        <strong>Número de Massa (A):</strong> A = Z + n  ↔  n = A − Z<br>
        <strong>Em Átomos Eletricamente Neutros:</strong> número de prótons ($p^+$) = número de elétrons ($e^-$)<br>
        <div class="legend">Representação universal: $_Z^A\text{X}$ ou $\text{X}-A$ (Ex: $^{56}_{26}\text{Fe}$ ou $\text{Ferro}-56$).</div>
    </div>
    <p style="margin:12px 0 6px 0; font-size:15px; font-weight:700; color:var(--text-primary);">Mnemônicos das Semelhanças Atômicas:</p>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.8; color:var(--text-secondary);">
        <li><strong>IsótoPos:</strong> Mesmo número de <strong>P</strong>rótons ($Z$). Pertencem obrigatoriamente ao <em>MESMO elemento químico</em>! Ex: $^{12}_6C$ e $^{14}_6C$.</li>
        <li><strong>IsóBaros:</strong> Mesmo número de massa <strong>A</strong> ($B \to A$). São elementos químicos diferentes! Ex: $^{40}_{19}K$ e $^{40}_{20}Ca$.</li>
        <li><strong>IsótoNos:</strong> Mesmo número de <strong>N</strong>êutrons ($n = A - Z$). Ex: $^{11}_5B$ ($n=6$) e $^{12}_6C$ ($n=6$).</li>
        <li><strong>Isoeletrônicos:</strong> Mesmo número total de elétrons ($e^-$). Ex: $^{23}_{11}Na^+$ (10 elétrons) e $^{16}_8O^{2-}$ (10 elétrons).</li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>A banca do CEFET adora afirmar que <em>"os isótopos $^{35}_{17}Cl$ e $^{37}_{17}Cl$ possuem propriedades químicas diferentes porque têm massas diferentes"</em>. <strong>MENTIRA!</strong> As propriedades químicas de um átomo dependem unicamente do seu <strong>número atômico ($Z$) e da sua configuração eletrônica</strong>! Como ambos têm $Z=17$, eles reagem exatamente do mesmo modo químico. O que muda entre isótopos são propriedades FÍSICAS (massa, densidade, taxa de difusão e estabilidade radioativa nuclear).</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> O elemento ferro possui número atômico $Z = 26$. Um dos seus isótopos mais abundantes na crosta terrestre possui número de massa $A = 56$. Determine o número de prótons, nêutrons e elétrons presentes no cátion trivalente desse isótopo, representado por $^{56}_{26}Fe^{3+}$.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Identificação das Variáveis da Notação Atômica</span><br>
        Temos o elemento com $Z = 26$ e $A = 56$, portando carga líquida positiva $+3$.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Determinação de Prótons e Nêutrons</span><br>
        O número de prótons é definido diretamente pelo número atômico: $p = Z = \mathbf{26\text{ prótons}}$.<br>
        O número de nêutrons é dado por $n = A - Z = 56 - 26 = \mathbf{30\text{ nêutrons}}$.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Cálculo dos Elétrons do Íon</span><br>
        No átomo neutro, haveria 26 elétrons ($e^- = p$).<br>
        A carga $+3$ indica perda de 3 elétrons: $e^- = 26 - 3 = \mathbf{23\text{ elétrons}}$.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        A espécie $^{56}_{26}Fe^{3+}$ possui <strong>26 prótons, 30 nêutrons e 23 elétrons</strong>. Prótons e nêutrons no núcleo nunca são alterados em reações químicas normais; apenas os elétrons periféricos participam da ionização.
    </div>
</div>`,
            questions: [
                {
                    type: "text",
                    q: "Quantos nêutrons possui um átomo com Z = 11 e A = 23?",
                    a: ["12"],
                    exp: "n = 23 − 11 = 12 nêutrons."
                }
            ]
        },
        {
            id: "qui-06", title: "6. Eletrosfera, Linus Pauling & Íons", time: "30 min", difficulty: "difícil",
            track: "selecao", prerequisites: ["qui-05"], examTopics: ["Edital Quím. 4.3: Eletrosfera do átomo — níveis eletrônicos", "Edital Quím. 4.4: Íons e espécies isoeletrônicas"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> Os elétrons ficam organizados em níveis (camadas K a Q) e subníveis de energia ($s, p, d, f$). O <em>Diagrama de Linus Pauling</em> dita a ordem diagonal exata que os elétrons devem preencher. <em>Cátion</em> ($+$) perdeu elétrons; <em>Ânion</em> ($-$) ganhou elétrons. <strong>Regra de ouro:</strong> na hora de formar cátion, tire elétrons sempre da camada mais externa (valência)!</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Genialidade de Linus Pauling & A Dança dos Elétrons</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Na década de 1930, o químico norte-americano <strong>Linus Pauling</strong> (uma das únicas quatro pessoas da história a ganhar dois prêmios Nobel não compartilhados) dedicou sua vida a decifrar a natureza das ligações químicas. Ele compreendeu que os átomos não se combinam ao acaso: as propriedades de reatividade dependem exclusivamente da distribuição ordenada dos elétrons em subníveis energéticos.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Pauling desenvolveu o famoso <strong>Diagrama das Diagonais</strong>, que organiza os orbitais atômicos na ordem rigorosa de menor para maior energia. Essa descoberta permitiu compreender desde a condutividade dos metais até a síntese de novos remédios e plásticos modernos.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: O Hotel Atômico & Os Fogos de Copacabana</div>
    <p>• <strong>O Hotel dos Elétrons:</strong> Os elétrons são como hóspedes extremamente preguiçosos e econômicos que querem pagar a diária mais barata possível nos andares mais baixos (menor nível de energia):</p>
    <p>– O quarto <strong>s</strong> tem apenas 1 cama de casal e acomoda no máximo <strong>2 elétrons</strong>.
    <br>– O quarto <strong>p</strong> tem 3 camas e acomoda no máximo <strong>6 elétrons</strong>.
    <br>– O quarto <strong>d</strong> acomoda no máximo <strong>10 elétrons</strong>.
    <br>– O quarto <strong>f</strong> acomoda no máximo <strong>14 elétrons</strong>.
    <br>As setas diagonais do diagrama são o elevador que os elétrons devem seguir obrigatoriamente para não desrespeitar as leis da física!</p>
    <p>• <strong>Os Fogos de Réveillon em Copacabana:</strong> Quando a pólvora explode, transfere calor para os elétrons, que saltam para andares mais altos (estado excitado). Ao retornar para o seu quarto de origem, o elétron devolve o excesso de energia na forma de <strong>luz visível com cor específica</strong>! Sódio gera a luz amarela, estrôncio gera o vermelho rubi e bário gera o verde brilhante!</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Baterias Recarregáveis de Íons de Lítio ($Li^+$):</strong> Funcionam pela transferência reversível de íons de lítio (átomos de lítio que perderam seu único elétron da camada de valência) entre o ânodo de grafite e o cátodo de cobalto em celulares e carros elétricos.</li>
        <li><strong>Lâmpadas Fluorescentes e Lasers Médicos:</strong> Operam pelo salto quântico e decaimento eletrônico em gases nobres (como o Argônio e Neônio), gerando fótons de luz pura monocromática para cirurgias oculares.</li>
        <li><strong>A Salinidade do Suor e Bebidas Isotônicas (Gatorade):</strong> Contêm íons sódio ($Na^+$) e potássio ($K^+$) dissolvidos que conduzem os impulsos elétricos nos neurônios e nas fibras musculares cardíacas.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Diagrama e Regras de Distribuição</h3>
    <div class="box-formula" style="line-height:1.8;">
        <strong>Sequência Diagonal de Energia de Linus Pauling:</strong><br>
        1s² → 2s² → 2p⁶ → 3s² → 3p⁶ → 4s² → 3d¹⁰ → 4p⁶ → 5s² → 4d¹⁰ → 5p⁶ → 6s² → 4f¹⁴ → 5d¹⁰ → 6p⁶ → 7s² → 5f¹⁴ → 6d¹⁰ → 7p⁶<br>
        <div class="legend">Camadas (níveis de energia n = 1 a 7): K(2), L(8), M(18), N(32), O(32), P(18), Q(8).</div>
    </div>
    <ul style="margin:12px 0 0 0; padding-left:20px; font-size:15px; line-height:1.8; color:var(--text-secondary);">
        <li><strong>Camada de Valência (CV):</strong> É a camada mais externa (com maior número quântico principal $n$) ocupada por elétrons.</li>
        <li><strong>Subnível Mais Energético:</strong> É o <em>último subnível</em> preenchido segundo a ordem das diagonais do diagrama (pode não ser o da camada de valência!).</li>
        <li><strong>Íons:</strong>
            <br>– <strong>Cátions ($+$):</strong> Perdem elétrons. <em>ATENÇÃO: os elétrons devem ser retirados SEMPRE da Camada de Valência (a mais externa)!</em>
            <br>– <strong>Ânions ($-$):</strong> Ganham elétrons. Os elétrons entram no subnível incompleto de menor energia disponível.
        </li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>Esta é a questão mais errada de toda a prova de Ciências da Natureza: a distribuição de <strong>cátions de metais de transição</strong>! Veja o Ferro ($Z = 26$):</p>
    <p>• Distribuição neutra: <code>1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶</code>.</p>
    <p>• Subnível mais energético: <code>3d⁶</code>. Mas a <strong>Camada de Valência é a 4ª camada (4s²)</strong>!</p>
    <p>• Para formar o cátion $Fe^{2+}$, o aluno desavisado tira 2 elétrons do final (do $3d^6$ virando $3d^4$). <strong>ERRO CRASSO!</strong> Os elétrons saem sempre da <strong>CAMADA MAIS EXTERNA ($4s^2$)</strong>! A configuração correta de $Fe^{2+}$ é: <code>1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶</code>!</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> O Magnésio ($Z = 12$) é um mineral indispensável ao funcionamento celular. Realize a distribuição eletrônica em ordem crescente de energia para o átomo neutro de magnésio, identifique a camada de valência e escreva a distribuição eletrônica do íon estável $Mg^{2+}$, indicando com qual gás nobre ele se torna isoeletrônico.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Distribuição do Átomo Neutro de Magnésio</span><br>
        Distribuímos 12 elétrons seguindo o diagrama diagonal de Linus Pauling:<br>
        $1s^2 \to 2s^2 \to 2p^6 \to 3s^2$ (Total: $2 + 2 + 6 + 2 = 12\text{ elétrons}$).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Identificação da Camada de Valência</span><br>
        O maior nível ocupado é o nível 3 (camada M). Portanto, a camada de valência é a camada 3, contendo <strong>2 elétrons no subnível $3s^2$</strong>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Formação do Cátion $Mg^{2+}$</span><br>
        A carga $+2$ exige a remoção de 2 elétrons da camada de valência ($3s^2$):<br>
        Configuração do $Mg^{2+}$: $\mathbf{1s^2\text{ }2s^2\text{ }2p^6}$ (total de 10 elétrons restantes).
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão e Estabilidade Eletrônica</span><br>
        Ao perder os 2 elétrons da camada 3, o íon $Mg^{2+}$ passa a ter 8 elétrons na camada 2 ($2s^2 2p^6$), adquirindo estabilidade e tornando-se <strong>isoeletrônico ao gás nobre Neônio ($_{10}Ne$)</strong>.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Um átomo com configuração 1s² 2s² 2p⁶ 3s² possui na sua camada de valência (camada 3):",
                    options: ["2 elétrons", "8 elétrons", "10 elétrons", "12 elétrons"],
                    correct: 0,
                    exp: "2 elétrons no subnível 3s²."
                }
            ]
        },
        {
            id: "qui-07", title: "7. Tabela Periódica & Aplicações no Cotidiano", time: "25 min", difficulty: "médio",
            track: "selecao", prerequisites: ["qui-05", "qui-06"], examTopics: ["Edital Quím. 5.1: Tabela periódica atual", "Edital Quím. 5.2: Símbolos dos elementos", "Edital Quím. 5.3: Períodos e famílias", "Edital Quím. 5.4: Aplicação dos elementos no cotidiano"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> A Tabela Periódica organiza os 118 elementos químicos em ordem crescente de Número Atômico ($Z$). As colunas verticais são as <em>Famílias</em> (reúnem elementos que têm o mesmo número de elétrons de valência e comportamento químico parecido). As linhas horizontais são os <em>Períodos</em> (mostram quantas camadas eletrônicas o átomo possui).</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">O Jogo de Cartas de Mendeleev & A Previsão do Futuro</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Em 1869, o químico siberiano <strong>Dmitri Mendeleev</strong> estava obcecado em encontrar um padrão unificador para os 63 elementos químicos conhecidos na época. Apaixonado por jogos de cartas paciência, ele escreveu o nome, a massa e as características de cada elemento em cartões individuais e passou dias embaralhando-os sobre sua mesa de trabalho.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Ele percebeu que as propriedades químicas se repetiam periodicamente em intervalos regulares. Em um ato de suprema coragem científica, Mendeleev <strong>deixou intencionalmente espaços vazios em sua tabela</strong> e profetizou que ali deveriam existir elementos ainda não descobertos, descrevendo com precisão assustadora a massa, densidade e ponto de fusão do "Eka-Silício" (que anos mais tarde foi descoberto e batizado como <em>Germânio</em>)! Em 1913, o jovem inglês Henry Moseley organizou a tabela pela ordem definitiva do <strong>Número Atômico ($Z$)</strong>.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: O Calendário de Parede & Os Almoços de Família</div>
    <p>A Tabela Periódica é exatamente idêntica ao calendário na parede da sua cozinha:</p>
    <p>• <strong>Linhas Horizontais (Períodos = Semanas do Mês):</strong> Dizer que um elemento está no <strong>3º Período</strong> significa que seus elétrons ocupam <strong>3 camadas eletrônicas (K, L e M)</strong>, assim como a terceira semana do mês reúne os dias que acontecem naquele nível de tempo.</p>
    <p>• <strong>Colunas Verticais (Famílias/Grupos = Dias da Semana):</strong> Olhe para a coluna dos Domingos: em quase todas as casas brasileiras, domingo significa macarronada, futebol e almoço em família. Na Tabela Periódica é igual: todos os elementos da mesma coluna vertical (Família) têm a <strong>mesma quantidade de elétrons na camada de valência</strong> e por isso comportam-se de forma surpreendentemente parecida!</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Semicondutores da Família 14 (Silício e Germânio):</strong> São os materiais com que são fabricados todos os bilhões de transistores microscópicos dos chips de inteligência artificial (Apple Silicon, Nvidia e processadores de celulares).</li>
        <li><strong>Gases Nobres da Família 18:</strong> Como possuem 8 elétrons na valência (regra do octeto), são inertes e não inflamáveis. O Hélio ($He$) é usado em balões e dirigíveis em substituição ao perigoso hidrogênio, e o Argônio ($Ar$) preenche lâmpadas e janelas duplas antirruído.</li>
        <li><strong>Halogênios da Família 17 (Flúor e Cloro):</strong> Ávidos por 1 elétron para estabilizar, o Flúor fortalece o esmalte dentário na água encanada e nas pastas de dente, e o Cloro purifica piscinas e água potável eliminando vírus e bactérias patogênicas.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Famílias Notáveis e Propriedades Periódicas</h3>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.8; color:var(--text-secondary);">
        <li><strong>7 Períodos (Linhas):</strong> Indicam o <em>número de camadas eletrônicas</em> ocupadas.</li>
        <li><strong>18 Grupos/Famílias (Colunas):</strong>
            <br>– <strong>Grupo 1: Metais Alcalinos</strong> ($1e^-$ na valência, $ns^1$): Lítio ($Li$), Sódio ($Na$), Potássio ($K$). Extremamente reativos com água!
            <br>– <strong>Grupo 2: Metais Alcalino-Terrosos</strong> ($2e^-$ na valência, $ns^2$): Magnésio ($Mg$), Cálcio ($Ca$).
            <br>– <strong>Grupo 16: Calcogênios</strong> ($6e^-$ na valência, $ns^2 np^4$): Oxigênio ($O$), Enxofre ($S$).
            <br>– <strong>Grupo 17: Halogênios</strong> ($7e^-$ na valência, $ns^2 np^5$): Flúor ($F$), Cloro ($Cl$), Bromo ($Br$), Iodo ($I$). Formadores de sais.
            <br>– <strong>Grupo 18: Gases Nobres</strong> ($8e^-$ na valência, $ns^2 np^6$, exceto $He$ com 2): Hélio, Neônio, Argônio, Criptônio, Xenônio, Radônio. Estabilidade química máxima.
        </li>
        <li><strong>Classificação dos Elementos:</strong>
            <br>– <em>Metais (maioria):</em> Brilho característico, condutores elétricos e térmicos de excelência, maleáveis (formam lâminas) e dúcteis (formam fios), tendência a doar elétrons (formam cátions).
            <br>– <em>Ametais:</em> Maus condutores, opacos, quebradiços, tendência a receber elétrons (formam ânions).
        </li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>1. <strong>O Hidrogênio ($H$):</strong> Embora esteja desenhado no topo da Família 1 por ter 1 elétron ($1s^1$), o <strong>HIDROGÊNIO NÃO É UM METAL ALCALINO</strong>! Ele é um elemento atípico, um ametal gasoso que não pertence a nenhuma família da Tabela Periódica.</p>
    <p>2. <strong>Família vs Período:</strong> Elementos do mesmo <em>período</em> NÃO possuem propriedades químicas parecidas; eles têm apenas o mesmo número de camadas! Quem possui <strong>propriedades químicas semelhantes são os elementos da MESMA FAMÍLIA (mesma coluna vertical)</strong>!</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Um elemento químico $X$ possui número atômico $Z = 17$. Faça a distribuição eletrônica desse elemento, localize sua posição na Tabela Periódica (período e grupo), identifique sua família e justifique por que ele reage prontamente com o Sódio ($_{11}Na$).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Distribuição Eletrônica de Linus Pauling</span><br>
        Distribuindo 17 elétrons: $1s^2\text{ }2s^2\text{ }2p^6\text{ }3s^2\text{ }3p^5$ ($2 + 2 + 6 + 2 + 5 = 17$).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Localização na Tabela Periódica</span><br>
        – <strong>Período:</strong> A camada mais externa é a camada 3 $\implies$ <strong>3º Período</strong>.<br>
        – <strong>Grupo:</strong> Na camada 3 temos $2 + 5 = 7$ elétrons de valência ($ns^2 np^5$) $\implies$ <strong>Grupo 17 (Família dos Halogênios)</strong>. Trata-se do Cloro ($Cl$)!
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Análise da Reatividade Química com o Sódio</span><br>
        O Sódio ($_{11}Na$: $1s^2 2s^2 2p^6 3s^1$) tem 1 elétron de valência e tendência a doá-lo para ficar estável ($Na^+$). O Cloro possui 7 elétrons e precisa de apenas 1 elétron para completar o octeto com 8 elétrons ($Cl^-$).
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        O elemento $X$ pertence ao <strong>3º período e Grupo 17 (Halogênios)</strong>. Ele reage violentamente com o metal alcalino sódio por meio de ligação iônica, ocorrendo transferência de 1 elétron ($Na^+ + Cl^- \to NaCl$), originando o sal de cozinha estável.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Elementos de uma mesma família na Tabela Periódica possuem em comum:",
                    options: [
                        "O mesmo número de elétrons na camada de valência e propriedades semelhantes",
                        "O mesmo número de massa",
                        "O mesmo número de camadas eletrônicas",
                        "O mesmo número de nêutrons"
                    ],
                    correct: 0,
                    exp: "Mesmo número de elétrons de valência confere comportamento químico semelhante."
                }
            ]
        }
        ]
    },

    /* ─────────────────────────────────────────────────────────────
       5. BIOLOGIA (10 Módulos: 10 Seleção)
       ───────────────────────────────────────────────────────────── */
    {
        id: "bio", name: "Biologia", icon: "🧬",
        modules: [
        {
            id: "bio-01", title: "1. O Trabalho Científico & Método Científico", time: "25 min", difficulty: "fácil",
            track: "selecao", prerequisites: [], examTopics: ["Edital Bio. 1: O trabalho científico"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> A ciência não acredita em achismos ou autoridades: ela testa hipóteses no mundo real através de <em>experimentos controlados</em>. A chave de ouro é comparar sempre um <strong>Grupo Experimental</strong> (que recebe a novidade em teste) com um <strong>Grupo Controle</strong> (que não recebe nada) para ter certeza de que o efeito é real!</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Carne de Redi & O Frasco Pescoço-de-Cisne de Pasteur</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Por mais de dois mil anos, desde Aristóteles, acreditava-se na <strong>Geração Espontânea (Abiogênese)</strong>: a ideia de que seres vivos podiam brotar espontaneamente da matéria inerte (sapos nasciam da lama do pântano e larvas brancas nasciam sozinhas da carne podre). Em 1668, o médico italiano <strong>Francesco Redi</strong> colocou pedaços de carne em frascos abertos e frascos vedados com gaze de algodão. As moscas só puderam pousar e botar ovos nos frascos abertos: nenhuma larva nasceu da carne coberta!
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Dois séculos depois, em 1861, <strong>Louis Pasteur</strong> enterrou a abiogênese de vez usando frascos com gargalo em formato de pescoço de cisne: o caldo de carne fervido manteve-se estéril por meses porque a poeira com micróbios ficava presa nas curvas do vidro. A Biogênese triunfou: <em>todo ser vivo nasce apenas de outro ser vivo preexistente!</em>
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: O Detetive de Polícia & O Grupo Controle</div>
    <p>O método científico é exatamente idêntico a uma investigação criminal de alta complexidade:</p>
    <p>• <strong>A Cena do Crime (Observação e Pergunta):</strong> O detetive chega e constata: <em>"A plantação do morro está murchando. Por quê?"</em>.</p>
    <p>• <strong>O Principal Suspeito (Hipótese):</strong> Ele formula uma resposta provisória e inteligente: <em>"Acho que é a acidez da chuva da fábrica vizinha"</em>.</p>
    <p>• <strong>O Interrogatório Rigoroso (Experimentação Controlada):</strong> Aqui está a mágica: ele pega 100 plantas idênticas.
        <br>– Para 50 plantas ele aplica a água ácida (<strong>Grupo Experimental</strong>).
        <br>– Para as outras 50 plantas ele aplica água pura e limpa na mesma quantidade, temperatura e iluminação (<strong>Grupo Controle</strong>).
        <br>Se as duas turmas murcharem do mesmo jeito, a culpa NÃO era da água ácida! O grupo controle é a sua régua de verdade para não se autoenganar!
    </p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Ensaios Clínicos de Vacinas na Fiocruz e Butantan:</strong> Antes de liberar uma vacina contra dengue ou COVID para milhões de brasileiros, aplicam-se testes <em>Duplo-Cego Randomizados</em> com Grupo Controle recebendo placebo (soro fisiológico inócuo) para comprovar a eficácia estatística real.</li>
        <li><strong>Combate a Fake News Científicas na Internet:</strong> Permite desmascarar promessas fraudulentas de pílulas emagrecedoras milagrosas ou "águas energizadas" que nunca apresentaram testes metodológicos controlados e auditáveis por pares.</li>
        <li><strong>Testes de Algoritmos A/B no Instagram e TikTok:</strong> As redes sociais mostram uma nova tela para 50% dos usuários (grupo teste) e mantêm a antiga para os outros 50% (grupo controle) para medir cientificamente qual gera maior retenção de tempo.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: As 6 Etapas do Método Científico</h3>
    <ol style="margin:0; padding-left:20px; font-size:15px; line-height:1.8; color:var(--text-secondary);">
        <li><strong>Observação:</strong> Exame atento e sistemático de um fenômeno natural.</li>
        <li><strong>Questionamento / Problematização:</strong> Formulação de uma pergunta clara e objetiva sobre o fenômeno.</li>
        <li><strong>Hipótese:</strong> Proposição de uma resposta lógica e plausível que possa ser <em>testada e falseada</em> por experimentos.</li>
        <li><strong>Experimentação Controlada:</strong> Teste prático isolando rigorosamente a variável de interesse, exigindo obrigatoriamente a presença de um <strong>Grupo Controle</strong> como padrão de referência.</li>
        <li><strong>Análise de Dados:</strong> Interpretação estatística dos resultados e confronto com a hipótese inicial.</li>
        <li><strong>Conclusão e Divulgação:</strong> Se a hipótese for confirmada repetidamente por diferentes laboratórios independentes pelo mundo, ela contribui para a construção de uma <strong>Teoria Científica</strong>.</li>
    </ol>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>1. <strong>O Significado de "Teoria" na Ciência:</strong> No senso comum, as pessoas dizem: <em>"Isso é só uma teoria, não está provado"</em>. No CEFET, isso é um <strong>ERRO GRAVE</strong>! Para a ciência, "Teoria" não é palpite (palpite é hipótese inicial). Uma Teoria Científica (como a Teoria da Gravidade ou Teoria da Evolução) é o patamar mais alto do conhecimento humano: uma explicação robusta, exaustivamente comprovada por milhares de experimentos e evidências concretas!</p>
    <p>2. <strong>A Função do Grupo Controle:</strong> Ele NÃO serve para acelerar o resultado; ele serve única e exclusivamente de <strong>PARÂMETRO COMPARATIVO</strong> para isolar o efeito da variável testada.</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Um pesquisador da Embrapa desconfia de que uma nova bactéria fijadora de nitrogênio acelera o crescimento de mudas de feijão. Ele separa 200 sementes idênticas e as divide em dois lotes de 100 sementes: no Lote 1, inocula a bactéria nas sementes; no Lote 2, planta as sementes sem a bactéria, sob as mesmas condições de solo, rega e insolação. Ao final de 30 dias, as plantas do Lote 1 cresceram 40% mais que as do Lote 2. Identifique a hipótese testada, o papel do Lote 2 e a conclusão do estudo.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Identificação das Variáveis e da Hipótese</span><br>
        A variável manipulada no estudo é a presença da bactéria inoculada. A <strong>Hipótese</strong> elaborada foi: <em>"A inoculação da bactéria fixadora de nitrogênio promove maior crescimento das mudas de feijão"</em>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Análise dos Grupos Experimentais</span><br>
        – <strong>Lote 1:</strong> Constitui o <em>Grupo Experimental</em>, submetido ao tratamento investigado.<br>
        – <strong>Lote 2:</strong> Constitui o <strong>Grupo Controle</strong>, mantido nas mesmas condições ideais sem o micro-organismo para servir de referência basal neutra.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Avaliação Comparativa dos Resultados</span><br>
        Como todas as outras condições foram perfeitamente emparelhadas (solo, luz e água idênticos), a diferença de 40% de crescimento a mais só pode ter decorrido da presença da bactéria.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        O Lote 2 funcionou como <strong>Grupo Controle comparativo</strong>. A hipótese foi experimentalmente <strong>corroborada</strong>, demonstrando o efeito benéfico da bactéria na adubação biológica.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Em um experimento científico para testar a eficácia de uma nova vacina, o papel do Grupo Controle é:",
                    options: [
                        "Receber uma dose dobrada",
                        "Servir de padrão comparativo sem o princípio ativo em teste",
                        "Garantir a contaminação voluntária",
                        "Acelerar a mutação viral"
                    ],
                    correct: 1,
                    exp: "O grupo controle serve de referência de comparação."
                }
            ]
        },
        {
            id: "bio-02", title: "2. A Célula: Estrutura, Organelas & Metabolismo", time: "25 min", difficulty: "médio",
            track: "selecao", prerequisites: [], examTopics: ["Edital Bio. 2: Estudo das células", "Edital Bio. 2.1: Estrutura (membrana plasmática, citoplasma e núcleo), constituintes químicos e metabolismo celular"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> A célula é uma microcidade operando 24 horas por dia: a <em>Membrana Plasmática</em> é a portaria alfandegária que escolhe quem entra e sai; o <em>Núcleo</em> é a prefeitura com os arquivos mestres do DNA; as <em>Mitocôndrias</em> são as usinas de energia (fabricam moedas de ATP respirando oxigênio); e os <em>Ribossomos</em> são as montadoras de proteínas vitais.</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Cortiça de Hooke & A Consagração da Teoria Celular</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Em 1665, em Londres, o cientista polímata <strong>Robert Hooke</strong> lapidou lentes e apontou seu microscópio para uma lasca finíssima de cortiça (casca de carvalho seco). Ele enxergou uma rede geométrica de pequenos favos ocos que lembravam as celas austeras dos monges nos monastérios, batizando essas estruturas de <em>células</em> (pequenas celas).
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Em 1839, o botânico Matthias Schleiden e o zoólogo Theodor Schwann uniram forças para proclamar a célebre <strong>Teoria Celular</strong>: <em>"Todos os organismos vivos da Terra, de uma microscópica ameba a uma gigantesca baleia-azul, são formados por células, que representam a unidade morfológica e fisiológica fundamental da vida!"</em>
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: A Célula como uma Metrópole Industrial</div>
    <p>Para você nunca mais esquecer as funções das organelas na prova do CEFET:</p>
    <p>• <strong>Muralha com Catraca Eletrônica (Membrana Plasmática):</strong> Feita de uma bicamada de fosfolipídios com proteínas receptoras. Ela tem <em>permeabilidade seletiva</em>: deixa a água e a glicose entrarem, mas barra toxinas e invasores perigosos!</p>
    <p>• <strong>Prefeitura & Cofre de Segurança Máxima (Núcleo):</strong> Guarda os 46 cromossomos de DNA humano contendo o manual de instruções completo de quem você é.</p>
    <p>• <strong>Usina Termelétrica (Mitocôndria):</strong> Queima combustível orgânico (glicose) na presença de $O_2$ para recarregar as "baterias moleculares" da vida chamadas <strong>ATP (Adenosina Trifosfato)</strong>.</p>
    <p>• <strong>Operários das Fábricas (Ribossomos):</strong> Leem o código do RNA mensageiro e unem aminoácidos para sintetizar queratina, colágeno, insulina e anticorpos.</p>
    <p>• <strong>Transportadoras e Correios (Complexo Golgiense):</strong> Modifica, empacota em vesículas e exporta proteínas para fora da célula.</p>
    <p>• <strong>Caminhões de Coleta de Lixo com Triturador Ácido (Lisossomos):</strong> Bolsas de enzimas digestivas que destroem bactérias fagocitadas e reciclam organelas velhas defeituosas (autofagia).</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>O Veneno Mortífero do Cianeto:</strong> Utilizado em crimes e acidentes industriais, o cianeto bloqueia uma enzima respiratória no interior das mitocôndrias. A célula perde a capacidade de produzir ATP instantaneamente, levando à morte por asfixia celular em poucos minutos mesmo com os pulmões cheios de oxigênio!</li>
        <li><strong>Transplantes e Tipagem Sanguínea (ABO/Rh):</strong> O que determina se o sangue de uma pessoa é A, B ou O são açúcares e glicoproteínas na superfície externa da <strong>membrana plasmática</strong> dos glóbulos vermelhos (hemácias). Se o receptor não tiver o mesmo marcador, os anticorpos destroem as células estranhas.</li>
        <li><strong>Engenharia de Alface e Frutas Hidropônicas:</strong> Depende do entendimento da <em>turgidez celular</em> mantida pelo <strong>vacúolo central</strong> das células vegetais, que absorve água por osmose mantendo as folhas crocantes e firmes.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Classificação e Diferenças Cruciais</h3>
    <table class="comp-table" style="width:100%; margin-top:10px; font-size:14px;">
        <tr style="background:var(--card-bg-header);"><th>Critério</th><th>Célula Procarionte (Bactérias)</th><th>Célula Eucarionte Animal</th><th>Célula Eucarionte Vegetal</th></tr>
        <tr><td><strong>Núcleo (Carioteca)</strong></td><td>Ausente (DNA solto no citoplasma)</td><td><strong>Presente com envoltório nuclear</strong></td><td><strong>Presente com envoltório nuclear</strong></td></tr>
        <tr><td><strong>Organelas Membranosas</strong></td><td>Ausentes (possui apenas ribossomos)</td><td>Presentes (mitocôndrias, golgi, lisossomos)</td><td>Presentes (mitocôndrias, cloroplastos, golgi)</td></tr>
        <tr><td><strong>Parede Celular</strong></td><td>Presente (de peptideoglicano)</td><td><strong>Totalmente Ausente</strong></td><td><strong>Presente (de celulose rígida)</strong></td></tr>
        <tr><td><strong>Cloroplastos (Fotossíntese)</strong></td><td>Ausentes</td><td>Ausentes</td><td><strong>Presentes (com clorofila verde)</strong></td></tr>
        <tr><td><strong>Vacúolo Central</strong></td><td>Ausente</td><td>Ausente (apenas microvesículas)</td><td><strong>Presente e Gigante (controla água)</strong></td></tr>
    </table>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>1. <strong>Bactérias NÃO possuem mitocôndrias nem núcleo!</strong> A banca do CEFET descreve um organismo unicelular que realiza respiração e pergunta qual organela ele usa. Os alunos desatentos marcam "mitocôndria". Se for uma bactéria, a resposta está ERRADA! As bactérias respiram através de enzimas associadas à sua própria membrana plasmática.</p>
    <p>2. <strong>Célula Vegetal TEM Mitocôndria SIM!</strong> Muitos alunos acham que "planta tem cloroplasto e animal tem mitocôndria". <strong>CUIDADO!</strong> As plantas realizam fotossíntese nos cloroplastos para produzir glicose, mas precisam queimar essa glicose nas <strong>MITOCÔNDRIAS</strong> dia e noite para se manterem vivas!</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Um técnico de laboratório examinou no microscópio óptico do CEFET duas lâminas biológicas anônimas (Lâmina A e Lâmina B). Na Lâmina A, observou células com núcleo bem delimitado, presença de volumoso vacúolo central e espessa parede celular externa. Na Lâmina B, observou células esféricas flexíveis sem parede celular, repletas de mitocôndrias e lisossomos. Identifique o tipo de organismo a que pertence cada lâmina e justifique pelas organelas diagnósticas.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Análise das Estruturas da Lâmina A</span><br>
        A presença de núcleo organizado exclui procariontes (bactérias). A conjugação de <strong>parede celular</strong> e <strong>vacúolo central de suco celular</strong> é a assinatura inequívoca do Reino Vegetal (Plantae).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Análise das Estruturas da Lâmina B</span><br>
        A ausência completa de parede celular rígida aliada à riqueza de organelas digestivas (lisossomos) e respiratórias (mitocôndrias) caracteriza uma linhagem do Reino Animal (Animalia).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Confronto Diagnóstico</span><br>
        Lâmina A: Eucarionte Vegetal.<br>
        Lâmina B: Eucarionte Animal.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        A Lâmina A corresponde a um tecido <strong>vegetal</strong> (como folhas ou raízes de plantas) e a Lâmina B corresponde a um tecido <strong>animal</strong> (como epitélio ou tecido conjuntivo humano).
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "A organela celular responsável pela respiração celular aeróbica e produção de ATP é a:",
                    options: ["Ribossomo", "Mitocôndria", "Complexo Golgiense", "Lisossomo"],
                    correct: 1,
                    exp: "Mitocôndria."
                }
            ]
        },
        {
            id: "bio-03", title: "3. Os 5 Reinos & A Biologia dos Vírus", time: "25 min", difficulty: "fácil",
            track: "selecao", prerequisites: ["bio-02"], examTopics: ["Edital Bio. 4.2: Características gerais dos grandes grupos dos seres vivos (moneras, protistas, fungos, vegetais e animais)"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> Os seres vivos dividem-se em 5 grandes reinos: <em>Monera</em> (bactérias), <em>Protista</em> (protozoários e algas), <em>Fungi</em> (cogumelos e mofos), <em>Plantae</em> (vegetais) e <em>Animalia</em> (animais). Já os <strong>Vírus</strong> ficam de fora: são partículas <em>acelulares</em> que não comem, não respiram e só conseguem se multiplicar invadindo células hospedeiras como piratas genéticos!</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">O Filtro de Chamberland & A Descoberta dos Vírus</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        No final do século XIX, os botânicos enfrentavam uma praga devastadora que queimava as folhas das plantações de tabaco (o mosaico do tabaco). Em 1892, o russo <strong>Dmitri Ivanovsky</strong> triturou as folhas doentes e passou o suco por filtros de porcelana ultraporosa de Chamberland, com furos microscópicos capazes de reter qualquer bactéria conhecida.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Para seu espanto, o líquido filtrado continuava transmitindo a doença fatal para plantas saudáveis! Tratava-se de um novo tipo de entidade infecciosa centenas de vezes menor do que qualquer bactéria: o químico holandês Martinus Beijerinck batizou o líquido de <em>vírus</em> (palavra latina para <em>veneno</em>). Nascia a ciência da Virologia!
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: O Pen Drive Hackeador & O Pirata sem Barco</div>
    <p>• <strong>Por que os Vírus são Acelulares?</strong> Um vírus fora do corpo é como um <strong>pen drive jogado no fundo de uma gaveta</strong>: ele é matéria inanimada, não respira, não se mexe e não consome energia (não tem metabolismo próprio!).</p>
    <p>• <strong>A Invasão Pirata:</strong> Mas se você espetar esse pen drive na porta USB de um computador potente (a célula viva hospedeira), o código malicioso do vírus sequestra o sistema operacional da máquina, desliga as tarefas normais da célula e obriga a fábrica celular a produzir milhares de novos pen drives infectados até a célula explodir! Por isso são chamados de <strong>parasitas intracelulares obrigatórios</strong>.</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Epidemias Urbanas no Rio de Janeiro (Dengue, Zika, Chikungunya):</strong> Doenças causadas por vírus transmitidos pela picada da fêmea do mosquito <em>Aedes aegypti</em>. O combate mais eficaz baseia-se na eliminação de criadouros de água parada.</li>
        <li><strong>Fungos na Indústria Farmacêutica (Penicilina) e Panificação:</strong> O antibiótico penicilina que salvou milhões de vidas na Segunda Guerra Mundial foi descoberto acidentalmente por Alexander Fleming a partir do fungo <em>Penicillium notatum</em>; e as leveduras (fungos unicelulares) realizam fermentação alcoólica para fazer o pão francês crescer e produzir cervejas.</li>
        <li><strong>Uso de Vírus como Terapia Gênica:</strong> Cientistas removem o código perigoso de vírus (como o adenovírus) e usam sua carcaça como um veículo microscópico de entrega (vetor viral) para introduzir genes sadios dentro de células com doenças hereditárias raras.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Os 5 Reinos dos Seres Vivos</h3>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.8; color:var(--text-secondary);">
        <li><strong>1. Reino Monera:</strong> Unicelulares e <strong>Procariontes</strong> (sem núcleo). Autótrofos ou heterótrofos. <em>Exemplos: bactérias e cianobactérias</em>.</li>
        <li><strong>2. Reino Protista (Protoctista):</strong> Unicelulares ou pluricelulares simples, <strong>Eucariontes</strong>. Subdividido em:
            <br>– <em>Protozoários:</em> Heterótrofos unicelulares (Ameba, Paramécio, Tripanossoma causador de Chagas).
            <br>– <em>Algas:</em> Autótrofas fotossintetizantes (produtoras da maior parte do oxigênio atmosférico mundial).
        </li>
        <li><strong>3. Reino Fungi:</strong> Eucariontes, <strong>100% Heterótrofos por Absorção</strong>. Parede celular de <strong>quitina</strong> (não celulose!). Importância ecológica mestra como <em>decompositores</em> de matéria orgânica. <em>Exemplos: cogumelos, bolores de pão e leveduras</em>.</li>
        <li><strong>4. Reino Plantae:</strong> Pluricelulares, eucariontes, <strong>Autótrofos fotossintetizantes</strong> com parede celular de celulose e cloroplastos.</li>
        <li><strong>5. Reino Animalia:</strong> Pluricelulares, eucariontes, <strong>Heterótrofos por Ingestão</strong>, com locomoção ativa na imensa maioria.</li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>1. <strong>Fungos NÃO são Plantas e NÃO fazem fotossíntese!</strong> No passado os cogumelos eram classificados como "plantas sem clorofila". Hoje isso é considerado erro grosseiro: fungos são <strong>heterótrofos</strong> e armazenam glicogênio como reserva energética (exatamente como nós, animais)!</p>
    <p>2. <strong>Antibióticos NÃO matam vírus!</strong> Antibióticos destroem componentes exclusivos de bactérias (como a parede celular de peptideoglicano ou os ribossomos bacterianos). Tomar antibiótico para curar gripe, resfriado ou dengue é absolutamente inútil e perigoso, servindo apenas para selecionar superbactérias resistentes.</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Um médico do posto de saúde atendeu três pacientes com diferentes quadros infecciosos: o Paciente 1 contraiu tétano (causado por <em>Clostridium tetani</em>); o Paciente 2 contraiu sarampo; o Paciente 3 contraiu micose de pele (pé-de-atleta). Classifique os agentes causadores de cada doença em seus respectivos grupos biológicos e identifique qual deles não pertence a nenhum dos cinco reinos da vida.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Análise do Paciente 1 (Tétano)</span><br>
        O <em>Clostridium tetani</em> é uma bactéria bacilar anaeróbia esporulada. Pertence ao <strong>Reino Monera</strong> (organismos procariontes).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Análise do Paciente 2 (Sarampo)</span><br>
        O sarampo é causado pelo vírus do sarampo (Morbillivirus). Por ser uma entidade <strong>acelar</strong> sem organização celular nem metabolismo próprio, os vírus <strong>não são incluídos em nenhum dos 5 reinos de Whittaker</strong>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Análise do Paciente 3 (Micose)</span><br>
        A micose é causada por fungos dermatófitos filamentosos. Pertence ao <strong>Reino Fungi</strong> (eucariontes heterótrofos).
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        O tétano é <strong>bacteriano (Monera)</strong>, o sarampo é <strong>viral (acelular, fora dos 5 reinos)</strong> e a micose é <strong>fúngica (Fungi)</strong>.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "As bactérias são os únicos organismos vivos pertencentes ao reino:",
                    options: ["Protista", "Fungi", "Monera", "Plantae"],
                    correct: 2,
                    exp: "Reino Monera (procariontes)."
                }
            ]
        },
        {
            id: "bio-04", title: "4. Genética Mendeliana, Hereditariedade & Biotecnologia", time: "30 min", difficulty: "difícil",
            track: "selecao", prerequisites: ["bio-02"], examTopics: ["Edital Bio. 3: Conceitos básicos de genética", "Edital Bio. 3.1: Noções de engenharia genética e biotecnologia", "Edital Bio. 10: Reprodução humana e hereditariedade"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> Para cada característica (cor dos olhos, albinismo, tipo sanguíneo), você recebe duas cartas genéticas (alelos): uma do pai e uma da mãe. O alelo <em>Dominante</em> ($A$) se manifesta com apenas 1 cópia; o <em>Recessivo</em> ($a$) precisa de dose dupla ($aa$). No cruzamento entre dois heterozigotos ($Aa \\times Aa$), a probabilidade de nascer recessivo é sempre de **25% (1 em 4)**!</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">O Jardim de Ervilhas de Mendel & O Nascimento da Genética</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Em 1865, no mosteiro de São Tomás em Brno (República Tcheca), o monge e matemático <strong>Gregor Johann Mendel</strong> realizava cruzamentos minuciosos com mais de 28.000 pés de ervilhas-de-cheiro (*Pisum sativum*). Ao cruzar plantas puras de sementes amarelas com sementes verdes, a 1ª geração de filhos ($F_1$) nasceu 100% amarela! O verde havia desaparecido misteriosamente.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Mas ao deixar essas plantas amarelas se autofecundarem ($F_2$), a cor verde reapareceu intacta na proporção exata de 3 amarelas para 1 verde! Mendel decifrou o enigma antes mesmo de alguém saber o que era cromossomo ou DNA: os traços são transmitidos por <strong>partículas hereditárias separadas (genes/alelos)</strong>, estabelecendo a <strong>1ª Lei de Mendel (Segregação Independente dos Fatores)</strong>.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: O Baralho das Cartas Hereditárias</div>
    <p>Pense nos seus genes como cartas de baralho recebidas em uma mão de pôquer genético:</p>
    <p>• Você recebe obrigatoriamente <strong>1 carta do seu pai e 1 carta da sua mãe</strong> para cada traço do seu corpo.</p>
    <p>• <strong>Alelo Dominante (A - O Ás de Espadas Barulhento):</strong> Basta você ter recebido 1 única cópia dele ($AA$ ou $Aa$) para ele impor sua vontade no corpo! (Exemplo: pigmentação normal da pele, cabelos escuros, polidactilia).</p>
    <p>• <strong>Alelo Recessivo (a - A Carta Tímida):</strong> Ele só tem coragem de se manifestar e aparecer no espelho se você receber a dose dupla, uma do pai E outra da mãe ($aa$, homozigoto recessivo)! Se vier acompanhado de um $A$ maiúsculo ($Aa$), ele fica calado e invisível, mas continua vivo no seu DNA para passar aos seus filhos!</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>Aconselhamento Genético Pré-Natal:</strong> Ajuda casais a calcular a probabilidade estatística de terem filhos com doenças genéticas recessivas graves (como anemia falciforme, fibrose cística e albinismo).</li>
        <li><strong>Insulina Humana Sintética em Laboratório (Biotecnologia):</strong> Antigamente, diabéticos usavam insulina extraída do pâncreas de porcos abatidos. Hoje, cientistas isolaram o gene da insulina humana e o introduziram em bactérias <em>Escherichia coli</em> (organismos geneticamente modificados / transgênicos), que produzem insulina 100% humana pura a custo acessível.</li>
        <li><strong>Plantas Transgênicas (Milho e Soja Bt):</strong> Receberam um gene da bactéria <em>Bacillus thuringiensis</em> que produz uma proteína inseticida natural nas folhas, dispensando a aplicação de toneladas de agrotóxicos químicos no meio ambiente.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: O Cruzamento Clássico de Heterozigotos (Aa × Aa)</h3>
    <div class="box-formula" style="line-height:1.8;">
        <strong>Quadro de Punnett (Cruzamento de Pais Portadores Aa × Aa):</strong><br>
        • Gametas paternos: 50% A, 50% a  |  Gametas maternos: 50% A, 50% a<br>
        • Combinações Genotípicas: 1 AA (25%) : 2 Aa (50%) : 1 aa (25%)  $\to$  <strong>Proporção 1:2:1</strong><br>
        • Manifestação Fenotípica: 75% Fenótipo Dominante (A_) vs 25% Fenótipo Recessivo (aa)  $\to$  <strong>Proporção 3:1</strong>
    </div>
    <ul style="margin:12px 0 0 0; padding-left:20px; font-size:15px; line-height:1.8; color:var(--text-secondary);">
        <li><strong>Genótipo:</strong> A constituição genética de alelos do indivíduo ($AA, Aa, aa$).</li>
        <li><strong>Fenótipo:</strong> As características observáveis físicas e fisiológicas resultantes da interação do genótipo com o ambiente ($F = G + A$).</li>
        <li><strong>Homozigoto (Puro):</strong> Possui alelos idênticos para o caráter ($AA$ ou $aa$).</li>
        <li><strong>Heterozigoto (Híbrido):</strong> Possui alelos diferentes para o caráter ($Aa$).</li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>A clássica pergunta de probabilidade: <em>"Um casal heterozigoto já teve três filhos com pigmentação normal de pele. Qual é a chance de o quarto filho nascer albino?"</em>. O candidato desatento pensa: <em>"Já nasceram 3 normais, agora a chance do próximo ser albino aumentou!"</em>. <strong>NÃO CAIA NESSA ILUSÃO!</strong> Cada gestação é um evento biológico estocástico <strong>INDEPENDENTE</strong>: a probabilidade para o quarto filho é <strong>rigorosamente a mesma de 25% (1 em 4)</strong>! O útero e os espermatozoides não têm memória de eventos passados.</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> O albinismo óculocutâneo é uma condição genética autossômica recessiva ($aa$). Um casal, ambos com pigmentação de pele normal, teve uma primeira filha com albinismo. Determine o genótipo dos pais e calcule a probabilidade de o casal ter uma segunda filha que seja do sexo feminino e albina.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Dedução do Genótipo dos Pais</span><br>
        A filha albina possui genótipo homozigoto recessivo ($aa$). Ela teve que herdar obrigatoriamente um alelo $a$ do pai e um alelo $a$ da mãe. Como ambos os pais têm pigmentação normal (possuem o alelo dominante $A$), ambos são <strong>heterozigotos portadores ($Aa$)</strong>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Probabilidade Genética do Albinismo</span><br>
        No cruzamento $Aa \times Aa$, a probabilidade de nascer uma criança com albinismo ($aa$) é dada por $P(albinismo) = \frac{1}{4}\text{ (25\%)}$.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Regra do E (Multiplicação de Eventos Independentes)</span><br>
        O problema exige que a criança seja do <strong>sexo feminino E albina</strong>.<br>
        A chance de nascer mulher é $P(feminino) = \frac{1}{2}\text{ (50\%)}$.<br>
        Pela regra do 'E': $P(feminino \cap albina) = \frac{1}{2} \cdot \frac{1}{4} = \mathbf{\frac{1}{8}\text{ (12,5\%) Wal}}$.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        Os pais possuem genótipo $Aa$. A probabilidade de conceberem uma menina albina na próxima gravidez é de <strong>1/8 (12,5%)</strong>.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Qual a probabilidade de um casal heterozigoto (Aa × Aa) ter uma criança albina (aa)?",
                    options: ["100%", "75%", "50%", "25%"],
                    correct: 3,
                    exp: "1 em 4 combinações possíveis (25%)."
                }
            ]
        },
        {
            id: "bio-05", title: "5. Evolução Biológica & Seleção Natural", time: "25 min", difficulty: "médio",
            track: "selecao", prerequisites: [], examTopics: ["Edital Bio. 4: História da Terra e evolução da vida no planeta", "Edital Bio. 4.1: Evidências evolutivas"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> <em>Lamarck</em> acreditava que o esforço do animal em vida modificava o corpo e passava para os filhos (ideia do uso e desuso, comprovada errada). <em>Darwin</em> provou a <strong>Seleção Natural</strong>: os seres vivos já nascem diferentes entre si por acaso; quando o ambiente muda, sobrevivem e se reproduzem aqueles indivíduos que já tinham a característica vantajosa!</p>`,
            content: `
<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">A Viagem do Beagle a Galápagos & O Fim do Fixismo</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Até a metade do século XIX, a humanidade acreditava no <em>Fixismo</em>: a crença de que todas as espécies de plantas e animais haviam sido criadas prontas e imutáveis desde a origem do mundo. Em 1831, o jovem naturalista inglês <strong>Charles Darwin</strong> embarcou no navio HMS Beagle em uma expedição de cinco anos ao redor do globo.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Ao chegar ao arquipélago isolado de Galápagos (Equador), Darwin notou que cada ilha possuía tentilhões com formatos de bico radicalmente diferentes, adaptados a quebrar sementes duras, sugar flores ou caçar insetos sob cascas. Em 1859, ele publicou a obra-prima <em>A Origem das Espécies</em>: os seres vivos mudam ao longo de milhões de anos guiados pela <strong>Seleção Natural</strong>!
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: O Concurso Público das Girafas: Lamarck vs Darwin</div>
    <p>A batalha das ideias evolutivas explicada de forma simples e definitiva:</p>
    <p>• <strong>A Hipótese de Lamarck (Uso e Desuso):</strong> Dizia que a girafa de pescoço curto não alcançava as folhas do topo das copas. De tanto esticar o pescoço todo dia para comer (Uso), seu pescoço foi crescendo 10 centímetros durante a vida. Ao ter filhotes, eles já nasceram com esses 10 cm a mais (Herança dos Caracteres Adquiridos). <em>(Se isso fosse verdade, quem faz musculação e fica forte teria bebês que já nasceriam musculosos!).</em></p>
    <p>• <strong>A Verdade de Darwin (Seleção Natural):</strong> Na população original de girafas, já existiam por variações biológicas naturais girafas com pescoços curtos, médios e compridos! Quando as folhas baixas acabaram durante uma terrível seca, as girafas que <em>por acaso já tinham pescoço longo</em> conseguiram se alimentar e sobreviveram, enquanto as outras morreram de fome. As sobreviventes se reproduziram, transmitindo seus genes de pescoço longo para as próximas gerações!</p>
    <p>• <strong>Regra de Ouro:</strong> O meio ambiente <strong>NÃO CRIA</strong> a característica; o meio ambiente apenas <strong>SELECIONA</strong> os indivíduos mais aptos que já a possuem!</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Usamos isso na Vida Real & Tecnologia?</h3>
    </div>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--text-secondary);">
        <li><strong>O Nascimento das Superbactérias Hospitalares (KPC):</strong> O uso incorreto de antibióticos por prazos curtos não "ensina" a bactéria a ficar forte: ele extermina as bactérias fracas e sensíveis, deixando livres e sem concorrência as raras bactérias mutantes resistentes prévias, que proliferam e causam infecções intratáveis!</li>
        <li><strong>Resistência de Pragas Agrícolas a Inseticidas:</strong> Pulverizar o mesmo agrotóxico por anos seguidos atua como uma forte pressão de seleção natural que elimina os insetos vulneráveis e seleciona populações de lagartas resistentes.</li>
        <li><strong>Algoritmos Genéticos em Ciência da Computação:</strong> Engenheiros de software utilizam o conceito darwiniano de mutação e seleção dos mais aptos para otimizar rotas de trânsito e treinar redes neurais de inteligência artificial.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px;">
    <h3><span class="step-num">🔬</span> Teoria Descomplicada: Evidências da Evolução e Neodarwinismo</h3>
    <ul style="margin:0; padding-left:20px; font-size:15px; line-height:1.8; color:var(--text-secondary);">
        <li><strong>Fósseis:</strong> Restos ou vestígios petrificados de seres vivos pré-históricos que comprovam transformações anatômicas graduais nas linhagens.</li>
        <li><strong>Órgãos Homólogos (Divergência Evolutiva):</strong> Mesma origem embrionária e mesma arquitetura óssea fundamental, embora com funções diferentes. <em>Exemplo: o braço humano, a nadadeira da baleia, a pata do cavalo e a asa do morcego</em> (evidenciam ancestral comum!).</li>
        <li><strong>Órgãos Análogos (Convergência Evolutiva):</strong> Mesma função biológica (voar, nadar), mas com origens embrionárias totalmente diferentes. <em>Exemplo: a asa da ave (ossos e penas) e a asa da borboleta (quitina)</em>.</li>
        <li><strong>Órgãos Vestigiais:</strong> Estruturas atrofiadas que eram funcionais em ancestrais, como o apêndice cecal e o cóccix no corpo humano.</li>
        <li><strong>Neodarwinismo (Teoria Sintética da Evolução):</strong> Une a Seleção Natural de Darwin às descobertas da Genética, estabelecendo que a variabilidade da população surge por <strong>Mutações Genéticas espontâneas</strong> e <strong>Recombinação Gênica (Crossing-over na Meiose)</strong>.</li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Fatal da Banca do CEFET</div>
    <p>A banca do CEFET adora apresentar frases teleológicas com armadilhas sutis, como: <em>"Os ursos polares desenvolveram pelos brancos para se camuflarem na neve"</em>. <strong>ERRADO! ISSO É LAMARCKISMO!</strong> O ser vivo não "desenvolve para se adaptar". A explicação correta segundo a Seleção Natural é: <em>"Mutações aleatórias originaram pelos brancos em alguns ursos; no ambiente polar nevado, esses indivíduos tiveram maior facilidade para caçar focas sem serem vistos e sobreviveram melhor, passando essa característica aos descendentes!"</em></p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Durante a Revolução Industrial na Inglaterra, observou-se que mariposas da espécie <em>Biston betularia</em> que viviam nos troncos de árvores passaram de uma maioria com asas claras para uma esmagadora maioria com asas escuras (melânicas) nas cidades poluídas por fuligem de carvão. Explique o fenômeno comparando a visão de Lamarck com a explicação neodarwinista aceita pela ciência.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Contextualização Ecológica do Fenômeno (Melanismo Industrial)</span><br>
        A fuligem industrial escureceu os troncos claros das árvores e cobriu os líquens. Pássaros predadores caçam as mariposas que contrastam visualmente com os troncos.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: A Explicação Errada de Lamarck</span><br>
        Segundo Lamarck, as mariposas claras sentiram a necessidade de se camuflar na sujeira escura e, pelo esforço corporal contínuo, escureceram suas asas durante a vida e transmitiram a cor escura aos seus descendentes.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: A Explicação Neodarwinista Correta</span><br>
        Mutações casuais já haviam produzido indivíduos melânicos (escuros) na população antes da poluição. Quando os troncos ficaram pretos de fuligem, as mariposas claras tornaram-se alvos fáceis e foram predadas em massa pelos pássaros. As mariposas escuras ficaram camufladas, sobreviveram e reproduziram-se mais.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão Contextualizada</span><br>
        O aumento de mariposas escuras ocorreu por <strong>Seleção Natural da variabilidade genética preexistente</strong>. O meio ambiente atuou apenas como filtro seletivo e não como causador direto da mutação na cor das asas.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "A teoria da Seleção Natural foi formulada por:",
                    options: ["Lamarck", "Charles Darwin", "Mendel", "Pasteur"],
                    correct: 1,
                    exp: "Charles Darwin."
                }
            ]
        },
        {
            id: "bio-06", title: "6. Ecologia: Cadeias, Teias, Populações & Biomas", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: [], examTopics: ["Edital Bio. 5: Biodiversidade e ecossistemas", "Edital Bio. 5.1: Interações entre os seres vivos — habitat, nicho ecológico, cadeias e teias alimentares, populações, comunidades e biomas"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> A energia do Sol flui em linha reta: Produtores (plantas) → Consumidores → Decompositores. Na poluição por metais pesados (como mercúrio), ocorre <em>Magnificação Trófica</em>: o veneno se acumula em concentração máxima nos predadores do topo da cadeia!</p>`,
            content: `
<div class="card">
    <h3><span class="step-num">2</span> Teoria Descomplicada & Relações Ecológicas</h3>
    <ul>
        <li>Mutualismo (+/+), Comensalismo (+/0), Parasitismo (+/−), Competição (−/−).</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Por que a Ecologia Foi Criada?</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Em 1866, o biólogo alemão <strong>Ernst Haeckel</strong> criou a palavra "Ecologia" (<em>oikos</em> = casa) ao perceber que não dava para entender nenhum ser vivo isolado: todo organismo vive dentro de uma "casa" cheia de vizinhos que comem, competem e ajudam uns aos outros. A ciência explodiu nos anos 1960–70, quando o mundo percebeu que <strong>poluímos e destruímos habitat mais rápido do que a natureza se regenera</strong> — e que prever esses efeitos exigia matemática: quem come quem, quanto de energia passa de um nível para outro, quanto de veneno se acumula.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: A Regra dos 10% e a Conta de Luz da Natureza</div>
    <p>Pense na energia como <strong>dinheiro de um salário que passa de mão em mão</strong>: o produtor (planta) ganha o "salário do Sol" e, a cada transferência (para o herbívoro, depois o carnívoro), <strong>cerca de 90% vira "conta de luz" perdida</strong> (calor, movimento, respiração) e só ~10% passa adiante. Por isso <strong>nunca existem muitos predadores de topo</strong>: faltaria "dinheiro" para sustentá-los. E o veneno segue o caminho inverso — como não é eliminado, ele <strong>se acumula</strong> a cada nível (<em>magnificação trófica</em>): o tucunaré do topo tem muito mais mercúrio que o peixe pequeno que comeu.</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Isso Importa Hoje?</h3>
    </div>
    <ul style="font-size:15px; line-height:1.7; color:var(--text-secondary); padding-left:20px; margin:0;">
        <li><strong>Alerta do mercúrio no peixe:</strong> órgãos de saúde limitam o consumo de certos peixes por gestantes exatamente por causa da magnificação trófica do mercúrio (garimpo ilegal nos rios da Amazônia).</li>
        <li><strong>Pesca e agro:</strong> safras e estoques pesqueiros são calculados com pirâmides de energia — se a pesca tirar mais que a reposição, a cadeia desaba.</li>
        <li><strong>Corredores ecológicos:</strong> projetos como o do mico-leão-dourado usam conceitos de população e habitat desta aula para salvar espécies.</li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Clássica da Banca do CEFET</div>
    <p><strong>Cadeia alimentar ≠ Teia alimentar:</strong> a cadeia é uma linha única simplificada; na natureza real existe a teia (dezenas de caminhos). E o erro mais comum: dizer que o decompositor "faz parte do fim da cadeia" — ele atua em <strong>todos</strong> os níveis! Outra pegadinha: pirâmides de <em>energia</em> nunca se invertem; pirâmides de <em>número</em> e <em>biomassa</em> podem (ex.: árvore gigante cheia de insetos).</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Uma planta da Mata Atlântica fixa 10.000 unidades de energia solar. Considerando a regra dos 10%, quantas unidades de energia chegam ao consumidor primário (lagarta) e ao consumidor secundário (passarinho)? E por que não existem "grandes predadores" em excesso na natureza?
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação</span><br>
        Dado: 10.000 u no produtor. Pergunta: energia no 2º e 3º níveis + explicação ecológica.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Modelagem</span><br>
        Aplicar a regra dos 10%: cada nível perde ~90% em calor e só passa 10% adiante.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Cálculo</span><br>
        Produtor (10.000) → Consumidor primário: 10.000 × 0,1 = <strong>1.000 u</strong> → Consumidor secundário: 1.000 × 0,1 = <strong>100 u</strong>.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão</span><br>
        Como só ~10% da energia passa de nível em nível, a energia disponível despenca nos níveis altos (10.000 → 1.000 → 100) — por isso as pirâmides ecológicas estreitam e <strong>existem poucos predadores de topo</strong>: não há energia suficiente para sustentá-los em grande quantidade.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Em uma cadeia contaminada por agrotóxico não biodegradável, a maior concentração da toxina estará no:",
                    options: ["Produtor", "Consumidor primário", "Consumidor do topo da cadeia", "Solo"],
                    correct: 2,
                    exp: "Magnificação trófica (bioacumulação nos níveis mais altos)."
                }
            ]
        },
        {
            id: "bio-07", title: "7. Ciclos Biogeoquímicos (Água, Carbono & Oxigênio)", time: "25 min", difficulty: "fácil",
            track: "selecao", prerequisites: ["bio-06"], examTopics: ["Edital Bio. 6: Ciclos da água, carbono e oxigênio"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> Os elementos químicos circulam entre a natureza e os seres vivos. As plantas tiram $CO_2$ do ar pela fotossíntese e liberam $O_2$. Animais e plantas respiram consumindo $O_2$ e liberando $CO_2$. A queima de combustíveis fósseis joga excesso de $CO_2$ na atmosfera.</p>`,
            content: `
<div class="card">
    <h3><span class="step-num">2</span> Teoria Descomplicada & Ciclo do Carbono</h3>
    <ul>
        <li>Fotossíntese fixa carbono inorgânico em matéria orgânica (glicose).</li>
        <li>Respiração celular e decomposição devolvem CO₂ para a atmosfera.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Por que o Planeta Precisa de "Ciclos"?</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Os elementos químicos (C, O, H, N) são <strong>limitados e finitos</strong> na Terra — nada novo chega de fora em quantidades relevantes. Como a vida existe há 3,8 bilhões de anos reciclando os mesmos átomos, cada átomo de carbono do seu corpo <strong>já esteve em dinossauros, plantas e no oceano</strong>! Foi o cientista russo <strong>Vladimir Vernadski</strong> (anos 1920) quem formulou a ideia da <em>Biosfera</em>: a Terra como um sistema fechado onde a matéria circula eternamente entre o vivo e o não vivo, movida pela energia do Sol. Os ciclos biogeoquímicos são a "estrada" dessa circulação.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: A Natureza como Recicladora Perfeita</div>
    <p>Imagine uma cidade onde <strong>nada é jogado fora</strong>: tudo volta para a prateleira. A <strong>fotossíntese</strong> é a "fábrica de montagem" (pega CO₂ + água + luz solar → monta açúcar e solta O₂). A <strong>respiração</strong> é a "usina de desmontagem" (queima o açúcar com O₂ → devolve CO₂ e água). As <strong>bactérias e fungos decompositores</strong> são a coleta seletiva: pegam restos de qualquer "fábrica" e reciclam. O <strong>carbono</strong> fica guardado na "cofre do banco" — os combustíveis fósseis (petróleo, carvão) — e o problema do aquecimento global é que <strong>estamos saqueando o cofre</strong>, jogando no ar em 200 anos carbono que levou 300 milhões de anos para se acumular.</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Isso Importa Hoje?</h3>
    </div>
    <ul style="font-size:15px; line-height:1.7; color:var(--text-secondary); padding-left:20px; margin:0;">
        <li><strong>Mudanças climáticas:</strong> os relatórios do IPCC medem o "desequilíbrio" do ciclo do carbono — é por isso que se fala em CO₂, créditos de carbono e metas de emissão nos noticiários.</li>
        <li><strong>Crise hídrica:</strong> o ciclo da água (evaporação → transpiração → chuva) explica por que desmatar a Amazônia pode causar seca no Sudeste — as "raios voadores" levam umidade.</li>
        <li><strong>Combustíveis:</strong> etanol e biocombustíveis funcionam porque a cana refaz em 1 ano o ciclo do carbono que o petróleo levou milhões de anos para estocar.</li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Clássica da Banca do CEFET</div>
    <p>A energia <strong>não cicla</strong>: ela flui em linha reta (Sol → seres vivos → calor perdido). Só a <strong>matéria</strong> recicla! Se a questão disser que "a energia do Sol cicla na biosfera", está errada. Outra confusão: a respiração <strong>não é só de animais</strong> — as plantas também respiram dia e noite; a fotossíntese é que ocorre só de dia.</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Uma questão de prova apresenta três processos: (I) fotossíntese, (II) queima de combustíveis fósseis, (III) respiração celular. Quais deles <strong>devolvem CO₂</strong> para a atmosfera e qual o único que o <strong>retira</strong>? Justifique o desequilíbrio atual.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação</span><br>
        Classificar cada processo como "emite CO₂" ou "absorve CO₂".
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Regra Geral</span><br>
        Processos que <strong>quebram moléculas orgânicas</strong> liberam CO₂; o processo que <strong>monta</strong> matéria orgânica a partir de CO₂ o consome.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Classificação</span><br>
        Emitam CO₂: (II) queima de fósseis e (III) respiração. Retiram CO₂: (I) <strong>fotossíntese</strong> — o único "puxador" de carbono do ar.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão</span><br>
        O desequilíbrio atual existe porque queimamos, em ~200 anos, carbono fóssil estocado por milhões de anos, enquanto <strong>desmatamos florestas</strong> — reduzindo justamente o único processo (fotossíntese) que retira esse excesso de CO₂.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "O processo biológico responsável por retirar CO₂ da atmosfera e fixá-lo em moléculas orgânicas é a:",
                    options: ["Respiração", "Fotossíntese", "Fermentação", "Transpiração"],
                    correct: 1,
                    exp: "Fotossíntese realizada por organismos autótrofos."
                }
            ]
        },
        {
            id: "bio-08", title: "8. Impactos Ambientais, Poluição & Sustentabilidade", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: ["bio-06", "bio-07"], examTopics: ["Edital Bio. 7: Atividades humanas e consequências no ambiente", "Edital Bio. 7.1: Poluição ambiental"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> O <em>Efeito Estufa</em> natural mantém o planeta aquecido; seu excesso por queima de petróleo gera o aquecimento global. <em>Eutrofização</em> é o excesso de esgoto na água que faz algas proliferarem, consumindo todo o oxigênio e matando os peixes.</p>`,
            content: `
<div class="card">
    <h3><span class="step-num">2</span> Teoria Descomplicada & Impactos Críticos</h3>
    <ul>
        <li><strong>Eutrofização:</strong> Matéria orgânica/esgoto → proliferação de bactérias decompositoras aeróbias → esgotamento do oxigênio dissolvido → mortandade de peixes.</li>
        <li><strong>Chuva Ácida:</strong> Óxidos de enxofre e nitrogênio (SO₂ e NO₂) de indústrias reagindo com o vapor de água da atmosfera e caindo como ácido sulfúrico/nítrico diluído, formando ácidos (H₂SO₄ e HNO₃).</li>
        <li><strong>Inversão Térmica:</strong> Camada de ar frio "prende" os poluentes perto do solo em dias de inverno seco (clássica na Grande São Paulo).</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Por que a "Sustentabilidade" Virou Assunto de Prova?</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Até os anos 1950, acreditava-se que a natureza era "infinita" e que rios e florestas se regeneravam sozinhos. Três choques mudaram isso: o <strong>smog de Londres</strong> (1952, que matou milhares em dias), o livro <em>Primavera Silenciosa</em> de Rachel Carson (1962, mostrando pesticidas matando aves) e a primeira <strong>fotografia da Terra vista do espaço</strong> (1968), um "planeta azul frágil e sem fronteiras". Em 1972, a ONU realizou a <strong>Conferência de Estocolmo</strong> e criou o conceito oficial de <strong>Desenvolvimento Sustentável</strong> (definido no Relatório Brundtland, 1987): <em>"atender às necessidades do presente sem comprometer as gerações futuras"</em>. Desde então, provas de vestibular e do CEFET cobram o tema todo ano — porque é a questão ambiental que decide o futuro da sua geração.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: O Efeito Estufa é Como um Edacote no Carro</div>
    <p>O <strong>efeito estufa não é vilão</strong> — sem ele, a temperatura média da Terra seria de −18 °C e nada de vida complexa existiria. Funciona como o <strong>para-brisa fechado de um carro no sol</strong>: a luz entra, aquece o interior e parte do calor não consegue sair. O problema é a <strong>espessura do "vidro"</strong>: queimar petróleo, carvão e gás adiciona CO₂ à atmosfera, engrossando essa "manta" e retendo calor demais. Já a <strong>eutrofização</strong> é como se a lagoa recebesse um "banquete" de esgoto: as algas fazem festa, multiplicam-se, morrem em massa, e as bactérias decompositoras — ao digerir essa montanha — <strong>consomem todo o oxigênio da água</strong>, sufocando os peixes. O vilão não é a bactéria: é o excesso de "comida" que jogamos no rio.</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Isso Importa Hoje?</h3>
    </div>
    <ul style="font-size:15px; line-height:1.7; color:var(--text-secondary); padding-left:20px; margin:0;">
        <li><strong>No seu dia a dia no Rio:</strong> a Baía de Guanabara sofre eutrofização por esgoto não tratado — os "peixes mortos em massa" do noticiário são exatamente o processo desta aula.</li>
        <li><strong>Carreira de engenharia e tecnologia:</strong> o CEFET forma técnicos que trabalharão com tratamento de efluentes, energia solar/eólica e monitoramento ambiental — setores que mais crescem no mercado.</li>
        <li><strong>ENEM e vestibulares:</strong> o efeito estufa, a chuva ácida e a inversão térmica estão entre os temas mais repetidos da história da prova.</li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Clássica da Banca do CEFET</div>
    <p>A banca adora confundir <strong>efeito estufa</strong> (fenômeno natural e necessário) com <strong>aquecimento global</strong> (intensificação do efeito estufa pela ação humana) e com <strong>buraco na camada de ozônio</strong> (problema <em>diferente</em>, causado por CFCs, relacionado a radiação UV — não a temperatura!). Três problemas, três causas, três soluções distintas.</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Uma cidade despeja esgoto doméstico sem tratamento em um rio e, nas indústrias, emite SO₂ pela queima de carvão. Quais dois impactos ambientais característicos vão ocorrer e qual a cadeia de causa e efeito de cada um?
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação</span><br>
        Duas poluições descritas: <em>esgoto orgânico</em> (água) e <em>SO₂</em> (ar). Pedem impacto + cadeia causal de cada.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Identificar os Processos</span><br>
        Esgoto orgânico em rio → <strong>Eutrofização</strong>. SO₂ industrial + vapor de água → <strong>Chuva Ácida</strong>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Cadeia de Causa e Efeito</span><br>
        Eutrofização: esgoto → algas proliferam → algas morrem em massa → decompositores aeróbios multiplicam → O₂ dissolvido acaba → <strong>peixes morrem sufocados</strong>. Chuva ácida: SO₂ + H₂O → H₂SO₄ diluído → chuva com pH baixo → <strong>mata lagos, florestas e corrói monumentos</strong>.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão</span><br>
        Os impactos são a <strong>eutrofização</strong> (mortandade de peixes por falta de O₂) e a <strong>chuva ácida</strong> (acidificação de solos, lagos e patrimônio histórico) — ambos resolvidos com tratamento de esgoto e filtros nas chaminés industriais.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "A mortandade de peixes em lagoas após o despejo maciço de esgoto não tratado decorre da:",
                    options: [
                        "Falta de oxigênio dissolvido pela proliferação de decompositores (eutrofização)",
                        "Elevação súbita da salinidade",
                        "Ausência de luz solar na superfície",
                        "Sublimação da água"
                    ],
                    correct: 0,
                    exp: "Eutrofização consome o oxigênio dissolvido na água."
                }
            ]
        },
        {
            id: "bio-09", title: "9. Fisiologia Humana I: Nutrição, Digestão, Respiração & Excreção", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: ["bio-02"], examTopics: ["Edital Bio. 8: Nutrição, alimentação, hábitos alimentares e saúde", "Edital Bio. 9: Funcionamento básico dos sistemas digestório, respiratório e excretor"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> O Sistema Digestório quebra os alimentos em nutrientes. O Respiratório absorve $O_2$ nos alvéolos pulmonares e elimina $CO_2$. O Excretor (rins) filtra o sangue e elimina resíduos tóxicos (ureia) na urina.</p>`,
            content: `
<div class="card">
    <h3><span class="step-num">2</span> Teoria Descomplicada & Integração dos Sistemas</h3>
    <ul>
        <li><strong>Digestório:</strong> Boca (amilase salivar) → Estômago (pepsina e ácido clorídrico) → Intestino Delgado (absorção de nutrientes).</li>
        <li><strong>Respiratório:</strong> Hematose nos alvéolos pulmonares (troca gasosa por difusão).</li>
        <li><strong>Excretor:</strong> Néfrons renais filtram o plasma sanguíneo e formam a urina.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Por que Estudar a Fisiologia Humana?</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        A fisiologia nasceu da curiosidade médica: já no século II, <strong>Galen</strong> dissecava animais em Roma; no século XVII, <strong>William Harvey</strong> provou (contando pulsos e calculando volumes) que o sangue <strong>circula</strong> — contra 1.500 anos de dogma. A verdade é que entender esses sistemas é entender <strong>você mesmo funcionando</strong>: por que sente fome, por que ofega após correr, por que sua urina fica escura quando bebe pouca água. Cada sistema é um "departamento" do seu corpo, e a prova do CEFET adora pedir a <strong>ligação entre eles</strong> — porque nenhum trabalha sozinho: a boca começa a digestão, o intestino alimenta o sangue, o sangue leva O₂ aos músculos, os rins limpam o sangue. É uma linha de produção integrada.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: O Corpo como uma Fábrica Integrada</div>
    <p>Imagine uma <strong>fábrica de lanches</strong>: a <strong>Boca</strong> é o desmonte inicial (dentes trituram + amilase salivar quebra amido — por isso o pão fica doce na boca!). O <strong>Estômago</strong> é a piscina de ácido (pepsina + HCl quebram proteínas). O <strong>Intestino Delgado</strong> é a esteira de entrega final, com vilosidades que absorvem nutrientes para o sangue. O <strong>Sangue</strong> é o caminhão de entrega que transporta nutrientes <strong>e</strong> O₂ (hemoglobina) para as células. Os <strong>Pulmões</strong> (alvéolos) são o "portão de entrada do O₂" e saída do CO₂. E os <strong>Rins</strong> são o <em>controle de qualidade</em>: filtram 180 litros de sangue por dia e devolvem o que o corpo ainda precisa, jogando fora ureia e excessos na urina. Se um departamento para, todos sofrem.</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Isso Importa Hoje?</h3>
    </div>
    <ul style="font-size:15px; line-height:1.7; color:var(--text-secondary); padding-left:20px; margin:0;">
        <li><strong>Na saúde real:</strong> hemodiálise (máquina que substitui o rim), oxigenoterapia em UTIs e dietas para diabéticos são aplicações diretas desta aula.</li>
        <li><strong>Esportes:</strong> atletas treinam "limiar anaeróbico" pensando em O₂ × CO₂ e na eficiência pulmonar — fisiologia aplicada à performance.</li>
        <li><strong>Concursos e vestibulares:</strong> as questões de fisiologia do CEFET/ENEM quase sempre cruzam dois sistemas (digestão + circulação, respiração + excreção) — a banca quer ver se você entendeu a <em>integração</em>.</li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Clássica da Banca do CEFET</div>
    <p>A digestão do amido começa na <strong>boca</strong> (amilase salivar), a de proteínas no <strong>estômago</strong> (pepsina) — e NÃO "tudo no estômago"! Outra pegadinha: a troca de gases ocorre nos <strong>alvéolos</strong> por <em>difusão</em> (não há "bombeamento" ativo), e a hematose é a oxigenação do sangue, que ocorre <em>também</em> nos pulmões — não confundir com o sangue venoso. E cuidado: os rins filtram o sangue, mas <strong>não "produzem" urina a partir de nada</strong> — eles filtram o plasma.</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Após correr 400 m no pátio da escola, um aluno respira rápido e sente vontade de urinar. Explique o caminho do oxigênio até seus músculos e o motivo do aumento da frequência respiratória.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação</span><br>
        Pede o trajeto do O₂ (sistema respiratório → sangue → músculo) e a razão da ofegância.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Modelo do Trajeto</span><br>
        Ar → traqueia → brônquios → bronquíolos → <strong>alvéolos</strong> (difusão) → capilares → hemoglobina → coração → músculos.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Causa da Ofegância</span><br>
        Correndo, os músculos consomem mais O₂ e produzem mais CO₂ + ácido lático. O cérebro detecta o CO₂ alto no sangue e <strong>acelera a respiração</strong> para "expelir" o excesso e repor O₂.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão</span><br>
        O O₂ entra pelos <strong>alvéolos por difusão</strong>, viaja pela hemoglobina até os músculos; a respiração acelera porque o corpo precisa eliminar o <strong>CO₂ acumulado</strong> e reabastecer o O₂ — o corpo é um sistema em <em>equilíbrio dinâmico</em> (homeostase).
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "A troca de gases oxigênio e gás carbônico entre o sangue e o ar ocorre nos pulmões especificamente nos:",
                    options: ["Brônquios", "Alvéolos pulmonares", "Laringe", "Traqueia"],
                    correct: 1,
                    exp: "Hematose nos alvéolos pulmonares."
                }
            ]
        },
        {
            id: "bio-10", title: "10. Fisiologia Humana II: Reprodução, Imunização & Saúde", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: ["bio-02", "bio-03"], examTopics: ["Edital Bio. 10: Reprodução humana e hereditariedade"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> <em>Vacina</em> é preventiva (contém antígeno para criar anticorpos e memória). <em>Soro</em> é curativo de emergência (contém anticorpos prontos para neutralizar veneno de cobra ou escorpião na hora!).</p>`,
            content: `
<div class="card">
    <h3><span class="step-num">2</span> Teoria Descomplicada & Vacina vs Soro</h3>
    <table class="comp-table">
        <tr><th>Imunobiológico</th><th>Conteúdo</th><th>Tipo de Imunidade</th><th>Função</th></tr>
        <tr><td>Vacina</td><td>Antígeno atenuado/inativado</td><td>Ativa (com memória)</td><td>Preventiva</td></tr>
        <tr><td>Soro</td><td>Anticorpos prontos</td><td>Passiva (sem memória)</td><td>Curativa de emergência</td></tr>
    </table>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Por que a Imunologia e a Reprodução Estão em Toda Prova?</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        A imunologia explodiu em 1796, quando <strong>Edward Jenner</strong> percebeu que ordenhadores que pegavam "cowpox" (varíola das vacas) <strong>não pegavam varíola humana</strong> — daí o nome <em>vacina</em> (de <em>vacca</em> = vaca). Desde então, a humanidade erradicou a varíola (1980) e controlou polio, sarampo e COVID-19 com o mesmo princípio: <strong>treinar o sistema imune</strong> com um "alvo falso". Já o estudo da reprodução e do ciclo menstrual guia desde os <strong>métodos contraceptivos</strong> (pílula, DIU) até tratamentos de fertilização <em>in vitro</em> — decisões reais que milhões de pessoas tomam. Por isso a prova cobra: é ciência que <strong>você vai usar</strong> na vida, independente da carreira.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: Vacina × Soro — Academia de Polícia × Equipe de Choque</div>
    <p>Pense na defesa do corpo como uma <strong>cidade com força policial</strong>:</p>
    <p>• <strong>Vacina = Academia de Polícia:</strong> entrega ao corpo um "criminoso de mentira" (antígeno inativado) para que ele <strong>treine e memorize</strong> o rosto do verdadeiro. Demora semanas, mas cria <strong>memória imunológica permanente</strong> — se o vírus real aparecer, a resposta é instantânea. É <em>preventiva</em>.</p>
    <p>• <strong>Soro = Equipe de Choque de Emergência:</strong> quando o veneno da cobra já está circulando, não há tempo de treinar ninguém. Chegam <strong>anticorpos prontos</strong> (produzidos em cavalos) para neutralizar o veneno <strong>na hora</strong>. É rápido, mas <strong>não cria memória</strong> — é <em>curativo</em>, de emergência, e vale só aquela "batalha".</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Isso Importa Hoje?</h3>
    </div>
    <ul style="font-size:15px; line-height:1.7; color:var(--text-secondary); padding-left:20px; margin:0;">
        <li><strong>Campanhas de vacinação:</strong> o calendário do SUS (COVID-19, HPV, febre amarela) funciona no princípio de Jenner de 1796 — entender vacina × soro é entender por que se vacina <strong>antes</strong> de estar doente.</li>
        <li><strong>Saúde reprodutiva:</strong> pílula anticoncepcional (impede a ovulação), testes de gravidez (detectam hCG) e métodos contraceptivos dependem do ciclo hormonal desta aula.</li>
        <li><strong>Carreira na saúde:</strong> técnico em enfermagem, farmácia e análises clínicas — cursos do CEFET — usam esses conceitos diariamente em vacinação e exames laboratoriais.</li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Clássica da Banca do CEFET</div>
    <p>A confusão mais cobrada do Brasil inteiro: <strong> Vacina é PREVENTIVA</strong> (antígeno → corpo fabrica os próprios anticorpos + memória). <strong>Soro é CURATIVO</strong> (anticorpos prontos, sem memória). Se a questão disser "soro cria memória imunológica", está ERRADA! Outra: a fecundação ocorre na <strong>trompa (tuba uterina)</strong>, não no útero; e o endométrio é renovado a cada ciclo menstrual.</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Um aluno foi picado por uma cobra e recebeu soro antiofídico; um mês depois, ele se vacina contra febre amarela. Compare as duas intervenções quanto ao conteúdo injetado, ao tipo de imunidade e ao tempo de proteção.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação</span><br>
        Comparar <strong>soro</strong> × <strong>vacina</strong> em 3 critérios: conteúdo, tipo de imunidade, duração.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Analisar o Soro</span><br>
        Conteúdo: <strong>anticorpos prontos</strong>. Imunidade: <strong>passiva</strong> (o corpo não produz nada). Duração: dias/semanas, <strong>sem memória</strong>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Analisar a Vacina</span><br>
        Conteúdo: <strong>antígeno</strong> atenuado (vírus enfraquecido). Imunidade: <strong>ativa</strong> (o corpo fabrica anticorpos). Duração: anos/vida, <strong>com memória imunológica</strong>.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão</span><br>
        O soro salvou o aluno de forma <strong>imediata e temporária</strong> (imunidade passiva); a vacina o protege <strong>a longo prazo</strong> (imunidade ativa com memória) — dois imunobiológicos complementares, com funções opostas: um <em>cura</em>, o outro <em>previne</em>.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Para tratar uma pessoa picada por uma serpente venenosa, o procedimento correto é administrar:",
                    options: ["Vacina antiofídica", "Soro antiofídico com anticorpos específicos", "Antibióticos", "Anti-histamínicos simples"],
                    correct: 1,
                    exp: "O soro fornece anticorpos prontos para neutralizar o veneno imediatamente."
                }
            ]
        }
        ]
    },

    /* ─────────────────────────────────────────────────────────────
       6. HISTÓRIA (8 Módulos: 8 Seleção — COBERTURA COMPLETA)
       ───────────────────────────────────────────────────────────── */
    {
        id: "hist", name: "História", icon: "🏛️",
        modules: [
        {
            id: "hist-01", title: "1. Crise do Feudalismo, Renascimento & Reforma", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: [], examTopics: ["Edital Hist. 1: Crise do Feudalismo europeu", "Edital Hist. 2: Renascimento cultural", "Edital Hist. 3: Reforma protestante e Contrarreforma", "Edital Hist. 4: Revolução Científica"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> A Europa saiu da Idade Média (feudal, controlada pela Igreja no <em>Teocentrismo</em>) para a Idade Moderna com o <em>Renascimento</em> (valorização do ser humano e da razão no <em>Antropocentrismo</em>) e a <em>Reforma Protestante</em> (Lutero criticando a venda de indulgências pela Igreja Católica).</p>`,
            content: `
<div class="box-analogy">
    <div class="box-header">🔗 Bloco 1: A Analogia Intuitiva</div>
    <p>A transição feudal para o mundo moderno foi a abertura das janelas de um castelo escuro: o saber deixou de ser monopólio exclusivo dos mosteiros e passou a circular em livros impressos com a imprensa de Gutenberg, valorizando a ciência e o raciocínio crítico.</p>
</div>
<div class="card">
    <h3><span class="step-num">2</span> Teoria Descomplicada & Os Eixos de Ruptura</h3>
    <ul>
        <li><strong>Crise Feudal:</strong> Renascimento comercial e urbano, peste negra, revoltas camponesas e surgimento da burguesia mercantil.</li>
        <li><strong>Renascimento Cultural e Científico:</strong> Antropocentrismo, Racionalismo, Humanismo, mecenato e valorização da cultura greco-romana clássica.</li>
        <li><strong>Reforma Protestante (1517):</strong> Martinho Lutero afixa as 95 Teses contra a simonia e a venda de indulgências; Calvino e o Anglicanismo; Contrarreforma Católica com o Concílio de Trento e a Companhia de Jesus.</li>
    </ul>
</div>
<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET em 4 Etapas</div>
    <div class="ex-problem">Qual a principal característica filosófica que diferenciou o Renascimento Cultural do pensamento medieval?</div>
    <div class="ex-step">O pensamento medieval baseava-se no Teocentrismo (Deus no centro de todas as explicações). O Renascimento promoveu o Antropocentrismo e o Racionalismo empírico.</div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "O Renascimento Cultural e Científico dos séculos XV e XVI caracterizou-se fundamentalmente pelo:",
                    options: [
                        "Teocentrismo e dogmatismo escolástico",
                        "Antropocentrismo, Racionalismo e valorização da antiguidade clássica",
                        "Fortalecimento do isolamento feudal",
                        "Monopólio papal irrestrito sobre a ciência"
                    ],
                    correct: 1,
                    exp: "Antropocentrismo e valorização da razão e do potencial humano."
                }
            ]
        },
        {
            id: "hist-02", title: "2. Absolutismo, Estados Nacionais & Mercantilismo", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: [], examTopics: ["Edital Hist. 5: Formação dos Estados Nacionais Modernos", "Edital Hist. 6: Absolutismo monárquico", "Edital Hist. 8: Mercantilismo"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> Os reis se uniram à burguesia para criar os países modernos com exércitos próprios (Absolutismo). Para acumular riquezas, adotaram o <em>Mercantilismo</em>: guardar ouro e prata (Metalismo), vender mais do que comprar (Balança Comercial Favorável) e impor o monopólio comercial sobre as colônias (Pacto Colonial).</p>`,
            content: `
<div class="card">
    <h3><span class="step-num">2</span> Teoria Descomplicada & Os Pilares do Mercantilismo</h3>
    <ul>
        <li><strong>Metalismo (Bulionismo):</strong> A riqueza de uma nação medida pela quantidade de ouro e prata estocados no tesouro real.</li>
        <li><strong>Balança Comercial Favorável:</strong> Manter o valor das exportações superior ao das importações ($E > I$).</li>
        <li><strong>Protecionismo Alfandegário:</strong> Cobrança de impostos altos sobre produtos estrangeiros.</li>
        <li><strong>Monopólio e Pacto Colonial (Exclusivo Metropolitano):</strong> A colônia só podia comprar e vender diretamente com sua metrópole.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Por que o Absolutismo e o Mercantilismo foram Criados?</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        No fim da Idade Média, a Europa estava destruída: a <strong>Peste Negra</strong> matou cerca de 1/3 da população, os camponeses se revoltaram e os nobres feudais perderam poder e soldados após a Guerra dos Cem Anos. Alguém precisava restaurar a ordem — e quem tinha dinheiro para pagar exércitos permanentes eram os reis e a <strong>burguesia mercantil</strong> (comerciantes das cidades).
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Nasceu assim a <strong>aliança Rei + Burguesia</strong>: o rei dava proteção e monopólios aos comerciantes; a burguesia dava impostos e empréstimos ao rei. Com esse dinheiro, os monarcas criaram exércitos nacionais, burocracias e tribunais — o <strong>Estado Nacional Moderno</strong>. Para justificar o poder ilimitado, teóricos como <em>Jacques Bossuet</em> criaram a doutrina do <strong>Direito Divino dos Reis</strong> ("o rei responde apenas a Deus", resumida na frase de Luís XIV: <em>"O Estado sou eu"</em>). O <strong>Mercantilismo</strong> foi a política econômica dessa aliança: juntar metais preciosos no tesouro real para manter exércitos e navegações.
    </p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Isso Importa Hoje?</h3>
    </div>
    <ul style="font-size:15px; line-height:1.7; color:var(--text-secondary); padding-left:20px; margin:0;">
        <li><strong>Metalismo → Reservas Internacionais:</strong> Assim como os reis guardavam ouro no tesouro, hoje os governos guardam <em>dólares e euros</em> no Banco Central para proteção contra crises (o Brasil tem mais de US$ 300 bilhões em reservas).</li>
        <li><strong>Protecionismo → Impostos de Importação:</strong> Quando o governo cobra altos impostos sobre produtos estrangeiros para proteger a indústria nacional, está aplicando uma ideia mercantilista de 500 anos atrás.</li>
        <li><strong>Monopólio → Cartéis:</strong> A OPEP, que controla a venda mundial de petróleo, funciona como um monopólio mercantilista moderno sobre uma "colônia" de recursos.</li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Clássica da Banca do CEFET</div>
    <p>Não confunda <strong>Mercantilismo</strong> (Estado controla a economia para acumular metais, séculos XV–XVII) com <strong>Liberalismo</strong> (mercado livre, Estado fora da economia, ideias de Adam Smith no século XVIII). Outra confusão fatal: <em>Metalismo</em> é só UM dos pilares do mercantilismo — existe também o <strong>comercialismo</strong> (praticado por Portugal e Espanha, focado em metais das colônias) e o <strong>manufatureiro</strong> (praticado por Inglaterra e França, focado em vender produtos manufaturados).</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Na Inglaterra do século XVII, o Parlamento aprovou leis que impunham altos impostos aos tecidos estrangeiros e exigiam que todas as colônias inglesas comprassem tecidos somente de fábricas inglesas e vendessem suas matérias-primas exclusivamente à metrópole. Qual política econômica essas leis representam e quais princípios mercantilistas estão presentes?
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação do Enunciado</span><br>
        Duas medidas são descritas: taxar produtos estrangeiros e reservar o comércio colonial para a metrópole.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Contextualização Histórica</span><br>
        Estamos no Absolutismo inglês (séc. XVII), período do mercantilismo <strong>manufatureiro</strong> — a Inglaterra queria vender produtos industrializados, não apenas acumular metais.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Cruzamento com a Teoria</span><br>
        Impostos altos sobre importados = <strong>Protecionismo alfandegário</strong>. Comércio exclusivo com a colônia = <strong>Pacto Colonial (Exclusivo Metropolitano)</strong>. Ambos visam a <strong>balança comercial favorável</strong>.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão</span><br>
        As leis representam o <strong>Mercantilismo</strong>, combinando protecionismo, monopólio colonial e busca de balança comercial favorável para enriquecer a metrópole.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "O princípio mercantilista da 'Balança Comercial Favorável' consistia em:",
                    options: [
                        "Comprar mais mercadorias estrangeiras do que vender",
                        "Manter o valor das exportações sempre superior ao das importações",
                        "Eliminar todos os impostos sobre importações",
                        "Distribuir riquezas entre as colônias"
                    ],
                    correct: 1,
                    exp: "Exportar mais do que importar para garantir saldo positivo em metais preciosos."
                }
            ]
        },
        {
            id: "hist-03", title: "3. As Grandes Navegações & Expansão Marítima", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: [], examTopics: ["Edital Hist. 7.1: Navegações portuguesas", "Edital Hist. 7.2: Navegações espanholas", "Edital Hist. 7.3: Partilha do mundo (Tordesilhas)", "Edital Hist. 7.4: Navegações holandesas", "Edital Hist. 7.5: Navegações inglesas"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> Portugal foi o pioneiro das navegações porque tinha paz interna, localização no Atlântico e uma monarquia centralizada forte. O objetivo era chegar às especiarias da Índia contornando a África (Périplo Africano), rompendo o monopólio italiano no Mar Mediterrâneo.</p>`,
            content: `
<div class="card">
    <h3><span class="step-num">2</span> Teoria Descomplicada & O Pioneirismo Português</h3>
    <ul>
        <li><strong>Fatores do Pioneirismo Luso:</strong> Precoce centralização política (Revolução de Avis em 1385), burguesia mercantil ativa, posição geográfica privilegiada e domínio de tecnologias náuticas (caravelas, astrolábio, bússola e mapas na lendária Escola de Sagres).</li>
        <li><strong>Marcos:</strong> Conquista de Ceuta (1415), Cabo das Tormentas/Boa Esperança por Bartolomeu Dias (1488), chegada à Índia por Vasco da Gama (1498) e chegada ao Brasil por Cabral (1500).</li>
        <li><strong>Tratado de Tordesilhas (1494):</strong> Partilha do mundo ultramarino entre Portugal e Espanha a 370 léguas a oeste de Cabo Verde.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Por que as Grandes Navegações Aconteceram?</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Em 1453, os turcos otomanos <strong>conquistaram Constantinopla</strong> e fecharam o caminho terrestre das especiarias (pimenta, cravo, canela) que vinham da Índia. Com o comércio nas mãos de venezianos e genoveses do Mediterrâneo, Portugal e Espanha — países <em>fora</em> desse mercado rico — precisavam de um plano B: <strong>chegar à Índia pelo mar, contornando a África</strong>.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Portugal tinha todas as condições para tentar: paz interna desde a Revolução de Avis (1385), um rei forte e centralizado, burguesia ansiosa por lucro, litoral voltado para o Atlântico e tecnologias como a <strong>caravela</strong> (vela latina + redonda que permitia navegar contra o vento), o <em>astrolábio</em> (posição pela estrela) e a <em>bússola</em>. Durante 80 anos, os portugueses "pularam" de costa em costa da África até Bartolomeu Dias dobrar o Cabo das Tormentas (1488) e Vasco da Gama chegar à Índia (1498). O preço da pimenta na Europa caiu e Portugal virou a maior potência comercial do século XVI.
    </p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Isso Importa Hoje?</h3>
    </div>
    <ul style="font-size:15px; line-height:1.7; color:var(--text-secondary); padding-left:20px; margin:0;">
        <li><strong>Primeira Globalização:</strong> As navegações criaram o comércio mundial entre continentes — o processo que hoje chamamos de globalização começou ali, no século XV.</li>
        <li><strong>Cartografia e GPS:</strong> Os mapas de portulano e as técnicas de navegação astronômica são os avôs do GPS que está no seu celular: ambos existem para responder "onde eu estou e como chego lá".</li>
        <li><strong>Circuito Comercial Mundial:</strong> A rota da pimenta virou a rota do açúcar, depois do algodão, do petróleo e dos contêineres — a lógica de buscar produtos baratos longe de casa é a mesma.</li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Clássica da Banca do CEFET</div>
    <p><strong>Tordesilhas foi assinado ANTES da chegada ao Brasil (1494 < 1500)</strong> — ele já dividia o Atlântico mesmo sem as duas Coroas conhecerem as Américas por completo. Cuidado também com o mito da "Escola de Sagres": não era uma escola formal de navegação, mas a corte de reuniões de navegadores, astrônomos e cartógrafos do Infante Dom Henrique. E lembre-se: a expansão portuguesa foi <em>comercial e militar</em>, movida por mercantilismo e ouro — não por puro espírito científico.</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> "Enquanto a Itália enriquecia com as especiarias que chegavam pelo Mediterrâneo, Portugal, à margem desse comércio, buscou no Atlântico o seu caminho para o Oriente." Explique por que Portugal, e não a Itália, liderou as Grandes Navegações.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação do Enunciado</span><br>
        A questão pede os <em>fatores do pioneirismo português</em>: por que Portugal e não Veneza/Gênova?
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Contextualização Histórica</span><br>
        A Itália dominava o Mediterrâneo e não tinha interesse em competir com seu próprio lucro; Portugal estava <em>fora</em> desse mercado e precisava de uma rota alternativa.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Cruzamento com a Teoria</span><br>
        Fatores portugueses: centralização precoce (Revolução de Avis, 1385), burguesia ativa, posição atlântica, tecnologias náuticas (caravela, astrolábio, bússola) e apoio da Coroa (expedições como Ceuta, 1415).
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão</span><br>
        Portugal liderou as navegações pela combinação única de <strong>estabilidade política, incentivo econômico da burguesia e Coroa, localização atlântica e domínio tecnológico náutico</strong> — enquanto as cidades italianas, lucrando com o Mediterrâneo, não tinham razão para arriscar o Atlântico.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "O Tratado de Tordesilhas assinado em 1494 dividiu as terras descobertas entre:",
                    options: ["Portugal e Espanha", "Inglaterra e França", "Portugal e Holanda", "Espanha e Itália"],
                    correct: 0,
                    exp: "Partilha do Atlântico e terras ultramarinas entre Portugal e Espanha."
                }
            ]
        },
        {
            id: "hist-04", title: "4. Povos Pré-Colombianos & Indígenas do Brasil", time: "25 min", difficulty: "fácil",
            track: "selecao", prerequisites: [], examTopics: ["Edital Hist. 9: Culturas pré-colombianas (Maias, Astecas, Incas)", "Edital Hist. 10.1: Tupi e Jê", "Edital Hist. 10.2: Hábitos e costumes indígenas", "Edital Hist. 10.3: Organização social e econômica indígena", "Edital Hist. 10.4: Residência e cultura material indígena"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> Antes dos europeus, as Américas eram habitadas por civilizações brilhantes: <em>Maias</em> (astronomia e escrita), <em>Astecas</em> (império militar no México com capital Tenochtitlán) e <em>Incas</em> (Andes, agricultura em terraços). No Brasil viviam milhões de indígenas (como os povos Tupi-Guarani) em perfeita harmonia comunitária sem propriedade privada.</p>`,
            content: `
<div class="card">
    <h3><span class="step-num">2</span> Teoria Descomplicada & As Grandes Civilizações</h3>
    <ul>
        <li><strong>Maias (Península de Yucatán):</strong> Cidades-Estado independentes, arquitetura piramidal, escrita hieroglífica e matemática com conceito de zero.</li>
        <li><strong>Astecas (México Central):</strong> Império guerreiro centralizado sobre o lago Texcoco, agricultura em ilhas flutuantes (chinampas).</li>
        <li><strong>Incas (Cordilheira dos Andes):</strong> Sociedade teocrática com agricultura em terraços irrigados nas montanhas (Machu Picchu, Cuzco) e estradas interligadas.</li>
        <li><strong>Povos Indígenas Brasileiros (Pindorama):</strong> Grupos Tupi, Macro-Jê, Karib e Aruak; economia de subsistência baseada na caça, pesca e agricultura de coivara (mandioca), com divisão sexual do trabalho e propriedade coletiva da terra.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Por que Estudar os Povos Pré-Colombianos?</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Quando os europeus chegaram, as Américas <strong>não eram um "vazio demográfico"</strong>: estima-se que havia dezenas de milhões de habitantes. A capital asteca, <strong>Tenochtitlán</strong>, construída sobre o lago Texcoco com canais e pontes, tinha cerca de 200 mil habitantes — <em>maior que Lisboa e Paris da época</em>! Os conquistadores espanhóis ficaram tão impressionados que compararam a cidade a Veneza.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Estudar essas civilizações serve para desfazer o mito de que a história do continente começou em 1492. Maias, Astecas e Incas criaram matemática com o conceito de <strong>zero</strong> (antes que os europeus o adotassem), calendários astronômicos precisos, agricultura em terraços e sistemas de estradas de milhares de quilômetros — tudo sem ferro, sem cavalos e sem a roda usada para transporte. São a <strong>pré-história dos próprios alunos do CEFET</strong>: a base indígena e africana do povo brasileiro.
    </p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Isso Importa Hoje?</h3>
    </div>
    <ul style="font-size:15px; line-height:1.7; color:var(--text-secondary); padding-left:20px; margin:0;">
        <li><strong>Na sua comida de todo dia:</strong> Milho, batata, tomate, cacau (chocolate), mandioca, amendoim, abacaxi e pimenta são plantas domesticadas pelos povos americanos e hoje alimentam o mundo inteiro.</li>
        <li><strong>Na ciência atual:</strong> As técnicas indígenas de terraços (Incas) e de "terra preta de índio" (solos fertilizados no Brasil) são estudadas hoje pela agronomia como soluções sustentáveis.</li>
        <li><strong>Na saúde e nos direitos:</strong> Povos indígenas brasileiros vivem hoje em mais de 300 etnias falando mais de 270 línguas — e o conhecimento deles sobre plantas medicinais alimenta farmácias e indústrias farmacêuticas.</li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Clássica da Banca do CEFET</div>
    <p>A banca adora trocar as civilizações de lugar! Grave a tríade: <strong>Maias</strong> = Península de Yucatán/México + astronomia, escrita e zero (não eram um império unificado, eram <em>cidades-estado</em>). <strong>Astecas</strong> = Vale do México + império militar + Tenochtitlán. <strong>Incas</strong> = Andes + terraços + Machu Picchu + Cuzco. Outra confusão comum: os povos indígenas brasileiros <strong>não construíram impérios urbanos</strong> como os mexicanos e andinos — a organização era de aldeias (aldeamento comunitário), sem propriedade privada.</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Uma questão de prova descreve: "Civilização que habitava a região andina, organizava o trabalho comunitário em terraços agrícolas irrigados nas encostas das montanhas e tinha como capital a cidade de Cuzco." A qual povo o enunciado se refere e qual característica permitiu essa agricultura em altitude?
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação do Enunciado</span><br>
        Palavras-chave: <em>região andina</em>, <em>terraços</em>, <em>Cuzco</em>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Localização Temporal e Espacial</span><br>
        Os Andes ficam na América do Sul (atuais Peru, Bolívia, Equador) — elimina Maia e Asteca, que eram da Mesoamérica (México/Centro-América).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Cruzamento com a Teoria</span><br>
        Terraços escalonados + Cuzco + Machu Picchu = <strong>Incas</strong>. Os terraços (andenes) permitiam plantar em montanhas de até 4.000 m de altitude, com irrigação e solo nivelado.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão</span><br>
        O povo descrito é o <strong>Inca</strong>, e a característica-chave foi a engenharia de <strong>terraços agrícolas irrigados</strong>, que transformavam encostas íngremes dos Andes em áreas produtivas.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "A civilização pré-colombiana que desenvolveu agricultura em terraços escalonados nas encostas da Cordilheira dos Andes foi a:",
                    options: ["Inca", "Asteca", "Maia", "Tupinambá"],
                    correct: 0,
                    exp: "Império Inca nos Andes sul-americanos."
                }
            ]
        },
        {
            id: "hist-05", title: "5. A Conquista da América & Sistemas Coloniais", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: ["hist-02", "hist-03", "hist-04"], examTopics: ["Edital Hist. 11: Conquista da América e resistências indígenas", "Edital Hist. 12: América espanhola colonial", "Edital Hist. 13: América inglesa colonial", "Edital Hist. 14: América holandesa colonial"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> Os espanhóis destruíram os impérios Asteca e Inca usando armas de fogo, alianças políticas e principalmente as <em>doenças trazidas da Europa</em> (como a varíola). Na América Espanhola impuseram o trabalho forçado indígena (<em>Mita</em> e <em>Encomienda</em>). Enquanto a América Latina virou colônia de exploração, partes da América do Norte foram colônias de povoamento.</p>`,
            content: `
<div class="card">
    <h3><span class="step-num">2</span> Teoria Descomplicada & Formas de Exploração</h3>
    <ul>
        <li><strong>A Conquista:</strong> Hernán Cortés contra os Astecas e Francisco Pizarro contra os Incas; impacto devastador das epidemias biológicas (varíola, gripe).</li>
        <li><strong>Mita:</strong> Sistema de trabalho forçado indígena temporário em minas de prata (Potosí) com remuneração irrisória.</li>
        <li><strong>Encomienda:</strong> Concessão de aldeias indígenas a um colonizador em troca de sua catequização católica forçada.</li>
        <li><strong>Colônias de Exploração vs. Povoamento:</strong> Exploração (latifúndio, monocultura, trabalho escravo/servil voltado para enriquecer a metrópole) vs. Povoamento (pequena propriedade, policultura, trabalho livre voltado para o mercado interno).</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Como a Conquista Aconteceu (e por que foi tão rápida)?</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Em 1519, <strong>Cortés</strong> chegou ao México com menos de 600 homens e derrubou o Império Asteca em dois anos; em 1532, <strong>Pizarro</strong> fez o mesmo com os Incas. Como? Não foi só pelas espadas: <strong>Cortés aliou-se aos Tlaxcaltecas</strong>, povos que odiavam pagar tributos astecas. E o "aliado invisível" foram as <strong>doenças</strong> (varíola, sarampo, gripe): epidemias mataram mais indígenas do que todas as batalhas, incluindo imperadores como Cuitláhuac, colapsando os impérios por dentro.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Depois da conquista, a Espanha criou os <strong>Vice-Reinos</strong> e impôs o trabalho forçado (<em>Mita</em> nas minas de prata de Potosí; <em>Encomienda</em> nas aldeias). Como a América Espanhola tinha ouro e prata, virou <strong>colônia de exploração</strong>; já a América do Norte, sem metais abundantes, recebeu famílias imigrantes inteiras e virou <strong>colônia de povoamento</strong>, com mercado interno — raiz da diferença de desenvolvimento até hoje.
    </p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Isso Importa Hoje?</h3>
    </div>
    <ul style="font-size:15px; line-height:1.7; color:var(--text-secondary); padding-left:20px; margin:0;">
        <li><strong>América Latina vs. América Anglo-Saxônica:</strong> a diferença entre exploração e povoamento ajuda a explicar por que EUA/Canadá industrializaram primeiro e América Latina ficou como exportadora de matéria-prima.</li>
        <li><strong>Língua e religião:</strong> falar português/espanhol e o catolicismo majoritário da região vêm da catequização forçada da Conquista.</li>
        <li><strong>Debate atual:</strong> Mita e Encomienda são exemplos históricos de trabalho compulsório — base para discutir hoje o trabalho escravo contemporâneo e os direitos trabalhistas.</li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Clássica da Banca do CEFET</div>
    <p>Não confunda <strong>Mita</strong> (trabalho forçado <em>temporário</em> nas minas, herdado das tradições andinas) com <strong>Encomienda</strong> (entrega de aldeias a um colonizador em troca de catequização). E atenção: <strong>Potosí é prata, não ouro</strong>! A varíola e as epidemias foram o fator que mais reduziu a população indígena — não as batalhas.</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> "A América Espanhola e a América Anglo-Saxônica receberam colonizações diferentes, que produziram sociedades com estruturas econômicas distintas." Classifique os dois modelos coloniais e explique a diferença fundamental entre eles.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação</span><br>
        Pede a distinção entre <em>colônia de exploração</em> e <em>colônia de povoamento</em>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Contextualização</span><br>
        Espanha/Portugal buscavam <strong>metais e riquezas</strong> para a metrópole; Inglaterra mandou famílias inteiras buscar <strong>terras e mercado</strong>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Cruzamento com a Teoria</span><br>
        Exploração = latifúndio + monocultura + trabalho escravo/servil (América Latina). Povoamento = pequena propriedade + policultura + trabalho livre (Nova Inglaterra).
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão</span><br>
        América Espanhola/Portuguesa = <strong>colônia de exploração</strong>; América Anglo-Saxônica = <strong>colônia de povoamento</strong> — diferença estrutural que explica desigualdades até hoje.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "O trabalho compulsório temporário indígena nas minas de prata da América espanhola herdado de tradições andinas era a:",
                    options: ["Mita", "Encomienda", "Plantation", "Corveia"],
                    correct: 0,
                    exp: "A Mita (ou Repartimiento no México)."
                }
            ]
        },
        {
            id: "hist-06", title: "6. Brasil Colônia I: Primeiros Contatos, Capitanias & Governo Geral", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: ["hist-03"], examTopics: ["Edital Hist. 15.1: Primeiros contatos e reconhecimento do território", "Edital Hist. 15.2: América portuguesa: feitorias", "Edital Hist. 15.3: Capitanias hereditárias", "Edital Hist. 15.4: Governo-geral", "Edital Hist. 15.5: Relações com os indígenas", "Edital Hist. 15.6: Catequização e resistências"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> De 1500 a 1530 foi o período pré-colonial (troca de pau-brasil por bugigangas no <em>Escambo</em>). Para defender o litoral, Portugal dividiu o país em 15 <em>Capitanias Hereditárias</em>. Como a maioria fracassou (exceto Pernambuco e São Vicente), criaram o <em>Governo Geral</em> em Salvador (1549) junto com a chegada dos jesuítas.</p>`,
            content: `
<div class="card">
    <h3><span class="step-num">2</span> Teoria Descomplicada & A Montagem da Administração</h3>
    <ul>
        <li><strong>Período Pré-Colonial (1500-1530):</strong> Feitorias no litoral, extração do Pau-Brasil pelo escambo com os povos nativos e expedições guarda-costas.</li>
        <li><strong>Capitanias Hereditárias (1534):</strong> Lotes de terra doados aos capitães donatários através da Carta de Doação e Foral. Apenas São Vicente e Pernambuco prosperaram devido à cana-de-açúcar.</li>
        <li><strong>Governo Geral (1549):</strong> Tomé de Sousa funda Salvador (1ª capital do Brasil), centralizando a defesa e a arrecadação de impostos. Chegada dos padres Jesuítas liderados por Manuel da Nóbrega para catequese nos aldeamentos.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Por que Portugal "atrasou" a Colonização do Brasil?</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        Entre 1500 e 1530, Portugal <strong>não se interessou de verdade</strong> pelo Brasil. Toda a atenção e o dinheiro estavam no lucrativo comércio das especiarias da Índia. O que se fazia aqui eram <strong>feitorias</strong> (postos comerciais de praia) para trocar pau-brasil com os indígenas pelo <em>escambo</em> — e até isso era terceirizado para comerciantes como <strong>Fernão de Loronha</strong>, o primeiro a exploração formal da madeira vermelha que tingia tecidos na Europa.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        O problema: franceses começaram a invadir a costa para pegar pau-brasil e contrabandear. Sem dinheiro ou exército para defender o litoral, Portugal teve uma ideia "empreendedora": <strong>dividir o Brasil em 15 Capitanias Hereditárias (1534)</strong> e entregar o território a quem aceitasse colonizá-lo <em>com o próprio bolso</em>. A maioria falhou (selva, distância, ataques indígenas), sobrevivendo só <strong>São Vicente</strong> e <strong>Pernambuco</strong> — que descobriram o ouro branco: a cana-de-açúcar. O fracasso obrigou a Coroa a assumir o jogo, criando o <strong>Governo Geral em Salvador (1549)</strong>, com Tomé de Sousa, e trazendo os <strong>jesuítas</strong> para catequizar e "organizar" a colônia.
    </p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Isso Importa Hoje?</h3>
    </div>
    <ul style="font-size:15px; line-height:1.7; color:var(--text-secondary); padding-left:20px; margin:0;">
        <li><strong>Atratividade de investimentos:</strong> o modelo de capitanias é o avô das concessões modernas — o Estado repassa a exploração de um serviço/território a quem paga e administra por conta própria.</li>
        <li><strong>Língua e identidade:</strong> os jesuítas fundaram as primeiras escolas do Brasil e padronizaram a língua (falavam tupi e português) — a educação pública que você frequenta nasceu ali, de forma improvisada.</li>
        <li><strong>Salvador:</strong> a primeira capital do Brasil guarda essa memória até hoje, com o Pelourinho como marca física do sistema colonial.</li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Clássica da Banca do CEFET</div>
    <p>Capitanias Hereditárias: o donatário recebia a <strong>Carta de Doação</strong> (a terra) e o <strong>Foral</strong> (as regras e obrigações com a Coroa) — a banca adora trocar os dois documentos! E cuidado: o período de 1500–1530 é o <strong>pré-colonial</strong> (só comércio de escambo, sem colonização de verdade); chamar esses 30 anos de "colônia do açúcar" é erro clássico.</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> "Diante da ameaça francesa no litoral e do fracasso da maioria das capitanias, a Coroa portuguesa centralizou a administração colonial." Que medida foi tomada, em que ano e o que ela instalou no Brasil?
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação</span><br>
        Pergunta: qual foi a resposta da Coroa ao fracasso das capitanias e às invasões francesas?
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Contexto</span><br>
        As 15 capitanias (1534) falharam, exceto Pernambuco e São Vicente; franceses ameaçavam o litoral com o contrabando de pau-brasil.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Cruzamento com a Teoria</span><br>
        A resposta foi o <strong>Governo Geral (1549)</strong>: Tomé de Sousa funda <strong>Salvador</strong>, primeira capital, centralizando defesa e impostos; chegam os <strong>jesuítas</strong> de Manuel da Nóbrega.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão</span><br>
        Foi criado o <strong>Governo Geral em 1549</strong>, que instalou a capital em Salvador e trouxe os jesuítas — a primeira estrutura administrativa e escolar do Brasil.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "A primeira capital colonial do Brasil fundada em 1549 pelo primeiro governador-geral Tomé de Sousa foi:",
                    options: ["Rio de Janeiro", "Salvador", "Olinda", "São Vicente"],
                    correct: 1,
                    exp: "Salvador (na Bahia de Todos os Santos)."
                }
            ]
        },
        {
            id: "hist-07", title: "7. Brasil Colônia II: Açúcar, Escravidão & Invasões", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: ["hist-06"], examTopics: ["Edital Hist. 15.7: América portuguesa: açúcar, engenho e trabalho escravo", "Edital Hist. 15.8: O tráfico negreiro e a escravidão", "Edital Hist. 15.9: Respostas à escravidão e quilombos", "Edital Hist. 15.10: As invasões estrangeiras"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> O ciclo do açúcar funcionava no modelo <em>Plantation</em>: grande latifúndio, monocultura de cana e trabalho de africanos escravizados nos engenhos do Nordeste. Os franceses invadiram o Rio de Janeiro (França Antártica) e os holandeses dominaram Pernambuco por 24 anos com Maurício de Nassau.</p>`,
            content: `
<div class="card">
    <h3><span class="step-num">2</span> Teoria Descomplicada & A Sociedade dos Engenhos</h3>
    <ul>
        <li><strong>O Modelo Plantation:</strong> Latifúndio monocultor agroexportador sustentado pelo tráfico transatlântico e escravização violenta de milhões de africanos arrancados de suas terras.</li>
        <li><strong>Sociedade Açucareira:</strong> Patriarcal, rural, estratificada e sem mobilidade social (Casa-Grande vs. Senzala).</li>
        <li><strong>Invasões Francesas:</strong> França Antártica na Baía de Guanabara (RJ - 1555-1567, que motivou a fundação do Rio de Janeiro por Estácio de Sá em 1565) e França Equinocial em São Luís do Maranhão.</li>
        <li><strong>Invasões Holandesas (1624-1654):</strong> Domínio da Companhia das Índias Ocidentais no Nordeste açucareiro sob o governo de Maurício de Nassau. Expulsão dos holandeses na Insurreição Pernambucana (1654), provocando a concorrência do açúcar das Antilhas e a crise da economia açucareira lusa.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Por que o Açúcar e a Escravidão Dominaram o Brasil?</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        No século XVI, o açúcar era um produto de luxo raríssimo na Europa — como um "petróleo doce" que valia fortunas. Portugal tinha o clima ideal no Nordeste, mas <strong>sem capital, sem tecnologia e sem mão de obra</strong>. A solução foi o modelo <strong>Plantation</strong>: latifúndios monocultores agroexportadores, financiados por capital holandês e movidos pelo <strong>trabalho escravizado</strong>.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Primeiro tentou-se escravizar os indígenas, mas a Igreja jesuíta protegia parcialmente os nativos e as epidemias os dizimavam. A solução da Coroa e dos senhores de engenho foi importar africanos escravizados, alimentando o <strong>tráfico transatlântico</strong> — que os próprios holandeses controlavam e vendiam aos portugueses! A sociedade que nasceu daí era <strong>patriarcal e estratificada</strong> (Casa-Grande vs. Senzala). E as guerras: os franceses tentaram implantar a <strong>França Antártica</strong> na Baía de Guanabara (1555–1567), o que motivou a fundação do Rio de Janeiro por Estácio de Sá (1565); depois, os holandeses dominaram Pernambuco por 24 anos sob <strong>Maurício de Nassau</strong>, até serem expulsos na Insurreição Pernambucana (1654).
    </p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Isso Importa Hoje?</h3>
    </div>
    <ul style="font-size:15px; line-height:1.7; color:var(--text-secondary); padding-left:20px; margin:0;">
        <li><strong>Estrutura fundiária atual:</strong> o latifúndio do açúcar deixou marcas na distribuição de terras do Brasil — as discussões sobre reforma agrária e grandes propriedades rurais têm raízes nesse modelo Plantation.</li>
        <li><strong>Diversidade cultural:</strong> a religião, a culinária (acarajé, dendê), a música (samba) e o vocabulário brasileiros são herança direta da população africana trazida nesse período.</li>
        <li><strong>Economia internacional:</strong> o ciclo do açúcar foi o primeiro grande negócio global do Brasil: capital holandês financiava, a África fornecia mão de obra e a Europa comprava o produto — a lógica do "commodity export" que ainda define parte da economia brasileira.</li>
    </ul>
</div>

<div class="box-warning" style="margin-bottom:20px;">
    <div class="box-header">⚠️ A Pegadinha Clássica da Banca do CEFET</div>
    <p>Atenção às datas e aos nomes: a <strong>França Antártica</strong> foi na Guanabara/RJ (franceses) e a <strong>França Equinocial</strong> em São Luís do Maranhão — a banca adora inverter! E o motivo da <strong>crise do açúcar</strong> após 1654 foi a concorrência do açúcar holandês nas <strong>Antilhas</strong> (eles aprenderam tudo em Pernambuco), não o esgotamento do solo sozinho.</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> "O modelo açucareiro brasileiro combinava grande propriedade rural, produção única voltada à exportação e mão de obra escravizada." Que nome recebe esse modelo e quais suas três características definidoras?
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação</span><br>
        O enunciado descreve o modelo econômico-social do açúcar: qual é e quais são as 3 características?
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Contexto</span><br>
        Século XVI–XVII, Nordeste brasileiro, engenhos financiados por capital holandês e voltados ao mercado europeu.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Cruzamento com a Teoria</span><br>
        Modelo = <strong>Plantation</strong>: (1) <strong>Latifúndio</strong> (grande propriedade); (2) <strong>Monocultura</strong> (só cana-de-açúcar); (3) <strong>Trabalho escravo</strong> (africanos no tráfico transatlântico).
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão</span><br>
        O modelo é o <strong>Plantation</strong>, definido por latifúndio + monocultura + escravidão — estrutura que moldou a sociedade brasileira (patriarcal, rural, desigual) por séculos.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "A fundação da cidade de São Sebastião do Rio de Janeiro por Estácio de Sá em 1565 teve como objetivo primordial:",
                    options: [
                        "Iniciar o ciclo da mineração de ouro",
                        "Expulsar os colonizadores franceses estabelecidos na Baía de Guanabara (França Antártica)",
                        "Transferir a capital colonial de Salvador",
                        "Fundar o primeiro engenho de açúcar do Brasil"
                    ],
                    correct: 1,
                    exp: "Expulsar os franceses comandados por Nicolas Durand de Villegagnon."
                }
            ]
        },
        {
            id: "hist-08", title: "8. Brasil Colônia III: Mineração, Ouro & Movimentos Coloniais", time: "35 min", difficulty: "difícil",
            track: "selecao", prerequisites: ["hist-07"], examTopics: ["Edital Hist. 15.11: A economia do ouro e mineração", "Edital Hist. 15.12: Movimentos coloniais (resistência e revolta)"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> No século XVIII, a descoberta de ouro em Minas Gerais mudou o eixo do Brasil e transferiu a capital para o Rio de Janeiro em 1763. A cobrança violenta de impostos (como a Derrama) provocou a <em>Inconfidência Mineira</em> (1789 - elitista, queria independência de MG). Já na Bahia, a <em>Conjuração Baiana</em> (1798) foi popular e negra, defendendo a abolição da escravidão e a república!</p>`,
            content: `
<div class="box-analogy">
    <div class="box-header">🔗 Bloco 1: A Analogia Intuitiva</div>
    <p>A mineração transformou o Brasil de uma sociedade rural e silenciosa de engenhos em um centro urbano agitado de cidades de pedra, comércio de mulas e intensa fiscalização da Coroa portuguesa.</p>
</div>
<div class="card">
    <h3><span class="step-num">2</span> Teoria Descomplicada & O Século do Ouro e as Revoltas</h3>
    <ul>
        <li><strong>A Economia Mineradora:</strong> O Quinto (20% do ouro para o rei), as Casas de Fundição (ouro em barras com o selo real) e a <strong>Derrama</strong> (cobrança forçada quando a cota anual de 100 arrobas não era atingida).</li>
        <li><strong>Mudança da Capital (1763):</strong> Transferida de Salvador para o <strong>Rio de Janeiro</strong> pelo Marquês de Pombal para fiscalizar de perto o porto de escoamento do ouro das Gerais.</li>
        <li><strong>Atividades Complementares:</strong> Pecuária no sertão nordestino e no Sul (charque), tropeirismo e drogas do sertão na Amazônia.</li>
        <li><strong>Resistência Negra e Quilombos:</strong> Quilombo dos Palmares em Alagoas com Zumbi e Dandara.</li>
        <li><strong>Inconfidência Mineira (1789):</strong> Movimento da elite de Vila Rica influenciado pelo Iluminismo e independência dos EUA; lutava contra a Derrama pela república em Minas Gerais, mas <strong>não propunha o fim da escravidão</strong>. Tiradentes foi enforcado e esquartejado.</li>
        <li><strong>Conjuração Baiana / Revolta dos Alfaiates (1798):</strong> Movimento popular, de soldados e negros libertos; <strong>defendia explicitamente a abolição da escravidão</strong>, a proclamação da república e a igualdade racial.</li>
    </ul>
</div>
<div class="box-warning">
    <div class="box-header">⚠️ A Pegadinha Clássica da Banca do CEFET</div>
    <p>A <strong>Conjuração Baiana (1798)</strong> era abolicionista e popular, enquanto a <strong>Inconfidência Mineira (1789)</strong> era elitista e manteve-se omissa quanto à libertação dos escravizados!</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Por que o Ouro Mudou Tudo (e por que nasceram as Revoltas)?</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        No fim do século XVII, quando o açúcar entrou em crise, <strong>bandeirantes</strong> que exploravam o interior acharam ouro nas montanhas de Minas Gerais. Em poucas décadas, a região virou o coração econômico do Brasil: cidades como Vila Rica (Ouro Preto) floresciam com igrejas barrocas, poetas, comércio e uma vida urbana inédita na colônia.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        A Coroa, porém, queria a sua fatia: cobrava o <strong>Quinto</strong> (20% de todo ouro) e, quando a cota não era atingida, despejava a <strong>Derrama</strong> — uma cobrança brutal que mandava soldados invadirem as casas. Somado ao esgotamento do ouro e às ideias novas chegando da Europa e dos EUA (Iluminismo, independência americana), o clima de revolta se formou. Em 1789, a elite mineira planejou a <strong>Inconfidência Mineira</strong> — mas, delatada, foi esmagada; Tiradentes, o único de origem humilde, pagou com a vida. Nove anos depois, em 1798, alfaiates, soldados e negros libertos da Bahia gritaram na <strong>Conjuração Baiana</strong> algo ainda mais radical: fim da escravidão e república.
    </p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Isso Importa Hoje?</h3>
    </div>
    <ul style="font-size:15px; line-height:1.7; color:var(--text-secondary); padding-left:20px; margin:0;">
        <li><strong>Tiradentes é o herói nacional:</strong> seu rosto está no centavo, seu nome está em ruas, escolas e no próprio feriado de 21 de abril — e ele foi um militar de origem humilde que virou símbolo da luta contra a injustiça fiscal.</li>
        <li><strong>Barroco mineiro:</strong> as igrejas de Aleijadinho e Ouro Preto, Patrimônio da Humanidade, são fruto direto da riqueza do ouro — arte que você pode visitar em excursões escolares.</li>
        <li><strong>Justiça fiscal:</strong> a revolta contra tributos abusivos (Derrama) dialoga com o debate atual sobre para onde vão os impostos que pagamos.</li>
    </ul>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Compare a Inconfidência Mineira (1789) e a Conjuração Baiana (1798) em três critérios: composição social, objetivos e desdobramento da repressão.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação</span><br>
        Questão de comparação: montar um "contraste" entre os dois movimentos.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Composição Social</span><br>
        Mineira: <strong>elite</strong> (fazendeiros, padres, intelectuais). Baiana: <strong>povo</strong> (alfaiates, soldados, negros libertos).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Objetivos e Repressão</span><br>
        Mineira: independência de MG, república, mas <strong>sem fim da escravidão</strong>; repressão: Tiradentes enforcado e esquartejado. Baiana: <strong>abolicionista</strong> e republicana; repressão: lideres como João de Deus e Lucas Dantas também executados.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão</span><br>
        A Inconfidência Mineira foi elitista e moderada; a Conjuração Baiana foi popular e radicalmente abolicionista — por isso a banca destaca a Baiana como a mais avançada socialmente das revoltas coloniais.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "A transferência da capital da colônia de Salvador para o Rio de Janeiro em 1763 decorreu principalmente:",
                    options: [
                        "Da invasão holandesa em Salvador",
                        "Da necessidade de aproximar a administração colonial do porto de escoamento e fiscalização do ouro de Minas Gerais",
                        "Do término da produção açucareira",
                        "Da proclamação da República"
                    ],
                    correct: 1,
                    exp: "O eixo econômico migrou para o Sudeste minerador."
                },
                {
                    type: "mc",
                    q: "Ao contrário da Inconfidência Mineira (1789), a Conjuração Baiana (1798) caracterizou-se por:",
                    options: [
                        "Ser um movimento puramente militar da elite açucareira",
                        "Defender abertamente a abolição da escravidão e ter ampla participação popular e negra",
                        "Pretender a manutenção dos laços com a Coroa portuguesa",
                        "Ocorrer nas regiões mineradoras do Sul"
                    ],
                    correct: 1,
                    exp: "A Conjuração Baiana (Revolta dos Alfaiates) foi radicalmente abolicionista e popular."
                }
            ]
        }
        ]
    },

    /* ─────────────────────────────────────────────────────────────
       7. GEOGRAFIA (4 Módulos: 4 Seleção — COBERTURA COMPLETA)
       ───────────────────────────────────────────────────────────── */
    {
        id: "geo", name: "Geografia", icon: "🌍",
        modules: [
        {
            id: "geo-01", title: "1. Cartografia, Coordenadas & Fusos Horários", time: "25 min", difficulty: "fácil",
            track: "selecao", prerequisites: [], examTopics: ["Edital Geo. 1.1: Noções de cartografia", "Edital Geo. 1.2: Orientação e localização", "Edital Geo. 1.3: Coordenadas geográficas", "Edital Geo. 1.4: Fusos horários"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> A <em>Latitude</em> (linhas horizontais, Equador 0°) vai de 0° a 90° Norte/Sul e define os climas. A <em>Longitude</em> (linhas verticais, Greenwich 0°) vai de 0° a 180° Leste/Oeste e define os fusos horários. Para Leste as horas somam (+), para Oeste subtraem (-). O Brasil tem 4 fusos horários (o horário oficial de Brasília é UTC-3).</p>`,
            content: `
<div class="box-analogy">
    <div class="box-header">🔗 Bloco 1: A Analogia Intuitiva</div>
    <p>As <strong>Coordenadas Geográficas</strong> são o endereço digital do globo: as linhas horizontais de <strong>Latitude</strong> dizem se você está perto do calor do Equador ou do frio dos polos; as de <strong>Longitude</strong> regulam os ponteiros do seu relógio!</p>
</div>
<div class="card">
    <h3><span class="step-num">2</span> Teoria Descomplicada & Os 4 Fusos Brasileiros</h3>
    <div class="box-formula">
        Cada fuso = 15° de longitude = 1 hora de diferença.<br>
        Para LESTE (direita) ──> SOMA HORAS (+)<br>
        Para OESTE (esquerda) ──> SUBTRAI HORAS (−)<br>
        Horário Oficial de Brasília = UTC − 3h.<br>
    </div>
    <ul>
        <li><strong>1º Fuso (UTC−2):</strong> Ilhas oceânicas (Fernando de Noronha, Trindade).</li>
        <li><strong>2º Fuso (UTC−3):</strong> Horário Oficial de Brasília, cobrindo todo o Sudeste, Sul, Nordeste e parte do Centro-Oeste/Norte.</li>
        <li><strong>3º Fuso (UTC−4):</strong> Mato Grosso, Mato Grosso do Sul, Rondônia, Roraima e parte do Amazonas.</li>
        <li><strong>4º Fuso (UTC−5):</strong> Acre e extremo oeste do Amazonas.</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Por que as Coordenadas e os Fusos Foram Criados?</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:12px;">
        A <strong>Latitude</strong> foi fácil: marinheiros gregos e árabes já a mediam pela altura das estrelas há milhares de anos. A <strong>Longitude</strong>, porém, foi um dos maiores pesadelos da ciência: navegar e <em>não saber onde você está</em> no leste-oeste causou milhares de naufrágios. Em 1707, uma frota inglesa inteira se perdeu e morreram mais de 1.400 marinheiros — o Parlamento britânico ofereceu um prêmio enorme ("Prêmio da Longitude") para quem resolvesse o problema.
    </p>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        A solução veio do relojoeiro <strong>John Harrison</strong>, que construiu (1761) o primeiro <strong>cronômetro marítimo</strong> preciso: sabendo a hora exata de Greenwich e comparando com o nascer do Sol local, calculava-se a longitude. Em 1884, uma conferência internacional escolheu o Observatório de <strong>Greenwich</strong> (Londres) como o meridiano 0° — e o mundo todo passou a "rodar" em torno dele: 360° ÷ 24 horas = <strong>15° por hora</strong>, a base de todos os fusos horários até o seu celular.
    </p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Isso Importa Hoje?</h3>
    </div>
    <ul style="font-size:15px; line-height:1.7; color:var(--text-secondary); padding-left:20px; margin:0;">
        <li><strong>GPS e delivery:</strong> o aplicativo que traz sua pizza usa coordenadas (latitude/longitude em graus decimais) — a mesma lógica de Harrison, agora com satélites e relógios atômicos.</li>
        <li><strong>Transmissões ao vivo:</strong> um jogo às 18h em Brasília começa às 16h no Acre — as variáveis de fuso organizam shows, e-sports e provas do ENEM em todo o país.</li>
        <li><strong>Aviação e jet lag:</strong> voar para oeste "ganha" horas, para leste "perde" — o jet lag é sua biologia levando algumas horas para se adaptar ao fuso de destino.</li>
    </ul>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Uma aula ao vivo da plataforma começa às 20h no horário de Brasília (UTC−3). Que horas são em Fernando de Noronha (UTC−2) e no Acre (UTC−5) quando a aula começa?
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação</span><br>
        Referência: Brasília 20h (UTC−3). Comparar com UTC−2 (a leste) e UTC−5 (a oeste).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Regra dos Fusos</span><br>
        Para <strong>leste: SOMA</strong> horas; para <strong>oeste: SUBTRAI</strong> horas (cada fuso = 1h).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Cálculo</span><br>
        Noronha (a leste): 20h + 1h = <strong>21h</strong>. Acre (a oeste): 20h − 2h = <strong>18h</strong>.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão</span><br>
        Quando a aula começa às 20h em Brasília, são <strong>21h em Noronha</strong> e <strong>18h no Acre</strong> — o Brasil "acorda" de leste para oeste, seguindo a rotação da Terra.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Se um evento ao vivo começa às 18h no Horário Oficial de Brasília (UTC−3), a que horas os moradores do Acre (UTC−5) devem sintonizar?",
                    options: ["16h", "17h", "19h", "20h"],
                    correct: 0,
                    exp: "O Acre está 2 horas a menos que Brasília (18h − 2h = 16h)."
                }
            ]
        },
        {
            id: "geo-02", title: "2. Relevo, Placas Tectônicas, Climas & Domínios", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: [], examTopics: ["Edital Geo. 2.1: Estrutura geológica da Terra", "Edital Geo. 2.2: Placas tectônicas", "Edital Geo. 2.3: Processos de formação do relevo", "Edital Geo. 2.4: Tipos de relevo", "Edital Geo. 2.5: Hidrografia", "Edital Geo. 2.6: Clima e suas classificações", "Edital Geo. 2.7: Vegetação e domínios morfoclimáticos", "Edital Geo. 2.8: Zonas climáticas e nível de insolação", "Edital Geo. 2.9: Fatores e elementos climáticos"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> O Brasil não tem vulcões ativos nem grandes terremotos porque fica no centro estável da Placa Sul-Americana. Aziz Ab'Sáber dividiu o país em 6 Domínios Morfoclimáticos (Amazônico, Cerrado, Mares de Morros, Caatinga, Araucárias, Pradarias) e as Faixas de Transição (como o Pantanal e o Agreste).</p>`,
            content: `
<div class="card">
    <h3><span class="step-num">2</span> Teoria Descomplicada & Os Domínios de Ab'Sáber</h3>
    <ul>
        <li><strong>Amazônico:</strong> Terras baixas, Clima Equatorial úmido e floresta densa latifoliada.</li>
        <li><strong>Cerrado:</strong> Planalto Central, Clima Tropical típico (verão chuvoso, inverno seco), solos ácidos e árvores de troncos tortuosos com raízes profundas.</li>
        <li><strong>Mares de Morros:</strong> Relevo mamelonar ('meias-laranjas') na faixa costeira atlântica (Mata Atlântica, sujeito a deslizamentos no verão nas serras do RJ).</li>
        <li><strong>Caatinga:</strong> Sertão semiárido, chuvas escassas e irregulares, vegetação xerófila com cactos adaptados à seca.</li>
        <li><strong>Araucárias:</strong> Planalto Sul com clima subtropical e pinheiro-do-paraná.</li>
        <li><strong>Pradarias:</strong> Campos abertos e relevo suave (Pampa no RS).</li>
        <li><strong>Faixas de Transição:</strong> Áreas de contato e transição ecológica entre domínios (destaque para o <strong>Pantanal Mato-Grossense</strong> e o <strong>Agreste</strong> nordestino).</li>
    </ul>
</div>
<div class="box-warning">
    <div class="box-header">⚠️ Placas Tectônicas no Brasil</div>
    <p>O Brasil está no centro da Placa Tectônica Sul-Americana, longe das bordas de colisão. Por isso, nosso relevo é antigo, desgastado pela erosão e livre de vulcões ativos ou terremotos de grande magnitude.</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Como a Humanidade Descobriu que os Continentes "Nadam"?</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Em 1912, o meteorologista alemão <strong>Alfred Wegener</strong> notou que o mapa-múndi parecia um <strong>quebra-cabeça</strong>: a costa leste da América do Sul encaixava na costa oeste da África. Ele propôs que os continentes já estiveram unidos num supercontinente (<em>Pangeia</em>) e se separaram — e foi <strong>zombado pela comunidade científica</strong>, porque não sabia explicar o "motor" do movimento. Só nos anos 1960, com sonares que mapearam o fundo do oceano, descobriu-se o segredo: nos <strong>dorsais oceânicos</strong>, magma sobe e cria crosta nova, <strong>empurrando as placas</strong> como uma esteira transportadora gigante. A teoria das placas tectônicas nasceu aí — e explica terremotos do Chile, vulcões do Pacífico e por que o Brasil é uma "ilha de paz" geológica no centro estável da Placa Sul-Americana.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: Por que o Cerrado Tem "Árvores de Garrafa"?</div>
    <p>Cada domínio morfoclimático é uma <strong>"resposta" da natureza ao clima local</strong>: na <strong>Caatinga</strong>, os cactos armazenam água e perdem folhas para não transpirar (economia no deserto). No <strong>Cerrado</strong>, os troncos grossos e tortuosos (tipo garrafa) guardam água contra os incêndios e as raízes descem <strong>15 metros</strong> para achar água no subsolo ácido. Nos <strong>Mares de Morros</strong> do RJ, as encostas "meia-laranja" com mata preservada seguram o solo — é quando o homem desmata para favela/construção que a chuva de verão traz <strong>deslizamentos</strong>. Geografia e biologia são a mesma história: <em>clima molda solo, solo molda vegetação, vegetação molda a paisagem</em>.</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> "Região brasileira com planaltos de solos ácidos, chuvas concentradas no verão e inverno seco, vegetação de raízes profundas e troncos espessos." Identifique o domínio morfoclimático e explique a adaptação da vegetação.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação</span><br>
        Palavras-chave: <em>solos ácidos</em>, <em>inverno seco</em>, <em>troncos espessos</em>.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Localização</span><br>
        Clima tropical com duas estações + Planalto Central = interior do Brasil (GO, MT, MG, DF).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Cruzamento com a Teoria</span><br>
        Domínio = <strong>Cerrado</strong>. Adaptações: raízes profundas alcançam o lençol na estação seca; troncos "de garrafa" armazenam água e resistem ao fogo natural dos cerrados.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão</span><br>
        O domínio descrito é o <strong>Cerrado</strong>, cuja vegetação (xeromórfica) evoluiu como resposta ao clima tropical alternado (chuvoso × seco) e aos solos ácidos do Planalto Central — prova de que clima, solo e vegetação formam um único sistema.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "O domínio morfoclimático brasileiro caracterizado por clima semiárido e vegetação xerófila é a:",
                    options: ["Caatinga", "Cerrado", "Mares de Morros", "Araucárias"],
                    correct: 0,
                    exp: "Caatinga no semiárido nordestino."
                }
            ]
        },
        {
            id: "geo-03", title: "3. Espaço Brasileiro: Regiões, Agro, Cidades & Demografia", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: ["geo-01", "geo-02"], examTopics: ["Edital Geo. 3.1: Regiões do IBGE", "Edital Geo. 3.2: Complexos regionais", "Edital Geo. 3.3: Agricultura e pecuária", "Edital Geo. 3.4: Extrativismo vegetal e mineral", "Edital Geo. 3.5: Urbanização brasileira", "Edital Geo. 3.6: Redes urbanas e megacidades", "Edital Geo. 3.7: População brasileira, migrações e indicadores demográficos"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> O Brasil tem duas grandes divisões: as 5 Regiões do IBGE (respeitam limites dos estados) e os 3 Complexos Geoeconômicos de Pedro Pinchas Geiger (Amazônia, Nordeste e Centro-Sul). A população brasileira está envelhecendo: nascem menos bebês (base da pirâmide etária estreitando) e as pessoas vivem mais.</p>`,
            content: `
<div class="card">
    <h3><span class="step-num">2</span> Teoria Descomplicada & As Divisões Regionais</h3>
    <ul>
        <li><strong>Divisão do IBGE (5 Regiões Políticas):</strong> Norte, Nordeste, Centro-Oeste, Sudeste e Sul (respeita estritamente as fronteiras estaduais).</li>
        <li><strong>Complexos Geoeconômicos (3 Regiões de Geiger):</strong> Amazônia, Nordeste e Centro-Sul (baseada em critérios econômicos e históricos, não respeita as divisas dos estados).</li>
        <li><strong>Transição Demográfica Brasileira:</strong> Queda acentuada nas taxas de fecundidade e natalidade (base da pirâmide estreita) e aumento da expectativa de vida (topo alarga).</li>
        <li><strong>Agropecuária:</strong> Agronegócio exportador em grandes propriedades monocultoras mecanizadas (soja/milho) vs. Agricultura Familiar (produz mais de 70% dos alimentos de consumo interno).</li>
    </ul>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Por que Dividimos o Brasil de Duas Formas Diferentes?</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        As 5 <strong>Regiões do IBGE</strong> (1970) foram criadas para <strong>organizar estatísticas e políticas públicas</strong>: como respeitam as divisas dos estados, o governo consegue comparar dados de saúde, educação e economia de forma padronizada. Já os <strong>Complexos Geoeconômicos de Geiger</strong> (1967) nasceram de uma insatisfação científica: para o geógrafo, as fronteiras políticas <em>escondiam</em> a realidade — o norte de Minas, por exemplo, é economicamente muito mais parecido com o Nordeste que com o Sudeste. Geiger então traçou 3 regiões pela <strong>história econômica</strong> (Amazônia de extrativismo, Nordeste colonial açucareiro, Centro-Sul industrial), mesmo que isso "corte" estados no meio. Uma divisão é <strong>administrativa</strong>, a outra é <strong>analítica</strong> — e a prova adora pedir exatamente essa diferença.
    </p>
</div>

<div class="box-analogy" style="margin-bottom:20px;">
    <div class="box-header">💡 A Grande Sacada: A Pirâmide Etária como História em Fotos</div>
    <p>A pirâmide etária é uma <strong>máquina do tempo invertida</strong>: a <strong>base</strong> são as crianças que acabaram de nascer, o <strong>meio</strong> são os adultos em idade de trabalhar, e o <strong>topo</strong> são os idosos que sobreviveram. A pirâmide do Brasil está <strong>ficando com forma de "taco de hóquei"</strong>: a base encolhe (mulheres têm menos filhos — hoje ~1,6 filho por mulher, abaixo da taxa de reposição de 2,1) e o topo alarga (saúde e vacinas fizeram a vida média saltar de ~45 anos em 1940 para ~75 hoje). Isso é a <strong>transição demográfica</strong> — e traz um desafio novo: <em>menos jovens pagando previdência e mais idosos precisando dela</em>.</p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Um município apresentou, entre dois censos, queda da taxa de natalidade, aumento da expectativa de vida e envelhecimento da base da pirâmide. Cite o fenômeno demográfico envolvido e duas consequências sociais.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação</span><br>
        Sintomas: menos nascimentos + mais longevidade = qual fenômeno?
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Identificação</span><br>
        Fenômeno = <strong>transição demográfica</strong> (fase avançada, com envelhecimento populacional).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Consequências</span><br>
        (1) Pressão sobre a <strong>previdência e a saúde</strong> (mais aposentados e idosos do que contribuintes); (2) escassez futura de <strong>mão de obra jovem</strong>; (3) escolas fechando séries por falta de crianças.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão</span><br>
        O município atravessa a fase avançada da <strong>transição demográfica</strong>: a sociedade envelhece e precisa reorganizar previdência, saúde e educação — tema recorrente em questões de pirâmide etária.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "A divisão do Brasil em três Complexos Geoeconômicos (Amazônia, Nordeste e Centro-Sul) foi proposta pelo geógrafo:",
                    options: ["Pedro Pinchas Geiger", "Aziz Ab'Sáber", "Milton Santos", "Josué de Castro"],
                    correct: 0,
                    exp: "Pedro Pinchas Geiger (1967)."
                }
            ]
        },
        {
            id: "geo-04", title: "4. Geopolítica Mundial, Continentes & Globalização", time: "30 min", difficulty: "médio",
            track: "selecao", prerequisites: ["geo-01"], examTopics: ["Edital Geo. 4.1: Continentes do mundo", "Edital Geo. 4.2: Geopolítica mundial e globalização"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> A <em>Globalização</em> integra o mundo através da internet, telecomunicações e transportes rápidos, impulsionada pelas empresas multinacionais. Os países se unem em <em>Blocos Econômicos</em> (como a União Europeia, o MERCOSUL e o bloco dos BRICS) para fortalecer o comércio e o poder geopolítico.</p>`,
            content: `
<div class="box-analogy">
    <div class="box-header">🔗 Bloco 1: A Analogia Intuitiva</div>
    <p>A globalização transformou a Terra no que o sociólogo Marshall McLuhan chamou de <strong>'Aldeia Global'</strong>: você assiste no Rio de Janeiro a um evento transmitido em tempo real de Tóquio, comendo um lanche de uma franquia multinacional e conversando com alguém na Europa pela internet instantânea.</p>
</div>
<div class="card">
    <h3><span class="step-num">2</span> Teoria Descomplicada, Continentes & Blocos Econômicos</h3>
    <ul>
        <li><strong>Os Continentes:</strong>
            <ul>
                <li><strong>Américas:</strong> Divisão física (Norte, Central, Sul) e histórico-cultural (América Anglo-Saxônica rica e industrializada vs. América Latina em desenvolvimento).</li>
                <li><strong>África:</strong> Berço da humanidade, grande diversidade étnica e mineral, dividida pelo deserto do Saara em África do Norte e África Subsaariana.</li>
                <li><strong>Europa:</strong> Berço da revolução industrial, alto IDH e centro da integração da União Europeia.</li>
                <li><strong>Ásia:</strong> Maior continente e mais populoso do mundo (China e Índia com mais de 1,4 bilhão de pessoas cada); destaque para os Tigres Asiáticos e a ascensão tecnológica e fabril.</li>
                <li><strong>Oceania & Antártica:</strong> Austrália e Nova Zelândia desenvolvidas; Antártica como continente gelado dedicado à pesquisa científica sob o Tratado Antártico.</li>
            </ul>
        </li>
        <li><strong>A Globalização & Redes Técnicas:</strong> Meio técnico-científico-informacional (Milton Santos), fluxo instantâneo de capitais financeiros, informação e mercadorias, e atuação hegemônica das empresas transnacionais.</li>
        <li><strong>Principais Blocos Econômicos:</strong>
            <ul>
                <li><strong>MERCOSUL:</strong> Mercado Comum do Sul (Brasil, Argentina, Paraguai e Uruguai) em fase de União Aduaneira com Tarifa Externa Comum (TEC).</li>
                <li><strong>União Europeia (UE):</strong> Bloco mais avançado com mercado comum e união econômica e monetária (Zona do Euro).</li>
                <li><strong>BRICS:</strong> Agrupamento geopolítico de economias emergentes (Brasil, Rússia, Índia, China, África do Sul e novos membros) para cooperação e equilíbrio da ordem multipolar.</li>
            </ul>
        </li>
    </ul>
</div>
<div class="box-warning">
    <div class="box-header">⚠️ A Face Desigual da Globalização</div>
    <p>A globalização NÃO beneficia a todos de forma igual: ela intensifica a concentração de riquezas nas mãos de grandes conglomerados corporativos e aprofunda a exclusão digital e a desigualdade socioeconômica entre nações ricas e pobres.</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Como o Mundo "Encolheu"? (Da Caravela ao Contêiner)</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Cada era globalizadora teve sua tecnologia-chave. Na primeira globalização (séc. XV–XVI), foram as <strong>caravelas</strong>. Na segunda (séc. XIX), os <strong>navios a vapor, o telégrafo e as ferrovias</strong>. A terceira — a atual — nasceu de uma invenção prosaica: em 1956, o caminhoneiro americano <strong>Malcom McLean</strong> padronizou o <strong>contêiner</strong> de metal, que podia saltar do caminhão para o navio sem descarregar a carga item por item. O custo de enviar mercadorias pelo mundo <strong>desabou</strong> — e somou-se à <strong>internet</strong> (anos 1990), que tornou instantânea a troca de dinheiro e informação. Hoje, o tênis que você compra pode ser desenhado nos EUA, ter o tecido tecido no Vietnã e ser montado na Indonésia em <strong>cadeias produtivas globais</strong> — o coração da globalização.
    </p>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> "Países se agrupam para facilitar trocas comerciais e ganhar força coletiva." Compare a União Europeia e o MERCOSUL quanto ao nível de integração e dê um exemplo de conquista de cada bloco.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação</span><br>
        Comparar dois blocos quanto ao <em>nível de integração</em> (zona de livre comércio → união aduaneira → mercado comum → união monetária).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Analisar a UE</span><br>
        Bloco <strong>mais avançado do mundo</strong>: mercado comum, livre circulação de pessoas (Schengen) e <strong>moeda única (euro)</strong> — união econômica e monetária plena.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Analisar o MERCOSUL</span><br>
        Fase de <strong>união aduaneira incompleta</strong>: maioria das tarifas internas zeradas e Tarifa Externa Comum (TEC), mas sem moeda única nem livre circulação total de pessoas.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão</span><br>
        A UE está no estágio máximo (união monetária — exemplo: o euro); o MERCOSUL está em estágio intermediário (exemplo: TEC). Blocos existem para ganhar escala e poder de negociação frente a China, EUA e outros gigantes — lógica da globalização em ação.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "O bloco econômico sul-americano criado pelo Tratado de Assunção em 1991 que inclui Brasil, Argentina, Paraguai e Uruguai é o:",
                    options: ["MERCOSUL", "NAFTA", "União Europeia", "Pacto Andino"],
                    correct: 0,
                    exp: "MERCOSUL (Mercado Comum do Sul)."
                },
                {
                    type: "mc",
                    q: "A denominação 'Aldeia Global' refere-se ao fenômeno de:",
                    options: [
                        "Isolamento cultural das nações rurais",
                        "Encurtamento das distâncias e integração mundial das telecomunicações e comércio na Globalização",
                        "Fim de todos os blocos econômicos",
                        "Proibição do trânsito de pessoas entre continentes"
                    ],
                    correct: 1,
                    exp: "Integração e instantaneidade dos fluxos mundiais na Globalização."
                }
            ]
        }
        ]
    },

    /* ─────────────────────────────────────────────────────────────
       8. MÓDULO TRANSVERSAL DE REFORÇO (1 Módulo)
       ───────────────────────────────────────────────────────────── */
    {
        id: "trans", name: "Habilidades Transversais", icon: "📊",
        modules: [
        {
            id: "trans-01", title: "1. Leitura & Interpretação de Gráficos, Tabelas e Dados", time: "25 min", difficulty: "nivelamento",
            track: "reforco", prerequisites: [], examTopics: ["Habilidade Transversal BNCC — Leitura e interpretação de gráficos, tabelas e dados em todas as disciplinas do Edital"],
            simpleExplanation: `<p><strong>Em palavras simples:</strong> Gráficos são histórias desenhadas com números: o eixo horizontal ($X$) geralmente mostra o tempo ou a causa, e o eixo vertical ($Y$) mostra o resultado. Gráficos de barras comparam quantidades, de linhas mostram evolução no tempo, de setores (pizza) mostram fatias percentuais de um todo (100%).</p>`,
            content: `
<div class="box-analogy">
    <div class="box-header">🔗 Bloco 1: A Analogia Intuitiva</div>
    <p>Ler um gráfico é como ler uma bússola de bordo: antes de olhar qualquer número, leia o <strong>Título</strong>, a <strong>Legenda</strong> e o que mede cada um dos dois <strong>Eixos ($X$ e $Y$)</strong>!</p>
</div>
<div class="card">
    <h3><span class="step-num">2</span> Teoria Descomplicada & Os 4 Tipos de Gráficos em Provas</h3>
    <ul>
        <li><strong>Gráfico de Linhas:</strong> Ideal para enxergar tendências contínuas no tempo (temperatura ao longo das horas, velocidade no MRU/MRUV, curva de aquecimento de substâncias na Química).</li>
        <li><strong>Gráfico de Barras / Colunas:</strong> Compara grandezas discretas entre categorias diferentes (produção agrícola por estado, casos de dengue por ano).</li>
        <li><strong>Gráfico de Setores (Pizza):</strong> Mostra a divisão proporcional das fatias de um todo totalizando rigorosamente 100% (ou 360° no círculo).</li>
        <li><strong>Climograma:</strong> Gráfico duplo clássico da Geografia — colunas azuis mostram a precipitação (chuva em mm) e a linha vermelha mostra a temperatura (°C) ao longo dos 12 meses do ano.</li>
    </ul>
</div>
<div class="box-warning">
    <div class="box-header">⚠️ A Pegadinha Clássica da Banca do CEFET</div>
    <p>Sempre verifique as UNIDADES DE MEDIDA nos eixos! Um eixo em 'milhares de habitantes' com número 5 significa 5.000 pessoas, e não 5.</p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid var(--accent);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🏛️</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Por que os Gráficos Foram Inventados?</h3>
    </div>
    <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin:0;">
        Em 1786, o escocês <strong>William Playfair</strong> — irmão de um matemático e ex-aprendiz de caldeireiro — teve uma ideia revolucionária: em vez de publicar tabelas intermináveis de números sobre economia britânica, ele <strong>desenhou</strong> os dados. Inventou assim o gráfico de linhas, o de barras e (pouco depois) o de setores ("pizza"). A maioria dos cientistas da época torceu o nariz, mas hoje <strong>nenhuma ciência funciona sem visualização de dados</strong>: dashboards de pandemia, climogramas do INMET, desempenho escolar do IDEB e até o gráfico de barras do progresso do seu jogo favorito são herdeiros de Playfair. Ler gráfico virou habilidade de sobrevivência — e o CEFET cobra isso em <em>todas</em> as disciplinas.
    </p>
</div>

<div class="card" style="margin-bottom:20px; border-left: 5px solid #10b981;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <span style="font-size:24px;">🌍</span>
        <h3 style="margin:0; font-size:17px; color:var(--text-primary);">Onde Isso Importa Hoje?</h3>
    </div>
    <ul style="font-size:15px; line-height:1.7; color:var(--text-secondary); padding-left:20px; margin:0;">
        <li><strong>No CEFET e no ENEM:</strong> questões de Física (gráficos v×t), Química (curvas de aquecimento), Geografia (climogramas, pirâmides) e Biologia (crescimento populacional) são, no fundo, a MESMA habilidade: ler eixos e extrair informação.</li>
        <li><strong>No mercado de trabalho:</strong> programador, técnico, engenheiro ou enfermeiro — todos leem dashboards e relatórios visuais todos os dias.</li>
        <li><strong>No noticiário:</strong> gráficos de COVID, inflação e eleições podem <strong>enganar</strong> se você não souber ler eixos e escalas — alfabetização visual é cidadania.</li>
    </ul>
</div>

<div class="example-solved">
    <div class="ex-title">✏️ Exemplo Real Estilo CEFET Resolvido em 4 Etapas</div>
    <div class="ex-problem">
        <strong>Situação-Problema:</strong> Em um gráfico de pizza sobre os 1.200 candidatos de uma escola, a fatia "Matemática" ocupa 25% e a fatia "Português" ocupa 1/4 do círculo restante. Quantos candidatos escolheram cada matéria?
    </div>
    <div class="ex-step">
        <span class="step-tag tag-interp">Etapa 1: Interpretação</span><br>
        Total = 1.200. Fatia A = 25%; Fatia B = 1/4 do RESTANTE (não do total!).
    </div>
    <div class="ex-step">
        <span class="step-tag tag-model">Etapa 2: Modelagem</span><br>
        Matemática: 25% de 1.200. Restante: 1.200 − (25% de 1.200). Português: 1/4 do restante.
    </div>
    <div class="ex-step">
        <span class="step-tag tag-calc">Etapa 3: Cálculo</span><br>
        Matemática = 1.200 × 0,25 = <strong>300</strong>. Restante = 900. Português = 900 ÷ 4 = <strong>225</strong>.
    </div>
    <div class="ex-step result">
        <span class="step-tag tag-concl">Etapa 4: Conclusão</span><br>
        300 candidatos escolheram Matemática e 225, Português — a pegadinha era ler "1/4 do restante" como se fosse "1/4 do total". Ler com atenção o que cada fatia representa é a habilidade central desta aula.
    </div>
</div>`,
            questions: [
                {
                    type: "mc",
                    q: "Em um climograma, as barras verticais e a linha contínua representam, respectivamente:",
                    options: [
                        "Precipitação pluviométrica (chuvas em mm) e temperatura média (°C)",
                        "Temperatura (°C) e pressão atmosférica",
                        "Altitude e relevo",
                        "Umidade relativa e velocidade do vento"
                    ],
                    correct: 0,
                    exp: "Barras indicam a quantidade de chuva (mm) e a linha indica a variação de temperatura (°C)."
                }
            ]
        }
        ]
    }
];
