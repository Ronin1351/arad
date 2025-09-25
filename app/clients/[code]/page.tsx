interface Props { params: { code: string } }
export default function ClientProof({ params }: Props) {
  const { code } = params
  return (
    <section>
      <h1 className="text-2xl font-semibold">Client Proofing</h1>
      <p className="text-white/80 mt-2">Album code: {code}</p>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="aspect-[4/3] rounded-lg bg-white/5" />
        <div className="aspect-[4/3] rounded-lg bg-white/5" />
        <div className="aspect-[4/3] rounded-lg bg-white/5" />
      </div>
      <div className="mt-6">
        <button className="px-5 py-2 rounded bg-white text-black">Submit Selections</button>
      </div>
    </section>
  )
}
