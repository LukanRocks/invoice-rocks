'use client'

// React
import { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'

// Mantine
import { Text, Button } from '@mantine/core'

// Lib
import { FORM_FILL_VALUES } from '@debug'

export const Debug = () => {
  const { reset, formState } = useFormContext()

  const isDevelopmentEnv = useMemo(() => {
    return process.env.NODE_ENV === 'development'
  }, [])

  if (isDevelopmentEnv) {
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
}
