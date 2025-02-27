'use client'

// Next
import { redirect } from 'next/navigation'

// Lib
import { validateLocaleCode } from '@i18n'

// This page is used to redirect the user to the proper language route.
export default () => {
  const browserLanguage = navigator.language
  const isBrowserLanguageValid = validateLocaleCode(browserLanguage)

  redirect(isBrowserLanguageValid ? `/${browserLanguage}` : '/en-US')
}
