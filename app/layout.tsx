import '@/app/globals.css'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'

import { ColorSchemeScript, MantineProvider } from '@mantine/core'

import { theme } from '@/theme'

import { HtmlPage } from '@/app/components'

// Since we have a `not-found.tsx` page on the root,
// a layout file is required, even if it's just passing children through.
export default ({ children }: { children: React.ReactNode }) => (
  <HtmlPage>
    <head>
      <ColorSchemeScript defaultColorScheme='auto' />
    </head>
    <body>
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </body>
  </HtmlPage>
)
