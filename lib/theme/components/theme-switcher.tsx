'use client'

// Mantine
import { useMantineColorScheme, ActionIcon } from '@mantine/core'

// Icons
import { Moon, Sun } from 'lucide-react'

export const ThemeSwitcher = () => {
  const { colorScheme, setColorScheme, clearColorScheme } = useMantineColorScheme({ keepTransitions: true })

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
  }

  // TODO: Animate icon transition
  return (
    <ActionIcon size='lg' onClick={() => toggleColorScheme()}>
      {colorScheme === 'dark' ? <Sun className='h-[1.2rem] w-[1.2rem]' /> : <Moon className='h-[1.2rem] w-[1.2rem]' />}
    </ActionIcon>
  )
}
