'use client'

// RHF
import { useFormContext } from 'react-hook-form'

// ShadCn
import { Form } from '@/old-stuff/ui/form'

// Components
import { InvoiceActions, InvoiceForm } from '@/app/old-components'

// Context
import { useInvoiceContext } from '@/old-stuff/contexts/InvoiceContext'

// Types
import { InvoiceType } from '@/old-stuff/old-lib/types'

const InvoiceMain = () => {
  const { handleSubmit } = useFormContext<InvoiceType>()

  // Get the needed values from invoice context
  const { onFormSubmit } = useInvoiceContext()

  return (
    <>
      <Form {...useFormContext<InvoiceType>()}>
        <form
          onSubmit={handleSubmit(onFormSubmit, (err) => {
            console.log(err)
          })}
        >
          <div className='flex flex-wrap'>
            <InvoiceForm />
            <InvoiceActions />
          </div>
        </form>
      </Form>
    </>
  )
}

export default InvoiceMain
