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
    className="h-10 md:h-12 w-auto object-contain"
  />
</a>
          <CTA className="hidden sm:inline-flex" ariaLabel="Falar no WhatsApp agora">Quero vender mais</CTA>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="top" className="relative overflow-hidden bg-gradient-soft px-5 pt-14 pb-20 md:pt-20 md:pb-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            <div>
              <span className="inline-block rounded-full border border-gold/40 bg-cream px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark">
                Para revendedoras e profissionais de beleza
              </span>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] md:text-6xl">
                Aumente seu faturamento <span className="bg-[linear-gradient(135deg,#67d9e5_0%,#00aec2_50%,#007c8a_100%)] bg-clip-text text-transparent">sem precisar de mais clientes</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg text-ink/70 md:text-xl">
                Adicione semijoias às suas vendas e multiplique seu lucro em cada pedido — com kits acessíveis no atacado.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTA ariaLabel="Quero vender mais com os mesmos clientes">Quero vender mais com os mesmos clientes</CTA>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/70">
                <li>✓ Kit inicial acessível</li>
                <li>✓ Alta margem de lucro</li>
                <li>✓ Sem mudar sua rotina</li>
              </ul>
            </div>
            <div className="relative">
              <img src={heroImg} alt="Semijoias douradas combinadas com cosméticos sobre fundo rosé" width={1280} height={1280} fetchPriority="high" decoding="async" className="aspect-square w-full rounded-3xl object-cover shadow-gold" />
              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white px-5 py-4 shadow-soft md:block">
                <p className="text-xs uppercase tracking-wider text-ink/60">Ticket médio</p>
                <p className="font-display text-2xl font-extrabold text-gradient-gold">+ R$ 180 / venda</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROOF */}
        <Section className="bg-cream">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">Quem já testou, já fatura mais</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Revendedoras reais. Lucros reais.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { quote: 'Vendi um batom e ofereci um colar. Saíram os dois. Meu ticket dobrou em um mês.', name: 'Ana — Revendedora Avon', metric: '+92% no ticket médio' },
              { quote: 'Coloquei as peças no balcão do salão. As clientes pedem antes mesmo de eu mostrar.', name: 'Júlia — Cabeleireira', metric: '8 peças vendidas / semana' },
              { quote: 'Foi a coisa mais fácil que já vendi. Lucro maior que cosmético, sem dor de cabeça.', name: 'Patrícia — Consultora', metric: 'Margem 3x maior' },
            ].map((t) => (
              <figure key={t.name} className="rounded-2xl border border-black/5 bg-white p-7 shadow-soft">
                <div aria-hidden="true" className="text-2xl text-gold">★★★★★</div>
                <blockquote className="mt-3">"{t.quote}"</blockquote>
                <figcaption className="mt-5 border-t border-black/5 pt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gold-dark">{t.metric}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        {/* PROBLEM */}
        <Section>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <img src={revendedoraImg} alt="Revendedora apresentando colar dourado para cliente" width={1024} height={1024} loading="lazy" decoding="async" className="aspect-square w-full rounded-3xl object-cover shadow-soft" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">O problema invisível</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
                Você vende todo dia.<br /><span className="text-gradient-gold">Mas ganha pouco por cliente.</span>
              </h2>
              <ul className="mt-6 space-y-4 text-lg text-ink/70">
                <li>• Seu esforço cresce, o lucro não acompanha</li>
                <li>• Margens de cosméticos cada vez mais apertadas</li>
                <li>• Mesma cliente, mesmo pedido pequeno</li>
                <li>• Você está deixando dinheiro na mesa todo mês</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* SOLUTION */}
        <Section className="bg-gradient-soft">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">A solução é simples</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
              Venda combinada: <span className="text-gradient-gold">cosmético + semijoia</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-ink/70">
              Sua cliente já está comprando. Você só apresenta a peça certa, no momento certo — e o pedido cresce naturalmente.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { n: '01', t: 'Escolha seu kit', d: 'Receba peças prontas pra vender, selecionadas para alta aceitação.' },
              { n: '02', t: 'Mostre junto', d: 'No catálogo, no WhatsApp, no salão. Onde sua cliente já compra.' },
              { n: '03', t: 'Lucre mais na mesma venda', d: 'Cliente combina, leva os dois, e você fatura o dobro.' },
            ].map((s) => (
              <article key={s.n} className="rounded-2xl border border-black/5 bg-white p-7 shadow-soft">
                <div className="font-display text-4xl font-extrabold text-gradient-gold">{s.n}</div>
                <h3 className="mt-3 text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-ink/70">{s.d}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* BENEFITS */}
        <Section>
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">Por que funciona</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
                Lucro maior, <span className="text-gradient-gold">sem trabalhar mais.</span>
              </h2>
              <div className="mt-8 grid gap-4">
                {[
                  ['Ticket médio maior', 'Cada pedido vale mais — sem prospectar cliente novo.'],
                  ['Margem alta', 'Semijoia lucra mais que cosmético, por peça.'],
                  ['Venda fácil', 'Produto complementar — a cliente já está no clima de comprar.'],
                  ['Rotatividade rápida', 'Peças que saem o ano inteiro, em qualquer ocasião.'],
                  ['Você vira referência', 'Deixa de ser só revendedora — vira consultora completa.'],
                ].map(([t, d]) => (
                  <div key={t} className="flex gap-4 rounded-xl bg-cream p-4">
                    <div aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                    <div>
                      <p className="font-semibold">{t}</p>
                      <p className="text-sm text-ink/70">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <img src={pecasImg} alt="Close em colares dourados e brincos delicados" width={1024} height={1024} loading="lazy" decoding="async" className="aspect-square w-full rounded-3xl object-cover shadow-soft" />
          </div>
        </Section>

        {/* OFFER */}
        <Section className="bg-gradient-soft">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <img src={kitImg} alt="Kit de semijoias douradas com colares, brincos e anéis" width={1024} height={1024} loading="lazy" decoding="async" className="aspect-square w-full rounded-3xl object-cover shadow-gold" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">A oferta</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
                Comece com um kit <span className="text-gradient-gold">e fature já no primeiro mês.</span>
              </h2>
              <ul className="mt-6 space-y-3 text-lg">
                <li className="flex gap-3"><span className="text-gold-dark">✓</span> Kit inicial acessível</li>
                <li className="flex gap-3"><span className="text-gold-dark">✓</span> Variedade de peças que mais vendem</li>
                <li className="flex gap-3"><span className="text-gold-dark">✓</span> Parcelamento facilitado</li>
                <li className="flex gap-3"><span className="text-gold-dark">✓</span> Reposição rápida — Limeira/SP</li>
              </ul>
              <div className="mt-8"><CTA ariaLabel="Quero meu kit no WhatsApp">Quero meu kit agora</CTA></div>
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section>
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">Dúvidas frequentes</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Antes de você perguntar…</h2>
            </div>
            <div className="mt-10 divide-y divide-black/5 rounded-2xl border border-black/5 bg-white">
              {[
                { q: 'Preciso aprender a vender semijoias?', a: 'Não. Você já sabe vender — semijoia é só um complemento. A peça quase se vende sozinha quando aparece no momento certo da venda.' },
                { q: 'Minhas clientes vão comprar mesmo?', a: 'Sim. A maioria das mulheres já compra semijoias em algum lugar. Estando na sua mão, com a confiança que ela já tem em você, a venda é natural.' },
                { q: 'Quanto de lucro posso ter?', a: 'A margem em semijoia é, em média, maior que em cosmético. Muitas revendedoras dobram o lucro por pedido já no primeiro mês.' },
                { q: 'Como mostro as peças sem complicar?', a: 'WhatsApp, foto no status, peça exposta no salão, ou junto do catálogo. Sem loja, sem site, sem rotina nova.' },
                { q: 'Não tenho muito dinheiro pra investir.', a: 'Por isso oferecemos kits iniciais acessíveis e parcelados — você começa pequeno e gira o investimento rápido.' },
              ].map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">
                    {f.q}
                    <span aria-hidden="true" className="text-gold-dark transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-ink/70">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Section>

        {/* FINAL CTA */}
        <Section className="bg-gradient-gold text-white">
          <div className="text-center">
            <h2 className="font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
              Você já faz o difícil.<br />Agora é só lucrar mais.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
              Comece hoje com um kit de semijoias e transforme cada venda em uma venda maior.
            </p>
            <div className="mt-8 flex justify-center">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Começar a aumentar meu faturamento" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-ink shadow-soft transition-transform hover:-translate-y-0.5">
                Começar a aumentar meu faturamento <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer role="contentinfo" className="border-t border-black/5 bg-cream px-5 py-10">
  
  {/* LOGO CENTRALIZADA */}
  <div className="flex justify-center mb-6">
    <img
      src={logoCirulli}
      alt="Atacado Cirulli"
      className="h-12 w-auto object-contain"
      style={{ filter: "brightness(0)" }}
    />
  </div>

  {/* TEXTOS (mantidos como estão) */}
  <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-ink/70 md:flex-row">
    <p>© {new Date().getFullYear()} Atacado Cirulli — Limeira/SP</p>
    <p>Semijoias no atacado para revendedoras e profissionais de beleza.</p>
  </div>

</footer>
    </>
  )
}
