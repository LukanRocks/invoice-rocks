// Next
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'

// Lib
import { HtmlPage } from '@seo'
import { NavBar, Footer } from '@components'

// ! ----------------

// ShadCn
import { Toaster } from '@/old-stuff/ui/toaster'

// Contexts
import Providers from '@/old-stuff/contexts/Providers'

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
      {/* TODO: Learn about JSON-LD and why it's used */}
      {/* <head><script type='application/ld+json' id='json-ld' dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }} /></head> */}
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
