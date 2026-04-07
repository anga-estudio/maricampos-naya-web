import { Fragment } from "react";
import Logo from "./components/Logo";
import AmbientSound from "./components/AmbientSound";
import { getSiteContent } from "@/lib/supabase";

export const dynamic = "force-dynamic";

interface GeneralContent {
  price: number;
  start_date: string;
  weeks_count: number;
  payment_link: string;
  header_phrase: string;
  whatsapp_number: string;
  daily_practice_max: number;
  daily_practice_min: number;
  weekly_meeting_minutes: number;
  payment_buttons_enabled: boolean;
}

interface IncludedItem {
  title: string;
  description: string;
}

interface JourneyPhase {
  title: string;
  weeks: string;
  items: string[];
  outcome: string;
}

interface Transformation {
  before: string;
  after: string;
}

interface Testimonial {
  name: string;
  text: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface MentorContent {
  name: string;
  title: string;
  description: string;
}

export default async function Home() {
  const content = await getSiteContent("naya");
  const general = content.general as GeneralContent;
  const targetAudience = content.target_audience as string[];
  const included = content.included as IncludedItem[];
  const journey = content.journey as JourneyPhase[];
  const transformations = content.transformations as Transformation[];
  const outcomes = content.outcomes as string[];
  const mentor = content.mentor as MentorContent;
  const testimonials = content.testimonials as Testimonial[];
  const worksEvenIf = content.works_even_if as string[];
  const faq = content.faq as FAQ[];

  const WHATSAPP_URL = `https://wa.me/${general.whatsapp_number}`;
  const PAYMENT_URL = general.payment_link;

  const startDate = new Date(general.start_date + "T00:00:00");
  const formattedDate = startDate.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="text-ink overflow-x-hidden">
      <AmbientSound />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col justify-between px-8 md:px-16 pt-16 pb-12 border-b border-line relative overflow-hidden text-white">
        {/* Vídeo de fundo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/header.mp4" type="video/mp4" />
        </video>
        {/* Overlay verde */}
        <div className="absolute inset-0 bg-[#657E66]/75 z-[1]" />
        {/* Logo */}
        <div className="relative z-10">
          <Logo className="h-20 w-auto" />
        </div>

        {/* headline central */}
        <div className="relative z-10 py-16 md:py-0">
          <h1 className="text-white text-[clamp(2.8rem,7vw,6rem)] font-light leading-[1.1] tracking-tight max-w-4xl [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
            {general.header_phrase}
          </h1>
          <div className="mt-12">
            <a href={PAYMENT_URL} target="_blank" rel="noopener noreferrer"
              className="inline-block bg-sage hover:bg-sage-hover text-white text-xs tracking-[0.2em] uppercase px-10 py-4 transition-colors duration-200">
              Quero participar
            </a>
          </div>
        </div>

        {/* espaço vazio pra manter layout flex */}
        <div className="relative z-10" />
      </section>

      {/* ── NÚMEROS / INTRO ───────────────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-16 border-b border-line bg-stone-dark">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-sage text-xs tracking-[0.25em] uppercase mb-1">
              {general.weeks_count} semanas · Ao vivo · Em grupo
            </p>
            <p className="text-ink-muted text-sm">
              Início em {formattedDate} · Vagas limitadas
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 md:gap-16">
            {[
              { n: String(general.weeks_count), label: "semanas de programa" },
              { n: `${general.weekly_meeting_minutes}min`, label: "por encontro semanal" },
              { n: `${general.daily_practice_min}–${general.daily_practice_max}min`, label: "de prática diária" },
            ].map(({ n, label }) => (
              <div key={n}>
                <p className="text-ink text-2xl md:text-3xl font-light tracking-tight">{n}</p>
                <p className="text-ink-muted text-xs mt-1 leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IDENTIFICAÇÃO ────────────────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-24 md:py-32 border-b border-line">
        <p className="text-sage text-xs tracking-[0.25em] uppercase mb-16">Isso é pra você se</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {targetAudience.map((item, i) => (
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
              Um programa de {general.weeks_count} semanas, em grupo, com encontros semanais ao vivo,
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-line">
          {included.map((item, i) => (
            <div key={i} className="bg-stone-dark p-8 flex flex-col gap-4">
              <span className="text-sage/30 text-4xl font-extralight tracking-tight">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-ink font-medium text-base leading-snug">{item.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-14">
          <a href={PAYMENT_URL} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-sage hover:bg-sage-hover text-white text-xs tracking-[0.2em] uppercase px-10 py-4 transition-colors duration-200">
            Quero participar
          </a>
        </div>
      </section>

      {/* ── A JORNADA ────────────────────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-24 md:py-32 border-b border-line">
        <p className="text-sage text-xs tracking-[0.25em] uppercase mb-16">A jornada</p>
        <div className="space-y-0">
          {journey.map((phase, i) => (
            <div key={i} className="border-t border-line py-12 md:grid md:grid-cols-12 md:gap-8 md:items-start">
              <span className="hidden md:block text-sage/20 text-6xl font-extralight tracking-tight col-span-1 leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="md:col-span-3">
                <p className="text-sage text-xs tracking-[0.15em] uppercase mb-2">{phase.weeks}</p>
                <h3 className="text-ink text-2xl md:text-3xl font-light tracking-tight">{phase.title}</h3>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-8 space-y-3">
                <p className="text-ink-soft leading-relaxed text-sm md:text-base">
                  {phase.items.join(" ")}
                </p>
                <p className="text-sage text-sm">{phase.outcome}</p>
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
              Início do programa: {formattedDate}
            </p>
          </div>
          <div className="mt-12 md:mt-0 flex flex-col items-start md:items-end gap-5">
            <div>
              <p className="text-sage-light/50 text-sm line-through">R$ 1.080,00</p>
              <p className="text-stone text-6xl font-extralight tracking-tight">R$ {general.price}<span className="text-sage-light/50 text-sm">,00</span></p>
            </div>
            <a href={PAYMENT_URL} target="_blank" rel="noopener noreferrer"
              className="inline-block bg-stone hover:bg-stone-dark text-ink text-xs tracking-[0.2em] uppercase px-10 py-4 transition-colors duration-200">
              Garantir minha vaga
            </a>
          </div>
        </div>
      </section>

      {/* ── TRANSFORMAÇÃO ────────────────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-24 md:py-32 border-b border-line">
        <p className="text-sage text-xs tracking-[0.25em] uppercase mb-16">O que muda em {general.weeks_count} semanas</p>
        <div className="grid grid-cols-2 gap-px bg-line">
          <div className="bg-stone px-6 py-4 flex items-center gap-3">
            <span className="text-ink-muted text-xs tracking-widest uppercase">Antes</span>
          </div>
          <div className="bg-stone px-6 py-4 flex items-center gap-3">
            <span className="text-sage text-xs tracking-widest uppercase">Depois</span>
          </div>
          {transformations.map((row, i) => (
            <Fragment key={i}>
              <div className="bg-stone-dark p-6 md:p-8">
                <p className="text-ink-soft text-sm md:text-base leading-relaxed">{row.before}</p>
              </div>
              <div className="bg-stone p-6 md:p-8">
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
            O que a Nayá te entrega ao final de {general.weeks_count} semanas
          </h2>
          <ul className="space-y-6">
            {outcomes.map((item, i) => (
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
          <div className="w-full aspect-[4/5] mb-12 md:mb-0 overflow-hidden">
            <img
              src="/photos/mari.png"
              alt={mentor.name}
              className="w-full h-full object-cover object-[center_15%]"
            />
          </div>
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="text-sage text-xs tracking-[0.25em] uppercase mb-6">
                {mentor.title}
              </p>
              <h2 className="text-ink text-5xl md:text-6xl font-extralight tracking-tight mb-8">
                {mentor.name.split(" ").map((word, i) => (
                  <Fragment key={i}>{i > 0 && <br />}{word}</Fragment>
                ))}
              </h2>
              <div className="space-y-4 text-ink-soft leading-relaxed text-sm md:text-base">
                <p>{mentor.description}</p>
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
          {testimonials.map((dep, i) => (
            <div key={i} className="bg-stone-dark p-8 min-h-52 flex flex-col justify-between">
              <span className="text-sage/20 text-6xl font-extralight leading-none">&ldquo;</span>
              <p className="text-ink-soft text-sm leading-relaxed">{dep.text}</p>
              <p className="text-sage text-xs tracking-widest uppercase mt-4">{dep.name}</p>
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
            {worksEvenIf.map((item, i) => (
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
          {faq.map((item, i) => (
            <details key={i} className="py-6">
              <summary className="flex items-center justify-between gap-6 cursor-pointer">
                <span className="text-ink font-medium text-base leading-snug">{item.question}</span>
                <span className="flex-shrink-0 text-sage text-2xl font-light leading-none w-6 text-center">
                  <span className="icon-plus">+</span>
                  <span className="icon-minus">−</span>
                </span>
              </summary>
              <p className="mt-4 text-ink-soft leading-relaxed text-sm pr-10">{item.answer}</p>
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
              <p className="text-ink text-5xl md:text-6xl font-extralight tracking-tight">R$ {general.price},00</p>
              <p className="text-ink-muted text-xs mt-1">Início: {formattedDate} · Vagas limitadas</p>
            </div>
            <div className="flex flex-col gap-4">
              <a href={PAYMENT_URL} target="_blank" rel="noopener noreferrer"
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
        <Logo className="h-10 w-auto" variant="green" />
        <p className="text-ink-muted text-xs">
          © {new Date().getFullYear()} {mentor.name}. Todos os direitos reservados.
        </p>
      </footer>

    </main>
  );
}
