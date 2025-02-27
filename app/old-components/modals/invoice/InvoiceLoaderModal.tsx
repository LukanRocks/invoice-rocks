'use client'

import { useState } from 'react'

// ShadCn
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/old-stuff/ui/dialog'

// Components
import { SavedInvoicesList } from '@/app/old-components'
import { ImportJsonButton } from '@/app/old-components'

// Context
import { useInvoiceContext } from '@/old-stuff/contexts/InvoiceContext'

type InvoiceLoaderModalType = {
  children: React.ReactNode
}

const InvoiceLoaderModal = ({ children }: InvoiceLoaderModalType) => {
  const [open, setOpen] = useState(false)

  const { savedInvoices } = useInvoiceContext()

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader className='pb-2 border-b'>
          <DialogTitle>Saved Invoices</DialogTitle>
          <DialogDescription>
            <div className='space-y-2'>
              <p>You have {savedInvoices.length} saved invoices</p>
              <ImportJsonButton setOpen={setOpen} />
            </div>
          </DialogDescription>
        </DialogHeader>

        <SavedInvoicesList setModalState={setOpen} />
      </DialogContent>
    </Dialog>
  )
}

export default InvoiceLoaderModal
