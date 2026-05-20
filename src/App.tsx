import { Helmet } from 'react-helmet-async'
import heroImg from '@/assets/hero-semijoias.jpg'
import revendedoraImg from '@/assets/revendedora.jpg'
import pecasImg from '@/assets/pecas-close.jpg'
import kitImg from '@/assets/kit-semijoias.jpg'
import logoCirulli from "@/assets/logo-cirulli.png";

const WHATS = import.meta.env.VITE_WHATSAPP_NUMBER || '5519999999999'
const MSG = 'Já vendo cosméticos/atendo clientes e quero aumentar meu lucro com semijoias.'
const WHATSAPP_URL = `https://wa.me/${WHATS}?text=${encodeURIComponent(MSG)}`
const SITE_URL = 'https://atacadocirulli.com.br'

function CTA({ children, ariaLabel, className = '' }: { children: React.ReactNode; ariaLabel?: string; className?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? 'Falar no WhatsApp'}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-base font-semibold text-white shadow-gold transition-transform duration-200 hover:-translate-y-0.5 ${className}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  )
}

function Section({ id, children, className = '' }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`px-5 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Helmet>
        <title>Renda Extra com Semijoias no Atacado | Atacado Cirulli</title>
        <meta name="description" content="Aumente seu ticket médio vendendo semijoias junto com cosméticos. Kits acessíveis para revendedoras e profissionais de beleza. Comece hoje." />
        <meta name="keywords" content="renda extra com semijoias, aumentar ticket médio, revendedora Avon ganhar mais, vender semijoias junto com cosméticos, atacado de semijoias Limeira" />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Atacado Cirulli" />
        <meta property="og:title" content="Aumente seu faturamento sem precisar de mais clientes" />
        <meta property="og:description" content="Adicione semijoias às suas vendas e multiplique seu lucro em cada pedido." />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={`${SITE_URL}/og-cover.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aumente seu faturamento com semijoias" />
        <meta name="twitter:description" content="Adicione semijoias às suas vendas e multiplique seu lucro." />
        <meta name="twitter:image" content={`${SITE_URL}/og-cover.jpg`} />
        <link rel="preload" as="image" href={heroImg} fetchPriority="high" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Atacado Cirulli',
          description: 'Atacado de semijoias com kits acessíveis para revendedoras e profissionais de beleza aumentarem o ticket médio e o lucro.',
          url: SITE_URL,
          telephone: '+55-19-99999-9999',
          address: { '@type': 'PostalAddress', addressLocality: 'Limeira', addressRegion: 'SP', addressCountry: 'BR' },
          areaServed: 'BR',
          priceRange: '$$',
        })}</script>
      </Helmet>

      <header className="sticky top-0 z-30 border-b border-black/5 bg-cream/85 backdrop-blur" role="banner">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4" aria-label="Principal">
          <a href="#top" className="flex items-center">
  <img
  src={logoCirulli}
  alt="Atacado Cirulli"
  className="h-[50px] w-auto object-contain md:h-[100px]"
/>
</a>
          {/* MOBILE */}
<CTA
  className="inline-flex sm:hidden px-[14px] py-[9px] text-[10px]"
  ariaLabel="Falar no WhatsApp agora"
>
  Quero vender mais
</CTA>

{/* DESKTOP */}
<CTA
  className="hidden sm:inline-flex px-[28px] py-[16px] text-[16px]"
  ariaLabel="Falar no WhatsApp agora"
>
  Quero vender mais
</CTA>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section
  id="top"
  className="relative overflow-hidden bg-gradient-soft px-[20px] md:px-[40px] pt-[56px] md:pt-[80px] pb-[80px] md:pb-[112px]"
