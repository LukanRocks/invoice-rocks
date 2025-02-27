// CSS Global Imports
import '@/app/globals.css' // TODO: Remove after cleanup
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'

// Mantine
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core'

// Lib
import { theme } from '@theme'

// Since we have a `not-found.tsx` page on the root,
// a layout file is required, even if it's just passing children through.
export default ({ children }: { children: React.ReactNode }) => (
  <html {...mantineHtmlProps}>
    <head>
      <ColorSchemeScript defaultColorScheme='auto' />
    </head>
    <body>
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </body>
  </html>
)
