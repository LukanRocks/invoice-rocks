// React
import { useMemo } from 'react'

// Next
import Link from 'next/link'
import Image from 'next/image'

// Assets
import File from '@/public/img/logo.svg'

// Lib
import { APP_NAME } from '@/lib/variables'

export const Logo = () => {
  return (
    <Link href='/'>
      <Image src={File} alt={`${APP_NAME} Logo`} width={190} height={100} loading='eager' />
    </Link>
  )
}
