import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  // TODO: compute totals server-side, create order in DB (status=pending)
  const secret = process.env.XENDIT_SECRET_KEY || ''
  const auth = Buffer.from(secret + ':').toString('base64')

  const r = await fetch('https://api.xendit.co/v2/invoices', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + auth,
    },
    body: JSON.stringify({
      external_id: `order_${Date.now()}`,
      amount: body.total || 1000,
      payer_email: body.email || 'buyer@example.com',
      description: 'Photo prints',
      currency: 'PHP',
      should_send_email: true,
      success_redirect_url: (process.env.SITE_URL || '') + '/prints?success=1',
      failure_redirect_url: (process.env.SITE_URL || '') + '/prints?failed=1',
      payment_methods: ['GCASH','CARD'],
    }),
  })

  if (!r.ok) {
    const t = await r.text()
    return new NextResponse(t, { status: 500 })
  }

  const invoice = await r.json()
  return NextResponse.json({ checkoutUrl: invoice.invoice_url })
}
