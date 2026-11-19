"use client";
export default function FounderSection() {
  return (
    <section id="founder" className="section-pad bg-canvas">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2">
        <div className="relative border border-hairline p-3">
          <img data-speed="0.92" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=90" alt="Amani Ochieng, Founder and Managing Partner" className="aspect-[4/5] w-full object-cover grayscale" />
        </div>
        <div className="lg:px-12">
          <p className="eyebrow mb-8">OUR FOUNDER</p>
          <blockquote className="text-[clamp(2.25rem,4.5vw,4.25rem)] leading-[1.08] tracking-[-.025em]">“Ambition becomes powerful when it has a clear direction.”</blockquote>
          <p className="mt-8 text-[20px] font-medium">Amani Ochieng</p>
          <p className="text-sm uppercase tracking-[.12em] text-primary">Founder & Managing Partner</p>
          <p className="mt-7 max-w-xl text-body text-ink-muted">Amani founded Trio-Edge to bring rigorous global thinking to the opportunities shaping East Africa. Her practice sits at the intersection of market strategy, institutional transformation and meaningful regional growth.</p>
        </div>
      </div>
    </section>
  );
}
