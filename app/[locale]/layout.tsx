// React
import { useState, useEffect } from 'react'

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

export default async ({ children, params }: LocaleProps) => {
  // const [locale, setLocale] = useState('')
  // useEffect(()=>{

  // },[])

  const { locale } = await params

  let messages

  try {
    messages = (await import(`@/lib/i18n/locales/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  // TODO: Learn about JSON-LD and why it's used, and where to put it
  // <head><script type='application/ld+json' id='json-ld' dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }} /></head>
  return (
    <div className='antialiased bg-slate-100 dark:bg-slate-800'>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Providers>
          <NavBar />

          <div className='flex flex-col'>{children}</div>

          <Footer />

          <Toaster />
        </Providers>
      </NextIntlClientProvider>
    </div>
  )
}
