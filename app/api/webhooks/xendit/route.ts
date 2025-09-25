import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const sig = req.headers.get('x-callback-token')
  if (sig !== process.env.XENDIT_WEBHOOK_TOKEN) {
    return new Response('Unauthorized', { status: 401 })
  }
  const evt = await req.json()
  // TODO: verify invoice, mark order paid, send emails
  console.log('Xendit webhook:', evt.status, evt.id)
  return NextResponse.json({ ok: true })
}
