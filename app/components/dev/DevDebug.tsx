'use client'

// Next
import Link from 'next/link'

// RHF
import { useFormContext } from 'react-hook-form'

// Component
import { BaseButton } from '@/app/components'

// Variables
import { FORM_FILL_VALUES } from '@/lib/variables'

const DevDebug = () => {
  const { reset, formState } = useFormContext()

  return (
    <div className='flex flex-col gap-1 p-1 border-2 border-red-500 rounded-md'>
      <b>DEV:</b>
      <p>Form State: {formState.isDirty ? 'Dirty' : 'Clean'}</p>

      <BaseButton tooltipLabel='Form Test Fill' variant='outline' onClick={() => reset(FORM_FILL_VALUES)}>
        Fill in the form
      </BaseButton>
    </div>
  )
}

export default DevDebug
