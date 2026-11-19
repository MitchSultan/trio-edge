export default function Header() {
  return (
    <header className="fixed inset-x-4 top-4 z-40 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-6 py-5 backdrop-blur-xl md:inset-x-12 md:px-12">
      <a href="#top" className="text-lg font-semibold tracking-tight">Trio Edge</a>
      <a href="#contact" className="btn btn-primary">Start a project</a>
    </header>
  );
}