>
  <div className="mx-auto grid max-w-[1100px] items-center gap-[40px] md:gap-[48px] md:grid-cols-2">

    {/* TEXTO */}
    <div className="text-center md:text-left">

      <span className="inline-block rounded-full border border-gold/40 bg-cream px-[14px] py-[6px] text-[11px] md:text-[12px] font-semibold uppercase tracking-wider text-gold-dark">
        Para revendedoras e profissionais de beleza
      </span>

      <h1 className="mt-[20px] text-[32px] md:text-[56px] font-extrabold leading-[1.05]">
        Aumente seu faturamento{" "}
        <span className="bg-[linear-gradient(135deg,#67d9e5_0%,#00aec2_50%,#007c8a_100%)] bg-clip-text text-transparent">
          sem precisar de mais clientes
        </span>
      </h1>

      <p className="mt-[16px] md:mt-[20px] max-w-[520px] mx-auto md:mx-0 text-[15px] md:text-[18px] text-ink/70 leading-[1.6]">
        Adicione semijoias às suas vendas e multiplique seu lucro em cada pedido — com kits acessíveis no atacado.
      </p>

      {/* CTA */}
      <div className="mt-[28px] flex justify-center md:justify-start">
        <CTA ariaLabel="Quero vender mais com os mesmos clientes">
          Quero vender mais
        </CTA>
      </div>

      {/* BENEFÍCIOS */}
      <ul className="mt-[28px] flex flex-wrap justify-center md:justify-start gap-x-[20px] gap-y-[8px] text-[13px] md:text-[14px] text-ink/70">
        <li>✓ Kit inicial acessível</li>
        <li>✓ Alta margem de lucro</li>
        <li>✓ Sem mudar sua rotina</li>
      </ul>

    </div>

    {/* IMAGEM */}
    <div className="relative flex justify-center md:justify-end">

      <img
        src={heroImg}
        alt="Semijoias douradas combinadas com cosméticos sobre fundo rosé"
        width={1280}
        height={1280}
        fetchPriority="high"
        decoding="async"
        className="aspect-square w-full max-w-[420px] md:max-w-[520px] rounded-[24px] object-cover shadow-gold"
      />

      {/* BADGE */}
      <div className="absolute -bottom-[16px] -left-[16px] hidden md:block rounded-[16px] bg-white px-[20px] py-[16px] shadow-soft">

        <p className="text-[11px] uppercase tracking-wider text-ink/60">
          Ticket médio
        </p>

        <p className="font-display text-[22px] font-extrabold bg-[linear-gradient(135deg,#67d9e5_0%,#00aec2_50%,#007c8a_100%)] bg-clip-text text-transparent">
          + R$ 180 / venda
        </p>

      </div>

    </div>

  </div>
</section>

        {/* PROVA SOCIAL */}
        <Section className="bg-cream px-[20px] md:px-[40px] py-[80px] md:py-[112px]">

  {/* HEADER */}
  <div className="text-center max-w-[760px] mx-auto">
    <p className="text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
      Quem já testou, já fatura mais
    </p>

    <h2 className="mt-[12px] text-[28px] md:text-[40px] font-bold leading-[1.1]">
      Revendedoras reais. Lucros reais.
    </h2>
  </div>

  {/* CARDS */}
