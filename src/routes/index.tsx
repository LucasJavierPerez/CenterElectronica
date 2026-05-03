import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Volume2,
  Tv,
  Wrench,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Award,
  Cpu,
} from "lucide-react";
import heroImg from "@/assets/hero-circuit.jpg";
import tvImg from "@/assets/service-tv.jpg";
import audioImg from "@/assets/service-audio.jpg";
import appliancesImg from "@/assets/service-appliances.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Center Electrónica — Reparación de electrónica en Puerto Madryn" },
      {
        name: "description",
        content:
          "Service oficial de TV LED Smart, audio y electrodomésticos en Puerto Madryn desde el año 2000. Reparaciones minuciosas con garantía.",
      },
    ],
  }),
});

const services = [
  {
    icon: Tv,
    image: tvImg,
    title: "Reparación de TV LED & Smart",
    desc: "Service oficial Philips, Philco, Noblex, Sanyo, Aiwa, Hitachi, TCL, RCA, Hisense, AOC. Garantías extendidas Cardif y Assurant.",
  },
  {
    icon: Volume2,
    image: audioImg,
    title: "Reparación de Audio",
    desc: "Diagnóstico y reparación de equipos de audio.",
    official: "Philips, Philco, Noblex, Sanyo, Aiwa, Hitachi, TCL, RCA, Hisense, AOC y muchas más.",
  },
  {
    icon: Wrench,
    image: appliancesImg,
    title: "Electrodomésticos",
    desc: "Pequeños electrodomésticos con repuestos originales.",
    official: "Toda la línea Philips, Atma, VGH, Daewoo.",
  },
];

const stats = [
  { value: "+25", label: "Años de experiencia" },
  { value: "15+", label: "Marcas oficiales" },
  { value: "100%", label: "Diagnóstico garantizado" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
              <Cpu className="h-5 w-5" />
            </span>
            <span className="text-lg">Center Electrónica</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a
              href="#servicios"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Servicios
            </a>
            <a
              href="#nosotros"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Nosotros
            </a>
            <a
              href="#contacto"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Contacto
            </a>
          </div>
          <Button asChild size="sm">
            <a href="#contacto">Solicitar reparación</a>
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Placa de circuito electrónico"
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Service oficial en Puerto Madryn desde el año 2000
            </div>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Reparaciones que devuelven{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                la vida
              </span>{" "}
              a tu electrónica.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Taller especializado en TV LED Smart, audio y electrodomésticos. Trabajo minucioso,
              diagnóstico transparente y resultado como nuevo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="#contacto">Pedir presupuesto</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#servicios">Ver servicios</a>
              </Button>
            </div>
            <div className="mt-16 grid max-w-xl grid-cols-3 gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-bold tracking-tight md:text-4xl">{s.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            Servicios
          </p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Lo que hacemos, lo hacemos bien.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Card
              key={s.title}
              className="group relative flex flex-col overflow-hidden border-border/60 transition-all hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary/40">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary transition-transform group-hover:scale-110">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                {s.official && (
                  <div className="mt-4 border-t border-border/60 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Service oficial
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{s.official}</p>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="nosotros" className="border-y border-border/50 bg-secondary/30">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
              Nuestra historia
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Más de dos décadas reparando con dedicación.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Center Electrónica abrió sus puertas en el año 2000 con la misión de ofrecer un taller
              de reparación fiable y de calidad en Puerto Madryn. Desde entonces seguimos fieles a
              ese deseo: nuestras reparaciones se caracterizan por la minuciosidad que garantiza un
              producto tan bueno como si fuera nuevo.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: ShieldCheck,
                  t: "Service oficial",
                  d: "Trabajamos con las principales marcas del mercado.",
                },
                {
                  icon: Award,
                  t: "Calidad garantizada",
                  d: "Cada reparación pasa por estrictos controles.",
                },
              ].map((f) => (
                <div key={f.t} className="flex gap-3">
                  <f.icon className="h-6 w-6 shrink-0 text-accent" />
                  <div>
                    <div className="font-semibold">{f.t}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
            <img
              src={heroImg}
              alt="Reparación electrónica de precisión"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-accent/30 mix-blend-overlay" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
              Contacto
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Acercanos tu equipo.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Te asesoramos sin compromiso y te damos un diagnóstico claro.
            </p>
            <div className="mt-10 space-y-8">
              <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    src="https://maps.google.com/maps?q=Center%20Electr%C3%B3nica%20Sarmiento%20588%20Puerto%20Madryn&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Center Electrónica"
                    className="grayscale transition-all duration-500 hover:grayscale-0"
                  />
                </AspectRatio>
              </div>
              <div className="space-y-5">
                {[
                  { icon: MapPin, t: "Sarmiento 588", d: "U9120 Puerto Madryn, Chubut, Argentina" },
                  { icon: Clock, t: "Lunes a Viernes", d: "9:00 – 13:00 · 16:00 – 20:00" },
                  {
                    icon: Phone,
                    t: "WhatsApp",
                    d: "Escribinos tu consulta",
                    link: "https://wa.me/5492804510950",
                  },
                  { icon: Mail, t: "Email", d: "ossojuan3@gmail.com" },
                ].map((c) => (
                  <div key={c.t} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div>
                      {"link" in c ? (
                        <a
                          href={c.link as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block transition-colors hover:text-primary"
                        >
                          <div className="font-semibold group-hover:underline">{c.t}</div>
                          <p className="text-sm text-muted-foreground">{c.d}</p>
                        </a>
                      ) : (
                        <>
                          <div className="font-semibold">{c.t}</div>
                          <p className="text-sm text-muted-foreground">{c.d}</p>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Card className="p-8 shadow-[var(--shadow-card)]">
            <h3 className="text-xl font-semibold">Envianos un mensaje</h3>
            <p className="mt-1 text-sm text-muted-foreground">Te respondemos a la brevedad.</p>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("¡Gracias! Te contactaremos pronto.");
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  placeholder="Nombre"
                  className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <input
                placeholder="Equipo a reparar (ej. TV Philips 43”)"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
              <textarea
                required
                rows={5}
                placeholder="Contanos qué problema tiene tu equipo..."
                className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
              <Button type="submit" size="lg" className="w-full">
                Enviar consulta
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-secondary/30">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 text-primary" />
            <span>© {new Date().getFullYear()} Center Electrónica · Puerto Madryn</span>
          </div>
          <span>Lo que hacemos, lo hacemos bien.</span>
        </div>
      </footer>
    </div>
  );
}
