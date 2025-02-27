// i18n
import { LOCALES_AVAILABLE } from '@i18n'

export const getLocaleNameByCode = (code: string) => {
  const language = LOCALES_AVAILABLE.find((language) => language.code === code)

  return language ? language.name : LOCALES_AVAILABLE[0].name
}

export const getLocaleCodeByName = (name: string) => {
  const language = LOCALES_AVAILABLE.find((language) => language.name === name)

  return language ? language.code : LOCALES_AVAILABLE[0].code
}

export const validateLocaleCode = (code: string) => {
  const language = LOCALES_AVAILABLE.find((language) => language.code === code)

  return language ? true : false
}

export const getAllLocalesNames = () => {
  return LOCALES_AVAILABLE.map((language) => language.name)
}

export const getAllLocalesCodes = () => {
  return LOCALES_AVAILABLE.map((language) => language.code)
}

export const getAllLocalesEmojis = () => {
  return LOCALES_AVAILABLE.map((language) => language.emoji)
}
