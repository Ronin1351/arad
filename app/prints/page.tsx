export default function PrintsPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold">Prints</h1>
      <p className="text-white/80 mt-2">Purchase prints by size and paper.</p>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="aspect-[4/3] rounded-lg bg-white/5" />
        <div className="aspect-[4/3] rounded-lg bg-white/5" />
        <div className="aspect-[4/3] rounded-lg bg-white/5" />
      </div>
    </section>
  )
}
