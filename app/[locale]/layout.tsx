import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

// Favicon
import Favicon from '@/public/favicon/favicon.ico'

// Next Intl
import { NextIntlClientProvider } from 'next-intl'

// ShadCn
import { Toaster } from '@/old-stuff/ui/toaster'

// Components
import { HtmlPage, NavBar, Footer } from '@components'

// Contexts
import Providers from '@/old-stuff/contexts/Providers'

// SEO
import { JSONLD, ROOTKEYWORDS } from '@/old-stuff/old-lib/seo'

// Variables
import { BASE_URL, GOOGLE_SC_VERIFICATION } from '@/old-stuff/old-lib/variables'

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

type LocaleProps = { children: React.ReactNode; params: { locale: string } }

export default async ({ children, params: { locale } }: LocaleProps) => {
  let messages

  try {
    messages = (await import(`@/lib/i18n/locales/${locale}.json`)).default
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
          </Providers>
        </NextIntlClientProvider>
      </body>
    </HtmlPage>
  )
}