<div className="mt-[40px] md:mt-[56px] grid gap-[16px] md:gap-[24px] md:grid-cols-3">
  {[
    {
      quote:
        "Vendi um batom e ofereci um colar. Saíram os dois. Meu ticket dobrou em um mês.",
      name: "Ana — Revendedora Avon",
      metric: "+92% no ticket médio",
    },
    {
      quote:
        "Coloquei as peças no balcão do salão. As clientes pedem antes mesmo de eu mostrar.",
      name: "Júlia — Cabeleireira",
      metric: "8 peças vendidas / semana",
    },
    {
      quote:
        "Foi a coisa mais fácil que já vendi. Lucro maior que cosmético, sem dor de cabeça.",
      name: "Patrícia — Consultora",
      metric: "Margem 3x maior",
    },
  ].map((t) => (
    <figure
      key={t.name}
      className="
        group relative overflow-hidden
        rounded-[22px]
        border border-black/5
        bg-white
        p-[22px] md:p-[28px]
        shadow-[0_18px_45px_rgba(0,0,0,0.08)]
        transition-all duration-300

        hover:translate-y-[-4px]
        hover:border-gold/30
        hover:shadow-[0_24px_60px_rgba(0,0,0,0.14)]
      "
    >
      {/* glow decorativo */}
      <div
        className="
          pointer-events-none absolute -right-[50px] -top-[50px]
          h-[130px] w-[130px] rounded-full
          bg-gold/10 blur-3xl
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      {/* aspas */}
      <div
        aria-hidden="true"
        className="
          absolute right-[18px] top-[12px]
          text-[58px] md:text-[72px]
          font-serif leading-none
          text-gold/10
          transition-all duration-300
          group-hover:text-gold/20
        "
      >
        ”
      </div>

      {/* stars */}
      <div
        aria-hidden="true"
        className="
          relative flex items-center gap-[2px]
          text-[15px] md:text-[17px]
          text-gold
        "
      >
        ★★★★★
      </div>

      {/* quote */}
      <blockquote
        className="
          relative mt-[14px]
          text-[14px] md:text-[16px]
          leading-[1.65]
          text-ink/80
        "
      >
        “{t.quote}”
      </blockquote>

      {/* footer */}
      <figcaption
        className="
          relative mt-[22px]
          border-t border-black/5
          pt-[16px]
        "
      >
        <p className="text-[14px] md:text-[15px] font-semibold text-ink">
          {t.name}
        </p>

        <div
          className="
            mt-[10px] inline-flex items-center
            rounded-full
            bg-gold/10
            px-[12px] py-[6px]
            text-[11px] md:text-[12px]
            font-bold uppercase tracking-[1px]
            text-gold-dark
            transition-all duration-300
            group-hover:bg-gold
            group-hover:text-ink
          "
        >
          {t.metric}
        </div>
      </figcaption>
    </figure>
  ))}
</div>
</Section>

        {/* PROBLEMA */}
        <Section className="bg-[linear-gradient(180deg,#f7fcfd_0%,#dff5f8_50%,#c7eef2_100%)] px-[20px] md:px-[40px] py-[80px] md:py-[112px]">

  <div className="grid items-center gap-[40px] md:gap-[72px] md:grid-cols-2">

    {/* IMAGEM */}
    <img
      src={revendedoraImg}
      alt="Revendedora apresentando colar dourado para cliente"
      width={1024}
      height={1024}
      loading="lazy"
      decoding="async"
      className="aspect-square w-full rounded-[24px] object-cover shadow-soft"
    />

    {/* TEXTO */}
    <div className="text-center md:text-left">

      <p className="text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
        O problema invisível
      </p>

      <h2 className="mt-[12px] text-[28px] md:text-[48px] font-bold leading-[1.1]">
        Você vende todo dia.
        <br />
        <span className="bg-[linear-gradient(135deg,#67d9e5_0%,#00aec2_50%,#007c8a_100%)] bg-clip-text text-transparent">
          Mas ganha pouco por cliente.
        </span>
      </h2>

      {/* LISTA */}
      <ul className="mt-[24px] space-y-[14px] text-[14px] md:text-[18px] text-ink/70 leading-[1.6]">

        <li>• Seu esforço cresce, o lucro não acompanha</li>
        <li>• Margens de cosméticos cada vez mais apertadas</li>
        <li>• Mesma cliente, mesmo pedido pequeno</li>
        <li>• Você está deixando dinheiro na mesa todo mês</li>

      </ul>

    </div>

  </div>
</Section>

        {/* SOLUÇÃO */}
        <Section className="bg-gradient-soft px-[20px] md:px-[40px] py-[80px] md:py-[112px]">

  {/* HEADER */}
  <div className="text-center max-w-[760px] mx-auto">

    <p className="text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
      A solução é simples
    </p>

    <h2 className="mt-[12px] text-[28px] md:text-[48px] font-bold leading-[1.1]">
      Venda combinada:{" "}
      <span className="bg-[linear-gradient(135deg,#67d9e5_0%,#00aec2_50%,#007c8a_100%)] bg-clip-text text-transparent">
        cosmético + semijoia
      </span>
    </h2>

    <p className="mx-auto mt-[16px] md:mt-[20px] max-w-[600px] text-[15px] md:text-[18px] text-ink/70 leading-[1.6]">
      Sua cliente já está comprando. Você só apresenta a peça certa, no momento certo — e o pedido cresce naturalmente.
    </p>

  </div>

  {/* CARDS */}
