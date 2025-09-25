import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const payload = await req.json()
  // TODO: authenticate via cookie for accessCode+PIN
  // TODO: persist selections/comments
  console.log('Proof selections received:', payload?.items?.length || 0)
  return NextResponse.json({ ok: true })
}
