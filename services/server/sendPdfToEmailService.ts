import { NextRequest } from 'next/server'

// Nodemailer
import nodemailer from 'nodemailer'

import type { SendMailOptions } from 'nodemailer'

// React-email
import { render } from '@react-email/render'

// Components
import { SendPdfEmail } from '@/app/old-components'

// Helpers
import { fileToBuffer } from '@/old-stuff/old-lib/helpers'

// Variables
import { NODEMAILER_EMAIL, NODEMAILER_PW } from '@/old-stuff/old-lib/variables'

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: NODEMAILER_EMAIL,
    pass: NODEMAILER_PW,
  },
})

/**
 * Send a PDF as an email attachment.
 *
 * @param {NextRequest} req - The Next.js request object.
 * @returns {Promise<boolean>} A Promise that resolves to a boolean, indicating whether the email was sent successfully.
 * @throws {Error} Throws an error if there is an issue with sending the email.
 */
export async function sendPdfToEmailService(req: NextRequest): Promise<boolean> {
  const fd = await req.formData()

  // Get form data values
  const email = fd.get('email') as string
  const invoicePdf = fd.get('invoicePdf') as File
  const invoiceNumber = fd.get('invoiceNumber') as string

  // Get email html content
  const emailHTML = render(SendPdfEmail({ invoiceNumber }))

  // Convert file to buffer
  const invoiceBuffer = await fileToBuffer(invoicePdf)

  try {
    const mailOptions: SendMailOptions = {
      // TODO: Replace from to use the name of the invoice sender
      from: 'Invoice Rocks',
      to: email,
      // TODO: Replace to: "invoice {number} from {sender name}"
      subject: `Invoice Ready: #${invoiceNumber}`,
      html: emailHTML,
      attachments: [
        {
          // TODO: Replace to: "invoice-{sender name}-{number}"
          filename: `invoice-${invoiceNumber}.pdf`,
          content: invoiceBuffer,
        },
      ],
    }

    await transporter.sendMail(mailOptions)
    return true
  } catch (error) {
    console.error('Error sending email', error)
    return false
  }
}
