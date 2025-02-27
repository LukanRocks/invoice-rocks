'use client'

import React from 'react'

// RHF
import { FormProvider, useForm } from 'react-hook-form'

// Zod
import { zodResolver } from '@hookform/resolvers/zod'

// Schema
import { InvoiceSchema } from '@/old-stuff/old-lib/schemas'

// Context
import { ThemeProvider } from '@/old-stuff/contexts/ThemeProvider'
import { TranslationProvider } from '@i18n'
import { InvoiceContextProvider } from '@/old-stuff/contexts/InvoiceContext'
import { ChargesContextProvider } from '@/old-stuff/contexts/ChargesContext'

// Types
import { InvoiceType } from '@/old-stuff/old-lib/types'

// Variables
import { FORM_DEFAULT_VALUES } from '@/old-stuff/old-lib/variables'

type ProvidersProps = {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  const form = useForm<InvoiceType>({
    resolver: zodResolver(InvoiceSchema),
    defaultValues: FORM_DEFAULT_VALUES,
  })

  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <TranslationProvider>
        <FormProvider {...form}>
          <InvoiceContextProvider>
            <ChargesContextProvider>{children}</ChargesContextProvider>
          </InvoiceContextProvider>
        </FormProvider>
      </TranslationProvider>
    </ThemeProvider>
  )
}

export default Providers
