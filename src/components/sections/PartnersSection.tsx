"use client";

const partners = ["Kijani", "SAFARI AIR", "RIFTLINE", "Mara", "NOVA BANK", "SAVANNA", "Atlas"];
export default function PartnersSection() {
  return (
    <section className="overflow-hidden border-y border-hairline bg-surface-alt py-16">
      <div className="mx-auto mb-8 max-w-[1440px] px-6 md:px-20"><p className="eyebrow">TRUSTED ACROSS THE REGION</p></div>
      <div className="flex w-max animate-[ticker_28s_linear_infinite] items-center">
        {[...partners, ...partners].map((partner, i) => (
          <div key={`${partner}-${i}`} className="mx-8 flex h-20 w-44 items-center justify-center border border-hairline px-6 text-[18px] font-bold tracking-[.08em] text-white/55 transition hover:text-primary md:mx-12">{partner}</div>
        ))}
      </div>
    </section>
  );
}
