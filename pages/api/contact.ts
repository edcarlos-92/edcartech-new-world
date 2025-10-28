import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type ResponseData = {
  ok: boolean
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method Not Allowed' })
  }

  const { firstName, lastName, email, phone, subject, message } = req.body || {}

  if (!firstName || !lastName || !email || !message) {
    return res
      .status(400)
      .json({ ok: false, message: 'Missing required fields.' })
  }

  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USERNAME
  const pass = process.env.SMTP_PASSWORD
  const to = process.env.CONTACT_TO || process.env.NEXT_PUBLIC_CONTACT_TO
  const from = process.env.SMTP_FROM || user

  if (!host || !user || !pass || !to || !from) {
    return res.status(500).json({
      ok: false,
      message:
        'Email is not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD, CONTACT_TO, SMTP_FROM.',
    })
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })

    const html = `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${(message || '').replace(/\n/g, '<br/>')}</p>
    `

    await transporter.sendMail({
      from,
      to,
      subject: subject || 'New contact form message',
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone || ''}\nMessage: ${message}`,
      html,
      replyTo: email,
    })

    return res.status(200).json({ ok: true, message: 'Message sent.' })
  } catch (error) {
    return res.status(500).json({ ok: false, message: 'Failed to send email.' })
  }
}
