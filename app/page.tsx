export default function Page() {
  return (
    <section className="space-y-10">
      <div className="grid gap-6 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">Street & Travel Photography</h1>
          <p className="mt-4 text-white/80">Proofing-ready galleries and built‑in print sales with GCash and cards.</p>
          <div className="mt-6 flex gap-4">
            <a className="px-5 py-2 rounded bg-white text-black" href="/portfolio">View Portfolio</a>
            <a className="px-5 py-2 rounded border border-white/20" href="/prints">Buy Prints</a>
          </div>
        </div>
        <div className="aspect-video rounded-xl bg-white/5" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Featured Albums</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="aspect-[4/3] rounded-lg bg-white/5" />
          <div className="aspect-[4/3] rounded-lg bg-white/5" />
          <div className="aspect-[4/3] rounded-lg bg-white/5" />
        </div>
      </div>
    </section>
  )
}
