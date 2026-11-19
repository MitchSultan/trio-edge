import { projects, services } from "@/lib/content";
/* eslint-disable @next/next/no-img-element */

// Service data has no imagery yet; project images are temporary placeholders.
const items = services.map((service, index) => ({
  ...service,
  placeholderImage: projects[index % projects.length],
}));

export default function Services() {
  const panelImage = items[0]?.placeholderImage;

  return (
    <section id="services" className="relative min-h-svh overflow-x-clip bg-process-bg text-process-ink">
      <div className="mx-auto max-w-screen px-6 py-16 md:px-9 md:py-20 lg:py-24">
        <header className="mb-8">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-process-muted">Services</p>
          <h2 aria-label="Our services" className="font-sans text-[clamp(3rem,5.5vw,4.7rem)] font-medium leading-[0.9] tracking-[-0.055em]">
            <span aria-hidden="true" className="block text-process-ink">Our</span>
            <span aria-hidden="true" className="block text-process-muted">services</span>
          </h2>
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-14">
          <ol className="relative flex flex-col">
            <span aria-hidden="true" className="absolute inset-y-0 left-0 w-px bg-process-line" />
            {items.map((item, index) => (
              <li key={item.title} className="flex flex-col justify-center border-b border-process-line py-6 first:border-t lg:py-5">
                <div className="grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-x-4 pl-6">
                  <span className="pt-1 text-xs tabular-nums text-process-muted">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-base font-medium leading-tight tracking-[-0.02em] lg:text-lg">{item.title}</h3>
                    <p className="mt-1 max-w-[55ch] text-[13px] leading-[1.4] text-process-muted">{item.text}</p>
                  </div>
                </div>
                <div className="mt-5 aspect-[4/5] w-full max-w-[390px] overflow-hidden bg-process-line lg:hidden">
                  <img
                    src={item.placeholderImage.img}
                    alt={item.placeholderImage.title}
                    sizes="(min-width: 1024px) 390px, 100vw"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </li>
            ))}
          </ol>

          <div className="relative ml-auto hidden aspect-[4/5] w-full max-w-[390px] overflow-hidden bg-process-line lg:block">
            {panelImage && (
              <img
                src={panelImage.img}
                alt={panelImage.title}
                sizes="(min-width: 1024px) 390px, 100vw"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
