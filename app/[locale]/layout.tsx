// Next
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'

// Lib
import { NavBar, Footer } from '@components'

// ! ----------------

// Contexts
import Providers from '@/old-stuff/contexts/Providers'

// ! ----------------

export default async ({ children, params }: { children: React.ReactNode; params: { locale: string } }) => {
  const { locale } = await params

  let messages

  try {
    messages = (await import(`@/lib/i18n/locales/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <div className='antialiased bg-slate-100 dark:bg-slate-800'>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Providers>
          <NavBar />

          <div className='flex flex-col'>{children}</div>

          <Footer />
        </Providers>
      </NextIntlClientProvider>
    </div>
  )
}
