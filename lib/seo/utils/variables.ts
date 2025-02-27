import type { Metadata } from 'next'
import Favicon from '@/public/favicon/favicon.ico'

/**
 * Information
 */
export const APP_NAME = 'Invoice Rocks'
export const APP_DESCRIPTION = 'An Invoice Generator Web App'
export const APP_LOGO_URL = 'https://invoify.vercel.app/_next/static/media/invoify-logo.7ef8fa33.svg'
export const AUTHOR_NAME = 'Lukan Vanderlinde'
export const AUTHOR_WEBSITE = 'https://lukan.rocks/'
export const BASE_URL = 'https://invoice.lukan.rocks/'
export const AUTHOR_GITHUB = 'https://github.com/LukanRocks'

/**
 * Google
 */
export const GOOGLE_SC_VERIFICATION = process.env.GOOGLE_SC_VERIFICATION

/**
 * Metadata
 */
export const ROOTKEYWORDS = ['invoice', 'invoice generator', 'invoice generating', 'invoice app', 'invoice generator app', 'free invoice generator']

export const METADATA: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  icons: [{ rel: 'icon', url: Favicon.src }],
  keywords: ROOTKEYWORDS,
  viewport: 'width=device-width, initial-scale=1',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: BASE_URL,
  },
  authors: {
    name: AUTHOR_NAME,
    url: AUTHOR_GITHUB,
  },
  verification: {
    google: GOOGLE_SC_VERIFICATION,
  },
}

// export const JSONLD = {
//   '@context': 'https://schema.org',
//   '@type': 'Website',
//   'name': APP_NAME,
//   'description': APP_DESCRIPTION,
//   'keywords': ROOTKEYWORDS,
//   'url': BASE_URL,
//   'image': APP_LOGO_URL,
//   'mainEntityOfPage': {
//     '@type': 'WebPage',
//     '@id': `${BASE_URL}/#website`,
//   },
//   'author': {
//     '@type': 'Person',
//     'name': AUTHOR_NAME,
//     'url': AUTHOR_WEBSITE,
//   },
//   '@graph': [
//     {
//       '@type': 'WebSite',
//       '@id': `${BASE_URL}/#website`,
//       'url': `${BASE_URL}`,
//     },
//   ],
// }
