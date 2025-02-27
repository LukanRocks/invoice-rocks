// React
import { useMemo } from 'react'

// i18n
import { LanguageSelector } from '@/i18n'

// Components
import { Logo, Debug } from '@/app/components'

// Theme
import { ThemeSwitcher } from '@/theme'

export const NavBar = () => {
  const isDevelopmentEnv = useMemo(() => {
    return process.env.NODE_ENV === 'development'
  }, [])

  return (
    <header className='lg:container z-[99]'>
      <nav className='flex flex-wrap justify-between items-center px-5 gap-5'>
        <Logo />

        {isDevelopmentEnv && <Debug />}

        <LanguageSelector />

        <ThemeSwitcher />
      </nav>
    </header>
  )
}
