// Lib
import { LanguageSelector } from '@i18n'
import { ThemeSwitcher } from '@theme'
import { Debug } from '@debug'
import { Logo } from '@components'

export const NavBar = () => (
  <header className='lg:container z-[99]'>
    <nav className='flex flex-wrap justify-between items-center px-5 gap-5'>
      <Logo />

      <Debug />

      <LanguageSelector />

      <ThemeSwitcher />
    </nav>
  </header>
)
