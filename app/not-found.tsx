'use client'

// Next
import Error from 'next/error'

// SEO
import { HtmlPage } from '@seo'

// Render the default Next.js 404 page when a route is requested that doesn't match the available ones.
// This also happens if a locale associated requested doesn't exist.
export default () => (
  <HtmlPage>
    <body>
      <Error statusCode={404} />
    </body>
  </HtmlPage>
)
