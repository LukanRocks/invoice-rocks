/* =========================
   * Components
   ========================= */
import { LanguageSelector } from './components/language-selector'

/* =========================
   * Utils
   ========================= */
import { LOCALES_AVAILABLE, DEFAULT_LOCALE } from './utils/variables'
import { TranslationContext, useTranslation, useTranslationContext, TranslationProvider } from './utils/translation-context'
import { getLocaleNameByCode, getLocaleCodeByName, validateLocaleCode, getAllLocalesNames, getAllLocalesCodes, getAllLocalesEmojis } from './utils/helpers'

export {
  LanguageSelector,
  LOCALES_AVAILABLE,
  DEFAULT_LOCALE,
  TranslationContext,
  useTranslation,
  useTranslationContext,
  TranslationProvider,
  getLocaleNameByCode,
  getLocaleCodeByName,
  validateLocaleCode,
  getAllLocalesNames,
  getAllLocalesCodes,
  getAllLocalesEmojis,
}
