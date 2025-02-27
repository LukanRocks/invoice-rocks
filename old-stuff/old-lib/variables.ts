// Types
import { SignatureColor, SignatureFont } from '@/old-stuff/old-lib/types'

/**
 * Environment
 */
export const ENV = process.env.NODE_ENV

/**
 * API endpoints
 */
export const GENERATE_PDF_API = '/api/invoice/generate'
export const SEND_PDF_API = '/api/invoice/send'
export const EXPORT_INVOICE_API = '/api/invoice/export'

/**
 * External API endpoints
 */
export const CURRENCIES_API = 'https://openexchangerates.org/api/currencies.json'

/**
 * Chromium for Puppeteer
 */
export const CHROMIUM_EXECUTABLE_PATH = 'https://github.com/Sparticuz/chromium/releases/download/v122.0.0/chromium-v122.0.0-pack.tar'

/**
 * Tailwind
 */
export const TAILWIND_CDN = 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css'

/**
 * Nodemailer
 */
export const NODEMAILER_EMAIL = process.env.NODEMAILER_EMAIL
export const NODEMAILER_PW = process.env.NODEMAILER_PW

/**
 * Signature variables
 */
export const SIGNATURE_COLORS: SignatureColor[] = [
  { name: 'black', label: 'Black', color: 'rgb(0, 0, 0)' },
  { name: 'dark blue', label: 'Dark Blue', color: 'rgb(0, 0, 128)' },
  { name: 'crimson', label: 'Crimson', color: '#DC143C' },
]

export const SIGNATURE_FONTS: SignatureFont[] = [
  {
    name: 'Dancing Script',
    variable: 'var(--font-dancing-script)',
  },
  { name: 'Parisienne', variable: 'var(--font-parisienne)' },
  {
    name: 'Great Vibes',
    variable: 'var(--font-great-vibes)',
  },
  {
    name: 'Alex Brush',
    variable: 'var(--font-alex-brush)',
  },
]

/**
 * Form date options
 */
export const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

export const SHORT_DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
}
