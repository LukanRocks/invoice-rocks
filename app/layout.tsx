// CSS Global Imports
import '@/app/globals.css' // TODO: Remove after cleanup
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'

// Mantine
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core'

// Lib
import { theme } from '@theme'

// TODO: Learn about JSON-LD and why it's used, and where to put it
// <head><script type='application/ld+json' id='json-ld' dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }} /></head>
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