<div className="mt-[40px] md:mt-[56px] grid gap-[16px] md:gap-[24px] md:grid-cols-3">
  {[
    {
      n: "01",
      t: "Escolha seu kit",
      d: "Receba peças prontas pra vender, selecionadas para alta aceitação.",
    },
    {
      n: "02",
      t: "Mostre junto",
      d: "No catálogo, no WhatsApp, no salão. Onde sua cliente já compra.",
    },
    {
      n: "03",
      t: "Lucre mais na mesma venda",
      d: "Cliente combina, leva os dois, e você fatura o dobro.",
    },
  ].map((s) => (
    <article
      key={s.n}
      className="
        group relative overflow-hidden
        rounded-[22px]
        border border-black/5
        bg-white
        p-[22px] md:p-[28px]
        text-left
        shadow-[0_18px_45px_rgba(0,0,0,0.08)]
        transition-all duration-300

        hover:translate-y-[-4px]
        hover:border-[#00aec2]/30
        hover:shadow-[0_24px_60px_rgba(0,0,0,0.14)]
      "
    >
      {/* brilho decorativo */}
      <div
        className="
          pointer-events-none absolute -right-[50px] -top-[50px]
          h-[140px] w-[140px] rounded-full
          bg-[#00aec2]/10 blur-3xl
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      {/* número */}
      <div
        className="
          relative flex h-[54px] w-[54px]
          items-center justify-center
          rounded-[16px]
          bg-[linear-gradient(135deg,#67d9e5_0%,#00aec2_50%,#007c8a_100%)]
          text-[17px] font-extrabold text-white
          shadow-[0_10px_25px_rgba(0,174,194,0.28)]
          transition-all duration-300

          md:h-[60px] md:w-[60px] md:text-[19px]

          group-hover:scale-[1.05]
          group-hover:shadow-[0_14px_35px_rgba(0,174,194,0.38)]
        "
      >
        {s.n}
      </div>

      {/* linha */}
      <div className="mt-[22px] h-[2px] w-[38px] rounded-full bg-[#00aec2]/35 transition-all duration-300 group-hover:w-[72px]" />

      {/* título */}
      <h3
        className="
          relative mt-[18px]
          text-[18px] md:text-[21px]
          font-bold leading-[1.25]
          text-ink
        "
      >
        {s.t}
      </h3>

      {/* descrição */}
      <p
        className="
          relative mt-[10px]
          text-[14px] md:text-[16px]
          leading-[1.65]
          text-ink/70
        "
      >
        {s.d}
      </p>

      {/* detalhe inferior */}
      <div
        className="
          absolute bottom-0 left-0 h-[3px] w-0
          bg-[linear-gradient(90deg,#67d9e5,#00aec2,#007c8a)]
          transition-all duration-300
          group-hover:w-full
        "
      />
    </article>
  ))}
</div>
</Section>

        {/* BENEFÍCIOS */}
        <Section className="bg-[linear-gradient(180deg,#f7fcfd_0%,#dff5f8_50%,#c7eef2_100%)] px-[20px] md:px-[40px] py-[80px] md:py-[112px]">

  <div className="grid gap-[40px] md:gap-[72px] md:grid-cols-2 md:items-center">

    {/* TEXTO */}
    <div className="text-center md:text-left">

      <p className="text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
        Por que funciona
      </p>

      <h2 className="mt-[12px] text-[28px] md:text-[48px] font-bold leading-[1.1]">
        Lucro maior,{" "}
        <span className="bg-[linear-gradient(135deg,#67d9e5_0%,#00aec2_50%,#007c8a_100%)] bg-clip-text text-transparent">
          sem trabalhar mais.
        </span>
      </h2>

      {/* LISTA */}
<div className="mt-[24px] md:mt-[32px] grid gap-[12px] md:gap-[16px]">
  {[
    ["Ticket médio maior", "Cada pedido vale mais — sem prospectar cliente novo."],
    ["Margem alta", "Semijoia lucra mais que cosmético, por peça."],
    ["Venda fácil", "Produto complementar — a cliente já está no clima de comprar."],
    ["Rotatividade rápida", "Peças que saem o ano inteiro, em qualquer ocasião."],
    ["Você vira referência", "Deixa de ser só revendedora — vira consultora completa."],
  ].map(([t, d], i) => (
    <div
      key={t}
      className="
        group relative flex gap-[14px] md:gap-[16px]
        rounded-[18px]
        border border-black/5
        bg-cream
        p-[16px] md:p-[18px]
        shadow-[0_10px_28px_rgba(0,0,0,0.06)]
        transition-all duration-300

        hover:translate-y-[-2px]
        hover:border-gold/30
        hover:bg-white
        hover:shadow-[0_18px_42px_rgba(0,0,0,0.12)]
      "
    >
      {/* indicador */}
      <div
        aria-hidden="true"
        className="
          mt-[2px] flex h-[34px] w-[34px] shrink-0
          items-center justify-center rounded-full
          bg-gold/12
          text-[12px] font-bold text-gold-dark
          ring-1 ring-gold/20
          transition-all duration-300

          md:h-[38px] md:w-[38px]

          group-hover:bg-gold
          group-hover:text-ink
          group-hover:ring-gold/40
        "
      >
        {String(i + 1).padStart(2, "0")}
      </div>

      {/* conteúdo */}
      <div className="min-w-0 flex-1">
        <p
          className="
            text-[15px] md:text-[17px]
            font-bold leading-[1.25]
            text-ink
          "
        >
          {t}
        </p>

        <p
          className="
            mt-[5px]
            text-[13px] md:text-[15px]
            leading-[1.55]
            text-ink/70
          "
        >
          {d}
        </p>
      </div>
    </div>
  ))}
</div>

    </div>

    {/* IMAGEM */}
    <div className="flex justify-center md:justify-end">

      <img
        src={pecasImg}
        alt="Close em colares dourados e brincos delicados"
        width={1024}
        height={1024}
        loading="lazy"
        decoding="async"
        className="aspect-square w-full max-w-[420px] md:max-w-[520px] rounded-[24px] object-cover shadow-soft"
      />

    </div>

  </div>
</Section>

        {/* OFERTA*/}
        <Section className="bg-gradient-soft px-[20px] md:px-[40px] py-[80px] md:py-[112px]">

  <div className="grid gap-[40px] md:gap-[72px] md:grid-cols-2 md:items-center">

    {/* IMAGEM */}
    <div className="flex justify-center md:justify-start">

      <img
        src={kitImg}
        alt="Kit de semijoias douradas com colares, brincos e anéis"
        width={1024}
        height={1024}
        loading="lazy"
        decoding="async"
        className="aspect-square w-full max-w-[420px] md:max-w-[520px] rounded-[24px] object-cover shadow-gold"
      />

    </div>

    {/* TEXTO */}
    <div className="text-center md:text-left">

      <p className="text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
        A oferta
      </p>

      <h2 className="mt-[12px] text-[28px] md:text-[48px] font-bold leading-[1.1]">
        Comece com um kit{" "}
        <span className="bg-[linear-gradient(135deg,#67d9e5_0%,#00aec2_50%,#007c8a_100%)] bg-clip-text text-transparent">
          e fature já no primeiro mês.
        </span>
      </h2>

      {/* LISTA */}
      <ul className="mt-[24px] md:mt-[32px] space-y-[10px] md:space-y-[12px] text-[14px] md:text-[16px]">

        <li className="flex gap-[10px] md:gap-[12px] items-start">
          <span className="text-gold-dark">✓</span>
          <span>Kit inicial acessível</span>
        </li>

        <li className="flex gap-[10px] md:gap-[12px] items-start">
          <span className="text-gold-dark">✓</span>
          <span>Variedade de peças que mais vendem</span>
        </li>

        <li className="flex gap-[10px] md:gap-[12px] items-start">
          <span className="text-gold-dark">✓</span>
          <span>Parcelamento facilitado</span>
        </li>

        <li className="flex gap-[10px] md:gap-[12px] items-start">
          <span className="text-gold-dark">✓</span>
          <span>Reposição rápida — Limeira/SP</span>
        </li>

      </ul>

      {/* CTA */}
      <div className="mt-[28px] md:mt-[32px] flex justify-center md:justify-start">
        <CTA ariaLabel="Quero meu kit no WhatsApp">
          Quero meu kit
        </CTA>
      </div>

    </div>

  </div>
</Section>

        {/* FAQ */}
        <Section className="bg-[linear-gradient(180deg,#f7fcfd_0%,#dff5f8_50%,#c7eef2_100%)] px-[20px] md:px-[40px] py-[80px] md:py-[112px]">

  <div className="mx-auto max-w-[720px]">

    {/* HEADER */}
    <div className="text-center">

      <p className="text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
        Dúvidas frequentes
      </p>

      <h2 className="mt-[12px] text-[28px] md:text-[40px] font-bold leading-[1.1]">
        Antes de você perguntar…
      </h2>

    </div>

    {/* ACCORDION */}
<div className="mt-[32px] md:mt-[48px] grid gap-[12px] md:gap-[14px]">
  {[
    {
      q: "Preciso aprender a vender semijoias?",
      a: "Não. Você já sabe vender — semijoia é só um complemento. A peça quase se vende sozinha quando aparece no momento certo da venda.",
    },
    {
      q: "Minhas clientes vão comprar mesmo?",
      a: "Sim. A maioria das mulheres já compra semijoias em algum lugar. Estando na sua mão, com a confiança que ela já tem em você, a venda é natural.",
    },
    {
      q: "Quanto de lucro posso ter?",
      a: "A margem em semijoia é, em média, maior que em cosmético. Muitas revendedoras dobram o lucro por pedido já no primeiro mês.",
    },
    {
      q: "Como mostro as peças sem complicar?",
      a: "WhatsApp, foto no status, peça exposta no salão, ou junto do catálogo. Sem loja, sem site, sem rotina nova.",
    },
    {
      q: "Não tenho muito dinheiro pra investir.",
      a: "Por isso oferecemos kits iniciais acessíveis e parcelados — você começa pequeno e gira o investimento rápido.",
    },
  ].map((f, i) => (
    <details
      key={f.q}
      className="
        group overflow-hidden
        rounded-[18px]
        border border-black/5
        bg-white
        shadow-[0_12px_32px_rgba(0,0,0,0.06)]
        transition-all duration-300

        open:border-gold/30
        open:shadow-[0_18px_46px_rgba(0,0,0,0.10)]

        hover:border-gold/25
        hover:shadow-[0_16px_40px_rgba(0,0,0,0.09)]
      "
    >
      {/* QUESTION */}
      <summary
        className="
          flex cursor-pointer list-none items-center justify-between
          gap-[14px]
          px-[16px] py-[16px]
          md:px-[22px] md:py-[20px]
        "
      >
        <div className="flex items-center gap-[12px] md:gap-[14px]">
          {/* número */}
          <span
            className="
              flex h-[34px] w-[34px] shrink-0 items-center justify-center
              rounded-full bg-gold/10
              text-[11px] font-bold text-gold-dark
              ring-1 ring-gold/20
              transition-all duration-300

              md:h-[38px] md:w-[38px]

              group-open:bg-gold
              group-open:text-ink
            "
          >
            {String(i + 1).padStart(2, "0")}
          </span>

          <span
            className="
              text-left
              text-[14px] md:text-[17px]
              font-bold leading-[1.35]
              text-ink
            "
          >
            {f.q}
          </span>
        </div>

        {/* ícone */}
        <span
          aria-hidden="true"
          className="
            flex h-[30px] w-[30px] shrink-0 items-center justify-center
            rounded-full border border-black/5 bg-cream
            text-[20px] leading-none text-gold-dark
            transition-all duration-300

            md:h-[34px] md:w-[34px]

            group-open:rotate-45
            group-open:bg-gold
            group-open:text-ink
          "
        >
          +
        </span>
      </summary>

      {/* ANSWER */}
      <div
        className="
          px-[16px] pb-[18px] pl-[62px]
          md:px-[22px] md:pb-[22px] md:pl-[74px]
        "
      >
        <p
          className="
            border-t border-black/5
            pt-[12px]
            text-[13px] md:text-[15px]
            leading-[1.65]
            text-ink/70
          "
        >
          {f.a}
        </p>
      </div>
    </details>
  ))}
</div>

  </div>
</Section>

        {/* CTA FINAL */}
        <Section className="bg-gradient-gold text-white px-[20px] md:px-[40px] py-[80px] md:py-[120px]">

  <div className="text-center max-w-[760px] mx-auto">

    {/* HEADLINE */}
    <h2 className="font-display text-[28px] md:text-[48px] font-extrabold leading-[1.1] text-white">
      Você já faz o difícil.
      <br />
      Agora é só lucrar mais.
    </h2>

    {/* SUBTITLE */}
    <p className="mx-auto mt-[16px] md:mt-[20px] max-w-[520px] text-[15px] md:text-[18px] text-white/90 leading-[1.6]">
      Comece hoje com um kit de semijoias e transforme cada venda em uma venda maior.
    </p>

    {/* CTA */}
<div className="mt-[28px] md:mt-[36px] flex justify-center">
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Começar a aumentar meu faturamento"
    className="
      group relative inline-flex items-center justify-center
      overflow-hidden
      gap-[12px]

      rounded-[18px]
      border border-white/60
      bg-[linear-gradient(135deg,#ffffff_0%,#f7f7f7_100%)]

      px-[24px] py-[14px]
      text-[14px] font-extrabold
      text-black

      md:px-[36px] md:py-[18px]
      md:text-[17px]

      shadow-[0_18px_50px_rgba(0,0,0,0.28)]
      transition-all duration-300

      hover:translate-y-[-3px]
      hover:scale-[1.02]
      hover:shadow-[0_26px_70px_rgba(0,0,0,0.38)]
    "
  >
    {/* brilho passando */}
    <span
      aria-hidden="true"
      className="
        absolute inset-0 -translate-x-full
        bg-gradient-to-r from-transparent via-white/80 to-transparent
        transition-transform duration-700
        group-hover:translate-x-full
      "
    />

    {/* detalhe superior */}
    <span
      aria-hidden="true"
      className="
        pointer-events-none absolute left-[14px] right-[14px] top-[6px]
        h-[1px] rounded-full bg-white/90
      "
    />

    <span className="relative z-10">
      Começar a aumentar meu faturamento
    </span>

    <span
      aria-hidden="true"
      className="
        relative z-10 flex h-[32px] w-[32px] shrink-0
        items-center justify-center
        rounded-full
        bg-[#00aec2]
        text-[16px] text-white
        shadow-[0_8px_18px_rgba(0,174,194,0.35)]
        transition-all duration-300

        md:h-[36px] md:w-[36px]
        md:text-[18px]

        group-hover:translate-x-[5px]
        group-hover:bg-black
        group-hover:shadow-[0_10px_24px_rgba(0,0,0,0.35)]
      "
    >
      →
    </span>
  </a>
</div>

  </div>
</Section>
      </main>

     <footer role="contentinfo" className="border-t border-black/5 bg-cream px-[20px] md:px-[40px] py-[40px] md:py-[60px]">

  {/* LOGO */}
  <div className="flex justify-center mb-[20px] md:mb-[28px]">
    <img
      src={logoCirulli}
      alt="Atacado Cirulli"
      className="h-[75px] md:h-[75px] w-auto object-contain"
    />
  </div>

  {/* TEXTOS */}
  <div className="mx-auto flex max-w-[1100px] flex-col gap-[10px] md:flex-row md:items-center md:justify-between text-[12px] md:text-[14px] text-ink/70">

    {/* ESQUERDA */}
    <p className="text-center md:text-left">
      © {new Date().getFullYear()} Atacado Cirulli — Limeira/SP
    </p>

    {/* DIREITA */}
    <p className="text-center md:text-right">
      Semijoias no atacado para revendedoras e profissionais de beleza.
    </p>

  </div>

</footer>
    </>
  )
}
