import { Fragment } from "react";
import Logo from "./components/Logo";

const WHATSAPP_URL = "https://wa.me/55XXXXXXXXXXX";
const PAYMENT_URL  = "#inscricao";

export default function Home() {
  return (
    <main className="bg-stone text-ink overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col justify-between px-8 md:px-16 pt-16 pb-12 border-b border-line relative overflow-hidden">
        {/* Vídeo de fundo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/header.mp4" type="video/mp4" />
        </video>
        {/* Overlay para garantir legibilidade do texto */}
        <div className="absolute inset-0 bg-stone/75" />
        {/* topo */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="text-xs tracking-[0.25em] uppercase text-ink-muted">Mari Campos</span>
          <Logo className="text-2xl" />
        </div>

        {/* headline central */}
        <div className="relative z-10 py-16 md:py-0">
          <p className="text-sage text-xs tracking-[0.25em] uppercase mb-8">
            8 semanas · Ao vivo · Em grupo
          </p>
          <h1 className="text-ink text-[clamp(2.8rem,7vw,6rem)] font-extralight leading-[1.1] tracking-tight max-w-4xl">
            O caminho de volta pra mulher que você era antes de se perder no caminho dos outros.
          </h1>
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a href={PAYMENT_URL}
              className="inline-block bg-sage hover:bg-sage-hover text-white text-xs tracking-[0.2em] uppercase px-10 py-4 transition-colors duration-200">
              Quero participar
            </a>
            <span className="text-ink-muted text-sm">Início em 22 de abril — Vagas limitadas</span>
          </div>
        </div>

        {/* rodapé hero — números */}
        <div className="relative z-10 grid grid-cols-3 gap-4 border-t border-line pt-8 md:max-w-xl">
          {[
            { n: "8", label: "semanas de programa" },
            { n: "90min", label: "por encontro semanal" },
            { n: "10–20min", label: "de prática diária" },
          ].map(({ n, label }) => (
            <div key={n}>
              <p className="text-ink text-2xl md:text-3xl font-light tracking-tight">{n}</p>
              <p className="text-ink-muted text-xs mt-1 leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── IDENTIFICAÇÃO ────────────────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-24 md:py-32 border-b border-line">
        <p className="text-sage text-xs tracking-[0.25em] uppercase mb-16">Isso é pra você se</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {[
            "Você já acorda cansada mesmo tendo dormido — o descanso nunca acontece.",
            "Você sente ansiedade como um estado permanente: o peito aperta sem motivo, o corpo não desliga nem quando você deita.",
            "Você sente culpa por descansar, por dizer não, por não dar conta de tudo.",
            "Você se cobra mais do que qualquer chefe, qualquer marido, qualquer mãe já cobrou.",
            "Você engole desconfortos pra não desagradar e depois explode ou adoece.",
            "Você começa com empolgação, mas na segunda semana já largou — não consegue sustentar quando a vida aperta.",
            "Você olha no espelho e não se reconhece. O corpo mudou, a energia mudou, a vontade sumiu.",
            "Você se irrita com coisas pequenas e depois se odeia por ter se irritado.",
            "Você sente névoa na cabeça — o pensamento que não desliga, falta de foco, cansaço mental.",
            "Você cuida de todo mundo e no final do dia não sobrou nada pra você.",
            "Você sente solidão mesmo rodeada de gente, porque ninguém sabe o peso real do que você carrega.",
          ].map((item, i) => (
            <div key={i} className="flex items-baseline gap-4 py-4 border-b border-line/60">
              <span className="text-sage/40 text-xs font-light tabular-nums flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-ink-soft text-sm md:text-base leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── O PROBLEMA ───────────────────────────────────────────────────── */}
      <section className="bg-sage-dark px-8 md:px-16 py-24 md:py-32 border-b border-line">
        <div className="max-w-3xl">
          <p className="text-sage text-xs tracking-[0.25em] uppercase mb-12 opacity-70">
            Por que nada funcionou até agora
          </p>
          <h2 className="text-stone text-[clamp(2.5rem,5vw,4.5rem)] font-extralight leading-[1.15] tracking-tight mb-12">
            O problema nunca foi informação.
            <br />
            <span className="text-sage">Foi sustentação.</span>
          </h2>
          <div className="space-y-5 text-stone/70 text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              Você já tentou. Já leu, já baixou app, já começou dieta, terapia, diário.
              Já prometeu pra si mesma: segunda-feira eu mudo.
            </p>
            <p>E na terça… a rotina engoliu você de novo.</p>
            <p>
              Não porque você é fraca. Não porque falta disciplina.
              Ninguém te ensinou a sustentar um limite quando o outro pressiona.
              A sustentar o cuidado com você mesma quando o mundo todo exige
              que você cuide do resto.
            </p>
            <p className="text-stone font-medium text-lg md:text-xl">
              E cada vez que você tenta e não consegue manter… você confia menos em si mesma.
            </p>
          </div>
          <p className="mt-14 text-sage text-xl md:text-2xl font-light">
            A Nayá existe pra quebrar esse ciclo.
          </p>
        </div>
      </section>

      {/* ── O QUE É ──────────────────────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-24 md:py-32 border-b border-line">
        <div className="md:grid md:grid-cols-2 md:gap-20 md:items-start">
          <div>
            <p className="text-sage text-xs tracking-[0.25em] uppercase mb-8">
              O que é a Mentoria Nayá
            </p>
            <h2 className="text-ink text-4xl md:text-5xl font-extralight leading-tight tracking-tight">
              Uma mentoria de autossustentação emocional.
            </h2>
          </div>
          <div className="mt-10 md:mt-0 space-y-5 text-ink-soft leading-relaxed">
            <p>
              Um programa de 8 semanas, em grupo, com encontros semanais ao vivo,
              prática de meditação guiada e ferramentas aplicáveis que você usa
              na mesma semana.
            </p>
            <p>
              Não é curso gravado que você assiste sozinha. Não é mais um
              conteúdo pra consumir e esquecer.{" "}
              <strong className="text-ink font-medium">
                É treino. Com método. Com acompanhamento.
              </strong>{" "}
              Com uma comunidade de mulheres no mesmo processo.
            </p>
            <p className="text-ink font-medium">
              Funciona por repetição e estrutura, não por motivação.
            </p>
          </div>
        </div>
      </section>

      {/* ── O QUE ESTÁ INCLUSO ───────────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-24 md:py-32 border-b border-line bg-stone-dark" id="incluso">
        <p className="text-sage text-xs tracking-[0.25em] uppercase mb-16">
          O que está incluso
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
          {[
            {
              n: "01",
              title: "Encontros ao vivo com a Mari",
              desc: "8 encontros de 90 minutos, em grupo, com conteúdo, prática guiada e troca real.",
            },
            {
              n: "02",
              title: "Meditação guiada",
              desc: "Áudios exclusivos para cada fase. Práticas de 10 a 20 minutos no seu tempo, no seu ritmo.",
            },
            {
              n: "03",
              title: "Ferramentas práticas",
              desc: "Uma ferramenta por semana: mapeamento de crenças, mapa emocional, protocolos de respiração e mais.",
            },
            {
              n: "04",
              title: "Comunidade no WhatsApp",
              desc: "Troca, acolhimento e sustentação diária com as participantes e a Mari.",
            },
            {
              n: "05",
              title: "Especialistas convidadas",
              desc: "Saúde hormonal, nutrição e bioenergia — pra nenhuma camada sua ficar sem cuidado.",
            },
            {
              n: "06",
              title: "Diagnóstico raio x",
              desc: "Mapeamento completo no início e ao final. Você vê com os próprios olhos o que mudou.",
            },
          ].map((item) => (
            <div key={item.n} className="bg-stone-dark p-8 flex flex-col gap-4">
              <span className="text-sage/30 text-4xl font-extralight tracking-tight">{item.n}</span>
              <h3 className="text-ink font-medium text-base leading-snug">{item.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-14">
          <a href={PAYMENT_URL}
            className="inline-block bg-sage hover:bg-sage-hover text-white text-xs tracking-[0.2em] uppercase px-10 py-4 transition-colors duration-200">
            Quero participar
          </a>
        </div>
      </section>

      {/* ── A JORNADA ────────────────────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-24 md:py-32 border-b border-line">
        <p className="text-sage text-xs tracking-[0.25em] uppercase mb-16">A jornada</p>
        <div className="space-y-0">
          {[
            {
              n: "01", weeks: "Semanas 1 – 2", title: "Voltar pra casa",
              body: "Você vai reaprender a habitar o próprio corpo. Entender de onde vêm os padrões que repete sem perceber. Identificar as crenças que carrega desde a infância e que nunca foram realmente suas.",
              result: "Você sai dessas semanas com um mapa de si mesma que nunca teve.",
            },
            {
              n: "02", weeks: "Semanas 3 – 4", title: "Nutrir e aprofundar",
              body: "Você vai entender por que o cansaço não passa só dormindo. Como a alimentação, os hormônios e o que você consome de informação afetam diretamente o que você sente.",
              result: "Você sai com clareza sobre o que te nutre e o que te intoxica, dentro e fora do prato.",
            },
            {
              n: "03", weeks: "Semanas 5 – 6", title: "Estruturar e proteger",
              body: 'Você vai reorganizar a rotina a partir do seu ritmo real. Aprender a colocar limites sem culpa. Praticar o "não" que protege a sua energia.',
              result: "Você sai sabendo o que é seu, o que é do outro, e onde traçar a linha.",
            },
            {
              n: "04", weeks: "Semanas 7 – 8", title: "Florescer e sustentar",
              body: "Você vai aprender a confiar nas suas decisões sem precisar de aprovação. A celebrar o que conquistou. A criar uma prática que não depende de motivação — porque já virou parte de quem você é.",
              result: "Você sai da Nayá com estrutura pra se manter — mesmo quando a vida apertar de novo.",
            },
          ].map((phase, i) => (
            <div key={i} className="border-t border-line py-12 md:grid md:grid-cols-12 md:gap-8 md:items-start">
              <span className="hidden md:block text-sage/20 text-6xl font-extralight tracking-tight col-span-1 leading-none">
                {phase.n}
              </span>
              <div className="md:col-span-3">
                <p className="text-sage text-xs tracking-[0.15em] uppercase mb-2">{phase.weeks}</p>
                <h3 className="text-ink text-2xl md:text-3xl font-light tracking-tight">{phase.title}</h3>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-8 space-y-3">
                <p className="text-ink-soft leading-relaxed text-sm md:text-base">{phase.body}</p>
                <p className="text-sage text-sm">{phase.result}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-line" />
        </div>
      </section>

      {/* ── CTA MEIO ─────────────────────────────────────────────────────── */}
      <section id="inscricao" className="bg-sage px-8 md:px-16 py-24 md:py-32 border-b border-line">
        <div className="md:grid md:grid-cols-2 md:gap-20 md:items-end">
          <div>
            <p className="text-sage-light/60 text-xs tracking-[0.25em] uppercase mb-6">
              Pronta para a Mentoria Nayá?
            </p>
            <h2 className="text-stone text-4xl md:text-5xl font-extralight leading-tight tracking-tight">
              Dê o primeiro passo em direção a uma vida mais presente e serena.
            </h2>
            <p className="text-sage-light/70 text-sm mt-6">
              Início do programa: 22 de abril de 2026
            </p>
          </div>
          <div className="mt-12 md:mt-0 flex flex-col items-start md:items-end gap-5">
            <div>
              <p className="text-sage-light/50 text-sm line-through">R$ 1.080,00</p>
              <p className="text-stone text-6xl font-extralight tracking-tight">R$ 988</p>
              <p className="text-sage-light/50 text-sm">,00</p>
            </div>
            <a href={PAYMENT_URL}
              className="inline-block bg-stone hover:bg-stone-dark text-ink text-xs tracking-[0.2em] uppercase px-10 py-4 transition-colors duration-200">
              Garantir minha vaga
            </a>
          </div>
        </div>
      </section>

      {/* ── TRANSFORMAÇÃO ────────────────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-24 md:py-32 border-b border-line">
        <p className="text-sage text-xs tracking-[0.25em] uppercase mb-16">O que muda em 8 semanas</p>
        <div className="grid grid-cols-2 gap-px bg-line">
          <div className="bg-stone px-6 py-4 flex items-center gap-3">
            <span className="text-ink-muted text-xs tracking-widest uppercase">Antes</span>
          </div>
          <div className="bg-stone px-6 py-4 flex items-center gap-3">
            <span className="text-sage text-xs tracking-widest uppercase">Depois</span>
          </div>
          {[
            {
              topic: "Sob pressão",
              before: "Reage pelo estouro ou pela paralisia. O sistema nervoso em modo sobrevivência o tempo todo.",
              after: "Sente a ativação no corpo, respira e escolhe a resposta. As emoções vêm — mas não controlam.",
            },
            {
              topic: "Rotina",
              before: "Acorda no susto, começa atrasada, termina o dia tendo resolvido tudo pros outros.",
              after: "Tem um ritual matinal não negociável. Planeja a partir da energia real. Começa por ela.",
            },
            {
              topic: "Limites",
              before: "Aceita demandas que não são dela. Engole, acumula, explode. Ou adoece calada.",
              after: 'O "não" é sereno mas firme. Não aceita mais ser a última prioridade da própria vida.',
            },
            {
              topic: "Pensamento",
              before: '"Eu não dou conta." "Só queria sumir pra poder descansar."',
              after: '"Eu tenho base." "Eu sei voltar pra mim." "Meu descanso é sagrado."',
            },
            {
              topic: "Corpo",
              before: "É um fardo. Dores ignoradas, névoa mental, não se reconhece no espelho.",
              after: "É a sua casa. Entende os sinais, age a favor deles. Sustenta o cuidado.",
            },
          ].map((row) => (
            <Fragment key={row.topic}>
              <div className="bg-stone-dark p-6 md:p-8">
                <p className="text-ink-muted text-xs uppercase tracking-widest mb-3">{row.topic}</p>
                <p className="text-ink-soft text-sm md:text-base leading-relaxed">{row.before}</p>
              </div>
              <div className="bg-stone p-6 md:p-8">
                <p className="text-sage text-xs uppercase tracking-widest mb-3">{row.topic}</p>
                <p className="text-ink text-sm md:text-base leading-relaxed">{row.after}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </section>

      {/* ── PROMESSA ─────────────────────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-24 md:py-32 border-b border-line bg-stone-dark">
        <div className="md:grid md:grid-cols-2 md:gap-20">
          <h2 className="text-ink text-4xl md:text-5xl font-extralight leading-tight tracking-tight mb-12 md:mb-0">
            O que a Nayá te entrega ao final de 8 semanas
          </h2>
          <ul className="space-y-6">
            {[
              "Reduzir ansiedade e ruminação mental com ferramentas que você usa no dia a dia.",
              "Tomar decisões com mais clareza e menos culpa.",
              "Criar limites e sustentar autocuidado sem precisar chegar no limite pra reagir.",
              "Recuperar energia e confiança por constância, não por motivação.",
              "Entender de onde vêm os seus padrões e aprender a respondê-los em vez de só reagir.",
              "Ter uma prática diária simples que vira base — não mais uma tarefa.",
            ].map((item, i) => (
              <li key={i} className="flex items-baseline gap-4 pb-6 border-b border-line/60 last:border-0 last:pb-0">
                <span className="text-sage/40 text-xs tabular-nums flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-ink-soft text-sm md:text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-16 text-ink text-xl md:text-2xl font-light tracking-tight border-t border-line pt-10">
          Menos reatividade. Mais presença. Mais direção.{" "}
          <span className="text-sage">Sustentação de verdade.</span>
        </p>
      </section>

      {/* ── SOBRE A MARI ─────────────────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-24 md:py-32 border-b border-line">
        <div className="md:grid md:grid-cols-2 md:gap-16 md:items-start">
          <div className="w-full aspect-[4/5] bg-sage-light flex items-end p-6 mb-12 md:mb-0">
            <span className="text-ink-muted text-xs">Foto da Mari Campos</span>
          </div>
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="text-sage text-xs tracking-[0.25em] uppercase mb-6">
                Quem vai caminhar com você
              </p>
              <h2 className="text-ink text-5xl md:text-6xl font-extralight tracking-tight mb-8">
                Mari<br />Campos
              </h2>
              <div className="space-y-4 text-ink-soft leading-relaxed text-sm md:text-base">
                <p>
                  Professora de yoga e meditação, facilitadora de processos de
                  transformação, criadora do programa Silencie e da Mentoria Nayá.
                </p>
                <p>
                  Há mais de uma década, dedica-se ao estudo e à transmissão de
                  técnicas de meditação, yoga, respiração consciente e presença —
                  conduzindo alunos e jornadas no Brasil e no exterior.
                </p>
                <p>
                  Sua abordagem une profundidade, constância e acolhimento.
                  Ela cria espaços seguros para o silêncio, a escuta e a
                  transformação acontecerem de forma sustentada.
                </p>
              </div>
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-block mt-10 border border-sage text-sage hover:bg-sage hover:text-white text-xs tracking-[0.2em] uppercase px-8 py-3 transition-colors duration-200 self-start">
              Tem dúvida? Fale comigo
            </a>
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ──────────────────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-24 md:py-32 border-b border-line bg-stone-dark">
        <p className="text-sage text-xs tracking-[0.25em] uppercase mb-16">
          O que dizem sobre a experiência com a Mari
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-stone-dark p-8 min-h-52 flex flex-col justify-between">
              <span className="text-sage/20 text-6xl font-extralight leading-none">&ldquo;</span>
              <p className="text-ink-muted text-sm text-center font-sans">
                Depoimento {i} — a ser adicionado
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── OBJEÇÕES ─────────────────────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-24 md:py-32 border-b border-line">
        <div className="md:grid md:grid-cols-2 md:gap-20 md:items-start">
          <h2 className="text-ink text-4xl md:text-5xl font-extralight leading-tight tracking-tight mb-12 md:mb-0">
            A Nayá funciona mesmo que você:
          </h2>
          <ul className="space-y-5">
            {[
              "Nunca tenha meditado na vida.",
              "Ache que não tem tempo — são 10-20 minutos por dia + 1 encontro semanal.",
              "Já tenha tentado e largado várias vezes — aqui você tem estrutura, não só vontade.",
              'Ache que "não consegue parar a cabeça" — ninguém consegue no começo.',
              "Esteja passando pela perimenopausa ou menopausa — trabalhamos com o corpo que você tem agora.",
              'Não se considere "espiritual" — a Nayá é baseada em prática, fisiologia e ferramentas concretas.',
            ].map((item, i) => (
              <li key={i} className="flex items-baseline gap-4 pb-5 border-b border-line last:border-0 last:pb-0">
                <span className="text-sage text-base flex-shrink-0">—</span>
                <span className="text-ink-soft text-sm md:text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-24 md:py-32 border-b border-line bg-stone-dark">
        <p className="text-sage text-xs tracking-[0.25em] uppercase mb-16">Perguntas frequentes</p>
        <div className="max-w-2xl divide-y divide-line">
          {[
            {
              q: "Quanto tempo por dia eu preciso dedicar?",
              a: "Entre 10 e 20 minutos para a prática diária de meditação + 90 minutos do encontro semanal. Fora isso, as ferramentas são integradas na sua rotina — não exigem tempo extra.",
            },
            {
              q: "Os encontros são ao vivo? Fica gravado?",
              a: "Sim, são ao vivo e ficam gravados. Mas a troca em grupo é parte essencial do processo — recomendamos fortemente estar ao vivo.",
            },
            {
              q: "Eu nunca meditei. Vou conseguir acompanhar?",
              a: "Sim. As práticas são guiadas, progressivas e acessíveis. Você não precisa de experiência prévia. Só de disposição pra começar.",
            },
            {
              q: "Já faço terapia. A Nayá substitui?",
              a: "Não. A Nayá é complementar à terapia — trabalha com prática diária e regulação do sistema nervoso que muitas vezes potencializam o que você já faz em terapia.",
            },
            {
              q: "O grupo é grande?",
              a: "Não. As vagas são limitadas de propósito. Grupo pequeno pra que a Mari veja cada uma, escute cada uma.",
            },
          ].map((faq, i) => (
            <details key={i} className="py-6">
              <summary className="flex items-center justify-between gap-6 cursor-pointer">
                <span className="text-ink font-medium text-base leading-snug">{faq.q}</span>
                <span className="flex-shrink-0 text-sage text-2xl font-light leading-none w-6 text-center">
                  <span className="icon-plus">+</span>
                  <span className="icon-minus">−</span>
                </span>
              </summary>
              <p className="mt-4 text-ink-soft leading-relaxed text-sm pr-10">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-28 md:py-40">
        <div className="border-t border-line pt-16">
          <p className="text-sage text-xs tracking-[0.25em] uppercase mb-10">Pronta pra Nayá?</p>
          <h2 className="text-ink text-[clamp(2.5rem,6vw,5.5rem)] font-extralight leading-[1.1] tracking-tight max-w-3xl mb-4">
            Você não precisa de mais informação.
          </h2>
          <p className="text-ink-muted text-[clamp(2rem,4vw,3.5rem)] font-extralight leading-tight tracking-tight mb-16">
            Você precisa de sustentação.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end gap-10">
            <div>
              <p className="text-ink-muted text-sm line-through mb-0.5">R$ 1.080,00</p>
              <p className="text-ink text-5xl md:text-6xl font-extralight tracking-tight">R$ 988,00</p>
              <p className="text-ink-muted text-xs mt-1">Início: 22 de abril de 2026 · Vagas limitadas</p>
            </div>
            <div className="flex flex-col gap-4">
              <a href={PAYMENT_URL}
                className="inline-block bg-sage hover:bg-sage-hover text-white text-xs tracking-[0.2em] uppercase px-12 py-4 transition-colors duration-200">
                Garantir minha vaga
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="text-ink-muted hover:text-sage text-xs tracking-widest uppercase underline underline-offset-4 transition-colors duration-200">
                Fale comigo no WhatsApp
              </a>
            </div>
          </div>
          <p className="mt-20 text-ink-muted text-lg md:text-xl font-light italic max-w-md leading-relaxed border-t border-line pt-10">
            &ldquo;Aqui você não corre. Aqui você respira e se move com a sua respiração. No seu tempo.&rdquo;
          </p>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-line px-8 md:px-16 py-8 flex items-center justify-between">
        <Logo className="text-lg" color="#8C877F" />
        <p className="text-ink-muted text-xs">
          © {new Date().getFullYear()} Mari Campos. Todos os direitos reservados.
        </p>
      </footer>

    </main>
  );
}
