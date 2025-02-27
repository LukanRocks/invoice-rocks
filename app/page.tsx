'use client'

import { redirect } from 'next/navigation'

import { validateLocaleCode } from '@i18n'

// This page only renders when the app is built statically (output: 'export')
export default () => {
  const browserLanguage = navigator.language
  const isBrowserLanguageValid = validateLocaleCode(browserLanguage)

  redirect(isBrowserLanguageValid ? `/${browserLanguage}` : '/en-US')
}
