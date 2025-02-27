'use client'

// Next
import { useParams } from 'next/navigation'
import { useRouter } from 'next-intl/client' // This useRouter is wrapped with next/navigation useRouter

// i18n
import { useTranslationContext, getLocaleNameByCode, getLocaleCodeByName, getAllLocalesNames } from '@/i18n'

// Mantine
import { Select as MantineSelect } from '@mantine/core'

export const LanguageSelector = () => {
  const router = useRouter()
  const params = useParams()

  const { _t } = useTranslationContext()

  const handleLanguageChange = (localeName: string) => {
    router.push('/', { locale: getLocaleCodeByName(localeName) })
  }

  return (
    <MantineSelect
      searchable
      allowDeselect={false}
      nothingFoundMessage={_t('language.nothingFound')}
      data={getAllLocalesNames()}
      defaultValue={getLocaleNameByCode(params.locale.toLocaleString())}
      onOptionSubmit={(localeName) => handleLanguageChange(localeName)}
    />
  )
}
