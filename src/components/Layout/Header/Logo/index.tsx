import Link from 'next/link'
import React from 'react'

const Logo: React.FC = () => {
  return (
    <Link href="/" className='font-mona font-bold logo md:text-3xl'>
        Axora
    </Link>
  )
}

export default Logo
