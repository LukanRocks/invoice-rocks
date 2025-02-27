'use client'

// Next
import { redirect } from 'next/navigation'
import { useParams } from 'next/navigation'

// i18n
import { useTranslationContext, getLocaleNameByCode, getLocaleCodeByName, getAllLocalesNames } from '@i18n'

// Mantine
import { Select as MantineSelect } from '@mantine/core'

export const LanguageSelector = () => {
  const params = useParams()

  const { _t } = useTranslationContext()

  const handleLanguageChange = (localeName: string) => {
    redirect(`/${getLocaleCodeByName(localeName)}`)
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
