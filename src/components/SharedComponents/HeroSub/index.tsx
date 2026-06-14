// components/SharedComponents/HeroSub.tsx
import React, {FC} from 'react'
import Breadcrumb from '@/components/Breadcrumb'
import { BreadcrumbLinks } from '@/type/breadcrumb'

interface HeroSubProps{
    title: string;
    description: string;
    breadcrumbLinks:BreadcrumbLinks[];
}

const HeroSub: FC<HeroSubProps> = ({title, description, breadcrumbLinks}) => {
    return (
        <section className='bg-cover relative overflow-x-hidden section-banner'>
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black/70 z-0"></div>
            
            <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 relative z-10 h-full flex items-center">
                <div className="text-center w-full pt-16 pb-20">
                    <h1 className="text-white text-5xl lg:text-6xl font-chakrapetch font-semibold mb-4">
                        {title}
                    </h1>
                    {description && <p className="text-white/90 text-xl">{description}</p>}
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full">
                    <Breadcrumb links={breadcrumbLinks} />
                </div>
            </div>
        </section>
    )
}

export default HeroSub;