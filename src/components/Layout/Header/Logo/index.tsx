import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center logo">
      <Image
        src="/images/logo/logo-header.png"
        alt="Flowvim Logo"
        width={400}      // Larger base width for Next.js optimization
        height={160}     // Maintains ~2.5:1 aspect ratio (adjust if needed)
        priority
        className="h-14 w-auto md:h-20 lg:h-24"   // Significantly bigger
      />
    </Link>
  )
}

export default Logo