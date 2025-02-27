import { mantineHtmlProps } from '@mantine/core'

type HtmlPageProps = {
  children: React.ReactNode
  language?: string
}

export const HtmlPage = ({ children, language = 'en' }: HtmlPageProps) => (
  <html lang={language} {...mantineHtmlProps}>
    {children}
  </html>
)
