'use client'

// i18n
import { useTranslationContext } from '@/i18n/utils/translation-context'

// Variables
import { AUTHOR_GITHUB, AUTHOR_NAME } from '@/lib/variables'

// Mantine
import { Text } from '@mantine/core'

export const Footer = () => {
  const { _t } = useTranslationContext()

  return (
    <footer className='container py-10'>
      <Text component='a' href={AUTHOR_GITHUB} target='_blank'>
        {`${_t('footer.developedBy')} ${AUTHOR_NAME}`}
      </Text>
    </footer>
  )
}
