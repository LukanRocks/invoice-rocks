import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

// Favicon
import Favicon from '@/public/favicon/favicon.ico'

// Vercel Analytics
import { Analytics } from '@vercel/analytics/react'

// Next Intl
import { NextIntlClientProvider } from 'next-intl'

// ShadCn
import { Toaster } from '@/components/ui/toaster'

// Components
import { HtmlPage, NavBar, Footer } from '@/app/components'

// Contexts
import Providers from '@/contexts/Providers'

// SEO
import { JSONLD, ROOTKEYWORDS } from '@/lib/seo'

// Variables
import { BASE_URL, GOOGLE_SC_VERIFICATION } from '@/lib/variables'

// i18n
import { LOCALES_AVAILABLE, useTranslationContext } from '@/i18n'

// TODO: Use a share metadata
export const metadata: Metadata = {
  title: 'Invoify | Free Invoice Generator',
  description: 'Create invoices effortlessly with Invoify, the free invoice generator. Try it now!',
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
    name: 'Ali Abbasov',
    url: 'https://aliabb.vercel.app',
  },
  verification: {
    google: GOOGLE_SC_VERIFICATION,
  },
}

export function generateStaticParams() {
  const locales = LOCALES_AVAILABLE.map((locale) => locale.code)
  return locales
}

type LocaleProps = { children: React.ReactNode; params: { locale: string } }

export default async ({ children, params: { locale } }: LocaleProps) => {
  let messages

  try {
    messages = (await import(`@/i18n/locales/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <HtmlPage language={locale}>
      <head>
        <script type='application/ld+json' id='json-ld' dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }} />
      </head>
      <body className='antialiased bg-slate-100 dark:bg-slate-800'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <NavBar />

            <div className='flex flex-col'>{children}</div>

            <Footer />

            {/* Toast component */}
            <Toaster />

            {/* Vercel analytics */}
            <Analytics />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </HtmlPage>
  )
}
