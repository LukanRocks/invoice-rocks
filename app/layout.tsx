import '@/app/globals.css'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core'

// TODO: Use single metadata
export const metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully',
}

// Since we have a `not-found.tsx` page on the root,
// a layout file is required, even if it's just passing children through.
export default ({ children }: { children: React.ReactNode }) => (
  // TODO: use single language source
  <html lang='en' {...mantineHtmlProps}>
    <head>
      <ColorSchemeScript />
    </head>
    <body>
      <MantineProvider>{children}</MantineProvider>
    </body>
  </html>
)
