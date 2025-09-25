interface Props { params: { id: string } }
export default function PrintDetail({ params }: Props) {
  const { id } = params
  return (
    <section>
      <h1 className="text-2xl font-semibold">Print #{id}</h1>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div className="aspect-square rounded-xl bg-white/5" />
        <div>
          <div className="space-y-4">
            <div>
              <div className="text-sm opacity-70">Size</div>
              <select className="mt-1 bg-transparent border border-white/20 rounded px-3 py-2 w-full">
                <option>8x10</option>
                <option>12x18</option>
                <option>16x24</option>
              </select>
            </div>
            <div>
              <div className="text-sm opacity-70">Paper</div>
              <select className="mt-1 bg-transparent border border-white/20 rounded px-3 py-2 w-full">
                <option>Lustre</option>
                <option>Matte</option>
                <option>Fine Art</option>
              </select>
            </div>
            <button className="px-5 py-2 rounded bg-white text-black">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}
