import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { CARS, STORE, formatKm, formatPrice, whatsappLink } from "@/data/cars";

export const Route = createFileRoute("/veiculo/$id")({
  loader: ({ params }) => {
    const car = CARS.find((c) => c.id === params.id);
    if (!car) throw notFound();
    return { car };
  },
  head: ({ loaderData }) => {
    const car = loaderData?.car;
    const title = car
      ? `${car.nome} ${car.ano} - ${formatPrice(car.preco)} | LP Veículos`
      : "Veículo | LP Veículos";
    const desc = car
      ? `${car.nome} ${car.versao}, ${car.ano}, ${formatKm(car.km)}, cor ${car.cor}. Ficha técnica completa na LP Veículos, Castro Alves - BA.`
      : "Veículo à venda na LP Veículos.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-6xl font-bold">Veículo não encontrado</h1>
      <p className="text-muted-foreground">Ele pode já ter sido vendido.</p>
      <Link to="/" hash="estoque" className="btn btn-primary">Ver estoque</Link>
    </div>
  ),
  component: CarPage,
});

function CarPage() {
  const { car } = Route.useLoaderData();
  const msg = `Olá! Tenho interesse no ${car.nome} ${car.versao} ${car.ano} (${formatPrice(car.preco)}).`;

  const resumo = [
    { label: "Ano", value: car.ano },
    { label: "Quilometragem", value: formatKm(car.km) },
    { label: "Cor", value: car.cor },
    { label: "Categoria", value: car.categoria },
  ];

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <Link
          to="/"
          hash="estoque"
          className="mb-6 inline-flex items-center gap-2 font-display text-lg uppercase tracking-wider text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-5 w-5" /> Voltar ao estoque
        </Link>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-lg border border-border">
              <img
                src={car.imagem}
                alt={`${car.nome} ${car.cor}`}
                width={1024}
                height={704}
                className="w-full object-cover"
              />
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-2">
            <div>
              <p className="font-display text-lg uppercase tracking-widest text-primary">{car.categoria}</p>
              <h1 className="mt-1 text-5xl font-bold md:text-6xl">{car.nome}</h1>
              <p className="mt-2 text-muted-foreground">{car.versao}</p>
            </div>

            <div className="rounded-lg border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Preço</p>
              <p className="font-display text-6xl font-bold leading-none text-primary">
                {formatPrice(car.preco)}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">Aceitamos seu carro na troca · Financiamento</p>
            </div>

            <dl className="grid grid-cols-2 gap-3">
              {resumo.map((r) => (
                <div key={r.label} className="rounded-lg bg-secondary p-3">
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">{r.label}</dt>
                  <dd className="mt-1 font-display text-2xl font-semibold">{r.value}</dd>
                </div>
              ))}
            </dl>

            <a href={whatsappLink(msg)} target="_blank" rel="noreferrer" className="btn btn-whatsapp w-full">
              Tenho interesse · WhatsApp
            </a>
          </aside>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <section>
            <h2 className="mb-4 text-4xl font-bold">Ficha técnica</h2>
            <dl className="overflow-hidden rounded-lg border border-border">
              {car.ficha.map((f, i) => (
                <div
                  key={f.label}
                  className={`flex justify-between gap-4 px-4 py-3 ${i % 2 === 0 ? "bg-card" : "bg-secondary"}`}
                >
                  <dt className="text-muted-foreground">{f.label}</dt>
                  <dd className="text-right font-semibold">{f.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section>
            <h2 className="mb-4 text-4xl font-bold">Equipamentos</h2>
            <ul className="grid gap-3 rounded-lg border border-border bg-card p-5">
              {car.opcionais.map((o) => (
                <li key={o} className="flex items-center gap-3">
                  <Check className="h-5 w-5 shrink-0 text-primary" />
                  {o}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Visite a {STORE.name} em {STORE.city} – {STORE.state} e faça um test drive.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
