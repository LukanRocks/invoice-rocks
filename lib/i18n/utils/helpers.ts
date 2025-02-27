// i18n
import { LOCALES_AVAILABLE } from '@i18n'

export function getLocaleNameByCode(code: string) {
  const language = LOCALES_AVAILABLE.find((language) => language.code === code)

  return language ? language.name : LOCALES_AVAILABLE[0].name
}

export function getLocaleCodeByName(name: string) {
  const language = LOCALES_AVAILABLE.find((language) => language.name === name)

  return language ? language.code : LOCALES_AVAILABLE[0].code
}

export function getAllLocalesNames() {
  return LOCALES_AVAILABLE.map((language) => language.name)
}

export function getAllLocalesEmojis() {
  return LOCALES_AVAILABLE.map((language) => language.emoji)
}
