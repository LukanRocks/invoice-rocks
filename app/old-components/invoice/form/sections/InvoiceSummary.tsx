'use client'

// Components
import { Charges, FormTextarea, SignatureModal, Subheading } from '@/app/old-components'

// Contexts
import { useTranslationContext } from '@i18n'
import { SignatureContextProvider } from '@/old-stuff/contexts/SignatureContext'

const InvoiceSummary = () => {
  const { _t } = useTranslationContext()

  return (
    <section>
      <Subheading>{_t('form.steps.summary.heading')}:</Subheading>
      <div className='flex flex-wrap gap-x-5 gap-y-10'>
        <div className='flex flex-col gap-3'>
          <SignatureContextProvider>
            {/* Signature dialog */}
            <SignatureModal />
          </SignatureContextProvider>

          {/* Additional notes & Payment terms */}
          <FormTextarea name='details.additionalNotes' label={_t('form.steps.summary.additionalNotes')} placeholder='Your additional notes' />
          <FormTextarea name='details.paymentTerms' label={_t('form.steps.summary.paymentTerms')} placeholder='Ex: Net 30' />
        </div>

        {/* Final charges */}
        <Charges />
      </div>
    </section>
  )
}

export default InvoiceSummary
