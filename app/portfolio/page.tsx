export default function PortfolioPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold">Portfolio</h1>
      <p className="text-white/80 mt-2">Filters: Street, Travel, Year, Country, Tags</p>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="aspect-[4/3] rounded-lg bg-white/5" />
        <div className="aspect-[4/3] rounded-lg bg-white/5" />
        <div className="aspect-[4/3] rounded-lg bg-white/5" />
      </div>
    </section>
  )
}
