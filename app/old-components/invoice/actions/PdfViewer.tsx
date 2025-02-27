'use client'

// Debounce
import { useDebounce } from 'use-debounce'

// RHF
import { useFormContext } from 'react-hook-form'

// Components
import { FinalPdf, LivePreview } from '@/app/old-components'

// Contexts
import { useInvoiceContext } from '@/old-stuff/contexts/InvoiceContext'

// Types
import { InvoiceType } from '@/old-stuff/old-lib/types'

const PdfViewer = () => {
  const { invoicePdf } = useInvoiceContext()

  const { watch } = useFormContext<InvoiceType>()

  const [debouncedWatch] = useDebounce(watch, 1000)
  const formValues = debouncedWatch()

  return <div className='my-3'>{invoicePdf.size == 0 ? <LivePreview data={formValues} /> : <FinalPdf />}</div>
}

export default PdfViewer
