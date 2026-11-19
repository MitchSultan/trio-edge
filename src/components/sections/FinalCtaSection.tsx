"use client";
export default function FinalCtaSection() {
  return (
    <section id="contact" className="relative overflow-hidden section-pad bg-surface-alt text-center">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(186,150,77,.18),transparent_70%)] blur-3xl" />
      <div className="relative mx-auto max-w-[1100px]">
        <p className="eyebrow mb-7">START SOMETHING CLEAR</p>
        <h2 className="display-lg">Ready to sharpen<br />your edge?</h2>
        <p className="mx-auto mt-8 max-w-xl text-body text-ink-muted">Bring us the ambition, the uncertainty or the transformation ahead. We’ll help define the clearest path forward.</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="mailto:hello@trio-edge.com" className="rounded-full bg-primary px-7 py-4 text-[12px] font-semibold uppercase tracking-[.1em] text-ink shadow-[0_0_20px_rgba(186,150,77,.35)]">Start a Conversation</a>
          <a href="#services" className="rounded-full bg-white px-7 py-4 text-[12px] font-semibold uppercase tracking-[.1em] text-ink">View Capabilities</a>
        </div>
      </div>
    </section>
  );
}
