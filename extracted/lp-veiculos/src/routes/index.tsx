import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, Phone, ShieldCheck, BadgeDollarSign, Handshake } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import {
  CARS,
  CATEGORIAS,
  STORE,
  formatKm,
  formatPrice,
  whatsappLink,
  type Categoria,
} from "@/data/cars";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LP Veículos | Carros seminovos em Castro Alves - BA" },
      {
        name: "description",
        content:
          "Confira o estoque da LP Veículos em Castro Alves, Bahia: carros seminovos com ficha técnica, preço e atendimento direto pelo WhatsApp.",
      },
      { property: "og:title", content: "LP Veículos | Carros seminovos em Castro Alves - BA" },
      {
        property: "og:description",
        content: "Estoque de carros seminovos com ficha técnica e preço. Castro Alves, Bahia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [filtro, setFiltro] = useState<"Todos" | Categoria>("Todos");
  const lista = filtro === "Todos" ? CARS : CARS.filter((c) => c.categoria === filtro);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Showroom da LP Veículos com carro vermelho"
          width={1536}
          height={1024}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 md:pb-24 md:pt-40">
          <p className="mb-4 inline-flex items-center gap-2 font-display text-lg uppercase tracking-widest text-primary">
            <MapPin className="h-5 w-5" /> Castro Alves · Bahia
          </p>
          <h1 className="max-w-3xl text-6xl font-bold md:text-8xl">
            Seu próximo carro está na <span className="text-primary">LP</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-foreground/80">
            Seminovos revisados, preço justo e atendimento de verdade. Veja o estoque e fale com a
            gente direto pelo WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#estoque" className="btn btn-primary">Ver estoque</a>
            <a
              href={whatsappLink("Olá! Vim pelo site da LP Veículos.")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Estoque */}
      <section id="estoque" className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="font-display text-lg uppercase tracking-widest text-primary">Mostruário</p>
            <h2 className="text-5xl font-bold md:text-6xl">Veículos à venda</h2>
          </div>
          <p className="hidden text-muted-foreground md:block">{lista.length} veículos</p>
        </div>

        <div className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-1">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFiltro(cat)}
              className={`chip shrink-0 ${filtro === cat ? "!border-primary !bg-primary !text-primary-foreground" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((car) => (
            <Link
              key={car.id}
              to="/veiculo/$id"
              params={{ id: car.id }}
              className="group overflow-hidden rounded-lg border border-border bg-card transition hover:-translate-y-1 hover:border-primary"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={car.imagem}
                  alt={`${car.nome} ${car.cor}`}
                  width={1024}
                  height={704}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                {car.destaque && (
                  <span className="absolute left-3 top-3 rounded-sm bg-primary px-2 py-1 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground">
                    Destaque
                  </span>
                )}
              </div>
              <div className="space-y-3 p-5">
                <div>
                  <h3 className="text-3xl font-bold">{car.nome}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{car.versao}</p>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-foreground/80">
                  <span>{car.ano}</span>
                  <span>{formatKm(car.km)}</span>
                  <span>{car.cor}</span>
                  <span>{car.ficha.find((f) => f.label === "Câmbio")?.value.split(" ")[0]}</span>
                </div>
                <div className="flex items-end justify-between border-t border-border pt-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Preço</p>
                    <p className="font-display text-4xl font-bold leading-none text-primary">
                      {formatPrice(car.preco)}
                    </p>
                  </div>
                  <span className="font-display text-lg font-semibold uppercase tracking-wider group-hover:text-primary">
                    Ficha técnica →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="font-display text-lg uppercase tracking-widest text-primary">Sobre a loja</p>
            <h2 className="mt-2 text-5xl font-bold">Confiança de quem é daqui</h2>
          </div>
          <div className="grid gap-8 md:col-span-2 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, t: "Procedência", d: "Veículos revisados e com documentação em dia." },
              { icon: BadgeDollarSign, t: "Preço justo", d: "Valores claros e aceitamos seu carro na troca." },
              { icon: Handshake, t: "Atendimento", d: "Conversa direta, sem pressão, do início ao fim." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="space-y-3">
                <Icon className="h-9 w-9 text-primary" />
                <h3 className="text-2xl font-bold">{t}</h3>
                <p className="text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <p className="font-display text-lg uppercase tracking-widest text-primary">Visite a loja</p>
              <h2 className="text-5xl font-bold md:text-6xl">Castro Alves – BA</h2>
            </div>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>{STORE.city}, {STORE.state}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>{STORE.hours}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>{STORE.whatsappLabel}</span>
              </li>
            </ul>
            <a
              href={whatsappLink("Olá! Gostaria de mais informações sobre os veículos.")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
            >
              Chamar no WhatsApp
            </a>
          </div>
          <div className="overflow-hidden rounded-lg border border-border">
            <iframe
              title="Mapa de Castro Alves, Bahia"
              src="https://www.google.com/maps?q=Castro+Alves,+Bahia&output=embed"
              loading="lazy"
              className="h-80 w-full grayscale invert-[0.9] contrast-[0.9] md:h-full md:min-h-80"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
