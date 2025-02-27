'use client'

// RHF
import { useFormContext } from 'react-hook-form'

// Mantine
import { Text, Button } from '@mantine/core'

// Variables
import { FORM_FILL_VALUES } from '@/old-stuff/old-lib/variables'

export const Debug = () => {
  const { reset, formState } = useFormContext()

  return (
    <div className='flex flex-col gap-1 p-1 border-2 border-red-500 rounded-md'>
      <Text fw={700} ta='center' c='red'>
        DEV
      </Text>
      <Text>Form State: {formState.isDirty ? 'Dirty' : 'Clean'}</Text>
      <Button onClick={() => reset(FORM_FILL_VALUES)}>Fill form</Button>
    </div>
  )
}
