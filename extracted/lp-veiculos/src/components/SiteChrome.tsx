import { Link } from "@tanstack/react-router";
import { STORE, whatsappLink } from "@/data/cars";

export function Logo() {
  return (
    <span className="flex items-center gap-2">
      <span className="flex h-9 w-11 items-center justify-center rounded-sm bg-primary font-display text-2xl font-bold italic leading-none text-primary-foreground">
        LP
      </span>
      <span className="font-display text-2xl font-bold uppercase leading-none tracking-wider">
        Veículos
      </span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" aria-label="LP Veículos - início">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 font-display text-lg uppercase tracking-wider md:flex">
          <Link to="/" hash="estoque" className="hover:text-primary">Estoque</Link>
          <Link to="/" hash="sobre" className="hover:text-primary">Sobre</Link>
          <Link to="/" hash="contato" className="hover:text-primary">Contato</Link>
        </nav>
        <a
          href={whatsappLink("Olá! Vim pelo site da LP Veículos.")}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary !px-4 !py-2"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="h-1.5 stripe" />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <Logo />
          <p className="text-sm text-muted-foreground">
            {STORE.city} – {STORE.state} · {STORE.hours}
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {STORE.name}. Valores sujeitos a alteração sem aviso prévio.
        </p>
      </div>
    </footer>
  );
}
